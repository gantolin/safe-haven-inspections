import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-wellington")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-wellington",
      title: "Mold Inspection Wellington FL | Safe Haven",
      description:
        "Independent, state-licensed mold inspection and testing in Wellington, FL. Lab-backed reports for equestrian estates, family homes, and HOA properties.",
    }),
  component: WellingtonPage,
});

function WellingtonPage() {
  return (
    <CityMoldPage
      city="Wellington"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "Does Wellington's water table cause problems even without a leak?",
          a: "Regularly. Wellington sits on a high water table, and across Palm Beach Point, Aero Club, Olympia and the equestrian corridor we document slab-edge moisture intrusion in homes that have never had a plumbing failure or a roof leak. It's ground moisture moving up, not water coming down. Add aggressive HVAC set-points and you get condensation on top of it. Construction varies widely here — from stall-adjacent guest houses to two-story family homes — so we scope the inspection to the actual property rather than running a fixed checklist.",
        },
        {
          q: "Is Wellington in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Wellington — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
      ]}
      intro="A mold inspection in Wellington, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Wellington mold assessor — we test and report only, so your findings are objective and lab-backed."
      localAngle={{
        heading: "Wellington-specific moisture concerns",
        paragraphs: [
          "Wellington sits on a high water table. Between Palm Beach Point estates, Aero Club, Olympia, and the equestrian corridor, we regularly document slab-edge moisture intrusion, condensation around aggressive HVAC set-points, and stucco-behind-drywall staining that owners never see until a wall is opened up.",
          "Wellington's mix of large estates and newer master-planned subdivisions means construction details vary widely. Our inspection process is tailored to the property — from stall-adjacent guest houses to two-story family homes — so nothing generic ends up in your report.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-royal-palm-beach", label: "Royal Palm Beach" },
        { to: "/mold-inspection-loxahatchee", label: "Loxahatchee" },
      ]}
    />
  );
}