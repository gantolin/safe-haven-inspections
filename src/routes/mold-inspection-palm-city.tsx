import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-palm-city")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-palm-city",
      title: "Mold Inspection Palm City FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Palm City, FL. Lab-backed reports for canal-front homes, gated communities, and newer suburban builds.",
    }),
  component: PalmCityPage,
});

function PalmCityPage() {
  return (
    <CityMoldPage
      city="Palm City"
      county="Martin County"
      intro="A mold inspection in Palm City, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Palm City mold assessor — no remediation, no upsell, just an unbiased lab-backed report."
      localAngle={{
        heading: "Palm City-specific moisture concerns",
        paragraphs: [
          "Palm City is dominated by newer suburban and gated-community construction, much of it built on tightly graded lots with heavy in-ground irrigation. Over-spraying and clogged rain sensors push water back toward stucco elevations — the exact conditions that fuel hidden mold at slab edges, behind base cabinets, and inside first-floor wall assemblies.",
          "The canal-front and river-adjacent neighborhoods add another layer: elevated ambient humidity plus HVAC systems that are often oversized for the space. When a system short-cycles, indoor humidity climbs and mold gets a foothold on cool surfaces — closet exterior walls, primary bath ceilings, and the underside of tile lanai enclosures. Our inspection tailors sampling and moisture mapping to whichever pattern your home actually shows.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-stuart", label: "Stuart" },
        { to: "/mold-inspection-jensen-beach", label: "Jensen Beach" },
        { to: "/mold-inspection-hobe-sound", label: "Hobe Sound" },
      ]}
    />
  );
}