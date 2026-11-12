import { Reveal } from "@/components/reveal";
import { timeline } from "@/lib/content";

/** Story — the introduction: who is behind SONIC RIDER, bike by bike. */
export function Story() {
  return (
    <section id="story" className="border-b border-border">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
            02 — The story
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
            Seven years.
            <br />
            Four bikes.
            <br />
            <span className="text-primary">One road.</span>
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Born in Rabat. Riding since 2017, filming since 2022. From a 50cc Aprilia to a
            900cc Tracer — every machine wrote a chapter. In 2024 the story stopped. In 2026
            it picks up again.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {timeline.map((entry, index) => (
            <Reveal key={`${entry.year}-${entry.title}`} delay={index * 60}>
              <div className="grid grid-cols-[74px_1fr] items-baseline gap-x-5 gap-y-2 border-t border-border py-7 md:grid-cols-[170px_1fr_auto] md:gap-x-10 md:py-9">
                <span className="font-display text-2xl font-extrabold tracking-tight text-primary md:text-4xl">
                  {entry.year}
                </span>
                <div>
                  <h3 className="font-subdisplay text-sm font-bold uppercase tracking-[0.08em] md:text-xl">
                    {entry.title}
                    <span className="ml-3 font-sans text-[11px] font-normal normal-case tracking-normal text-muted">
                      {entry.subtitle}
                    </span>
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{entry.note}</p>
                </div>
                <span className="hidden font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted md:block">
                  {entry.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
