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
  | "/services/asbestos-testing-greenacres/"
  | "/services/mold-inspection/"
  | "/services/mold-testing-greenacres/"
  | "/services/air-quality-testing-greenacres/"
  | "/services/surface-sampling-greenacres/"
  | "/services/thermal-imaging-greenacres/"
  | "/services/water-damage-inspection-greenacres/"
  | "/services/humidity-testing-greenacres/"
  | "/services/insurance-claim-mold-inspection-greenacres/"
  | "/services/post-remediation-verification-greenacres/"
  | "/services/real-estate-mold-inspection-greenacres/"
  | "/services/commercial-mold-inspection-greenacres/"
  | "/services/independent-mold-inspection-greenacres/"
  | "/services/apartment-mold-inspection-greenacres/"
  | "/services/attic-mold-inspection-greenacres/"
  | "/services/popcorn-ceiling-asbestos-testing-greenacres/"
  | "/services/hvac-mold-inspection-greenacres/"
  | "/services/asbestos-inspection-greenacres/"
  | "/services/mold-assessment-report-greenacres/";

const services: Array<{
  to: ServiceLink;
  icon: typeof Wind;
  title: string;
  body: string;
  /**
   * Card thumbnail. Optional: a card without one falls back to the icon.
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
    to: "/services/mold-testing-greenacres/",
    image: { src: "/svc-mold-testing.jpg", alt: "Gloved hand placing a petri dish under a lab microscope for mold analysis" },
    icon: Microscope,
    title: "Mold Testing",
    body: "The lab-analyzed sampling piece: air, surface, and bulk testing at an AIHA-accredited third-party laboratory. Defensible numbers and species IDs.",
  },
  {
    to: "/services/air-quality-testing-greenacres/",
    image: { src: "/svc-air-quality.jpg", alt: "Spore trap cassette mounted outdoors to collect a control sample" },
    icon: Wind,
    title: "Airborne Mold & Air Quality Testing",
    body: "Spore-trap air sampling with outdoor controls, analyzed at an AIHA-accredited third-party lab. The core indoor air data behind most decisions.",
  },
  {
    to: "/services/surface-sampling-greenacres/",
    image: { src: "/svc-surface-sampling.jpg", alt: "Black mold growth streaking down a white wall" },
    icon: FlaskConical,
    title: "Surface Sampling & Swab Testing",
    body: "Tape-lift, swab, and bulk sampling of visible material for positive species identification. Complements air testing when there's something to point at.",
  },
  {
    to: "/services/thermal-imaging-greenacres/",
    image: { src: "/svc-thermal-imaging.jpg", alt: "Infrared thermal image of a wall and floor junction" },
    icon: Thermometer,
    title: "Moisture Mapping & Thermal Imaging",
    body: "Non-destructive infrared and moisture-meter surveys that locate hidden water intrusion behind walls, ceilings, and floors before it becomes mold.",
  },
  {
    to: "/services/water-damage-inspection-greenacres/",
    image: { src: "/svc-water-damage.jpg", alt: "Ceiling plaster collapsed after a roof or plumbing leak" },
    icon: Droplets,
    title: "Water Damage & Moisture Intrusion Assessment",
    body: "Post-leak, post-storm, and post-flood inspection. Insurance-ready documentation of what got wet and how far the moisture traveled.",
  },
  {
    to: "/services/humidity-testing-greenacres/",
    image: { src: "/svc-humidity.jpg", alt: "Digital hygrometer displaying relative humidity and temperature" },
    icon: Gauge,
    title: "Humidity Testing & Psychrometrics",
    body: "Temperature, RH, and dew-point measurement across the home to diagnose humidity-driven mildew when there's no obvious leak.",
  },
  {
    to: "/services/insurance-claim-mold-inspection-greenacres/",
    image: { src: "/svc-insurance.jpg", alt: "Infrared thermometer recording surface temperature on a damaged wall" },
    icon: ShieldCheck,
    title: "Insurance Claim Documentation",
    body: "Independent assessment built for adjusters: causation, moisture mapping, and lab results, from an assessor who never does the cleanup.",
  },
  {
    to: "/services/post-remediation-verification-greenacres/",
    image: { src: "/svc-post-remediation.jpg", alt: "Containment sheeting still in place during clearance testing" },
    icon: ShieldCheck,
    title: "Post-Remediation Verification",
    body: "Independent clearance testing after any remediation company finishes. Third-party pass/fail decisions before walls close and occupants return.",
  },
  {
    to: "/services/real-estate-mold-inspection-greenacres/",
    image: { src: "/svc-real-estate.jpg", alt: "South Florida neighborhood of tile roof homes with palm trees" },
    icon: Home,
    title: "Real Estate Mold Inspection",
    body: "Pre-purchase and pre-sale inspections scheduled to fit inside real inspection-period windows. Reports designed for buyers, sellers, and agents.",
  },
  {
    to: "/services/commercial-mold-inspection-greenacres/",
    image: { src: "/svc-commercial.jpg", alt: "Open plan office floor with rows of desks" },
    icon: Building2,
    title: "Commercial & Property Management",
    body: "Offices, rentals, HOAs, condos, and retail. Multi-stakeholder documentation for owners, managers, tenants, and insurers.",
  },
  {
    to: "/services/asbestos-testing-greenacres/",
    image: { src: "/svc-asbestos-testing.jpg", alt: "Weathered corrugated asbestos cement roof sheets" },
    icon: Layers,
    title: "Asbestos Testing",
    body: "Sampling and accredited lab analysis for popcorn ceilings, floor tile, pipe wrap, and joint compound in pre-1980 buildings. Testing only, never abatement.",
  },
  {
    to: "/services/mold-assessment-report-greenacres/",
    image: { src: "/svc-assessment-report.jpg", alt: "Hand writing findings on a clipboard" },
    icon: FileText,
    title: "Mold Assessment & Written Protocol",
    body: "The formal Florida assessment report, and, when needed, the remediation protocol remediators bid and clearance is graded against.",
  },
  {
    to: "/services/independent-mold-inspection-greenacres/",
    image: { src: "/svc-independent.jpg", alt: "Inspector with a headlamp and respirator checking a dark space" },
    icon: FileText,
    title: "Independent Mold Inspection",
    body: "Inspection and testing from an assessor who does no remediation, so the findings stand on their own.",
  },
  {
    to: "/services/apartment-mold-inspection-greenacres/",
    image: { src: "/svc-apartment.jpg", alt: "South Florida condo building with palm trees" },
    icon: Building2,
    title: "Apartment & Condo Mold Inspection",
    body: "For renters, condo owners, and landlords: an independent report on what is in the unit and where the moisture comes from.",
  },
  {
    to: "/services/attic-mold-inspection-greenacres/",
    image: { src: "/svc-attic.jpg", alt: "Attic roof deck and wood framing" },
    icon: FileText,
    title: "Attic Mold Inspection",
    body: "Roof deck, framing, insulation, and ductwork checked for moisture and growth after a roof leak or an AC problem.",
  },
  {
    to: "/services/popcorn-ceiling-asbestos-testing-greenacres/",
    image: { src: "/svc-popcorn-ceiling.jpg", alt: "Close-up of a bumpy textured ceiling finish" },
    icon: Layers,
    title: "Popcorn Ceiling Asbestos Testing",
    body: "A certified asbestos inspector samples the ceiling before you scrape, sand, or drill it. Lab results in 24 hours.",
  },
  {
    to: "/services/hvac-mold-inspection-greenacres/",
    image: { src: "/svc-hvac.jpg", alt: "Round air supply vent in a white ceiling" },
    icon: Wind,
    title: "HVAC Mold Inspection",
    body: "Air handler, drain line, vents, humidity, and indoor air checked to see whether the AC system is the source.",
  },
  {
    to: "/services/asbestos-inspection-greenacres/",
    image: { src: "/svc-asbestos-inspection.jpg", alt: "Walls opened during a renovation, exposing old building materials" },
    icon: Layers,
    title: "Asbestos Inspection & Surveys",
    body: "A certified asbestos inspector samples every material a renovation or demolition will disturb. Inspection only, never abatement.",
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
