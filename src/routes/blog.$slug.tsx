import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BadgeCheck, Calendar, Clock, Phone } from "lucide-react";
import { findPost, posts } from "@/data/posts";
import { webpVariant } from "@/lib/images";
import heroHomeAsset from "../assets/hero-home.jpg.asset.json";

const heroImg = heroHomeAsset.url;

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Post not found — Safe Haven Inspections" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}`;
    const url = `https://www.safehaveninspectionsllc.com${path}`;
    return {
      meta: [
        { title: post.titleTag ?? `${post.title} — Safe Haven Inspections` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },
            headline: post.title,
            description: post.description,
            url,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: "Landon Heinrichs",
              url: "/about",
            },
            publisher: {
              "@type": "Organization",
              "@id": "/#business",
              name: "Safe Haven Inspections LLC",
              url: "/",
              logo: {
                "@type": "ImageObject",
                url: heroImg,
              },
            },
            articleBody: post.body
              .map((b) => (typeof b === "string" ? b : b.heading))
              .join(" "),
          }),
        },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold text-primary">Post not found</h1>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-1.5 text-accent">
        <ArrowLeft className="h-4 w-4" /> All posts
      </Link>
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <>
      {/* One header for both cases: with a photo it becomes a scrimmed hero in
          white, without one it falls back to the plain secondary band. Keeping
          a single code path avoids duplicating the title and meta markup. */}
      <section
        className={`relative isolate overflow-hidden border-b border-border ${
          post.image ? "" : "bg-secondary"
        }`}
      >
        {post.image && (
          <>
            <picture className="absolute inset-0 -z-10 h-full w-full">
              <source media="(min-width: 640px)" srcSet={webpVariant(post.image.src)} type="image/webp" />
              <source media="(min-width: 640px)" srcSet={post.image.src} />
              <source srcSet={webpVariant(post.image.mobileSrc)} type="image/webp" />
              <img
                src={post.image.mobileSrc}
                alt={post.image.alt}
                width={1920}
                height={780}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-[center_45%]"
              />
            </picture>
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(11,37,69,0.90) 0%, rgba(11,37,69,0.82) 40%, rgba(11,37,69,0.62) 72%, rgba(11,37,69,0.48) 100%)",
              }}
            />
          </>
        )}
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <Link
            to="/blog"
            className={`inline-flex items-center gap-1.5 text-sm font-medium ${
              post.image ? "text-white/85 hover:text-white" : "text-accent"
            }`}
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
          <h1
            className={`mt-6 text-3xl font-semibold sm:text-4xl ${
              post.image
                ? "text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]"
                : "text-primary"
            }`}
          >
            {post.title}
          </h1>
          <div
            className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm ${
              post.image ? "text-white/85" : "text-muted-foreground"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className={`h-4 w-4 ${post.image ? "text-white" : "text-accent"}`} />
              By Landon Heinrichs, Licensed FL Mold Assessor
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {/* Local-midnight parse — see the note in blog.index.tsx. */}
              {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {/* space-y is not used here: headings need a larger gap above than
            between paragraphs, which a single uniform rhythm cannot express. */}
        <div className="prose max-w-none text-[15px] leading-relaxed text-foreground">
          {post.body.map((block, i) =>
            typeof block === "string" ? (
              <p key={i} className="mt-5 first:mt-0">
                {block}
              </p>
            ) : (
              <h2
                key={i}
                className="mt-10 text-xl font-semibold text-primary first:mt-0 sm:text-2xl"
              >
                {block.heading}
              </h2>
            ),
          )}
        </div>

        {post.related && post.related.length > 0 && (
          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Related resources
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {post.related.map((r: { to: string; label: string }) => (
                <li key={r.to}>
                  <a
                    href={r.to}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
                  >
                    {r.label}
                    <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-border bg-secondary p-6">
          <h2 className="font-semibold text-primary">Need an independent inspection?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Safe Haven Inspections is an independent assessment team. Get an
            unbiased, lab-backed report across Martin, Palm Beach & Broward Counties.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground shadow-sm shadow-cta/25 transition-colors hover:bg-[color-mix(in_oklab,var(--cta)_88%,black)]">
              Request an inspection
            </Link>
            <a href="tel:+15616326387" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" /> (561) 632-6387
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="text-xl font-semibold text-primary">Keep reading</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent/50"
              >
                <h3 className="font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
