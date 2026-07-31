import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Handshake, FileCheck2, Building2, ArrowRight, CheckCircle2, Phone } from "lucide-react";

export const Route = createFileRoute("/realtors")({
  head: () => ({
    meta: [
      { title: "Realtor & Property Manager Mold Inspection | Safe Haven" },
      { name: "description", content: "Fast, independent pre-closing mold inspection for South Florida real-estate professionals. Clear reports buyers can negotiate with. Partner with Safe Haven." },
      { property: "og:title", content: "For Realtors & Property Managers — Safe Haven Inspections" },
      { property: "og:url", content: "https://www.safehaveninspectionsllc.com/realtors" },
    ],
    links: [{ rel: "canonical", href: "https://www.safehaveninspectionsllc.com/realtors" }],
  }),
  component: RealtorsPage,
});

function RealtorsPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">For real estate</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            Independent mold inspection your clients can trust.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Deadlines matter. Safe Haven partners with South Florida realtors and
            property managers to deliver fast, honest, third-party mold assessments
            that keep transactions moving and clients protected.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]">
              Partner with Safe Haven <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+15616326387" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" /> (561) 632-6387
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, title: "Fast turnaround", body: "Pre-closing inspections scheduled quickly, with reports back in time for inspection-period deadlines." },
            { icon: FileCheck2, title: "Clear, negotiable reports", body: "Plain-language findings and lab data buyers can use to negotiate repairs, credits, or price adjustments." },
            { icon: Handshake, title: "Truly independent", body: "Our focus is assessment only, so your clients receive an objective report they can rely on — protecting your reputation." },
            { icon: Building2, title: "Portfolio-friendly", body: "Recurring inspections for rentals, HOAs, and property-management portfolios across the tri-county area." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-primary">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-primary">For buyer's agents</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Pre-purchase mold inspection scheduled around your inspection window",
                "Objective, third-party report you can share with the listing side",
                "Findings that translate directly into repair or credit requests",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-primary">For listing agents & PMs</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Proactive pre-listing assessment to catch issues before they blow up a deal",
                "Turnover inspections between tenants to document indoor air quality",
                "Post-remediation verification (clearance) after any water event",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Let's build a partnership.</h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Add Safe Haven to your preferred-vendor list and give your clients the
                independent perspective they deserve.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]">
              Contact Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
