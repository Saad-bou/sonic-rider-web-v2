"use client";

import { useEffect, useRef, useState } from "react";

const WORDS =
  "The road never left. Some memories never fade. After two years off the bike, the story picks up where it stopped — same rider. New chapter."
    .split(" ")
    .filter(Boolean);

/**
 * Statement section — scroll-linked word reveal (the reference site's
 * big-type block, rebuilt with a scroll listener + rAF, no library).
 */
export function ScrollStatement() {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let raf: number | null = null;

    const update = () => {
      raf = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85; // element top reaches 85% viewport height
      const end = -rect.height * 0.55; // scroll past most of the block
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="statement" className="bg-primary">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-36">
        <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-white/70">
          01 — The statement
        </p>

        <p
          ref={ref}
          className="mt-10 max-w-[1150px] font-display text-[clamp(1.9rem,4.6vw,4.2rem)] font-extrabold uppercase leading-[1.06] tracking-tight text-white"
        >
          {WORDS.map((word, index) => {
            const opacity = Math.min(1, Math.max(0.16, progress * WORDS.length - index));
            return (
              <span key={`${word}-${index}`} style={{ opacity, transition: "opacity 0.25s linear" }}>
                {word}{" "}
              </span>
            );
          })}
        </p>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/25 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-white/70">
            Reactivation — 2026
          </p>
          <p className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-white/70">
            Seven years · four bikes · one road
          </p>
        </div>
      </div>
    </section>
  );
}
