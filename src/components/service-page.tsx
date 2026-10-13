import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { webpVariant } from "@/lib/images";
import { ctaOnDark, ctaPrimary, ctaSecondary } from "@/lib/cta";
import { HeroQuoteCard } from "@/components/quote-form";

/** Photo plus caption, styled to match the card language used across the site. */
function Figure({ fig, className = "" }: { fig: ServiceFigure; className?: string }) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      <picture>
        {/* Vectors have no .webp sibling. Emitting one anyway would hand the
            browser an SVG labelled image/webp, which it selects and then fails
            to decode: a broken image, with no fallback. */}
        {/\.svg$/i.test(fig.src) ? null : (
          <source srcSet={webpVariant(fig.src)} type="image/webp" />
        )}
        <img
          src={fig.src}
          alt={fig.alt}
          width={fig.width}
          height={fig.height}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] h-full w-full object-cover"
        />
      </picture>
      <figcaption className="border-t border-border p-4 text-xs text-muted-foreground">
        {fig.caption}
      </figcaption>
    </figure>
  );
}

export type ServiceSlug =
  | "asbestos-testing"
  | "air-quality-testing"
  | "surface-sampling"
  | "thermal-imaging"
  | "post-remediation-verification"
  | "real-estate-mold-inspection"
  | "commercial-mold-inspection"
  | "mold-assessment-report"
  | "mold-inspection"
  | "mold-testing"
  | "water-damage-inspection"
  | "humidity-testing";

export interface ServiceStep {
  n: string;
  h: string;
  b: string;
}

/**
 * A photograph plus its caption. `src` must be a .jpg that has a .webp sibling
 * in /public: a <source> pointing at a missing .webp renders a broken image and
 * does not fall back. Captions describe what is visible and what was measured.
 * They never assert that a photo shows mold, which is a lab determination.
 */
