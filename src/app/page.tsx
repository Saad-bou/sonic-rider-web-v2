import { Garage } from "@/components/garage";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ScrollStatement } from "@/components/scroll-statement";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Socials } from "@/components/socials";
import { Split } from "@/components/split";
import { Story } from "@/components/story";

/**
 * SONIC RIDER — Home.
 * Structure inspired by landonorris.com (hero reveal, statement block,
 * story, grid, two-world split, socials, big footer) — rebuilt with our
 * palette v2, 3-tier type system and zero animation dependencies.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <ScrollStatement />
        <Story />
        <Garage />
        <Split />
        <Socials />
      </main>
      <SiteFooter />
    </>
  );
}
