import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "How is a commercial inspection different from a residential one?",
    a: "The framework is similar — visual, moisture, air, and surface — but the scale, access, occupant impact, and documentation requirements are different. Commercial jobs typically require coordination with property managers or building engineers, after-hours access, and reporting that stands up to insurers, attorneys, and tenants.",
  },
  {
    q: "Do you work with property managers, HOAs, and condo associations?",
    a: "Yes. We regularly inspect individual units, common areas, and multi-unit buildings, and coordinate directly with property managers and boards on scheduling and access.",
  },
  {
    q: "Can you handle tenant complaint inspections without escalating the conflict?",
    a: "Yes — that's actually one of the highest-value scenarios for an independent assessor. We provide objective, lab-backed findings that both the landlord and tenant can point to, which typically de-escalates rather than inflames the dispute.",
  },
  {
    q: "What does a commercial inspection cost?",
    a: "Every commercial project is different — square footage, number of units, number of samples, and access logistics all factor in. We give you a clear, upfront quote for the full scope before any work begins, with no surprise fees. Call (561) 632-6387 or request a free phone consultation.",
  },
];

export const Route = createFileRoute("/services/commercial-mold-inspection")({
  head: () => {
    const base = pageMeta({
      path: "/services/commercial-mold-inspection",
      title: "Commercial Mold Inspection FL | Safe Haven",
      description:
        "Independent commercial mold inspection for South Florida offices, rentals, HOAs, condos, and retail. Third-party reports property managers and landlords can rely on.",
    });
    return { ...base, scripts: [jsonLdScript(faqSchema(faqs))] };
  },
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Commercial & Property Management Mold Inspection"
      intro={
        <>
          Commercial mold inspection is a scaled, documentation-heavy version
          of our residential assessment work, built for offices, rental
          buildings, HOAs, condos, and retail spaces where multiple
          stakeholders — owners, managers, tenants, insurers — need to trust
          the same report. As an independent, Florida-licensed mold assessor
          with no remediation arm, we produce that report without pulling the
          conclusion in any direction.
        </>
      }
      sections={[
        {
          h2: "Where a commercial inspection differs from residential",
          paragraphs: [
            "The physics of mold don't change between a single-family home and a strip mall, but the operational reality does. Commercial and multi-unit properties add tenant scheduling, after-hours access, mechanical systems that serve multiple spaces, shared HVAC returns, and documentation requirements driven by leases, insurance policies, and property-management contracts.",
            "Our commercial approach anticipates that complexity. We plan sampling around occupied hours, coordinate with building engineers and property managers, and produce reporting that a facilities manager, an insurance adjuster, and an attorney can each read without needing us to translate.",
          ],
        },
        {
          h2: "Property types we regularly assess",
          subsections: [
            { h3: "Office & professional space", body: "Suites, medical offices, and executive floors — where HVAC design, ceiling plenums, and after-hours access shape the inspection plan." },
            { h3: "Multifamily rentals & apartments", body: "Individual units, common corridors, and shared mechanical rooms. Tenant complaint investigations included." },
            { h3: "HOAs, condos & mid-rises", body: "Boards and management companies dealing with unit-level complaints, envelope moisture, and stack-effect HVAC issues in taller buildings." },
            { h3: "Retail & mixed-use", body: "Storefronts, restaurants, and mixed-use buildings where kitchen exhaust, refrigeration, and roof drainage frequently intersect with mold conditions." },
          ],
        },
        {
          h2: "How a commercial engagement runs",
          steps: [
            { n: "01", h: "Scoping", b: "We walk through the property description, systems, current complaints, and stakeholder list to design the inspection plan and sampling scope." },
            { n: "02", h: "Access & logistics", b: "Scheduling is coordinated with the property manager or building engineer, including after-hours access and any tenant notifications required by lease terms." },
            { n: "03", h: "On-site inspection", b: "Visual, moisture, and sampling work is performed to the same standards as a residential inspection, scaled to the square footage and number of zones or units involved." },
            { n: "04", h: "Lab analysis", b: "All samples go to an AIHA-accredited third-party laboratory under chain-of-custody. No in-house analysis." },
            { n: "05", h: "Formal report", b: "You receive a written report structured for multi-stakeholder use: executive summary, methodology, findings by zone or unit, lab results, and prioritized recommendations." },
          ],
        },
        {
          h2: "Landlord and tenant considerations",
          paragraphs: [
            "The most valuable thing an independent assessor brings to a landlord-tenant situation is a shared source of truth. When findings and lab results are produced by a company that does no remediation and takes no referral fees, both sides can rely on the same document without wondering whether the assessor is angling to sell more work.",
            "In practice, that changes how conflicts resolve. A documented finding of elevated indoor Aspergillus/Penicillium with an active moisture source in a specific wall is very different from a tenant email that says 'I think there's mold.' The first is actionable; the second isn't. Our reports are designed to turn subjective complaints into the objective first category — whether the outcome is repair, remediation, or documented all-clear.",
          ],
        },
        {
          h2: "When property managers request an inspection",
          bullets: [
            "Tenant complaint of musty odor, visible growth, or respiratory symptoms",
            "After a plumbing failure, roof leak, or HVAC condensate event",
            "Pre-lease turnover in a unit with any water history",
            "Insurance claim requiring third-party documentation",
            "Baseline assessment for a newly acquired building",
            "Recurring complaints in the same unit or stack that need root-cause investigation",
          ],
        },
        {
          h2: "What the deliverable includes",
          paragraphs: [
            "Commercial reports are longer than residential reports for a reason: the audience is broader. Every report includes an executive summary, methodology, environmental readings, findings organized by zone or unit, chain-of-custody documentation, complete lab results, and clearly separated findings vs. recommendations. Where an insurance claim or legal process is involved, the report is written to be legible to a reader who was never on-site.",
          ],
        },
        {
          h2: "How this fits with our other services",
          paragraphs: [
            "Commercial inspections often trigger follow-up work: moisture mapping to trace envelope leaks, targeted surface sampling on HVAC coils and pans, post-remediation verification when a remediation contractor completes work, and periodic re-testing to close out an insurance file. All of those services stay on the assessment side of the line — we never cross into remediation.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/mold-assessment-report", label: "Mold assessment & written protocol", blurb: "The formal document commercial insurers, remediators, and attorneys read." },
        { to: "/services/thermal-imaging", label: "Moisture mapping & thermal imaging", blurb: "Trace envelope and mechanical moisture across multi-unit or multi-zone properties." },
        { to: "/services/post-remediation-verification", label: "Post-remediation verification", blurb: "Independent clearance after any remediation contractor finishes at the property." },
      ]}
      ctaTitle="Talk about a commercial project"
      ctaBody="Property managers, boards, and building owners — get a quote for an independent, licensed inspection tailored to your building."
    />
  );
}