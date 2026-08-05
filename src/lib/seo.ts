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

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
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
// property, so there is deliberately NO `streetAddress`. This mirrors a
// hidden-address Google Business Profile. Do not add a residential street
// address here — it would contradict the GBP listing and re-expose the address
// that WHOIS privacy was enabled to hide.
//
// `openingHoursSpecification` is intentionally omitted: hours published here
// that disagree with the GBP actively damage local ranking, and the real hours
// are unconfirmed. Add them only once they match the GBP exactly.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: "Safe Haven Inspections LLC",
    alternateName: "Safe Haven Inspections",
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    description:
      "Independent, family-operated, state-licensed mold inspection, testing, and indoor air-quality assessment company serving Martin, Palm Beach & Broward Counties. Founded and run by a lifelong South Florida resident whose background is in mold remediation.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: COUNTIES_SERVED,
    serviceArea: COUNTIES_SERVED,
    aggregateRating: aggregateRatingSchema(),
    knowsAbout: [
      "Mold inspection",
      "Mold testing",
      "Indoor air quality assessment",
      "Post-remediation verification",
      "Thermal imaging moisture detection",
    ],
    // Florida DBPR mold assessor license numbers currently listed on site.
    identifier: [
      { "@type": "PropertyValue", name: "FL Mold Assessor License", value: "MRSA3366" },
      { "@type": "PropertyValue", name: "FL Mold Remediator License", value: "MRSR3536" },
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
    name: `Safe Haven Inspections LLC — Mold Inspection in ${input.city}, FL`,
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
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Safe Haven Inspections LLC",
      url: SITE_URL,
    },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}