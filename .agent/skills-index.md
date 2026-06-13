# Agent Skills for This Project

**Source: Layer 1 — Portfolio**

Project context: **`.agent/`** · Layers: **`.agent/AI_SOURCES.md`** · Entry: **`CLAUDE.md`**

## Project skills (`.cursor/skills/` / `.agent/skills/`)

| Skill | Layer | When to use |
|-------|-------|-------------|
| **portfolio-pr-review** | 1 | Before opening a PR; walk `.agent/PR_CODE_QUALITY_CHECKLIST.md` |
| **portfolio-feature** | 1 | New sections, components, App.tsx edits |
| **portfolio-figma-tokens** | 2 | Figma MCP, token changes, `figma-tokens.json` sync |

## Commands (`.agent/commands/`)

| Command | Layer | When to use |
|---------|-------|-------------|
| **review-pr** | 1 | Full PR self-review workflow |
| **commit-and-push** | 1 | Stage → commit → push (never `--no-verify`) |
| **careful** | 1 | Guard before destructive git/shell commands |
| **audit-codebase** | 1 | Periodic health audit (tokens, types, a11y) |

## Hooks

Post-agent typecheck: `.agent/hooks/post-agent-typecheck.sh` — see `.cursor/hooks/README.md`.

Provenance: **Experience layer** — see `.agent/sources/experience/README.md`.

## Global (Layer 0)

Karpathy behavioral guidelines: `.agent/sources/karpathy/` — always active via `00-karpathy-guidelines.mdc`.

## External (Layer 5)

| Area | Skill | When to use |
|------|-------|-------------|
| **Frontend** | Senior Frontend Staff Engineer | Architecture, refactors, performance, code review |
| **Rules** | Create rule | Adding Cursor rules or CLAUDE.md patterns |
| **Figma → code** | Code Connect / Implement design | Figma MCP enabled |
| **Git** | Using Git | Branches, commits |
| **Discover** | Find skills | "Is there a skill for X?" |

Figma MCP must be enabled for Figma-related external skills. External skills are **not vendored** into this repo.
