import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent redirect: /mold-inspection now lives under /services.
export const Route = createFileRoute("/mold-inspection")({
  beforeLoad: () => {
    throw redirect({ to: "/services/mold-inspection", statusCode: 301 });
  },
});
