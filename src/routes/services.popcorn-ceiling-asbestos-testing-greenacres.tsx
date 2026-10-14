import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "Is all popcorn ceiling asbestos?", a: "No. It was common in ceilings sprayed before the late 1970s, but many ceilings from that era contain none. Only a lab test can tell." },
  { q: "Do you remove popcorn ceilings?", a: "No. We sample and test only. If the result is positive, the report is what an abatement contractor needs to quote the work." },
  { q: "How long do results take?", a: "Results come back from the accredited lab within 24 hours." },
];

const DESCRIPTION = "Popcorn ceiling asbestos testing in Greenacres, FL. A certified asbestos inspector takes the sample and an accredited lab analyzes it. Results in 24 hours.";

export const Route = createFileRoute("/services/popcorn-ceiling-asbestos-testing-greenacres")({
  head: () => {
    const base = pageMeta({
      path: "/services/popcorn-ceiling-asbestos-testing-greenacres/",
      title: "Popcorn Ceiling Asbestos Testing in Greenacres, FL | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(serviceSchema({ name: "Popcorn Ceiling Asbestos Testing", description: DESCRIPTION, path: "/services/popcorn-ceiling-asbestos-testing-greenacres/" })),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Popcorn Ceiling Asbestos Testing", path: "/services/popcorn-ceiling-asbestos-testing-greenacres/" },
          ]),
        ),
      ],
    };
  },
  component: PopcornCeilingAsbestosTestingPage,
});

function PopcornCeilingAsbestosTestingPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Popcorn Ceiling Asbestos Testing in Greenacres, FL"
      intro={"Popcorn ceiling asbestos testing in Greenacres tells you whether the texture on your ceiling contains asbestos before anyone scrapes, sands, or drills it. Landon Heinrichs is a certified asbestos inspector. He takes the sample, an accredited lab analyzes it, and you have a written answer in 24 hours."}
      heroImage={{"src": "/hero-popcorn-ceiling.jpg", "alt": "Close-up of a bumpy textured ceiling finish", "caption": "A textured ceiling can look like any other. Only a lab test shows whether it contains asbestos.", "width": 1400, "height": 875}}
      sections={[
        {
          h2: "When to test a popcorn ceiling",
          bullets: [
            "Before scraping or removing the texture",
            "Before cutting in recessed lights, fans, or vents",
            "After a leak has made the ceiling flake or sag",
            "When buying a home with original ceilings",
            "When a contractor asks for a lab result before starting",
          ],
        },
        {
          h2: "How a popcorn ceiling asbestos test works",
          steps: [
            { n: "01", h: "Sample", b: "A small amount of texture is taken from the ceiling. Homes with ceilings sprayed at different times may need more than one sample." },
            { n: "02", h: "Seal and label", b: "Each sample is sealed and labeled on site with its location." },
            { n: "03", h: "Accredited lab", b: "The lab determines whether asbestos fibers are present and reports the result." },
            { n: "04", h: "Written answer", b: "You get the result in writing within 24 hours, with a plain explanation of what it means for your project." },
          ],
        },
        {
          h2: "Popcorn ceilings in Greenacres homes",
          paragraphs: [
            "Greenacres has a lot of housing from the 1970s, the years when asbestos was common in sprayed ceilings. Plenty of ceilings from that era contain none, and you cannot tell which is which by looking. A lab result is the only way to know.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/asbestos-testing-greenacres/", label: "Asbestos testing", blurb: "Floor tile, pipe wrap, joint compound, and other suspect materials." },
        { to: "/services/mold-testing-greenacres/", label: "Mold testing", blurb: "Mold and asbestos can be sampled on the same visit." },
        { to: "/services/water-damage-inspection-greenacres/", label: "Water damage inspection", blurb: "When a leak is what damaged the ceiling." },
      ]}
      furtherReading={{ href: "/blog/asbestos-test-kits-what-they-get-right/", label: "Asbestos test kits: what they get right", blurb: "What a mail-in kit can and cannot tell you." }}
      independence={{"h2": "An asbestos inspector who does not sell abatement", "body": "Safe Haven Inspections performs asbestos sampling and lab analysis only. We do not remove, encapsulate, or subcontract abatement, and we take no referral fee from the contractors who do. A result from someone with nothing to sell on the other side of it is worth more, whether it is positive or negative."}}
      ctaTitle="Planning to scrape a popcorn ceiling?"
      ctaBody="Have it tested first. Results from an accredited lab in 24 hours."
    />
  );
}
