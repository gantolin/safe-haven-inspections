// Google Analytics 4.
//
// Wired once, in __root.tsx, so the tag covers every route without any page
// opting in: the landing page, all 14 service pages, all 27 city pages, the
// blog index and every post. Nothing here should ever be duplicated per page.
//
// After hydration this site is a client-routed SPA, so gtag's own automatic
// page_view only ever describes the first full load. Every navigation after
// that is a history push that gtag never observes — useAnalytics() below sends
// those by hand.

import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * The GA4 property. Change it here and nowhere else — the head snippet, the
 * config call, and anything else that names the property read from this.
 */
export const GA_MEASUREMENT_ID = "G-RFX6LZBD6R";

/**
 * Production builds only.
 *
 * `import.meta.env.DEV` is a compile-time constant, so in a production build
 * every guard below folds to the live branch and the dev branch is dropped from
 * the bundle entirely. Under `vite dev` the tag never loads and no hit is ever
 * sent, so clicking around locally cannot pollute the property.
 */
const ENABLED = !import.meta.env.DEV;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * The standard gtag snippet as TanStack head `scripts` entries: the async
 * loader, then the inline bootstrap.
 *
 * Returned as an array so __root.tsx can spread it ahead of the JSON-LD block
 * and put the tag as early in <head> as the head API allows. TanStack renders
 * meta before scripts, which is the order we want regardless — the CSP meta has
 * to land before the loader for the policy to cover it.
 */
export function analyticsHeadScripts(): Array<Record<string, unknown>> {
  if (!ENABLED) return [];
  return [
    {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    },
    {
      children: [
        "window.dataLayer = window.dataLayer || [];",
        "function gtag(){dataLayer.push(arguments);}",
        "gtag('js', new Date());",
        `gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });`,
      ].join("\n"),
    },
  ];
}

function currentPagePath(): string {
  return `${window.location.pathname}${window.location.search}`;
}

/**
 * Send a GA4 event, tagged with the page it happened on.
 *
 * Safe to call before gtag.js has finished loading: the inline bootstrap
 * defines `gtag` synchronously and queues onto dataLayer, which the library
 * drains once it arrives. In dev, and if the loader was blocked outright, this
 * is a no-op.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!ENABLED) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    page_path: currentPagePath(),
    page_location: window.location.href,
    ...params,
  });
}

/**
 * How long to wait for a navigation's new <title> to be committed before
 * sending page_view anyway. Only reached when two routes share a title, since
 * the poll below resolves on the first frame the title actually changes.
 */
const TITLE_SETTLE_TIMEOUT_MS = 1000;

/**
 * The conversion actions worth counting for this business, keyed by the URL
 * scheme of the link that performs them. Calling and texting are how nearly
 * every mold enquiry actually starts, so these matter more than the form.
 */
const LINK_SCHEME_EVENTS: Record<string, string> = {
  "tel:": "phone_click",
  "sms:": "sms_click",
  "mailto:": "email_click",
};

/**
 * Client-side page_view tracking plus conversion-link tracking. Mount once,
 * from the root component.
 */
export function useAnalytics() {
  // `location.href` is pathname + search + hash, already normalised by the
  // router (including the trailing slash), so it matches the URL GitHub Pages
  // actually serves and the canonical the page declares.
  const href = useRouterState({ select: (s) => s.location.href });
  const isFirstRun = useRef(true);
  const lastTitle = useRef("");

  useEffect(() => {
    if (!ENABLED) return;
    if (isFirstRun.current) {
      // The first pass is the full page load that gtag('config') has already
      // counted. Sending one here too would double-count every entry page.
      isFirstRun.current = false;
      lastTitle.current = document.title;
      return;
    }

    // HeadContent commits the new route's <title> on its own store
    // subscription, which lands AFTER this effect runs — a plain setTimeout(0)
    // still reads the previous page's title and files it under the new page's
    // path. So wait for the title to actually change before sending, capped so
    // a route that legitimately reuses a title still reports.
    let frame = 0;
    let cancelled = false;
    const deadline = Date.now() + TITLE_SETTLE_TIMEOUT_MS;

    const poll = () => {
      if (cancelled) return;
      if (document.title === lastTitle.current && Date.now() < deadline) {
        frame = requestAnimationFrame(poll);
        return;
      }
      lastTitle.current = document.title;
      window.gtag?.("event", "page_view", {
        page_path: href,
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    frame = requestAnimationFrame(poll);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [href]);

  useEffect(() => {
    if (!ENABLED) return;
    // One delegated listener for every tel:/sms:/mailto: link on the site,
    // rather than an onClick bolted onto each of the ~25 call, text, and email
    // buttons scattered across the routes and the shared page components. New
    // links are tracked automatically the moment they are added.
    //
    // Capture phase, so a handler that stops propagation lower down cannot
    // silently switch conversion tracking off.
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      // getAttribute, not .href: the DOM property normalises and would hide the
      // original scheme behind a resolved absolute URL for some values.
      const linkHref = anchor.getAttribute("href") ?? "";
      const scheme = linkHref.slice(0, linkHref.indexOf(":") + 1).toLowerCase();
      const name = LINK_SCHEME_EVENTS[scheme];
      if (!name) return;

      trackEvent(name, { link_url: linkHref });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}
