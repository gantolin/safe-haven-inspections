import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { cities, counties, type City } from "@/data/cities";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — South Florida Mold Inspection | Safe Haven" },
      { name: "description", content: "Independent mold inspection across Martin, Palm Beach & Broward Counties — Stuart, West Palm Beach, Boca Raton, Fort Lauderdale, and more." },
      { property: "og:title", content: "South Florida Service Areas — Safe Haven Inspections" },
      { property: "og:url", content: "https://www.safehaveninspectionsllc.com/service-areas" },
    ],
    links: [{ rel: "canonical", href: "https://www.safehaveninspectionsllc.com/service-areas" }],
  }),
  component: ServiceAreasPage,
});

// Every city.slug maps 1:1 to a built /mold-inspection-{slug} route.
// The Link component is typed against the route tree, so we cast per-item
// to keep the mapping generic without listing all 27 literal paths here.
function cityHref(city: City): string {
  return `/mold-inspection-${city.slug}`;
}

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
            Give us a call — we likely cover it.
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
                    className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm"
                  >
                    <span>
                      <span className="block font-semibold text-primary">{c.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        Mold Inspection in {c.name}, FL
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-accent transition group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8">
          <p className="text-sm text-muted-foreground">
            Don't see your city?{" "}
            <Link to="/contact" className="font-semibold text-accent hover:underline">
              Get in touch
            </Link>{" "}
            — we likely cover it across Martin, Palm Beach &amp; Broward Counties.
          </p>
        </div>
      </section>
    </>
  );
}
