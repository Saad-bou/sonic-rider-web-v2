import Image from "next/image";
import { Reveal } from "@/components/reveal";

/** Section 06 — off the road. The human side, calmly. */
export function OffRoad() {
  return (
    <section id="off-road" className="border-b border-border">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/fusion-portrait.jpg"
                alt="Portrait of Saad Bouhamou"
                fill
                sizes="(max-width: 768px) 92vw, 40vw"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
                06 — Off the road
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
                The helmet
                <br />
                comes off.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
                Born in Rabat. Riding since 2017. Filming since 2022. Before the engines,
                the edits and the night runs, it was just a kid from the city who loved
                being on two wheels.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
                SONIC RIDER is the name that passion grew into — not a character, and not a
                costume.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
