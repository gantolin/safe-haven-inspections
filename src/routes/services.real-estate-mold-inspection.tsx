import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "Can you inspect within a tight inspection-period window?",
    a: "Yes — real estate inspections are scheduled with closing windows in mind. Once contracts are signed, we prioritize putting a team on-site within the inspection period, and lab-analyzed samples are typically returned within 24 hours so the written report is ready well ahead of most inspection-response deadlines.",
  },
  {
    q: "Is a mold inspection different from a general home inspection?",
    a: "Yes. A general home inspection covers the whole house at a broad level — roof, plumbing, electrical, systems — and typically notes moisture or suspected mold as an observation for a specialist. A mold inspection is that specialist step: a licensed mold assessor performing focused visual, moisture, and lab-based evaluation.",
  },
  {
    q: "Should the buyer or the seller order the inspection?",
    a: "Either can. Buyers order it to protect themselves before closing. Sellers order it proactively to head off surprises during the inspection period, and to have a clean third-party report ready when questions arise. In both cases, an independent assessor produces a report both parties can trust.",
  },
  {
    q: "Do you work directly with realtors?",
    a: "Yes. We regularly coordinate with agents on scheduling, access, and reporting timelines. See our dedicated Realtors page for the details.",
  },
];

export const Route = createFileRoute("/services/real-estate-mold-inspection")({
  head: () => {
    const base = pageMeta({
      path: "/services/real-estate-mold-inspection",
      title: "Real Estate Mold Inspection FL | Safe Haven",
      description:
        "Independent pre-purchase and pre-sale mold inspection for South Florida real-estate transactions. Fast scheduling, clear reports, and no remediation upsell.",
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(
          serviceSchema({
            name: "Real Estate Mold Inspection FL",
            description: "Independent pre-purchase and pre-sale mold inspection for South Florida real-estate transactions. Fast scheduling, clear reports, and no remediation upsell.",
            path: "/services/real-estate-mold-inspection",
          }),
        ),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Real Estate Mold Inspection FL", path: "/services/real-estate-mold-inspection" },
          ]),
        ),
      ],
    };
  },
  component: RealEstatePage,
});

function RealEstatePage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Pre-Purchase & Real Estate Mold Inspection"
      intro={
        <>
          A real estate mold inspection is a focused, licensed evaluation of a
          home for hidden mold and moisture, delivered on the timeline a real
          estate transaction actually operates on. It gives buyers, sellers,
          and their agents an objective, third-party report that can be used
          to negotiate, disclose, or simply close with confidence.
        </>
      }
      sections={[
        {
          h2: "Why real estate transactions need a specialist",
          paragraphs: [
            "General home inspections are broad by design — they cover systems and structure, and most inspectors will flag suspected moisture or mold as a specialist referral rather than analyze it. That's the correct call, but it leaves buyers and sellers with an open question at exactly the moment they need answers.",
            "A licensed mold assessor closes that loop. In South Florida, where humidity, hurricanes, and aging HVAC systems create hidden moisture on a regular basis, an independent third-party inspection is one of the highest-leverage due-diligence steps a buyer can take — and one of the smartest disclosures a seller can offer proactively.",
          ],
        },
        {
          h2: "What a real estate mold inspection includes",
          subsections: [
            { h3: "Full visual inspection", body: "Accessible areas of the home — walls, ceilings, baseboards, cabinetry, attics, HVAC returns, and known problem areas — photographed and documented." },
            { h3: "Moisture mapping", body: "Infrared and moisture-meter survey of exterior walls, ceilings under wet rooms, HVAC closets, and around windows and doors to find hidden intrusion." },
            { h3: "Targeted lab sampling", body: "Air samples with outdoor controls, plus surface samples where visible material warrants identification. Analyzed by an AIHA-accredited third-party laboratory." },
            { h3: "Transaction-ready report", body: "A written report designed to be shared with the other side of the transaction: clear findings, photos, lab results, and prioritized recommendations in plain language." },
          ],
        },
        {
          h2: "How we work inside the inspection period",
          steps: [
            { n: "01", h: "Contract signed", b: "As soon as you have a ratified contract, we get on the schedule. Access details are coordinated with the listing agent." },
            { n: "02", h: "On-site inspection", b: "A licensed assessor performs the visual, moisture, and sampling work — typically 60 to 120 minutes for a single-family home." },
            { n: "03", h: "Lab analysis", b: "Samples ship the same day to the accredited third-party laboratory. Turnaround is set to match transaction timelines." },
            { n: "04", h: "Written report", b: "You receive a PDF report suitable for sharing with your agent, the other side, or an inspection-period addendum." },
            { n: "05", h: "Follow-up call", b: "We walk you and, if you want, your agent through the report so nothing gets misread as a negotiating tool that it isn't." },
          ],
        },
        {
          h2: "For buyers",
          bullets: [
            "Objective, lab-backed data before you sign or waive contingencies",
            "Documentation of any moisture history so it can't 'appear' after closing",
            "Air quality baseline for the day you take possession",
            "A licensed assessor's opinion, separate from any repair or remediation company",
            "Clear recommendations if additional inspection or repair is warranted",
          ],
        },
        {
          h2: "For sellers and listing agents",
          bullets: [
            "Head off surprises during the buyer's inspection period",
            "Present a clean third-party report as part of the listing package",
            "Understand any existing moisture or air-quality issue on your own timeline",
            "Avoid the classic 'buyer's inspector saw something ambiguous' delay",
            "Show that disclosures were made in good faith with independent data",
          ],
        },
        {
          h2: "What the report provides for the transaction",
          paragraphs: [
            "The report is written to function as evidence rather than opinion. Findings are photographed and located, lab results are attached with the outdoor control clearly labeled, and recommendations are prioritized by risk. Because it comes from an independent assessor with no remediation stake, both sides tend to accept it as a shared source of truth — which is exactly what a real-estate negotiation needs.",
            "Sellers use it to disclose accurately. Buyers use it to decide whether to close, ask for a credit, or request specific repairs. Agents use it to keep the conversation grounded in data instead of speculation.",
          ],
        },
        {
          h2: "How this fits with our other services",
          paragraphs: [
            "Real estate mold inspections lean on every other service we offer — visual inspection, moisture mapping, air testing, surface sampling — condensed into a transaction-ready package. If a buyer moves forward and later needs post-remediation verification after negotiated repairs, the same assessor and the same baseline data carry through to clearance.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/air-quality-testing", label: "Airborne mold & air quality testing", blurb: "The lab-backed indoor air data most transactions ultimately turn on." },
        { to: "/services/thermal-imaging", label: "Moisture mapping & thermal imaging", blurb: "Non-destructive scan for hidden moisture, ideal within an inspection window." },
        { to: "/services/mold-assessment-report", label: "Mold assessment & written protocol", blurb: "Formal protocol document when negotiated remediation is part of the deal." },
      ]}
      ctaTitle="Schedule a real estate mold inspection"
      ctaBody="Get an independent report inside your inspection window. Fast scheduling for buyers, sellers, and agents."
    />
  );
}