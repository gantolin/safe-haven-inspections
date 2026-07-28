import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "How soon after water damage should we get an inspection?", a: "As fast as you reasonably can. Mold can begin colonizing wet materials within 24 to 48 hours in South Florida conditions. Even if drying is already in progress, an independent moisture and mold inspection documents what actually got wet and how far the moisture traveled, so nothing gets sealed behind drywall by mistake." },
  { q: "Do you work with insurance claims?", a: "Yes. Our written reports are formatted for adjusters: photographs, moisture readings, thermal images, floor-plan-referenced findings, and lab results (when sampling is warranted). We do not negotiate claims for you, but we produce the documentation you need to make your case." },
  { q: "What if a water restoration company is already on-site?", a: "Independent inspection alongside an in-progress dry-out is very common. Restoration companies are focused on drying and demolition; our role is documenting condition, verifying drying, and — when it's time — clearance testing. The two work well together." },
  { q: "Do you inspect after hurricanes and tropical storms?", a: "Yes. Post-storm inspections are one of the most common calls we take, especially for wind-driven rain intrusion around windows, doors, and roofs. We prioritize storm-damaged properties in scheduling." },
  { q: "Can you tell if drying was successful?", a: "Yes. Post-dry verification uses moisture meters and thermal imaging to confirm framing and substrates have returned to acceptable moisture content, and can be paired with air sampling to confirm indoor spore levels are within expected ranges." },
  { q: "Do you handle slab leaks, roof leaks, and plumbing leaks?", a: "Yes. Any water intrusion counts. We locate the extent of the moisture using non-destructive tools, note the likely source, and document the affected area. We don't perform plumbing or roofing repairs — that's for the licensed trade — but we tell you where water went." },
  { q: "What if the leak is old and the drywall is dry now?", a: "Old leaks are often the most important ones to inspect. Materials that dried without proper drying may still harbor colonized mold behind the surface. Thermal imaging, moisture history, and targeted sampling reveal what a repainted wall can hide." },
  { q: "Does the inspection open walls or damage anything?", a: "No. A moisture and water-damage inspection is non-destructive by design. Moisture meters and infrared thermal cameras find hidden moisture without cutting anything. If invasive investigation is needed later, that's a separate decision you make with the full information in hand." },
  { q: "How fast do you turn around the report?", a: "The lab-analyzed samples and the written report are typically returned within 24 hours of the inspection." },
  { q: "What areas do you cover?", a: "Martin, Palm Beach, and Broward Counties. Post-storm and emergency scheduling is prioritized across all three." },
];

export const Route = createFileRoute("/services/water-damage-inspection")({
  head: () => {
    const base = pageMeta({
      path: "/services/water-damage-inspection",
      title: "Water Damage Inspection FL | Safe Haven",
      description: "Independent post-leak, post-storm, and post-flood moisture and mold inspection across South Florida. Insurance-ready reports. Results and report typically within 24 hours.",
    });
    return { ...base, scripts: [jsonLdScript(faqSchema(faqs))] };
  },
  component: WaterDamagePage,
});

