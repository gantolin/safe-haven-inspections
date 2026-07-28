import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Scale,
  Search,
  FlaskConical,
  FileText,
  Microscope,
  Thermometer,
  Wind,
  Camera,
  Wrench,
  Phone,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Home,
  Droplets,
  CloudRain,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoogleReviews } from "@/components/google-reviews";
import heroDesktopAsset from "../assets/hero-family-desktop.jpg.asset.json";
import heroMobileAsset from "../assets/hero-family-mobile.jpg.asset.json";
import landonPhoto from "@/assets/landon-heinrichs.jpg.asset.json";
import stepVisual from "@/assets/step-visual.jpg.asset.json";
import stepSampling from "@/assets/step-sampling.jpg.asset.json";
import stepLab from "@/assets/step-lab.jpg.asset.json";
import stepReport from "@/assets/step-report.jpg.asset.json";

const heroImg = heroDesktopAsset.url;
const heroImgMobile = heroMobileAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Independent Mold Inspection in South Florida | Safe Haven Inspections" },
      { name: "description", content: "Independent, state-licensed mold inspection and testing across Martin, Palm Beach & Broward Counties. Unbiased, lab-backed answers for your home. Call (561) 632-6387." },
      { property: "og:title", content: "Independent Mold Inspection — Safe Haven Inspections" },
      { property: "og:description", content: "Third-party mold and air-quality assessment for South Florida homeowners and property managers. Unbiased, lab-backed reports." },
      { property: "og:url", content: "https://www.safehaveninspectionsllc.com/" },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://www.safehaveninspectionsllc.com/" },
      {
        rel: "preload",
        as: "image",
        href: heroImgMobile,
        imagesrcset: `${heroImgMobile} 800w, ${heroImg} 1600w`,
        imagesizes: "100vw",
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "/#business",
          name: "Safe Haven Inspections LLC",
          url: "/",
          telephone: "+1-561-632-6387",
          email: "Safehaveninspectionsllc@gmail.com",
          image: heroImg,
          description: "Independent, state-licensed mold inspection and assessment company serving South Florida.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "South Florida",
            addressRegion: "FL",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Martin County, FL" },
            { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
            { "@type": "AdministrativeArea", name: "Broward County, FL" },
          ],
          serviceType: ["Mold inspection", "Mold assessment", "Air quality testing", "Post-remediation verification"],
          founder: { "@type": "Person", name: "Landon Heinrichs" },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-561-632-6387",
            contactType: "Customer Service",
            areaServed: ["Martin County, FL", "Palm Beach County, FL", "Broward County, FL"],
            availableLanguage: "English",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Mold Inspection Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential mold inspection" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-purchase mold assessment" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-remediation verification" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air and surface sampling" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Realtor and property-manager inspections" } },
            ],
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <picture className="absolute inset-0 -z-10 h-full w-full">
          <source media="(min-width: 768px)" srcSet={heroImg} />
          <img
            src={heroImgMobile}
            alt="A family with two children and a golden doodle puppy relaxing in a bright, sunlit South Florida living room."
            width={1600}
            height={1067}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-[center_55%] md:object-[center_62%]"
          />
        </picture>
        {/* Overall darkening to tame brightness */}
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: "rgba(11,37,69,0.28)" }}
        />
        {/* Mobile: top-to-bottom navy scrim so headline + CTAs always have dark backing */}
        <div
          className="absolute inset-0 -z-10 md:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(11,37,69,0.78) 0%, rgba(11,37,69,0.55) 55%, rgba(11,37,69,0.28) 100%)",
          }}
        />
        {/* Desktop: directional gradient anchored behind the headline (left) */}
        <div
          className="absolute inset-0 -z-10 hidden md:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(11,37,69,0.72) 0%, rgba(11,37,69,0.55) 35%, rgba(11,37,69,0.22) 65%, rgba(11,37,69,0.10) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24 md:min-h-[640px] md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white">
              <ShieldCheck className="h-3.5 w-3.5" /> Independent · Licensed · Insured
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl">
              Mold Inspection & Testing
            </h1>
            <p className="mt-3 text-lg font-medium text-white/95 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-xl">
              Protect your home and the air you breathe.
            </p>
            <span aria-hidden className="spectrum-rule mt-5" />
            <p className="mt-5 text-base text-white/95 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-lg">
              Safe Haven Inspections is an independent, state-licensed mold assessment
              company serving South Florida. Our focus is inspection and testing, so
              every answer you get is unbiased, lab-backed, and written for you.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow-lg shadow-cta/30 transition hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+15616326387"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> Call (561) 632-6387
              </a>
            </div>
            <p className="mt-4 max-w-xl text-xs text-white/85 [text-shadow:0_2px_10px_rgba(0,0,0,0.55)] sm:text-sm">
              Not sure if it's mold?{" "}
              <a href="sms:+15616326387" className="font-semibold text-white underline underline-offset-2 hover:text-accent">
                Text a photo to (561) 632-6387
              </a>{" "}
              and we'll tell you if it's worth testing.
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="mx-auto mt-8 max-w-6xl px-4 sm:mt-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={landonPhoto.url}
                alt="Landon Heinrichs, owner of Safe Haven Inspections"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-1 ring-border"
              />
              <div>
                <p className="font-[Bricolage_Grotesque] text-base font-semibold text-primary">
                  Landon Heinrichs
                </p>
                <p className="text-xs text-muted-foreground">
                  Founder · Licensed FL Mold Assessor
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                <ShieldCheck className="h-4 w-4 text-accent" /> Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Certified
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                <Home className="h-4 w-4 text-accent" /> Insured
              </span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="rounded-md border border-border bg-secondary px-3 py-1.5 font-semibold text-primary">
                MRSA3366
              </span>
              <span className="rounded-md border border-border bg-secondary px-3 py-1.5 font-semibold text-primary">
                MRSR3536
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Google reviews trust strip */}
      <GoogleReviews />

      {/* Why we're different — the pitch */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Why we're different
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">
              Assessment is our specialty — and your advantage.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Many companies handle both testing and repairs. We keep our focus on
              assessment, so our findings stand on their own.
            </p>
            <p className="mt-4 text-muted-foreground">
              Safe Haven is an <strong className="text-primary">independent third-party assessor.</strong>{" "}
              Our reports give you an objective, lab-backed picture of your home,
              along with clear recommendations — and complete freedom to choose your
              next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary"
              >
                Our services
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-accent" />
              <h3 className="font-semibold text-primary">The independent difference</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Focused exclusively on inspection and testing",
                "Reports written for you, in plain language",
                "Third-party accredited lab analysis",
                "Objective evaluation of any remediation proposals you receive",
                "Post-remediation verification testing available",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-foreground">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { k: "3", v: "Counties served" },
            { k: "5.0★", v: "Google Rating" },
            { k: "Local", v: "Owner-operated" },
            { k: "Lab", v: "Accredited results" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-xl border border-border bg-secondary p-5 text-center"
            >
              <div className="font-[Bricolage_Grotesque] text-2xl font-semibold text-primary sm:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we inspect */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            How we inspect
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">
            A clear, four-step process.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Search,
              step: "01",
              title: "Visual inspection",
              image: stepVisual.url,
              alt: "Licensed mold inspector kneeling to examine a baseboard with a flashlight during a residential mold inspection.",
              body: "A full walk-through of the property — attic, HVAC, cabinetry, baseboards, bathrooms, and known problem areas.",
            },
            {
              icon: Wind,
              step: "02",
              title: "Air & surface sampling",
              image: stepSampling.url,
              alt: "Certified inspector collecting an air sample with a spore trap cassette during indoor mold testing in a South Florida home.",
              body: "Indoor spore traps compared to an outdoor control, plus tape-lift or swab samples on suspect surfaces.",
            },
            {
              icon: FlaskConical,
              step: "03",
              title: "Accredited lab analysis",
              image: stepLab.url,
              alt: "AIHA-accredited lab technician analyzing a mold sample on a microscope slide in a professional laboratory.",
              body: "Samples are analyzed by an independent AIHA-accredited laboratory — never by us.",
            },
            {
              icon: FileText,
              step: "04",
              title: "Plain-language report",
              image: stepReport.url,
              alt: "Detailed mold inspection report with lab results, photos, and charts reviewed next to a laptop.",
              body: "You receive a clear report with findings, lab data, photos, and honest recommendations you can act on.",
            },
          ].map(({ icon: Icon, step, title, body, image, alt }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                <img
                  src={image}
                  alt={alt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 rounded-md bg-white/95 px-2 py-1 font-[Bricolage_Grotesque] text-xs font-semibold text-primary shadow-sm ring-1 ring-black/5">
                  {step}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-primary">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-secondary p-8 sm:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Our equipment
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">
              Professional-grade tools, top to bottom.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We invest in the same equipment used by industrial hygienists — because
              catching hidden moisture and mold requires more than a flashlight.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Thermometer, title: "Moisture meters", body: "Pin and pinless meters to detect elevated moisture in drywall, wood, and flooring." },
              { icon: Camera, title: "Infrared / thermal cameras", body: "Locate hidden leaks and cold-spot condensation without cutting into walls." },
              { icon: Microscope, title: "Borescopes", body: "Fiber-optic cameras to inspect inside wall cavities, HVAC ducts, and tight spaces." },
              { icon: Wrench, title: "Air sampling pumps", body: "Calibrated pumps with spore-trap cassettes for accurate indoor and outdoor comparisons." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health emotional section */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="order-2 md:order-1 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <HeartPulse className="h-6 w-6 text-accent" />
              <h3 className="font-semibold text-primary">Common symptoms</h3>
            </div>
            <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              {[
                "Chronic sinus congestion",
                "Coughing or wheezing",
                "Itchy or watery eyes",
                "Headaches or fatigue",
                "Asthma flare-ups",
                "Skin irritation",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Your family's health
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">
              Mold hides. Its effects don't.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Mold thrives inside walls, under floors, and in HVAC systems — especially
              after leaks, storms, or long-term humidity. Long before you see it, it
              can trigger respiratory issues, allergies, and worsen asthma for
              children, elderly family members, and anyone with a weakened immune
              system.
            </p>
            <p className="mt-4 text-muted-foreground">
              Catching mold early protects your family <em>and</em> your property. An
              independent inspection tells you exactly what's there — before it turns
              into a much bigger, much more expensive problem.
            </p>
          </div>
        </div>
      </section>

      {/* Storm / Water damage */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary to-card p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <CloudRain className="h-3.5 w-3.5" /> Storm & water damage
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
                After a Storm, Leak, or Flood?
              </h2>
              <p className="mt-5 text-muted-foreground">
                South Florida's hurricanes, heavy rain, roof leaks, and plumbing
                failures create exactly the damp, humid conditions mold needs to
                take hold. Mold can begin growing within{" "}
                <strong className="text-primary">24–48 hours</strong> of water
                intrusion — often behind walls or under flooring where you can't
                see it.
              </p>
              <p className="mt-4 text-muted-foreground">
                A fast, independent assessment tells you whether you have a
                problem before it spreads, damages more of your home, or
                complicates an insurance claim.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)] shadow-md shadow-accent/25 transition hover:-translate-y-0.5"
                >
                  Schedule an Inspection <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+15616326387"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary"
                >
                  <Phone className="h-4 w-4" /> Call (561) 632-6387
                </a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Droplets, title: "Hidden moisture", body: "Water travels through drywall, flooring, and framing long before it shows." },
                { icon: Clock, title: "24–48 hours", body: "Mold can begin colonizing surfaces within a day or two of water intrusion." },
                { icon: FileText, title: "Insurance-ready", body: "Independent, lab-backed documentation to support your claim." },
                { icon: ShieldCheck, title: "Peace of mind", body: "Know exactly what's there — and what isn't — before repairs begin." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl border border-border bg-card p-4">
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 text-sm font-semibold text-primary">{title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-20 max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Frequently asked
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">
            Straight answers to common questions.
          </h2>
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-card p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Do you also do mold removal?",
                a: "No — our specialty is assessment. We inspect, test, and report, so the findings you receive are fully objective. If remediation turns out to be needed, our report gives you everything required to hire the right company with confidence, and we can verify the work afterward.",
              },
              {
                q: "What's the difference between a mold assessment and mold remediation?",
                a: "An assessment identifies whether mold is present, where it is, what's causing it, and how severe it is, backed by lab testing. Remediation is the physical removal and cleanup. We handle the assessment side independently.",
              },
              {
                q: "Do I need to leave my home during the inspection?",
                a: "No. You're welcome to stay. Most homeowners like to walk through with us so we can point out what we're seeing in real time.",
              },
              {
                q: "How long does the inspection take?",
                a: "Most residential mold inspections take about 60–120 minutes on site, depending on the size of the home and how many areas of concern we need to evaluate.",
              },
              {
                q: "How soon will I get my results?",
                a: "Field observations and moisture data are captured the day of the visit. Lab-analyzed samples and the written report are typically delivered within 24 hours.",
              },
              {
                q: "What does a mold inspection cost?",
                a: "Every home is different — square footage, number of areas of concern, and how many samples the job actually needs all factor in. We give you a clear, upfront quote before any work begins, with no surprise fees. Call (561) 632-6387 or request a free quote for exact numbers.",
              },
              {
                q: "Which areas do you serve?",
                a: "We serve Martin, Palm Beach & Broward Counties across South Florida's Treasure Coast and Gold Coast region.",
              },
            ].map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-border px-3 sm:px-4">
                <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Worried about mold or air quality?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Get an honest, independent assessment from a licensed South Florida
                mold assessor. Same-week appointments available across Martin,
                Palm Beach & Broward Counties.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-md shadow-cta/30 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+15616326387"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
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
