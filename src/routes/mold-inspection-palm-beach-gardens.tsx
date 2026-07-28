import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-palm-beach-gardens")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-palm-beach-gardens",
      title: "Mold Inspection Palm Beach Gardens FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Palm Beach Gardens, FL. Lab-backed reports for PGA and golf-course communities, HOA properties, and screened-enclosure homes.",
    }),
  component: PalmBeachGardensPage,
});

function PalmBeachGardensPage() {
  return (
    <CityMoldPage
      city="Palm Beach Gardens"
      county="Palm Beach County"
      intro="A mold inspection in Palm Beach Gardens, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Palm Beach Gardens mold assessor — objective, lab-backed, and never selling remediation."
      localAngle={{
        heading: "Palm Beach Gardens-specific moisture concerns",
        paragraphs: [
          "The PGA National, BallenIsles, and Mirasol golf-community footprint defines Palm Beach Gardens' housing profile — homes sited on the water hazards, cart-path adjacent, or lanai-facing the course. Aggressive fairway irrigation combined with tight lot grading pushes water back toward slab edges, and we routinely find damp wicking behind first-floor base cabinets, at powder-room walls closest to the lanai, and along garage-to-house transition slabs.",
          "The other Palm Beach Gardens pattern is the large screened enclosure. Pool cages and summer-kitchen enclosures tie into the house wall through a stucco-and-caulk joint that hardens and cracks with age. Water sits behind that joint against the sheathing, and by the time an interior stain appears, the wall cavity behind it is already compromised. Our inspection includes moisture mapping at every enclosure tie-in — not just the visible interior surface.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-jupiter", label: "Jupiter" },
        { to: "/mold-inspection-west-palm-beach", label: "West Palm Beach" },
        { to: "/mold-inspection-riviera-beach", label: "Riviera Beach" },
      ]}
    />
  );
}