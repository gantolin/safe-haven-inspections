import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-greenacres")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-greenacres",
      title: "Mold Inspection Greenacres FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Greenacres, FL. Lab-backed reports for 1970s-80s CBS single-family homes and working-family neighborhoods.",
    }),
  component: GreenacresPage,
});

function GreenacresPage() {
  return (
    <CityMoldPage
      city="Greenacres"
      county="Palm Beach County"
      intro="A mold inspection in Greenacres, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Greenacres mold assessor — testing and reporting only, so what you get is an honest answer."
      localAngle={{
        heading: "Greenacres-specific moisture concerns",
        paragraphs: [
          "Greenacres is dominated by 1970s and 1980s CBS single-family homes on modest slab-on-grade lots. That construction generation has a very predictable failure pattern: aging galvanized supply lines that sweat inside wall cavities, single-pane aluminum windows whose sills stain and rot, and original flat-tile roofs whose underlayment has aged out even when the tile still looks intact from the ground. We consistently find mold at ceiling perimeters below roof valleys and around bathroom windows that have never been resealed.",
          "The other Greenacres driver is HVAC that has been patched rather than replaced. In an affordable-housing market, owners understandably keep older systems running past their useful dehumidification life. The system cools, but indoor humidity stays high, and mold appears on primary-bedroom exterior walls, inside master closets, and on the underside of ceiling drywall in the coolest rooms in the house. Our inspection includes humidity logging and mechanical-closet checks to catch this directly.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-lake-worth-beach", label: "Lake Worth Beach" },
        { to: "/mold-inspection-boynton-beach", label: "Boynton Beach" },
        { to: "/mold-inspection-royal-palm-beach", label: "Royal Palm Beach" },
      ]}
    />
  );
}