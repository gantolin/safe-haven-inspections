import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-pompano-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-pompano-beach",
      title: "Mold Inspection Pompano Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Pompano Beach, FL. Lab-backed reports for beachfront condos, older inland homes, and flat-roof properties.",
    }),
  component: PompanoBeachPage,
});

function PompanoBeachPage() {
  return (
    <CityMoldPage
      city="Pompano Beach"
      county="Broward County"
      intro="A mold inspection in Pompano Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Pompano Beach mold assessor — inspection and testing only, no remediation upsell."
      localAngle={{
        heading: "Pompano Beach-specific moisture concerns",
        paragraphs: [
          "Pompano Beach splits neatly into two problem sets. Along A1A and the Intracoastal, older beachfront condos and mid-rises accumulate salt-air damage to window and door assemblies, showing up as mold at cold-supply diffusers, kitchen exterior walls, and inside built-in cabinetry facing the ocean side. Seasonal-rental thermostat behavior — warm setpoints while units sit empty — reliably pushes indoor humidity high enough for mold to establish.",
          "Inland, Pompano Beach's older single-family neighborhoods are heavy on flat and low-slope built-up roofs. Those roofs tolerate ponding until they don't, and by the time a stain reaches the ceiling drywall the sheathing above is often already compromised. Our inspection uses thermal imaging and moisture meters on ceilings and top-plate wall assemblies to catch these issues before the drywall gives out.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-fort-lauderdale", label: "Fort Lauderdale" },
        { to: "/mold-inspection-deerfield-beach", label: "Deerfield Beach" },
        { to: "/mold-inspection-coral-springs", label: "Coral Springs" },
      ]}
    />
  );
}