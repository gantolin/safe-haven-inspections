import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/data/posts";
import { SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;

// Bump this when you materially change static page copy. Google ignores
// <lastmod> values it decides are untrustworthy, so a date that never moves
// (or one that moves on every deploy) is worse than none at all. Blog URLs use
// their own post date instead.
const STATIC_CONTENT_UPDATED = "2026-07-31";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/about",
          "/services",
          "/services/mold-inspection",
          "/services/mold-testing",
          "/services/air-quality-testing",
          "/services/surface-sampling",
          "/services/thermal-imaging",
          "/services/water-damage-inspection",
          "/services/humidity-testing",
          "/services/post-remediation-verification",
          "/services/real-estate-mold-inspection",
          "/services/commercial-mold-inspection",
          "/services/mold-assessment-report",
          "/service-areas",
          "/realtors",
          "/blog",
          "/contact",
          "/mold-inspection-wellington",
          "/mold-inspection-royal-palm-beach",
          "/mold-inspection-loxahatchee",
          "/mold-inspection-stuart",
          "/mold-inspection-palm-city",
          "/mold-inspection-jensen-beach",
          "/mold-inspection-hobe-sound",
          "/mold-inspection-port-salerno",
          "/mold-inspection-fort-lauderdale",
          "/mold-inspection-hollywood",
          "/mold-inspection-pembroke-pines",
          "/mold-inspection-coral-springs",
          "/mold-inspection-pompano-beach",
          "/mold-inspection-davie",
          "/mold-inspection-plantation",
          "/mold-inspection-sunrise",
          "/mold-inspection-deerfield-beach",
          "/mold-inspection-weston",
          "/mold-inspection-west-palm-beach",
          "/mold-inspection-boca-raton",
          "/mold-inspection-delray-beach",
          "/mold-inspection-boynton-beach",
          "/mold-inspection-jupiter",
          "/mold-inspection-palm-beach-gardens",
          "/mold-inspection-lake-worth-beach",
          "/mold-inspection-greenacres",
          "/mold-inspection-riviera-beach",
        ];
        const entries = [
          ...staticPaths.map((path) => ({ path, lastmod: STATIC_CONTENT_UPDATED })),
          // Blog posts carry a real publication date, so use it.
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            ({ path, lastmod }) =>
              `  <url><loc>${BASE_URL}${path}</loc><lastmod>${lastmod}</lastmod><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq><priority>${path === "/" ? "1.0" : "0.7"}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
