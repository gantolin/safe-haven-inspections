import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-loxahatchee")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-loxahatchee",
      title: "Mold Inspection Loxahatchee FL | Licensed Mold Assessor",
      description:
        "Licensed, independent mold inspection and testing in Loxahatchee and The Acreage. Third-party lab results for well-water and post-storm moisture concerns.",
    }),
  component: LoxahatcheePage,
});

function LoxahatcheePage() {
  return (
    <CityMoldPage
      city="Loxahatchee"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "We're on well water and septic out in Loxahatchee. Does that change the inspection?",
          a: "It changes what we prioritize. There's no municipal water system out here — homes draw from the aquifer through private wells, with septic on site and drainage handled through the Indian Trail Improvement District. Practically, that means pressure tanks, filtration, and softener equipment living indoors in a garage or utility closet, and those are classic slow-leak locations that go unnoticed for months. We check that equipment and the wall and slab around it as standard. After storms we also find elevated readings at window frames, attics, and garage-to-house transitions long after visible water is gone.",
        },
        {
          q: "Is Loxahatchee in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Loxahatchee — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
      ]}
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