import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-lake-worth-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-lake-worth-beach",
      title: "Mold Inspection Lake Worth Beach FL | Licensed Mold Assessor",
      description:
        "Independent mold inspection and testing in Lake Worth Beach, FL. Lab-backed reports for historic cottages, dense-lot older homes, and downtown rentals.",
    }),
  component: LakeWorthBeachPage,
});

function LakeWorthBeachPage() {
  return (
    <CityMoldPage
      city="Lake Worth Beach"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "Our Lake Worth Beach cottage is from the 1920s. Is original construction a problem?",
          a: "It's the defining factor here. College Park, Parrot Cove, and the Historic Bryant Park area hold some of the oldest surviving housing stock in Palm Beach County, much of it original wood-frame. That means real framing members that can rot, rather than CBS that simply stays damp — so moisture findings carry more structural weight. Lot density compounds it: downtown-adjacent parcels sit close together with minimal setbacks, exterior walls stay shaded, and they dry slowly after rain. We pay particular attention to floor plates, sill areas, and the shaded elevation.",
        },
        {
          q: "Is Lake Worth Beach in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Lake Worth Beach — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
      ]}
      intro="A mold inspection in Lake Worth Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Lake Worth Beach mold assessor — inspection only, no remediation upsell."
      localAngle={{
        heading: "Lake Worth Beach-specific moisture concerns",
        paragraphs: [
          "Lake Worth Beach has one of the oldest surviving housing stocks in Palm Beach County. Cottages in College Park, Parrot Cove, and the Historic Bryant Park area routinely date to the 1920s and 1930s — original wood-frame construction, tongue-and-groove sub-floors, and cast-iron drain lines. We consistently find hidden mold at floor plates where old drain lines have wept for decades, behind original wood paneling that was never intended to see modern humidity loads, and in bathroom additions bolted onto original exterior walls.",
          "Lot density is the second factor. Downtown-adjacent parcels sit close together with minimal setbacks, so exterior walls stay shaded and slow to dry after rain. Combined with aging tar-and-gravel or early-shingle roofs on rental properties near the downtown corridor, that adds up to a housing stock where visible surfaces are misleading. Our inspection is built for pre-war construction, not modern-only checklists.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-west-palm-beach", label: "West Palm Beach" },
        { to: "/mold-inspection-boynton-beach", label: "Boynton Beach" },
        { to: "/mold-inspection-greenacres", label: "Greenacres" },
      ]}
    />
  );
}