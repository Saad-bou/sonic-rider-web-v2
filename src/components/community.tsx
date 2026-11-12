import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { socials } from "@/lib/content";

/** Section 07 — the community. No counts, no invented metrics. Just the doors. */
export function Community() {
  return (
    <section id="community" className="border-b border-border">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
            07 — The community
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.6vw,4.6rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
            Ride with us.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <Reveal key={social.platform} delay={index * 80}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-border py-7 transition-colors hover:bg-primary md:py-9"
                >
                  <div className="flex items-center gap-5 md:gap-8">
                    <Icon
                      className="h-5 w-5 text-muted transition-colors group-hover:text-white"
                      aria-hidden="true"
                    />
                    <span className="font-display text-2xl font-extrabold uppercase tracking-tight transition-colors group-hover:text-white md:text-4xl">
                      {social.platform}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="hidden font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted transition-colors group-hover:text-white/80 sm:block">
                      {social.handle}
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
