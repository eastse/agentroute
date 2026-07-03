# Repository Guidelines

## Project Structure & Module Organization

AgentRoute is a Tauri 2 desktop app with a React/Vite frontend. Frontend code lives in `src/`: `src/app` contains routing and global styles; `src/components` holds reusable UI; `src/features` groups modules; `src/config` and `src/lib` contain shared setup. Rust/Tauri code is in `src-tauri/`. Static files belong in `public/`; assets can live in `assets/`. Do not edit generated output such as `dist/`, `node_modules/`, or `src-tauri/target/`.

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

Use TypeScript and React function components. Keep feature code under `src/features/<feature-name>`. Prefer kebab-case files such as `github-star-button/index.tsx`; use PascalCase for components and camelCase for variables/functions. Path aliases use `@/` for `src`. Ultracite/Biome handle formatting and linting; `src/components/ui` is excluded in `biome.jsonc`.

## AI Assistant Files

The shadcn guidance is mirrored in `.agents/skills/shadcn` for Codex/OpenAI-compatible tools and `.claude/skills/shadcn` for Claude Code. Keep both copies synchronized when changing rules, examples, CLI guidance, or assets. Claude Code loads project skills from `.claude/skills/` after the workspace is trusted.

## Testing Guidelines

No frontend test runner is configured yet. When adding tests, colocate them as `*.test.ts` or `*.test.tsx`, and document the command in `package.json` and this file. For Rust/Tauri changes, add unit tests in the relevant module and run the Cargo command above. Run `bun run typecheck` and `bun run check` before opening a PR.

## Commit & Pull Request Guidelines

Recent history uses short, direct messages such as `Bump react-router from 7.18.1 to 8.1.0` and merge commits from Dependabot. Use concise imperative commit titles, optionally scoped, for example `Add provider usage summary`. PRs should include a brief purpose, key changes, validation commands, linked issues, and screenshots or recordings for visible UI changes.

## Security & Configuration Tips

Copy `.env.example` to `.env` for local settings. Vite-exposed variables must use the `VITE_` prefix, such as `VITE_API_URL`. Never commit API keys, provider tokens, secret-bearing logs, or machine-specific config.
