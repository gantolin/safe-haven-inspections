// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // No server runtime: the site is prerendered to static HTML and served by
  // GitHub Pages. Nitro's cloudflare preset would emit a worker bundle into
  // .output/ and move the build away from the layout TanStack's prerenderer
  // expects (dist/server/server.js), which breaks prerendering.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Render every route to static HTML at build time so the site can be served
    // by a plain static host (GitHub Pages) with no server runtime.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    // /sitemap.xml is a server route and nothing links to it, so the crawler
    // never reaches it. robots.txt advertises it, so it has to exist as a real
    // file — list it explicitly to render it out at build time.
    pages: [{ path: "/sitemap.xml" }],
  },
});
