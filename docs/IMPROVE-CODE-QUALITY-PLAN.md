# Improve Code Quality Plan

## Context

Starlight Consulting is a pre-launch React + Vite + Tailwind marketing website. It explains and markets the business; there is no backend, database, or outbound integration yet. A contact form is intentionally deferred. The first change point is `src/ClonePage.jsx`, followed by its styling and entry module.

## Phase Status

| Phase | Skill | Status | Artifact | Date |
|---|---|---|---|---|
| 1 — Build the safety net | working-with-legacy-code | done | TESTING.md + TECH-DEBT.md (GATE) | 2026-09-07 |
| 2 — Make the code readable | clean-code | done | TECH-DEBT.md | 2026-09-07 |
| 3 — Apply named refactorings | refactoring-patterns | done | TECH-DEBT.md | 2026-09-07 |
| 4 — Reduce complexity | software-design-philosophy | skipped: user requested Phases 1–3 | TECH-DEBT.md | 2026-09-07 |
| 5 — Draw the architecture boundary | clean-architecture | skipped: no backend or database | ARCHITECTURE.md | 2026-09-07 |
| 6 — Lock in the habits | pragmatic-programmer | skipped: user requested Phases 1–3 | TECH-DEBT.md | 2026-09-07 |
| 7 — Make it survive production | release-it | skipped: pre-launch, no integrations | RELIABILITY.md | 2026-09-07 |
| 8 — Size for real load | system-design | skipped: pre-launch, no backend | ARCHITECTURE.md + RELIABILITY.md | 2026-09-07 |
| 9 — Get the data layer right | ddia-systems | skipped: no database | ARCHITECTURE.md | 2026-09-07 |
| Optional — Domain language | domain-driven-design | skipped: outside requested scope | ARCHITECTURE.md | 2026-09-07 |

Statuses: pending · in-progress · awaiting-evidence · done · deferred: <reason> · skipped: <reason>

## Key Decisions

| Date | Phase | Decision | Rationale |
|---|---|---|---|
| 2026-09-07 | Intake | Cover the marketing page first, then all directly coupled modules | It is the only runtime feature and the primary business surface |
| 2026-09-07 | Intake | Add tests, but do not add a contact form | Testing is in scope; the form is a future product feature |
| 2026-09-07 | Intake | Run Phases 1–3 only | User requested safety net, readability, and named refactoring |
| 2026-09-07 | Phase 1 | Pin the marketing page at its rendered interface | It captures business messaging, CTAs, and mobile navigation without inventing backend behavior |
| 2026-09-07 | Phase 2 | Keep the page composition in one module and improve its local vocabulary | There is one route and no second implementation requiring a new architecture |
| 2026-09-07 | Phase 3 | Use named data records and extract `MobileNavigation` | These reduce positional coupling while preserving the existing page behavior |

## Next Actions

- [x] Pin current page behavior with a runnable test suite.
- [x] Apply readability improvements only after the safety net was green.
- [x] Apply named refactorings one at a time with verification between changes.
