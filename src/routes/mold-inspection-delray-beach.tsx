import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-delray-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-delray-beach",
      title: "Mold Inspection Delray Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Delray Beach, FL. Lab-backed reports for historic downtown bungalows, beach rentals, and older homes with additions.",
    }),
  component: DelrayBeachPage,
});

function DelrayBeachPage() {
  return (
    <CityMoldPage
      city="Delray Beach"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "Our Delray Beach bungalow has been added onto more than once. Does that matter?",
          a: "It's the first thing we look at here. The historic bungalows around Atlantic Avenue, Osceola Park, and Del-Ida Park have almost all been added onto, often repeatedly, and every tie-in between old and new construction is a potential water path — different roof planes, different wall assemblies, and flashing details that were frequently improvised. We map moisture across those junctions specifically. East of the Intracoastal the pattern shifts to rental turnover: high set-points between bookings, bath fans that never run, and units closed up in between.",
        },
        {
          q: "Is Delray Beach in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Delray Beach — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
        {
          q: "Our Delray Beach building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in Delray Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Delray Beach mold assessor — testing and reporting only, no remediation upsell."
      localAngle={{
        heading: "Delray Beach-specific moisture concerns",
        paragraphs: [
          "Delray Beach's core issue is layered additions. The historic bungalows around Atlantic Avenue, Osceola Park, and Del-Ida Park have almost all been added onto — often multiple times — and every addition tie-in is a potential moisture failure point. We consistently find mold at roof-to-wall transitions where a new roof plane meets the original, at floor-level joints where a converted porch meets the original slab, and in walls that were once exterior and are now interior partitions.",
          "East of the Intracoastal, beach-side rentals bring the classic vacation-property pattern: high thermostat set-points during turnovers, tenants who don't run bath fans, and closed-up units between bookings. The result is chronic condensation on cold-supply diffusers and mold in primary closets, exactly where guests won't look. Our inspection is calibrated for both the additive-construction history and short-term-rental humidity load.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-boca-raton", label: "Boca Raton" },
        { to: "/mold-inspection-boynton-beach", label: "Boynton Beach" },
        { to: "/mold-inspection-lake-worth-beach", label: "Lake Worth Beach" },
      ]}
    />
  );
}