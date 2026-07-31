import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Award,
  Building2,
  CalendarCheck,
  Droplets,
  FileCheck2,
  FlaskConical,
  Gauge,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Thermometer,
  Wind,
  Check,
  X,
} from "lucide-react";
import { faqSchema } from "@/lib/seo";

export interface CityMoldPageProps {
  city: string;
  county: string;
  intro: string; // answer-first intro naming the city
  localAngle: {
    heading: string;
    paragraphs: string[]; // 1-2 unique paragraphs about local considerations
  };
  otherCities: Array<{
    to:
      | "/mold-inspection-wellington"
      | "/mold-inspection-royal-palm-beach"
      | "/mold-inspection-loxahatchee"
      | "/mold-inspection-stuart"
      | "/mold-inspection-palm-city"
      | "/mold-inspection-jensen-beach"
      | "/mold-inspection-hobe-sound"
      | "/mold-inspection-port-salerno"
      | "/mold-inspection-fort-lauderdale"
      | "/mold-inspection-hollywood"
      | "/mold-inspection-pembroke-pines"
      | "/mold-inspection-coral-springs"
      | "/mold-inspection-pompano-beach"
      | "/mold-inspection-davie"
      | "/mold-inspection-plantation"
      | "/mold-inspection-sunrise"
      | "/mold-inspection-deerfield-beach"
      | "/mold-inspection-weston"
      | "/mold-inspection-west-palm-beach"
      | "/mold-inspection-boca-raton"
      | "/mold-inspection-delray-beach"
      | "/mold-inspection-boynton-beach"
      | "/mold-inspection-jupiter"
      | "/mold-inspection-palm-beach-gardens"
      | "/mold-inspection-lake-worth-beach"
      | "/mold-inspection-greenacres"
      | "/mold-inspection-riviera-beach";
    label: string;
  }>;
}

