import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-riviera-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-riviera-beach",
      title: "Mold Inspection Riviera Beach FL | Licensed Mold Assessor",
      description:
        "Independent mold inspection and testing in Riviera Beach, FL. Lab-backed reports for Singer Island condos, older inland homes, and high-water-table properties.",
    }),
  component: RivieraBeachPage,
});

function RivieraBeachPage() {
  return (
    <CityMoldPage
      city="Riviera Beach"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "Is a Singer Island condo inspection different from one west of the Intracoastal?",
          a: "Very. Singer Island's oceanfront and Intracoastal-side towers take about the harshest salt-air load in the county — corroded packaged HVAC units, degraded window flashings, and the water intrusion that follows. West of the Intracoastal, the older inland neighborhoods sit on a persistently high water table, and in mid-century single-family homes we routinely document slab-level moisture wicking six to twelve inches up interior walls. Same city, opposite mechanisms: rising moisture inland, driven and corrosion-led intrusion on the island.",
        },
        {
          q: "Is Riviera Beach in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Riviera Beach — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
        {
          q: "Our Riviera Beach building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in Riviera Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Riviera Beach mold assessor — objective, lab-backed, no remediation upsell."
      localAngle={{
        heading: "Riviera Beach-specific moisture concerns",
        paragraphs: [
          "Riviera Beach splits into two distinct problem sets. Singer Island's oceanfront and Intracoastal-side condominium towers see one of the harshest salt-air loads on the county — corroded packaged HVAC units, degraded window flashings, and mold at cold-supply diffusers on the water-facing side of high-rise units. Seasonal-occupancy thermostat behavior reliably pushes indoor humidity to the point where those cold surfaces bloom.",
          "West of the Intracoastal, Riviera Beach's older inland neighborhoods sit on a persistently high water table. In mid-century single-family homes we routinely find slab-level moisture wicking six to twelve inches up interior walls, mold behind base cabinets in kitchens and laundry rooms, and damp bloom at the base of garage-to-house transition slabs. Our inspection is calibrated for both the coastal condo and inland slab patterns — not one generic checklist.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-west-palm-beach", label: "West Palm Beach" },
        { to: "/mold-inspection-palm-beach-gardens", label: "Palm Beach Gardens" },
        { to: "/mold-inspection-jupiter", label: "Jupiter" },
      ]}
    />
  );
}