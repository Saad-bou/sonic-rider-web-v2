import { Camera, Music2, Play, type LucideIcon } from "lucide-react";

/**
 * SONIC RIDER — site content.
 * Single source of truth for narrative data (edit here, never hard-code in components).
 * Rule: no invented facts, no invented metrics.
 */

export type JourneyChapter = {
  year: string;
  name: string;
  tag: string;
  note: string;
};

export const journey: JourneyChapter[] = [
  {
    year: "2017",
    name: "Aprilia SR 50",
    tag: "50cc",
    note: "The beginning. A 50cc Aprilia, and a passion that refused to stay small.",
  },
  {
    year: "2020",
    name: "Honda Hornet 600",
    tag: "600cc · 2007",
    note: "The licence. The first big bike. And the first videos on TikTok.",
  },
  {
    year: "2022",
    name: "Suzuki GSX-R 750",
    tag: "750cc · 2010",
    note: "Full carbon. The GSX-R era — and YouTube joins the story.",
  },
  {
    year: "2024",
    name: "End of a chapter",
    tag: "The pause",
    note: "The GSX-R chapter closes. The ride does not.",
  },
  {
    year: "2026",
    name: "Yamaha Tracer 900",
    tag: "Now",
    note: "The story picks up again — same rider, new chapter.",
  },
];

export type RoadShot = {
  src: string;
  alt: string;
  caption: string;
};

export const roadShots: RoadShot[] = [
  {
    src: "/images/road-pov.jpg",
    alt: "Night POV ride on an illuminated highway",
    caption: "Night POV — the highway",
  },
  {
    src: "/images/road-helmet.jpg",
    alt: "Rider putting the helmet on at night",
    caption: "Helmet on — the ritual",
  },
  {
    src: "/images/road-curve.jpg",
    alt: "The road curving under streetlights at night",
    caption: "Streetlights — the curve",
  },
  {
    src: "/images/night.jpg",
    alt: "Two riders at night in front of an illuminated tower",
    caption: "Two riders — the city",
  },
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

export const heroMeta = {
  card: { label: "Next ride", value: "Rabat · 2026" },
  spec: "HJC RPHA 11 · Tracer 900",
  hint: { pointer: "Move — unmask", touch: "Drag — unmask" },
} as const;

export const navLinks = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#journey", label: "Journey" },
  { href: "#road", label: "Road" },
  { href: "#community", label: "Community" },
] as const;
