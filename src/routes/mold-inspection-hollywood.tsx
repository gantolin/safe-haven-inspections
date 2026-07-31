import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-hollywood")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-hollywood",
      title: "Mold Inspection Hollywood FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Hollywood, FL. Lab-backed reports for beach rentals, older bungalows, and coastal condos exposed to salt air.",
    }),
  component: HollywoodPage,
});

function HollywoodPage() {
  return (
    <CityMoldPage
      city="Hollywood"
      county="Broward County"
      localFaqs={[
        {
          q: "Does being near the Broadwalk change what you look for in Hollywood?",
          a: "Yes — beachfront and near-beach properties here face about the toughest envelope environment in Broward. We consistently document salt corrosion at window and door assemblies and at packaged HVAC units, and that corrosion is usually what lets water in. Inland is a different inspection entirely: Hollywood Lakes and Hollywood Hills are pre-war and mid-century, often original wood-frame, with tile roofs that shed water but don't seal the way modern systems do, plus additions with improvised tie-ins. We scope the visit to whichever of those you actually have.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Hollywood?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Hollywood homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Hollywood construction.",
        },
        {
          q: "Our Hollywood building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in Hollywood, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Hollywood mold assessor — inspection only, no remediation upsell."
      localAngle={{
        heading: "Hollywood-specific moisture concerns",
        paragraphs: [
          "Hollywood's stretch of coastline and the Broadwalk district drive one of the toughest environments in Broward for building envelopes. On beachfront and near-beach condos and single-family rentals we consistently document salt-corroded HVAC coils, degraded window and door flashings, and mold blooming at cold-supply registers — all classic signatures of chronic salt-air exposure combined with vacation-rental thermostat habits.",
          "Inland, Hollywood's pre-war and mid-century bungalow neighborhoods (Hollywood Lakes, Hollywood Hills) present a different pattern: original wood-frame construction, tile roofs that shed but don't seal like modern systems, and add-on Florida rooms with retrofit HVAC. We routinely find hidden moisture in these transition areas — around jalousie windows, at porch-to-house tie-ins, and behind added-on bathrooms.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-fort-lauderdale", label: "Fort Lauderdale" },
        { to: "/mold-inspection-pembroke-pines", label: "Pembroke Pines" },
        { to: "/mold-inspection-davie", label: "Davie" },
      ]}
    />
  );
}