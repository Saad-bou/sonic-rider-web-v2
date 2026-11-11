# SONIC RIDER — sonic-rider-web-v2

Official website foundation for **SONIC RIDER** — Moroccan motorcycle culture, motovlogging & street media.
Apparel e-commerce is a **later phase**; this repository is the **technical foundation only**.

> **Status:** Foundation build `v0.1.0` (2026-11-11). The stack is installed, configured and verified —
> `npm run build` passes and the site renders the welcome page. No Header/Footer/Hero/pages/CMS yet:
> **that is intentional** (see `docs/ARCHITECTURE.md` for the roadmap and the reasoning).

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router) | React 19, server components by default |
| Language | TypeScript | `strict: true` |
| Styling | Tailwind CSS 3 | classic `tailwind.config.ts` + CSS-variable tokens |
| Icons | lucide-react | installed, not yet used |
| Font | Rubik (variable 300–900) | bundled in `src/fonts/` — SIL OFL 1.1 |

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Brand tokens

Defined once in `src/app/globals.css` (`:root`), mapped in `tailwind.config.ts`.
Full reference and rules: **`docs/BRAND.md`**.

| Token | Value | Role |
|---|---|---|
| `background` | `#0B0E14` | Dark page background |
| `surface` | `#161B22` | Cards / panels |
| `primary` | `#00E5FF` | Neon cyan — CTAs & accents |
| `foreground` | `#E6EDF3` | Main text |
| `muted` | `#8B98A9` | Secondary text |
| `border` | `#21262D` | Hairlines / dividers |

## Project structure

```
sonic-rider-web-v2/
├── docs/               # BRAND.md, ARCHITECTURE.md — read these first
├── public/             # static assets
├── src/
│   ├── app/            # App Router: layout.tsx, page.tsx, globals.css, icon.svg
│   ├── components/     # layout components (next milestone)
│   ├── fonts/          # Rubik-Variable.ttf + OFL license
│   └── lib/            # server-side utilities (CMS/API milestone)
├── .env.example        # environment contract
├── tailwind.config.ts  # tokens mapped to CSS variables
└── next.config.ts
```

## Documentation

- **`docs/BRAND.md`** — colors, fonts (incl. Beast/Luktao licensing status), identity notes
- **`docs/ARCHITECTURE.md`** — structure, conventions, next steps for anyone continuing this project
