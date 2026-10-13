import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "Can you inspect within a tight inspection-period window?",
    a: "Yes: real estate inspections are scheduled with closing windows in mind. Once contracts are signed, we prioritize putting a team on-site within the inspection period, and lab-analyzed samples are typically returned within 24 hours so the written report is ready well ahead of most inspection-response deadlines.",
  },
  {
    q: "Does a home inspection include mold?",
    a: "Usually not. A general home inspection covers the whole house at a broad level (roof, plumbing, electrical, systems) and typically notes moisture or suspected mold as an observation for a specialist. A mold inspection is that specialist step: a licensed mold assessor performing focused visual, moisture, and lab-based evaluation.",
  },
  {
    q: "What does a mold test when buying a house involve?",
    a: "Air samples from inside the home compared with an outdoor sample taken the same day, plus surface samples where growth is visible. An accredited lab reads them, and results are typically back within 24 hours, inside most inspection periods.",
  },
  {
    q: "Should the buyer or the seller order the inspection?",
    a: "Either can. Buyers order it to protect themselves before closing. Sellers order it proactively to head off surprises during the inspection period, and to have a clean third-party report ready when questions arise. In both cases, an independent assessor produces a report both parties can trust.",
  },
  {
    q: "Do you work directly with realtors?",
    a: "Yes. We regularly coordinate with agents on scheduling, access, and reporting timelines. Our mold inspection for Realtors page has the details.",
  },
];

export const Route = createFileRoute("/services/real-estate-mold-inspection-greenacres")({
  head: () => {
    const base = pageMeta({
      path: "/services/real-estate-mold-inspection-greenacres/",
      title: "Real Estate Mold Inspection in Greenacres, FL | Safe Haven",
      description:
        "Real estate mold inspection in Greenacres, FL for buyers, sellers, and agents. Licensed, independent, timed to your inspection period. Call (561) 632-6387.",
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(
          serviceSchema({
            name: "Real Estate Mold Inspection",
            description: "Real estate mold inspection in Greenacres, FL for buyers, sellers, and agents. Licensed, independent, timed to your inspection period. Call (561) 632-6387.",
            path: "/services/real-estate-mold-inspection-greenacres/",
          }),
        ),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Real Estate Mold Inspection", path: "/services/real-estate-mold-inspection-greenacres/" },
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
      h1="Real Estate Mold Inspection in Greenacres, FL"
      intro={
        <>
          A real estate mold inspection in Greenacres answers the question most buyers ask late: should you get a mold inspection when buying a house in South Florida?
          In a market this humid, usually yes, and a standard home inspection is
          not the same thing. This is a focused, licensed evaluation for hidden
          mold and moisture, run on the timeline a real estate deal actually moves
          on. Buyers, sellers, and agents get one objective third-party report to
          negotiate with, disclose with, or simply close on.
        </>
      }
      sections={[
        {
          h2: "Buying or selling a home in Greenacres",
          paragraphs: [
            "Most homes that change hands in Greenacres are 30 to 50 years old. At that age, the things a buyer cannot see are the ones worth checking: the roof underlayment, the supply lines inside the walls, and how well the AC still controls humidity. A mold inspection samples the air and measures moisture inside the walls, which a walkthrough alone cannot do.",
            "For condos and villas, the shared walls and the ceiling under the unit above get a close look, since a neighbor's leak becomes the new owner's problem. You get a written report inside the inspection period, in time to negotiate, ask for a repair, or walk away. For home buyers this is a pre-purchase mold inspection, scheduled inside the inspection period.",
          ],
        },
        {
          h2: "Should I get a mold inspection when buying a house?",
          paragraphs: [
            "In South Florida, usually yes. Humidity, storms, and aging AC systems leave moisture where a walkthrough cannot see it, and a general home inspection is broad by design. Most home inspectors flag suspected moisture or mold for a specialist and stop there, which leaves the question open at exactly the moment you need an answer.",
            "A licensed mold assessor closes it with moisture readings, air samples, and a lab report, all inside the inspection period. If the home is clean, you close knowing that. If it is not, you know before the deadline, while you can still ask for a repair, a credit, or your deposit back.",
          ],
        },
        {
          h2: "What a real estate mold inspection includes",
          tone: "band",
          subsections: [
            { h3: "Full visual inspection", body: "Accessible areas of the home (walls, ceilings, baseboards, cabinetry, attics, HVAC returns, and known problem areas) photographed and documented." },
            { h3: "Moisture mapping", body: "Infrared and moisture-meter survey of exterior walls, ceilings under wet rooms, HVAC closets, and around windows and doors to find hidden intrusion." },
            { h3: "Targeted lab sampling", body: "Air samples with outdoor controls, plus surface samples where visible material warrants identification. Analyzed by an AIHA-accredited third-party laboratory." },
            { h3: "Transaction-ready report", body: "A written report designed to be shared with the other side of the transaction: clear findings, photos, lab results, and prioritized recommendations in plain language." },
          ],
        },
        {
          h2: "How we work inside the inspection period",
          steps: [
            { n: "01", h: "Contract signed", b: "As soon as you have a ratified contract, we get on the schedule. Access details are coordinated with the listing agent." },
            { n: "02", h: "On-site inspection", b: "A licensed assessor performs the visual, moisture, and sampling work: typically 60 to 120 minutes for a single-family home." },
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
          tone: "band",
          bullets: [
            "Head off surprises during the buyer's inspection period",
            "Present a clean third-party report as part of the listing package",
            "Understand any existing moisture or air-quality issue on your own timeline",
            "Avoid the classic 'buyer's inspector saw something ambiguous' delay",
            "Show that disclosures were made in good faith with independent data",
          ],
        },
        {
          h2: "Selling a house with mold",
          paragraphs: [
            "Selling a house with mold goes better when the seller finds it first. An inspection before listing shows what is there and how far it goes, so it can be fixed and disclosed on your schedule, not the buyer's.",
            "After a cleanup, buyers often ask for a mold clearance certificate. What that means in practice is a post-remediation verification report: an independent assessor retests the area and states in writing whether it passed.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/air-quality-testing-greenacres/", label: "Airborne mold & air quality testing", blurb: "The lab-backed indoor air data most transactions ultimately turn on." },
        { to: "/services/thermal-imaging-greenacres/", label: "Moisture mapping & thermal imaging", blurb: "Non-destructive scan for hidden moisture, ideal within an inspection window." },
        { to: "/services/post-remediation-verification-greenacres/", label: "Post-remediation verification", blurb: "The clearance report buyers ask for after a cleanup." },
        { to: "/services/asbestos-testing-greenacres/", label: "Asbestos testing", blurb: "Buying a pre-1980 home? Test the popcorn ceiling before the inspection period closes." },
      ]}
      furtherReading={{
        href: "/mold-inspection-for-realtors-palm-beach-county/",
        label: "Mold inspection for Realtors in Palm Beach County",
        blurb: "For agents and property managers: scheduling, access, and pre-listing inspections.",
      }}
      heroImage={{
        src: "/hero-real-estate.jpg",
        alt: "Air sampling stand set up in an empty room during a pre purchase inspection",
        caption:
          "Sampling a vacant unit before closing, with results in writing inside the inspection period.",
        width: 1400,
        height: 875,
      }}
      ctaTitle="Schedule a real estate mold inspection"
      ctaBody="Get an independent report inside your inspection window. Fast scheduling for buyers, sellers, and agents."
    />
  );
}