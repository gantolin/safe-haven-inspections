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
      localFaqs={[
        {
          q: "My Boca Raton home has a barrel-tile roof and no visible leaks. Could there still be a problem?",
          a: "Frequently, yes — it's among the most common things we find in Boca. Barrel tile performs well on average, which is exactly why its failures go unnoticed: the tile stays intact while the underlayment beneath it degrades silently. By the time a ceiling stain appears in a Royal Palm Yacht & CC or Old Floresta home, the sheathing above has usually been wet a long time. Because finish levels here are high, owners tend to repaint the stain rather than open it up. Thermal imaging and moisture metering let us check the deck and top plate without cutting into a finished ceiling.",
        },
        {
          q: "Is Boca Raton in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Boca Raton — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
        {
          q: "Our Boca Raton building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
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