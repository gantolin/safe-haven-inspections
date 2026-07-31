import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "Why should an independent company do post-remediation verification?",
    a: "Florida's mold rules separate assessment from remediation for a reason: the company that performed the work should not also grade its own outcome. An independent assessor has no financial stake in the remediation invoice, so a pass/fail decision reflects what was actually accomplished — not who's paying for it.",
  },
  {
    q: "What does clearance testing actually check?",
    a: "It combines a visual re-inspection of the containment area, moisture-content readings on materials that were wet, and air-quality (and sometimes surface) samples analyzed by an accredited third-party lab. The goal is to confirm materials are dry, the area is visually clean, and indoor air is consistent with an unaffected reference or the outdoor control.",
  },
  {
    q: "What is a pass vs. a fail?",
    a: "Pass criteria depend on the original protocol, but generally require: visibly clean surfaces, moisture content within normal range for the material, and air-sample results not elevated relative to a control. A fail typically means visible residue remains, materials are still elevated in moisture, or lab counts remain elevated — pointing to more cleaning, more drying, or a missed moisture source.",
  },
  {
    q: "Can you do clearance if you didn't do the original inspection?",
    a: "Yes. In fact, that's one of the situations where independent verification matters most. We'll ask for the original scope of work or protocol, walk the site, and design a clearance plan that matches. Every clearance job is different — we give you a clear, upfront quote before any work begins, with no surprise fees. Call (561) 632-6387 or request a free phone consultation.",
  },
];

export const Route = createFileRoute("/services/post-remediation-verification")({
  head: () => {
    const base = pageMeta({
      path: "/services/post-remediation-verification",
      title: "Post-Remediation Verification | Safe Haven",
      description:
        "Independent post-remediation verification and clearance testing in South Florida. Third-party pass/fail decisions after any mold remediation company finishes.",
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(
          serviceSchema({
            name: "Post-Remediation Verification",
            description: "Independent post-remediation verification and clearance testing in South Florida. Third-party pass/fail decisions after any mold remediation company finishes.",
            path: "/services/post-remediation-verification",
          }),
        ),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Post-Remediation Verification", path: "/services/post-remediation-verification" },
          ]),
        ),
      ],
    };
  },
  component: PostRemediationPage,
});

function PostRemediationPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Post-Remediation Verification & Clearance Testing"
      intro={
        <>
          Post-remediation verification is the independent, third-party check
          that confirms a mold remediation project actually returned the space
          to a normal condition — visually, structurally dry, and free of
          elevated airborne spores. As a Florida-licensed mold assessor that
          performs no remediation, we grade the work objectively so you know
          whether it's safe to close up walls, move furniture back, and sign
          off on the invoice.
        </>
      }
      sections={[
        {
          h2: "Why independence is required for clearance",
          paragraphs: [
            "Florida licensing draws a clear line between the mold assessor — who inspects, tests, and writes protocols — and the mold remediator, who executes the cleanup. That separation is deliberate. If the same company both diagnoses the problem and grades its own remediation, there is no independent measure of whether the job succeeded.",
            "Safe Haven Inspections is exclusively on the assessment side of that line. We do not remediate, and we do not receive referral fees from remediation companies. When we say a job passes clearance, the pass reflects what was accomplished on site — not a business relationship.",
          ],
        },
        {
          h2: "What clearance testing actually checks",
          subsections: [
            { h3: "Visual re-inspection", body: "Inside the containment or work area, we look for any residual visible material, dust, or debris. Cleaning to a 'no visible dust or growth' standard is table stakes." },
            { h3: "Moisture content", body: "Every material that was involved in the moisture event — drywall, framing, subfloor — is metered to confirm it has actually dried to normal ranges, not just the surface." },
            { h3: "Air sampling", body: "Post-remediation air samples are collected inside the work area, in adjacent occupied space, and outdoors as a control. Results are analyzed by an AIHA-accredited third-party lab." },
            { h3: "Surface sampling (as needed)", body: "Where a specific location is in question, tape lifts or swabs verify that cleaned surfaces come back to a background reading." },
          ],
        },
        {
          h2: "How the process works",
          steps: [
            { n: "01", h: "Review the protocol", b: "We review the original assessment or remediation scope so the clearance plan matches the work that was supposed to be done." },
            { n: "02", h: "Pre-arrival requirements", b: "For a fair reading, the work area needs to be finished, cleaned, and left under containment with air scrubbers off for a set period before we arrive." },
            { n: "03", h: "Visual inspection", b: "We walk the area with the remediation lead if they're present, documenting the condition of every surface with photos and notes." },
            { n: "04", h: "Moisture verification", b: "Meter readings are recorded on affected materials and on unaffected reference materials for comparison." },
            { n: "05", h: "Sampling", b: "Air (and surface, where warranted) samples are collected under chain-of-custody and shipped to an accredited laboratory." },
            { n: "06", h: "Pass / fail decision", b: "Once results are back, we issue a written clearance report with a clear pass, conditional pass, or fail, plus specific reasoning. If it fails, the report says exactly what's wrong so it can be re-worked." },
          ],
        },
        {
          h2: "When clearance testing is the right service",
          bullets: [
            "A remediation project is about to close up walls and you want independent sign-off first",
            "You're a property manager or landlord with a tenant returning to a unit after remediation",
            "An insurance claim requires third-party clearance documentation",
            "You bought a home mid-remediation and want objective verification of what was done",
            "The remediation company is offering its own clearance test and you'd prefer an independent one",
            "You had a DIY cleanup performed and want documented confirmation that indoor air is back to baseline",
          ],
        },
        {
          h2: "What the clearance report includes",
          paragraphs: [
            "The clearance report documents pre-visit condition, environmental readings, all lab results with their outdoor and unaffected-area controls, visual observations with photographs, and a stated verdict: pass, conditional pass with defined follow-up items, or fail with the specific reasons. Because the report is used by insurers, buyers, remediators, and sometimes attorneys, it is written to stand on its own without needing us to re-explain it later.",
            "If the space fails clearance, we don't just say 'not passed' and walk away. The report is specific about which criteria failed and what the remediator should address. That protects the homeowner and, in most cases, actually helps the remediation company deliver a better final result.",
          ],
        },
        {
          h2: "How this fits with our other assessment services",
          paragraphs: [
            "Post-remediation verification is the final step in a chain that often starts with a full mold inspection and a written protocol. When Safe Haven writes the protocol, the remediator has a clear scope; when we return for clearance, we're grading against that scope. If a different assessor wrote the original protocol, we'll match our clearance approach to it. Either way, the client — not the remediator — is the party we're working for.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/mold-assessment-report", label: "Mold assessment & written protocol", blurb: "The formal scope of work the remediator is measured against at clearance." },
        { to: "/services/air-quality-testing", label: "Airborne mold & air quality testing", blurb: "Air samples are the core measurable behind a clearance pass or fail." },
        { to: "/services/thermal-imaging", label: "Moisture mapping & thermal imaging", blurb: "Confirm affected materials are actually dry before the walls close." },
      ]}
      ctaTitle="Book independent clearance testing"
      ctaBody="Get an unbiased pass/fail decision before the drywall goes back up. Talk to our licensed team."
    />
  );
}