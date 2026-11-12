const ITEMS = ["SONIC RIDER", "RIDE · RECORD · REPEAT", "CASABLANCA", "HIGH ADRENALINE"];

/** Infinite marquee strip — pure CSS animation (globals.css). */
export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-background py-3.5">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-4 px-6 font-subdisplay text-[10px] font-semibold uppercase tracking-[0.35em] text-muted"
              >
                {item}
                <span className="text-primary">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
