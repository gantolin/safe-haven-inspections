import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/data/posts";
import { SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;

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
        const postPaths = posts.map((p) => `/blog/${p.slug}`);
        const paths = [...staticPaths, ...postPaths];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>${p === "/" ? "weekly" : "monthly"}</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`,
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
