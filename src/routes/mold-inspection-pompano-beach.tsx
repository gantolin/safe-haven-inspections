import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-pompano-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-pompano-beach",
      title: "Mold Inspection Pompano Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Pompano Beach, FL. Lab-backed reports for beachfront condos, older inland homes, and flat-roof properties.",
    }),
  component: PompanoBeachPage,
});

function PompanoBeachPage() {
  return (
    <CityMoldPage
      city="Pompano Beach"
      county="Broward County"
      localFaqs={[
        {
          q: "What's the difference between a beach-side and an inland inspection in Pompano?",
          a: "They're two distinct problem sets. Along A1A and the Intracoastal, older beachfront condos and mid-rises accumulate salt-air damage to window and door assemblies, and it surfaces as mold at cold-supply diffusers and in kitchen and bath walls. Inland, the older single-family neighborhoods are heavy on flat and low-slope built-up roofs, which tolerate ponding water right up until they don't — and by the time a stain reaches ceiling drywall, the sheathing above has usually been saturated a long time. Which one you have changes where we sample.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Pompano Beach?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Pompano Beach homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Pompano Beach construction.",
        },
        {
          q: "Our Pompano Beach building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in Pompano Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Pompano Beach mold assessor — inspection and testing only, no remediation upsell."
      localAngle={{
        heading: "Pompano Beach-specific moisture concerns",
        paragraphs: [
          "Pompano Beach splits neatly into two problem sets. Along A1A and the Intracoastal, older beachfront condos and mid-rises accumulate salt-air damage to window and door assemblies, showing up as mold at cold-supply diffusers, kitchen exterior walls, and inside built-in cabinetry facing the ocean side. Seasonal-rental thermostat behavior — warm setpoints while units sit empty — reliably pushes indoor humidity high enough for mold to establish.",
          "Inland, Pompano Beach's older single-family neighborhoods are heavy on flat and low-slope built-up roofs. Those roofs tolerate ponding until they don't, and by the time a stain reaches the ceiling drywall the sheathing above is often already compromised. Our inspection uses thermal imaging and moisture meters on ceilings and top-plate wall assemblies to catch these issues before the drywall gives out.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-fort-lauderdale", label: "Fort Lauderdale" },
        { to: "/mold-inspection-deerfield-beach", label: "Deerfield Beach" },
        { to: "/mold-inspection-coral-springs", label: "Coral Springs" },
      ]}
    />
  );
}