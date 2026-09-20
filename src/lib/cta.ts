/**
 * Shared call-to-action button classes.
 *
 * These were hand-copied inline at 20-odd call sites and had drifted into 12
 * distinct variants of what are really three buttons. One copy had ended up
 * with `transition-colors` and `transition` on the same element, and two
 * competing shadows.
 *
 * More importantly, none of them carried a focus-visible state, so a keyboard
 * user got no visible focus ring on the primary conversion action anywhere on
 * the site. That is a WCAG 2.4.7 failure, and it is fixed here once rather
 * than twenty times.
 *
 * Kept as class strings rather than a component so the call sites stay plain
 * <Link> and <a> elements, which is what the routing and `tel:` links need.
 */

/** Shared across every variant: geometry, motion and the focus ring. */
const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold " +
  "transition-[background-color,border-color,box-shadow,transform] duration-150 " +
  "active:translate-y-px " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0";

/** Orange. The primary conversion action: request an inspection. */
export const ctaPrimary =
  `${base} bg-cta px-6 py-3 text-cta-foreground shadow-sm shadow-cta/25 ` +
  "hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)] " +
  "hover:shadow-md hover:shadow-cta/30 " +
  "focus-visible:ring-cta focus-visible:ring-offset-background";

/** Bordered, on light backgrounds. Usually the phone number beside the primary. */
export const ctaSecondary =
  `${base} border border-border bg-card px-6 py-3 text-primary ` +
  "hover:border-accent/40 hover:bg-secondary " +
  "focus-visible:ring-accent focus-visible:ring-offset-background";

/** Bordered, on the teal or photographic dark backgrounds. */
export const ctaOnDark =
  `${base} border border-white/30 bg-white/5 px-6 py-3 text-primary-foreground ` +
  "hover:border-white/50 hover:bg-white/15 " +
  "focus-visible:ring-white focus-visible:ring-offset-primary";

/** Full-bleed variants for the sticky mobile bar, which sets its own height. */
export const ctaBarPrimary =
  `${base} min-h-12 bg-cta px-4 text-cta-foreground shadow-sm shadow-cta/25 ` +
  "hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)] " +
  "focus-visible:ring-cta focus-visible:ring-offset-background";

export const ctaBarSecondary =
  `${base} min-h-12 bg-primary px-4 text-primary-foreground ` +
  "hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)] " +
  "focus-visible:ring-primary focus-visible:ring-offset-background";
