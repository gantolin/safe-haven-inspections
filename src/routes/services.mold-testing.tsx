import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "What is mold testing, exactly?", a: "Mold testing is the lab-analyzed sampling portion of a mold assessment. Air samples measure how many spores of which types are in the air compared to an outdoor control. Surface samples identify what's growing on a specific spot. Testing quantifies and identifies; the on-site inspection tells you where and why." },
  { q: "Is testing different from an inspection?", a: "Yes. A mold inspection is the licensed on-site evaluation — visual, moisture, thermal. Mold testing is the laboratory piece that produces the numbers and species IDs. Most Safe Haven inspections include both, because each answers questions the other can't." },
  { q: "Do I need testing if I can already see mold?", a: "Sometimes. If visible growth is small, contained, and the moisture source is obvious, sampling may just confirm what's already known. Testing adds the most value when growth is hidden, when species matters (medical questions, real estate, insurance), or when you need pre- and post-remediation numbers." },
  { q: "How many samples do you take?", a: "It depends on the property. A typical single-family home is two to four air samples (one outdoor control plus one per major zone) with surface samples where visible material exists. Larger homes and commercial buildings need more. We size the sample plan to the property, not a template." },
  { q: "Who analyzes the samples?", a: "An independent AIHA-accredited third-party laboratory analyzes every sample. Safe Haven does not analyze samples in-house. That separation is a big part of why the numbers on your report are defensible." },
  { q: "How long until I get results?", a: "Lab results and the written assessment are typically returned within 24 hours of the on-site visit." },
  { q: "Is a high spore count always a problem?", a: "Not on its own. Outdoor spore counts vary daily, and 'elevated' only means something in comparison to that day's outdoor control and the specific species involved. The written report translates the numbers into what they actually indicate for your home." },
  { q: "Can I do the testing myself with a home mold kit?", a: "Consumer kits produce readings that are hard to interpret and rarely accepted for real-estate, insurance, or clearance purposes. They also can't isolate hidden sources. A licensed assessor using calibrated equipment and an accredited lab is a different level of evidence." },
  { q: "Do I need testing after remediation?", a: "Yes — that's post-remediation verification. It's a separate clearance service that documents whether the remediation succeeded before walls close and occupants return." },
  { q: "Does testing cost extra on top of the inspection?", a: "Sampling adds cost because the lab bills per sample. Every property is different, so we quote up front once we understand your situation. No pricing surprises." },
];

export const Route = createFileRoute("/services/mold-testing")({
  head: () => {
    const base = pageMeta({
      path: "/services/mold-testing",
      title: "Mold Testing South Florida | Safe Haven",
      description: "Independent, lab-analyzed mold testing — air and surface sampling — across Martin, Palm Beach & Broward Counties. AIHA-accredited third-party lab. Results and report typically within 24 hours.",
    });
    return { ...base, scripts: [jsonLdScript(faqSchema(faqs))] };
  },
  component: MoldTestingPage,
});

function MoldTestingPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Mold Testing"
      intro={
        <>
          Mold testing is the lab-analyzed sampling piece of a mold assessment —
          air samples, surface samples, and, when needed, bulk material samples
          sent to an accredited third-party laboratory. It's how you turn "we see
          something" into defensible numbers and species identifications you can
          act on with confidence.
        </>
      }
      sections={[
        {
          h2: "What mold testing actually measures",
          paragraphs: [
            "There is no single test that answers every mold question. Air testing quantifies how many spores of which types are in the indoor air, always compared to an outdoor control sample collected the same day. Surface testing identifies what's growing on a specific spot. Bulk sampling identifies what's inside a specific piece of material. Each answers a different question, and a properly designed sample plan usually combines them.",
            "Because outdoor spore counts vary constantly with weather, season, and time of day, the outdoor control is doing more work than most homeowners realize. It's the baseline every indoor sample is interpreted against, which is why any legitimate testing includes one and any test that skips it is much harder to defend.",
          ],
        },
        {
          h2: "Types of mold testing we offer",
          subsections: [
            { h3: "Airborne mold & air quality testing", body: "Spore-trap cassette air sampling with outdoor controls. The core dataset behind most decisions — real estate, health questions, and post-remediation clearance all start here." },
            { h3: "Surface & swab sampling", body: "Tape-lift, swab, and bulk sampling of visible growth for positive species identification. Useful when you can point at something and need to know what it is." },
            { h3: "Post-remediation clearance testing", body: "Air and surface sampling performed after remediation to document whether the work succeeded before walls close and occupants return." },
            { h3: "Humidity & psychrometric testing", body: "Temperature, relative humidity, and dew point measurements when humidity alone is driving conditions." },
          ],
        },
        {
          h2: "The mold testing process",
          steps: [
            { n: "01", h: "Sample plan", b: "Before we sample, we walk the property and design a sample plan sized to the home, the concerns, and any transaction or clearance deadlines." },
            { n: "02", h: "Outdoor control first", b: "An outdoor air sample is collected upwind of the entrance to establish the day's baseline before any indoor samples are taken." },
            { n: "03", h: "Indoor sampling", b: "Calibrated pumps draw air across spore-trap cassettes for a controlled duration. Surface samples are collected where warranted, all with chain-of-custody labeling." },
            { n: "04", h: "AIHA-accredited lab analysis", b: "Samples ship the same day to an independent AIHA-accredited third-party laboratory. Turnaround typically within 24 hours." },
            { n: "05", h: "Interpretation & report", b: "A licensed assessor interprets results in the context of the outdoor control, site conditions, and any visible or moisture findings. You receive a written report in plain language." },
          ],
        },
        {
          h2: "Tools and methods we use",
          paragraphs: [
            "Air sampling is performed with calibrated pumps and standard spore-trap cassettes drawn at a fixed flow rate for a controlled duration, so results are comparable across samples and against published data. Surface sampling uses adhesive tape lifts, sterile swabs, or bulk material collection depending on what's being sampled. All samples are labeled with time, location, and unique IDs, and chain of custody is documented from sample to lab.",
            "The laboratory work is handled by an AIHA-accredited third-party laboratory whose accreditation, methods, and quality control appear in your report. Safe Haven does not analyze samples in-house — that separation between assessor and lab is a core part of why the results are usable in real estate, insurance, and clearance contexts.",
          ],
        },
        {
          h2: "When mold testing is worth it",
          bullets: [
            "Someone in the home has unexplained respiratory or allergy symptoms indoors.",
            "You suspect hidden mold and want to know what's actually in the air.",
            "You're in a real-estate transaction and need objective numbers.",
            "You're planning remediation and need pre- and post-numbers.",
            "A remediation company just finished and you need independent clearance.",
            "An insurance claim needs documented, lab-analyzed evidence.",
            "You manage a property and need to document current air-quality conditions.",
            "You want to confirm a species (Aspergillus, Penicillium, Stachybotrys, etc.) before making decisions.",
          ],
        },
        {
          h2: "What the report includes",
          paragraphs: [
            "Every testing engagement produces a written report you can hand to another professional — a lender, adjuster, real-estate attorney, or remediation contractor. Inside: the sample plan and locations, on-day temperature and humidity readings, all raw lab results with the outdoor control clearly labeled, a plain-language interpretation of what the numbers actually indicate for your property, and prioritized recommendations.",
            "When active mold is documented, the report includes a written remediation protocol describing scope, containment, and clearance criteria. That protocol becomes the shared scope for bidding remediators — so every quote you get is measured against the same target.",
          ],
        },
        {
          h2: "How mold testing fits with our other services",
          paragraphs: [
            "Testing is one component of a full mold inspection. If you're not sure whether you need testing on its own or a full inspection, start with the inspection — it tells you which testing (if any) is actually needed. If you already know you want targeted sampling, the specialized pages below cover the specific test types.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/air-quality-testing", label: "Airborne mold & air quality testing", blurb: "Spore-trap air sampling with outdoor control — the core lab-backed indoor air dataset." },
        { to: "/services/surface-sampling", label: "Surface & swab sampling", blurb: "Tape-lift and swab sampling of visible material for positive species identification." },
        { to: "/services/mold-inspection", label: "Full mold inspection", blurb: "The umbrella service: visual, moisture, thermal, and lab-backed sampling combined." },
      ]}
      ctaTitle="Get lab-backed answers about your indoor air"
      ctaBody="Independent, AIHA-accredited lab testing across South Florida. Results and written report typically within 24 hours."
    />
  );
}
