import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "How long does mold air quality testing take on site?",
    a: "Most residential air-quality sampling adds roughly 30 to 60 minutes to the on-site inspection, depending on the number of interior locations sampled and outdoor conditions. Lab-analyzed results are typically returned within 24 hours.",
  },
  {
    q: "How many air samples do you take?",
    a: "The standard baseline is one outdoor control plus one indoor sample per area or HVAC zone of concern — bedrooms, living areas, basements, or specific rooms with reported symptoms. We scope the number of samples during the intake call so you're not paying for extras you don't need.",
  },
  {
    q: "What does the lab report actually measure?",
    a: "Air samples collected on spore-trap cassettes are analyzed by direct microscopy at an AIHA-accredited third-party laboratory. The report identifies mold genera present (for example Aspergillus/Penicillium-like, Stachybotrys, Chaetomium, Cladosporium, basidiospores) and reports raw spore counts and normalized concentrations per cubic meter of air.",
  },
  {
    q: "Can air testing alone tell me if my home has a mold problem?",
    a: "Air testing is powerful but not by itself definitive. Elevated indoor counts of certain species — especially compared to outdoor controls — are strong indicators, but a full picture also considers visible findings, moisture readings, and where inside the home samples were taken. That's why we pair air sampling with a licensed visual assessment.",
  },
  {
    q: "How much does air quality testing cost?",
    a: "Every property is different — the number of samples and the size of the space both factor in. We give you a clear, upfront quote before any work begins, with no surprise per-cassette add-ons. Call (561) 632-6387 or request a free phone consultation for your property.",
  },
];

export const Route = createFileRoute("/services/air-quality-testing")({
  head: () => {
    const base = pageMeta({
      path: "/services/air-quality-testing",
      title: "Air Quality & Mold Testing | Safe Haven",
      description:
        "Independent airborne mold and indoor air quality testing in South Florida. Spore-trap sampling, outdoor controls, AIHA-accredited lab analysis, and a clear report.",
    });
    return { ...base, scripts: [jsonLdScript(faqSchema(faqs))] };
  },
  component: AirQualityTestingPage,
});

function AirQualityTestingPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Airborne Mold & Air Quality Testing"
      intro={
        <>
          Airborne mold and air quality testing measures the concentration and
          type of mold spores in the air inside your home and compares them to
          the outdoor air, so you can tell whether indoor conditions are
          normal, elevated, or actively growing a hidden problem. As
          independent, Florida-licensed mold assessors, we collect samples,
          send them to a third-party lab, and give you a plain-language report
          — with no financial incentive to over-report what's there.
        </>
      }
      sections={[
        {
          h2: "What air quality testing actually is",
          paragraphs: [
            "Indoor air always contains some mold spores — that's normal. The question is whether the spores in your home are consistent with the outdoor air around it, or whether specific species are showing up at concentrations that suggest an active indoor source. Air quality testing answers that question with data instead of guesswork.",
            "The industry-standard method is spore-trap air sampling. A calibrated pump pulls a fixed volume of air through a cassette that captures spores on an adhesive slide. That slide goes to an accredited laboratory, where a microbiologist counts and identifies spores by direct microscopy. The report you get back translates those slides into spores per cubic meter of air, broken out by mold genus.",
          ],
        },
        {
          h2: "How the process works, step by step",
          steps: [
            { n: "01", h: "Scoping call", b: "We discuss what you're seeing, smelling, or worried about, and which rooms or HVAC zones matter most. That determines how many samples we take and where." },
            { n: "02", h: "Outdoor baseline sample", b: "Before entering the home, we collect an outdoor control sample. Outdoor spore levels vary by season, weather, and vegetation — without a baseline, indoor readings can't be interpreted correctly." },
            { n: "03", h: "Indoor samples", b: "Inside, we take samples in areas of concern with the home in normal conditions — doors and windows closed for a set period, HVAC running as it typically would." },
            { n: "04", h: "Chain-of-custody handling", b: "Every cassette is labeled, logged, and sealed under chain-of-custody protocols so the lab knows exactly which sample corresponds to which room." },
            { n: "05", h: "Accredited lab analysis", b: "Cassettes ship to an AIHA-accredited third-party laboratory. Analysis is performed by trained microbiologists — never by us — so the numbers on your report are independent." },
            { n: "06", h: "Interpretation & report", b: "You receive a written report with raw counts, normalized concentrations, indoor-vs-outdoor comparison, and a plain-language interpretation. We walk you through it on a call." },
          ],
        },
        {
          h2: "What the lab measures",
          intro: "A typical spore-trap air quality report breaks down what's in the sampled air along several axes.",
          subsections: [
            { h3: "Mold genera identified", body: "Common groups include Aspergillus/Penicillium-like, Cladosporium, Stachybotrys, Chaetomium, Alternaria, basidiospores, ascospores, and rust/smut spores. Each has a different meaning for indoor air quality." },
            { h3: "Raw spore counts", body: "The absolute number of spores counted on the slide by microscopy — the primary data behind the sample." },
            { h3: "Spores per cubic meter", body: "Counts normalized to the volume of air sampled, so results across samples and homes are directly comparable." },
            { h3: "Indoor vs. outdoor ratio", body: "The core diagnostic: indoor levels persistently higher than outdoor levels for the same species is a strong signal of an indoor source." },
          ],
        },
        {
          h2: "When you should ask for air quality testing",
          bullets: [
            "Someone in the home has unexplained respiratory, allergy, or sinus symptoms indoors",
            "There's a musty odor with no visible source",
            "You've had a recent leak, roof issue, or storm-driven water intrusion",
            "You're buying a home and want objective indoor air data before closing",
            "You've just finished a remediation and need to verify air quality is back to baseline",
            "Your HVAC system was recently replaced or serviced after a moisture event",
          ],
        },
        {
          h2: "What your deliverable includes",
          paragraphs: [
            "You receive a written PDF report that pairs the raw lab data with an assessor's interpretation. It includes the outdoor control result, each indoor sample by location, a genus-by-genus comparison, and clear language about what the numbers mean for your specific home — not a copy-pasted disclaimer.",
            "Where warranted, the report also lists prioritized next steps: further investigation in a particular room, a targeted moisture scan, or, if results are unremarkable, a plain statement that indoor air is consistent with outdoor conditions. Because we don't sell remediation, our recommendations are limited to what an independent assessor should say.",
          ],
        },
        {
          h2: "How air testing fits with our other services",
          paragraphs: [
            "Air quality testing is most powerful when combined with the visual and moisture work in a full mold inspection. Elevated indoor air readings tell you something is happening; a visual inspection with moisture mapping tells you where. If you've already had a remediation completed, air testing is central to post-remediation verification — the independent clearance step that confirms whether the work brought conditions back to normal.",
            "For real estate transactions and commercial properties, air testing often becomes the objective data point that everyone at the table can rely on: a buyer, a seller, an insurer, or a property manager all read the same third-party numbers.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/surface-sampling", label: "Surface & swab sampling", blurb: "When visible material needs species-level identification, tape lifts and swabs complement air testing." },
        { to: "/services/thermal-imaging", label: "Moisture mapping & thermal imaging", blurb: "Find the hidden moisture source that's driving elevated indoor spore counts." },
        { to: "/services/post-remediation-verification", label: "Post-remediation verification", blurb: "Independent clearance testing after remediation — with air samples front and center." },
      ]}
      ctaTitle="Schedule air quality testing"
      ctaBody="Get objective, lab-backed answers about the air inside your home. Talk to our local, state-licensed team directly."
    />
  );
}