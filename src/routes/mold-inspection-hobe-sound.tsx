import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-hobe-sound")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-hobe-sound",
      title: "Mold Inspection Hobe Sound FL | Safe Haven",
      description:
        "Independent mold inspection and testing in Hobe Sound, FL. Lab-backed reports for older cottages, wooded estates, and well-water properties.",
    }),
  component: HobeSoundPage,
});

function HobeSoundPage() {
  return (
    <CityMoldPage
      city="Hobe Sound"
      county="Martin County"
      intro="A mold inspection in Hobe Sound, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Hobe Sound mold assessor — objective, lab-backed, and never selling remediation."
      localAngle={{
        heading: "Hobe Sound-specific moisture concerns",
        paragraphs: [
          "Hobe Sound's housing stock ranges from Jupiter Island estates to modest older cottages set back under thick oak and pine canopy. That mature tree cover keeps roofs and exterior walls shaded and slow to dry after rain — the perfect setup for moss-fed roof leaks, chronic soffit staining, and mold behind exterior sheathing that a quick visual walk-through will miss.",
          "Many Hobe Sound properties also run on private well water, which means iron- and sulfur-heavy supply that can leave persistent damp staining around fixtures, laundry rooms, and irrigation entry points. Combined with older CBS and wood-frame construction, we frequently document moisture problems tied to well and irrigation lines rather than the roof or HVAC — and our inspection is built to find them.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-stuart", label: "Stuart" },
        { to: "/mold-inspection-jensen-beach", label: "Jensen Beach" },
        { to: "/mold-inspection-port-salerno", label: "Port Salerno" },
      ]}
    />
  );
}