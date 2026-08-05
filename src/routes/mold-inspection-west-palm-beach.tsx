import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-west-palm-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-west-palm-beach",
      title: "Mold Inspection West Palm Beach FL | Licensed Mold Assessor",
      description:
        "Independent, state-licensed mold inspection in West Palm Beach, FL. Lab-backed reports for historic districts, downtown condos, and Intracoastal homes.",
    }),
  component: WestPalmBeachPage,
});

function WestPalmBeachPage() {
  return (
    <CityMoldPage
      city="West Palm Beach"
      county="Palm Beach County"
      localFaqs={[
        {
          q: "West Palm Beach ranges from 1920s bungalows to high-rise condos. Where do you start?",
          a: "With the age and type of your specific building, because the failure modes barely overlap. In pre-war housing — El Cid, Flamingo Park, Northwood Shores — we're looking at original wall assemblies, floor plates, and roof-to-wall details on structures that have had a century of humidity. Along the Intracoastal and in the downtown mid- and high-rise corridor the driver shifts entirely to humidity load: older condos with original single-stage HVAC that cools but can't dehumidify against constant waterway humidity, producing consistent growth at cold surfaces inside the unit.",
        },
        {
          q: "Is West Palm Beach in the High-Velocity Hurricane Zone?",
          a: "No. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so West Palm Beach — in Palm Beach County — is built to the standard statewide code rather than HVHZ requirements. That matters for moisture because the housing stock here is mixed: homes with original single-glazed openings and more incidental air exchange sit alongside newer or impact-retrofitted homes that seal far tighter. The two fail in opposite ways — older homes tend to let water in at windows, doors, and roof penetrations, while tighter homes trap humidity and condense it on cool interior surfaces. We test for both rather than assuming which one you have.",
        },
        {
          q: "Our West Palm Beach building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in West Palm Beach, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent West Palm Beach mold assessor — inspection and testing only, so your findings stay objective and lab-backed."
      localAngle={{
        heading: "West Palm Beach-specific moisture concerns",
        paragraphs: [
          "West Palm Beach spans an unusually wide range of housing ages — from 1920s El Cid, Flamingo Park, and Northwood Shores bungalows to downtown high-rise condos and post-2000 townhomes in Northwood Village. In the pre-war housing stock we routinely document mold behind original wood paneling, at cracked coquina foundation walls, and along single-pane window jambs. The old-house patterns simply don't show up on a modern-only checklist.",
          "Along the Intracoastal and in the downtown mid- and high-rise corridor, the driver shifts to humidity load. Older condos with original single-stage HVAC struggle to dehumidify against constant waterway humidity, and we consistently find mold on cold-supply diffusers, inside built-in millwork on the water-facing side, and at exterior wall junctions where the building envelope has settled. Our inspection is calibrated to whichever pattern your property actually presents.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-lake-worth-beach", label: "Lake Worth Beach" },
        { to: "/mold-inspection-riviera-beach", label: "Riviera Beach" },
        { to: "/mold-inspection-palm-beach-gardens", label: "Palm Beach Gardens" },
      ]}
    />
  );
}