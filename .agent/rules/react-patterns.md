# React Patterns

**Source: Layer 1 — Portfolio**

## Project structure

```
src/
  components/     → reusable UI (Button, Card, Typography, …)
  hooks/          → useScrollReveal, useActiveSection
  tokens/         → design tokens
  styles/         → global.css
  App.tsx         → page sections (extract to src/sections/ when App.tsx grows)
```

## Import order

1. React
2. External packages (react-icons, three)
3. Internal components (`./components/...`)
4. Internal hooks and tokens
5. Styles

## Component conventions

- Functional components with explicit prop interfaces.
- Export via barrel `index.ts` per component folder.
- Prefer existing components (`Button`, `Card`, `Typography`, `Layout`) over raw HTML.
- List keys: stable unique ids — never array index when list can reorder.

## Props

- No prop drilling beyond 2–3 levels — extract a hook or context if needed.
- No wrapper functions that only forward props.

## Performance (CONSIDER)

- Memoize expensive Three.js / Globe work; avoid re-creating objects in render.
- `useScrollReveal` and section animations should not block main thread.

## Before large App.tsx edits

If `App.tsx` exceeds ~400 lines, extract sections to `src/sections/Hero/Hero.tsx` etc. Use `@portfolio-feature` skill.
