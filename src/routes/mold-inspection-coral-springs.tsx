import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-coral-springs")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-coral-springs",
      title: "Mold Inspection Coral Springs FL | Licensed Mold Assessor",
      description:
        "Independent mold inspection and testing in Coral Springs, FL. Lab-backed reports for 1980s-90s subdivisions, tile-roof homes, and screened-lanai properties.",
    }),
  component: CoralSpringsPage,
});

function CoralSpringsPage() {
  return (
    <CityMoldPage
      city="Coral Springs"
      county="Broward County"
      localFaqs={[
        {
          q: "Coral Springs homes are mostly 1980s and 90s builds — what tends to fail first?",
          a: "The roof system, then the lanai tie-in. Low-slope and flat tile roofs from that era age predictably: underlayment breaks down and water enters at valleys, hips, and roof-to-wall junctions well before anything shows on a ceiling. The second is the screen enclosure — the frame attaches to the house wall through a caulk joint that hardens and cracks with age, letting driven rain stand against the stucco. Behind that joint is usually where we find growth. Both are checkable with thermal imaging from inside, without walking the roof or dismantling the enclosure.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Coral Springs?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Coral Springs homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Coral Springs construction.",
        },
      ]}
      intro="A mold inspection in Coral Springs, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Coral Springs mold assessor — testing only, so what you get is an honest, lab-backed answer."
      localAngle={{
        heading: "Coral Springs-specific moisture concerns",
        paragraphs: [
          "Coral Springs is dominated by 1980s and early-1990s subdivisions with flat and low-slope tile roofs — a system that ages predictably. As underlayment breaks down, water intrudes at valleys, hips, and roof-to-wall junctions long before the tile itself looks bad from the ground. We routinely document staining and elevated moisture in second-story ceilings, primary bedrooms below roof valleys, and around chimney chases decades after installation.",
          "The other signature Coral Springs pattern is the screened lanai and inset patio. The screen frame ties into the house wall through a caulk joint that hardens and cracks with age, letting driven rain sit against the stucco. Behind that stucco, we regularly find soaked sheathing and mold on the interior side of the wall — a problem no exterior visual inspection can catch.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-pompano-beach", label: "Pompano Beach" },
        { to: "/mold-inspection-sunrise", label: "Sunrise" },
        { to: "/mold-inspection-plantation", label: "Plantation" },
      ]}
    />
  );
}