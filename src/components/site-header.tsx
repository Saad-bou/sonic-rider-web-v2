"use client";

import { useState } from "react";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-foreground"
        >
          Sonic Rider
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-subdisplay text-[11px] font-semibold uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#socials"
            className="rounded-full bg-primary px-5 py-2.5 font-subdisplay text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Follow
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-border font-sans text-lg leading-none text-foreground md:hidden"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-black px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-subdisplay text-xs font-semibold uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
