import { Reveal } from "@/components/reveal";
import { socials } from "@/lib/content";

/** Socials — three platforms, one ride. */
export function Socials() {
  return (
    <section id="socials" className="border-b border-border">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
            05 — Follow the ride
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
            The ride continues daily.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            New videos, night runs and behind-the-scenes — pick your platform.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <Reveal key={social.platform} delay={index * 90} className="h-full">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-primary"
                >
                  <div>
                    <p className="font-subdisplay text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
                      {social.platform}
                    </p>
                    <p className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight">
                      {social.handle}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
