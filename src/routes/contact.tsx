import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Safe Haven Inspections | Free Phone Consultation" },
      { name: "description", content: "Request a free phone consultation in Martin, Palm Beach & Broward Counties. Independent, licensed, and insured. Call (561) 632-6387 or email us." },
      { property: "og:title", content: "Contact Safe Haven Inspections" },
      { property: "og:url", content: "https://www.safehaveninspectionsllc.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://www.safehaveninspectionsllc.com/contact" }],
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
          email: "safehaveninspectionsllc@gmail.com",
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
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-561-632-6387",
            email: "safehaveninspectionsllc@gmail.com",
            contactType: "Customer Service",
            areaServed: ["Martin County, FL", "Palm Beach County, FL", "Broward County, FL"],
            availableLanguage: "English",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const address = String(data.get("address") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Mold inspection request — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProperty address: ${address}\n\n${message}`,
    );
    window.location.href = `mailto:safehaveninspectionsllc@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Contact</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            Get a free phone consultation.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Tell us about your property and what you're seeing. We'll follow up with a
            quote and available appointment times. Prefer to talk? Call us directly.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-primary">Request a free phone consultation</h2>
            {submitted ? (
              <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-6 text-sm">
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <CheckCircle2 className="h-5 w-5 text-accent" /> Almost done
                </div>
                <p className="mt-2 text-muted-foreground">
                  Your email app should now be open with your details filled in. If
                  nothing happened, just email us at{" "}
                  <a className="font-semibold text-accent" href="mailto:safehaveninspectionsllc@gmail.com">
                    safehaveninspectionsllc@gmail.com
                  </a>{" "}
                  or call <a className="font-semibold text-accent" href="tel:+15616326387">(561) 632-6387</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
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
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-all hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
                >
                  <Send className="h-4 w-4" /> Send request
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
                <span className="block text-xs uppercase tracking-wider text-white/80">Call now</span>
                <span className="block text-lg font-semibold sm:text-xl">(561) 632-6387</span>
                <span className="mt-1 block text-xs font-normal text-white/85">
                  You'll reach our local team directly — never an answering service.
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
