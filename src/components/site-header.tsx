"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { navLinks, socials } from "@/lib/content";

/**
 * Site chrome — modelled on the landonorris.com header placement:
 * two-line wordmark left, one pill CTA + a square menu button right.
 * The links live in the overlay so the hero keeps a single visual axis.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={
          scrolled
            ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "fixed inset-x-0 top-0 z-50 border-b border-transparent"
        }
      >
        <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between px-5 md:h-[76px] md:px-9">
          <a
            href="#top"
            aria-label="SONIC RIDER — back to top"
            className="flex flex-col leading-[0.86]"
          >
            <span className="font-display text-[15px] font-black uppercase tracking-[0.24em] text-foreground md:text-[17px]">
              Sonic
            </span>
            <span className="font-display text-[15px] font-black uppercase tracking-[0.24em] text-primary md:text-[17px]">
              Rider
            </span>
          </a>

          <div className="flex items-center gap-2.5">
            <a
              href="#community"
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 font-subdisplay text-[10px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90 md:gap-2 md:px-5 md:text-[11px]"
            >
              Follow
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </a>

            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/20 text-foreground transition-colors hover:border-white/45 md:h-[42px] md:w-[42px]"
            >
              <span
                className={`h-px w-[18px] bg-current transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-[18px] bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* full-screen menu */}
      <div
        id="site-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] overflow-hidden bg-[#050507] transition-[opacity,visibility] duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div aria-hidden className="hero-contours absolute inset-0 opacity-40" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 78% 18%, rgba(0,71,255,0.24), transparent 68%)",
          }}
        />

        <div className="relative flex h-full flex-col px-5 pt-6 md:px-9">
          <div className="flex items-center justify-between">
            <span className="font-display text-[15px] font-black uppercase tracking-[0.24em] md:text-[17px]">
              Sonic <span className="text-primary">Rider</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-foreground transition-colors hover:border-white/45 md:h-[42px] md:w-[42px]"
            >
              <span className="relative block h-[18px] w-[18px]">
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav className="mt-auto flex flex-col gap-1 pb-10 md:gap-2" aria-label="Primary">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-white/10 py-3 md:gap-8 md:py-4"
              >
                <span className="font-subdisplay text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
                  0{index + 1}
                </span>
                <span className="font-display text-[11vw] font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-[5.2vw]">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mb-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-subdisplay text-[10px] font-bold uppercase tracking-[0.24em] text-muted transition-colors hover:text-foreground"
              >
                <social.icon className="h-3.5 w-3.5" strokeWidth={2} />
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
