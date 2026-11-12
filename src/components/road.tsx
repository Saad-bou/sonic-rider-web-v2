"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { roadShots } from "@/lib/content";

/** Section 04 — on the road. Editorial gallery, real frames, slight parallax. */
export function Road() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll<HTMLElement>("[data-parallax]");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { yPercent: index % 2 === 0 ? 4 : -2 },
          {
            yPercent: index % 2 === 0 ? -6 : 3,
            ease: "none",
            scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="road" className="border-b border-border">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
              04 — On the road
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5.4vw,4.4rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
              The road is the studio.
            </h2>
          </div>
          <p className="hidden max-w-[220px] text-right font-subdisplay text-[10px] uppercase leading-relaxed tracking-[0.25em] text-muted md:block">
            Frames from the night rides — no stock, no set-ups.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-12 md:gap-5">
          <figure className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
              <div data-parallax className="absolute inset-0 scale-110">
                <Image
                  src={roadShots[0].src}
                  alt={roadShots[0].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted">
              {roadShots[0].caption}
            </figcaption>
          </figure>

          <figure className="md:col-span-5 md:mt-14">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <div data-parallax className="absolute inset-0 scale-110">
                <Image
                  src={roadShots[1].src}
                  alt={roadShots[1].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted">
              {roadShots[1].caption}
            </figcaption>
          </figure>

          <figure className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <div data-parallax className="absolute inset-0 scale-110">
                <Image
                  src={roadShots[2].src}
                  alt={roadShots[2].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted">
              {roadShots[2].caption}
            </figcaption>
          </figure>

          <figure className="md:col-span-7 md:mt-14">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
              <div data-parallax className="absolute inset-0 scale-110">
                <Image
                  src={roadShots[3].src}
                  alt={roadShots[3].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted">
              {roadShots[3].caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
