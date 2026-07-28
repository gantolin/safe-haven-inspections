import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "What's the difference between a mold inspection report and a mold assessment protocol?",
    a: "An inspection report documents what an assessor found. A written mold remediation protocol is the formal scope of work a Florida-licensed assessor writes to instruct a remediator on what to remove, how to contain it, how to clean, and how success will be measured. Most projects that involve real remediation need both — and they should be produced by the assessor, not the remediator.",
  },
  {
    q: "Does Florida law require an assessor to write the protocol?",
    a: "For work performed for compensation, Florida licensing requires the mold assessor and mold remediator to be separate parties, and the assessor is responsible for the assessment and any remediation protocol used to guide the work. That's the separation Safe Haven Inspections operates on every project.",
  },
  {
    q: "Who reads the report and protocol?",
    a: "Typically: the homeowner, the remediator preparing an estimate, the insurance adjuster if a claim is involved, and — if there is one — the attorney or public adjuster representing the homeowner. The report is written so all of them can follow it without needing us to translate.",
  },
  {
    q: "How long does it take to receive the report?",
    a: "Lab-analyzed samples are typically returned within 24 hours, and the written report — with photos, moisture readings, lab results, and recommendations — is typically delivered within 24 hours as well. Most clients have their full report in hand the next day.",
  },
];

export const Route = createFileRoute("/services/mold-assessment-report")({
  head: () => {
    const base = pageMeta({
      path: "/services/mold-assessment-report",
      title: "Mold Assessment Report & Protocol | Safe Haven",
      description:
        "Formal Florida mold assessment reports and remediation protocols from a licensed, independent assessor. Documentation remediators, insurers, and attorneys can rely on.",
    });
    return { ...base, scripts: [jsonLdScript(faqSchema(faqs))] };
  },
  component: MoldAssessmentReportPage,
});

function MoldAssessmentReportPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Mold Assessment & Written Protocol Reports"
      intro={
        <>
          A mold assessment report is the formal, written deliverable a
          Florida-licensed mold assessor produces after inspecting and
          sampling a property — the document that turns observations and lab
          data into an evidence record and, when needed, a remediation
          protocol. It's what remediators bid against, what insurers rely on,
          and what homeowners keep on file long after the work is done.
        </>
      }
      sections={[
        {
          h2: "What the report actually is",
          paragraphs: [
            "A mold assessment report is more than a checklist. It combines methodology, environmental readings, visual documentation, moisture mapping, third-party laboratory results, and an assessor's interpretation into a single document that stands on its own. Anyone reading it — a homeowner, a remediator writing a bid, an insurance adjuster reviewing a claim — should be able to understand what was inspected, what was found, and what needs to happen next.",
            "When remediation is warranted, the report goes further and includes a written protocol: the formal scope of work a Florida-licensed remediator will follow to correct the problem. That protocol turns 'there is mold in this house' into a specific, measurable job — and it separates the assessment from the remediation, exactly the way Florida licensing intends.",
          ],
        },
        {
          h2: "What's inside a Safe Haven assessment report",
          subsections: [
            { h3: "Executive summary", body: "A plain-language overview of the property, the reason for the assessment, key findings, and top-line recommendations. Written first so a busy reader can act without wading through details." },
            { h3: "Methodology", body: "What was inspected, which tools were used, and how samples were collected — including chain-of-custody notes and lab accreditation." },
            { h3: "Environmental conditions", body: "Temperature, humidity, and dew point at the time of inspection, with an outdoor control. Necessary context for interpreting moisture and air-quality readings." },
            { h3: "Findings by area", body: "Room by room or zone by zone: visible observations, moisture readings, and photographs. Each finding is tied to a specific location." },
            { h3: "Laboratory results", body: "Full third-party lab reports attached, plus a narrative interpretation comparing indoor to outdoor and unaffected controls." },
            { h3: "Recommendations", body: "Prioritized next steps — from 'no action recommended' through 'targeted cleaning' to 'follow protocol below.' Recommendations are limited to what an independent assessor is qualified to make." },
            { h3: "Written protocol (when applicable)", body: "The scope of work a licensed remediator will follow: containment, PPE, negative air, removal boundaries, cleaning methods, and clearance criteria." },
          ],
        },
        {
          h2: "How the report is produced",
          steps: [
            { n: "01", h: "On-site data collection", b: "Photos, moisture readings, thermal images, sample locations, and environmental readings are captured with unique IDs tied to a floor plan or photo set." },
            { n: "02", h: "Lab analysis", b: "Samples are sent to an AIHA-accredited third-party laboratory under chain-of-custody. Results are received in the assessor's name for independence." },
            { n: "03", h: "Draft assembly", b: "Field data and lab results are combined into a draft report. Findings are cross-checked against photographs and location notes." },
            { n: "04", h: "Protocol writing", b: "If remediation is warranted, the assessor writes a protocol that a licensed remediator can bid and execute against — including the criteria we'll use later at clearance." },
            { n: "05", h: "Review & delivery", b: "The report is proofed, sealed, and delivered as a PDF. We walk you through it on a call so nothing gets misinterpreted." },
          ],
        },
        {
          h2: "How remediators use the protocol",
          paragraphs: [
            "For remediators, the protocol removes ambiguity. Instead of walking a property, eyeballing the problem, and quoting a scope from memory, they bid an already-defined job: this room under containment, these materials removed to these limits, this cleaning method, cleared under these criteria. Multiple remediators can bid the same protocol, which lets homeowners compare apples to apples — and produces a lower risk of scope creep once work begins.",
            "Because Safe Haven doesn't perform remediation and doesn't take referral fees, the protocol reflects the job that should be done, not a job sized to a particular contractor's crew.",
          ],
        },
        {
          h2: "How insurers and attorneys use the report",
          paragraphs: [
            "Insurance adjusters need documentation of cause, extent, and remediation scope to evaluate a claim. Attorneys involved in real-estate disputes, landlord-tenant issues, or construction defect matters need the same — written by someone whose license and independence are on the line. A well-structured assessment report gives both audiences a document that reads clearly without needing the assessor on the phone every time a question comes up.",
            "That's why the format matters as much as the substance. Executive summary at the top, methodology and controls explicit, lab reports attached, findings and recommendations clearly separated, and dates and signatures where they need to be.",
          ],
        },
        {
          h2: "How this fits with our other services",
          paragraphs: [
            "The assessment report is the connective tissue across everything else we do. Air quality testing, surface sampling, and moisture mapping all feed into it. Real estate transactions, commercial jobs, and post-remediation verification all rely on it. And because we never remediate, the report and any protocol it contains carry the credibility a homeowner needs when the next contractor walks through the door.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/post-remediation-verification", label: "Post-remediation verification", blurb: "Independent clearance graded against the criteria written into the protocol." },
        { to: "/services/air-quality-testing", label: "Airborne mold & air quality testing", blurb: "The lab data most often referenced by the report's findings and recommendations." },
        { to: "/services/commercial-mold-inspection", label: "Commercial mold inspection", blurb: "Multi-stakeholder reporting for offices, rentals, HOAs, and retail properties." },
      ]}
      ctaTitle="Request a formal assessment report"
      ctaBody="Get a documented, defensible assessment report — and, where needed, a written remediation protocol — from an independent licensed assessor."
    />
  );
}