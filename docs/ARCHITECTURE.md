# SONIC RIDER web — Architecture & Continuation Guide

Whoever picks this up next (human or AI agent): **read this file first.**

## 1. What this project is

The technical foundation of the future SONIC RIDER website — a content-first brand
site (motorcycle culture / street media) with a **future** apparel commerce phase.
Commerce is explicitly out of scope until the brand and audience are ready.

**Decisions already taken (do not re-litigate without a reason):**

- **Next.js 15 App Router + TypeScript strict**, server components by default.
- **Tailwind CSS v3** (classic `tailwind.config.ts`, as specified in the sprint plan).
  Migrating to v4 would be a conscious future decision, not an accident to fix.
- **Design tokens live in CSS variables** (`src/app/globals.css` `:root`) and are
  mapped in `tailwind.config.ts`. Changing the brand = changing variables,
  not hunting hex codes through components. Typography is **3-tier**
  (`font-display` Hyperwave / `font-subdisplay` Luktao / `font-sans` Rubik) —
  faces pending licensing alias Rubik until swapped in (docs/BRAND.md §2).
- **Motion stack:** GSAP + ScrollTrigger (pinning, scrubbed timelines) + Lenis
  (smooth scroll), client components only, always cleaned up in `useEffect`, always
  respecting `prefers-reduced-motion`.
- **Headless WordPress** (REST API) is the planned CMS — a later milestone, not started.
- No paid services. No secrets in client code. `NEXT_PUBLIC_*` only for values that
  are public by definition. No second backend unless a real need appears.

## 2. Current state (home v2 — 2026-11-13)

**Done:** project scaffold, strict TS, Tailwind + brand tokens, Rubik bundled (OFL),
**home v2** — 8-section immersive page: autonomous transformation-wave hero (two transparent
cut-outs on one locked square, one SVG-mask blob driven by a single GSAP ticker; no layer
transforms) and pinned scroll transformation (GSAP ScrollTrigger + Lenis smooth scroll), kinetic
philosophy statement, pinned horizontal journey (2017→2026), editorial road gallery with
real frames, creator section, off-road portrait, community rows, full-screen final.
Progressive enhancement + prefers-reduced-motion respected.

**Intentionally not done:** Journal/CMS pages, ESLint/Prettier, WordPress integration,
SEO infrastructure, tests, 2.5D helmet pieces (ASSET A + the 10 PNG cut-outs missing —
see `docs/HERO-SECTION-25D-SPEC.md` and `docs/HOME-HERO-ASSETS.md`), bike photographs.

## 3. Planned information architecture (agreed, not built)

| Route | Purpose |
|---|---|
| `/` | Home — cinematic hero (design pending) |
| `/journal` | Editorial list (WordPress-backed) |
| `/journal/[slug]` | Article detail |
| `/videos` | Video index (Shorts / long-form embeds) |
| `/about` | Brand / contact |

**Content model** (single type for the first CMS vertical slice): **Journal** —
title, slug, excerpt, cover image, body, date. WordPress REST + **zod** response
validation, fetched server-side only.

## 4. Next steps (recommended order)

1. ESLint + Prettier + commit conventions (small).
2. Layout components — Header (logo, nav, social links: YouTube / Instagram / TikTok),
   Footer, Hero — **after the home design is approved**.
3. Local WordPress (Local or Laragon, timebox 2h) + Journal content type.
4. `src/lib/wp.ts` API service + zod schemas + ISR revalidation.
5. Technical SEO: dynamic metadata, canonicals, `robots.ts`, `sitemap.ts`,
   Open Graph, JSON-LD (Organization + WebSite).
6. QA: production build, responsive pass (390 / 768 / 1280), secrets check.
7. Backups: WordPress XML export + DB dump + repo zip.

## 5. Conventions

- Import alias: `@/*` → `src/*`.
- Components in `src/components/`; server-side utilities in `src/lib/`.
- Fonts: `next/font/local` from `src/fonts/` only — no CDN font links.
- Colors: never hardcode hex in components — use token classes
  (`bg-surface`, `text-primary`, `border-border`, ...).
- Commits: conventional style (`feat:`, `fix:`, `docs:`, `chore:`).
- Environment: copy `.env.example` → `.env.local`. `.env*` is git-ignored
  (except the example file).

## 6. Verification

```bash
npm run build   # must exit clean (TypeScript strict)
npm start       # production server
```

The welcome page must render "SONIC RIDER" on `http://localhost:3000`.
