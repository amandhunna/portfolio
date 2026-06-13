# TypeScript Standards

**Source: Layer 1 — Portfolio**

## Types — no any

- No `any` — use `unknown` + type guards or proper interfaces.
- No `as any` — narrow properly or use `as ISpecificType`.
- Explicit types on parameters and returns.
- Interfaces for complex shapes; prefix with `I` — `IStatCardProps`.

## Complexity limits (MUST)

| Rule | Limit |
|------|-------|
| Function length | ≤ 100 lines |
| Component length | ≤ 300 lines |
| Nesting depth | ≤ 4 |
| Nested ternaries | 0 |

## Console and dead code

- No `console.log` in production paths.
- No commented-out code unless documented with TODO + issue reference.
- Remove unused imports and variables before PR.

## Naming

- Variables/functions: `camelCase`
- Components/interfaces: `PascalCase`
- Booleans: `is`, `has`, `should` prefix

## Checks before PR

```bash
npm run typecheck
```
