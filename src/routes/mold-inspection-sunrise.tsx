import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-sunrise")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-sunrise",
      title: "Mold Inspection Sunrise FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Sunrise, FL. Lab-backed reports for townhomes, condos, and planned communities with shared-wall HVAC condensation.",
    }),
  component: SunrisePage,
});

function SunrisePage() {
  return (
    <CityMoldPage
      city="Sunrise"
      county="Broward County"
      intro="A mold inspection in Sunrise, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Sunrise mold assessor — inspection only, no remediation upsell."
      localAngle={{
        heading: "Sunrise-specific moisture concerns",
        paragraphs: [
          "Sunrise has one of the highest concentrations of townhomes and attached condos in western Broward — Welleby, Sunrise Lakes, Sawgrass area developments. The pattern we see over and over is party-wall condensation: an attached unit next door runs their thermostat very cold, and the shared wall stays cool enough on your side that humid interior air condenses on it. That produces mold in closets and behind furniture against shared walls without any visible plumbing or roof leak.",
          "Sunrise's stock of single-story planned-community homes adds a second pattern: air handlers installed in unconditioned garages, with condensate lines that clog quietly for years. Slow drain-pan overflow saturates the pan itself, feeds mold on the air handler cabinet, and pushes contaminated air into the supply. We check the mechanical closet and coil directly as part of every Sunrise inspection.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-plantation", label: "Plantation" },
        { to: "/mold-inspection-coral-springs", label: "Coral Springs" },
        { to: "/mold-inspection-weston", label: "Weston" },
      ]}
    />
  );
}