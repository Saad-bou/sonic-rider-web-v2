# SONIC RIDER — Brand Reference (web)

Single source of truth for the website's brand tokens.
**v2 — 2026-11-11** (palette v2 + 3-tier type roles). Any change here must be
mirrored in `src/app/globals.css` (`:root`) and, for new tokens, in
`tailwind.config.ts`.

## 1. Palette

### 1.1 Official brand values

| Token | Hex | Role | Rules |
|---|---|---|---|
| `--primary` | `#0047FF` | Electric blue — brand signature | Large text (≥24px, or ≥18.7px bold) and UI graphics only: 3.3:1 on black — **not** for body copy. White text on it = 6.3:1 ✓ (buttons OK). |
| `--background` | `#000000` | Black — page background | Dark-first site. |
| `--foreground` | `#FFFFFF` | White — main text | 21:1 on black. |

### 1.2 Technical neutrals (dark-theme scaffolding — replaceable)

| Token | Hex | Role |
|---|---|---|
| `--surface` | `#0E0E12` | Cards / panels — a hair above pure black |
| `--muted` | `#9CA3AF` | Secondary text, captions, metadata (7.6:1 ✓) |
| `--border` | `#1E1E26` | Hairlines, dividers |
| `--primary-foreground` | `#FFFFFF` | Text on primary surfaces |

### 1.3 Accent palette — "arcade energy" layer

Sonic-era *vibe* without any Sega/Sonic artwork or marks (colour palettes are
not protectable; logos and characters are — see §3). Use as accents only:
**≤10% of any screen**, never as the dominant surface.

| Token | Hex | Association | Use for |
|---|---|---|---|
| `--accent-gold` | `#FFC800` | Ring gold | Badges, eyebrows, highlights (13.5:1 on black ✓) |
| `--accent-emerald` | `#00C853` | Green Hill / emerald | Success states, "GO" cues (9.4:1 ✓) |
| `--accent-chaos` | `#00E5FF` | Chaos-emerald cyan | Glow accents, hover states, tags (13.7:1 ✓) |
| `--accent-speed` | `#FF3B30` | Shoe red / speed | Alerts, energy marks (5.9:1 ✓ — use sparingly) |

## 2. Typography — 3 tiers by role, not by preference

Assignment = **importance of the text + its future position in the page**.
The tokens are already wired (`--font-display`, `--font-subdisplay`,
`--font-rubik`); the faces below are the targets.

| Tier | Target face | Where it goes (position) | Where it must NOT go |
|---|---|---|---|
| **display** | **Hyperwave** *(Sail Studios, commercial — licensing pending)* | Hero title, page H1, campaign statements, big numbers. 1–6 words, large sizes (40–96px). | Nav, buttons, body, tables — brush faces break at small sizes. |
| **subdisplay** | **Luktao** *(source/licensing to confirm — likely Canva)* | Eyebrows/labels (11–13px, wide tracking), section subtitles (20–28px), taglines, story captions. | Long paragraphs (more than ~2 lines). |
| **sans** | **Rubik** *(bundled, variable 300–900, SIL OFL 1.1)* | Everything functional: body copy (15–17px, line-height ≥1.6), UI, nav, buttons, forms, metadata. | — it is the safe default for everything. |

**Current behavior:** `--font-display` and `--font-subdisplay` alias Rubik, so
the 3-tier structure is already live and testable. Swapping a face in is a
one-line change (`globals.css`) plus a `localFont` registration
(`layout.tsx`) — no component edits.

**To add Hyperwave or Luktao once licensed:**

1. Obtain a **web-use license**. (Hyperwave: Sail Studios — sold via
   MyFonts / Envato; a free "Hyperwave One" variant exists but its license must
   be verified before embedding. Never download from aggregator sites.)
2. Put the `.woff2`/`.ttf` in `src/fonts/`.
3. Register a second `next/font/local` in `src/app/layout.tsx` with its own
   `variable` (e.g. `--font-hyperwave` / `--font-luktao`).
4. Repoint `--font-display` / `--font-subdisplay` in `src/app/globals.css`.

**Typography notes:** brush/script display faces (Hyperwave) need generous
line-height and short strings — review any forced `uppercase` treatment when
it lands. Always keep Rubik in the fallback chain.

## 3. Identity notes (important for anyone continuing this project)

- Tagline: **"SONIC RIDER — High Adrenaline Motovlogging & Media"**
- The current social-media brand assets (profile pictures, reel covers) use
  third-party characters (e.g. Sonic the Hedgehog). **Do not embed those
  assets into the website.** The original logo/mascot is a pending strategic
  decision; the site stays identity-neutral (typography + palette only) until
  it is resolved. The accent palette evokes the arcade energy without using
  any Sega/Sonic marks.
- The `SR` monogram in `src/app/icon.svg` is a temporary, original
  placeholder — replace it when the real logo exists. Its colours should
  follow `--primary` on `--background`.
