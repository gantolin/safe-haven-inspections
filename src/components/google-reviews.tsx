import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ON_PAGE_REVIEWS } from "@/lib/seo";

type Review = {
  author?: string;
  text: string;
};

// Real Google reviews for Safe Haven Inspections. Add new ones here.
const REVIEWS: Review[] = [
  {
    text: "Safe Haven Inspections really helped me out when I had a major water leak and subsequent mold growth in the area. The survey and report Landon did was so thorough and I was really impressed with the efficiency of the whole process and how much knowledge he had about the possible repair process. I was able to turn in the report to my landlord and they repaired the damaged areas with no question. Great company to work with! Highly recommend.",
  },
  {
    text: "Landon was amazing from the first phone call I ever made with him all the way to the very end. Landon sat down with me and explained everything from the beginning of what's going to happen, what I should expect, how long it's going to take, and all the details in between. He was able to email me my invoices as well as the report, and I was easily able to save them to my phone and upload them directly to my insurance carriers app.",
  },
  {
    text: "Landon was great to work with. Very knowledgeable and easy to communicate with. After the appointment he sent a very thorough email explaining everything. I would recommend this company for home mold testing!",
  },
  {
    text: "Landon from Safe Haven Inspections always takes the extra steps to insure that the testing is done accurately. I work for a state wide insurance restoration company, and I am thankful that we found Safe Haven to perform our inspections. They are prompt, professional, and extremely knowledgeable. HIGHLY RECOMMEND!",
  },
  {
    text: "I had a bad issue with my roof, in South Florida sometimes its hard to trust contractors. Landon from Safe Haven was extremely knowledgeable and professional. He communicated throughout and answered all my questions. I couldn't have asked for a more thorough inspection and recommend this company for anyone having mold issues in their house.",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://search.google.com/local/reviews?placeid=ChIJ05nbvAsn2YgRsE2N_sG53w4";
const AUTOPLAY_MS = 6000;


function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={className}
          style={{ color: "#FBBC04", fill: "#FBBC04" }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function GoogleGBadge() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-border font-[Bricolage_Grotesque] text-xl font-bold leading-none"
      style={{
        background:
          "conic-gradient(from -45deg, #4285F4 0 25%, #34A853 25% 50%, #FBBC04 50% 75%, #EA4335 75% 100%)",
      }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary">
        G
      </span>
    </span>
  );
}

/**
 * Compact rating badge for above-the-fold placement.
 *
 * Social proof belongs high on the page, not halfway down — the full review
 * carousel below stays where it is, this just puts the rating where it is seen
 * on landing. The rating comes from ON_PAGE_REVIEWS, the same source the
 * AggregateRating schema uses, so the badge cannot drift from the number Google
 * itself shows. The review *count* is deliberately not shown: five reviews is a
 * small number to advertise above the fold, and the 5.0 carries the proof on its
 * own. The count still goes to AggregateRating, where Google requires it.
 *
 * `onDark` is the hero variant: translucent white on the photo scrim, matching
 * the trust pill beside it. Default is the light-background variant.
 */
export function GoogleRatingBadge({ onDark = false }: { onDark?: boolean }) {
  const { ratingValue } = ON_PAGE_REVIEWS;
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        onDark
          ? "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/25 sm:px-5 sm:py-2 sm:text-base"
          : "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary transition hover:border-accent"
      }
    >
      <Stars className={onDark ? "h-4 w-4 sm:h-5 sm:w-5" : "h-3.5 w-3.5"} />
      <span className="font-semibold">{ratingValue.toFixed(1)}</span>
      <span className={onDark ? "text-white/80" : "text-muted-foreground"}>on Google</span>
      <span className="sr-only">, read the reviews on Google</span>
    </a>
  );
}

export function GoogleReviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = REVIEWS.length;
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="mx-auto mt-14 max-w-3xl px-4 text-center sm:px-6">
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 text-sm font-medium text-muted-foreground transition hover:text-primary"
      >
        <GoogleGBadge />
        <span className="font-[Bricolage_Grotesque] text-xl font-semibold text-primary">5.0</span>
        <Stars className="h-4 w-4" />
        <span>on Google</span>
      </a>

      {/* Every review sits in the same grid cell and they cross-fade, so the
          block keeps one height and all five stay in the page HTML. Each is
          clamped to four lines; the full text is one tap away on Google. */}
      <div
        className="mt-5 grid"
        aria-live="polite"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {REVIEWS.map((r, i) => (
          <blockquote
            key={i}
            aria-hidden={i !== index}
            className={`col-start-1 row-start-1 line-clamp-4 text-base leading-relaxed text-foreground transition-opacity duration-700 sm:text-lg ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            “{r.text}”
          </blockquote>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous review"
          onClick={prev}
          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className="group grid h-6 min-w-5 place-items-center"
            >
              <span
                aria-hidden
                className={`block h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-accent" : "w-1.5 bg-border group-hover:bg-muted-foreground/40"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Next review"
          onClick={next}
          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
