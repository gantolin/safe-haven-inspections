import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const PATH = "/mold-inspection-for-realtors/";
const DESCRIPTION =
  "Mold inspection for Realtors in Palm Beach County. A licensed, independent mold assessor scheduled inside the inspection period, with lab results in 24 hours.";

const faqs: FaqItem[] = [
  {
    q: "How fast can you get to a property under contract?",
    a: "Call (561) 632-6387 with the inspection period deadline and we schedule around it. Lab results and the written report are typically back within 24 hours of the visit.",
  },
  {
    q: "Is this the same as the home inspection?",
    a: "No. We are licensed mold assessors, not home inspectors. A home inspector notes suspected moisture or mold and refers it out. We are the referral: moisture readings, air and surface samples, an accredited lab, and a written mold report.",
  },
  {
    q: "Who orders the mold inspection, the buyer or the seller?",
    a: "Either. Buyers order it during the inspection period. Sellers and listing agents order a pre-listing mold inspection before the home goes on the market.",
  },
  {
    q: "Do you do the cleanup if mold is found?",
    a: "No. We inspect and test only, and we take no referral fee from remediators. The report gives any remediation company the same scope to bid on.",
  },
];

export const Route = createFileRoute("/mold-inspection-for-realtors")({
  head: () => {
    const base = pageMeta({
      path: PATH,
      title: "Mold Inspection for Realtors in Palm Beach County | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(
          serviceSchema({
            name: "Mold Inspection for Realtors",
            description: DESCRIPTION,
            path: PATH,
          }),
        ),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Mold Inspection for Realtors", path: PATH },
          ]),
        ),
      ],
    };
  },
  component: RealtorsPage,
});

function RealtorsPage() {
  return (
    <ServicePage
      eyebrow="For real estate"
      formName="realtors-hero"
      h1="Mold Inspection for Realtors in Palm Beach County"
      intro={
        <>
          Mold inspection for Realtors in Palm Beach County comes down to two
          things: getting into the property inside the inspection period, and a
          written report your client can act on before the deadline. Safe Haven
          Inspections tests only. We do not sell the cleanup, so both sides of
          the deal can rely on the same report.
        </>
      }
      sections={[
        {
          h2: "What agents get",
          bullets: [
            "Scheduling built around the inspection period. Tell us the deadline when you call.",
            "Access coordinated with the listing side, so you are not the go-between",
            "Air and surface samples read by an independent accredited lab, typically back in 24 hours",
            "A written PDF report with photos, moisture readings, and lab results",
            "A call to walk you and your client through the findings",
            "A licensed Florida mold assessor (MRSA3366) with over 1,600 inspections completed",
          ],
        },
        {
          h2: "Pre-listing mold inspection",
          paragraphs: [
            "A pre-listing mold inspection finds a moisture or mold problem before a buyer's inspector does. The seller can fix it on their own schedule, disclose it accurately, and hand the buyer a third-party report instead of an open question in the middle of the inspection period.",
          ],
        },
        {
          h2: "Mold inspection for property managers",
          paragraphs: [
            "For rentals, condos, and managed buildings, a mold inspection settles what a tenant complaint or a leak actually left behind. Property managers call us for tenant complaints, inspections between tenants, checks after a leak or AC failure, and post-remediation verification once a cleanup is finished. Each visit ends in a dated report for the file.",
          ],
        },
        {
          h2: "Mold addendum: where the inspection fits",
          paragraphs: [
            "A mold addendum is a contract attachment that deals with mold specifically, usually by giving the buyer a set number of days to have the home inspected for it. The wording and the deadline belong to the agents, the broker, and the attorney. Our part is the inspection itself and a report delivered inside that window.",
          ],
        },
        {
          h2: "Mold disclosure in Florida",
          paragraphs: [
            "Under the Florida Supreme Court's decision in Johnson v. Davis, a home seller who knows of facts that materially affect the value of the property, and that a buyer cannot readily see, has a duty to disclose them. A mold or moisture problem the seller knows about is the kind of thing that question gets asked about. We are not attorneys and this is not legal advice. What we provide is the dated, third-party record of what was found.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/real-estate-mold-inspection-greenacres/", label: "Real estate mold inspection", blurb: "What buyers and sellers get, step by step, inside the inspection period." },
        { to: "/services/post-remediation-verification-greenacres/", label: "Post-remediation verification", blurb: "Independent clearance testing after negotiated repairs or a cleanup." },
        { to: "/services/apartment-mold-inspection-greenacres/", label: "Apartment mold inspection", blurb: "For rentals and tenant complaints." },
      ]}
      heroImage={{
        src: "/report-preview.jpg",
        alt: "Two pages of a Safe Haven mold assessment report, showing the observations section and the specific recommendations section",
        caption:
          "What your client receives: observations logged by category, then recommendations written so any remediator can bid the same scope.",
        width: 1400,
        height: 875,
      }}
      ctaTitle="Have a property under contract?"
      ctaBody="Call with the address and the inspection period deadline. You get the price before anything is booked."
    />
  );
}
