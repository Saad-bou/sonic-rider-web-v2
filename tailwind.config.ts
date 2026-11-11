import type { Config } from "tailwindcss";

/**
 * SONIC RIDER — Tailwind configuration.
 *
 * Colors map to CSS variables defined in src/app/globals.css (:root).
 * That file is the single source of truth — see docs/BRAND.md.
 * Never hardcode hex values in components: use token classes
 * (bg-surface, text-primary, border-border, ...).
 *
 * Note: Tailwind v3 (classic config) is a deliberate choice from the
 * sprint plan — migrating to v4 is a conscious future decision.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: [
          "var(--font-rubik)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-rubik)",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
