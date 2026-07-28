import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-loxahatchee")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-loxahatchee",
      title: "Mold Inspection Loxahatchee FL | Safe Haven",
      description:
        "Licensed, independent mold inspection and testing in Loxahatchee and The Acreage. Third-party lab results for well-water properties and post-storm moisture concerns.",
    }),
  component: LoxahatcheePage,
});

function LoxahatcheePage() {
  return (
    <CityMoldPage
      city="Loxahatchee"
      county="Palm Beach County"
      intro="A mold inspection in Loxahatchee, FL is an on-site, licensed assessment of your home for active mold growth, hidden moisture, and elevated indoor spore levels. Safe Haven Inspections is independent and does inspection and testing only — so families in Loxahatchee and The Acreage get an honest answer, not a sales pitch."
      localAngle={{
        heading: "Loxahatchee and The Acreage: what makes moisture different out here",
        paragraphs: [
          "Loxahatchee and The Acreage properties often sit on well-water and septic, on larger parcels, with a mix of custom-built and older manufactured homes. That combination — plus South Florida humidity — pushes indoor humidity levels up and creates the exact conditions where mold takes hold behind cabinetry, drywall, and around AC air handlers.",
          "Post-storm moisture is another Loxahatchee reality. After a wind or flood event, we frequently document elevated readings around window frames, attics, and garage-to-house transitions long after the visible water is gone. An independent inspection turns those unknowns into a documented, lab-backed picture.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-wellington", label: "Wellington" },
        { to: "/mold-inspection-royal-palm-beach", label: "Royal Palm Beach" },
      ]}
    />
  );
}