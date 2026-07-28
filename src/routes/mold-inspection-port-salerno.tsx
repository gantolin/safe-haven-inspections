import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-port-salerno")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-port-salerno",
      title: "Mold Inspection Port Salerno FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Port Salerno, FL. Lab-backed reports for waterfront homes, older CBS builds, and manufactured housing.",
    }),
  component: PortSalernoPage,
});

function PortSalernoPage() {
  return (
    <CityMoldPage
      city="Port Salerno"
      county="Martin County"
      intro="A mold inspection in Port Salerno, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Port Salerno mold assessor — inspection and testing only, so what you get is an unbiased answer."
      localAngle={{
        heading: "Port Salerno-specific moisture concerns",
        paragraphs: [
          "Port Salerno's working-waterfront character means many homes sit close to the Manatee Pocket, canals, and the St. Lucie Inlet — where the water table runs high and salt-laden onshore breezes are relentless. We routinely find slab-level moisture wicking into interior walls, corroded HVAC coils, and mold at the base of stucco elevations facing prevailing winds.",
          "The housing mix is also unusually varied for such a small footprint: older CBS single-family homes, mid-century wood-frame cottages, and a healthy stock of manufactured and mobile homes. Each has its own moisture failure modes — belly-board saturation and skirting mold on manufactured homes, aging tie-beam leaks on CBS, and rot at wood plates on frame builds. Our inspection is calibrated to whichever construction type your property actually is.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-stuart", label: "Stuart" },
        { to: "/mold-inspection-jensen-beach", label: "Jensen Beach" },
        { to: "/mold-inspection-hobe-sound", label: "Hobe Sound" },
      ]}
    />
  );
}