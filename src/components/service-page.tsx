import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

export type ServiceSlug =
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

export interface ServiceSection {
  h2: string;
  intro?: string;
  paragraphs?: string[];
  subsections?: Array<{ h3: string; body: string }>;
  bullets?: string[];
  steps?: ServiceStep[];
}

export interface RelatedService {
  to:
    | "/services/air-quality-testing"
    | "/services/surface-sampling"
    | "/services/thermal-imaging"
    | "/services/post-remediation-verification"
    | "/services/real-estate-mold-inspection"
    | "/services/commercial-mold-inspection"
    | "/services/mold-assessment-report"
    | "/services/mold-inspection"
    | "/services/mold-testing"
    | "/services/water-damage-inspection"
    | "/services/humidity-testing";
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
  ctaTitle,
  ctaBody,
}: ServicePageProps) {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+15616326387"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" /> (561) 632-6387
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-muted-foreground">
            Part of our{" "}
            <Link
              to="/services/mold-inspection"
              className="font-semibold text-accent hover:underline"
            >
              Palm Beach County mold inspection
            </Link>{" "}
            services — independent, licensed, and lab-backed.
          </p>
        </div>
      </section>

      {sections.map((s, i) => (
        <section key={i} className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
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
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {s.subsections.map((ss) => (
                <div
                  key={ss.h3}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-primary">{ss.h3}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ss.body}</p>
                </div>
              ))}
            </div>
          ) : null}
          {s.steps?.length ? (
            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {s.steps.map((st) => (
                <li
                  key={st.n}
                  className="rounded-2xl border border-border bg-card p-6"
                >
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
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

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
                inspection and testing only. We do not sell, subcontract, or
                refer paid remediation, so every finding on your report reflects
                what's actually there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card p-5 open:shadow-sm"
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

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
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
        <p className="mt-6 text-sm text-muted-foreground">
          See all{" "}
          <Link to="/services" className="font-semibold text-accent hover:underline">
            mold assessment services
          </Link>{" "}
          or return to the{" "}
          <Link to="/services/mold-inspection" className="font-semibold text-accent hover:underline">
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