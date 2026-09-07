# Clone Context — rafalhomaelektryka.aura.build

Source: <https://rafalhomaelektryka.aura.build/> — "Electrician Services Landing Page Template"
(aura.build shared template by Bartek Stefański; content: Rafał Homa — elektryk, Krynica-Zdrój / Nowy Sącz)
Original is a Vite SPA shell whose real document lives in an `iframe srcdoc` (66 KB HTML, lang="pl", Tailwind CDN + Iconify + Google Fonts). Full source was extracted verbatim to `original/index.html`.

## Design tokens (from original tailwind.config)

| Token | Value | Used as |
| --- | --- | --- |
| brand-dark | #0A0F1E | page/nav/footer bg |
| brand-darker | #050810 | hero/contact bg |
| brand-card | #0D1B2A | usługi/FAQ card bg |
| brand-accent | #F5C518 | CTAs, icons, selection |
| accentHover | #E5B510 | button hover |
| sans | Inter 300/400/500 | body |
| display | Montserrat 500/600/700 | headings |

## Page structure (10 sections)

navbar (fixed, mobile overlay) → hero (parallax img, radial gradient, 30 sparks, trust bar) →
o-nas (2 counters, img + floating guarantee card) → usługi (6 cards) → dlaczego my →
jak działamy (5 gallery steps) → realizacje (gallery grid, 5 imgs) → opinie (3 testimonials, 15 stars) →
obszar działania (Google Maps embed) → FAQ (6 <details>) → kontakt (mailto form) → footer.

## Behaviors ported to React

- Mobile menu toggle (state + close on link click)
- Scroll reveal: `.reveal` + IntersectionObserver (threshold 0.1, rootMargin -50px) adds `.active`
- 30 hero sparks with randomized inline styles (CSS `sparkFly` keyframes)
- hard-hat icon intentionally omitted (not in solar set — original renders 0×0 too)

## Assets → public/images/

about-house.jpg · gallery-panel.jpg (hero bg) · o-nas.jpg · pomiary.jpg · realizacje-1.jpg · realizacje-2.jpg
(all downloaded at original resolution; hero unsplash double-used as both bg + realizacje tile, as in original)

## Icons

18 solar icons inlined as `<svg>` (Iconify API, same paths). `solar:hard-hat-linear` does not exist
in the set — the original renders it as an empty 0×0 element; clone reproduces that.

## QA evidence

screenshots/, orig-1440.json, clone-1440.json, m-orig-375.json, m-clone-375.json, review-notes.md
