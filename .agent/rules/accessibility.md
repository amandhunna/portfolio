# Accessibility Standards

**Source: Layer 1 — Portfolio**

Aligned with `.agent/rules/design-system.md` Rule 10.

## MUST

- Text contrast ≥ 4.5:1 (WCAG AA).
- Touch targets ≥ 44px on interactive elements (`componentSizesRem.touchTargetMin`).
- Semantic HTML: `nav`, `main`, `section`, `button`, `a`.
- Every icon-only button has `aria-label` (see `Nav` theme toggle pattern).
- Nav mobile menu: `aria-expanded`, `aria-hidden` on drawer links.

## Interactive elements

- Use `Button` component for actions — not `div` with `onClick`.
- Links to external URLs: `target="_blank"` + `rel="noopener noreferrer"`.

## Keyboard

- Tab order follows visual order.
- Do not remove `:focus-visible` outlines without a visible alternative.
- Hamburger menu must be keyboard operable.

## Motion

- Respect `prefers-reduced-motion` for scroll reveal and globe animations when adding new motion.
