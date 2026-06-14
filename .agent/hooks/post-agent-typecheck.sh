#!/usr/bin/env bash
# Runs after the agent completes (stop hook). Executes TypeScript check.
# Wire this in:
#   Cursor  → Cursor Settings → Hooks → stop event
#   Claude Code → .claude/settings.json hooks → Stop event
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

LOG="$(mktemp)"
trap 'rm -f "$LOG"' EXIT

echo "[post-agent-typecheck] Running npm run typecheck..." >&2

if npm run typecheck >"$LOG" 2>&1; then
  echo "[post-agent-typecheck] OK — TypeScript check passed." >&2
  echo "{}"
  exit 0
fi

echo "[post-agent-typecheck] FAILED — TypeScript errors:" >&2
tail -n 120 "$LOG" >&2

node --input-type=module -e "
import fs from 'node:fs';
const tail = fs.readFileSync(process.env.LOG_FILE, 'utf8').slice(-4000);
const payload = {
  followup_message:
    'The post-agent TypeScript check failed. Fix all type errors, then summarize what you changed.\n\n' +
    tail,
};
process.stdout.write(JSON.stringify(payload));
" LOG_FILE="$LOG"

exit 0
