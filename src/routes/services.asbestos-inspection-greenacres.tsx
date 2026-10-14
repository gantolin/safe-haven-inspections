import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "What is the difference between an asbestos inspection and an asbestos survey?", a: "An inspection samples the suspect materials in a property. A survey is an inspection scoped to a project: it covers every material a renovation or demolition will disturb and is written for the contractor doing the work." },
  { q: "Do you remove asbestos?", a: "No. We inspect, survey, and test only. If a material is positive, the report is what an abatement contractor needs to quote the work." },
  { q: "How long do results take?", a: "Results come back from the accredited lab within 24 hours." },
];

const DESCRIPTION = "Asbestos inspection in Greenacres, FL by a certified asbestos inspector. Asbestos surveys before renovation or demolition, lab results in 24 hours.";

export const Route = createFileRoute("/services/asbestos-inspection-greenacres")({
  head: () => {
    const base = pageMeta({
      path: "/services/asbestos-inspection-greenacres/",
      title: "Asbestos Inspection in Greenacres, FL | Surveys | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(serviceSchema({ name: "Asbestos Inspection", description: DESCRIPTION, path: "/services/asbestos-inspection-greenacres/" })),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Asbestos Inspection", path: "/services/asbestos-inspection-greenacres/" },
          ]),
        ),
      ],
    };
  },
  component: AsbestosInspectionPage,
});

function AsbestosInspectionPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Asbestos Inspection in Greenacres, FL"
      heroImage={{"src": "/hero-asbestos-inspection.jpg", "alt": "Walls opened during a renovation, exposing old building materials", "caption": "Materials a renovation will disturb are sampled before the work starts.", "width": 1400, "height": 875}}
      intro={"An asbestos inspection in Greenacres identifies which materials in a building contain asbestos before they are disturbed. Landon Heinrichs is a certified asbestos inspector. He inspects the property, samples the suspect materials, and sends them to an accredited lab, with results in 24 hours."}
      sections={[
        {
          h2: "Asbestos survey before renovation or demolition",
          paragraphs: [
            "An asbestos survey covers every material the work will disturb, not just one ceiling. It lists what was sampled, where, and what the lab found, so the contractor knows what can be cut, sanded, or torn out and what cannot.",
            "Contractors and building departments often ask for a survey before work starts. Tell us what yours requires and we will tell you whether our survey covers it.",
          ],
        },
        {
          h2: "What an asbestos inspection covers",
          bullets: [
            "Popcorn and other textured ceilings",
            "Vinyl floor tile and the adhesive under it",
            "Drywall joint compound and wall texture",
            "Pipe wrap and duct insulation",
            "Roofing and siding materials, where they are part of the project",
            "A written report listing each sample, its location, and the lab result",
          ],
        },
        {
          h2: "Inspection, survey, or a single test?",
          subsections: [
            { h3: "Single test", body: "One material, one question. For example, a popcorn ceiling you plan to scrape." },
            { h3: "Inspection", body: "A walk-through of the home that samples each suspect material, common before buying an older property." },
            { h3: "Survey", body: "A documented inspection of everything a renovation or demolition will disturb, written for the contractor doing the work." },
          ],
        },
        {
          h2: "Older buildings in Greenacres",
          paragraphs: [
            "Greenacres has a lot of housing from the 1970s, when asbestos was still common in ceilings, flooring, and joint compound. None of it can be identified by eye, and plenty of materials from those years contain none. Sampling is the only way to know.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/asbestos-testing-greenacres/", label: "Asbestos testing", blurb: "Sampling and lab analysis of a single material or a few." },
        { to: "/services/popcorn-ceiling-asbestos-testing-greenacres/", label: "Popcorn ceiling asbestos testing", blurb: "The most common single test before scraping a ceiling." },
        { to: "/services/commercial-mold-inspection-greenacres/", label: "Commercial mold inspection", blurb: "For offices, rentals, and multi-unit buildings." },
      ]}
      independence={{"h2": "An asbestos inspector who does not sell abatement", "body": "Safe Haven Inspections inspects, surveys, and samples for asbestos. We do not remove, encapsulate, or subcontract abatement, and we take no referral fee from the contractors who do. A finding from someone with nothing to sell on the other side of it is worth more, whether it is positive or negative."}}
      ctaTitle="Renovating or demolishing an older building?"
      ctaBody="Have it inspected for asbestos before the work starts. Lab results in 24 hours."
    />
  );
}
