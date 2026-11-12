# Hero & imagery assets — status and brief

## What the hero uses today

- **`public/images/fusion.jpg`** — the supplied 1254² composition (your face inside the
  HJC RPHA 11 + Sonic energy). It is used as **one** composition: the page opens focused
  on the human half and reveals the rest while scrolling; the cursor drives a "charged"
  mask (grayscale/blue twin + glow).
- Effect code: `src/components/hero-stage.tsx` + `.hero-mask` in `src/app/globals.css`.
- Scroll choreography: GSAP ScrollTrigger (pinned, scrubbed). Smooth scroll: Lenis.

## What is missing (requested — do not fake)

1. **ASSET B — clean portrait** (`photo profile(2).jpg` in the brief) is **not** in the
   project. With it, the hero can move from "reveal a charged version" to a true
   **human → Sonic transformation** (two aligned layers: face / fusion) instead of one
   composition.
2. **Bike photographs** — Aprilia SR 50, Honda Hornet 600, GSX-R 750 (+ Tracer 900).
   The journey chapters are typographic placeholders until the originals arrive.
3. Optional: **helmet-only transparent PNG** (floating-helmet moment) and a **3/4
   portrait angle** (parallax depth).

## Shoot brief (two aligned shots)

| # | Shot | Purpose |
|---|---|---|
| A | You, **no helmet**, facing the camera, neutral expression | base layer |
| B | **Same frame**, helmet on (visor down), same pose/position | reveal layer |
| C | Optional: same framing, 3/4 angle | parallax depth |

1. **Same camera position for A and B** — tripod, nothing moves between shots.
2. Distance ~1.5–2 m, **1× lens** (no ultra-wide).
3. Camera at **eye level**.
4. Framing: vertical 4:5 — top of the head ≈ 8% from the top edge, shoulders at the bottom.
5. Plain background (wall / open shade), no clutter, no strong patterns.
6. One soft light at ~45° in front — no on-camera flash.
7. **Lock exposure/focus** between the two shots.

## Wiring the final assets

1. Drop the files here: `public/images/hero-face.jpg` (A), `public/images/hero-helmet.jpg` (B).
2. In `hero-stage.tsx`, the base `<Image>` → `hero-face.jpg`; the masked `<Image>` →
   `hero-helmet.jpg`. Both keep the same `objectPosition` so the reveal lines up.
3. Bike photos: replace the typographic panels in `journey.tsx` with image panels
   (keep the same copy from `src/lib/content.ts`).
