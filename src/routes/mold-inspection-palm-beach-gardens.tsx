import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-palm-beach-gardens")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-palm-beach-gardens",
      title: "Mold Inspection Palm Beach Gardens FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Palm Beach Gardens, FL. Lab-backed reports for PGA and golf-course communities and screened-enclosure homes.",
    }),
  component: PalmBeachGardensPage,
});

function PalmBeachGardensPage() {
  return (
    <CityMoldPage
      city="Palm Beach Gardens"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "We back onto a golf course in Palm Beach Gardens. Does that affect moisture?",
          a: "It does. Homes in PGA National, BallenIsles, and Mirasol sited on water hazards or fairway-adjacent get aggressive irrigation running against the property daily, and over-spray onto stucco elevations is a steady load rather than a one-off event. The other Palm Beach Gardens signature is the large screened enclosure — pool cages and summer kitchens tie into the house wall through a stucco-and-caulk joint that hardens and cracks with age. Water stands behind that joint, and behind it is usually where we find growth.",
        },
        {
          q: "Is Palm Beach Gardens in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Palm Beach Gardens — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
      ]}
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