# Testing

## Test Strategy

Use a small Vitest + Testing Library suite for the React page. Phase 1 pins the current public behavior at the rendered-page interface: primary content, business contact links, navigation anchors, and mobile-menu interaction. `npm test` is the green gate for Phase 1–3 changes; `npm run build` remains the production gate.

## Safety Net Map

| Module | Pinned behaviors | Test files | Gaps |
|---|---|---|---|
| `src/ClonePage.jsx` | Company messaging, service sections, phone/email CTAs, anchor navigation, mobile menu open/close behavior | `src/ClonePage.test.jsx` | No browser screenshot baseline; no future form behavior |
| `src/main.jsx` | Mounts the page into `#root` | `src/main.test.jsx` | No full browser smoke test |

## Characterization Backlog

- [ ] Add browser-level responsive smoke coverage if the site gains multiple routes (medium risk, later).
- [ ] Add contact-form validation and submission tests when the form is introduced (high priority, future feature).

## CI Gates

- `npm test -- --run`
- `npm run build`
- `git diff --check`
