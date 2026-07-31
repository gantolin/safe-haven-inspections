// Image helpers.
//
// Every raster image in /public ships with a same-name .webp sibling. Serve the
// WebP through a <picture> <source> and keep the original as the <img> fallback,
// so browsers without WebP support still render.

export function webpVariant(url: string): string {
  return url.replace(/\.(jpe?g|png)$/i, ".webp");
}
