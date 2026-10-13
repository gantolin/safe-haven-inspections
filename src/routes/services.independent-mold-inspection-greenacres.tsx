import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "Do you do mold removal?", a: "No. We inspect, test, and report. If remediation is needed, the report gives you what you need to hire a remediator of your choice, and we can verify the work afterward." },
  { q: "Can you review a remediation quote I already have?", a: "Yes. An objective look at a remediation proposal is one of the reasons people call an independent assessor. We compare the proposed scope with what the inspection and lab results actually show." },
  { q: "Who analyzes the samples?", a: "An independent AIHA-accredited third-party laboratory. Safe Haven does not analyze samples in-house." },
];

const DESCRIPTION = "Independent mold inspection in Greenacres, FL from a licensed assessor who does not sell remediation. Lab-backed report in 24 hours. Call (561) 632-6387.";

export const Route = createFileRoute("/services/independent-mold-inspection-greenacres")({
  head: () => {
    const base = pageMeta({
      path: "/services/independent-mold-inspection-greenacres/",
      title: "Independent Mold Inspection in Greenacres, FL | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(serviceSchema({ name: "Independent Mold Inspection", description: DESCRIPTION, path: "/services/independent-mold-inspection-greenacres/" })),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Independent Mold Inspection", path: "/services/independent-mold-inspection-greenacres/" },
          ]),
        ),
      ],
    };
  },
  component: IndependentMoldInspectionPage,
});

function IndependentMoldInspectionPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Independent Mold Inspection in Greenacres, FL"
      intro={"An independent mold inspection in Greenacres means the company inspecting your home has nothing to sell you afterward. Safe Haven inspects, tests, and reports. We do not perform, subcontract, or take referral fees for remediation, so the findings read the same whether the news is good or bad."}
      sections={[
        {
          h2: "Why independence matters in a mold inspection",
          paragraphs: [
            "Many mold companies both test and remediate. When one company finds the problem and also quotes the cleanup, the size of the problem and the size of the invoice are decided by the same party.",
            "Florida's mold licensing law keeps the assessor and the remediator separate on the same job. We go a step further and do no remediation at all.",
          ],
        },
        {
          h2: "What an independent inspection includes",
          bullets: [
            "A full visual inspection with moisture meters and thermal imaging",
            "Air and surface samples where a sample answers a real question",
            "Analysis by an independent AIHA-accredited laboratory",
            "A written report, typically within 24 hours",
            "A remediation protocol any licensed contractor can bid from",
            "Clearance testing after the work is done, if you want it",
          ],
        },
        {
          h2: "When people ask for third party mold testing",
          bullets: [
            "You have a remediation quote and want a second opinion on the scope",
            "A landlord and a tenant disagree about what is in the unit",
            "A buyer and a seller need one report both sides will accept",
            "An insurance claim needs evidence from someone with no stake in the repair",
            "A contractor just finished and you want the cleanup checked before the walls close",
          ],
        },
        {
          h2: "Based in Greenacres",
          paragraphs: [
            "Safe Haven is family operated and based in Greenacres. We cover ZIP codes 33413, 33463, and 33467 and the rest of Palm Beach County, along with Broward and Martin County.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/mold-testing-greenacres/", label: "Mold testing", blurb: "Air and surface samples analyzed by an accredited lab." },
        { to: "/services/post-remediation-verification-greenacres/", label: "Post-remediation verification", blurb: "An independent pass or fail after any remediation company finishes." },
        { to: "/services/mold-assessment-report-greenacres/", label: "Mold assessment report", blurb: "The written report and protocol contractors bid from." },
      ]}
      heroImage={{"src": "/hero-mold-inspection.jpg", "alt": "Moisture meter held against an interior baseboard during an independent mold inspection", "caption": "Moisture readings are taken room by room and written into the report.", "width": 1400, "height": 875}}
      ctaTitle="Want an answer from someone with nothing to sell?"
      ctaBody="Talk to a licensed, independent mold assessor. The phone call is free."
    />
  );
}
