import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cities } from "@/data/cities";
import { submitContactForm } from "@/lib/contact";
import { absoluteUrl, localBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request an Inspection — Safe Haven Inspections, South Florida" },
      { name: "description", content: "Request a mold inspection in Martin, Palm Beach & Broward Counties. Independent, licensed, and insured. Call (561) 632-6387 — the phone consultation is free." },
      { property: "og:title", content: "Contact Safe Haven Inspections" },
      { property: "og:url", content: absoluteUrl("/contact/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact/") }],
    scripts: [
      {
        type: "application/ld+json",
        // See the note in routes/index.tsx: this used to hand-roll a second
        // LocalBusiness node that conflicted with the canonical one.
        children: JSON.stringify(localBusinessSchema()),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: a real person never sees this field, so anything that ticks it
    // is a bot. Show the normal confirmation and drop it silently.
    if (data.get("botcheck")) {
      setSubmitted(true);
      form.reset();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await submitContactForm({
        data: {
          name: String(data.get("name") ?? ""),
          phone: String(data.get("phone") ?? ""),
          email: String(data.get("email") ?? ""),
          address: String(data.get("address") ?? ""),
          timing: String(data.get("timing") ?? ""),
          message: String(data.get("message") ?? ""),
        },
      });

      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          result.error ||
            "We couldn't submit your request. Please call (561) 632-6387.",
        );
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setError(
        "Something went wrong on our end. Please call (561) 632-6387 and we'll help right away.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Contact</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            Request an inspection.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Tell us about your property and what you're seeing, and we'll get back to
            you within one business day. Rather just talk it through? Calling is
            faster, and the call costs nothing.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-primary">Request an inspection</h2>
            <p className="mt-3 rounded-lg border border-border bg-secondary/60 p-4 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">How this works:</span> talking
              to us is free — call and we'll tell you honestly whether you even need an
              inspection. The inspection itself is a paid service, and we'll go over the
              scope and the price with you before anything is booked. We don't send
              someone out to price a job on spec.
            </p>
            {submitted ? (
              <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-6 text-sm">
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <CheckCircle2 className="h-5 w-5 text-accent" /> Request received
                </div>
                <p className="mt-2 text-muted-foreground">
                  Thanks — your request is in, and we'll get back to you within one
                  business day.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Need an answer sooner? Call{" "}
                  <a className="font-semibold text-accent" href="tel:+15616326387">(561) 632-6387</a>{" "}
                  — you'll reach our local team directly, never an answering
                  service.
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div
                    role="alert"
                    className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm"
                  >
                    <div className="flex items-center gap-2 font-semibold text-red-900">
                      <AlertCircle className="h-5 w-5" /> We couldn't send that
                    </div>
                    <p className="mt-2 text-red-800">{error}</p>
                  </div>
                )}
                <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                {/* Honeypot: hidden from people, tempting to bots. Web3Forms
                    silently drops any submission where this is filled in. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Property address" name="address" required />
                </div>
                <label className="block">
                  <span className="text-sm font-medium text-primary">
                    When works best?
                  </span>
                  <select
                    name="timing"
                    defaultValue="As soon as possible"
                    className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  >
                    <option>As soon as possible</option>
                    <option>Weekday mornings</option>
                    <option>Weekday afternoons</option>
                    <option>I'm flexible</option>
                    <option>Just have a question for now</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-primary">
                    What are you seeing or smelling?
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="e.g. Musty smell in the master bath, water stain on the ceiling after last storm, purchase inspection needed by Friday…"
                    className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-all hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  <Send className="h-4 w-4" /> {loading ? "Sending…" : "Send request"}
                </button>
                <p className="text-sm text-muted-foreground">
                  Not sure if it's mold?{" "}
                  <a href="sms:+15616326387" className="font-semibold text-accent hover:underline">
                    Text a photo to (561) 632-6387
                  </a>{" "}
                  and we'll tell you if it's worth testing.
                </p>
                <p className="text-xs text-muted-foreground">
                  We respond within one business day. For same-day scheduling, please call.
                </p>
              </form>
              </>
            )}
          </div>

          <div className="space-y-3">
            <a
              href="tel:+15616326387"
              className="flex items-center gap-4 rounded-2xl bg-accent px-6 py-6 text-accent-foreground shadow-lg shadow-accent/25 transition hover:-translate-y-0.5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-white/80">
                  Free phone consultation
                </span>
                <span className="block text-lg font-semibold sm:text-xl">(561) 632-6387</span>
                <span className="mt-1 block text-xs font-normal text-white/85">
                  No charge to talk — we'll tell you if you even need an inspection.
                  You'll reach our local team directly, never an answering service.
                </span>
              </span>
            </a>

            <a
              href="mailto:safehaveninspectionsllc@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-6 text-primary transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email us</span>
                <span className="block truncate text-base font-semibold sm:text-lg">safehaveninspectionsllc@gmail.com</span>
              </span>
            </a>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-accent">
                <MapPin className="h-5 w-5" />
                <h2 className="font-semibold text-primary">Service area</h2>
              </div>
              <ul className="mt-3 text-sm font-medium text-primary">
                <li>Martin County</li>
                <li>Palm Beach County</li>
                <li>Broward County</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-accent">
                <ShieldCheck className="h-5 w-5" />
                <h2 className="font-semibold text-primary">Licensed & insured</h2>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>FL Mold Assessor · <span className="font-semibold text-primary">MRSA3366</span></li>
                <li>FL Mold Remediator · <span className="font-semibold text-primary">MRSR3536</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
          What happens after you get in touch
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Step one</p>
            <h3 className="mt-2 text-base font-semibold text-primary">A conversation first</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every request starts with a phone call. Landon asks what you are
              seeing, smelling, or reacting to, how long it has been going on,
              and whether there has been a leak, a storm, or recent
              construction. Some callers do not need an inspection at all, and
              he will tell you so on the phone.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Step two</p>
            <h3 className="mt-2 text-base font-semibold text-primary">The inspection itself</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A hands-on walkthrough paired with instrument work: moisture
              meters, thermal imaging where it earns its place, and air or
              surface sampling where a sample answers a real question.
              Sampling is targeted rather than routine, because a sample that
              settles nothing is a cost with no return.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Step three</p>
            <h3 className="mt-2 text-base font-semibold text-primary">The written report</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Samples go to an independent AIHA-accredited laboratory, and the
              written report follows within 24 hours of the results. Plain
              language, photographs, lab data, and a clear description of what
              to do next, written so it can be handed straight to a remediator,
              an insurer, or the other side of a transaction.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-accent/30 bg-secondary/50 p-6">
          <h3 className="text-base font-semibold text-primary">Independent by design</h3>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Safe Haven inspects and tests only, and never performs remediation.
            That separation is deliberate. A company that tells you how large
            your problem is should have nothing to gain from the answer, and a
            post-remediation clearance test means very little when the company
            running it also did the cleanup. If a property needs remediation,
            you get the documentation to hire a remediator on your own terms.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Where we work</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Inspections are scheduled across Martin, Palm Beach, and Broward
            Counties. If your city is not listed, call anyway, because the
            service area is drawn by drive time rather than by county line.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {cities.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/mold-inspection-${c.slug}/`}
                  className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-sm text-primary transition hover:border-accent hover:text-accent"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-primary">
        {label}{required && <span className="ml-1 text-accent">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </label>
  );
}
