import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-jensen-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-jensen-beach",
      title: "Mold Inspection Jensen Beach FL | Licensed Mold Assessor",
      description:
        "Independent mold inspection and testing in Jensen Beach, FL. Lab-backed reports for oceanfront condos, seasonal rentals, and coastal single-family homes.",
    }),
  component: JensenBeachPage,
});

function JensenBeachPage() {
  return (
    <CityMoldPage
      city="Jensen Beach"
      county="Martin County"
      localFaqs={[
        {
          q: "We rent our Jensen Beach place seasonally. What goes wrong between guests?",
          a: "Condensate lines and drain pans, almost every time. A unit closed between bookings with the thermostat pushed high lets humidity climb, and the AC never runs long enough to clear its own condensate. Lines clog, pans hold standing water, and mold establishes on cool surfaces. On the barrier island there's a second layer — salt air degrades window flashings and corrodes hardware, so driven rain finds paths that didn't exist a few seasons ago. If a guest has mentioned a musty smell, test before the next turnover rather than after.",
        },
        {
          q: "Is Jensen Beach in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Jensen Beach — in Martin County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
        {
          q: "Our Jensen Beach building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in Jensen Beach, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Jensen Beach mold assessor — testing only, no remediation upsell."
      localAngle={{
        heading: "Jensen Beach-specific moisture concerns",
        paragraphs: [
          "Jensen Beach is defined by salt air, and it shows up in the inspection findings. Ocean-adjacent condos, Ocean Village-style buildings, and duplex rentals along the barrier island regularly present corroded window flashings, degraded stucco control joints, and moisture behind kitchen and bath tile — anywhere salt-laden air has been eating at the building envelope for a few seasons.",
          "The seasonal-rental profile is a category of its own. Homes and condos closed up for months at a time with the thermostat pushed high tend to develop HVAC condensate-line clogs, standing water in drain pans, and cold-surface mold on closet walls and around supply registers. We inspect and sample specifically for these off-season patterns so an owner or buyer sees exactly what a shut-up unit has been hiding.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-stuart", label: "Stuart" },
        { to: "/mold-inspection-palm-city", label: "Palm City" },
        { to: "/mold-inspection-hobe-sound", label: "Hobe Sound" },
      ]}
    />
  );
}