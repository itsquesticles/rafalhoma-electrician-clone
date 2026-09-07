---
name: Starlight Consulting Dark Gold
status: canonical
version: 1.0.0
mode: dark
---

# Starlight Consulting Dark Gold Design System

## Design Intent

High-contrast, technical, and dependable. Midnight navy provides the canvas; signal gold marks Starlight identity and action. Use restraint: hierarchy, spacing, and content clarity carry more weight than decoration.

## Color & Surface Roles

- `color.surface.canvas`: page background.
- `color.surface.raised`: card and content surface.
- `color.text.primary`: headings and high-priority text.
- `color.text.secondary`: readable supporting copy.
- `color.action.primary`: primary CTA background.
- `color.action.primary-foreground`: CTA text.
- `color.border.subtle`: quiet separation.

## Typography

Use Montserrat for display and headings; Inter for body, navigation, labels, and controls. Display text is bold with compact line-height; body text is relaxed and readable.

## Spacing, Shape & Elevation

Use the 4px base rhythm and the named spacing scale. Use medium rounding for controls and larger rounding only for image/content containers. Use `shadow.brand` only for primary actions; surfaces are primarily separated by luminance and borders.

## Component Rules

- Primary buttons use the primary action tokens, visible focus, and comfortable touch padding.
- Navigation is dark, fixed, translucent, and collapses to a full-width mobile drawer.
- Cards use raised surfaces, subtle borders, and restrained radius; do not add shadows to every container.
- Decorative sparks and reveal motion are ambient only and must respect reduced-motion preferences.

## Responsive & Accessibility

Use the existing mobile-first breakpoints. Preserve keyboard focus, readable contrast, and touch-friendly controls. Never rely on color alone for meaning. Keep long-form content fluid at zoom and narrow widths.

## Anti-Patterns

Do not invent colors, arbitrary shadows, unrelated radii, gradient-heavy surfaces, giant headings, or decorative card repetition. Extend canonical tokens before introducing a new recurring value.

## Authority

This file is the canonical design intent contract. `tokens.json` is its machine-readable exact-value contract; `src/tokens.css` is derived output; components consume the derived tokens and must not create a parallel theme.
