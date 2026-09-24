/**
 * Adds Google image-sitemap entries to the prerendered sitemap.xml.
 *
 * Runs after `vite build`. It reads each prerendered page and records the
 * images that page actually renders, so the sitemap can never drift from the
 * markup the way a hand-maintained list would.
 *
 * Only content images are listed. Google wants the images it should consider
 * indexing, so the logo, the cert badges and anything decorative are skipped:
 * padding the sitemap with chrome that repeats on all 54 pages tells it
 * nothing. `.webp` siblings are skipped too, because the `<img src>` is the
 * canonical URL and the `<source>` is an encoding of the same picture.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = "dist/client";
const SITEMAP = path.join(ROOT, "sitemap.xml");
const ORIGIN = "https://www.safehaveninspectionsllc.com";

/**
 * Chrome that appears on every page and should not be indexed per-URL, plus the
 * responsive `-mobile` variants, which are the same picture at another size and
 * would otherwise be submitted as a second, competing URL.
 */
const SKIP = [
  /logo/i,
  /^\/favicon/i,
  /^\/apple-touch/i,
  /^\/cert-/i,
  /^\/badge-/i,
  /^\/og-/i,
  /\/thumb-/i,
  /-mobile\.[a-z]+$/i,
  /\/avatar|-avatar\./i,
];

if (!fs.existsSync(SITEMAP)) {
  console.error(`[image-sitemap] ${SITEMAP} not found; did vite build run?`);
  process.exit(1);
}

/** Map a sitemap <loc> back to the prerendered file that produced it. */
function pageFile(loc) {
  const rel = loc.replace(ORIGIN, "").replace(/^\//, "");
  const candidates = [
    path.join(ROOT, rel, "index.html"),
    path.join(ROOT, rel.replace(/\/$/, "") + ".html"),
    path.join(ROOT, rel || "index.html"),
  ];
  return candidates.find((f) => fs.existsSync(f) && fs.statSync(f).isFile());
}

/**
 * A responsive `<img>` carries the small variant in `src` and the real one in
 * `srcset`. Submit the largest candidate: it is the version Google should index,
 * and listing the 800w variant instead would nominate a second URL for the same
 * picture.
 */
function bestCandidate(tag) {
  const srcset = (tag.match(/\ssrcset="([^"]+)"/i) || [])[1];
  if (srcset) {
    const parsed = srcset
      .split(",")
      .map((part) => part.trim().split(/\s+/))
      .map(([url, d]) => ({ url, w: d ? parseInt(d, 10) || 0 : 0 }))
      .filter((c) => c.url && !/\.webp$/i.test(c.url));
    if (parsed.length) {
      return parsed.reduce((a, b) => (b.w > a.w ? b : a)).url;
    }
  }
  return (tag.match(/\ssrc="([^"]+)"/i) || [])[1];
}

const usable = (u) =>
  u && u.startsWith("/") && !/\.webp$/i.test(u) && !SKIP.some((re) => re.test(u));

/**
 * Inside a `<picture>` the desktop art lives in a `<source media="(min-width: …)">`
 * and the `<img src>` holds the small fallback. Prefer the widest non-webp
 * `<source>`, then fall back to the `<img>` itself.
 */
function fromPicture(block) {
  for (const m of block.matchAll(/<source\b[^>]*>/gi)) {
    const tag = m[0];
    if (/type="image\/webp"/i.test(tag)) continue;
    if (!/\smedia="/i.test(tag)) continue; // media-gated source = the large one
    const url = bestCandidate(tag.replace(/srcSet=/i, "srcset="));
    if (usable(url)) return url;
  }
  const img = (block.match(/<img\b[^>]*>/i) || [])[0];
  return img ? bestCandidate(img) : null;
}

function imagesFor(file) {
  const html = fs.readFileSync(file, "utf8");
  const out = new Map(); // url -> alt, deduped, insertion-ordered
  const claimed = new Set();

  for (const m of html.matchAll(/<picture\b[^>]*>[\s\S]*?<\/picture>/gi)) {
    const block = m[0];
    const img = (block.match(/<img\b[^>]*>/i) || [])[0];
    if (img) claimed.add(img);
    const url = fromPicture(block);
    if (!usable(url)) continue;
    const alt = img ? (img.match(/\salt="([^"]*)"/i) || [, ""])[1] : "";
    if (!out.has(url)) out.set(url, alt);
  }

  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    if (claimed.has(tag)) continue;
    const url = bestCandidate(tag);
    if (!usable(url)) continue;
    const alt = (tag.match(/\salt="([^"]*)"/i) || [, ""])[1];
    if (!out.has(url)) out.set(url, alt);
  }

  return out;
}

const xmlEscape = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

let xml = fs.readFileSync(SITEMAP, "utf8");

if (xml.includes("xmlns:image")) {
  console.log("[image-sitemap] already present, nothing to do");
  process.exit(0);
}

xml = xml.replace(
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
);

let pages = 0;
let total = 0;
let missing = 0;

xml = xml.replace(/ {2}<url>(.*?)<\/url>/g, (whole, inner) => {
  const loc = (inner.match(/<loc>([^<]+)<\/loc>/) || [])[1];
  if (!loc) return whole;
  const file = pageFile(loc);
  if (!file) {
    missing += 1;
    return whole;
  }
  const imgs = imagesFor(file);
  if (!imgs.size) return whole;
  pages += 1;
  total += imgs.size;
  const entries = [...imgs]
    .map(
      ([src, alt]) =>
        `\n    <image:image><image:loc>${ORIGIN}${xmlEscape(src)}</image:loc>` +
        (alt ? `<image:title>${xmlEscape(alt)}</image:title>` : "") +
        `</image:image>`,
    )
    .join("");
  return `  <url>${inner}${entries}\n  </url>`;
});

fs.writeFileSync(SITEMAP, xml);

if (missing) {
  console.warn(`[image-sitemap] ${missing} sitemap URLs had no prerendered file`);
}
console.log(
  `[image-sitemap] ${total} images across ${pages} pages written to sitemap.xml`,
);
