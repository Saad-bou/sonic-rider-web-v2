/**
 * SONIC RIDER — Home (foundation placeholder).
 *
 * Day 1 of the technical sprint (2026-11-11) · tokens v2.
 * Intentionally minimal BY DECISION: no Header / Footer / Hero yet —
 * the home design review is the next milestone (docs/ARCHITECTURE.md).
 * This page proves the stack + the full token system end-to-end:
 * Next.js + TypeScript + Tailwind + palette v2 + 3-tier type roles
 * (display / subdisplay / sans) + bundled Rubik font.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      {/* subdisplay role — eyebrow (future: section labels, taglines) */}
      <p className="font-subdisplay text-xs font-semibold uppercase tracking-[0.4em] text-accent-gold">
        Welcome
      </p>

      {/* display role — hero statement (future: page H1) */}
      <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-7xl">
        Sonic <span className="text-primary">Rider</span>
      </h1>

      {/* subdisplay role — brand tagline */}
      <p className="font-subdisplay max-w-md text-sm text-muted sm:text-base">
        High Adrenaline Motovlogging &amp; Media
      </p>

      {/* accent palette check — gold / emerald / chaos / speed */}
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-chaos" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-speed" />
      </div>

      {/* sans role — UI metadata */}
      <p className="rounded-full border border-border bg-surface px-4 py-1.5 text-[11px] uppercase tracking-widest text-muted">
        Foundation v0.1.0
      </p>
    </main>
  );
}
