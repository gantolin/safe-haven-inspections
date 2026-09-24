import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { ctaPrimary, ctaSecondary } from "@/lib/cta";

/**
 * The page-not-found body. Rendered by the router's notFoundComponent for bad
 * client-side navigations, and prerendered at /404 so the build can copy it to
 * dist/client/404.html, which is the file GitHub Pages serves for any missing
 * URL. Without that file visitors got GitHub's own grey 404 page.
 */
export function NotFoundContent() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 sm:py-28">
      <p className="font-mono-data text-sm font-semibold uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">We couldn't find that page</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The link may be old or mistyped. Everything we offer is still a click away, and if you
        have a mold question right now, the fastest answer is a phone call.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="tel:+15616326387" className={ctaPrimary}>
          <Phone className="h-4 w-4" aria-hidden /> Call (561) 632-6387
        </a>
        <Link to="/" className={ctaSecondary}>
          Go to the home page
        </Link>
      </div>
      <nav aria-label="Popular pages" className="mt-10 text-sm">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <li><Link to="/services" className="text-accent hover:underline">Services</Link></li>
          <li><Link to="/services/mold-inspection" className="text-accent hover:underline">Mold inspection</Link></li>
          <li><Link to="/service-areas" className="text-accent hover:underline">Service areas</Link></li>
          <li><Link to="/contact" className="text-accent hover:underline">Request an inspection</Link></li>
        </ul>
      </nav>
    </div>
  );
}
