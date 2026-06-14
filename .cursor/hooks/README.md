# Agent hooks

Hook scripts live in **`.agent/hooks/`**. Cursor/Claude hook config is **not** committed to the repo — configure locally.

**Provenance:** Experience layer — [.agent/sources/experience/README.md](../../.agent/sources/experience/README.md)

## Post-agent typecheck

**Script:** `.agent/hooks/post-agent-typecheck.sh`

Runs `npm run typecheck` after the agent stops. On failure, returns a follow-up message so the agent can fix TypeScript errors.

Make executable once:

```bash
chmod +x .agent/hooks/post-agent-typecheck.sh
```

### Cursor

1. Open **Cursor Settings → Hooks**
2. Add hook for **Stop** event
3. Command: `bash .agent/hooks/post-agent-typecheck.sh`
4. Run from repository root (cwd should be project root)

### Claude Code

See `.claude/settings.json` in this repo:

```json
{
  "hooks": {
    "Stop": [
      {
        "command": "bash .agent/hooks/post-agent-typecheck.sh"
      }
    ]
  }
}
```

## Cursor rules load order

1. `00-karpathy-guidelines.mdc` — Layer 0 — Global
2. `01-portfolio-core.mdc` — Layer 1 — Portfolio
3. Glob rules (design-system, typescript, react, a11y, security, pre-pr)

See [.agent/README.md](../../.agent/README.md) and [.agent/AI_SOURCES.md](../../.agent/AI_SOURCES.md).
