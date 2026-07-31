import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Scale,
  Search,
  FlaskConical,
  FileText,
  Wind,
  Home,
  CheckCircle2,
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  Thermometer,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  pageMeta,
  faqSchema,
  jsonLdScript,
  serviceSchema,
  breadcrumbSchema,
  type FaqItem,
} from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "How long does a mold inspection take on-site?",
    a: "Most residential mold inspections take about 60 to 120 minutes on-site, depending on square footage and how many areas of concern we need to evaluate. Larger homes, multi-story properties, and commercial buildings run longer. Lab-analyzed samples are typically returned within 24 hours, so the written report follows shortly after the visit.",
  },
  {
    q: "How much does a mold inspection cost in South Florida?",
    a: "Every property is different — home size, number of areas of concern, and how many samples the job actually needs all factor in. We give you a clear, upfront quote before any work begins, with no surprise fees. Call (561) 632-6387 or request a free quote and we'll price your property specifically.",
  },
  {
    q: "What's the difference between a mold inspection and mold testing?",
    a: "A mold inspection is the licensed on-site evaluation — visual walk-through, moisture readings, thermal imaging, and inspection of hidden areas. Mold testing is the lab-analyzed sampling piece — air, surface, or bulk samples sent to an accredited laboratory. Most Safe Haven inspections include both because they answer different questions: the inspection finds where and why, the testing quantifies what.",
  },
  {
    q: "Do you charge extra for using thermal imaging or moisture meters?",
    a: "No. Infrared thermal cameras and moisture meters are standard equipment on every inspection we perform. They're how a licensed assessor finds hidden moisture behind walls, above ceilings, and around HVAC systems without opening finished surfaces.",
  },
  {
    q: "Do I need a mold inspection when buying a home?",
    a: "In South Florida, an independent pre-purchase mold inspection is one of the smartest small investments in your due diligence. General home inspectors flag suspected moisture as a specialist referral but don't sample or test. A licensed mold assessor closes that loop before you close on the property, with a report you can use during the inspection response.",
  },
  {
    q: "What is a DBPR-licensed mold assessor?",
    a: "Florida law requires anyone performing mold assessments for compensation to hold a state license issued by the Department of Business and Professional Regulation (DBPR). A licensed mold assessor has passed state examinations and maintains insurance and continuing-education requirements. Safe Haven Inspections is a Florida-licensed mold assessment company (FL Mold Assessor MRSA3366).",
  },
  {
    q: "Will you tell me exactly which species of mold you find?",
    a: "Yes. Air samples are analyzed for spore types and concentrations relative to the outdoor control, and surface samples can identify specific genera (Aspergillus, Penicillium, Stachybotrys, Cladosporium, and others). The lab report lists what was identified in each sample, and we translate that into plain language in the written assessment.",
  },
  {
    q: "Do I need to leave the house during the inspection?",
    a: "No. Staying home is fine and often helpful — you can point out areas you're concerned about, past leaks, or symptoms that show up in certain rooms. We do ask that HVAC systems stay in their normal operating state and windows stay closed for a period before air sampling so indoor readings aren't diluted.",
  },
  {
    q: "How soon will I get my report?",
    a: "Lab-analyzed samples are typically returned within 24 hours, and the written assessment report follows the same timeline. If a real estate transaction or insurance deadline is driving the schedule, tell us up front and we'll build the visit around it.",
  },
  {
    q: "What if the inspection finds mold — do you do the cleanup?",
    a: "No. Safe Haven only inspects, tests, and verifies. We do not perform, subcontract, or take referral fees from mold remediation. That separation is deliberate: the company diagnosing the problem shouldn't be the same company profiting from the cleanup. You'll hire a licensed remediator of your choice using the protocol in our report as their scope.",
  },
  {
    q: "Do you do post-remediation clearance testing?",
    a: "Yes — that's a separate service. After a remediation company finishes, we return to verify the work with clearance testing (post-remediation verification) before the walls close and occupants return. It's the last step of the Florida mold process and the one that gives you documented proof the problem is resolved.",
  },
  {
    q: "Which South Florida cities do you serve?",
    a: "We cover Martin, Palm Beach, and Broward Counties — from Stuart, Palm City, and Hobe Sound through Jupiter, Palm Beach Gardens, West Palm Beach, Wellington, Boca Raton, and down into Fort Lauderdale, Hollywood, Pembroke Pines, and Weston. See our service areas page for the full list.",
  },
];

export const Route = createFileRoute("/services/mold-inspection")({
  head: () => {
    const base = pageMeta({
      path: "/services/mold-inspection",
      title: "Mold Inspection South Florida | Safe Haven",
      description:
        "Independent, Florida-licensed mold inspection across Martin, Palm Beach & Broward Counties. Visual, moisture, and lab-backed sampling. Report in 24 hours.",
      ogType: "website",
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(
          serviceSchema({
            name: "Mold Inspection South Florida",
            description:
              "Independent, Florida-licensed mold inspection across Martin, Palm Beach & Broward Counties. Visual, moisture, and lab-backed sampling. Report in 24 hours.",
            path: "/services/mold-inspection",
            serviceType: "Mold inspection and assessment",
          }),
        ),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Mold Inspection South Florida", path: "/services/mold-inspection" },
          ]),
        ),
      ],
    };
  },
  component: MoldInspectionPage,
});

function MoldInspectionPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Service</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            Mold Inspection in South Florida
          </h1>
          <span aria-hidden className="spectrum-rule mt-5" />
          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            A mold inspection is a licensed, on-site evaluation of a property for
            visible mold, hidden moisture, and elevated indoor spore levels — delivered
            as a plain-language written report you can act on. Safe Haven Inspections
            is an independent, Florida-licensed mold assessor that performs inspection,
            testing, and assessment only, so every finding on your report reflects
            what's actually there — never a scope of work written to sell a cleanup.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
            >
              Request a free quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+15616326387"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" /> (561) 632-6387
            </a>
          </div>
        </div>
      </section>

      {/* 3-step Florida mold process */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            The Florida mold process — 3 steps
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-primary sm:text-3xl">
            Assessment, remediation, and clearance — kept in separate hands.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                h: "Independent assessment",
                b: "A licensed mold assessor (that's us) inspects the property, documents moisture, and analyzes samples through an accredited lab. You get a written protocol.",
              },
              {
                n: "02",
                h: "Remediation by a company of your choice",
                b: "You hire a licensed Florida mold remediator to perform the cleanup and correct the moisture source. Safe Haven never does remediation and takes no referral fees.",
              },
              {
                n: "03",
                h: "Post-remediation clearance",
                b: "We return for independent clearance testing to confirm the work succeeded and indoor air has returned to normal before walls close and occupants come back.",
              },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-5">
                <div className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Step {s.n}
                </div>
                <h3 className="mt-1 font-semibold text-primary">{s.h}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Want the full walk-through of how mold is properly handled in Florida?{" "}
            <Link
              to="/blog/$slug"
              params={{ slug: "mold-removal-process-florida" }}
              className="font-semibold text-accent hover:underline"
            >
              Read the full process guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          What a mold inspection actually is
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            A mold inspection is not a single test — it's a structured evaluation
            performed by a licensed assessor. The goal is to answer three specific
            questions: is there mold present at levels that matter, where is the
            moisture that's feeding it, and what does the property need next? Every
            step of the visit is designed to answer one of those three questions
            using tools and lab data rather than guesswork.
          </p>
          <p>
            Because Florida's climate keeps humidity high year-round and hurricane
            season regularly drives water intrusion, mold problems in South Florida
            homes are rarely limited to what you can see. Visible discoloration is
            usually the last symptom to appear — a well-run inspection finds the
            moisture history that produced it and the airborne conditions that
            surround it, not just the spot on the ceiling.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          What a Safe Haven mold inspection includes
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Every standard residential inspection covers the same core elements, scaled
          to the property.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Search, title: "Full visual inspection", body: "Walls, ceilings, baseboards, cabinetry, attics, HVAC returns, laundry areas, water heaters, and known problem spots — all photographed and documented." },
            { icon: Thermometer, title: "Moisture mapping & thermal imaging", body: "Non-destructive infrared and moisture-meter surveys locate hidden intrusion behind finished surfaces before it becomes mold." },
            { icon: Wind, title: "Indoor air sampling", body: "Spore-trap air samples with an outdoor control so indoor spore levels can be interpreted against baseline outdoor conditions." },
            { icon: FlaskConical, title: "Surface & bulk sampling", body: "Tape-lift, swab, or bulk material samples where visible growth needs positive species identification." },
            { icon: FileText, title: "Plain-language written report", body: "Findings, annotated photos, lab results, and prioritized recommendations — a homeowner can read it, and so can a lender or insurer." },
            { icon: ShieldCheck, title: "Independent, no upsell", body: "No remediation sales, no subcontracting, no referral fees. Our only product is an honest, lab-backed answer." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <item.icon className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          The inspection, step by step
        </h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { n: "01", h: "Intake call", b: "We ask what you're seeing, smelling, or worried about, and confirm whether a full inspection is even the right next step before you spend a dollar." },
            { n: "02", h: "On-site visual inspection", b: "A licensed assessor walks the property, documents moisture readings and thermal anomalies, and photographs every finding." },
            { n: "03", h: "Air and surface sampling", b: "Air samples with an outdoor control, plus tape-lift, swab, or bulk samples where visible growth is present, using industry-standard protocols and chain-of-custody labeling." },
            { n: "04", h: "AIHA-accredited lab analysis", b: "Samples go to an independent AIHA-accredited third-party laboratory — never analyzed in-house. Typical turnaround: within 24 hours." },
            { n: "05", h: "Written assessment report", b: "You receive a plain-language PDF report with findings, lab results, annotated photos, and a prioritized action plan. When applicable, a remediation protocol is included so any remediator can bid the same scope." },
            { n: "06", h: "Follow-up call", b: "We walk you through the report so nothing gets misread — including what does and does not require remediation." },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-accent">{s.n}</div>
              <h3 className="mt-1 font-semibold text-primary">{s.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Tools and methods we use
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Good mold inspection depends on the right instrumentation used the right
          way. On every visit we use pin and pinless moisture meters to quantify
          moisture content in framing, drywall, and flooring; infrared thermal
          cameras to spot temperature anomalies that indicate hidden water; digital
          hygrometers to record indoor temperature, relative humidity, and dew
          point; and spore-trap air sampling cassettes calibrated to standard flow
          rates. All lab work is handled by an AIHA-accredited third-party
          laboratory whose credentials, quality control, and chain of custody are
          documented in your report.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          When you need a mold inspection
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "You can see visible mold or discoloration and want the type and extent confirmed.",
            "You smell a persistent musty odor with no obvious source.",
            "Someone in the home has unexplained respiratory or allergy symptoms indoors.",
            "You're buying a home in South Florida and want an independent pre-closing check.",
            "You're selling and want a clean, third-party report ready before the inspection period.",
            "You've had a recent leak, roof issue, storm, or slow plumbing problem.",
            "A remediation was performed and you need independent post-remediation clearance.",
            "You manage a rental, condo, or HOA property and need documentation of current conditions.",
          ].map((line) => (
            <li key={line} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          What the written report includes
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            The deliverable is a formal written assessment: a PDF report you can
            hand to a real-estate attorney, insurance adjuster, remediation
            contractor, or lender. Inside, you'll find the site conditions on the
            day of the visit, temperature and humidity readings, moisture meter and
            thermal imaging observations, a photograph log keyed to the floor plan,
            AIHA-accredited lab results with the outdoor control clearly labeled,
            a plain-language interpretation of what the numbers actually mean, and
            a prioritized recommendations section.
          </p>
          <p>
            When active mold growth is documented, the report includes a written
            remediation protocol describing the scope, containment, PPE, work
            practices, and post-remediation clearance criteria a remediator should
            meet. That protocol becomes the shared scope every bidder responds to
            — so you're comparing apples to apples, not opinions to opinions.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Why independent inspection matters</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <Scale className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-semibold text-primary">No conflict of interest</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Companies that also perform remediation have a financial reason to find
              more mold. We only assess, so our findings reflect what is actually there.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <FlaskConical className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-semibold text-primary">Third-party lab results</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every sample is analyzed by an independent AIHA-accredited laboratory —
              never by us — so the numbers on your report are defensible.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <ShieldCheck className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-semibold text-primary">State-licensed</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Safe Haven Inspections is a Florida-licensed mold assessment company
              (FL Mold Assessor MRSA3366 / FL Mold Remediator MRSR3536).
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">How this fits with our other services</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          A mold inspection is the umbrella service — every other service we offer
          is either a specialized subset (air-quality testing, surface sampling,
          moisture mapping, humidity testing) or a follow-up (post-remediation
          verification, real-estate inspections, commercial inspections, formal
          written protocols). If you're not sure which of those you need,
          start here — a full inspection tells you which of the others actually
          apply.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { to: "/services/mold-testing" as const, label: "Mold Testing", blurb: "Air and surface testing overview — what each test measures and when it's used." },
            { to: "/services/thermal-imaging" as const, label: "Moisture Mapping & Thermal Imaging", blurb: "Non-destructive infrared and moisture-meter survey for hidden water intrusion." },
            { to: "/services/post-remediation-verification" as const, label: "Post-Remediation Verification", blurb: "Independent clearance testing after remediation, before walls close." },
          ].map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition hover:border-accent"
            >
              <div>
                <h3 className="font-semibold text-primary">{r.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.blurb}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-accent" />
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Areas we serve</h2>
        </div>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Safe Haven serves Palm Beach, Martin, and Broward Counties. A few of our
          most-requested Palm Beach County cities have dedicated pages:
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { to: "/mold-inspection-west-palm-beach" as const, label: "West Palm Beach" },
            { to: "/mold-inspection-wellington" as const, label: "Wellington" },
            { to: "/mold-inspection-boca-raton" as const, label: "Boca Raton" },
          ].map((c) => (
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
        <p className="mt-4 text-sm text-muted-foreground">
          Don't see your city? See our{" "}
          <Link to="/service-areas" className="font-semibold text-accent hover:underline">
            full South Florida service areas
          </Link>{" "}
          or call us directly.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-accent" />
            <div>
              <h2 className="text-xl font-semibold text-primary">
                Independent assessor — no remediation, no conflict of interest
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Safe Haven Inspections is a Florida-licensed mold assessment
                company (FL Mold Assessor MRSA3366 / FL Mold Remediator MRSR3536). We perform
                inspection, testing, and assessment only. We do not sell,
                subcontract, or refer paid remediation, so every finding on your
                report reflects what's actually there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto my-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Ready to schedule an inspection?</h2>
              <p className="mt-2 max-w-xl text-sm opacity-90 sm:text-base">
                Talk to our local, state-licensed team — no call center, no upsell.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
              >
                Request a free quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+15616326387"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> (561) 632-6387
              </a>
            </div>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-xs opacity-80">
            <Clock className="h-3.5 w-3.5" />
            Lab results and written report typically within 24 hours.
          </p>
        </div>
      </section>
    </>
  );
}
