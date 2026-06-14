# Agent OS

**Source: Layer 1 — Portfolio**

Single orientation doc for Claude Code, Cursor, and other agents. Layer index: **AI_SOURCES.md**.

## Read order

1. **AI_SOURCES.md** — layers (Global · Portfolio · Figma · Experience · Security · External)
2. **context.md** — project facts, sections, structure
3. **rules/design-system.md** — design system (code)
4. **figma-standards.md** — Figma handoff (Layer 2)
5. **verification.md** — implemented vs missing
6. **skills-index.md** — skills, commands, hooks

**Root entry:** **CLAUDE.md** (repo root) — `@` imports for rules, commands, skills.

## Project

React (Vite + TypeScript) portfolio + design system. Tokens in `src/tokens/` map to Figma via `figma-tokens.json`. Details: **context.md**.

## Commands

| Command | Use |
|---------|-----|
| `npm run dev` | Local dev |
| `npm run build` | Production build |
| `npm run typecheck` | TypeScript check |
| `npm run tokens:export` | Export tokens |

## Where to put code

| Area | Path |
|------|------|
| Sections | `src/App.tsx` or `src/sections/` |
| Components | `src/components/Name/` |
| Hooks | `src/hooks/` |
| Tokens | `src/tokens/` |

## Skills

| Intent | Skill | Also |
|--------|-------|------|
| PR review | `portfolio-pr-review` | `commands/review-pr.md` |
| Feature / section | `portfolio-feature` | `rules/design-system.md` |
| Figma / tokens | `portfolio-figma-tokens` | `figma-standards.md` |
| Destructive git/shell | — | `commands/careful.md` |

Use checklist **Navigation** links in `PR_CODE_QUALITY_CHECKLIST.md` — do not load the whole file for small edits.

## Hooks

Configure locally (not committed):

- **Cursor:** Settings → Hooks → Stop → `bash .agent/hooks/post-agent-typecheck.sh`
- **Claude Code:** `.claude/settings.json`

See `.cursor/hooks/README.md`.

## Cursor rules load order

1. `00-karpathy-guidelines.mdc` — Global (`alwaysApply`)
2. `01-portfolio-core.mdc` — Portfolio (`alwaysApply`)
3. Globs: design-system, typescript, react, a11y, security, pre-pr

Update **AI_SOURCES.md** when adding layers or sources.
