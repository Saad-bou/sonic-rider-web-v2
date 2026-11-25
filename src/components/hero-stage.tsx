"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroMeta } from "@/lib/content";

/**
 * 01 — HERO / AUTONOMOUS LIVING TRANSFORMATION
 *
 * Master Architecture:
 * - Two 500×500 RGBA cut-outs on a single, locked, bottom-anchored square stage.
 *   `object-contain object-bottom` guarantees shoulder-to-shoulder alignment
 *   and anchors the silhouette against the hero base.
 *
 * The Living Wave Phenomenon:
 * - Does NOT depend on mouse movement. The wave has its own autonomous life:
 *   1. Cinematic Introduction: ~0.8s after entering, an energetic wave lifts
 *      across the helmet and eyes, unveiling Sonic's charged twin.
 *   2. Living Ambient State: After the intro pass, the wave settles into a slow,
 *      pulsing, organic breathing motion (phase-shifted harmonic sines) across the
 *      central face region. It never turns into a static mask.
 *   3. User Influence (Desktop + Mobile): Cursor move or finger drag smoothly pulls
 *      and magnifies the wave via damped physics. When released, the wave springs
 *      back smoothly into its autonomous living cycle without jarring cuts.
 *
 * Performance & Mobile Compatibility:
 * - Hardware-accelerated CSS radial mask variables (--wx, --wy, --wr, --wx2, --wy2, --wr2).
 * - Zero heavy SVG filters, zero DOM path re-parsing on every frame.
 * - Works natively on iOS Safari, Android Chrome, tablet, and desktop viewports.
 * - Reduced motion: fully disables JavaScript animation and presents a clean, static rider.
 */

const INTRO_DELAY = 0.8; // seconds before intro wave starts
const INTRO_DURATION = 2.4; // seconds for cinematic pass

const easeInOutSine = (p: number) => -(Math.cos(Math.PI * p) - 1) / 2;

