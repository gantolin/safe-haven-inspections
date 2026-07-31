import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-davie")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-davie",
      title: "Mold Inspection Davie FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Davie, FL. Lab-backed reports for equestrian estates, well-water properties, and older ranch homes.",
    }),
  component: DaviePage,
});

function DaviePage() {
  return (
    <CityMoldPage
      city="Davie"
      county="Broward County"
      localFaqs={[
        {
          q: "We have a barn and outbuildings on our Davie property. Do those get inspected too?",
          a: "They can, and on equestrian properties they often matter more than the house. Tack rooms, feed sheds, and guest cottages frequently share utility lines with the main structure, so a slow leak out there can track back inside. The bigger Davie-specific factor is irrigation — heavy daily watering on large lots drives moisture back toward slabs and stem walls. West of University Drive, many properties still run private wells with hard, iron-rich supply, which means persistent condensation on cold lines in laundry rooms and utility closets. Tell us which structures you want covered and we'll scope it accordingly.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Davie?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Davie homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Davie construction.",
        },
      ]}
      intro="A mold inspection in Davie, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Davie mold assessor — objective, lab-backed reporting."
      localAngle={{
        heading: "Davie-specific moisture concerns",
        paragraphs: [
          "Davie's equestrian character means larger lots, aggressive daily irrigation, and outbuildings — tack rooms, guest cottages, feed sheds — that often share utility lines with the main house. Over-irrigation pushes water back toward slab edges, and in older ranch homes we routinely find damp wicking six to twelve inches up interior walls with mold established behind base cabinetry and shoe molding.",
          "Well water is another Davie-specific factor. Many properties west of University Drive still run on private wells with hard, iron-rich supply. That translates into constant condensation on cold water lines, humidified laundry and utility rooms, and repeat mold at the pump/pressure-tank enclosure. Our inspection accounts for both the equestrian outbuilding footprint and the well-water humidity load, not just the main house envelope.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-plantation", label: "Plantation" },
        { to: "/mold-inspection-pembroke-pines", label: "Pembroke Pines" },
        { to: "/mold-inspection-weston", label: "Weston" },
      ]}
    />
  );
}