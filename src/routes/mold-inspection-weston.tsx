import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-weston")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-weston",
      title: "Mold Inspection Weston FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Weston, FL. Lab-backed reports for upscale master-planned homes, HOA properties, and finished interiors hiding intrusion.",
    }),
  component: WestonPage,
});

function WestonPage() {
  return (
    <CityMoldPage
      city="Weston"
      county="Broward County"
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