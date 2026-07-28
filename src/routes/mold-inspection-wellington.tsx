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