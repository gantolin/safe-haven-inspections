import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-plantation")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-plantation",
      title: "Mold Inspection Plantation FL | Safe Haven",
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