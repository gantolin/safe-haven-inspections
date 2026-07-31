import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-pembroke-pines")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-pembroke-pines",
      title: "Mold Inspection Pembroke Pines FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Pembroke Pines, FL. Lab-backed reports for master-planned communities, newer construction, and HOA properties.",
    }),
  component: PembrokePinesPage,
});

function PembrokePinesPage() {
  return (
    <CityMoldPage
      city="Pembroke Pines"
      county="Broward County"
      localFaqs={[
        {
          q: "Our neighbors have the same floor plan as us. Does that help you?",
          a: "Genuinely, yes — it's an advantage of inspecting in Pembroke Pines. SilverLakes, Chapel Trail, Pembroke Falls and similar communities were built in phases from a small set of plans, so the same detail fails the same way across many homes. Once we've documented where water enters one elevation of a plan, we know where to check on the next. The other recurring driver here is HVAC sizing — many of these homes were spec'd with air handlers a size too large, so the system cools fast, short-cycles, and never dehumidifies.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Pembroke Pines?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Pembroke Pines homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Pembroke Pines construction.",
        },
      ]}
      intro="A mold inspection in Pembroke Pines, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Pembroke Pines mold assessor — objective, lab-backed reporting, no remediation sold."
      localAngle={{
        heading: "Pembroke Pines-specific moisture concerns",
        paragraphs: [
          "Pembroke Pines is dominated by 1990s and 2000s master-planned developments — SilverLakes, Chapel Trail, Pembroke Falls, and dozens of similar HOA communities. Because homes were built in phases from a small set of floor plans, moisture and mold patterns tend to repeat: primary bathroom exterior walls, master-closet corners on the shaded side, and above garages with unconditioned attic space. We already know where to look on these builders' plans.",
          "The other common driver here is HVAC sizing. Many Pembroke Pines homes were spec'd with air handlers a size too large for the square footage. The system cools quickly but never runs long enough to dehumidify — so indoor humidity climbs, cold surfaces bloom, and mold appears on drywall behind furniture and inside closets. Our inspection includes humidity logging and coil-side moisture checks that address this directly.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-hollywood", label: "Hollywood" },
        { to: "/mold-inspection-weston", label: "Weston" },
        { to: "/mold-inspection-davie", label: "Davie" },
      ]}
    />
  );
}