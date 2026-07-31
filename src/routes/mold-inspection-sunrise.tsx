import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-sunrise")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-sunrise",
      title: "Mold Inspection Sunrise FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Sunrise, FL. Lab-backed reports for townhomes, condos, and planned communities with shared-wall HVAC condensation.",
    }),
  component: SunrisePage,
});

function SunrisePage() {
  return (
    <CityMoldPage
      city="Sunrise"
      county="Broward County"
      localFaqs={[
        {
          q: "We're in an attached townhome in Sunrise. Can a neighbor's unit affect ours?",
          a: "It can, and party-wall condensation is the pattern we see most in Welleby, Sunrise Lakes, and the Sawgrass-area developments. When an attached unit is held at a very different temperature — or sits empty and unconditioned — the shared wall becomes a condensing surface, and growth develops inside the assembly rather than on either side's visible drywall. The other Sunrise signature is air handlers installed in unconditioned garages, where condensate lines clog quietly for years and slow pan overflow saturates the pan and the wall behind it.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Sunrise?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Sunrise homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Sunrise construction.",
        },
        {
          q: "Our Sunrise building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in Sunrise, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Sunrise mold assessor — inspection only, no remediation upsell."
      localAngle={{
        heading: "Sunrise-specific moisture concerns",
        paragraphs: [
          "Sunrise has one of the highest concentrations of townhomes and attached condos in western Broward — Welleby, Sunrise Lakes, Sawgrass area developments. The pattern we see over and over is party-wall condensation: an attached unit next door runs their thermostat very cold, and the shared wall stays cool enough on your side that humid interior air condenses on it. That produces mold in closets and behind furniture against shared walls without any visible plumbing or roof leak.",
          "Sunrise's stock of single-story planned-community homes adds a second pattern: air handlers installed in unconditioned garages, with condensate lines that clog quietly for years. Slow drain-pan overflow saturates the pan itself, feeds mold on the air handler cabinet, and pushes contaminated air into the supply. We check the mechanical closet and coil directly as part of every Sunrise inspection.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-plantation", label: "Plantation" },
        { to: "/mold-inspection-coral-springs", label: "Coral Springs" },
        { to: "/mold-inspection-weston", label: "Weston" },
      ]}
    />
  );
}