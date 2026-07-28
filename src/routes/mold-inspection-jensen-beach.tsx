import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-jensen-beach")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-jensen-beach",
      title: "Mold Inspection Jensen Beach FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Jensen Beach, FL. Lab-backed reports for oceanfront condos, seasonal rentals, and coastal single-family homes.",
    }),
  component: JensenBeachPage,
});

function JensenBeachPage() {
  return (
    <CityMoldPage
      city="Jensen Beach"
      county="Martin County"
      intro="A mold inspection in Jensen Beach, FL is an on-site, licensed evaluation of your home for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Jensen Beach mold assessor — testing only, no remediation upsell."
      localAngle={{
        heading: "Jensen Beach-specific moisture concerns",
        paragraphs: [
          "Jensen Beach is defined by salt air, and it shows up in the inspection findings. Ocean-adjacent condos, Ocean Village-style buildings, and duplex rentals along the barrier island regularly present corroded window flashings, degraded stucco control joints, and moisture behind kitchen and bath tile — anywhere salt-laden air has been eating at the building envelope for a few seasons.",
          "The seasonal-rental profile is a category of its own. Homes and condos closed up for months at a time with the thermostat pushed high tend to develop HVAC condensate-line clogs, standing water in drain pans, and cold-surface mold on closet walls and around supply registers. We inspect and sample specifically for these off-season patterns so an owner or buyer sees exactly what a shut-up unit has been hiding.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-stuart", label: "Stuart" },
        { to: "/mold-inspection-palm-city", label: "Palm City" },
        { to: "/mold-inspection-hobe-sound", label: "Hobe Sound" },
      ]}
    />
  );
}