"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Hero — "THE HUMAN × SONIC FUSION" (docs/HOME-HERO-ASSETS.md).
 *
 * One real composition (fusion.jpg, 1254²): Saad's real face inside the HJC
 * RPHA 11 on the right, the Sonic energy on the left. The experience:
 *  - the stage opens focused on the human half (object-position 72%);
 *  - the cursor drives a radial mask (blue "charged" twin) + a subtle 3D tilt;
 *  - scrolling pans/zooms to the full composition — a single visual evolving,
 *    not a crossfade between two unrelated images.
 *
 * Pinned for one viewport of scroll. Reduced motion = static layout.
 */
export function HeroStage() {
  const rootRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const energyRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const stage = stageRef.current;
    const portrait = portraitRef.current;
    const energy = energyRef.current;

    if (!root || !stage || !portrait || !energy) return;

    const ctx = gsap.context(() => {
      const baseImg = portrait.querySelector<HTMLImageElement>("img");
      const energyImg = energy.querySelector<HTMLImageElement>("img");
      if (!baseImg || !energyImg) return;

      /* ---------- cursor: mask position + damped stage tilt ---------- */
      const mxTo = gsap.quickTo(stage, "--mx", { duration: 0.6, ease: "power3" });
      const myTo = gsap.quickTo(stage, "--my", { duration: 0.6, ease: "power3" });
      const rxTo = gsap.quickTo(stage, "rotationX", { duration: 0.9, ease: "power3" });
      const ryTo = gsap.quickTo(stage, "rotationY", { duration: 0.9, ease: "power3" });

      /* gentle idle drift until the visitor takes control */
      const idleDrift = gsap.to(stage, {
        "--mx": 44,
        "--my": 34,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      } as gsap.TweenVars);

      const onMove = (event: PointerEvent) => {
        idleDrift.kill();
        const rect = stage.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        mxTo(Math.round(x * 1000) / 10);
        myTo(Math.round(y * 1000) / 10);
        ryTo((x - 0.5) * 4);
        rxTo(-(y - 0.5) * 2.5);
      };

      stage.addEventListener("pointermove", onMove, { passive: true });
      stage.addEventListener("pointerleave", () => {
        mxTo(50);
        myTo(40);
        rxTo(0);
        ryTo(0);
      });

      /* ---------- scroll: the transformation (pinned, scrubbed) ---------- */
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .fromTo(portrait, { scale: 1.35 }, { scale: 1, ease: "none" }, 0)
        .fromTo(baseImg, { objectPosition: "72% 42%" }, { objectPosition: "50% 42%", ease: "none" }, 0)
        .fromTo(energyImg, { objectPosition: "72% 42%" }, { objectPosition: "50% 42%", ease: "none" }, 0)
        .fromTo(stage, { "--reveal": 18 } as gsap.TweenVars, { "--reveal": 24, ease: "none" }, 0)
        .to(copyRef.current, { yPercent: -20, opacity: 0, ease: "none" }, 0.05);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="top" className="relative overflow-hidden">
      <div className="relative h-[100svh] w-full">
        <div
          ref={stageRef}
          className="hero-stage absolute inset-0"
          style={{ "--mx": 28, "--my": 34, "--reveal": 18 } as CSSProperties}
        >
          <div ref={portraitRef} className="absolute inset-0">
            <Image
              src="/images/fusion.jpg"
              alt="Saad Bouhamou — SONIC RIDER, portrait inside the HJC RPHA 11 helmet"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "72% 42%" }}
            />
          </div>

          {/* charged twin revealed through the cursor mask */}
          <div ref={energyRef} className="hero-mask absolute inset-0" style={{ opacity: 1 }}>
            <Image
              src="/images/fusion.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover grayscale contrast-150 brightness-110"
              style={{ objectPosition: "72% 42%" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "var(--primary)", opacity: 0.7, mixBlendMode: "color" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "var(--primary)", opacity: 0.22, mixBlendMode: "screen" }}
            />
            {/* inner glow so the reveal reads on dark areas too */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle calc(var(--reveal, 18) * 1vmax) at calc(var(--mx, 50) * 1%) calc(var(--my, 40) * 1%), rgba(0,229,255,0.35) 0%, transparent 68%)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          {/* legibility gradients */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* copy layer */}
        <div ref={copyRef} className="relative z-10 flex h-full flex-col justify-end px-5 pb-10 pt-24 md:px-10 md:pb-14">
          <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.45em] text-accent-gold">
            Morocco · Since 2017
          </p>

          <h1 className="mt-4 font-display text-[clamp(3.2rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.88] tracking-tight">
            Sonic
            <br />
            <span className="text-primary">Rider</span>
          </h1>

          <p className="mt-5 max-w-md font-subdisplay text-sm font-bold uppercase tracking-[0.18em] md:text-base">
            Built by passion. Defined by speed.
          </p>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
            From the streets of Rabat to a journey shaped by motorcycles, creativity and the
            freedom of the ride.
          </p>

          <div className="mt-8 flex items-center justify-between gap-6">
            <a
              href="#philosophy"
              className="flex items-center gap-3 font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:text-foreground"
            >
              Scroll
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm">
                ↓
              </span>
            </a>
            <p className="hidden font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted sm:block">
              HJC RPHA 11 · Tracer 900
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
