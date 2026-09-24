import { createFileRoute } from "@tanstack/react-router";
import { NotFoundContent } from "@/components/not-found";

// Prerendered only so scripts/copy-404.mjs can turn it into dist/client/404.html.
// Kept out of the sitemap and out of the index.
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page not found | Safe Haven Inspections" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundContent,
});
