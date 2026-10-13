import { useState } from "react";
import { AlertCircle, CheckCircle2, Send, Star } from "lucide-react";
import { submitContactForm } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { ctaPrimary } from "@/lib/cta";
import { webpVariant } from "@/lib/images";

// 168px head crop, the same file the home page trust bar uses.
const LANDON_AVATAR = "/landon-avatar.jpg";

// The opening of a real Google review, word for word. The full text is the
// third entry in REVIEWS in google-reviews.tsx. Do not tidy the wording: a
// quote that has been edited is no longer the customer's.
const HERO_REVIEW =
  "Landon was great to work with. Very knowledgeable and easy to communicate with.";

const inputClass =
  "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
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
        autoComplete={autoComplete}
        required={required}
        className={inputClass}
      />
    </label>
  );
}

/**
 * The inspection request form. One implementation, two shapes.
 *
 * The full shape is the /contact/ page: address and preferred timing included.
 * The compact shape sits in the hero of the home page and every service page,
 * so a visitor can ask for an inspection on the screen they landed on instead
 * of clicking through to /contact/ first. It asks for four things only. The
 * property address comes out on the follow-up call, which happens anyway.
 *
 * `formName` goes to GA4 with the conversion event and into the notification
 * email, so a lead can be traced to the form that produced it.
 */
export function QuoteForm({
  formName,
  compact = false,
}: {
  formName: string;
  compact?: boolean;
}) {
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
          page: window.location.pathname,
        },
      });

      if (result.success) {
        // Counted only once Web3Forms has confirmed delivery, so the GA4 total
        // matches the number of enquiries that actually reached the inbox.
        // A honeypot hit returns above this and is deliberately never counted.
        trackEvent("quote_request", { form_name: formName });
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

  if (submitted) {
    return (
      <div className="mt-5 rounded-xl border border-accent/30 bg-accent/10 p-6 text-sm">
        <div className="flex items-center gap-2 font-semibold text-primary">
          <CheckCircle2 className="h-5 w-5 text-accent" /> Request received
        </div>
        <p className="mt-2 text-muted-foreground">
          Thanks. Your request is in, and we'll get back to you within one
          business day.
        </p>
        <p className="mt-3 text-muted-foreground">
          Need an answer sooner? Call{" "}
          <a className="font-semibold text-accent" href="tel:+15616326387">(561) 632-6387</a>.
          You'll reach our local team directly, never an answering service.
        </p>
      </div>
    );
  }

  return (
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
      <form onSubmit={onSubmit} className={`grid ${compact ? "mt-4 gap-3" : "mt-6 gap-4"}`}>
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
        <div className={`grid sm:grid-cols-2 ${compact ? "gap-3" : "gap-4"}`}>
          <Field label="Full name" name="name" autoComplete="name" required />
          <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        {compact ? (
          <Field label="Email" name="email" type="email" autoComplete="email" required />
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" name="email" type="email" autoComplete="email" required />
              <Field label="Property address" name="address" autoComplete="street-address" required />
            </div>
            <label className="block">
              <span className="text-sm font-medium text-primary">
                When works best?
              </span>
              <select
                name="timing"
                defaultValue="As soon as possible"
                className={inputClass}
              >
                <option>As soon as possible</option>
                <option>Weekday mornings</option>
                <option>Weekday afternoons</option>
                <option>I'm flexible</option>
                <option>Just have a question for now</option>
              </select>
            </label>
          </>
        )}
        <label className="block">
          <span className="text-sm font-medium text-primary">
            What are you seeing or smelling?
            <span className="ml-1 text-accent">*</span>
          </span>
          <textarea
            name="message"
            rows={compact ? 2 : 5}
            required
            placeholder={
              compact
                ? "e.g. Musty smell in the master bath, stain on the ceiling after the last storm…"
                : "e.g. Musty smell in the master bath, water stain on the ceiling after last storm, purchase inspection needed by Friday…"
            }
            className={inputClass}
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className={`${ctaPrimary} ${compact ? "w-full py-3.5 text-base" : ""}`}
        >
          <Send className="h-4 w-4" /> {loading ? "Sending…" : compact ? "Request my inspection" : "Send request"}
        </button>
        {compact ? null : (
          <>
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
          </>
        )}
      </form>
    </>
  );
}

/**
 * The compact form in its card, as used in a page hero. `id="request"` is the
 * target of the "Request an inspection" buttons on the same page, and the
 * scroll margin clears the sticky header.
 */
export function HeroQuoteCard({
  formName,
  className = "",
}: {
  formName: string;
  className?: string;
}) {
  return (
    <div
      id="request"
      className={`scroll-mt-32 rounded-2xl border border-border bg-card p-5 text-left shadow-xl shadow-primary/10 sm:p-6 ${className}`}
    >
      {/* The person who answers, before the fields. A form with a face on it
          reads as a message to someone, not a submission to a company. */}
      <div className="flex items-center gap-4">
        <picture className="shrink-0">
          <source srcSet={webpVariant(LANDON_AVATAR)} type="image/webp" />
          <img
            src={LANDON_AVATAR}
            alt="Landon Heinrichs, founder of Safe Haven Inspections"
            width={64}
            height={64}
            decoding="async"
            className="h-16 w-16 rounded-full object-cover ring-2 ring-accent/30"
          />
        </picture>
        <div>
          <h2 className="text-xl font-semibold text-primary">Request an inspection</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Landon Heinrichs</span>,
            founder and licensed Florida mold assessor. Talking to him is free,
            and you get the price before anything is booked.
          </p>
        </div>
      </div>
      <QuoteForm formName={formName} compact />
      <figure className="mt-4 border-t border-border pt-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5"
                style={{ color: "#FBBC04", fill: "#FBBC04" }}
                aria-hidden="true"
              />
            ))}
          </span>
          <figcaption className="text-sm font-semibold text-primary">
            5.0 on Google
          </figcaption>
        </div>
        <blockquote className="mt-2 text-base font-medium leading-snug text-primary">
          “{HERO_REVIEW}”
        </blockquote>
      </figure>
    </div>
  );
}
