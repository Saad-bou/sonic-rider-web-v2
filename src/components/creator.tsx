import { Reveal } from "@/components/reveal";
import { socials } from "@/lib/content";

/** Section 05 — the creator: TikTok first, YouTube from 2022. No metrics. */
export function Creator() {
  return (
    <section id="creator" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
              05 — The creator
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
              One camera.
              <br />
              One road.
              <br />
              <span className="text-primary">Every night.</span>
            </h2>
          </Reveal>

          <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
            <p className="text-sm leading-relaxed text-muted md:text-base">
              It started with clips on TikTok — the ride, the engine, the city at night. In
              2022, YouTube joined: longer rides, longer stories. Same rider, same road —
              a second way to tell it.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-full border border-border px-4 py-2.5 transition-colors hover:border-primary"
                  >
                    <Icon className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-primary" aria-hidden="true" />
                    <span className="font-subdisplay text-[10px] uppercase tracking-[0.25em]">
                      {social.platform}
                    </span>
                    <span className="font-subdisplay text-[10px] uppercase tracking-[0.18em] text-muted">
                      {social.handle}
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
