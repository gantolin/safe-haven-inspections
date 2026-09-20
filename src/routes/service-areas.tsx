import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { cities, cityHref, counties } from "@/data/cities";
import { absoluteUrl } from "@/lib/seo";
import { webpVariant } from "@/lib/images";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Cities We Serve Across South Florida | Safe Haven" },
      { name: "description", content: "Independent mold inspection across Martin, Palm Beach & Broward Counties: Stuart, West Palm Beach, Boca Raton, Fort Lauderdale, and more." },
      { property: "og:title", content: "South Florida Service Areas: Safe Haven Inspections" },
      { property: "og:url", content: absoluteUrl("/service-areas/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/service-areas/") }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Service areas</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            Serving all of South Florida.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Safe Haven Inspections provides independent mold inspection and testing
            across Martin, Palm Beach & Broward Counties. Don't see your city?
            Give us a call. We likely cover it.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl space-y-12 px-4 sm:px-6 pb-16">
        {counties.map((county) => {
          const list = cities.filter((c) => c.county === county);
          return (
            <div key={county}>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                  {county} County
                </h2>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c) => (
                  <a
                    key={c.slug}
                    href={cityHref(c)}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-3 pr-5 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm"
                  >
                    {/* Every city has a thumbnail at /thumb-{slug}: a photograph
                        of the place where an honest one exists, and a map of it
                        where one does not. The maps are tinted to the brand so
                        the grid reads as one set rather than photos with gaps.

                        Decorative, hence alt="" and aria-hidden: the city name
                        sits immediately beside it, so an alt would only repeat
                        itself to a screen reader. */}
                    <picture className="shrink-0">
                      <source
                        srcSet={webpVariant(`/thumb-${c.slug}.jpg`)}
                        type="image/webp"
                      />
                      <img
                        src={`/thumb-${c.slug}.jpg`}
                        alt=""
                        aria-hidden
                        width={192}
                        height={192}
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-14 rounded-lg object-cover"
                      />
                    </picture>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-primary">{c.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        Mold Inspection in {c.name}, FL
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent transition group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        {/* Attribution. Unsplash's API terms require crediting the photographer
            and Unsplash wherever a photo is displayed, and the per-photographer
            credit lives on each city page. OpenStreetMap's licence requires the
            contributor credit wherever its map data appears. */}
        <p className="text-xs text-muted-foreground">
          City photography from{" "}
          <a
            href="https://unsplash.com/?utm_source=safe_haven_inspections&utm_medium=referral"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="underline hover:text-accent"
          >
            Unsplash
          </a>
          , with each photographer credited on the city page. Maps &copy;{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="underline hover:text-accent"
          >
            OpenStreetMap
          </a>{" "}
          contributors.
        </p>

        <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8">
          <p className="text-sm text-muted-foreground">
            Don't see your city?{" "}
            <Link to="/contact/" className="font-semibold text-accent hover:underline">
              Get in touch
            </Link>{" "}
           . We likely cover it across Martin, Palm Beach &amp; Broward Counties.
          </p>
        </div>
      </section>
    </>
  );
}
