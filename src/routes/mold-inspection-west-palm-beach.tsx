import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-west-palm-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-west-palm-beach",
      title: "Mold Inspection West Palm Beach FL | Safe Haven",
      description:
        "Independent, state-licensed mold inspection and testing in West Palm Beach, FL. Lab-backed reports for historic districts, downtown condos, and Intracoastal-adjacent homes.",
    }),
  component: WestPalmBeachPage,
});

function WestPalmBeachPage() {
  return (
    <CityMoldPage
      city="West Palm Beach"
      county="Palm Beach County"
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