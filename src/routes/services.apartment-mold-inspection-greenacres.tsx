import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "Can a tenant order a mold inspection?", a: "Yes. You can have the unit you live in inspected and tested, and the report is yours to share with whoever you choose." },
  { q: "Will the report say who is responsible?", a: "The report documents where the moisture is and where it appears to come from. Who pays for the repair is between you and your landlord, association, or insurer, and the report is the evidence that conversation runs on." },
  { q: "Do you inspect the neighboring unit?", a: "Only with permission. If the readings point at a shared wall or the unit above, the report says so and explains what would confirm it." },
];

const DESCRIPTION = "Apartment mold inspection in Greenacres, FL for renters, condo owners, and landlords. An independent, lab-backed report. Call (561) 632-6387.";

export const Route = createFileRoute("/services/apartment-mold-inspection-greenacres")({
  head: () => {
    const base = pageMeta({
      path: "/services/apartment-mold-inspection-greenacres/",
      title: "Apartment Mold Inspection in Greenacres, FL | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(serviceSchema({ name: "Apartment Mold Inspection", description: DESCRIPTION, path: "/services/apartment-mold-inspection-greenacres/" })),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Apartment Mold Inspection", path: "/services/apartment-mold-inspection-greenacres/" },
          ]),
        ),
      ],
    };
  },
  component: ApartmentMoldInspectionPage,
});

function ApartmentMoldInspectionPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Apartment Mold Inspection in Greenacres, FL"
      intro={"An apartment mold inspection in Greenacres documents what is in your unit, where the moisture is coming from, and whether the air is affected. You get a written, lab-backed report you can hand to a landlord, a condo association, or an insurer. It works the same way for a rented apartment, a condo, or a villa."}
      sections={[
        {
          h2: "Renters, condo owners, and landlords",
          subsections: [
            { h3: "Renters", body: "A report from a licensed assessor gives a landlord something specific to act on: where the moisture is, what the lab found, and what needs to be repaired." },
            { h3: "Condo and villa owners", body: "In attached housing the first question is whose leak it is. The report documents where the water appears to be coming from, including a shared wall or the unit above." },
            { h3: "Landlords and property managers", body: "When a tenant reports mold, an independent inspection replaces opinion with readings, photographs, and lab results, and it shows whether a repair worked." },
          ],
        },
        {
          h2: "Where the water comes from in Greenacres apartments and condos",
          paragraphs: [
            "Greenacres has a large share of attached housing, and a roof or plumbing leak in attached housing rarely stays in one unit. It moves through shared walls and ceilings, and by the time it shows on your side it has usually been wet for weeks.",
            "The other common cause is an air conditioner that cools but no longer removes moisture. No leak is involved, and mold shows up on the coolest walls and inside closets.",
          ],
        },
        {
          h2: "What the inspection covers",
          bullets: [
            "A visual inspection of the unit you have access to",
            "Moisture meter readings and thermal imaging of walls and ceilings",
            "Humidity and temperature readings",
            "Air and surface samples where they answer a question",
            "A written report, typically within 24 hours",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/commercial-mold-inspection-greenacres/", label: "Commercial mold inspection", blurb: "For associations, managers, and multi-unit buildings." },
        { to: "/services/air-quality-testing-greenacres/", label: "Indoor air quality testing", blurb: "Spore-trap air samples compared with an outdoor control." },
        { to: "/services/independent-mold-inspection-greenacres/", label: "Independent mold inspection", blurb: "Why it matters that the assessor does no remediation." },
      ]}
      heroImage={{"src": "/hero-real-estate.jpg", "alt": "Air sampling stand set up in an empty room during an apartment mold inspection", "caption": "Air sampling in a vacant unit. The sample is compared with outdoor air from the same day.", "width": 1400, "height": 875}}
      ctaTitle="Mold in your apartment or condo?"
      ctaBody="Get an independent report you can hand to a landlord, an association, or an insurer."
    />
  );
}
