"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type MouseEvent } from "react";

/**
 * Hero — cursor-reveal portrait (the "Lando" mechanic, rebuilt dependency-free).
 *
 * Two aligned layers: a base photo and a blue-duotone twin revealed through a
 * radial mask that follows the cursor. When the real shoot lands (two aligned
 * shots: face + helmet — see docs/HOME-HERO-ASSETS.md), swap the second Image
 * src to hero-helmet.jpg and the seam disappears.
 */
export function Hero() {
  const [pos, setPos] = useState({ x: 50, y: 32 });
  const raf = useRef<number | null>(null);

  const onMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    if (raf.current !== null) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => setPos({ x, y }));
  }, []);

  const resetPos = useCallback(() => setPos({ x: 50, y: 32 }), []);

  const mask = `radial-gradient(circle 230px at ${pos.x}% ${pos.y}%, #000 0%, rgba(0,0,0,0.65) 55%, transparent 74%)`;

  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative contour lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-60 620C220 470 430 720 760 520s520-210 780-60" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M-40 700C250 560 470 790 800 590s500-190 740-40" stroke="#ffffff" strokeWidth="1" />
        <path d="M120 260c180-90 360 60 560-10s380-120 620-30" stroke="#ffffff" strokeWidth="1" />
        <path d="M60 380c200-70 380 90 600 20s400-90 620-10" stroke="#ffffff" strokeWidth="0.8" />
        <path d="M240 840c160-120 340-40 520-140s360-80 560 20" stroke="#ffffff" strokeWidth="0.8" />
      </svg>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col items-center justify-center px-5 pb-16 pt-28 md:px-8">
        {/* giant outline word behind the portrait */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[15%] hidden select-none justify-center lg:flex"
        >
          <span className="outline-text font-display text-[clamp(6rem,13vw,13rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
            Sonic Rider
          </span>
        </div>

        <p className="relative z-10 mb-7 font-subdisplay text-[11px] font-bold uppercase tracking-[0.5em] text-accent-gold">
          Morocco · Since 2017
        </p>

        <div
          onMouseMove={onMove}
          onMouseLeave={resetPos}
          className="relative z-10 aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <Image
            src="/images/hero.jpg"
            alt="SONIC RIDER on a Yamaha Tracer 900 at night"
            fill
            priority
            sizes="(max-width: 768px) 92vw, 480px"
            className="object-cover"
          />

          {/* reveal layer — blue duotone twin */}
          <div className="absolute inset-0" style={{ WebkitMaskImage: mask, maskImage: mask }}>
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 92vw, 480px"
              className="object-cover grayscale contrast-125 brightness-110"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "var(--primary)", opacity: 0.6, mixBlendMode: "color" }}
            />
          </div>

          <span className="hover-pill pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 font-subdisplay text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur">
            Hover to reveal
          </span>
        </div>

        <h1 className="sr-only">SONIC RIDER — High Adrenaline Motovlogging &amp; Media</h1>

        <p className="relative z-10 mt-6 text-center font-subdisplay text-sm text-muted">
          High Adrenaline Motovlogging &amp; Media
        </p>

        {/* bottom row — info card + scroll hint */}
        <div className="relative z-10 mt-10 flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="w-full max-w-[280px] rounded-2xl border border-border bg-black/60 p-4 backdrop-blur">
            <p className="font-subdisplay text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold">
              On the road
            </p>
            <p className="mt-1.5 font-display text-base font-bold uppercase tracking-tight">
              Casablanca · MA
            </p>
            <div className="my-3 h-px w-full bg-border" />
            <p className="font-subdisplay text-[10px] uppercase tracking-[0.25em] text-muted">
              Current bike
            </p>
            <p className="mt-1 font-subdisplay text-xs font-semibold uppercase tracking-[0.08em]">
              Yamaha Tracer 900
            </p>
          </div>

          <a
            href="#statement"
            className="flex items-center gap-3 font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:text-foreground"
          >
            Scroll
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