export function CityMoldPage({ city, county, intro, localAngle, otherCities }: CityMoldPageProps) {
  const faqItems: Array<{ q: string; a: string }> = [
    {
      q: `How much does a mold inspection cost in ${city}?`,
      a: `Every ${city} property is different — square footage, number of areas of concern, and how many samples the job actually needs all factor in. Rather than post a misleading flat rate, we give you a clear, upfront quote before any work begins, with no surprise fees. Call (561) 632-6387 or request a free phone consultation and we'll walk through what your specific property needs.`,
    },
    {
      q: "How long does a mold inspection take?",
      a: "A typical residential inspection runs about one to two hours on site, depending on square footage, accessibility, and how many sample locations we need. Larger homes, multi-story properties, or inspections with extensive thermal imaging can take longer. We won't rush the walkthrough — the goal is to actually find the problem, not to hit a stopwatch.",
    },
    {
      q: "What's the difference between a mold inspection and mold testing?",
      a: "The inspection is the walkthrough: visual assessment, moisture readings, humidity logging, and thermal imaging to locate suspect areas. Testing is what happens when we collect air or surface samples and send them to an independent lab for analysis. Most jobs need both — the inspection tells us where to sample, and the lab tells us what's actually there.",
    },
    {
      q: "What are the signs I need a mold inspection?",
      a: "Common triggers include a musty smell that won't go away, visible spotting on drywall, ceilings, or grout, water staining after a leak or storm, worsening allergy or respiratory symptoms indoors, and any recent plumbing, roof, or AC-line failure. If you're buying a home and the inspection period is short, that's another reason to schedule quickly.",
    },
    {
      q: "Do I still need testing if I can already see mold?",
      a: "Often, yes. Visible growth confirms there's a moisture problem, but a lab sample identifies the specific genera present, which informs how remediation should be handled and how aggressively to protect occupants. Testing also documents pre-work conditions, which matters for insurance claims and post-remediation clearance.",
    },
    {
      q: "Will running the AC, fans, or air purifiers affect my mold test results?",
      a: "Yes — running HVAC, box fans, or portable air purifiers right before an air sample can temporarily lower spore counts and mask the true baseline. We ask that those be turned off for a period before the visit so the sample reflects real conditions. We walk you through the exact prep when we schedule.",
    },
    {
      q: "Can testing tell the difference between old and active mold growth?",
      a: "Not directly from a single spore-trap sample. What testing does establish is what's currently airborne or on a surface, in what quantities, and how that compares to an outdoor control taken the same day. Combined with moisture readings and visible-condition notes, that's what separates a dormant historical stain from an active, growing colony.",
    },
    {
      q: "Can you find hidden mold behind walls or in the AC system?",
      a: "We use infrared thermal imaging and moisture meters to flag hidden moisture inside wall cavities, above ceilings, behind cabinetry, and around AC air handlers and return chases. When those readings suggest hidden growth, we recommend targeted cavity sampling or a small inspection opening — always the least-invasive path that still answers the question.",
    },
    {
      q: `Do I need a mold inspection when buying or selling a home in ${city}?`,
      a: `It isn't required, but in ${city}'s climate — humid year-round, older housing stock in some neighborhoods, and storm exposure — it's one of the smartest add-ons to a home inspection. Buyers get a clear picture of what they're inheriting; sellers who test up front avoid last-minute renegotiations when a general inspector flags something ambiguous.`,
    },
    {
      q: "What happens after mold is found — what are my next steps?",
      a: "You get a plain-language report with photos, lab results, and moisture data, along with a recommended scope for a remediation contractor to follow. You choose the remediator — we don't refer to a preferred cleanup company. After remediation, we can come back for independent clearance testing to verify the work met protocol.",
    },
    {
      q: "Do I need testing after mold removal (clearance testing)?",
      a: "Strongly recommended. Post-remediation verification confirms the remediator actually met the containment, cleaning, and moisture goals in their protocol. Because we're independent, our clearance results aren't self-graded by the same company that did the work — which is the whole point of clearance testing.",
    },
    {
      q: "Will a mold report help with an insurance claim or a landlord dispute?",
      a: "Yes. A licensed, third-party assessment with photos, moisture readings, and lab-analyzed samples is the kind of documentation adjusters, attorneys, and property managers expect to see. Because Safe Haven doesn't perform remediation, the report reads as an unbiased record of conditions rather than an estimate to justify our own cleanup work.",
    },
    {
      q: "What is a DBPR-licensed mold assessor, and why does independence matter?",
      a: "In Florida, mold assessment and mold remediation are separately regulated by DBPR, and state rules discourage one company from performing both on the same property. A licensed assessor (Safe Haven holds MRSA3366 and MRSR3536) is authorized to inspect, sample, and write assessment reports. Independence matters because when the same firm both diagnoses and sells the cleanup, the incentives quietly point one direction.",
    },
    {
      q: "How soon will I get my results?",
      a: `Field observations and moisture data are captured the day of the visit. Lab-analyzed samples and your written ${city} report — with photos, readings, and recommendations — are typically delivered within 24 hours.`,
    },
  ];

  const faqLd = faqSchema(faqItems);

  const trustBadges = [
    { icon: CalendarCheck, label: "Same-day / fast appointments" },
    { icon: ShieldCheck, label: "State licensed & insured" },
    { icon: FlaskConical, label: "Certified 3rd-party lab analysis" },
    { icon: Building2, label: "Residential & commercial" },
    { icon: Award, label: "Independent — inspection & testing only" },
    { icon: Activity, label: "14 years of experience" },
  ];

  const serviceCards: Array<{
    to:
      | "/services/air-quality-testing"
      | "/services/surface-sampling"
      | "/services/thermal-imaging"
      | "/services/post-remediation-verification"
      | "/services/real-estate-mold-inspection"
      | "/services/commercial-mold-inspection"
      | "/services/mold-assessment-report";
    title: string;
    blurb: string;
  }> = [
    { to: "/services/air-quality-testing", title: "Air Quality Testing", blurb: "Indoor spore-trap sampling with paired outdoor controls to quantify what's actually in the air you breathe." },
    { to: "/services/surface-sampling", title: "Surface & Swab Sampling", blurb: "Targeted swab, tape-lift, and bulk samples that identify specific mold genera on visible growth." },
    { to: "/services/thermal-imaging", title: "Thermal Imaging", blurb: "Infrared scanning that reveals hidden moisture behind walls, ceilings, and cabinetry — non-invasively." },
    { to: "/services/post-remediation-verification", title: "Post-Remediation Verification", blurb: "Independent clearance testing after remediation so you know the work actually met protocol." },
    { to: "/services/real-estate-mold-inspection", title: "Real Estate Inspection", blurb: "Fast pre-purchase and pre-sale assessments scheduled around inspection-period deadlines." },
    { to: "/services/commercial-mold-inspection", title: "Commercial Inspection", blurb: "Property-manager and business-owner assessments for offices, retail, medical, and multi-unit buildings." },
    { to: "/services/mold-assessment-report", title: "Mold Assessment Report", blurb: "A plain-language, photo-supported report with lab results and clear next steps — usable by insurers and remediators." },
  ];

  const whatToExpect: Array<{
    icon: typeof Wind;
    title: string;
    body: string;
    to?:
      | "/services/air-quality-testing"
      | "/services/surface-sampling"
      | "/services/thermal-imaging"
      | "/services/mold-assessment-report";
  }> = [
    {
      icon: Wind,
      title: "Air quality / spore-trap samples",
      body: "We collect calibrated air samples inside the home and pair them with an outdoor control taken the same day. The lab counts spore types and concentrations from both, and the comparison is what tells us whether indoor air actually contains more mold than the outdoor baseline.",
      to: "/services/air-quality-testing",
    },
    {
      icon: Microscope,
      title: "Surface & swab samples",
      body: "When we see suspect growth on drywall, grout, framing, or HVAC surfaces, we collect a swab, tape-lift, or bulk sample directly from it. That lets the lab identify the specific mold genera present rather than guessing from color or texture.",
      to: "/services/surface-sampling",
    },
    {
      icon: Thermometer,
      title: "Thermal imaging",
      body: "An infrared camera reveals temperature differences that flag hidden moisture — behind drywall, above ceilings, inside built-in cabinets, and around window and roof penetrations. It doesn't diagnose mold on its own, but it points our moisture meter to the right spots.",
      to: "/services/thermal-imaging",
    },
    {
      icon: Droplets,
      title: "Moisture readings",
      body: "Every suspect area is confirmed with a pinless or pin-type moisture meter directly against the material. Numbers, not opinions — we record readings in the report so anyone reviewing it later can see exactly where and how wet the assembly was.",
    },
    {
      icon: Gauge,
      title: "Humidity readings",
      body: "Indoor relative humidity above roughly 60% will grow mold on cool surfaces even without a leak. We log temperature and RH in each area of the home so the report reflects the real conditions your HVAC system is or isn't controlling.",
    },
    {
      icon: FileCheck2,
      title: "Certified 3rd-party lab reporting",
      body: "All samples ship to an AIHA-accredited independent laboratory. Because we don't own the lab and don't sell remediation, the results you receive are unfiltered — the same numbers a remediator or insurance carrier would get.",
      to: "/services/mold-assessment-report",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            <MapPin className="mr-1 inline h-4 w-4" /> {city}, {county}
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            {city} Mold Inspection &amp; Testing
          </h1>
          <span aria-hidden className="spectrum-rule mt-5" />
          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            {intro}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary"
              >
                <Icon className="h-3.5 w-3.5 text-accent" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
            >
              Schedule an inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+15616326387"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> Call now: (561) 632-6387
            </a>
          </div>
        </div>
      </section>

      {/* INTRO BLOCK */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Professional, Licensed Mold Inspectors Serving {city}, FL
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Safe Haven Inspections works with {city} homeowners, real estate
            agents, buyers and sellers, contractors, and property managers who
            need a straight answer about mold. We're a Florida-licensed mold
            assessment company (FL Mold Assessor MRSA3366 / FL Mold Remediator MRSR3536), and
            we perform inspection, sampling, and reporting only — never
            remediation.
          </p>
          <p>
            That distinction matters. Because we don't quote or sell the
            cleanup work, there's no built-in incentive to inflate findings or
            invent a problem. What our lab returns is what goes in your report,
            and the report is written so an insurance adjuster, a remediation
            contractor, or a real-estate attorney can act on it without
            translation.
          </p>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          {city} mold assessment services
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Every inspection is tailored to the property and the reason you called.
          Explore the individual services below or jump to the{" "}
          <Link to="/services/mold-inspection" className="font-semibold text-accent hover:underline">
            mold inspection overview
          </Link>
          .
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-primary">{s.title}</h3>
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-sm text-muted-foreground">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          What to expect during your {city} mold inspection
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          A Safe Haven inspection combines a hands-on walkthrough with
          instrument-based testing and independent lab analysis. Here's what
          goes into it:
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {whatToExpect.map(({ icon: Icon, title, body, to }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                {to ? (
                  <Link
                    to={to}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL NARRATIVE — unique per city (from localAngle.paragraphs) */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Protecting {city} homes from mold
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
          {localAngle.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* INDEPENDENCE COMPARISON */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Why an Independent Assessor?
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          In Florida, the same company generally shouldn't both diagnose a mold
          problem and sell you the cleanup. Here's how an independent
          assessment compares to a company that does both under one roof.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-accent bg-card p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold text-primary">
                Safe Haven — Independent Assessor
              </h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "No cleanup services to sell, so there's no financial reason to over-report or expand the scope.",
                "Findings come from an AIHA-accredited third-party lab — we don't grade our own homework.",
                "The report is written for you, your realtor, your insurer, or your attorney — not as an internal sales estimate.",
                "Independent post-remediation verification available so clearance isn't self-certified.",
                "You choose any qualified remediator. We don't refer to a preferred vendor.",
                "State-licensed mold assessor (FL MRSA3366 / MRSR3536).",
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <X className="h-5 w-5" style={{ color: "var(--signal)" }} />
              <h3 className="text-lg font-semibold text-primary">
                Company that Inspects &amp; Sells Remediation
              </h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "The more mold they find, the more cleanup work they book — a built-in incentive to expand findings.",
                "In-house lab or interpretation can blur the line between what was measured and what's being sold.",
                "The report often reads as a scope of work for their own crew rather than a neutral diagnosis.",
                "Clearance testing after their own remediation is essentially self-grading.",
                "You may be steered toward their preferred (or only) remediation path.",
                "In Florida, DBPR rules generally discourage the same firm from assessing and remediating the same property.",
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--signal)" }}
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* INSURANCE (gated) */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h2 className="text-xl font-semibold text-primary">
                Homeowners insurance claims &amp; documentation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                If mold is tied to a covered water event, {city} homeowners
                often need an independent assessment report to submit with a
                homeowners insurance claim. Because Safe Haven is an independent
                assessor and not a remediation contractor, our report is
                positioned exactly the way most carriers prefer to receive it —
                a licensed third party documenting conditions with photos, lab
                results, and moisture readings, separate from whoever performs
                the cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDEPENDENCE STRIP */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-accent" />
            <div>
              <h2 className="text-xl font-semibold text-primary">
                Independent and licensed — no remediation upsell
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Safe Haven Inspections is a Florida-licensed mold assessment
                company (FL Mold Assessor MRSA3366 / FL Mold Remediator MRSR3536). We perform
                inspection and testing only, so {city} homeowners get an
                unbiased, lab-backed answer — never a sales pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA + NEARBY */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Serving Martin, Palm Beach &amp; Broward Counties
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Safe Haven Inspections covers {city} and the surrounding {county}{" "}
          area, plus every neighboring city across South Florida's Treasure
          Coast and Gold Coast. A few nearby service areas:
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Link
            to="/services/mold-inspection"
            className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent"
          >
            Mold inspection overview
            <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
          </Link>
          {otherCities.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent"
            >
              Mold inspection in {c.label}
              <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      {/* FAQ */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          {city} mold inspection — frequently asked questions
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Straight answers to the questions {city} homeowners, buyers, and
          property managers ask us most often.
        </p>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqItems.map((item) => (
            <details key={item.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-primary">
                <span>{item.q}</span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </section>

      <section className="mx-auto my-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Schedule a {city} mold inspection
              </h2>
              <p className="mt-2 max-w-xl text-sm opacity-90 sm:text-base">
                Talk to our local, state-licensed team directly — never an
                answering service. Same-week appointments typically available
                across Martin, Palm Beach &amp; Broward Counties.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+15616326387"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> (561) 632-6387
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