export interface ServiceFigure {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface ServiceSection {
  h2: string;
  intro?: string;
  paragraphs?: string[];
  subsections?: Array<{ h3: string; body: string }>;
  bullets?: string[];
  steps?: ServiceStep[];
  /** Figure row rendered after the section body. 2 up at 2, 4 up at 3+. */
  images?: ServiceFigure[];
  /**
   * Renders the section as a full-bleed tinted band instead of plain flow.
   * Used to break up the long pages, which otherwise run thousands of pixels
   * of identical cards on identical background.
   */
  tone?: "band";
}

export interface RelatedService {
  to:
    | "/services/asbestos-testing-greenacres/"
    | "/services/air-quality-testing-greenacres/"
    | "/services/surface-sampling-greenacres/"
    | "/services/thermal-imaging-greenacres/"
    | "/services/post-remediation-verification-greenacres/"
    | "/services/real-estate-mold-inspection-greenacres/"
    | "/services/commercial-mold-inspection-greenacres/"
    | "/services/mold-assessment-report-greenacres/"
    | "/services/mold-inspection/"
    | "/services/mold-testing-greenacres/"
    | "/services/water-damage-inspection-greenacres/"
    | "/services/humidity-testing-greenacres/"
    | "/services/independent-mold-inspection-greenacres/"
    | "/services/apartment-mold-inspection-greenacres/"
    | "/services/attic-mold-inspection-greenacres/"
    | "/services/popcorn-ceiling-asbestos-testing-greenacres/"
    | "/services/hvac-mold-inspection-greenacres/"
    | "/services/asbestos-inspection-greenacres/"
    | "/services/insurance-claim-mold-inspection-greenacres/";
  label: string;
  blurb: string;
}

export interface ServicePageProps {
  eyebrow: string;
  h1: string;
  intro: ReactNode; // answer-first, 2 sentences
  sections: ServiceSection[];
  faqs: Array<{ q: string; a: string }>;
  related: RelatedService[];
  /**
   * Optional link out to a blog article. Rendered as a plain <a> because blog
   * posts live under the dynamic /blog/$slug route, which a typed <Link> would
   * need params for. Trailing slash: GitHub Pages serves folder indexes.
   */
  furtherReading?: { href: string; label: string; blurb: string };
  /**
   * Photograph for the page header. Every service page shipped without any
   * imagery at all, so this is the one image guaranteed above the fold.
   */
  heroImage?: ServiceFigure;
  /** Replaces the hero photo with a component, such as the thermal comparison. */
  heroMedia?: ReactNode;
  /**
   * The independence block defaults to the mold wording. The asbestos page
   * overrides it: there the conflict of interest being disclaimed is
   * abatement, not remediation, and the licence line differs.
   */
  independence?: { h2: string; body: string };
  ctaTitle: string;
  ctaBody: string;
}

export function ServicePage({
  eyebrow,
  h1,
  intro,
  sections,
  faqs,
  related,
  furtherReading,
  heroImage,
  heroMedia,
  independence,
  ctaTitle,
  ctaBody,
}: ServicePageProps) {
  // Roughly 60% down: far enough that the reader has the substance,
  // early enough that they are not scrolling back up to act on it.
  const midCtaAfter = Math.max(0, Math.floor(sections.length * 0.6) - 1);

  return (
    <>
      <section className="bg-background">
        {/* Text, then the request form, then the photo. On phones they stack in
            that order, so the ask comes before the picture. From lg up the form
            takes the right column and the photo sits under the text. */}
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-x-10 lg:py-10">
          <div className="lg:col-start-1">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            {h1}
          </h1>
          <span aria-hidden className="spectrum-rule mt-5" />
          <div className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            {intro}
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-primary">
            {[
              "Licensed and insured",
              "Independent accredited lab",
              "Reports typically in 24 hours",
              "Testing only, nothing to sell you",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:gap-3">
            <a
              href="tel:+15616326387"
              className={`${ctaPrimary} px-3 py-3.5 text-base sm:px-6`}
            >
              <Phone className="h-4 w-4" />
              <span className="sm:hidden">Call now</span>
              <span className="hidden sm:inline">Call (561) 632-6387</span>
            </a>
            {/* Phones and tablets only: from lg up the form is already on
                screen beside this column. */}
            <a
              href="#request"
              className={`${ctaSecondary} px-3 py-3.5 sm:px-6 lg:hidden`}
            >
              Request inspection <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-muted-foreground">
            Part of our{" "}
            <Link
              to="/"
              className="font-semibold text-accent hover:underline"
            >
              mold inspection and testing in Greenacres
            </Link>
            .
          </p>
          </div>
          <HeroQuoteCard
            formName="service-hero"
            className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start"
          />
          {heroMedia ? (
            <div className="lg:col-start-1 lg:row-start-2 lg:self-start">{heroMedia}</div>
          ) : heroImage ? (
            <Figure fig={heroImage} className="shadow-sm lg:col-start-1 lg:row-start-2 lg:self-start" />
          ) : null}
        </div>
      </section>

      {sections.map((s, i) => (
        <Fragment key={i}>
        {/* White ground, wide spacing, and a short hairline between
            sections. No tinted bands and no boxes around body copy. */}
        <hr aria-hidden className="mx-auto my-14 w-full max-w-md border-border sm:my-20" />
        <section>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{s.h2}</h2>
          {s.intro ? (
            <p className="mt-3 max-w-3xl text-muted-foreground">{s.intro}</p>
          ) : null}
          {s.paragraphs?.length ? (
            <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
              {s.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ) : null}
          {s.subsections?.length ? (
            <div className="mt-8 grid gap-x-14 gap-y-8 md:grid-cols-2">
              {s.subsections.map((ss) => (
                <div key={ss.h3}>
                  <h3 className="font-semibold text-primary">{ss.h3}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ss.body}</p>
                </div>
              ))}
            </div>
          ) : null}
          {s.steps?.length ? (
            <ol className="mt-8 grid gap-x-14 gap-y-8 md:grid-cols-2">
              {s.steps.map((st) => (
                <li key={st.n} className="border-l-2 border-accent/40 pl-5">
                  <div className="text-sm font-semibold uppercase tracking-wider text-accent">
                    {st.n}
                  </div>
                  <h3 className="mt-1 font-semibold text-primary">{st.h}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{st.b}</p>
                </li>
              ))}
            </ol>
          ) : null}
          {s.bullets?.length ? (
            <ul className="mt-8 grid gap-x-14 gap-y-4 md:grid-cols-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {s.images?.length ? (
            <div
              className={`mt-8 grid gap-5 ${
                s.images.length >= 3
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : s.images.length === 2
                    ? "sm:grid-cols-2"
                    : "" /* a lone figure spans the content width: diagrams
                             with labelling are unreadable at half width */
              }`}
            >
              {s.images.map((fig) => (
                <Figure key={fig.src} fig={fig} />
              ))}
            </div>
          ) : null}
          </div>
        </section>
        {/* Mid-page CTA. These pages run 5,000px and the only other ask was at
            the very bottom, so anyone convinced halfway down had to scroll past
            everything to act. Deliberately lighter than the closing block so it
            reads as an offer, not a second conclusion. */}
        {i === midCtaAfter ? (
          <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-accent/25 bg-accent/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="font-semibold text-primary">
                  Seen enough? We can usually be out this week.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link to="/contact/" className={ctaPrimary}>
                  Request an inspection <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+15616326387" className={ctaSecondary}>
                  <Phone className="h-4 w-4" /> (561) 632-6387
                </a>
              </div>
            </div>
          </section>
        ) : null}
        </Fragment>
      ))}

      <hr aria-hidden className="mx-auto my-14 w-full max-w-md border-border sm:my-20" />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl border-l-2 border-accent pl-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-accent" />
            <div>
              <h2 className="text-xl font-semibold text-primary">
                {independence?.h2 ??
                  "Independent assessor, no remediation, no conflict of interest"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {independence?.body ??
                  "Safe Haven Inspections is a Florida-licensed mold assessment company (FL Mold Assessor MRSA3366 / FL Mold Remediator MRSR3536). We perform inspection and testing only. We do not sell, subcontract, or refer paid remediation, so every finding on your report reflects what's actually there."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr aria-hidden className="mx-auto my-14 w-full max-w-md border-border sm:my-20" />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 max-w-3xl divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group py-5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-primary">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <hr aria-hidden className="mx-auto my-14 w-full max-w-md border-border sm:my-20" />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Related services
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
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
                Learn more{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
        {furtherReading ? (
          <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Further reading
            </p>
            <a
              href={furtherReading.href}
              className="mt-2 inline-block font-semibold text-primary hover:text-accent"
            >
              {furtherReading.label}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{furtherReading.blurb}</p>
          </div>
        ) : null}
        <p className="mt-6 text-sm text-muted-foreground">
          See all{" "}
          <Link to="/services/" className="font-semibold text-accent hover:underline">
            mold assessment services
          </Link>{" "}
          or return to the{" "}
          <Link to="/services/mold-inspection/" className="font-semibold text-accent hover:underline">
            mold inspection overview
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto my-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{ctaTitle}</h2>
              <p className="mt-2 max-w-xl text-sm opacity-90 sm:text-base">
                {ctaBody}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact/"
                className={ctaPrimary}
              >
                Request an inspection <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+15616326387"
                className={ctaOnDark}
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