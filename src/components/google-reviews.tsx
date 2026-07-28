import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
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
    <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl border border-border bg-secondary/60 p-6 sm:p-10">
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            What Our Clients Say
          </p>
          <div className="mt-3 flex items-center gap-3">
            <GoogleGBadge />
            <span className="font-[Bricolage_Grotesque] text-2xl font-semibold text-primary sm:text-3xl">
              5.0
            </span>
            <Stars className="h-6 w-6" />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            5.0 rating on Google
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
              aria-live="polite"
            >
              {REVIEWS.map((r, i) => (
                <div key={i} className="w-full shrink-0 px-1 sm:px-8">
                  <article className="mx-auto flex h-full max-w-3xl flex-col rounded-xl border border-border bg-background p-6 shadow-sm sm:p-8">
                    <Stars />
                    <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
                      “{r.text}”
                    </p>
                    <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Posted on Google
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous review"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 rounded-full border border-border bg-background p-2 text-primary shadow-sm transition hover:bg-secondary sm:-translate-x-3"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 rounded-full border border-border bg-background p-2 text-primary shadow-sm transition hover:bg-secondary sm:translate-x-3"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-primary shadow-sm transition hover:bg-secondary"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}