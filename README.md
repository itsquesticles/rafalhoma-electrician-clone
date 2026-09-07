# Rafał Homa — Elektryk (clone of rafalhomaelektryka.aura.build)

Full clone of the single-page electrician landing site (Krynica-Zdrój / Nowy Sącz),
exported from <https://rafalhomaelektryka.aura.build/>.

## Contents

| Path | What |
| --- | --- |
| `original/index.html` | **Verbatim original source** — 66 KB document extracted from the aura.build iframe (all markup, Tailwind classes, custom CSS, JSON-LD, content) |
| `src/ClonePage.jsx` | The clone as one React component (Tailwind v4 + original CSS, sections as comments) |
| `src/index.css` | Tailwind theme tokens (`brand` palette, Inter/Montserrat) + original custom CSS verbatim |
| `public/images/` | All 6 original images downloaded at full resolution |
| `index.html` | Original head preserved (meta, fonts, JSON-LD schema) |
| `.tasks/clone-rafalhomaelektryka/` | Skill state: `context.md`, `review-notes.md`, screenshot + QA JSON evidence |

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production → dist/
```

## Fidelity notes

- Text, images, colors, fonts, sections, animations (scroll-reveal, hero sparks, mobile menu)
  reproduced from source; hard-hat icon intentionally absent (not in the solar set —
  the original renders it empty too).
- External deps kept as in the original: Google Fonts, Google Maps embed, `mailto:` form.
- QA: ACCEPTABLE — all elements byte/measure-identical; residual <2% height drift from
  CDN-Tailwind-runtime vs compiled-Tailwind line wrapping (see `.tasks/.../review-notes.md`).
- The original page shell itself is an aura.build builder page — its `srcdoc` document
  is what this clone reproduces; it is also archived byte-for-byte in `original/`.
