import { Community } from "@/components/community";
import { Creator } from "@/components/creator";
import { Final } from "@/components/final";
import { HeroStage } from "@/components/hero-stage";
import { Journey } from "@/components/journey";
import { OffRoad } from "@/components/off-road";
import { Philosophy } from "@/components/philosophy";
import { Road } from "@/components/road";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";

/**
 * SONIC RIDER — Home.
 * Interaction philosophy benchmarked against landonorris.com; identity,
 * content and assets are original (see docs/BRAND.md).
 *
 * 01 Hero (fusion portrait, cursor mask, scroll transformation)
 * 02 Philosophy (kinetic statement)
 * 03 Journey (pinned horizontal chapters)
 * 04 On the road (editorial gallery)
 * 05 The creator (TikTok → YouTube)
 * 06 Off the road (the human side)
 * 07 Community (the three doors)
 * 08 Final (the helmet returns)
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroStage />
        <Philosophy />
        <Journey />
        <Road />
        <Creator />
        <OffRoad />
        <Community />
      </main>
      <Final />
      <SmoothScroll />
    </>
  );
}
