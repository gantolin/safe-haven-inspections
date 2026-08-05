import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-royal-palm-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-royal-palm-beach",
      title: "Mold Inspection Royal Palm Beach FL | Licensed Mold Assessor",
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
      localFaqs={[
        {
          q: "Do you already know the communities in Royal Palm Beach?",
          a: "Well enough that it speeds up the visit. Madison Green, La Mancha, Counterpoint Estates and the surrounding subdivisions share a lot of construction details — tile-roof lanais, screen enclosures, inset pool decks — and those details fail in consistent, recognizable ways. Many of the HOA and condo communities also share HVAC design choices, so a pattern we've documented once tends to reappear. That familiarity means we know where to look first, though we still test rather than assume.",
        },
        {
          q: "Is Royal Palm Beach in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Royal Palm Beach — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
        {
          q: "Our Royal Palm Beach building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
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