function WaterDamagePage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Water Damage & Moisture Intrusion Assessment"
      intro={
        <>
          A water-damage inspection is a licensed, non-destructive assessment of a
          property after a leak, storm, or flooding event — documenting where the
          water went, what got wet, and whether mold growth has begun. It gives you
          an independent, insurance-ready record before the walls close back up.
        </>
      }
      sections={[
        {
          h2: "What a water-damage inspection covers",
          paragraphs: [
            "The visible edge of a leak is usually the smallest part of the problem. Water travels through wall cavities, along framing, under flooring, and through insulation, so what looks like a two-foot stain can hide a ten-foot wet zone behind the drywall. A water-damage inspection maps that hidden footprint using moisture meters and infrared thermal cameras before any demolition or repair scope is finalized.",
            "At the same time, we evaluate whether mold growth has already begun. In South Florida, colonization can start within 24 to 48 hours of the initial water event, so the inspection also samples the air and any visibly affected materials as needed to establish the current state of the property.",
          ],
        },
        {
          h2: "When to schedule one",
          bullets: [
            "After a hurricane, tropical storm, or wind-driven rain event.",
            "After a roof leak, window leak, or wall-penetration failure.",
            "After a plumbing leak — under-sink, behind-toilet, ice-maker line, or slab.",
            "After an AC or water-heater failure that saturated flooring or drywall.",
            "After a fire event where fire-suppression water was used.",
            "When drywall was replaced without a documented mold assessment.",
            "When drying was done informally and you want to verify it worked.",
            "Before finalizing an insurance claim's scope of work.",
          ],
        },
        {
          h2: "The inspection process",
          steps: [
            { n: "01", h: "Intake & documentation review", b: "We collect what you already know — photographs, restoration invoices, prior reports — so the on-site visit is targeted." },
            { n: "02", h: "Non-destructive moisture mapping", b: "Moisture meters and infrared thermal cameras identify the wet zone behind finished surfaces without cutting into walls." },
            { n: "03", h: "Visual inspection", b: "Affected rooms, adjacent rooms, framing, HVAC returns, cabinetry toe kicks, and flooring transitions are inspected and photographed." },
            { n: "04", h: "Sampling when warranted", b: "Air samples with an outdoor control and surface samples on visibly affected material go to an AIHA-accredited third-party lab." },
            { n: "05", h: "Insurance-ready report", b: "You receive a written PDF report with photos, moisture readings, thermal images, lab results, and prioritized findings. Report typically within 24 hours." },
          ],
        },
        {
          h2: "Tools and methods we use",
          paragraphs: [
            "Water-damage inspection depends heavily on the right instrumentation. We use pin and pinless moisture meters to quantify moisture in framing, drywall, and flooring; infrared thermal cameras to reveal temperature differentials that indicate hidden moisture; digital hygrometers to record indoor and outdoor temperature, relative humidity, and dew point; and, when needed, calibrated air sampling with spore-trap cassettes analyzed at an AIHA-accredited lab.",
            "All measurements are keyed to a floor plan and photographed in place. That makes the report legible to anyone reviewing it later — an adjuster, an attorney, a remediation contractor, or a future buyer.",
          ],
        },
        {
          h2: "What the written report includes",
          paragraphs: [
            "The report documents the property's condition on the day of the visit in a format built for stakeholders you don't control. It contains photos keyed to the floor plan, moisture readings by location, thermal image snapshots at each anomaly, temperature and humidity readings, lab results when samples were collected, and a prioritized findings section that separates cosmetic staining from active moisture or growth.",
            "When mold is documented, the report includes a written remediation protocol. When drying has already occurred, the report can serve as verification of successful drying. Either way, it's an independent record — not a scope of work written to sell you a cleanup.",
          ],
        },
        {
          h2: "How this fits with our other services",
          paragraphs: [
            "A water-damage inspection sits at the front end of the process — it's what we do the moment moisture becomes an event, before any remediation decisions are made. From there, our other services follow naturally: moisture mapping continues if the source is unclear, air-quality and surface testing quantify what's airborne and what's growing, humidity testing addresses ongoing drying conditions, and post-remediation verification closes the loop after any cleanup is complete.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/thermal-imaging", label: "Moisture mapping & thermal imaging", blurb: "The non-destructive backbone of any water-damage inspection." },
        { to: "/services/air-quality-testing", label: "Airborne mold & air quality testing", blurb: "Sample the air after a water event to see whether spore levels are already elevated." },
        { to: "/services/post-remediation-verification", label: "Post-remediation verification", blurb: "Independent clearance after any water-driven remediation, before walls close." },
      ]}
      ctaTitle="Just had a leak or a storm event?"
      ctaBody="Get an independent, insurance-ready water-damage assessment before decisions get made. Prioritized scheduling for storm and emergency calls."
    />
  );
}
