import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-jupiter")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-jupiter",
      title: "Mold Inspection Jupiter FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Jupiter, FL. Lab-backed reports for coastal and Loxahatchee River homes and storm-exposed properties.",
    }),
  component: JupiterPage,
});

function JupiterPage() {
  return (
    <CityMoldPage
      city="Jupiter"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "Our Jupiter home is in a newer gated community. Aren't newer homes less prone to mold?",
          a: "Not necessarily — they fail differently. Abacoa, Jupiter Country Club, and Admirals Cove homes are tightly built with high finish levels, so when storm-driven water does get in, it has fewer ways out and far more material to hide behind. Older properties along Beach Road and the Loxahatchee River have the opposite profile: constant salt-laden onshore air and driven rain during frequent squalls, working directly on window and door assemblies. Tight construction isn't protection by itself; it changes where we look.",
        },
        {
          q: "Is Jupiter in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Jupiter — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
      ]}
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