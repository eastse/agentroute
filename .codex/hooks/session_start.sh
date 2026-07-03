#!/usr/bin/env bash
set -euo pipefail

cat <<'EOF'
AgentRoute Codex context:
- Use Bun for JavaScript commands: bun install, bun dev, bun run build.
- Run the desktop app with bun tauri dev when Tauri behavior needs verification.
- Prefer Tailwind utility classes and shared primitives from src/components/ui.
- Keep provider tokens, API keys, .env files, and secret-bearing logs out of commits.
EOF
