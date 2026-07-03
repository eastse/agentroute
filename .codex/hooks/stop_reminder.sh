#!/usr/bin/env bash
set -euo pipefail

if git diff --quiet -- .; then
  exit 0
fi

cat <<'EOF'
AgentRoute validation reminders:
- Frontend changes: bun run typecheck
- Build-facing changes: bun run build
- Lint/format changes: bun run check
- Rust/Tauri changes: cargo test --manifest-path src-tauri/Cargo.toml
EOF
