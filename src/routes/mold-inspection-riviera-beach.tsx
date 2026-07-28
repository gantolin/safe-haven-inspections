import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-riviera-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-riviera-beach",
      title: "Mold Inspection Riviera Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Riviera Beach, FL. Lab-backed reports for Singer Island condos, older inland homes, and high-water-table properties.",
    }),
  component: RivieraBeachPage,
});

function RivieraBeachPage() {
  return (
    <CityMoldPage
      city="Riviera Beach"
      county="Palm Beach County"
      intro="A mold inspection in Riviera Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Riviera Beach mold assessor — objective, lab-backed, no remediation upsell."
      localAngle={{
        heading: "Riviera Beach-specific moisture concerns",
        paragraphs: [
          "Riviera Beach splits into two distinct problem sets. Singer Island's oceanfront and Intracoastal-side condominium towers see one of the harshest salt-air loads on the county — corroded packaged HVAC units, degraded window flashings, and mold at cold-supply diffusers on the water-facing side of high-rise units. Seasonal-occupancy thermostat behavior reliably pushes indoor humidity to the point where those cold surfaces bloom.",
          "West of the Intracoastal, Riviera Beach's older inland neighborhoods sit on a persistently high water table. In mid-century single-family homes we routinely find slab-level moisture wicking six to twelve inches up interior walls, mold behind base cabinets in kitchens and laundry rooms, and damp bloom at the base of garage-to-house transition slabs. Our inspection is calibrated for both the coastal condo and inland slab patterns — not one generic checklist.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-west-palm-beach", label: "West Palm Beach" },
        { to: "/mold-inspection-palm-beach-gardens", label: "Palm Beach Gardens" },
        { to: "/mold-inspection-jupiter", label: "Jupiter" },
      ]}
    />
  );
}