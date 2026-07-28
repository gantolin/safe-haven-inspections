import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-royal-palm-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-royal-palm-beach",
      title: "Mold Inspection Royal Palm Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Royal Palm Beach, FL. Licensed assessors, AIHA-accredited lab results, and honest reports for buyers and homeowners.",
    }),
  component: RPBPage,
});

function RPBPage() {
  return (
    <CityMoldPage
      city="Royal Palm Beach"
      county="Palm Beach County"
      intro="A mold inspection in Royal Palm Beach, FL identifies hidden mold, active moisture problems, and indoor air-quality issues in your home — documented by a state-licensed assessor. Safe Haven Inspections works only in inspection and testing, so Royal Palm Beach homeowners get a straightforward, third-party answer."
      localAngle={{
        heading: "What we find in Royal Palm Beach homes",
        paragraphs: [
          "Royal Palm Beach's suburban communities — Madison Green, La Mancha, Counterpoint Estates, and the surrounding subdivisions — share a lot of building details: tile-roof lanais, screen enclosures, and inset pool decks. Those details concentrate rainwater at predictable spots, and we know exactly where to look for hidden moisture behind stucco and drywall.",
          "Many Royal Palm Beach HOA and condo communities also share HVAC design choices, so a pattern we've seen once tends to show up again. That local familiarity means faster inspections and more accurate recommendations for you.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-wellington", label: "Wellington" },
        { to: "/mold-inspection-loxahatchee", label: "Loxahatchee" },
      ]}
    />
  );
}