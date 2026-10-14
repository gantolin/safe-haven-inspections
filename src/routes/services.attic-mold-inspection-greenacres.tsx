import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "Do you go into the attic on every inspection?", a: "The attic is part of the full walk-through wherever it can be reached safely. If access is blocked or unsafe, the report says so." },
  { q: "How soon after a roof leak should the attic be checked?", a: "Soon. Mold can begin growing within 24 to 48 hours of a water event, and wet insulation holds moisture against the wood." },
  { q: "Do you repair the roof or remove attic mold?", a: "No. We inspect, test, and report. The report tells a roofer and a remediator what needs to be done, and we can verify the work afterward." },
];

const DESCRIPTION = "Attic mold inspection in Greenacres, FL. Roof deck, framing, insulation, and ductwork checked for moisture and growth. Call (561) 632-6387.";

export const Route = createFileRoute("/services/attic-mold-inspection-greenacres")({
  head: () => {
    const base = pageMeta({
      path: "/services/attic-mold-inspection-greenacres/",
      title: "Attic Mold Inspection in Greenacres, FL | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(serviceSchema({ name: "Attic Mold Inspection", description: DESCRIPTION, path: "/services/attic-mold-inspection-greenacres/" })),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Attic Mold Inspection", path: "/services/attic-mold-inspection-greenacres/" },
          ]),
        ),
      ],
    };
  },
  component: AtticMoldInspectionPage,
});

function AtticMoldInspectionPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Attic Mold Inspection in Greenacres, FL"
      intro={"An attic mold inspection in Greenacres checks the roof deck, framing, insulation, and ductwork above your ceiling for moisture and visible growth. The attic is part of our full walk-through wherever it can be reached safely, and it is the first place to look after a roof leak."}
      heroImage={{"src": "/hero-attic.jpg", "alt": "Attic roof deck and wood framing", "caption": "The roof deck, framing, and insulation are checked for moisture and growth.", "width": 1400, "height": 875}}
      sections={[
        {
          h2: "Why attics grow mold in Greenacres",
          paragraphs: [
            "Much of the housing in Greenacres is 30 to 50 years old, and the roofs are at or past their original service life. A flat-tile roof can look intact from the ground while the underlayment beneath has aged out. Water then gets in at valleys, vents, and other penetrations and wets the roof deck long before a stain appears on the ceiling below.",
            "The second source is the air conditioning. Ductwork and air handlers in a hot attic sweat, and a backed-up condensate line can soak the insulation around it.",
          ],
        },
        {
          h2: "What we check in the attic",
          bullets: [
            "Roof decking and framing for staining and visible growth",
            "Moisture meter readings on suspect wood",
            "Insulation that is wet, matted, or stained",
            "Ductwork and the air handler, where they run through the attic",
            "Thermal imaging of the ceilings below to find where water has traveled",
            "Surface samples where growth is visible",
          ],
        },
        {
          h2: "Signs from below that point to the attic",
          bullets: [
            "A stain at the ceiling edge, especially under a roof valley",
            "A musty smell that is stronger on the top floor",
            "Staining around a bathroom fan or a ceiling vent",
            "A recent roof leak or roof repair",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/thermal-imaging-greenacres/", label: "Thermal imaging inspection", blurb: "Infrared scanning to trace where water has traveled." },
        { to: "/services/water-damage-inspection-greenacres/", label: "Water damage inspection", blurb: "After a leak, a storm, or a flood." },
        { to: "/services/mold-testing-greenacres/", label: "Mold testing", blurb: "Air and surface samples analyzed by an accredited lab." },
      ]}
      ctaTitle="Roof leak, or a stain on the ceiling?"
      ctaBody="Have the attic checked before the insulation and wood stay wet any longer."
    />
  );
}
