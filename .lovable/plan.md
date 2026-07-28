# Mobile Call/Text Bar — Cross-Breakpoint QA

Verify the sticky bottom bar (`MobileCallBar` in `src/components/site-nav.tsx`) is thumb-friendly, doesn't collide with the Lovable "Edit" badge, and doesn't hide footer content, across representative mobile widths.

## Devices under test

| Label | Viewport | Rationale |
| --- | --- | --- |
| iPhone SE | 375 × 667 | Smallest common modern phone |
| iPhone 12/13 | 390 × 844 | Baseline modern iOS |
| iPhone 14 Pro Max | 430 × 932 | Large iOS |
| Pixel 7 | 412 × 915 | Baseline Android |
| Galaxy Fold (folded) | 344 × 882 | Narrowest realistic width |
| Breakpoint boundary | 767 × 900 | Last px before `md:` hides the bar |
| Breakpoint boundary | 768 × 900 | First `md:` px — bar must disappear |

## Pages sampled

- `/` (home — long page, has hero + final CTA + footer)
- `/services` (hub)
- `/services/mold-inspection` (long flagship)
- `/mold-inspection-boca-raton` (city template)
- `/contact` (short page, footer visible without scroll)

## Checks per (device × page)

1. **Bar visibility & sizing** — screenshot at initial load. Assert:
   - Bar present on <768px, absent at 768px+.
   - Each button ≥ 48px tap height (`min-h-12`), full-width halves.
   - Icons and labels render on one line (no wrap/clip at 344px).
2. **Contrast / color reservation** — orange only on Call, dark petrol on Text.
3. **Anchor targets** — `href` starts with `tel:` and `sms:` respectively.
4. **Footer clearance** — scroll to page end, screenshot. Assert last footer line ("© … All rights reserved.") is fully visible above the bar (main has `pb-24` mobile padding).
5. **Lovable badge collision** — the preview injects the "Edit" badge fixed near bottom-right. Screenshot bottom-right corner at each width; confirm badge and bar's Text button don't visually overlap. If they do, note remedy (raise bar, or add right padding when badge is present).
6. **Safe-area** — verify `pb-[calc(env(safe-area-inset-bottom)+0.5rem)]` renders extra padding under iOS-style viewports (simulate by injecting `env()` fallback via CSS var override in the test).
7. **Tap-through** — click Call, confirm navigation is a `tel:` intent (Playwright records the request/navigation attempt); same for Text → `sms:`.
8. **Scroll interference** — scroll the page; bar stays fixed, doesn't cause horizontal overflow (`document.documentElement.scrollWidth === innerWidth`).

## Deliverables

- Per-device screenshots (top, bottom-on-load, bottom-at-footer) written to `/tmp/browser/mobile-bar/`.
- A short summary in chat: pass/fail per check, with any pixel measurements where a failure was found, plus a proposed one-line fix (e.g. bump `pb-24` → `pb-28`, or add `pr-16` when Lovable badge is detected).

## Notes

- No code changes as part of this plan — this is verification. If a defect is found, follow-up plan will patch `MobileCallBar` or root layout padding.
- Runs against `http://localhost:8080`; no auth needed.
