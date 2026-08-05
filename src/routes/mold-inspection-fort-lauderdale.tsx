import { createFileRoute } from "@tanstack/react-router";
import { CityMoldPage } from "@/components/city-mold-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mold-inspection-fort-lauderdale")({
  head: () =>
    pageMeta({
      path: "/mold-inspection-fort-lauderdale",
      title: "Mold Inspection Fort Lauderdale FL | Licensed Mold Assessor",
      description:
        "Independent, state-licensed mold inspection in Fort Lauderdale, FL. Lab-backed reports for canal-front homes, high-rise condos, and mid-century houses.",
    }),
  component: FortLauderdalePage,
});

function FortLauderdalePage() {
  return (
    <CityMoldPage
      city="Fort Lauderdale"
      county="Broward County"
      localFaqs={[
        {
          q: "Fort Lauderdale housing varies so much — does the inspection change by neighborhood?",
          a: "Substantially. A Las Olas Isles or Rio Vista canal home is a different inspection from a Victoria Park mid-century single-story, which is different again from an Intracoastal high-rise condo. Canal-front properties get scrutiny at the slab edge and seawall side; mid-century houses get roof-to-wall details and original window assemblies; high-rise units get HVAC dehumidification performance and party-wall assemblies. The dense urban core adds its own issue — tight setbacks trap moisture between buildings and around condensers, so exterior walls stay damp far longer than they should.",
        },
        {
          q: "Does Broward's hurricane building code affect mold risk in Fort Lauderdale?",
          a: "Indirectly, yes — and it's worth understanding. The Florida Building Code defines the High-Velocity Hurricane Zone as Broward and Miami-Dade counties only, so Fort Lauderdale homes built or re-glazed under it carry impact-rated openings and a tighter, better-sealed envelope than comparable homes one county north. That's excellent for storm protection. But a tighter house also exchanges less air with the outside, so when an oversized or short-cycling AC drops the temperature without running long enough to remove moisture, that humidity has nowhere to go and condenses on the coolest interior surfaces — exterior-wall closets, behind furniture, around supply registers. We see it specifically in newer and retrofitted Fort Lauderdale construction.",
        },
        {
          q: "Our Fort Lauderdale building has a milestone inspection coming up. Is mold part of it?",
          a: "Not directly, but the two overlap more than most boards expect. Florida Statute 553.899 requires a milestone inspection for condominium and cooperative buildings three stories or more, by December 31 of the year the building turns 30 — and a local enforcement agency may require it at 25 years where salt-air exposure warrants it. That inspection examines structure, not indoor air. But waterproofing, windows, and doors are among the components a Structural Integrity Reserve Study must cover, and where those findings identify long-term water intrusion there is very often interior mold behind it that nobody has assessed. We're regularly brought in after a milestone or SIRS report flags moisture, to document what it has actually caused inside the units.",
        },
      ]}
      intro="A mold inspection in Fort Lauderdale, FL is an on-site, licensed evaluation of your property for hidden moisture, active mold growth, and elevated indoor air-quality readings. Safe Haven Inspections is an independent Fort Lauderdale mold assessor — testing and reporting only, so your findings are unbiased and lab-backed."
      localAngle={{
        heading: "Fort Lauderdale-specific moisture concerns",
        paragraphs: [
          "Fort Lauderdale's building stock is unusually mixed for a single city — Las Olas Isles and Rio Vista canal homes, mid-century single-story houses in Victoria Park and Coral Ridge, and high-rise condos along the Intracoastal and beach. Each type has its own failure mode: canal homes see slab-edge intrusion and dock-side stucco decay, mid-century houses hide mold behind original terrazzo baseboards and single-pane windows, and high-rises regularly show HVAC condensate and stack-effect moisture at exterior wall junctions.",
          "The dense urban core also means shared walls, party-wall assemblies, and tight setbacks that trap moisture between buildings and around AC condensers. Our inspection combines moisture mapping, thermal imaging, and targeted air and surface sampling calibrated to the specific construction type — not a one-size checklist.",
        ],
      }}
      otherCities={[
        { to: "/mold-inspection-hollywood", label: "Hollywood" },
        { to: "/mold-inspection-pompano-beach", label: "Pompano Beach" },
        { to: "/mold-inspection-plantation", label: "Plantation" },
      ]}
    />
  );
}