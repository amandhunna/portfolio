# Portfolio — Figma tokens and design parity

**Source: Layer 2 — Figma**

Use when syncing Figma ↔ code, adding tokens, or implementing designs from Figma MCP.

## Sources

- **Code rules:** `.agent/rules/design-system.md`
- **Figma standards:** `.agent/figma-standards.md`
- **Token files:** `src/tokens/` (spacing, colors, typography, radii, layout, breakpoints)
- **Export:** `figma-tokens.json` via Tokens Studio

## Token workflow

1. Add or update values in `src/tokens/*.ts`.
2. Export `FIGMA_TOKENS` constants for Figma variable names.
3. Update `figma-tokens.json` for Tokens Studio import.
4. Use `toRem()` / `*Rem` maps in components — not raw px.
5. CSS variables in `ThemeProvider` for runtime theming.

## Figma naming (mirror code)

| Token | Figma variable |
|-------|----------------|
| spacing/xs–3xl | 8, 16, 24, 32, 40, 48, 64 |
| text/h1–small | Modular scale 1.25 |
| color/dominant/*, accent/* | 60-30-10 palette |
| radius/sm, md | 8px, 16px |

## Component mapping

Map Figma components to existing React components before creating new ones:

- Button → `src/components/Button`
- Card → `src/components/Card`
- Typography → `src/components/Typography`
- Badge → `src/components/Badge`

## Handoff checklist

- [ ] Spacing on 8pt grid in specs
- [ ] Text styles match `typography.ts`
- [ ] Colors tagged Dominant / Secondary / Accent
- [ ] Touch targets ≥ 44px noted for interactive elements
