import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-hollywood")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-hollywood",
      title: "Mold Inspection Hollywood FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Hollywood, FL. Lab-backed reports for beach rentals, older bungalows, and coastal condos exposed to salt air.",
    }),
  component: HollywoodPage,
});

function HollywoodPage() {
  return (
    <CityMoldPage
      city="Hollywood"
      county="Broward County"
      intro="A mold inspection in Hollywood, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Hollywood mold assessor — inspection only, no remediation upsell."
      localAngle={{
        heading: "Hollywood-specific moisture concerns",
        paragraphs: [
          "Hollywood's stretch of coastline and the Broadwalk district drive one of the toughest environments in Broward for building envelopes. On beachfront and near-beach condos and single-family rentals we consistently document salt-corroded HVAC coils, degraded window and door flashings, and mold blooming at cold-supply registers — all classic signatures of chronic salt-air exposure combined with vacation-rental thermostat habits.",
          "Inland, Hollywood's pre-war and mid-century bungalow neighborhoods (Hollywood Lakes, Hollywood Hills) present a different pattern: original wood-frame construction, tile roofs that shed but don't seal like modern systems, and add-on Florida rooms with retrofit HVAC. We routinely find hidden moisture in these transition areas — around jalousie windows, at porch-to-house tie-ins, and behind added-on bathrooms.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-fort-lauderdale", label: "Fort Lauderdale" },
        { to: "/mold-inspection-pembroke-pines", label: "Pembroke Pines" },
        { to: "/mold-inspection-davie", label: "Davie" },
      ]}
    />
  );
}