# Technical Debt

## Debt Ledger

| Item | Location | Type | Risk | Effort | Priority | Status |
|---|---|---|---|---|---|---|
| No automated test runner existed | `package.json` | test infrastructure | high | small | P0 | done Phase 1 |
| Page content and composition share one large render function | `src/ClonePage.jsx` | structure | medium | medium | P1 | improved Phase 2; retained as one route-level module |
| No browser screenshot regression baseline | repository | verification | medium | medium | P2 | deferred |
| Contact form does not exist yet | future feature | product scope | low | medium | P2 | deferred by request |

## Smell Inventory

| Smell | Location | Refactoring | Status |
|---|---|---|---|
| Positional tuple data obscured field meaning | `src/ClonePage.jsx` | Replace positional data with named records | done Phase 2 |
| Mobile navigation markup and behavior were embedded in page composition | `src/ClonePage.jsx` | Extract Component: `MobileNavigation` | done Phase 3 |
| Test assertions accumulated duplicate rendered links between tests | `src/ClonePage.test.jsx` | Add explicit cleanup and assert repeated CTAs as a collection | done Phase 1 |

## Sprout / Wrap Register

No sprouts or wrappers were needed.

## Debt Budget & Broken-Windows Policy

For this pre-launch site, fix P0/P1 issues during the current pass. Defer work that changes product scope or requires a browser harness until the related feature exists.

## Adopted Conventions

- Keep page copy in named data collections when repeated rendering is the only variation.
- Keep user-visible behavior stable during Phases 1–3.
- Prefer the smallest testable interface over new abstraction layers.
- Do not add a contact form until its submission contract is defined.
