import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "What's the difference between a tape lift, swab, and bulk sample?",
    a: "A tape lift presses a clear adhesive strip against a suspect surface to capture spores and hyphae for microscopy. A swab uses a sterile cotton or synthetic tip to collect material from textured, curved, or hard-to-reach surfaces. A bulk sample is a small piece of the affected material itself — a chunk of drywall, insulation, or wood — sent to the lab for direct analysis.",
  },
  {
    q: "When do you use surface sampling instead of air sampling?",
    a: "Surface sampling is used when there's visible discoloration or growth that needs to be positively identified as mold — and which mold. Air sampling tells you what's floating in the room; surface sampling tells you what's on that specific spot. Most inspections benefit from both, targeted to what the home actually needs.",
  },
  {
    q: "Can you tell if something is mold just by looking?",
    a: "Not reliably. Many stains that look like mold are actually soot, mineral efflorescence, iron oxidation, adhesive residue, or dead algae — and some real mold looks like dust. That's why we sample visible material rather than guessing from a photo.",
  },
  {
    q: "How much does surface sampling cost?",
    a: "Every job is different — the number of samples and whether they're collected during a full inspection or as a stand-alone visit both factor in. We give you a clear, upfront quote before any work begins, with no surprise fees. Call (561) 632-6387 or request a free quote for your property.",
  },
];

export const Route = createFileRoute("/services/surface-sampling")({
  head: () => {
    const base = pageMeta({
      path: "/services/surface-sampling",
      title: "Surface & Swab Mold Sampling | Safe Haven",
      description:
        "Independent tape-lift, swab, and bulk mold sampling in South Florida. Lab-backed species identification from visible growth — no remediation upsell.",
    });
    return { ...base, scripts: [jsonLdScript(faqSchema(faqs))] };
  },
  component: SurfaceSamplingPage,
});

function SurfaceSamplingPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Surface & Swab Mold Sampling"
      intro={
        <>
          Surface and swab mold sampling positively identifies whether a
          discolored spot, streak, or fuzzy patch is mold — and which type —
          using material collected directly from the affected surface and
          analyzed at an accredited lab. It answers the question air testing
          can't: what is this stain on my wall, and does it need to be treated
          like mold?
        </>
      }
      sections={[
        {
          h2: "What surface sampling is",
          paragraphs: [
            "Surface sampling refers to a family of collection techniques used when there is visible material to test. Instead of pulling air through a cassette, we take a physical sample of the suspect surface — spores, hyphae, and often the substrate itself — and send it to a third-party laboratory for microscopy or culture.",
            "The right technique depends on the surface and the goal. A tape lift is fast, non-destructive, and ideal for smooth walls, ceilings, and cabinetry. A swab handles textured or awkward surfaces like grout, HVAC coils, and window tracks. A bulk sample — a small piece of the material — is used when we need to know whether contamination has penetrated inside a wall cavity, insulation, or drywall paper.",
          ],
        },
        {
          h2: "The three main sampling techniques",
          subsections: [
            { h3: "Tape lift", body: "A clear adhesive strip is pressed against the surface, transferred to a slide, sealed, and labeled. The lab reads it by direct microscopy and reports the mold structures present. Fast and non-destructive." },
            { h3: "Swab", body: "A sterile swab collects material from textured surfaces or tight spaces where a tape lift can't sit flat. Depending on the question, swabs are read by microscopy or plated for culture." },
            { h3: "Bulk sample", body: "A small piece of the affected material — drywall paper, insulation, wood — is cut, bagged, and labeled. This is the definitive sample when contamination may be deeper than the surface." },
            { h3: "Dust / carpet sampling", body: "Where relevant, settled dust or carpet fibers can be sampled to look at longer-term exposure rather than a single moment in time." },
          ],
        },
        {
          h2: "How the process works",
          steps: [
            { n: "01", h: "Identify targets", b: "During the visual inspection we mark and photograph each spot that warrants sampling — visible staining, suspected growth, or material adjacent to a known moisture event." },
            { n: "02", h: "Select method", b: "For each target we pick the technique — tape, swab, or bulk — that best matches the surface and the question being asked." },
            { n: "03", h: "Collect under chain-of-custody", b: "Each sample is collected with fresh gloves and instruments, sealed, and labeled with a unique ID that ties it to a photograph and a location in the report." },
            { n: "04", h: "Ship to accredited lab", b: "Samples go to an AIHA-accredited third-party laboratory — never analyzed by us in-house. Analysis is performed by trained microbiologists." },
            { n: "05", h: "Interpretation", b: "You receive raw lab results plus an assessor's interpretation of what the identified genera and quantities mean in context." },
          ],
        },
        {
          h2: "When you should request surface sampling",
          bullets: [
            "You can see something that might be mold and need a yes/no answer",
            "You've had a leak and want to know if drywall or wood behind it needs to come out",
            "A remediation contractor is bidding on work and you want independent verification of the material first",
            "There's a specific spot behind a fridge, under a sink, around windows, or on HVAC components",
            "You need documentation identifying a species (for example Stachybotrys or Chaetomium) for an insurance claim",
            "Air testing came back elevated for a genus and you want to trace it to a physical source",
          ],
        },
        {
          h2: "How surface sampling complements air testing",
          paragraphs: [
            "Air sampling and surface sampling answer different questions. Air testing quantifies what people in the room are breathing — total spore load and species mix in a defined volume of air. Surface sampling verifies a specific location: what is growing on this wall, in this cabinet, on this coil?",
            "In practice, the two are complementary. When air data shows an elevated indoor genus, surface sampling can trace it to a physical source. When a homeowner sees visible growth, surface sampling identifies it and air testing measures how much of it is becoming airborne. Doing both means the written report can say not just 'there is mold here' but 'here is the type, here is the concentration in the air, and here is what should happen next.'",
          ],
        },
        {
          h2: "What your deliverable includes",
          paragraphs: [
            "For each sample, the report includes a photograph, a location description, the collection method, the lab results, and a plain-language interpretation. Where a sample points to further work — for example, drywall that should be opened for confirmation, or a specific area that should be prioritized for containment — those recommendations are stated clearly and are limited to what an independent assessor is qualified to recommend. We do not price remediation, and we do not receive referral fees from remediation companies.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/air-quality-testing", label: "Airborne mold & air quality testing", blurb: "Complement targeted surface samples with lab-analyzed air data." },
        { to: "/services/thermal-imaging", label: "Moisture mapping & thermal imaging", blurb: "Find the moisture source feeding what your surface sample identified." },
        { to: "/services/mold-assessment-report", label: "Mold assessment & written protocol", blurb: "Formal DBPR-assessor report that stitches visual findings, lab data, and recommendations together." },
      ]}
      ctaTitle="Get a surface sample analyzed"
      ctaBody="Stop guessing whether a spot is mold. Get a lab-backed answer from an independent, state-licensed assessor."
    />
  );
}