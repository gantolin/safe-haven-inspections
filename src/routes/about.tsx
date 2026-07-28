import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Beaker,
  Building2,
  FlaskConical,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import landonPhoto from "@/assets/landon-heinrichs.jpg.asset.json";
import { absoluteUrl, SITE_URL, BUSINESS_PHONE, BUSINESS_EMAIL, jsonLdScript } from "@/lib/seo";

const CANONICAL = absoluteUrl("/about");
const TITLE = "Meet Landon Heinrichs | Safe Haven Inspections";
const DESCRIPTION =
  "Meet Landon Heinrichs — founder of Safe Haven Inspections, FL State-Licensed Mold Assessor (MRSA3366) & Mold Remediator (MRSR3536). Assessment & testing only.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#landon`,
  name: "Landon Heinrichs",
  jobTitle: "Founder · Florida State-Licensed Mold Assessor & Mold Remediator",
  image: absoluteUrl(landonPhoto.url),
  url: CANONICAL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  worksFor: { "@id": `${SITE_URL}/#business` },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Florida Mold Assessor License MRSA3366",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Florida Department of Business & Professional Regulation",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Florida Mold Remediator License MRSR3536",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Florida Department of Business & Professional Regulation",
      },
    },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "IICRC WRT — Water Damage Restoration Technician" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "IICRC AMRT — Applied Microbial Remediation Technician" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "IICRC TCST — Trauma & Crime Scene Technician" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Certified Asbestos Inspector" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Certified Mold Hygienist (NAERMC)" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Certified Green Indoor Air Quality Specialist (NAERMC)" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Certified Green Mold Remediation Contractor (NAERMC)" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Certified Water Damage Mitigation Assessor (NAERMC)" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Certified Remediation Technologist (NAERMC)" },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Martin County, FL" },
    { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
    { "@type": "AdministrativeArea", name: "Broward County, FL" },
  ],
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Meet Landon Heinrichs — Founder, Safe Haven Inspections" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: absoluteUrl(landonPhoto.url) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl(landonPhoto.url) },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [jsonLdScript(personSchema)],
  }),
  component: AboutPage,
});

