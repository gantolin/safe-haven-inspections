import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "Does thermal imaging actually see mold?",
    a: "No — infrared cameras don't see mold. They see temperature differences. Wet building materials evaporate moisture at a different rate than dry ones, so damp areas typically show up cooler on an infrared image. That thermal contrast is what points us to hidden moisture, which is what feeds mold.",
  },
  {
    q: "What's the difference between thermal imaging and a moisture meter?",
    a: "Thermal imaging is a survey tool — it scans large areas of wall, ceiling, and floor quickly to flag suspicious thermal patterns. A moisture meter is a confirmation tool: pin or pinless probes measure the actual moisture content of a spot the camera flagged. We use them together: camera to find, meter to confirm.",
  },
  {
    q: "Can you find moisture inside a wall without cutting into it?",
    a: "In most cases, yes. Thermal imaging combined with pinless capacitance meters and, where needed, probe moisture meters lets us map moisture patterns non-destructively. If a wall clearly shows sustained elevated readings, we'll flag it for further inspection — but the goal is to avoid unnecessary demolition.",
  },
  {
    q: "Do you offer moisture mapping as a standalone service?",
    a: "Yes. Moisture mapping and thermal imaging can be requested on their own — for example after a leak, storm event, or before a remediation scope is written. We give you a clear, upfront quote for a stand-alone visit before any work begins, with no surprise fees. Call (561) 632-6387 or request a free phone consultation.",
  },
];

export const Route = createFileRoute("/services/thermal-imaging")({
  head: () => {
    const base = pageMeta({
      path: "/services/thermal-imaging",
      title: "Moisture Mapping & Thermal Imaging | Safe Haven",
      description:
        "Non-destructive moisture mapping and infrared thermal imaging in South Florida. Find hidden water intrusion behind walls and ceilings before it becomes mold.",
    });
    return { ...base, scripts: [jsonLdScript(faqSchema(faqs))] };
  },
  component: ThermalImagingPage,
});

function ThermalImagingPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Moisture Mapping & Thermal Imaging"
      intro={
        <>
          Moisture mapping and thermal imaging use infrared cameras and
          moisture meters to locate hidden water intrusion behind walls,
          ceilings, and floors — the underlying condition that turns a small
          leak into a mold problem. It is a non-destructive way to find and
          document moisture before you cut into finishes or spend money on
          remediation guesses.
        </>
      }
      sections={[
        {
          h2: "Why moisture — not mold — is really the target",
          paragraphs: [
            "Mold in South Florida homes is almost always downstream of a moisture problem: a slow supply-line drip, a roof detail that fails in wind-driven rain, an AC condensate line that never quite drains, or a stucco crack that wicks water into a wall cavity. Kill the moisture and the mold has no fuel; miss the moisture and the mold comes right back after remediation.",
            "That's why our inspections lead with moisture. Thermal imaging is the survey layer that shows us where to look, and moisture meters are the confirmation layer that tells us how wet a specific spot really is. Together they turn a subjective 'this wall feels damp' into documented, defensible measurements.",
          ],
        },
        {
          h2: "The tools we use",
          subsections: [
            { h3: "Infrared thermal camera", body: "A calibrated infrared camera images surface temperature across walls, ceilings, and floors. Wet materials evaporate moisture at a different rate than dry ones, creating thermal patterns we can photograph and document." },
            { h3: "Pinless capacitance meter", body: "A pinless meter reads relative moisture content up to roughly three-quarters of an inch into a substrate without leaving marks — ideal for scanning large runs of drywall and finished floors." },
            { h3: "Pin moisture meter", body: "Where a pinless reading is elevated, pin probes measure moisture content directly by conductivity between two electrodes. This is our confirmation step." },
            { h3: "Hygrometer & psychrometer", body: "Ambient temperature, relative humidity, and dew point are recorded to interpret readings in context — a wall that reads 'wet' in one climate may read normal in another." },
          ],
        },
        {
          h2: "How a moisture mapping visit works",
          steps: [
            { n: "01", h: "Intake & history", b: "We ask about recent leaks, storms, roof age, plumbing repairs, and any spots that feel damp or cold — history focuses the scan and saves time." },
            { n: "02", h: "Baseline environmental readings", b: "Indoor temperature, humidity, and dew point are recorded so anomalies are interpretable and repeatable if we come back." },
            { n: "03", h: "Infrared survey", b: "A methodical thermal scan of exterior walls, ceilings under upstairs bathrooms, HVAC closets, around windows, and beneath sinks — following the water, not just the visible finishes." },
            { n: "04", h: "Meter confirmation", b: "Every thermal anomaly worth flagging is verified with pinless and, where needed, pin moisture meters. Photos, readings, and locations are logged." },
            { n: "05", h: "Map & report", b: "You receive a written report with annotated thermal images, moisture readings, and a plain-language explanation of what each finding means and where it likely originates." },
          ],
        },
        {
          h2: "When homeowners request moisture mapping",
          bullets: [
            "You've had a leak or plumbing repair and want to know how far the water traveled",
            "You suspect a slow roof leak from tile edges, valleys, or wall-to-roof transitions",
            "There's a musty odor but no visible growth to explain it",
            "AC condensate has overflowed and you want to know if the wall cavity is dry",
            "After a storm event or wind-driven rain, you want documentation of what did and didn't get wet",
            "A remediation contractor has proposed opening large sections of drywall and you want independent verification first",
          ],
        },
        {
          h2: "What your report includes",
          paragraphs: [
            "Every moisture mapping report includes environmental readings, thermal images with locations marked on a floor plan or annotated photos, and matched moisture-meter readings. Findings are ranked so that the highest-risk areas — sustained elevated readings, active wetting, or patterns consistent with a specific water source — are clearly separated from cosmetic or ambiguous observations.",
            "Because we do not sell repairs, our recommendations focus on next steps: which trade to bring in (roofer, plumber, HVAC), which areas warrant further inspection, and where an air or surface sample should be taken to check for mold now that the moisture picture is clear.",
          ],
        },
        {
          h2: "How this fits with our other assessment services",
          paragraphs: [
            "Moisture mapping is the connective tissue between visual inspection and lab testing. It's what tells us where a musty-smelling room is actually getting wet, and why an elevated Aspergillus/Penicillium reading in one room and not the adjacent one makes sense. On real estate inspections, it protects buyers from paying to close on a house with an active roof or plumbing leak the seller may not have known about. On commercial and property-management jobs, it turns a vague tenant complaint into documented, actionable data.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/air-quality-testing", label: "Airborne mold & air quality testing", blurb: "Confirm whether a moisture finding has already produced elevated indoor spore counts." },
        { to: "/services/surface-sampling", label: "Surface & swab sampling", blurb: "Positively identify any visible material found near a documented moisture source." },
        { to: "/services/post-remediation-verification", label: "Post-remediation verification", blurb: "Confirm materials are dry and stayed dry after remediation, before repairs are closed up." },
      ]}
      ctaTitle="Schedule moisture mapping"
      ctaBody="Find hidden water before it becomes hidden mold. Non-destructive, documented, and independent."
    />
  );
}