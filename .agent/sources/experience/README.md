# Experience Layer — Provenance

**Source: Layer 3 — Experience**

Patterns borrowed from **professional work** (AiDash and similar projects). This layer documents **workflow origins** — not product-domain rules.

---

## What was borrowed (portfolio ← Experience)

| Portfolio asset | Experience origin |
|-----------------|-------------------|
| `.agent/` folder layout | Agent OS structure (rules, skills, commands, hooks) |
| `.agent/hooks/post-agent-typecheck.sh` | Post-agent typecheck hook (adapted: pnpm → npm) |
| `.agent/commands/review-pr.md` | PR review workflow |
| `.agent/commands/commit-and-push.md` | Commit/push guardrails |
| `.agent/commands/careful.md` | Destructive command guard |
| `.agent/commands/audit-codebase.md` | Codebase health audit (portfolio-scoped tasks) |
| `.agent/PR_CODE_QUALITY_CHECKLIST.md` | Checklist shape (portfolio-scoped sections) |
| `.cursor/rules/*.mdc` → `.agent/rules/` | Pointer pattern for Cursor rules |

---

## Explicit exclusions (stay upstream only)

Do **not** import these into the portfolio:

| Upstream rule / skill | Why excluded |
|----------------------|--------------|
| Product-domain feature skills | Map, planning, and product-specific workflows from professional work |
| Monorepo / framework stack rules | MVVM, UI library theme, and data-fetching patterns tied to upstream app architecture |
| Geospatial product architecture | Map layers, shared map runtime, and domain package boundaries |
| Auth0, httpClient, API hooks | Not applicable to static portfolio |

---

## Maintenance

When updating Experience-derived patterns in portfolio:

1. Change `.agent/` first.
2. Update this provenance table if origins shift.
3. Do not label changes as "CRIS" in AI docs — use **Experience** layer.

See also: [.agent/AI_SOURCES.md](../../.agent/AI_SOURCES.md)
