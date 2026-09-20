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
  Layers,
} from "lucide-react";
import { absoluteUrl, breadcrumbSchema, jsonLdScript } from "@/lib/seo";
import { webpVariant } from "@/lib/images";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services: Mold, Air Quality & Asbestos Testing | Safe Haven" },
      { name: "description", content: "Independent mold inspection, testing, air-quality sampling, and moisture evaluation across Martin, Palm Beach & Broward Counties. Fast lab turnaround." },
      { property: "og:title", content: "Our Services: Safe Haven Inspections" },
      { property: "og:url", content: absoluteUrl("/services/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services/") }],
    scripts: [
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ]),
      ),
    ],
  }),
  component: ServicesPage,
});

type ServiceLink =
  | "/services/asbestos-testing/"
  | "/services/mold-inspection/"
  | "/services/mold-testing/"
  | "/services/air-quality-testing/"
  | "/services/surface-sampling/"
  | "/services/thermal-imaging/"
  | "/services/water-damage-inspection/"
  | "/services/humidity-testing/"
  | "/services/insurance-claim-mold-inspection/"
  | "/services/post-remediation-verification/"
  | "/services/real-estate-mold-inspection/"
  | "/services/commercial-mold-inspection/"
  | "/services/mold-assessment-report/";

const services: Array<{
  to: ServiceLink;
  icon: typeof Wind;
  title: string;
  body: string;
  /**
   * Card thumbnail. Optional: asbestos testing and the assessment report have
   * no honest photograph yet, and those cards fall back to the icon alone.
   * Every .jpg here has a .webp sibling in /public.
   */
  image?: { src: string; alt: string };
}> = [
  {
    to: "/services/mold-inspection/",
    image: { src: "/svc-mold-inspection.jpg", alt: "Moisture meter held against a baseboard during a mold inspection" },
    icon: Search,
    title: "Mold Inspection",
    body: "The flagship service. Licensed on-site visual, moisture, thermal, and lab-backed evaluation of the property. Start here if you're not sure what you need.",
  },
  {
    to: "/services/mold-testing/",
    image: { src: "/svc-mold-testing.jpg", alt: "Air sampling stand and stopwatch running in a sealed off hallway" },
    icon: Microscope,
    title: "Mold Testing",
    body: "The lab-analyzed sampling piece: air, surface, and bulk testing at an AIHA-accredited third-party laboratory. Defensible numbers and species IDs.",
  },
  {
    to: "/services/air-quality-testing/",
    image: { src: "/svc-air-quality.jpg", alt: "Spore trap cassette mounted outdoors to collect a control sample" },
    icon: Wind,
    title: "Airborne Mold & Air Quality Testing",
    body: "Spore-trap air sampling with outdoor controls, analyzed at an AIHA-accredited third-party lab. The core indoor air data behind most decisions.",
  },
  {
    to: "/services/surface-sampling/",
    image: { src: "/svc-surface-sampling.jpg", alt: "Surface sample bag sealed and labelled at a baseboard" },
    icon: FlaskConical,
    title: "Surface Sampling & Swab Testing",
    body: "Tape-lift, swab, and bulk sampling of visible material for positive species identification. Complements air testing when there's something to point at.",
  },
  {
    to: "/services/thermal-imaging/",
    image: { src: "/svc-thermal-imaging.jpg", alt: "Infrared thermal image of a wall and floor junction" },
    icon: Thermometer,
    title: "Moisture Mapping & Thermal Imaging",
    body: "Non-destructive infrared and moisture-meter surveys that locate hidden water intrusion behind walls, ceilings, and floors before it becomes mold.",
  },
  {
    to: "/services/water-damage-inspection/",
    image: { src: "/svc-water-damage.jpg", alt: "Drywall paper delaminated along a ceiling line after a water event" },
    icon: Droplets,
    title: "Water Damage & Moisture Intrusion Assessment",
    body: "Post-leak, post-storm, and post-flood inspection. Insurance-ready documentation of what got wet and how far the moisture traveled.",
  },
  {
    to: "/services/humidity-testing/",
    image: { src: "/svc-humidity.jpg", alt: "Digital hygrometer displaying relative humidity and temperature" },
    icon: Gauge,
    title: "Humidity Testing & Psychrometrics",
    body: "Temperature, RH, and dew-point measurement across the home to diagnose humidity-driven mildew when there's no obvious leak.",
  },
  {
    to: "/services/insurance-claim-mold-inspection/",
    image: { src: "/svc-insurance.jpg", alt: "Infrared thermometer recording surface temperature on a damaged wall" },
    icon: ShieldCheck,
    title: "Insurance Claim Documentation",
    body: "Independent assessment built for adjusters: causation, moisture mapping, and lab results, from an assessor who never does the cleanup.",
  },
  {
    to: "/services/post-remediation-verification/",
    image: { src: "/svc-post-remediation.jpg", alt: "Containment sheeting still in place during clearance testing" },
    icon: ShieldCheck,
    title: "Post-Remediation Verification",
    body: "Independent clearance testing after any remediation company finishes. Third-party pass/fail decisions before walls close and occupants return.",
  },
  {
    to: "/services/real-estate-mold-inspection/",
    image: { src: "/svc-real-estate.jpg", alt: "Air sampling set up in a vacant room during a pre purchase inspection" },
    icon: Home,
    title: "Real Estate Mold Inspection",
    body: "Pre-purchase and pre-sale inspections scheduled to fit inside real inspection-period windows. Reports designed for buyers, sellers, and agents.",
  },
  {
    to: "/services/commercial-mold-inspection/",
    image: { src: "/svc-commercial.jpg", alt: "Opened ceiling exposing ductwork and insulation in a commercial unit" },
    icon: Building2,
    title: "Commercial & Property Management",
    body: "Offices, rentals, HOAs, condos, and retail. Multi-stakeholder documentation for owners, managers, tenants, and insurers.",
  },
  {
    to: "/services/asbestos-testing/",
    icon: Layers,
    title: "Asbestos Testing",
    body: "Sampling and accredited lab analysis for popcorn ceilings, floor tile, pipe wrap, and joint compound in pre-1980 buildings. Testing only, never abatement.",
  },
  {
    to: "/services/mold-assessment-report/",
    icon: FileText,
    title: "Mold Assessment & Written Protocol",
    body: "The formal Florida assessment report, and, when needed, the remediation protocol remediators bid and clearance is graded against.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Services</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            Our inspection and testing services
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Lab-backed inspection and testing for homeowners, buyers, sellers, and
            property managers across South Florida: independent and unbiased.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-primary">
            <Clock className="h-4 w-4 text-accent" />
            Lab results typically returned within 24 hours
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            New here? Start with our{" "}
            <Link to="/services/mold-inspection/" className="font-semibold text-accent hover:underline">
              mold inspection overview
            </Link>{" "}
            for the full process and FAQs.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ to, icon: Icon, title, body, image }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-primary/5"
            >
              {image ? (
                <picture>
                  <source srcSet={webpVariant(image.src)} type="image/webp" />
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </picture>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                {image ? null : (
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <h2
                  className={`${image ? "" : "mt-5 "}text-lg font-semibold text-primary`}
                >
                  {title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}

          <Link
            to="/contact/"
            className="group flex flex-col justify-between rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-6 transition hover:border-accent hover:bg-accent/10 lg:min-h-[24rem]"
          >
            <div>
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-primary">Not sure what you need?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us what you're seeing or smelling, we'll recommend the right level
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
