import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-jupiter")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-jupiter",
      title: "Mold Inspection Jupiter FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Jupiter, FL. Lab-backed reports for coastal and Loxahatchee River homes, newer gated communities, and storm-exposed properties.",
    }),
  component: JupiterPage,
});

function JupiterPage() {
  return (
    <CityMoldPage
      city="Jupiter"
      county="Palm Beach County"
      intro="A mold inspection in Jupiter, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Jupiter mold assessor — testing and reporting only."
      localAngle={{
        heading: "Jupiter-specific moisture concerns",
        paragraphs: [
          "Jupiter's exposure to the coast and the Loxahatchee River is the dominant driver. Homes in Jupiter Inlet Colony, along Beach Road, and up the river bank see a constant load of salt-laden onshore air and driven rain during frequent squalls. We regularly document mold at the seaward corners of exterior walls, inside garage-facing closets, and on drywall behind large expanses of impact glass where warm humid air condenses in cooler seasons.",
          "Jupiter's newer master-planned gated communities — Abacoa, Jupiter Country Club, Admirals Cove — bring a different challenge: tightly-built modern envelopes with high finish levels. When these houses take on storm-driven water at a window, roof penetration, or lanai tie-in, that water stays trapped inside the assembly instead of drying out through leaky construction. Our inspection combines moisture mapping and thermal imaging designed to find that trapped water before it becomes visible damage.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-palm-beach-gardens", label: "Palm Beach Gardens" },
        { to: "/mold-inspection-hobe-sound", label: "Hobe Sound" },
        { to: "/mold-inspection-west-palm-beach", label: "West Palm Beach" },
      ]}
    />
  );
}