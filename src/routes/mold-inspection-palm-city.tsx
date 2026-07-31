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
      localFaqs={[
        {
          q: "Our Palm City home is fairly new. What do you find most often?",
          a: "Oversized air conditioning, more often than anything structural. A system spec'd too large for the space cools the house quickly and shuts off — it never runs long enough to actually pull moisture out. Indoor humidity climbs and mold gets a foothold on the coolest surfaces even though nothing has leaked. In the canal-front and river-adjacent neighborhoods that's compounded by higher ambient humidity to begin with. The other Palm City pattern is irrigation: tightly graded lots with heavy in-ground systems and clogged rain sensors pushing water back toward stucco elevations.",
        },
        {
          q: "Is Palm City in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Palm City — in Martin County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
      ]}
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