export function HeroStage() {
  const rootRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const uiRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const ui = uiRef.current;
    const hint = hintRef.current;
    if (!root || !stage || !ui) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    /* ---------------- Single Autonomous Wave State ---------------- */
    // Position coordinates in percentage of stage (0 to 100)
    const wave = {
      x: 50,
      y: 45,
      r: 0,
      vx: 0,
      vy: 0,
      vr: 0,
    };

    // Target aim point
    const aim = {
      x: 50,
      y: 45,
      full: false,
    };

    let phase = 0;
    let elapsed = 0;
    let introDone = false;
    let engaged = false;
    let hinted = false;

    const hintOut = () => {
      if (hinted || !hint) return;
      hinted = true;
      gsap.to(hint, { autoAlpha: 0, y: 4, duration: 0.45, ease: "power2.out" });
    };

    /* ---------------- Unified Pointer & Touch Input ---------------- */
    const updateInputPoint = (clientX: number, clientY: number) => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const px = ((clientX - rect.left) / rect.width) * 100;
      const py = ((clientY - rect.top) / rect.height) * 100;

      aim.x = Math.max(10, Math.min(90, px));
      aim.y = Math.max(15, Math.min(85, py));
      aim.full = true;
      engaged = true;
      introDone = true;
      hintOut();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        updateInputPoint(e.clientX, e.clientY);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updateInputPoint(touch.clientX, touch.clientY);
    };

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updateInputPoint(touch.clientX, touch.clientY);
    };

    const release = () => {
      engaged = false;
      aim.full = false;
    };

    /* ---------------- Single High-Performance Ticker ---------------- */
    const tick = (_time: number, delta: number) => {
      const dt = Math.min(0.05, delta / 1000);
      elapsed += dt;
      phase += dt;

      // Base radius in pixels (~35% of stage width)
      const stageW = stage.offsetWidth || 500;
      const baseR = stageW * 0.35;

      /* 1. Aim Target: Intro -> Autonomous Drift -> User Input */
      if (!introDone) {
        if (elapsed < INTRO_DELAY) {
          aim.x = 50;
          aim.y = 58;
          aim.full = false;
        } else if (elapsed < INTRO_DELAY + INTRO_DURATION) {
          // Cinematic wave rises from jawline (y: 60) across eyes to forehead (y: 35)
          const p = easeInOutSine((elapsed - INTRO_DELAY) / INTRO_DURATION);
          aim.x = 50 + 8 * Math.sin(p * Math.PI);
          aim.y = 58 - 24 * p;
          aim.full = true;
        } else {
          introDone = true;
        }
      }

      if (introDone && !engaged) {
        // Living, continuous ambient motion (phase-shifted Lissajous curves)
        // Travels gently across eyes and muzzle without settling into a static circle
        aim.x = 50 + 6.5 * Math.sin(phase * 0.65) + 3.0 * Math.cos(phase * 1.1);
        aim.y = 44 + 5.0 * Math.sin(phase * 0.85 + 1.2);
        aim.full = false;
      }

      /* 2. Damped Spring Physics: Smoothly follows aim with inertia */
      const springK = engaged ? 42 : 10;
      const damping = Math.exp(-dt * (engaged ? 10 : 3.6));

      wave.vx = (wave.vx + (aim.x - wave.x) * springK * dt) * damping;
      wave.vy = (wave.vy + (aim.y - wave.y) * springK * dt) * damping;
      wave.x += wave.vx * dt;
      wave.y += wave.vy * dt;

      /* 3. Radius Breathing & Expansion */
      // Living breathing modulation: subtle natural expansion and contraction
      const breathing = 0.88 + 0.08 * Math.sin(phase * 1.25) + 0.04 * Math.cos(phase * 0.7);
      let targetRadius = 0;

      if (elapsed >= INTRO_DELAY) {
        targetRadius = introDone && !aim.full ? baseR * breathing : baseR * 1.1;
      }

      wave.vr = (wave.vr + (targetRadius - wave.r) * 36 * dt) * Math.exp(-dt * 6.5);
      wave.r += wave.vr * dt;

      /* 4. Write to Stage CSS Custom Properties */
      // Primary lobe
      stage.style.setProperty("--wx", wave.x.toFixed(2));
      stage.style.setProperty("--wy", wave.y.toFixed(2));
      stage.style.setProperty("--wr", Math.max(0, wave.r).toFixed(1));

      // Secondary trailing satellite lobe (phase-lagged fluid mass)
      const lagX = wave.x - wave.vx * 0.06 + 3.0 * Math.sin(phase * 0.9);
      const lagY = wave.y - wave.vy * 0.06 - 3.5 + 2.5 * Math.cos(phase * 1.1);
      const lagR = Math.max(0, wave.r * 0.84);

      stage.style.setProperty("--wx2", lagX.toFixed(2));
      stage.style.setProperty("--wy2", lagY.toFixed(2));
      stage.style.setProperty("--wr2", lagR.toFixed(1));
    };

    gsap.ticker.add(tick);

    // Desktop pointer listeners
    root.addEventListener("pointermove", onPointerMove, { passive: true });
    root.addEventListener("pointerleave", release, { passive: true });

    // Mobile touch listeners (explicitly bound for rock-solid touch response)
    root.addEventListener("touchstart", onTouchStart, { passive: true });
    root.addEventListener("touchmove", onTouchMove, { passive: true });
    root.addEventListener("touchend", release, { passive: true });
    root.addEventListener("touchcancel", release, { passive: true });

    /* ---------------- Scroll Integration ---------------- */
    const ctx = gsap.context(() => {
      gsap.to(stage, {
        yPercent: -6,
        scale: 1.04,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: 0.6 },
      });

      gsap.to(ui, {
        autoAlpha: 0,
        y: -24,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "55% top", scrub: true },
      });
    }, root);

    return () => {
      gsap.ticker.remove(tick);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", release);
      root.removeEventListener("touchstart", onTouchStart);
      root.removeEventListener("touchmove", onTouchMove);
      root.removeEventListener("touchend", release);
      root.removeEventListener("touchcancel", release);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      aria-labelledby="hero-title"
      className="hero relative isolate flex h-[100svh] min-h-[560px] w-full items-end justify-center overflow-hidden bg-[#050507]"
    >
      <h1 id="hero-title" className="sr-only">
        SONIC RIDER — Moroccan motorcycle culture, motovlogging and street media
      </h1>

      {/* Atmosphere: contour field + blue energy bloom + cinematic grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-contours" />
        <div className="hero-glow" />
        <div className="hero-grain" />
      </div>

      {/* Subject Stage: One locked square, dual transparent layers, bottom-grounded */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div
          ref={stageRef}
          className="hero-stage"
          style={
            {
              "--wx": 50,
              "--wy": 45,
              "--wr": 0,
              "--wx2": 50,
              "--wy2": 42,
              "--wr2": 0,
            } as CSSProperties
          }
        >
          <div className="hero-portrait">
            {/* Layer 1: Rider wearing HJC RPHA 11 (Base LCP, grounded) */}
            <div className="hero-layer">
              <Image
                src="/hero/rider-helmet.webp"
                alt="SONIC RIDER wearing the HJC RPHA 11 helmet"
                fill
                priority
                sizes="(max-width: 768px) 112vw, 80svh"
                className="object-contain object-bottom select-none"
                draggable={false}
              />
            </div>

            {/* Layer 2: Sonic Transformation Wave (Living autonomous envelope) */}
            <div className="hero-reveal" aria-hidden>
              <div className="hero-layer">
                <Image
                  src="/hero/sonic-layer.webp"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 112vw, 80svh"
                  className="object-contain object-bottom select-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Grounded bottom dissolve into page floor */}
            <div aria-hidden className="hero-bottom-fade" />
          </div>
        </div>
      </div>

      {/* HUD Chrome: Metadata card & contextual hint */}
      <div ref={uiRef} className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute bottom-5 left-5 md:bottom-9 md:left-9">
          <div className="border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-sm md:px-5 md:py-4">
            <p className="font-subdisplay text-[9px] font-bold uppercase tracking-[0.42em] text-muted md:text-[10px]">
              {heroMeta.card.label}
            </p>
            <div className="my-2 h-px w-full bg-white/10" />
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-foreground md:text-base">
              {heroMeta.card.value}
            </p>
          </div>
        </div>

        <p className="absolute bottom-6 right-5 hidden font-subdisplay text-[9px] uppercase tracking-[0.32em] text-muted sm:block md:bottom-9 md:right-9 md:text-[10px]">
          {heroMeta.spec}
        </p>

        <p
          ref={hintRef}
          className="hero-hint absolute bottom-28 left-1/2 -translate-x-1/2 whitespace-nowrap font-subdisplay text-[9px] uppercase tracking-[0.34em] text-white/60 md:bottom-9 md:text-[10px]"
        >
          <span className="hint-hover">{heroMeta.hint.pointer}</span>
          <span className="hint-touch">{heroMeta.hint.touch}</span>
        </p>
      </div>
    </section>
  );
}
