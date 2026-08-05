import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-stuart")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-stuart",
      title: "Mold Inspection Stuart FL | Licensed Mold Assessor",
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
      localFaqs={[
        {
          q: "Our Stuart home is in a flood zone. Does past flooding still matter?",
          a: "Yes, often years later. Much of Stuart sits inside FEMA-designated flood zones, and for a home that has taken on water even once, moisture can persist behind baseboards, in subfloor cavities, and inside wall assemblies long after everything looks and feels dry. That's exactly the scenario where a visual inspection alone misleads. In the pre-1980 cottages downtown and along the St. Lucie River there's a compounding factor — age plus constant river humidity, where we routinely document rot at floor plates and mold behind original wall assemblies.",
        },
        {
          q: "Is Stuart in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Stuart — in Martin County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
      ]}
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