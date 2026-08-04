import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import logo from "@/assets/safe-haven-logo.png.asset.json";
import { webpVariant } from "@/lib/images";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Areas" },
  { to: "/realtors", label: "Realtors" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-border shadow-[0_6px_20px_-12px_rgba(11,37,69,0.25)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-2 px-3 min-[360px]:px-4 sm:h-28 sm:px-6">
        <Link
          to="/"
          aria-label="Safe Haven Inspections LLC — Home"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex items-center">
            {/* Header logo is above the fold — left eager on purpose.
                Height is set explicitly on the <img>: a percentage height
                (h-full) does not resolve inside the <picture> wrapper, which
                let the image render at its intrinsic width and get cropped. */}
            <picture>
              <source srcSet={webpVariant(logo.url)} type="image/webp" />
              <img
                src={logo.url}
                alt="Safe Haven Inspections LLC logo"
                className="h-[clamp(3.375rem,15vw,4.5rem)] w-auto max-w-none mix-blend-multiply sm:h-20"
                width={988}
                height={489}
                decoding="async"
              />
            </picture>
          </span>
          {/* Logo and wordmark scale with the viewport rather than stepping at
            breakpoints — the header is a single line that has to clear the
            hamburger, and fixed sizes either overflow at 360px or leave the
            mark undersized at 430px. Tracking is tightened on phones for the
            same reason and relaxes back to 0.14em from sm up. */}
        <span className="font-[Bricolage_Grotesque] whitespace-nowrap text-[clamp(1rem,4.4vw,1.375rem)] font-semibold uppercase tracking-[0.07em] text-primary sm:text-xl sm:tracking-[0.14em]">
            Inspections <span className="text-muted-foreground">LLC</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary after:pointer-events-none after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-2 flex flex-col items-end">
            <a
              href="tel:+15616326387"
              className="font-mono-data inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--accent)_88%,black)] hover:shadow-md hover:shadow-accent/40"
            >
              (561) 632-6387
            </a>
            <span className="mt-1 text-[11px] leading-tight text-muted-foreground">
              You'll reach our local team directly&nbsp;
            </span>
          </div>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground data-[status=active]:text-primary data-[status=active]:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <span className="relative flex items-center">
            <picture>
              <source srcSet={webpVariant(logo.url)} type="image/webp" />
              <img
                src={logo.url}
                alt="Safe Haven Inspections LLC logo"
                className="h-10 w-auto max-w-none mix-blend-multiply"
                width={988}
                height={489}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </span>
          <p className="mt-3 font-[Bricolage_Grotesque] font-semibold text-primary">Safe Haven Inspections LLC</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Independent, state-licensed mold assessors serving South Florida.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold text-primary">Contact</h3>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>
              <a className="font-mono-data text-accent hover:underline" href="tel:+15616326387">(561) 632-6387</a>
              <span className="block text-xs text-muted-foreground">You'll reach our local team directly — never an answering service.</span>
            </li>
            <li><a className="text-accent break-all hover:underline" href="mailto:safehaveninspectionsllc@gmail.com">safehaveninspectionsllc@gmail.com</a></li>
            <li>
              <a href="/service-areas" className="text-accent hover:underline">
                Martin · Palm Beach · Broward
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold text-primary">Licenses</h3>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>FL Mold Assessor · <span className="font-mono-data">MRSA3366</span></li>
            <li>FL Mold Remediator · <span className="font-mono-data">MRSR3536</span></li>
            <li className="pt-1 text-xs text-muted-foreground/90">
              IICRC WRT / AMRT / TCST · Certified Asbestos Inspector · NAERMC-certified
            </li>
            <li className="text-xs text-muted-foreground/80">
              Inspection &amp; testing only — no remediation.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Safe Haven Inspections LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div
      role="navigation"
      aria-label="Quick contact"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur pb-[calc(env(safe-area-inset-bottom)+0.5rem)] shadow-[0_-6px_20px_-12px_rgba(11,37,69,0.35)]"
    >
      <a
        href="tel:+15616326387"
        aria-label="Call Safe Haven Inspections at (561) 632-6387"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cta px-4 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]"
      >
        <Phone className="h-4 w-4" aria-hidden /> Call Now
      </a>
      <a
        href="sms:+15616326387"
        aria-label="Text a photo to (561) 632-6387"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)]"
      >
        <MessageSquare className="h-4 w-4" aria-hidden /> Text a Photo
      </a>
    </div>
  );
}