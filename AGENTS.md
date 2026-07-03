# Repository Guidelines

## Project Structure & Module Organization

AgentRoute is a Tauri 2 app with React/Vite. Frontend lives in `src/`: `src/app` for routing/styles, `src/components` for reusable UI, `src/features` for modules, and `src/config`/`src/lib` for shared setup. Rust/Tauri code is in `src-tauri/`; static files belong in `public/`. Do not edit generated output: `dist/`, `node_modules/`, or `src-tauri/target/`.

## Build, Test, and Development Commands

- `bun install`: install JavaScript dependencies.
- `bun dev`: start the Vite frontend dev server.
- `bun tauri dev`: run the desktop app with the frontend dev server.
- `bun run build`: type-check and build the frontend for production.
- `bun run preview`: preview the production frontend build.
- `bun run typecheck`: run TypeScript without emitting files.
- `bun run check`: run Ultracite checks.
- `bun run fix`: apply Ultracite fixes.
- `cargo test --manifest-path src-tauri/Cargo.toml`: run Rust tests when Rust code changes.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep feature code under `src/features/<feature-name>`. Prefer kebab-case files such as `github-star-button/index.tsx`; use PascalCase for components and camelCase for variables/functions. Path aliases use `@/` for `src`. Style UI with Tailwind utilities, prefer `src/components/ui` primitives, and use `cn` for conditional classes. Avoid ad hoc CSS unless shared components cannot express the design. Ultracite/Biome handle formatting and linting; `src/components/ui` is excluded in `biome.jsonc`.

## Codex & AI Assistant Files

Codex project defaults live in `.codex/config.toml`; hooks live in `.codex/hooks.json` and `.codex/hooks/`; approval rules live in `.codex/rules/`. These load only after the repo is trusted; review hook changes with `/hooks`. Shadcn guidance is mirrored in `.agents/skills/shadcn` and `.claude/skills/shadcn`; keep both copies synchronized.

## Testing Guidelines

No frontend test runner is configured. Add tests as `*.test.ts` or `*.test.tsx`, and document the command in `package.json` and this file. For Rust/Tauri changes, add unit tests in the relevant module and run the Cargo command above. Run `bun run typecheck` and `bun run check` before opening a PR.

## Commit & Pull Request Guidelines

Recent history uses short, direct messages such as `Bump react-router from 7.18.1 to 8.1.0`. Use concise imperative commit titles, optionally scoped, for example `Add provider usage summary`. PRs should include purpose, key changes, validation commands, linked issues, and screenshots or recordings for visible UI changes.

## Security & Configuration Tips

Copy `.env.example` to `.env` for local settings. Vite-exposed variables must use the `VITE_` prefix, such as `VITE_API_URL`. Never commit API keys, provider tokens, secret-bearing logs, or machine-specific config.
