import Image from "next/image";
import { Reveal } from "@/components/reveal";

const panels = [
  {
    label: "On the bike",
    title: "Night runs & engine sound",
    copy: "POV, exhaust notes, empty roads.",
    image: "/images/night.jpg",
    alt: "Two riders at night in front of an illuminated tower",
  },
  {
    label: "Off the bike",
    title: "Street days & court nights",
    copy: "Fits, friends, the city.",
    image: "/images/court.jpg",
    alt: "Rider in full gear holding a basketball on a night court between two bikes",
  },
];

/** On / off the bike — the reference's two-world split, with our own photos. */
export function Split() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
            04 — Two worlds
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
            On the bike.
            <br />
            Off the bike.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:mt-20">
          {panels.map((panel, index) => (
            <Reveal key={panel.label} delay={index * 120} className="h-full">
              <article className="group relative flex h-[58vh] min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl border border-border">
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 50vw"
                  className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="relative p-6 md:p-8">
                  <p className="font-subdisplay text-[10px] font-bold uppercase tracking-[0.35em] text-accent-chaos">
                    {panel.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-3xl">
                    {panel.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{panel.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
