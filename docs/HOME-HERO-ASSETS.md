# Hero & imagery assets — status and brief

## What the hero uses today

| File | Role |
|---|---|
| `public/hero/rider-helmet.webp` (500², RGBA) | Base cut-out — the rider in the HJC RPHA 11. `priority` / LCP. |
| `public/hero/sonic-layer.webp` (500², RGBA) | The charged Sonic twin, revealed by the cursor wave. |
| `public/hero/contours.svg` | Faint electric-blue topographic field behind the portrait. |

Effect code: `src/components/hero-stage.tsx` + the `Hero — wave unmask` block in
`src/app/globals.css`.

> **Asset note (2026-11-24):** the supplied `sonic-layer.webp` still had an opaque
> white studio background. It was re-keyed to RGBA (white flood-fill from the
> borders, 1px feather, rim-only de-fringe so the eye whites and muzzle keep their
> colour). If the art is re-exported, keep the alpha channel — an opaque white
> backdrop would sit as a rectangle on the contour field.

## Registration (do not change casually)

- **One locked square stage** (`aspect-ratio: 1`), both layers `fill` +
  `object-contain object-center`. Both files are 500×500 with the subject in the
  same place, so the two layers are registered **by construction** — no scale, no
  offset, no per-breakpoint nudging.
- **Neither layer is ever transformed.** There is no parallax, no tilt, no
  translate: the shoulders stay grounded and the silhouettes cannot drift apart.
  All motion lives in the mask.
- The earlier `scale(0.8)` registration belonged to the old 1254²/1024² pair. It
  is **not** used any more; forcing a scale here would break the eye line.

## The wave (one system, one ticker)

The wave is **one SVG mask** (`#hero-wave`, `maskContentUnits="objectBoundingBox"`)
holding four feathered rings of the same blob. A single `gsap.ticker` callback
rewrites their `d` each frame:

- **Shape:** 12 vertices around the centre; each radius is
  `1 + 0.055·sin(3θ + t·0.55) + 0.03·sin(5θ − t·0.37 + 1.7)` — two slow, drifting
  harmonics, so the silhouette keeps deforming on its own. The ring is closed
  with Catmull-Rom → cubic Bézier.
- **Centre:** a damped spring towards its target — the pointer while engaged, a
  slow orbit (±4.5% / ±3.5%, ~30s) when alone. Responsive on input, heavy when
  idle.
- **Radius:** spring as well. Full `0.34 × stage` while driven, breathing around
  `0.6 × R` when alone. Before the intro it is 0, so the page opens on the rider.
- **Stretch:** the blob leans up to ~16% along its travel direction — the
  “surface stretches and releases” feel from the reference.
- **Feather:** four rings (radii ×1 / ×1.02 / ×1.045 / ×1.08, alphas .9 / .34 /
  .16 / .08) give a soft edge with no blur filter — a filter here would
  re-rasterise every frame.

## Lifecycle (the wave is never hidden behind a hover)

1. **closed** — page opens on the rider; nothing moves for 0.9s.
2. **intro pass** (~2.3s) — the wave widens to full and travels across the face
   (jaw → temple → jaw), the “helmet lifts off” gesture of the reference clip.
3. **ambient** — it settles to the breathing orbit and keeps moving forever.
4. **pointer / touch** — takes the target and full width for as long as the input
   lasts, then releases back into the ambient drift. Touch is the same pointer
   path (down + drag; nothing is `preventDefault`-ed, so scrolling stays free).
5. **scroll** — the stage sinks and the chrome fades (ScrollTrigger), unchanged.
6. **reduced motion** — no JS at all: the mask is empty, the rider is static, the
   hint is hidden.

## Still missing / next

1. A **4:5 or 16:9 export** of both cut-outs at ~1500px would remove the browser
   upscale on large screens (today the 500² art is drawn up to ~720px).
2. The **2.5D piece scatter** from `docs/HERO-SECTION-25D-SPEC.md` is still blocked
   on the A/B shoot and the 10 helmet-piece PNGs. The wave reveal is the shipped
   behaviour until those exist — do not fake the scatter with rectangular cut-outs.
3. Bike photographs for `journey.tsx` (chapters are still set in type).
