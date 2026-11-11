import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
 * Brand fonts — 3-tier hierarchy (docs/BRAND.md §2):
 *   display    → Hyperwave (Sail Studios, commercial) — NOT bundled, licensing pending
 *   subdisplay → Luktao — NOT bundled, source/licensing to confirm
 *   sans       → Rubik (variable 300–900) — bundled here, SIL OFL 1.1
 * Both pending faces currently alias Rubik via --font-display /
 * --font-subdisplay in globals.css. To add one: drop the licensed file in
 * src/fonts/ and register a localFont with its own `variable`, then repoint
 * the alias in globals.css.
 */
const rubik = localFont({
  src: "../fonts/Rubik-Variable.ttf",
  weight: "300 900",
  style: "normal",
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: {
    default: "SONIC RIDER — High Adrenaline Motovlogging & Media",
    template: "%s · SONIC RIDER",
  },
  description:
    "SONIC RIDER — Moroccan motorcycle culture, motovlogging and street media. Official website (foundation build).",
};

// TODO(i18n): lang is a placeholder — the content-language decision
// (Darija / French / Arabic / English mix) is still pending.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
