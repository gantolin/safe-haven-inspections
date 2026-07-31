import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { pageMeta, faqSchema, jsonLdScript, type FaqItem, serviceSchema, breadcrumbSchema } from "@/lib/seo";

const faqs: FaqItem[] = [
  { q: "What is psychrometric testing?", a: "Psychrometric testing measures three related properties of indoor air — temperature, relative humidity, and dew point — together, at multiple points in the home, and compares them to outdoor conditions. It reveals whether the HVAC system, envelope, and moisture load are actually keeping the interior dry, or only appear to." },
  { q: "Why does humidity matter for mold?", a: "Mold grows when surfaces stay damp long enough for spores to colonize. In South Florida, most of the moisture on those surfaces doesn't come from a leak — it comes from ambient humidity condensing on cooler surfaces. Getting relative humidity right is often the difference between a home that mildews and one that doesn't." },
  { q: "What indoor humidity level should we target?", a: "In South Florida, most homes should hold indoor relative humidity below roughly 60% — generally 45% to 55% is comfortable and mold-safe. Above 60% for extended periods, surface moisture starts to accumulate on cool spots. Dew point matters even more than relative humidity in some situations, which is why we measure both." },
  { q: "My AC runs constantly but the house still feels damp — why?", a: "Cooling and dehumidification are related but not the same. An oversized or short-cycling AC cools quickly and shuts off before it removes much moisture. Undersized ductwork, wrong thermostat setpoints, chronic infiltration, and pool or shower moisture add to the load. Psychrometric testing tells you which of those is actually driving your numbers." },
  { q: "Do I need a whole-house dehumidifier?", a: "Sometimes. Testing reveals whether the AC system alone can hold target humidity, or whether supplemental dehumidification is the right call. We don't sell equipment, so the recommendation reflects what the numbers show, not what we're trying to move." },
  { q: "How is this different from a regular mold inspection?", a: "A mold inspection focuses on whether mold is present and where the moisture is coming from. Humidity testing focuses specifically on the psychrometric conditions — temperature, RH, dew point — that make mold possible in the first place. The two are often combined, especially for homes with a history of surface mildew and no obvious leak." },
  { q: "How long does the on-site portion take?", a: "Most single-family homes are about 60 to 90 minutes on-site. Larger homes, multi-zone HVAC systems, or ongoing monitoring take longer or use data-logging equipment left in place for a period." },
  { q: "Can you leave data loggers to record over several days?", a: "Yes. Multi-point data logging captures temperature and RH over 24 hours to several days, which is often the most useful data for intermittent problems — nighttime setback issues, snowbird vacancy behavior, or humidity spikes after cooking or showering." },
  { q: "How fast do I get the report?", a: "Written reports are typically returned within 24 hours of the on-site visit. Multi-day monitoring adds the logging period to that timeline." },
  { q: "Do you serve all of South Florida?", a: "Yes — Martin, Palm Beach, and Broward Counties." },
];

export const Route = createFileRoute("/services/humidity-testing")({
  head: () => {
    const base = pageMeta({
      path: "/services/humidity-testing",
      title: "Humidity & Psychrometric Testing FL | Safe Haven",
      description: "Independent temperature, humidity, and dew point testing for South Florida homes and buildings. Diagnose humidity-driven mold conditions with lab-backed data.",
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(
          serviceSchema({
            name: "Humidity & Psychrometric Testing FL",
            description: "Independent temperature, humidity, and dew point testing for South Florida homes and buildings. Diagnose humidity-driven mold conditions with lab-backed data.",
            path: "/services/humidity-testing",
          }),
        ),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Humidity & Psychrometric Testing FL", path: "/services/humidity-testing" },
          ]),
        ),
      ],
    };
  },
  component: HumidityPage,
});

function HumidityPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Humidity & Psychrometric Testing"
      intro={
        <>
          Humidity testing is a psychrometric evaluation of the indoor
          environment — temperature, relative humidity, and dew point — that
          identifies whether ambient moisture, not a specific leak, is what's
          driving mold or mildew problems. It's the diagnostic step that answers
          "why does this house always feel damp?"
        </>
      }
      sections={[
        {
          h2: "Why humidity is a mold question in South Florida",
          paragraphs: [
            "In humid climates, most surface mold and mildew problems don't trace back to a leak. They trace back to ambient relative humidity that stays high enough, long enough, for moisture to condense on cool spots — the back of a closet on an exterior wall, the underside of a supply-air register, tile grout in a bathroom, the base of a fridge. Once relative humidity spends real time above roughly 60%, the odds of surface colonization go up sharply.",
            "The trick is that RH varies from room to room, day to night, and season to season. A single reading on a thermostat doesn't capture what's actually happening on the wall behind the couch. Psychrometric testing measures temperature, RH, and dew point at multiple points in the home, compares them to outdoor conditions, and produces the data needed to diagnose whether the HVAC system, the envelope, or the moisture load is the actual issue.",
          ],
        },
        {
          h2: "What we measure",
          subsections: [
            { h3: "Temperature (dry bulb)", body: "Room-by-room and against the thermostat. Uneven cooling often points to duct or airflow problems that drive humidity issues." },
            { h3: "Relative humidity (RH)", body: "The metric most people know. Measured at multiple locations, not just one. Sustained readings above roughly 60% are what we're looking for." },
            { h3: "Dew point", body: "The temperature at which the air becomes fully saturated. If the dew point is above surface temperatures anywhere in the home, condensation happens on those surfaces." },
            { h3: "Envelope temperature deltas", body: "Thermal imaging of exterior walls, closet backs, and cold spots identifies where surface temperature actually drops below the dew point." },
          ],
        },
        {
          h2: "The process",
          steps: [
            { n: "01", h: "Intake & symptoms review", b: "We ask what's happening — musty rooms, symptoms, past mildew — and where. That focuses the sample points." },
            { n: "02", h: "Multi-point psychrometric readings", b: "Calibrated hygrometers record temperature, RH, and dew point at multiple interior locations and at least one outdoor reading." },
            { n: "03", h: "HVAC and envelope evaluation", b: "Supply and return air conditions, thermostat setpoints, and thermal imaging of exterior walls and closets to identify condensation risk." },
            { n: "04", h: "Optional data logging", b: "For intermittent problems, we can leave data loggers in place for a period to capture RH and temperature swings over time." },
            { n: "05", h: "Written report & recommendations", b: "A plain-language report with readings, thermal images, findings, and prioritized recommendations. Typical turnaround within 24 hours." },
          ],
        },
        {
          h2: "When humidity testing is the right service",
          bullets: [
            "Musty smell throughout the house with no visible leak source.",
            "Mildew keeps returning on the same walls, ceilings, or grout after cleaning.",
            "AC runs constantly but the house feels damp or clammy.",
            "Closets and cabinets stay muggy even when the rest of the house feels fine.",
            "A snowbird home mildews while owners are away.",
            "New construction with envelope or HVAC design questions.",
            "Post-remediation, to make sure the underlying conditions won't rebuild mold.",
            "Rental or condo property with recurring tenant humidity complaints.",
          ],
        },
        {
          h2: "What the report includes",
          paragraphs: [
            "The written report lays out every measurement — temperature, relative humidity, and dew point — by location, alongside outdoor conditions at the time of the visit. Thermal images document surface temperatures on suspect exterior walls and cold spots. HVAC observations note supply and return conditions and any airflow issues that showed up in the walk-through.",
            "The recommendations section is prioritized: setpoint changes and behavioral adjustments first, then equipment or ductwork recommendations if the numbers justify them. Because we don't sell HVAC or dehumidification equipment, those recommendations reflect the data — not a product line.",
          ],
        },
        {
          h2: "How humidity testing fits with our other services",
          paragraphs: [
            "Humidity testing is often paired with a full mold inspection or air-quality testing, because ambient moisture and airborne spores are frequently the same story told two ways. It's also the service most likely to be recommended after post-remediation verification, when the numbers show the cleanup succeeded but the underlying conditions still need work.",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/services/air-quality-testing", label: "Airborne mold & air quality testing", blurb: "Pair with psychrometric readings to see whether humidity has already driven airborne spore counts up." },
        { to: "/services/thermal-imaging", label: "Moisture mapping & thermal imaging", blurb: "Find the specific cold surfaces where condensation is landing." },
        { to: "/services/mold-inspection", label: "Full mold inspection", blurb: "The umbrella service — combines humidity, moisture, visual, and lab testing in one visit." },
      ]}
      ctaTitle="Recurring mildew with no leak in sight?"
      ctaBody="Independent, data-backed humidity testing across South Florida. Find out whether ambient moisture — not a leak — is driving the problem."
    />
  );
}
