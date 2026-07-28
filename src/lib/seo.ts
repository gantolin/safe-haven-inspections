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

// Sitewide LocalBusiness schema (place on __root.tsx).
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
      "Independent, state-licensed mold inspection, testing, and indoor air-quality assessment company serving Martin, Palm Beach & Broward Counties.",
    // TODO: Landon to confirm street address for LocalBusiness schema
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Martin County, FL" },
      { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
      { "@type": "AdministrativeArea", name: "Broward County, FL" },
    ],
    // Florida DBPR mold assessor license numbers currently listed on site.
    // [LANDON TO CONFIRM: primary DBPR mold assessor license # for schema]
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