const credentials = [
  { icon: BadgeCheck, label: "State Licensed & Insured" },
  { icon: FlaskConical, label: "AIHA-Accredited Lab Analysis" },
  { icon: Scale, label: "Independent — Inspection & Testing Only" },
  { icon: Building2, label: "Residential & Commercial" },
  { icon: Award, label: "Owner-Operated in South Florida" },
  { icon: MapPin, label: "Martin · Palm Beach · Broward" },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-center">
            <img
              src={landonPhoto.url}
              alt="Landon Heinrichs, founder of Safe Haven Inspections and Florida State-Licensed Mold Assessor & Mold Remediator"
              className="mx-auto aspect-[4/5] w-full max-w-[320px] rounded-2xl border border-border object-cover shadow-sm"
            />
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                About the founder
              </p>
              <h1 className="mt-2 text-4xl font-semibold text-primary sm:text-5xl">
                Meet Landon Heinrichs
              </h1>
              <span aria-hidden className="spectrum-rule mt-5" />
              <p className="mt-5 text-lg font-medium text-primary">
                Founder · FL State-Licensed Mold Assessor &amp; Mold Remediator
              </p>
              <p className="mt-2 font-mono-data text-sm text-muted-foreground">
                FL DBPR · Assessor MRSA3366 · Remediator MRSR3536
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                  <Phone className="h-4 w-4" /> (561) 632-6387
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          A licensed assessor who works only for you
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Landon Heinrichs is the founder of Safe Haven Inspections LLC. He
            holds both Florida DBPR licenses that regulate this industry —
            <span className="font-mono-data text-primary"> MRSA3366</span> (Mold
            Assessor) and
            <span className="font-mono-data text-primary"> MRSR3536</span> (Mold
            Remediator) — and is trained and certified in the full remediation
            workflow. Safe Haven, by design, provides inspection, testing, and
            assessment only. Being fully credentialed on the remediation side
            means Landon knows exactly what proper cleanup looks like and can
            hold any remediator to that standard — without ever selling the
            cleanup himself.
          </p>
          <p>
            Before founding Safe Haven Inspections, Landon spent years in the
            remediation side of the industry — seeing firsthand what proper
            cleanup requires and where shortcuts show up. He no longer performs
            remediation; Safe Haven is inspection and testing only. That
            hands-on background is exactly why his assessments and clearance
            testing are so rigorous: he knows the standard a remediator should
            meet, and he can hold them to it while staying completely
            independent — with no cleanup to sell, there is no conflict of
            interest. With 14 years of hands-on
            experience in South Florida properties, Landon has walked the range
            of the region's problem stack — coastal salt-air HVAC wear, older
            inland housing stock, post-storm intrusion, condo stack leaks, and
            slab moisture in newer construction.
          </p>
          <p>
            Beyond the Florida DBPR licenses, Landon maintains IICRC
            certifications in Water Damage Restoration (WRT), Applied Microbial
            Remediation (AMRT), and Trauma &amp; Crime Scene (TCST); a
            Certified Asbestos Inspector credential; and a full stack of
            NAERMC certifications — Certified Mold Hygienist, Green Indoor
            Air Quality Specialist, Green Mold Remediation Contractor, Water
            Damage Mitigation Assessor, and Remediation Technologist. Every
            Safe Haven inspection is performed by a licensed team member,
            sampled per protocol, and analyzed at an independent
            AIHA-accredited laboratory — the same labs a remediator or
            insurance carrier would use, delivered without a middleman.
          </p>
          <p>
            Safe Haven serves Martin, Palm Beach, and Broward Counties. When
            you call (561) 632-6387, you reach the local team directly —
            never an answering service — and the person writing your report
            is the person who walked your property.
          </p>
        </div>
      </section>

      {/* WHY INDEPENDENCE MATTERS */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border-2 border-accent bg-card p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Scale className="mt-1 h-6 w-6 shrink-0 text-accent" />
            <div>
              <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                Why independence matters
              </h2>
              <div className="mt-3 max-w-3xl space-y-3 text-muted-foreground">
                <p>
                  In Florida, mold assessment and mold remediation are
                  separately regulated by DBPR — and for good reason. When the
                  same company both diagnoses the problem and sells the
                  cleanup, every finding quietly points toward more billable
                  work. Safe Haven is a mold assessment company only. We do
                  not perform, subcontract, or refer remediation.
                </p>
                <p>
                  That means the number of samples we pull, the areas we
                  flag, and the recommendations we make are driven by what
                  the property is actually telling us — not by a scope of
                  work our own crew hopes to book. You choose any qualified
                  remediator afterward, and we're available for independent
                  post-remediation verification so clearance isn't
                  self-graded by the company that did the removal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS / TRUST PANEL */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Credentials &amp; certifications
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Landon is licensed and certified on both sides of this industry —
          assessment <em>and</em> remediation. Safe Haven, by policy, performs
          inspection, testing, and assessment only. Full remediation training
          means he knows exactly what proper cleanup requires and can hold any
          contractor to that standard — with no cleanup revenue on the line,
          so there is no conflict of interest.
        </p>

        {/* Florida DBPR licenses */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-7">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-primary">
              Florida DBPR Licenses
            </h3>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { label: "State Certified Mold Assessor", number: "MRSA3366" },
              { label: "State Certified Mold Remediator", number: "MRSR3536" },
            ].map((l) => (
              <div
                key={l.number}
                className="rounded-xl border border-border bg-secondary p-4 text-center"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {l.label}
                </div>
                <div className="font-mono-data mt-1 text-lg font-semibold text-primary">
                  {l.number}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Issued by the Florida Department of Business &amp; Professional
            Regulation.
          </p>
        </div>

        {/* Industry certifications */}
        <div className="mt-4 rounded-2xl border border-border bg-card p-6 sm:p-7">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-primary">
              Industry certifications
            </h3>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              "IICRC Certified — WRT (Water Damage Restoration Technician)",
              "IICRC Certified — AMRT (Applied Microbial Remediation Technician)",
              "IICRC Certified — TCST (Trauma & Crime Scene Technician)",
              "Certified Asbestos Inspector",
              "Certified Mold Hygienist (NAERMC)",
              "Certified Green Indoor Air Quality Specialist (NAERMC)",
              "Certified Green Mold Remediation Contractor (NAERMC)",
              "Certified Water Damage Mitigation Assessor (NAERMC)",
              "Certified Remediation Technologist (NAERMC)",
            ].map((cert) => (
              <li
                key={cert}
                className="flex items-start gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2 text-sm text-primary"
              >
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>

          {/* Badge seal placeholders — drop in official logo images later. */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Official badge seals
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {[
                { alt: "IICRC WRT certification badge", label: "IICRC WRT" },
                { alt: "IICRC AMRT certification badge", label: "IICRC AMRT" },
                { alt: "IICRC TCST certification badge", label: "IICRC TCST" },
                { alt: "Certified Asbestos Inspector badge", label: "Asbestos Inspector" },
                { alt: "NAERMC Certified Mold Hygienist badge", label: "Mold Hygienist" },
                { alt: "NAERMC Certified Green Indoor Air Quality Specialist badge", label: "Green IAQ" },
                { alt: "NAERMC Certified Green Mold Remediation Contractor badge", label: "Green Remediation" },
                { alt: "NAERMC Certified Water Damage Mitigation Assessor badge", label: "Water Damage Mitigation" },
                { alt: "NAERMC Certified Remediation Technologist badge", label: "Remediation Technologist" },
                { alt: "Florida DBPR licensed mold professional badge", label: "FL DBPR" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-secondary/40 p-3"
                >
                  {/* BADGE: {b.label} — drop official seal image here */}
                  <img
                    src=""
                    alt={b.alt}
                    className="h-16 w-16 rounded-md bg-background/60 object-contain"
                  />
                  <span className="text-center text-[11px] font-medium text-muted-foreground">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Standards / how we work */}
        <div className="mt-4 rounded-2xl border border-border bg-card p-6 sm:p-7">
          <div className="flex items-center gap-2">
            <Beaker className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-primary">
              Standards we work to
            </h3>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {credentials.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-medium text-primary">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Our approach — what to expect
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Every Safe Haven inspection combines a hands-on walkthrough with
            instrument-based testing: moisture meters, humidity logging,
            thermal imaging, and — when needed — air or surface sampling sent
            to an independent AIHA-accredited lab. The written report ties
            photos, readings, and lab results into a plain-language document
            you (or your realtor, insurer, or attorney) can actually use.
          </p>
          <p>
            Explore the details on the{" "}
            <Link to="/services/mold-inspection" className="font-semibold text-accent hover:underline">
              mold inspection overview
            </Link>{" "}
            page, or jump straight to a specific{" "}
            <Link to="/services" className="font-semibold text-accent hover:underline">
              service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto my-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6" />
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Schedule with Landon directly
                </h2>
              </div>
              <p className="mt-2 max-w-xl text-sm opacity-90 sm:text-base">
                Talk to our local, state-licensed team — never an answering
                service. Serving Martin, Palm Beach &amp; Broward Counties.
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