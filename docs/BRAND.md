# SONIC RIDER — Brand Reference (web)

Single source of truth for the website's brand tokens.
Defined 2026-11-11. Any change here must be mirrored in `src/app/globals.css` (`:root`)
and, if a new token is added, in `tailwind.config.ts`.

## 1. Palette

| Token | Hex | Role | Usage notes |
|---|---|---|---|
| `--primary` | `#00E5FF` | Primary Neon Cyan | CTAs, links, key accents. Use sparingly — it is the loudest value in the system. |
| `--background` | `#0B0E14` | Dark Background | Page background (dark-first site). |
| `--surface` | `#161B22` | Card Background | Cards, panels, chips. |
| `--primary-foreground` | `#04121A` | Text on primary | Dark text on cyan surfaces — preserves contrast. |
| `--foreground` | `#E6EDF3` | Main text | High readability on dark. |
| `--muted` | `#8B98A9` | Secondary text | Captions, metadata. |
| `--border` | `#21262D` | Borders | Hairlines, dividers. |

The three brand values (`primary`, `background`, `surface`) are **official**.
The four neutrals are **technical scaffolding** for the dark theme — not final brand
decisions — chosen to be quiet and easily replaceable.

## 2. Typography

| Slot | Font | Status |
|---|---|---|
| Display / headings | **Beast** (Canva Pro) | ⚠️ Not bundled — Canva Pro license, web use pending a licensing decision |
| Display (2nd candidate) | **Luktao** (Canva) | ⚠️ Not bundled — same situation |
| Body / UI | **Rubik** | ✅ Bundled (`src/fonts/Rubik-Variable.ttf`, variable 300–900, SIL OFL 1.1 — keep `OFL-Rubik.txt` next to it) |

**Current behavior:** `--font-display` in `globals.css` aliases Rubik until a display
font is licensed. Do **not** source Beast/Luktao from unofficial download sites —
licensing is a brand decision, not a technical one.

**To add Beast/Luktao once licensed:**

1. Obtain the font with a web-use license (`.ttf` or `.woff2`).
2. Drop the file in `src/fonts/`.
3. Register a second `next/font/local` in `src/app/layout.tsx` with its own `variable` (e.g. `--font-display-brand`).
4. Repoint `--font-display` in `src/app/globals.css` to the new variable.

## 3. Identity notes (important for anyone continuing this project)

- Tagline: **"SONIC RIDER — High Adrenaline Motovlogging & Media"**
- The current social-media brand assets (profile pictures, reel covers) use third-party
  characters (e.g. Sonic the Hedgehog). **Do not embed those assets into the website.**
  The original logo/mascot is a pending strategic decision; the site stays
  identity-neutral (typography + palette only) until that is resolved.
- The `SR` monogram in `src/app/icon.svg` is a temporary, original placeholder —
  replace it when the real logo exists.
