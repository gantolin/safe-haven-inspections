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