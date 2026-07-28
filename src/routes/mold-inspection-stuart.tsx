import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-stuart")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-stuart",
      title: "Mold Inspection Stuart FL | Safe Haven",
      description:
        "Independent, state-licensed mold inspection and testing in Stuart, FL. Lab-backed reports for historic downtown, waterfront homes, and flood-zone properties.",
    }),
  component: StuartPage,
});

function StuartPage() {
  return (
    <CityMoldPage
      city="Stuart"
      county="Martin County"
      intro="A mold inspection in Stuart, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Stuart mold assessor — we test and report only, so your results are objective and lab-backed."
      localAngle={{
        heading: "Stuart-specific moisture concerns",
        paragraphs: [
          "Historic downtown Stuart and the older waterfront neighborhoods along the St. Lucie River carry the double burden of age and constant river humidity. In pre-1980 cottages we routinely document rot at floor plates, mold behind original wood paneling, and stubborn condensation on single-pane windows — issues that a boilerplate inspection will miss.",
          "Much of Stuart also sits inside FEMA-designated flood zones. For homes that have taken on water — even once — hidden moisture can persist behind baseboards, in subfloor cavities, and inside wall assemblies for years. Our inspection process combines moisture mapping, thermal imaging, and targeted sampling so nothing gets overlooked before you buy, sell, or renovate.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-palm-city", label: "Palm City" },
        { to: "/mold-inspection-jensen-beach", label: "Jensen Beach" },
        { to: "/mold-inspection-hobe-sound", label: "Hobe Sound" },
      ]}
    />
  );
}