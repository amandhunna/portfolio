# Portfolio — agent entry

Single root entry for **Claude Code** and **Cursor**. Everything else lives in **`.agent/`**.

Orientation (commands, skills, hooks): **@.agent/README.md** · Layers: **@.agent/AI_SOURCES.md**

## Load order

```
@.agent/sources/karpathy/CLAUDE.md   # Layer 0 — Global
@.agent/README.md                    # Layer 1 — ops
@.agent/rules/*                      # Layer 1 + 4
@.agent/skills/* (on demand)         # Layer 1–2
```

Layer 3 — Experience: `@.agent/sources/experience/README.md` (provenance only).

## Workflow

1. Karpathy guidelines apply to every task.
2. Rules under `.agent/rules/` apply to every file you touch.
3. UI work → `rules/design-system.md` + `figma-standards.md`.
4. Features → `skills/portfolio-feature.md`.
5. Git/build → `commands/` (`commit-and-push.md`, `careful.md` — never `--no-verify`).
6. PR → `commands/review-pr.md` + `PR_CODE_QUALITY_CHECKLIST.md`.
7. New standards → add to `.agent/` first, then `.cursor/rules/*.mdc`; update `AI_SOURCES.md`.

## Global (Layer 0)

@.agent/sources/karpathy/CLAUDE.md

## Standards (Layer 1 + 4)

@.agent/rules/design-system.md
@.agent/rules/typescript-standards.md
@.agent/rules/react-patterns.md
@.agent/rules/accessibility.md
@.agent/rules/pre-pr-checklist.md
@.agent/rules/security.md

## Commands

@.agent/commands/review-pr.md
@.agent/commands/commit-and-push.md
@.agent/commands/careful.md
@.agent/commands/audit-codebase.md

## PR Checklist

@.agent/PR_CODE_QUALITY_CHECKLIST.md

## Skills (on-demand)

@.agent/skills/portfolio-pr-review.md
@.agent/skills/portfolio-feature.md
@.agent/skills/portfolio-figma-tokens.md
