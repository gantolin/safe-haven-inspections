// Reusable SEO / head helpers for Safe Haven Inspections.
// All canonical + og:url values must be ABSOLUTE (full https URL).

export const SITE_URL = "https://www.safehaveninspectionsllc.com";
export const BUSINESS_PHONE = "+1-561-632-6387";
export const BUSINESS_EMAIL = "safehaveninspectionsllc@gmail.com";

export interface PageMetaInput {
  path: string; // e.g. "/mold-inspection"
  title: string; // <= 60 chars, primary keyword front-loaded
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  ogImage?: string; // absolute or asset-URL
  noindex?: boolean;
}

/**
 * GitHub Pages serves every route from a folder index (`/about/index.html`), so
 * the bare `/about` permanently redirects to `/about/`. Canonical, og:url and
 * every JSON-LD `url` / `@id` must therefore name the trailing-slash form, the
 * one that actually returns 200 — otherwise every page canonicalises to a
 * redirect and Google is pointed at a URL that never resolves directly.
 *
 * Asset paths are left alone: `/og-image.jpg/` would 404. Anything whose last
 * segment carries a file extension is treated as an asset.
 */
export function withTrailingSlash(path: string): string {
  if (path.endsWith("/")) return path;
  const lastSegment = path.slice(path.lastIndexOf("/") + 1);
  if (lastSegment.includes(".")) return path;
  return `${path}/`;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${withTrailingSlash(p)}`;
}

export function pageMeta(input: PageMetaInput) {
  const url = absoluteUrl(input.path);
  const meta: Array<Record<string, string>> = [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:title", content: input.ogTitle ?? input.title },
    { property: "og:description", content: input.ogDescription ?? input.description },
    { property: "og:url", content: url },
    { property: "og:type", content: input.ogType ?? "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
  if (input.ogImage) {
    meta.push({ property: "og:image", content: absoluteUrl(input.ogImage) });
    meta.push({ name: "twitter:image", content: absoluteUrl(input.ogImage) });
  }
  if (input.noindex) {
    meta.push({ name: "robots", content: "noindex" });
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

/**
 * Aggregate rating, sourced ONLY from reviews actually displayed on this site.
 *
 * Safe Haven shows 5 real 5-star Google reviews in <GoogleReviews />. Those 5
 * are what this describes — nothing here is extrapolated from the Google
 * Business Profile, because an unverifiable rating in structured data is a
 * Google policy violation and a manual-action risk.
 *
 * Keep `reviewCount` in sync with the REVIEWS array in
 * src/components/google-reviews.tsx. If you add a 6th testimonial there, this
 * becomes 6 — not before.
 *
 * NOTE ON RICH RESULTS: Google does not render review stars for self-serving
 * LocalBusiness reviews (reviews a business collects about itself). This markup
 * is valid and useful for entity understanding, but do not expect SERP stars
 * from it. Stars come from the Google Business Profile, not from this file.
 */
export const ON_PAGE_REVIEWS = { ratingValue: 5, reviewCount: 5 } as const;

export function aggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    ratingValue: String(ON_PAGE_REVIEWS.ratingValue),
    reviewCount: String(ON_PAGE_REVIEWS.reviewCount),
    bestRating: "5",
    worstRating: "1",
  };
}

/**
 * The three counties Safe Haven covers, as `areaServed` entries.
 * Shared so the sitewide node and every Service node agree exactly.
 */
const COUNTIES_SERVED = [
  { "@type": "AdministrativeArea", name: "Martin County, FL" },
  { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
  { "@type": "AdministrativeArea", name: "Broward County, FL" },
];

// Sitewide LocalBusiness schema (place on __root.tsx).
//
// MODELED AS A SERVICE-AREA BUSINESS (SAB): work happens at the client's
// property, so there is deliberately NO `streetAddress` here.
//
// NOTE: the Google Business Profile is NOT hidden-address. It publicly
// displays "5880 Corson Pl, Greenacres, FL 33463".
//
// On the city name: it is GREENACRES. Corrected by the owner 2026-09-06.
// "Lake Worth" and "Lake Worth Beach" were both wrong here. 33463 is the
// Greenacres profile in this repo's own `city-profiles.ts` (33460/33461 are
// the Lake Worth Beach ones), and the Semrush Map Rank Tracker campaign also
// records the listing as Greenacres. Lake Worth Beach remains a legitimate
// SERVICE-AREA city with its own page; it is simply not where the business
// is. Do not "normalise" this back — NAP checks compare it character for
// character against the profile.
//
// Omitting `streetAddress` while the GBP publishes one is a deliberate,
// defensible middle ground: the locality now agrees, and nothing here
// re-publishes the street line. Adding the full street address is a judgement
// call for the owner — it is already public on the GBP, and in this market
// most map-pack winners do display one — so it is left out until asked for.
//
// `openingHoursSpecification` was previously omitted pending confirmation that
// published hours match the GBP exactly. Confirmed 2026-08-15: the GBP shows
// "Open 24 hours", which is what is declared below.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: "Safe Haven Inspections LLC",
    alternateName: "Safe Haven Inspections",
    url: absoluteUrl("/"),
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    description:
      "Independent, family-operated, state-licensed mold inspection, testing, and indoor air-quality assessment company serving Martin, Palm Beach & Broward Counties. Founded and run by a lifelong South Florida resident whose background is in mold remediation.",
    address: {
      "@type": "PostalAddress",
      // The landing page now displays this address and embeds a map of it, and
      // the GBP displays it publicly too, so omitting it here would leave the
      // structured data saying less than the page it describes.
      streetAddress: "5880 Corson Pl",
      addressLocality: "Greenacres",
      addressRegion: "FL",
      postalCode: "33463",
      addressCountry: "US",
    },
    areaServed: COUNTIES_SERVED,
    serviceArea: COUNTIES_SERVED,
    // Matches the GBP exactly: "Open 24 hours", every day.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: aggregateRatingSchema(),
    knowsAbout: [
      "Mold inspection",
      "Mold testing",
      "Indoor air quality assessment",
      "Post-remediation verification",
      "Thermal imaging moisture detection",
      "Asbestos testing",
      "Asbestos inspection",
    ],
    // Florida DBPR mold assessor license numbers currently listed on site.
    identifier: [
      { "@type": "PropertyValue", name: "FL Mold Assessor License", value: "MRSA3366" },
      { "@type": "PropertyValue", name: "FL Mold Remediator License", value: "MRSR3536" },
      { "@type": "PropertyValue", name: "Certification", value: "Certified Asbestos Inspector" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      contactType: "customer service",
      areaServed: ["US-FL"],
      availableLanguage: ["English"],
    },
  };
}

export interface CityBusinessSchemaInput {
  city: string;
  county: string;
  path: string;
  geo: { lat: number; lng: number };
  zips: string[];
  description: string;
}

/**
 * Per-city LocalBusiness node.
 *
 * Distinct @id per city so it reads as the same business serving a specific
 * place rather than 27 duplicate business entities. `geo` + `serviceArea`
 * give Google an explicit centre and radius for the city, which is the signal
 * a service-area business has instead of a street address.
 */
export function cityBusinessSchema(input: CityBusinessSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${absoluteUrl(input.path)}#business`,
    parentOrganization: { "@id": `${SITE_URL}/#business` },
    name: `Safe Haven Inspections LLC, Mold Inspection in ${input.city}, FL`,
    url: absoluteUrl(input.path),
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    description: input.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: input.city,
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: input.geo.lat,
      longitude: input.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: `${input.city}, FL` },
      { "@type": "AdministrativeArea", name: `${input.county}, FL` },
      ...input.zips.map((z) => ({ "@type": "PostalCodeRangeSpecification", postalCodeBegin: z, postalCodeEnd: z })),
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: input.geo.lat,
        longitude: input.geo.lng,
      },
      geoRadius: "16000",
    },
    aggregateRating: aggregateRatingSchema(),
    identifier: [
      { "@type": "PropertyValue", name: "FL Mold Assessor License", value: "MRSA3366" },
      { "@type": "PropertyValue", name: "FL Mold Remediator License", value: "MRSR3536" },
    ],
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/**
 * BreadcrumbList schema. Lets Google render a breadcrumb trail in the SERP
 * instead of the raw URL. Pass the full trail including Home.
 */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}

/**
 * Service schema for an individual service page, tied back to the sitewide
 * LocalBusiness node via @id so the two are understood as one entity.
 */
export function serviceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.serviceType ? { serviceType: input.serviceType } : {}),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Martin County, FL" },
      { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
      { "@type": "AdministrativeArea", name: "Broward County, FL" },
    ],
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export interface ArticleSchemaInput {
  path: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export function articleSchema(input: ArticleSchemaInput) {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: input.headline,
    description: input.description,
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
    author: {
      "@type": "Organization",
      name: input.authorName ?? "Safe Haven Inspections LLC",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Safe Haven Inspections LLC",
      url: absoluteUrl("/"),
    },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

/**
 * Serialise a JSON-LD payload for embedding in a <script> block.
 *
 * JSON.stringify does not escape "<", so a value containing "</script>" would
 * close the block early and everything after it would parse as markup. Nothing
 * in the current data is attacker-controlled, but this is the sink that turns a
 * content edit into an XSS, so escape at the boundary rather than relying on
 * every future caller passing trusted input.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: serializeJsonLd(data),
  };
}