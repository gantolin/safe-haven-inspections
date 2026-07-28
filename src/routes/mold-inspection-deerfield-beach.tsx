import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-deerfield-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-deerfield-beach",
      title: "Mold Inspection Deerfield Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Deerfield Beach, FL. Lab-backed reports for coastal condos, 55+ communities, and seasonally occupied properties.",
    }),
  component: DeerfieldBeachPage,
});

function DeerfieldBeachPage() {
  return (
    <CityMoldPage
      city="Deerfield Beach"
      county="Broward County"
      intro="A mold inspection in Deerfield Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Deerfield Beach mold assessor — objective, lab-backed reporting only."
      localAngle={{
        heading: "Deerfield Beach-specific moisture concerns",
        paragraphs: [
          "Deerfield Beach is home to one of the largest 55+ community footprints in Broward — Century Village and the surrounding low-rise condominium developments. Seasonal occupancy is the dominant moisture driver here: units sit closed for months at 78-82°F, indoor humidity climbs into the 70s, and mold establishes on closet walls, behind headboards, and around bathroom exhaust penetrations. The visible surface is often only a fraction of the actual footprint.",
          "Along Ocean Way and the beach, older mid-rise condos add salt-air corrosion of exterior HVAC packaged units and rusted through-wall sleeves to the picture. When those units short-cycle or lose refrigerant, humidity spikes indoors and mold appears on cold-supply diffusers within days. Our inspection is calibrated for closed-up seasonal units and coastal HVAC failure patterns specifically.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-pompano-beach", label: "Pompano Beach" },
        { to: "/mold-inspection-coral-springs", label: "Coral Springs" },
        { to: "/mold-inspection-fort-lauderdale", label: "Fort Lauderdale" },
      ]}
    />
  );
}