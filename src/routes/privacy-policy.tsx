import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl, BUSINESS_EMAIL } from "@/lib/seo";

const CANONICAL = absoluteUrl("/privacy-policy/");
const TITLE = "Privacy Policy | Safe Haven Inspections";
const DESCRIPTION =
  "How Safe Haven Inspections LLC handles the information you share through this website, by phone or by text, and what our analytics does and does not collect.";

// Keep this page true to what the site actually does. If a new form, tracker,
// embed or vendor is added, update the matching section and EFFECTIVE_DATE.
const EFFECTIVE_DATE = "September 23, 2026";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: PrivacyPolicyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground">{children}</div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Effective {EFFECTIVE_DATE}</p>

      <p className="mt-6 text-[15px] leading-relaxed text-foreground">
        Safe Haven Inspections LLC is a small, owner-operated mold assessment company in South
        Florida. This page explains what information reaches us through this website, what we do
        with it, and who else touches it along the way. We keep it short because there is not much
        to tell: we collect what we need to schedule and run your inspection, and nothing else.
      </p>

      <Section title="What you send us">
        <p>
          When you fill out the request form on our{" "}
          <Link to="/contact" className="text-accent underline">contact page</Link>, we
          receive your name, email, phone number, property address, preferred timing and the
          message you write. When you call, text or email us, we receive your phone number or
          email address and whatever you choose to tell us or send, including photos.
        </p>
        <p>
          We use this only to answer you, quote and schedule the job, carry out the inspection and
          send you the report. We do not sell it, rent it or add you to a marketing list.
        </p>
      </Section>

      <Section title="How the form reaches us">
        <p>
          The form is delivered by Web3Forms, a form-to-email service. When you press submit, your
          browser sends the form straight to Web3Forms, which forwards it to our business inbox,
          a Google Gmail account. Both services handle the message under their own privacy
          policies. The website itself has no database and keeps no copy of what you send.
        </p>
      </Section>

      <Section title="Analytics">
        <p>
          We use Google Analytics 4 to see how people find and use the site: which pages get
          visited, roughly where visitors are, what device and browser they use, and which site
          sent them. It also counts when someone submits the form or taps a phone, text or email
          link. It does not receive what you type into the form.
        </p>
        <p>
          Google Analytics sets cookies in your browser to tell one visit from the next. You can
          block or delete them in your browser settings, or install Google's{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            Analytics opt-out add-on
          </a>
          . The site works the same either way.
        </p>
      </Section>

      <Section title="Other services the site loads">
        <p>
          The site is hosted on GitHub Pages, which, like any web host, logs basic request details
          such as your IP address to keep the service running and secure. Some pages show a Google
          Maps embed of our service location, which loads from Google and falls under Google's
          privacy policy. Links to our Google reviews open on Google's own site.
        </p>
      </Section>

      <Section title="Inspection records">
        <p>
          If we inspect your property, we keep the job details, sample results and your report so
          we can answer follow-up questions, support insurance claims and meet our obligations as
          a Florida licensed mold assessor. Lab samples are analyzed by an accredited third-party
          laboratory, which receives the sample and the property address it came from.
        </p>
      </Section>

      <Section title="Children">
        <p>
          This site is meant for property owners, buyers, tenants and real estate professionals.
          We do not knowingly collect information from anyone under 13.
        </p>
      </Section>

      <Section title="Your choices">
        <p>
          You can ask us what information we have about you, ask us to correct it, or ask us to
          delete it, except where we need to keep an inspection record. Email{" "}
          <a href={`mailto:${BUSINESS_EMAIL}`} className="break-all text-accent underline">
            {BUSINESS_EMAIL}
          </a>{" "}
          or call{" "}
          <a href="tel:+15616326387" className="text-accent underline">
            (561) 632-6387
          </a>
          .
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If how we handle information changes, we will update this page and the date at the top.
        </p>
      </Section>
    </article>
  );
}
