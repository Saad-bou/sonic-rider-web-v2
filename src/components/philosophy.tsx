"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATEMENT = "It was never just about the motorcycle.";
const SUPPORT =
  "It started with curiosity. It became a passion. And eventually, it became a part of who I am.";

/** Section 02 — the philosophy. Kinetic type with scroll-velocity skew. */
export function Philosophy() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const ctx = gsap.context(() => {
      const words = text.querySelectorAll<HTMLElement>("span[data-word]");

      gsap.from(words, {
        yPercent: 55,
        opacity: 0,
        stagger: 0.045,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: text, start: "top 82%" },
      });

      const skewTo = gsap.quickTo(text, "skewY", { duration: 0.45, ease: "power2" });
      let resetTimer: ReturnType<typeof setTimeout> | undefined;

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const skew = gsap.utils.clamp(-5, 5, -self.getVelocity() / 260);
          skewTo(skew);
          clearTimeout(resetTimer);
          resetTimer = setTimeout(() => skewTo(0), 120);
        },
      });

      return () => clearTimeout(resetTimer);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="border-y border-border bg-background">
      <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-44">
        <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
          02 — The philosophy
        </p>

        <h2
          ref={textRef}
          className="mt-10 max-w-[1150px] font-display text-[clamp(2.2rem,6.4vw,6rem)] font-extrabold uppercase leading-[0.98] tracking-tight"
        >
          {STATEMENT.split(" ").map((word, index) => (
            <span key={`${word}-${index}`} data-word className="inline-block">
              {word === "motorcycle." ? (
                <span className="text-primary">{word}</span>
              ) : (
                word
              )}
              &nbsp;
            </span>
          ))}
        </h2>

        <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {SUPPORT}
        </p>
      </div>
    </section>
  );
}
