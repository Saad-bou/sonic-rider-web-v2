import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
 * Brand fonts (see docs/BRAND.md):
 *  - Rubik (variable, 300–900) — bundled under src/fonts/, SIL OFL 1.1.
 *  - Beast & Luktao — Canva Pro fonts, pending a web licensing decision;
 *    NOT bundled. Once licensed: drop the files in src/fonts/ and register
 *    a second localFont here, then repoint --font-display in globals.css.
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
