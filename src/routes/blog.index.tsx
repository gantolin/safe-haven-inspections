import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { posts } from "@/data/posts";
import { webpVariant } from "@/lib/images";

const HERO = "/blog-hero.jpg";
const HERO_MOBILE = "/blog-hero-mobile.jpg";

/*
 * This is blog.index.tsx, not blog.tsx, and the path is "/blog/" rather than
 * "/blog", on purpose.
 *
 * As blog.tsx it declared createFileRoute("/blog"), which makes it a *layout*
 * route wrapping /blog/$slug. It renders the listing and no <Outlet />, so the
 * article route never got a chance to render and every post URL showed this
 * listing instead of the post. Declaring it as an index route makes the
 * listing and the article siblings — the same shape services.index.tsx already
 * uses alongside services.<name>.tsx.
 */
export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Mold Inspection Blog — South Florida | Safe Haven" },
      { name: "description", content: "Practical guides from an independent South Florida mold assessor: hidden mold signs, post-storm mold, pre-purchase mold testing, and more." },
      { property: "og:title", content: "Safe Haven Inspections Blog" },
      { property: "og:url", content: "https://www.safehaveninspectionsllc.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://www.safehaveninspectionsllc.com/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        {/* Photo: Unsplash wwaPIZfYtVY, "a palm tree lined driveway leading to
            a house" by Scott Wyden Kivowitz (Florida), standard Unsplash
            License — commercial use, attribution not required. Desktop and
            mobile crops differ because the band is wide and short on desktop
            but nearly square on a phone; both are weighted to the bottom of
            the portrait source, where the house and drive actually are. */}
        <picture className="absolute inset-0 -z-10 h-full w-full">
          <source media="(min-width: 640px)" srcSet={webpVariant(HERO)} type="image/webp" />
          <source media="(min-width: 640px)" srcSet={HERO} />
          <source srcSet={webpVariant(HERO_MOBILE)} type="image/webp" />
          <img
            src={HERO_MOBILE}
            alt="Dark storm clouds gathering over a lit house at dusk."
            width={1920}
            height={780}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[center_40%]"
          />
        </picture>
        {/* Left-anchored scrim, same treatment as the home hero, so the
            headline keeps contrast while the sky stays legible on the right. */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(11,37,69,0.90) 0%, rgba(11,37,69,0.80) 38%, rgba(11,37,69,0.55) 68%, rgba(11,37,69,0.40) 100%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-wider text-white/80">Blog</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.5)] sm:text-5xl">
            Straight talk about mold in South Florida.
          </h1>
          <span aria-hidden className="spectrum-rule mt-5" />
          <p className="mt-5 max-w-2xl text-base text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-lg">
            Practical, honest guides from a licensed, independent mold assessment
            team — written for homeowners, not for contractors.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  {/* "T00:00:00" forces local-midnight parsing. A bare
                      "YYYY-MM-DD" is parsed as UTC, which then renders a day
                      early everywhere west of Greenwich — including Florida. */}
                  <Calendar className="h-3.5 w-3.5" /> {new Date(`${p.date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {p.readMinutes} min read
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-primary group-hover:text-accent">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
