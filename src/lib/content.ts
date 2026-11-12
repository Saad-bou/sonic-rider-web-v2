import { Camera, Music2, Play, type LucideIcon } from "lucide-react";

/**
 * SONIC RIDER — home page content.
 * Single source of truth for the narrative data (edit here, not in components).
 */

export type TimelineEntry = {
  year: string;
  title: string;
  subtitle: string;
  tag: string;
  note: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2017",
    title: "First wheels",
    subtitle: "Aprilia SR 50",
    tag: "50cc",
    note: "First bike, first helmet, first taste of freedom.",
  },
  {
    year: "2020",
    title: "The first big bike",
    subtitle: "Honda Hornet 600 (2007)",
    tag: "600cc",
    note: "Bac done, license in hand — the step up.",
  },
  {
    year: "2022",
    title: "Camera on",
    subtitle: "TikTok & YouTube",
    tag: "Content",
    note: "Rides, exhaust notes and the city at night — the channel starts.",
  },
  {
    year: "2022",
    title: "Full carbon era",
    subtitle: "Suzuki GSX-R 750 (2010)",
    tag: "750cc",
    note: "Two seasons of pure riding on the GSX-R.",
  },
  {
    year: "2024",
    title: "The last ride",
    subtitle: "GSX-R story ends",
    tag: "Pause",
    note: "The bike goes. The road goes quiet.",
  },
  {
    year: "2026",
    title: "The return",
    subtitle: "Yamaha Tracer 900",
    tag: "900cc",
    note: "SONIC RIDER 2.0 — same rider, new chapter.",
  },
];

export type GarageEntry = {
  index: string;
  name: string;
  years: string;
  cc: string;
  note: string;
};

export const garage: GarageEntry[] = [
  { index: "01", name: "Aprilia SR 50", years: "2017", cc: "50cc", note: "Where it all started." },
  { index: "02", name: "Honda Hornet 600", years: "2020", cc: "600cc", note: "The first big one." },
  { index: "03", name: "Suzuki GSX-R 750", years: "2022 – 2024", cc: "750cc", note: "Full carbon era." },
  { index: "04", name: "Yamaha Tracer 900", years: "2026 –", cc: "900cc", note: "The comeback machine." },
];

export type SocialEntry = {
  platform: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialEntry[] = [
  {
    platform: "TikTok",
    handle: "@sonicrider750",
    href: "https://www.tiktok.com/@sonicrider750",
    icon: Music2,
  },
  {
    platform: "YouTube",
    handle: "@SONIC RIDER",
    href: "https://www.youtube.com/channel/UCVKjiziHhceSN2EbTEfRcbg",
    icon: Play,
  },
  {
    platform: "Instagram",
    handle: "@sonicrider750",
    href: "https://www.instagram.com/sonicrider750/",
    icon: Camera,
  },
];

export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#garage", label: "Garage" },
  { href: "#socials", label: "Socials" },
] as const;
