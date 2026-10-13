import { useEffect, useRef, useState } from "react";
import { webpVariant } from "@/lib/images";

const FRAME = "/thermal-reveal-ir.jpg";

// One loop of the automatic sweep, in milliseconds.
const HOLD_PLAIN = 1400;
const SWEEP = 2600;
const HOLD_IR = 3600;
const RETURN = 1100;
const LOOP = HOLD_PLAIN + SWEEP + HOLD_IR + RETURN;

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/** Where the divider sits (0 to 100) at a given moment in the loop. */
function positionAt(ms: number): number {
  const t = ms % LOOP;
  if (t < HOLD_PLAIN) return 0;
  if (t < HOLD_PLAIN + SWEEP) return 100 * ease((t - HOLD_PLAIN) / SWEEP);
  if (t < HOLD_PLAIN + SWEEP + HOLD_IR) return 100;
  return 100 * (1 - ease((t - HOLD_PLAIN - SWEEP - HOLD_IR) / RETURN));
}

/**
 * A wall as the eye sees it, wiped across to the same wall in infrared.
 *
 * Both sides are ONE real frame from our thermal camera. The "plain" side is
 * that frame with the colour and detail taken out in CSS, which is honest about
 * what it is: nothing here is a staged or composited finding. The marker sits
 * on the cooler area that is really in the frame.
 *
 * The sweep runs on its own until the visitor drags the divider, then it is
 * theirs. With reduced motion set, nothing moves by itself: the divider rests
 * at the halfway point and still drags.
 */
export function ThermalReveal() {
  const [pos, setPos] = useState(50);
  const taken = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      if (taken.current) return;
      setPos(positionAt(now - start));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const spotVisible = pos > 30;

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[3/2] w-full select-none overflow-hidden bg-secondary">
        {/* Infrared: the frame as the camera recorded it. */}
        <picture>
          <source srcSet={webpVariant(FRAME)} type="image/webp" />
          <img
            src={FRAME}
            alt="Infrared image of a wall and floor corner with a cooler area low on the wall"
            width={1200}
            height={799}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>

        {/* The cooler area that is actually in the frame. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute left-[27%] top-[73%] transition-opacity duration-500 ${
            spotVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="absolute -left-7 -top-7 h-14 w-14 rounded-full border-2 border-white/90 motion-safe:animate-ping" />
          <span className="absolute -left-7 -top-7 h-14 w-14 rounded-full border-2 border-white" />
          <span className="absolute left-10 -top-4 whitespace-nowrap rounded-md bg-primary/90 px-2.5 py-1 text-xs font-semibold text-white shadow">
            Cooler area
          </span>
        </div>

        {/* To the eye: the same frame with colour and detail removed. */}
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <picture>
            <source srcSet={webpVariant(FRAME)} type="image/webp" />
            <img
              src={FRAME}
              alt=""
              width={1200}
              height={799}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full scale-110 object-cover [filter:grayscale(1)_blur(14px)_contrast(0.35)_brightness(1.75)]"
            />
          </picture>
          <div className="absolute inset-0 bg-[#ece7dd]/55" />
        </div>

        <span
          className={`absolute left-3 top-3 rounded-md bg-primary/90 px-2.5 py-1 text-xs font-semibold text-white transition-opacity duration-300 ${
            pos > 22 ? "opacity-100" : "opacity-0"
          }`}
        >
          What the camera sees
        </span>
        <span
          className={`absolute right-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary transition-opacity duration-300 ${
            pos < 78 ? "opacity-100" : "opacity-0"
          }`}
        >
          What you see
        </span>

        {/* Divider and grip. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.7)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-primary shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
            </svg>
          </span>
        </div>

        {/* The real control: a range input laid over the picture, so dragging,
            tapping and the arrow keys all work without custom pointer code. */}
        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={pos}
          aria-label="Drag to compare the wall as you see it with the infrared image"
          onPointerDown={() => {
            taken.current = true;
          }}
          onKeyDown={() => {
            taken.current = true;
          }}
          onChange={(e) => {
            taken.current = true;
            setPos(Number(e.target.value));
          }}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="border-t border-border p-4 text-xs text-muted-foreground">
        One real frame from our thermal camera, shown plain and in infrared.
        Drag the line to compare. Infrared shows temperature, so a cooler area
        like this one is checked with a moisture meter before it goes in a
        report.
      </figcaption>
    </figure>
  );
}
