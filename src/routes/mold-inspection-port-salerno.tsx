import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-port-salerno")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-port-salerno",
      title: "Mold Inspection Port Salerno FL | Licensed Mold Assessor",
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
      localFaqs={[
        {
          q: "Our Port Salerno home is near the Manatee Pocket. What does that mean for moisture?",
          a: "Proximity to the Pocket, the canals, and the St. Lucie Inlet means a high water table and a relentless salt-laden onshore breeze — so we routinely find slab-level moisture alongside corroded exterior hardware and flashings. The housing mix here is unusually varied for a small footprint: older CBS single-family, mid-century wood-frame cottages, and a healthy stock of manufactured and mobile homes. Each fails differently — manufactured homes especially, where underbelly moisture and skirting ventilation matter far more than they would in a CBS house.",
        },
        {
          q: "Is Port Salerno in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Port Salerno — in Martin County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
      ]}
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