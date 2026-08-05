import { webpVariant } from "@/lib/images";

/*
 * Landon's certification badges, lifted from the credentials page of his
 * inspection report.
 *
 * The source artwork is inconsistent by nature — three circular seals, two
 * rectangles (one outlined, one solid green), and a wide IICRC wordmark, in a
 * mix of JPEG-on-white, PNG-on-white and PNG-with-alpha. Each was flattened
 * onto white, trimmed to its real content box, and centred on a 512px square
 * canvas, so a plain grid lines up optically without per-badge fudging.
 *
 * Because every badge canvas is white, tiles are deliberately chrome-free:
 * they are meant to sit on a white (bg-card) surface and blend. On the
 * off-white page background they need a card wrapper around them — see the
 * home page usage.
 */
export const certifications = [
  {
    src: "/cert-mold-hygienist.png",
    label: "Certified Mold Hygienist",
    sub: "NAERMC",
  },
  {
    src: "/cert-mold-remediation-contractor.png",
    label: "Certified Green Mold Remediation Contractor",
    sub: "NAERMC",
  },
  {
    src: "/cert-indoor-air-quality.png",
    label: "Certified Green Indoor Air Quality Specialist",
    sub: "NAERMC",
  },
  {
    src: "/cert-water-damage-assessor.png",
    label: "Certified Water Damage Mitigation Assessor",
    sub: "NAERMC",
  },
  {
    src: "/cert-remediation-technologist.png",
    label: "Certified Remediation Technologist",
    sub: "NAERMC",
  },
  {
    src: "/cert-iicrc.png",
    label: "IICRC Certified",
    sub: "WRT · AMRT · TCST",
  },
] as const;

export function CertBadgeGrid({
  className = "grid-cols-2 sm:grid-cols-3",
  size = "md",
}: {
  /** Grid-column utilities for the calling layout. */
  className?: string;
  size?: "md" | "sm";
}) {
  const box =
    size === "sm"
      ? "h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
      : "h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32";
  return (
    <ul className={`grid gap-x-4 gap-y-8 ${className}`}>
      {certifications.map((c) => (
        // Caption is width-capped rather than filling the cell: the labels vary
        // from "IICRC Certified" to "Certified Green Mold Remediation
        // Contractor", and left to run full width the short ones look stranded.
        <li
          key={c.label}
          className="mx-auto flex max-w-[15rem] flex-col items-center text-center"
        >
          <picture>
            <source srcSet={webpVariant(c.src)} type="image/webp" />
            <img
              src={c.src}
              alt={`${c.label}${c.sub === "NAERMC" ? " — NAERMC" : ""} certification badge`}
              width={512}
              height={512}
              loading="lazy"
              decoding="async"
              className={`${box} object-contain`}
            />
          </picture>
          <p className="mt-2 text-xs font-medium leading-snug text-primary">
            {c.label}
          </p>
          <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
            {c.sub}
          </p>
        </li>
      ))}
    </ul>
  );
}
