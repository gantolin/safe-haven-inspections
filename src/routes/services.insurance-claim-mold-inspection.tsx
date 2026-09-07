import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "Does homeowners insurance in Florida cover mold?", a: "It depends almost entirely on cause. Most Florida policies cover mold when it results from a sudden, accidental, covered water event such as a burst supply line or a storm-driven roof breach, and exclude it when it results from long-term humidity, seepage, or deferred maintenance. Many policies also carry a mold sublimit, a separate and much lower cap than your dwelling limit. Read your policy's mold endorsement, because the sublimit is where a lot of claims actually get decided." },
  { q: "Will insurance pay for the mold inspection itself?", a: "Usually not as a standalone line item. Inspection and testing are most often paid as part of a covered water loss rather than on their own. Homeowners commonly pay for independent assessment themselves and treat it as the cost of documenting the claim properly, because the report is what the rest of the claim rests on." },
  { q: "Why can't the remediation company just do the testing?", a: "In Florida they legally cannot do both on the same property. Section 468.8419 of the Florida Statutes bars a mold assessor from remediating a structure their company assessed within the previous 12 months, and bars a remediator from assessing a structure their company remediated in that window. Violations carry criminal penalties that escalate with each offense. Beyond the law, an adjuster reading a report written by the company that profits from the cleanup will weigh it accordingly." },
  { q: "My claim was denied. Is an independent assessment still worth it?", a: "It is often exactly what a denial calls for. Denials frequently turn on causation, meaning the adjuster concluded the mold came from an excluded source such as humidity rather than a covered event. An independent, licensed assessment documenting moisture readings, the pattern of growth, and the likely source gives you something specific to appeal with rather than a disagreement of opinion." },
  { q: "How fast do I need to act?", a: "Quickly, for two separate reasons. Florida law sets deadlines that run from the date you notify your insurer, and policies generally require prompt notice, so delay can itself become a reason to reduce or deny. Separately, mold colonizes wet material within roughly 24 to 48 hours in South Florida conditions, and once remediation or demolition starts, the evidence of what happened is gone." },
  { q: "What deadlines does my insurer have to meet?", a: "Under Florida Statute 627.70131 as amended in December 2022, an insurer must acknowledge a claim communication within 7 calendar days, begin investigating and complete a physical inspection within 30 days of receiving your proof-of-loss statement, and pay or deny within 60 days of notice, absent factors beyond its control. Late payments accrue statutory interest. These windows were shortened by reform and can change again, so confirm the current statute rather than relying on older guidance." },
  { q: "Do you negotiate with the insurance company for me?", a: "No, and that is a deliberate line. We are a licensed mold assessor, not a public adjuster, a contractor, or an attorney. We document the property's condition accurately and hand you a report you can give to whoever is arguing your case. Producing evidence and arguing a claim are different jobs, and mixing them is what makes a report easy to dismiss." },
  { q: "What does the report actually contain?", a: "Photographs keyed to a floor plan, moisture readings by location, thermal images at each anomaly, temperature and relative humidity readings, laboratory results from an AIHA-accredited third-party lab when sampling was warranted, and a findings section separating cosmetic staining from active moisture or growth. Where mold is documented, it includes a written remediation protocol." },
  { q: "Can you inspect after remediation has already happened?", a: "Yes, and it is worth doing. Post-remediation verification establishes independently whether the cleanup met protocol. If your carrier is being asked to pay for remediation, independent clearance is the evidence the work was actually completed to standard, and it protects you if problems reappear later." },
  { q: "Do you work with public adjusters and attorneys?", a: "Regularly. Our reports are written to be legible to someone who was not on site, which is what a public adjuster, attorney, or reviewing engineer needs. We provide the assessment, they handle the claim. We do not take referral fees in either direction, because a paid relationship is the first thing an opposing party looks for." },
];

const DESCRIPTION =
  "Independent, Florida-licensed mold assessment for insurance claims. Documentation built for adjusters, written by an assessor who never does the remediation.";

export const Route = createFileRoute("/services/insurance-claim-mold-inspection")({
  head: () => {
    const base = pageMeta({
      path: "/services/insurance-claim-mold-inspection/",
      title: "Mold Inspection for Insurance Claims, FL | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(
          serviceSchema({
            name: "Mold Inspection for Insurance Claims",
            description: DESCRIPTION,
            path: "/services/insurance-claim-mold-inspection/",
            serviceType: "Mold assessment and documentation for property insurance claims",
          }),
        ),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Insurance Claim Mold Inspection", path: "/services/insurance-claim-mold-inspection/" },
          ]),
        ),
      ],
    };
  },
  component: InsuranceClaimPage,
});

function InsuranceClaimPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Mold Inspection & Testing for Insurance Claims"
      intro={
        <>
          An insurance-claim mold inspection is an independent, Florida-licensed
          assessment that documents what happened, where the moisture came from,
          and how far it spread, in a format an adjuster can act on. It is written
          by an assessor legally barred from doing the remediation, which is a good
          part of why it carries weight.
        </>
      }
      sections={[
        {
          h2: "Why independent assessments carry weight",
          paragraphs: [
            "Florida law separates the two halves of a mold job. Under Section 468.8419 of the Florida Statutes, a licensed mold assessor may not remediate a structure their company assessed within the previous 12 months, and a remediator may not assess a structure their company remediated in that window. Violations are criminal, escalating from a second-degree misdemeanor to a third-degree felony on repeat offenses.",
            "The reason is the obvious conflict. A company that writes the scope and then bills for the cleanup has a financial interest in how large the scope turns out to be. Adjusters know this, which is why an independent assessor's report reads differently from a remediation estimate. Safe Haven performs assessment and testing only, so the report you hand your carrier has no cleanup invoice attached to it.",
          ],
        },
        {
          h2: "What actually decides a Florida mold claim",
          intro:
            "Most denials are not really arguments about whether mold is present. They are arguments about two things.",
          subsections: [
            {
              h3: "Causation: was it a covered event?",
              body: "Florida policies generally cover mold resulting from a sudden, accidental, covered water loss, such as a burst supply line, a failed water heater, or storm-driven rain intrusion. They generally exclude mold caused by long-term humidity, seepage, condensation, or deferred maintenance. The claim usually turns on which story the evidence supports, and that is a question of moisture readings, growth patterns, and material condition rather than opinion.",
            },
            {
              h3: "Scope and the mold sublimit",
              body: "Many Florida policies cap mold at a sublimit well below the dwelling limit, sometimes a small fraction of it. Where a sublimit applies, the argument moves to how much of the loss is classified as mold damage versus water damage. Documentation that distinguishes the two location by location is what makes that distinction arguable rather than assumed.",
            },
          ],
        },
        {
          h2: "Deadlines that run against you",
          paragraphs: [
            "Florida Statute 627.70131, as amended by the December 2022 property-insurance reform, requires an insurer to acknowledge a claim communication within 7 calendar days, to begin investigating and complete a physical inspection within 30 days of receiving your proof-of-loss statement, and to pay or deny within 60 days of notice, absent factors beyond its control. Payments made late accrue statutory interest.",
            "Those windows were shortened from 14 and 90 days by the reform and can change again, so confirm the current text rather than relying on older articles. The practical point is that the clock starts when you give notice, and your policy separately requires prompt notice, so waiting can become its own reason for a reduction.",
            "There is a second clock with nothing to do with law. Mold colonizes wet material within roughly 24 to 48 hours in South Florida conditions, and once demolition or drying begins, the physical evidence of what happened starts disappearing. Documenting before that work starts is usually the only chance to do it.",
          ],
        },
        {
          h2: "When to bring in an independent assessor",
          bullets: [
            "Before remediation or demolition begins, while the evidence is still in place.",
            "After a denial, when causation is the stated reason.",
            "When the carrier's estimate classifies mold damage as something else, or the reverse.",
            "When a mold sublimit is being applied and the split between water and mold damage matters.",
            "When a remediation contractor wrote the only assessment in the file.",
            "When a public adjuster or attorney has asked for independent documentation.",
            "After remediation, to verify independently that the work met protocol.",
            "When a supplemental or reopened claim needs current condition documented.",
          ],
        },
        {
          h2: "How the assessment works",
          steps: [
            { n: "01", h: "Intake and document review", b: "We review what already exists: your policy's mold provisions, the carrier's estimate or denial letter, prior reports, restoration invoices, and your own photographs." },
            { n: "02", h: "Non-destructive moisture mapping", b: "Moisture meters and infrared thermal imaging establish the true wet footprint behind finished surfaces, which is usually larger than the visible staining." },
            { n: "03", h: "Visual assessment and source analysis", b: "Affected and adjacent areas, HVAC returns, framing, cabinetry, and flooring transitions are inspected and photographed, with attention to what the pattern says about the source." },
            { n: "04", h: "Targeted sampling", b: "Air samples with a paired outdoor control and surface samples on visibly affected material go to an independent AIHA-accredited laboratory. Sampling is targeted, because a sample that settles nothing is a cost with no return." },
            { n: "05", h: "Written report, typically within 24 hours", b: "Photos keyed to a floor plan, moisture readings by location, thermal images, lab results, a findings section, and a written remediation protocol where mold is documented." },
          ],
        },
        {
          h2: "What we do not do",
          paragraphs: [
            "We are a licensed mold assessor. We are not a public adjuster, a general contractor, a remediation company, or a law firm, and we do not negotiate claims, estimate repair costs, or advise on policy strategy. We also do not take referral fees from contractors or attorneys in either direction.",
            "That list matters more than it looks. The value of an independent assessment comes entirely from having nothing to gain from the outcome, and every service bolted onto it is one more thing an opposing party can point at. What you get is an accurate record of the property's condition and the evidence behind it, to hand to whoever is arguing your case.",
          ],
        },
        {
          h2: "How this fits with our other services",
          paragraphs: [
            "An insurance-claim assessment is usually a water-damage inspection and air or surface testing packaged for a specific audience. If the loss is recent, the water-damage inspection documents the event. If growth is suspected but unconfirmed, air-quality testing and surface sampling establish what is present. If humidity rather than a single event is the real driver, humidity testing will say so, which is honest even when it is not the answer a claim wants. After any cleanup, post-remediation verification closes the loop independently.",
          ],
        },
      ]}
      faqs={faqs}
      furtherReading={{
        href: "/blog/hurricane-mold-prevention-tips/",
        label: "Hurricane Mold Prevention Tips",
        blurb: "Storm losses are the most common route into a Florida mold claim. This is what to do in the first days, before the evidence changes.",
      }}
      related={[
        { to: "/services/water-damage-inspection/", label: "Water damage inspection", blurb: "Documenting the covered event itself, which is what most mold claims actually turn on." },
        { to: "/services/mold-assessment-report/", label: "Mold assessment report & protocol", blurb: "The written deliverable an adjuster, attorney, or remediator works from." },
        { to: "/services/post-remediation-verification/", label: "Post-remediation verification", blurb: "Independent proof the cleanup your carrier paid for actually met protocol." },
        { to: "/services/air-quality-testing/", label: "Airborne mold & air quality testing", blurb: "Lab-backed evidence of what is in the air, with a paired outdoor control." },
      ]}
      ctaTitle="Filing, disputing, or appealing a mold claim?"
      ctaBody="Get an independent, licensed assessment before remediation starts and the evidence goes away. Reports are typically back within 24 hours."
    />
  );
}
