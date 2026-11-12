"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journey } from "@/lib/content";

/**
 * Section 03 — the journey. Pinned horizontal choreography on desktop,
 * stacked chapters on mobile. Typographic panels (no fake bike photos —
 * the originals are requested; see docs/HOME-HERO-ASSETS.md).
 */
export function Journey() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance() + 120}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="relative overflow-hidden border-b border-border">
      <div className="md:flex md:h-[100svh] md:flex-col md:justify-center">
        <div className="mx-auto w-full max-w-[1500px] px-5 pt-24 md:px-10 md:pt-0">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
                03 — The journey
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold uppercase leading-none tracking-tight">
                Four bikes. One road.
              </h2>
            </div>
            <p className="hidden font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted md:block">
              Scroll →
            </p>
          </div>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted">
            Chapters are set in type for now — the original photographs of each bike are
            requested before they are featured.
          </p>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex flex-col gap-5 px-5 pb-16 md:mt-12 md:flex-row md:gap-6 md:px-10 md:pb-0"
        >
          {journey.map((chapter, index) => {
            const isNow = index === journey.length - 1;
            return (
              <article
                key={`${chapter.year}-${chapter.name}`}
                className={
                  isNow
                    ? "relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-primary bg-primary p-6 text-white md:h-[58vh] md:w-[58vw] md:shrink-0 md:p-9 lg:w-[42vw]"
                    : "group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-primary md:h-[58vh] md:w-[58vw] md:shrink-0 md:p-9 lg:w-[42vw]"
                }
              >
                <div className="flex items-start justify-between">
                  <span
                    className={
                      isNow
                        ? "font-subdisplay text-[10px] uppercase tracking-[0.35em] text-white/70"
                        : "font-subdisplay text-[10px] uppercase tracking-[0.35em] text-muted"
                    }
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      isNow
                        ? "rounded-full border border-white/40 px-3 py-1 font-subdisplay text-[10px] uppercase tracking-[0.25em] text-white/80"
                        : "rounded-full border border-border px-3 py-1 font-subdisplay text-[10px] uppercase tracking-[0.25em] text-muted"
                    }
                  >
                    {chapter.tag}
                  </span>
                </div>

                <div className="mt-16 md:mt-0">
                  <p
                    className={
                      isNow
                        ? "font-display text-[clamp(3.4rem,8vw,6.4rem)] font-extrabold leading-none tracking-tight text-white"
                        : "outline-text font-display text-[clamp(3.4rem,8vw,6.4rem)] font-extrabold leading-none tracking-tight text-transparent"
                    }
                  >
                    {chapter.year}
                  </p>
                  <h3
                    className={
                      isNow
                        ? "mt-4 font-display text-2xl font-extrabold uppercase leading-none tracking-tight md:text-3xl"
                        : "mt-4 font-display text-2xl font-extrabold uppercase leading-none tracking-tight text-foreground md:text-3xl"
                    }
                  >
                    {chapter.name}
                  </h3>
                  <p
                    className={
                      isNow
                        ? "mt-4 max-w-sm text-sm leading-relaxed text-white/80"
                        : "mt-4 max-w-sm text-sm leading-relaxed text-muted"
                    }
                  >
                    {chapter.note}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
