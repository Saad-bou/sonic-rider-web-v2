import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { garage } from "@/lib/content";

/** Garage — the "Hall of Fame" grid, built from type instead of photos. */
export function Garage() {
  return (
    <section id="garage" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
            03 — The garage
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
            Every machine left a mark.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Four bikes, four chapters — from a 50cc Aprilia to a 900cc Tracer. No showroom,
            just the machines that made the story.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {garage.map((bike, index) => (
            <Reveal key={bike.name} delay={index * 90} className="h-full">
              <article className="group relative flex h-full min-h-[180px] flex-col justify-between rounded-2xl border border-border bg-background p-5 transition-colors duration-300 hover:border-primary md:min-h-[220px]">
                <div className="flex items-start justify-between">
                  <span className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted">
                    {bike.index}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-extrabold uppercase leading-[0.95] tracking-tight">
                    {bike.name}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 font-subdisplay text-[10px] uppercase tracking-[0.25em] text-muted">
                    <span>{bike.years}</span>
                    <span className="text-primary">·</span>
                    <span>{bike.cc}</span>
                  </p>
                  <p className="mt-3 text-sm text-muted">{bike.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
