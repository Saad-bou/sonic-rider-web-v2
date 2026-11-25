# HERO SECTION — النسخة 2.5D (نمشي بحال landonorris.com)

المشروع: **SONIC RIDER** · الملف: `src/components/hero-stage.tsx` (غادي يتبدل بالكامل)
المرجع: فيديو 7s ديال hero section ديال landonorris.com + screenshot ديال site ديالك
الموديل البصري: `docs/mockups/hero-2.5d-mockup.png`

> **الحالة (2026-11-25):** الـ hero ولّى **موجة مستقلة** بـ cut-outs شفافين
> (`rider-helmet.webp` + `sonic-layer.webp`): نفس الـ stage المربّع، `object-contain`،
> بلا `scale` وبلا أي transform على الطبقات (الكتاف مثبتة). الموجة هي mask واحد ديال SVG
> (blob ديال 12 نقطة كتتحرك بـ ticker واحد ديال GSAP): كتدخل cinematic على الوجه، ومن بعد
> كتقيم ambient كتحرك بلا ما يتحرك الفأرة. الـ pointer/اللمس غير كيوجهوها. الـ scatter
> ديال 10 قطع مازال موقوف على التصوير (A + B) والقص — التفاصيل فـ `docs/HOME-HERO-ASSETS.md`.

---

## 1. القرارات اللي تاخدو

