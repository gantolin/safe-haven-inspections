import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // GitHub Pages serves each route from a folder index, so /about 301s to
    // /about/. Emitting the bare form from every <Link> pointed ~862 internal
    // links at a redirect. Render the trailing-slash form, which returns 200.
    trailingSlash: "always",
  });

  return router;
};
