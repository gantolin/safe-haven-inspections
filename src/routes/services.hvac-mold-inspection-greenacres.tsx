import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "Can you tell if there is mold in my air ducts?", a: "We inspect the air handler and the vents, measure humidity, and sample the air the system delivers. Together those show whether the system is a source and whether spores are elevated indoors." },
  { q: "Do you clean ducts or replace AC units?", a: "No. We inspect and test only. The report tells an AC contractor or a remediator what needs to be done, and we can test again afterward." },
  { q: "How long do results take?", a: "Lab results and the written report are typically back within 24 hours of the visit." },
];

const DESCRIPTION = "HVAC mold inspection in Greenacres, FL. Air handler, drain line, vents, and indoor air checked by a licensed mold assessor. Call (561) 632-6387.";

export const Route = createFileRoute("/services/hvac-mold-inspection-greenacres")({
  head: () => {
    const base = pageMeta({
      path: "/services/hvac-mold-inspection-greenacres/",
      title: "HVAC Mold Inspection in Greenacres, FL | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(serviceSchema({ name: "HVAC Mold Inspection", description: DESCRIPTION, path: "/services/hvac-mold-inspection-greenacres/" })),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "HVAC Mold Inspection", path: "/services/hvac-mold-inspection-greenacres/" },
          ]),
        ),
      ],
    };
  },
  component: HvacMoldInspectionPage,
});

function HvacMoldInspectionPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="HVAC Mold Inspection in Greenacres, FL"
      intro={"An HVAC mold inspection in Greenacres checks whether your air conditioning system is growing mold or spreading it through the house. We look at the air handler, the drain line, and the vents, measure the humidity, and sample the air. An independent lab reports what is there within 24 hours."}
      sections={[
        {
          h2: "Why AC systems grow mold in Greenacres",
          paragraphs: [
            "Many Greenacres homes still run on AC systems that have been patched for years instead of replaced. An older system keeps cooling long after it stops removing moisture, so the house feels fine while the humidity stays high.",
            "The air handler closet is the other usual suspect. A condensate line that backs up wets the closet floor and the base of the unit, and the blower then carries what grows there to every room.",
          ],
        },
        {
          h2: "What we check on an HVAC mold inspection",
          bullets: [
            "The air handler and its closet, including the drain pan and condensate line",
            "Return and supply vents for visible growth and staining",
            "Temperature, relative humidity, and dew point in the rooms the system serves",
            "Air samples indoors, compared with an outdoor sample from the same day",
            "Surface samples where growth is visible",
          ],
        },
        {
          h2: "Signs the AC may be the source",
          bullets: [
            "A musty smell that starts when the system turns on",
            "Dark spotting on or around the vents",
            "Allergy symptoms that ease when you leave the house",
            "Water or staining in the air handler closet",
            "Mold that keeps coming back on the coolest walls and inside closets",
          ],
        },
        {
          h2: "An AC company or a mold assessor?",
          paragraphs: [
            "An AC company can repair or clean the system. Telling you whether what is on the vent is mold, what kind, and whether it is in the air takes a licensed mold assessor and a lab. We inspect and test only, so the report is not a quote for duct cleaning or a new unit.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/air-quality-testing-greenacres/", label: "Indoor air quality testing", blurb: "Spore-trap air samples compared with an outdoor control." },
        { to: "/services/humidity-testing-greenacres/", label: "Humidity testing", blurb: "Whether damp air, not a leak, is driving the problem." },
        { to: "/services/attic-mold-inspection-greenacres/", label: "Attic mold inspection", blurb: "Ductwork and air handlers that run through the attic." },
      ]}
      heroImage={{"src": "/hero-humidity.jpg", "alt": "Digital hygrometer reading indoor humidity and temperature during an HVAC mold inspection", "caption": "Humidity and temperature are logged in the rooms the system serves.", "width": 1400, "height": 875}}
      ctaTitle="Musty smell when the AC kicks on?"
      ctaBody="Find out whether the system is the source before you pay for cleaning or a new unit."
    />
  );
}