| الموضوع | القرار |
|---|---|
| التقنية | **2.5D** — صور مقصوصين + GSAP. بلا Three.js، بلا GLB، بلا HDRI. |
| الخلفية | **كحلة** (#050507) + pattern خطوط contour **أزرق خافت** (~8% opacity) بلاصة camo كحل/بيض ديال Lando. |
| اللي كيبان تحت الكاسكة | **وجهك الحقيقي**. Sonic كيبقى فـ glow الأزرق ديال الخلفية + flash صغير ملي كتطير القطع. |
| الحركة | قطع الكاسكة كتهرب من الـ mouse (repulsion) وكتولي بنابض ملي يخرج. |
| البنية | واحد الـ section، بلا paragraph طويل، بلا tagline كبيرة: غير logo + pill + hamburger + card + micro line. |

> **ملاحظة مهمة على Lando:** هو ماشي جوج صور. الكود ديالو فيه `Three.js` + `WebGLRenderer` + `PerspectiveCamera` + موديل `/models/helmet-21.glb` + إضاءة HDRI (`studio_small_08_1k--light.hdr`) — يعني كاسكة 3D حقيقية moulded. الـ 2.5D كتعطي **نفس الإحساس من الزاوية الأمامية** بجزء صغير من الثمن، ولكن ما كتدورش 360°.

---

## 2. واش خاصنا "جوج صور"؟ — الجواب

**ماشي "جوج صور كاملين"** (وحدة كاملة بالكاسكة + وحدة كاملة Sonic). هادشي ما كيخدمش، حيت القطع ملي كتطير كتكشف **اللي موراها فـ نفس البيكسل**. خاصنا:

| # | الملف | الدور |
|---|---|---|
| **A** | `hero-face.jpg` — نتا، **بلا كاسكة**، أمامي، نفس الإطار | الطبقة اللي كتكشف |
| **B** | `hero-helmet.jpg` — **نفس الإطار بالضبط**، الكاسكة لابسة والـ visor محلول/مغلق | منها كتقص 8–12 قطعة (PNG شفاف) |
| **C** | `hero-sonic.jpg` *(اختياري)* — راس Sonic بنفس الزاوية والحجم | غير إلا بغيتي مرحلة 2: وجهك → Sonic |

**علاش التطابق ضروري:** إلا A و B ماشي مصورين من نفس البلاصة، الوجه كيزحف من مورا القطع، العين كتطلع فبلاصة خايبة، والتأثير كيخسر كامل. الـ tripod ماشي رفاهية — هو 80% من الجودة.

**القطع (من B، فـ Photoshop، كل واحدة PNG شفاف 2×):**

1. `visor.png` — الـ visor كاملة بالـ hinge
2. `chinbar.png` — الـ chin bar blade
3. `shell-top-left.png`
4. `shell-top-right.png`
5. `forehead.png` — الشريط فوق الـ visor (فيه الـ badge)
6. `cheek-left.png`
7. `cheek-right.png`
8. `spoiler.png` — مؤخرة الكاسكة
9. `vent-side.png` — الفتحة الجانبية
10. `badge.png` — اختياري، للتفاصيل

كل قطعة: PNG شفاف + نسخة `-shadow.png` (نفس القطعة، مظللة ومبلورة 12px، opacity 45%) باش تعطي إحساس السمك والظل.

---

## 3. brief ديال التصوير (A + B)

| # | Shot | Purpose |
|---|---|---|
| A | نتا **بلا كاسكة**، وجه للكاميرا، تعبير محايد، العينين محلولين | base layer |
| B | **نفس الفريم**، الكاسكة لابسة، نفس الوقفة ونفس بلاصة الراس | pieces + reveal |
| C | اختياري: راس Sonic بنفس الزاوية | المرحلة 2 |

1. **نفس الكاميرا فـ A و B** — tripod، ما تتحركش حتى حاجة. استعمل timer ولا remote.
2. المسافة 1.5–2m، عدسة **50–85mm** (بلا ultra-wide)، الكاميرا فـ **مستوى العينين**.
3. الفريم: **4:5 عمودي** — فوق الراس ≈ 10% فراغ، الكتافين فالأسفل. زيد صورة 16:9 للـ desktop.
4. خلفية: حيط سادة ولا ظل مفتوح، بلا clutter. (كنقصوها من بعد، ولكن سادة كتسهل).
5. ضوء ناعم واحد من 45° قدام — **بلا flash on-camera**.
6. **قفّل الـ exposure والـ focus** بين A و B. نفس الـ white balance.
7. الحجم: **3000px+** على الجانب الكبير، RAW ولا JPEG أعلى جودة. بلا فلاتر ديال التيليفون.

**الحيلة باش القطع تتطابق:** فـ B، الكاسكة كتغطي الراس. الراس اللي تحت خاصو يكون **بالضبط** فـ نفس البلاصة اللي فـ A — حيت الـ jaw والأدن كيبانو من تحت الكاسكة. سهّل هادشي: علم على الأرض بلاصة الأرجل، وما تحركش الراس بين الجوج.

---

## 4. الحالات (states) ديال الحركة

| State | الوصف |
|---|---|
| **0 — idle** | القطع مفرّقة شوية (3–8px) وكتتحرك بشوية (sine drift 6s). هادشي كيوري المستعمل بلي كاين حاجة كتتحرك، بلا ما يحط الـ mouse. |
| **1 — cursor (repulsion)** | فـ دايرة radius ≈ 26% من عرض الكاسكة: كل قطعة كتهرب من الـ cursor. displacement = `(1 - d/r)² × 55% من عرض الكاسكة`، rotation ±8°، opacity كتنقص مع المسافة (1 → 0.55)، الـ shadow كتكبر. |
| **2 — return** | ملي الـ cursor كيخرج: كل قطعة كترجع بـ spring (`elastic.out(1, 0.55)`, 0.7–1.1s حسب المسافة، stagger 20ms). |
| **3 — ghost** | فبلاصة القطع كتبقى outline cyan 1px opacity 0.22 (SVG mask ولا stroke) — كتوري وين كانت الكاسكة. |
| **4 — scroll** | الكاسكة كتتجمع (كل القطع فبلاصتها)، zoom out خفيف 1.06 → 1، الكوبي كتفيد. الـ pin ماشي ضروري. |

- **Reduced motion**: صورة B ثابتة، بلا hover، بلا idle drift. (احترم `prefers-reduced-motion`.)
- **Touch (mobile)**: ما كاينش hover → الـ repulsion كيتبع الـ touch-drag، وكل 6 ثواني idle loop صغيرة باش الحركة تبان.
- **Performance**: غير `transform` / `opacity` / `filter`، ما كاينش layout. `pointermove` داخل rAF، `gsap.quickTo` لكل قطعة (ماشي tween جديد كل حركة).

---

## 5. UI mapping (Lando → SONIC RIDER)

| Lando | SONIC RIDER | ملاحظة |
|---|---|---|
| Logo جوج سطور فوق ليسار | **SONIC** (بيض) / **RIDER** (أزرق #0047FF) | Rubik 800، tracking 0.1em، ~5rem |
| `STORE` pill | **FOLLOW** pill (أزرق) + سهم | كيدوز لـ `#community` |
| Hamburger مربع | Hamburger مربع | كيفتح overlay: JOURNAL · JOURNEY · ROAD · GEAR · CONTACT |
| NEXT RACE card تحت ليسار | **NEXT RIDE** / `RABAT · 2026` | يقدر يتبدل من `lib/content.ts` |
| — (micro تحت يمين) | `HJC RPHA 11 · TRACER 900` | Rubik Medium، muted، tracking 0.25em |
| — | hint تحت وسط: `MOVE — UNMASK` | كيتخبى أول مرة المستعمل كيحرك |

**اللي كنحيدو من الـ hero الحالي:** العنوان الكبير SONIC RIDER، `MOROCCO · SINCE 2017`، tagline "Built by passion…"، paragraph "From the streets of Rabat…"، زر Scroll. هادو كيمشيو فـ section 02 (Philosophy) — ما كيضيعوش، غير كيتنقلو.

---

## 6. الملفات والـ assets

```
public/images/hero-face.jpg        ← A  (1600–2400px, WebP/AVIF فـ build)
public/images/hero-helmet.jpg      ← B  (priority / LCP)
public/images/pieces/visor.png     ← + 9 قطعة
public/images/pieces/visor-shadow.png
```

- الـ pieces: WebP بلا ضياع، preload على 3 الأساسيين (visor, chinbar, shell-top).
- الـ LCP = `hero-helmet.jpg`: `priority` + `sizes="100vw"`.
- mobile: الكاسكة full-bleed، الـ pieces كتصغّر 0.8×، والـ hint كيتخبى.

---

## 7. PROMPT للـ agent (copier / coller)

```
CONTEXT
Project: SONIC RIDER — Next.js 15.5 App Router, TypeScript 5.9 strict, Tailwind 3.4,
GSAP 3.15 + ScrollTrigger, Lenis 1.3. Repo: sonic-rider-web-v2.
Task: replace src/components/hero-stage.tsx with a "2.5D helmet scatter" hero, inspired by
landonorris.com (which uses Three.js + helmet.glb — we do NOT use 3D; we use layered images).

VISUAL TARGET
- Full-bleed near-black hero (#050507) with a very faint electric-blue topographic contour
  pattern overlay (~8% opacity, SVG or canvas, static).
- Centred head-and-shoulders portrait: the rider wearing the black HJC RPHA 11 with blue
  Sonic livery. Behind the helmet sits the same portrait WITHOUT the helmet (aligned pixel-perfect).
- 10 helmet pieces are separate transparent PNGs stacked on top of the helmet layer.
- Minimal UI: top-left logo "SONIC" (white) / "RIDER" (#0047FF) in Rubik 800, uppercase,
  tracking 0.1em, two stacked lines; top-right solid #0047FF pill "FOLLOW" with an arrow +
  a thin outlined square hamburger; bottom-left 1px outlined card "NEXT RIDE" / "RABAT · 2026";
  bottom-right micro text "HJC RPHA 11 · TRACER 900"; bottom-centre hint "MOVE — UNMASK".
- No big headline, no paragraph, no scroll button in the hero.

BEHAVIOUR
1. Idle: each piece offset 3–8px from its home position, drifting on a 6s sine loop.
2. Pointer move: for each piece compute distance from the cursor to the piece centre.
   If d < radius (26% of helmet width): displacement = (1 - d/radius)^2 * 0.55 * helmetWidth,
   direction away from the cursor, plus rotation ±8deg, opacity 1 -> 0.55, shadow scale up.
   Use gsap.quickTo per piece per property; run pointermove inside requestAnimationFrame.
3. Pointer leave: every piece springs back with elastic.out(1, 0.55), staggered 20ms,
   duration scaled by the distance it travelled.
4. A cyan 1px ghost outline (opacity .22) stays where the pieces were removed.
5. On touch devices the same repulsion follows the touch point; an automatic 6s idle loop
   plays the scatter-and-return once so the effect is discoverable.
6. Respect prefers-reduced-motion: static helmet, no hover, no idle drift.
7. Only transform / opacity / filter are animated. Clean up listeners and gsap.context on unmount.

ASSETS (placeholders acceptable, documented)
public/images/hero-face.jpg, public/images/hero-helmet.jpg,
public/images/pieces/{visor,chinbar,forehead,shell-top-left,shell-top-right,cheek-left,
cheek-right,spoiler,vent-side,badge}.png (+ -shadow.png variants).
If the files are missing, render the helmet layer only and log a documented TODO comment;
never fake the reveal with a crossfade.

CONSTRAINTS
- Keep tokens from globals.css (primary #0047FF, chaos #00E5FF, gold #FFC800).
- Type: font-display (Hyperwave -> Rubik fallback), font-subdisplay (Luktao -> Rubik), font-sans Rubik.
- Mobile-first: below md, helmet full-bleed, pieces 0.8x, hint hidden, pill + hamburger only.
- No new dependencies. No Three.js. No css-in-js. Tailwind + one small CSS block for the mask/pattern.
DELIVERABLE: the new hero-stage.tsx, any CSS additions, an updated docs/HOME-HERO-ASSETS.md,
and a short note listing what is placeholder vs final.
```

---

## 8. اللي باقي (checklist)

- [ ] تصوير A + B بـ tripod (نفس الإطار) — هادي اللي كتحبس كولشي.
- [ ] قص 10 قطع PNG + shadows.
- [ ] توليد راس Sonic (C) إلا بغيتي المرحلة 2.
- [x] الـ pattern الأزرق (SVG contour) — `public/hero/contours.svg`.
- [x] تبديل الـ hero بموجة مستقلة (autonomous wave) + `npx tsc --noEmit` و `npm run build` نقيين.
- [~] نقل العنوان/الـ tagline: الفلسفة عندها statement خاص بها، و `MOROCCO · SINCE 2017` كاين فـ الـ final — ما ضاع والو.
