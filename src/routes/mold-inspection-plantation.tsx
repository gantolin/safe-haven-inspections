import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-plantation")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-plantation",
      title: "Mold Inspection Plantation FL | Licensed Mold Assessor",
      description:
        "Independent mold inspection and testing in Plantation, FL. Lab-backed reports for established slab-on-grade homes with mature landscaping and drainage issues.",
    }),
  component: PlantationPage,
});

function PlantationPage() {
  return (
    <CityMoldPage
      city="Plantation"
      county="Broward County"
      localFaqs={[
        {
          q: "Could our landscaping be causing a moisture problem in Plantation?",
          a: "It's among the more common causes here and the least suspected. In Plantation Acres, Plantation Isles, and Jacaranda, decades-old plantings have quietly changed how water moves around the house — root systems lift patio slabs and walkways, grade reverses toward the structure, and water that used to run away now runs back. Because Plantation is almost entirely slab-on-grade, moisture reaching the slab has nowhere to go but up through flooring and wall assemblies. We routinely find mold under vinyl plank laid over slab moisture that was never mitigated.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Plantation?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Plantation homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Plantation construction.",
        },
      ]}
      intro="A mold inspection in Plantation, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Plantation mold assessor — testing and reporting only."
      localAngle={{
        heading: "Plantation-specific moisture concerns",
        paragraphs: [
          "Plantation's older neighborhoods (Plantation Acres, Plantation Isles, Jacaranda) share a signature problem: decades-old landscaping that has quietly changed the way water moves around the house. Root systems have lifted patio slabs and walkways, mature canopies keep exterior walls perpetually damp, and original swale drainage has silted in. The end result is chronic slab-level moisture and mold at the base of interior walls on the shaded side of the home.",
          "Because Plantation is almost entirely slab-on-grade, moisture that reaches the slab has nowhere to go but up through flooring and wall assemblies. We routinely find mold under vinyl plank installed over unmitigated slab moisture and behind base cabinets in kitchens and laundry rooms. Our inspection includes slab moisture readings and a look at exterior grading, not just wall and ceiling surfaces.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-fort-lauderdale", label: "Fort Lauderdale" },
        { to: "/mold-inspection-sunrise", label: "Sunrise" },
        { to: "/mold-inspection-davie", label: "Davie" },
      ]}
    />
  );
}