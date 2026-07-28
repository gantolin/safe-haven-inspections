import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-delray-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-delray-beach",
      title: "Mold Inspection Delray Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Delray Beach, FL. Lab-backed reports for historic downtown bungalows, beach rentals, and older homes with additions.",
    }),
  component: DelrayBeachPage,
});

function DelrayBeachPage() {
  return (
    <CityMoldPage
      city="Delray Beach"
      county="Palm Beach County"
      intro="A mold inspection in Delray Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Delray Beach mold assessor — testing and reporting only, no remediation upsell."
      localAngle={{
        heading: "Delray Beach-specific moisture concerns",
        paragraphs: [
          "Delray Beach's core issue is layered additions. The historic bungalows around Atlantic Avenue, Osceola Park, and Del-Ida Park have almost all been added onto — often multiple times — and every addition tie-in is a potential moisture failure point. We consistently find mold at roof-to-wall transitions where a new roof plane meets the original, at floor-level joints where a converted porch meets the original slab, and in walls that were once exterior and are now interior partitions.",
          "East of the Intracoastal, beach-side rentals bring the classic vacation-property pattern: high thermostat set-points during turnovers, tenants who don't run bath fans, and closed-up units between bookings. The result is chronic condensation on cold-supply diffusers and mold in primary closets, exactly where guests won't look. Our inspection is calibrated for both the additive-construction history and short-term-rental humidity load.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-boca-raton", label: "Boca Raton" },
        { to: "/mold-inspection-boynton-beach", label: "Boynton Beach" },
        { to: "/mold-inspection-lake-worth-beach", label: "Lake Worth Beach" },
      ]}
    />
  );
}