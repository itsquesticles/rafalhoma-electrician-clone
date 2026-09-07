# Starlight Consulting LLC

Marketing site for Starlight Consulting LLC, a Southern California electrical consulting and project coordination company.

The site is a static React/Vite build. It has no backend, database, analytics integration, or contact form yet; the current contact paths are phone and email links.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run test:run
npm run build
```

## Project structure

| Path | Purpose |
| --- | --- |
| `src/ClonePage.jsx` | Starlight landing-page composition and content |
| `src/index.css` | Tailwind setup and site-specific CSS |
| `src/tokens.css` | Generated design tokens |
| `public/images/` | Local site imagery |
| `public/robots.txt` | Crawler rules for the pre-domain deployment |
| `public/sitemap.xml` | Homepage sitemap for the GitHub Pages URL |
| `.design-audit/DESIGN-AUDIT.md` | Design-system audit report |
| `docs/` | Testing and code-quality notes |

The Vite base path remains `/rafalhoma-electrician-clone/` because it matches the current GitHub Pages repository URL. Update it when the deployment path or custom domain changes.
