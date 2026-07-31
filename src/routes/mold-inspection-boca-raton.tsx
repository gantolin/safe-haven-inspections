import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-boca-raton")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-boca-raton",
      title: "Mold Inspection Boca Raton FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Boca Raton, FL. Lab-backed reports for Mediterranean estates, country-club homes, and luxury high-rise condos.",
    }),
  component: BocaRatonPage,
});

function BocaRatonPage() {
  return (
    <CityMoldPage
      city="Boca Raton"
      county="Palm Beach County"
      intro="A mold inspection in Boca Raton, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Boca Raton mold assessor — discreet, objective, and lab-backed."
      localAngle={{
        heading: "Boca Raton-specific moisture concerns",
        paragraphs: [
          "Boca Raton's signature Mediterranean-style estates — Royal Palm Yacht & CC, Boca Bath & Tennis, Old Floresta — combine barrel-tile roofs, deep overhangs, and heavily finished interiors. The tile roofs perform well on average but hide their failures: underlayment degrades silently, and by the time a ceiling stain appears the sheathing is often already compromised. Interior finish levels are high enough that owners often refinish over the symptom instead of investigating it.",
          "Along the coast and the country-club corridor west of I-95, the second driver is HVAC and pool-cage humidity. Screened lanais and pool enclosures push warm, humid air against exterior walls, and central systems set very cold to compensate leave cold surfaces indoors ready for condensation. We routinely find mold on primary-bedroom exterior walls, inside walk-in closets on the pool-facing side, and behind wet-bar cabinetry.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-delray-beach", label: "Delray Beach" },
        { to: "/mold-inspection-boynton-beach", label: "Boynton Beach" },
        { to: "/mold-inspection-deerfield-beach", label: "Deerfield Beach" },
      ]}
    />
  );
}