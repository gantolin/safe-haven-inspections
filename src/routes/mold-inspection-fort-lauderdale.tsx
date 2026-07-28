import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-fort-lauderdale")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-fort-lauderdale",
      title: "Mold Inspection Fort Lauderdale FL | Safe Haven",
      description:
        "Independent, state-licensed mold inspection and testing in Fort Lauderdale, FL. Lab-backed reports for canal-front homes, high-rise condos, and older mid-century houses.",
    }),
  component: FortLauderdalePage,
});

function FortLauderdalePage() {
  return (
    <CityMoldPage
      city="Fort Lauderdale"
      county="Broward County"
      intro="A mold inspection in Fort Lauderdale, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Fort Lauderdale mold assessor — testing and reporting only, so your findings are unbiased and lab-backed."
      localAngle={{
        heading: "Fort Lauderdale-specific moisture concerns",
        paragraphs: [
          "Fort Lauderdale's building stock is unusually mixed for a single city — Las Olas Isles and Rio Vista canal homes, mid-century single-story houses in Victoria Park and Coral Ridge, and high-rise condos along the Intracoastal and beach. Each type has its own failure mode: canal homes see slab-edge intrusion and dock-side stucco decay, mid-century houses hide mold behind original terrazzo baseboards and single-pane windows, and high-rises regularly show HVAC condensate and stack-effect moisture at exterior wall junctions.",
          "The dense urban core also means shared walls, party-wall assemblies, and tight setbacks that trap moisture between buildings and around AC condensers. Our inspection combines moisture mapping, thermal imaging, and targeted air and surface sampling calibrated to the specific construction type — not a one-size checklist.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-hollywood", label: "Hollywood" },
        { to: "/mold-inspection-pompano-beach", label: "Pompano Beach" },
        { to: "/mold-inspection-plantation", label: "Plantation" },
      ]}
    />
  );
}