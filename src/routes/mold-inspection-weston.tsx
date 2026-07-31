import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-weston")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-weston",
      title: "Mold Inspection Weston FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Weston, FL. Lab-backed reports for upscale master-planned homes, HOA properties, and finished interiors.",
    }),
  component: WestonPage,
});

function WestonPage() {
  return (
    <CityMoldPage
      city="Weston"
      county="Broward County"
      localFaqs={[
        {
          q: "Everything in our Weston home looks perfect. Is an inspection still worth it?",
          a: "That's precisely the Weston problem. Windmill Ranch Estates, Weston Hills, Savanna and The Ridges are among the newest and most highly finished housing in Broward, and high finish levels hide small moisture problems for a long time. The HOA-driven emphasis on cosmetic perfection compounds it — owners repaint over a stain rather than investigate, and refinish rather than open a wall, so moisture builds behind finishes for years. Thermal imaging and moisture metering are how you check without cutting into anything.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Weston?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Weston homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Weston construction.",
        },
      ]}
      intro="A mold inspection in Weston, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Weston mold assessor — testing and reporting only, so your findings stay unbiased."
      localAngle={{
        heading: "Weston-specific moisture concerns",
        paragraphs: [
          "Weston is one of the newest master-planned cities in Broward — Windmill Ranch Estates, Weston Hills, Savanna, The Ridges — and it presents a very specific challenge: highly finished interiors that hide small moisture problems until they aren't small anymore. Custom crown molding, wall paneling, wet-bar millwork, and finished basements below grade at some Weston Hills lots all make visual clues rare. Meanwhile the stucco-and-concrete-tile envelope is highly weather-tight until a control joint or roof penetration fails.",
          "The other Weston-specific factor is the HOA-driven insistence on cosmetic perfection. Owners repaint over stain rather than investigate, and refinish rather than open a wall — which lets moisture and mold build for years behind an immaculate finish. Our inspection leans heavily on thermal imaging and non-invasive moisture readings so we can pinpoint hidden problems without damaging the finish level Weston homes are known for.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-pembroke-pines", label: "Pembroke Pines" },
        { to: "/mold-inspection-davie", label: "Davie" },
        { to: "/mold-inspection-sunrise", label: "Sunrise" },
      ]}
    />
  );
}