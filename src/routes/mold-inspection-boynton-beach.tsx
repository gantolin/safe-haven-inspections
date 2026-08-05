import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-boynton-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-boynton-beach",
      title: "Mold Inspection Boynton Beach FL | Licensed Mold Assessor",
      description:
        "Independent mold inspection and testing in Boynton Beach, FL. Lab-backed reports for 55+ communities, seasonally occupied condos, and older coastal properties.",
    }),
  component: BoyntonBeachPage,
});

function BoyntonBeachPage() {
  return (
    <CityMoldPage
      city="Boynton Beach"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "We close up our Boynton Beach place from May to October. What should we check when we get back?",
          a: "Seasonal closure is the biggest single driver we see in Leisureville, Palm Isles, and Valencia. A unit held at 80°F or higher all summer never dehumidifies — the AC barely runs, indoor humidity climbs, and mold establishes on cool surfaces: exterior-side closet walls, behind headboards, inside cabinetry. Check the condensate drain first, then closets and any wall shared with the outside. If there's a musty smell when you open the door, that is worth testing before you air the place out — once the AC has run for a week, airborne readings drop and the evidence gets harder to capture.",
        },
        {
          q: "Is Boynton Beach in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Boynton Beach — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
        {
          q: "Our Boynton Beach building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in Boynton Beach, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Boynton Beach mold assessor — objective, lab-backed, no remediation upsell."
      localAngle={{
        heading: "Boynton Beach-specific moisture concerns",
        paragraphs: [
          "Boynton Beach's 55+ and snowbird communities west of I-95 — Leisureville, Palm Isles, Valencia — are dominated by seasonal occupancy. Units sit closed from May through October with thermostats pushed to 80°F or higher, indoor humidity climbs into the 70s, and mold establishes on closet walls, behind headboards, and around exhaust penetrations. What owners see on return is only a small fraction of the actual footprint.",
          "The older coastal condominium stock along Federal Highway and toward the Intracoastal adds a second pattern: original single-stage HVAC systems that cool but don't dehumidify well, packaged through-wall units corroded by decades of salt air, and drain pans that overflow long before anyone notices. Our inspection is calibrated for both the closed-up seasonal pattern and the aging-mechanical failure mode Boynton condos routinely show.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-delray-beach", label: "Delray Beach" },
        { to: "/mold-inspection-lake-worth-beach", label: "Lake Worth Beach" },
        { to: "/mold-inspection-greenacres", label: "Greenacres" },
      ]}
    />
  );
}