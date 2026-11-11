/**
 * SONIC RIDER — Home (foundation placeholder).
 *
 * Day 1 of the technical sprint (2026-11-11).
 * Intentionally minimal BY DECISION: no Header / Footer / Hero yet —
 * the home design review is the next milestone (docs/ARCHITECTURE.md).
 * This page only proves the stack runs end-to-end:
 * Next.js + TypeScript + Tailwind + brand tokens + bundled Rubik font.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-muted">
        Welcome
      </p>

      <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-7xl">
        Sonic <span className="text-primary">Rider</span>
      </h1>

      <p className="max-w-md text-sm text-muted sm:text-base">
        High Adrenaline Motovlogging &amp; Media
      </p>

      <p className="rounded-full border border-border bg-surface px-4 py-1.5 text-[11px] uppercase tracking-widest text-muted">
        Foundation v0.1.0
      </p>
    </main>
  );
}
