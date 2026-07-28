import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-boynton-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-boynton-beach",
      title: "Mold Inspection Boynton Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Boynton Beach, FL. Lab-backed reports for 55+ communities, seasonally occupied condos, and older coastal properties.",
    }),
  component: BoyntonBeachPage,
});

function BoyntonBeachPage() {
  return (
    <CityMoldPage
      city="Boynton Beach"
      county="Palm Beach County"
      intro="A mold inspection in Boynton Beach, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Boynton Beach mold assessor — objective, lab-backed, no remediation upsell."
      localAngle={{
        heading: "Boynton Beach-specific moisture concerns",
        paragraphs: [
          "Boynton Beach's 55+ and snowbird communities west of I-95 — Leisureville, Palm Isles, Valencia — are dominated by seasonal occupancy. Units sit closed from May through October with thermostats pushed to 80°F or higher, indoor humidity climbs into the 70s, and mold establishes on closet walls, behind headboards, and around exhaust penetrations. What owners see on return is only a small fraction of the actual footprint.",
          "The older coastal condominium stock along Federal Highway and toward the Intracoastal adds a second pattern: original single-stage HVAC systems that cool but don't dehumidify well, packaged through-wall units corroded by decades of salt air, and drain pans that overflow long before anyone notices. Our inspection is calibrated for both the closed-up seasonal pattern and the aging-mechanical failure mode Boynton condos routinely show.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-delray-beach", label: "Delray Beach" },
        { to: "/mold-inspection-lake-worth-beach", label: "Lake Worth Beach" },
        { to: "/mold-inspection-greenacres", label: "Greenacres" },
      ]}
    />
  );
}