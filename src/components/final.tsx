import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { socials } from "@/lib/content";

/** Section 08 — the final experience. The helmet returns, the story stays open. */
export function Final() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative flex min-h-[92svh] flex-col justify-end">
        <Image
          src="/images/fusion.jpg"
          alt="SONIC RIDER — the helmet"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
          style={{ objectPosition: "50% 28%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />

        <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-10 pt-28 md:px-10 md:pb-14">
          <Reveal>
            <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
              08 — The next chapter
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,7.2vw,6.4rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
              The journey
              <br />
              doesn&apos;t end <span className="text-primary">here.</span>
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/20 pt-7 md:flex-row md:items-center">
            <p className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-white/60">
              © 2026 SONIC RIDER · Morocco
            </p>

            <nav className="flex flex-wrap gap-6" aria-label="Social platforms">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
                >
                  {social.platform}
                </a>
              ))}
              <a
                href="#top"
                className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
              >
                Back to top ↑
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
