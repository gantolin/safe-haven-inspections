import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { posts } from "@/data/posts";

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
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Blog</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-primary sm:text-5xl">
            Straight talk about mold in South Florida.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
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
