import { Reveal } from "@/components/reveal";
import { socials } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-subdisplay text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold">
            06 — The next chapter
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,7vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-tight">
            Always chasing
            <br />
            the next <span className="text-primary">ride.</span>
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted">
            © 2026 SONIC RIDER · Casablanca, Morocco
          </p>

          <nav className="flex flex-wrap gap-6" aria-label="Social platforms">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:text-foreground"
              >
                {social.platform}
              </a>
            ))}
            <a
              href="#top"
              className="font-subdisplay text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:text-foreground"
            >
              Back to top ↑
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
