import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wind,
  FlaskConical,
  Thermometer,
  ShieldCheck,
  Home,
  Building2,
  FileText,
  HelpCircle,
  ArrowRight,
  Clock,
  Search,
  Droplets,
  Gauge,
  Microscope,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Mold Inspection, Testing & Air Quality | Safe Haven" },
      { name: "description", content: "Independent mold inspection, assessment, testing, air-quality sampling, and moisture evaluation across Martin, Palm Beach & Broward Counties. Fast lab turnaround." },
      { property: "og:title", content: "Our Services — Safe Haven Inspections" },
      { property: "og:url", content: "https://www.safehaveninspectionsllc.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://www.safehaveninspectionsllc.com/services" }],
  }),
  component: ServicesPage,
});

type ServiceLink =
  | "/services/mold-inspection"
  | "/services/mold-testing"
  | "/services/air-quality-testing"
  | "/services/surface-sampling"
  | "/services/thermal-imaging"
  | "/services/water-damage-inspection"
  | "/services/humidity-testing"
  | "/services/post-remediation-verification"
  | "/services/real-estate-mold-inspection"
  | "/services/commercial-mold-inspection"
  | "/services/mold-assessment-report";

const services: Array<{
  to: ServiceLink;
  icon: typeof Wind;
  title: string;
  body: string;
}> = [
  {
    to: "/services/mold-inspection",
    icon: Search,
    title: "Mold Inspection",
    body: "The flagship service. Licensed on-site visual, moisture, thermal, and lab-backed evaluation of the property. Start here if you're not sure what you need.",
  },
  {
    to: "/services/mold-testing",
    icon: Microscope,
    title: "Mold Testing",
    body: "The lab-analyzed sampling piece — air, surface, and bulk testing at an AIHA-accredited third-party laboratory. Defensible numbers and species IDs.",
  },
  {
    to: "/services/air-quality-testing",
    icon: Wind,
    title: "Airborne Mold & Air Quality Testing",
    body: "Spore-trap air sampling with outdoor controls, analyzed at an AIHA-accredited third-party lab. The core indoor air data behind most decisions.",
  },
  {
    to: "/services/surface-sampling",
    icon: FlaskConical,
    title: "Surface & Swab Sampling",
    body: "Tape-lift, swab, and bulk sampling of visible material for positive species identification. Complements air testing when there's something to point at.",
  },
  {
    to: "/services/thermal-imaging",
    icon: Thermometer,
    title: "Moisture Mapping & Thermal Imaging",
    body: "Non-destructive infrared and moisture-meter surveys that locate hidden water intrusion behind walls, ceilings, and floors before it becomes mold.",
  },
  {
    to: "/services/water-damage-inspection",
    icon: Droplets,
    title: "Water Damage & Moisture Intrusion Assessment",
    body: "Post-leak, post-storm, and post-flood inspection. Insurance-ready documentation of what got wet and how far the moisture traveled.",
  },
  {
    to: "/services/humidity-testing",
    icon: Gauge,
    title: "Humidity & Psychrometric Testing",
    body: "Temperature, RH, and dew-point measurement across the home to diagnose humidity-driven mildew when there's no obvious leak.",
  },
  {
    to: "/services/post-remediation-verification",
    icon: ShieldCheck,
    title: "Post-Remediation Verification",
    body: "Independent clearance testing after any remediation company finishes. Third-party pass/fail decisions before walls close and occupants return.",
  },
  {
    to: "/services/real-estate-mold-inspection",
    icon: Home,
    title: "Real Estate Mold Inspection",
    body: "Pre-purchase and pre-sale inspections scheduled to fit inside real inspection-period windows. Reports designed for buyers, sellers, and agents.",
  },
  {
    to: "/services/commercial-mold-inspection",
    icon: Building2,
    title: "Commercial & Property Management",
    body: "Offices, rentals, HOAs, condos, and retail. Multi-stakeholder documentation for owners, managers, tenants, and insurers.",
  },
  {
    to: "/services/mold-assessment-report",
    icon: FileText,
    title: "Mold Assessment & Written Protocol",
    body: "The formal Florida assessment report — and, when needed, the remediation protocol remediators bid and clearance is graded against.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Services</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            Independent mold and air-quality services, done thoroughly.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Lab-backed inspection and testing for homeowners, buyers, sellers, and
            property managers across South Florida — independent and unbiased.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-primary">
            <Clock className="h-4 w-4 text-accent" />
            Lab results typically returned within 24 hours
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            New here? Start with our{" "}
            <Link to="/services/mold-inspection" className="font-semibold text-accent hover:underline">
              mold inspection overview
            </Link>{" "}
            for the full process and FAQs.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ to, icon: Icon, title, body }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-primary">{title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Learn more{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}

          <Link
            to="/contact"
            className="group flex flex-col justify-between rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-6 transition hover:border-accent hover:bg-accent/10 lg:min-h-[24rem]"
          >
            <div>
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-primary">Not sure what you need?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us what you're seeing or smelling — we'll recommend the right level
                of inspection and testing for your situation.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Get in touch <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
