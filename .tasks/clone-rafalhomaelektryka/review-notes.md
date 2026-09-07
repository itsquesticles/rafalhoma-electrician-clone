# QA Review — rafalhomaelektryka.aura.build clone

Method: DOM + computed-style comparison (no vision model available this session), live original
(inside aura iframe) vs clone at localhost:5173, settled state (fonts.ready, full scroll-through,
images loaded), viewports 1440×900 and 375×812.

## Overall Status: ACCEPTABLE (minor issues only)

## Verified identical

- Full copy text 1:1 (headings, paragraphs, FAQ, footer — byte-identical normalized text)
- All 6 images: same natural sizes, same rendered tile dimensions (389px cols desktop; 6/6 loaded)
- Counters, cards, inputs, textarea, submit button, map iframe, floating call button, hamburger,
  desktop nav hiding, FAB presence, h1 (48px/72px, Montserrat), reveal + spark behavior
- Theme colors match (clone emits oklch equivalents of CDN rgb values — same visible colors)
- Section heights equal: hero 981/957@900… all within tolerance except FAQ/contact noted below;
  mobile totals 12756 vs 13027 (2.1% shorter) driven by Minor items
- Zero console errors; production build clean

## Critical Issues (0)

## Major Issues (0)

## Minor Issues

### 1. FAQ item height — closed <details> 74px vs original 81px (+7px × 6)

Original FAQ chevron (iconify-icon) occupies a 31px line box; inlined solar svg sits in a 24px box.
Fix if chasing pixels: give the summary icon span `inline-flex h-[31px] items-center` or line-height tweak.

### 2. ~1 wrapped line drift per text-dense section (mobile: o-nas −73px, usługi/dlaczego/realizacje/FAQ −37px each)

All individual elements measure equal; residual is paragraph re-wrap of long Polish copy,
likely Tailwind CDN v3 runtime vs compiled v4 layout minutiae. Desktop drift: −52px of 7204 (0.7%).

### 3. Hero +24px @1440 (981 vs 957) and kontakt −47px — same paragraph-wrap family as #2; h1 block 158 vs 144 (orig h1 first line renders tighter under CDN JIT letter-spacing/line metrics)

### 4. img srcs are local filenames (expected — assets localized to /images/)

## What's Working Well

- Structural DOM: identical section order/ids, tag counts (h2 9 / h3 15 / p 30 both pages)
- Nav/menu/FAB/anchors/mailto form/map embed functional
- Mobile menu button opens overlay; links close it
- Tailwind theme replicated via @theme; custom CSS (reveal, sparks, clip paths, scrollbar) verbatim
