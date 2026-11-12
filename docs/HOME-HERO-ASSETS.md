# Home hero — asset brief (the face ⇄ helmet reveal)

The hero effect is **two aligned layers + a radial mask that follows the cursor**.
No maths on your side: the "fusion" is alignment. If the two shots line up, the
seam disappears and the reveal looks like one continuous image changing under
the cursor.

## What to shoot (2 photos, ideally 3)

| # | Shot | Purpose |
|---|---|---|
| A | You, **no helmet**, facing the camera, neutral expression | base layer |
| B | **Same frame**, helmet on (visor down), same pose/position | reveal layer |
| C | Optional: same framing, 3/4 angle | future parallax depth |

## Technical rules (phone is fine)

1. **Same camera position for A and B.** Tripod or a fixed support. If the
   camera moves between shots, the reveal breaks.
2. **Distance ~1.5–2 m, 1× lens** (avoid ultra-wide — it distorts the face).
3. **Eye level.** Camera at your eyes, not above/below.
4. **Framing:** vertical 4:5. Top of the head ≈ 8% from the top edge,
   shoulders reach the bottom edge. Leave margin around the head — the mask
   needs room to travel.
5. **Background:** plain wall or open shade — no clutter, no strong patterns.
   Dark or neutral grey works best with our black/blue palette.
6. **Lighting:** one soft source at ~45° in front of you (window or a lamp).
   No on-camera flash. Same light for both shots.
7. **Lock exposure/focus** between shots (tap-and-hold on phones).
8. **Helmet shot:** visor down for the main layer; shoot one extra with the
   visor up if you want a future third reveal step.

## How to wire the photos in

1. Drop the files here:
   - `public/images/hero-face.jpg` (shot A)
   - `public/images/hero-helmet.jpg` (shot B)
2. In `src/components/hero.tsx`, the two `<Image>` components use
   `/images/hero.jpg` today (placeholder = your night photo). Change:
   - base layer → `/images/hero-face.jpg`
   - reveal layer → `/images/hero-helmet.jpg`
3. Adjust the mask radius (`230px`) if the heads are framed differently.

## Why this works without "math"

The mask is a CSS `radial-gradient` moved by the cursor. Both images are the
same size in the same box, so the revealed area shows the helmet exactly where
your head is. The only failure mode is misalignment between A and B —
that is why the tripod and the fixed framing matter more than the gear.
