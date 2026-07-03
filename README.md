# AgentRoute

[English](./README.md) | [中文](./README.zh-CN.md)

AgentRoute is an intelligent provider-routing project for AI Agent tooling. It is designed to track usage, estimate task cost, and dynamically choose the right model and provider so the same subscription quota can complete more real work.

The repository currently contains a Tauri + React + Vite desktop shell. Provider routing, usage collection, and model-switching modules will be added incrementally.

## Why AgentRoute

AI Agent workflows often waste premium model quota on simple steps, require manual provider switching, and make token usage hard to understand. AgentRoute moves those decisions into a routing layer that can choose a model based on task type, context length, historical usage, provider health, and remaining quota.

## Target Capabilities

- Usage tracking: requests, input tokens, output tokens, total tokens, provider, model, task type, and time window.
- Smart model switching: route simple tasks to lightweight models and reserve stronger models for planning, coding, and long-context reasoning.
- Provider routing: choose providers by priority, quota, availability, latency, and failure rate.
- Fallback handling: retry or downgrade when the preferred model is rate-limited, unavailable, or over budget.
- Observability: summarize usage by day, project, provider, and model.

## Routing Strategy

| Dimension | Purpose |
| --- | --- |
| Task complexity | Match simple tasks with cheaper models and complex tasks with stronger models. |
| Token budget | Route based on session, daily, or billing-cycle quota. |
| Context length | Prefer larger-context models only when needed. |
| Provider health | Consider rate limits, latency, failures, and available quota. |
| Cost policy | Support cost-first, quality-first, balanced, and pinned-provider modes. |

```text
Agent request
  -> classify task and context size
  -> read usage and provider state
  -> select provider / model
  -> call model
  -> record tokens, latency, and status
  -> retry or fallback when needed
```

## Tech Stack

- Desktop: Tauri 2
- Frontend: React 19, React Router, Vite 8
- Styling: Tailwind CSS 4
- Type safety: TypeScript, Zod
- Package manager: Bun

## Development

```bash
bun install
cp .env.example .env
bun dev
```

Run the desktop app:

```bash
bun tauri dev
```

Useful commands:

```bash
bun run build      # type-check and build the frontend
bun run typecheck  # run TypeScript checks
bun run check      # run Ultracite checks
bun run fix        # apply Ultracite fixes
bun tauri build    # build the desktop app
```

## Environment

| Variable | Description | Default |
| --- | --- | --- |
| `VITE_API_URL` | AgentRoute backend or gateway URL | `http://localhost:3000` |

Vite-exposed variables must use the `VITE_` prefix.

## Project Structure

```text
.
├── .agents/             # Agent skills for Codex/OpenAI-compatible tools
├── .claude/             # Claude Code project skills
├── .codex/              # Codex project config, hooks, and command rules
├── src/                 # React frontend
│   ├── app/             # Routes, providers, global styles
│   ├── components/      # Shared UI components
│   ├── config/          # Environment configuration
│   ├── features/        # Feature modules
│   └── lib/             # Shared utilities
├── src-tauri/           # Tauri / Rust desktop code
├── public/              # Static assets
├── package.json         # Scripts and dependencies
├── README.md            # English README
└── README.zh-CN.md      # Chinese README
```

## Roadmap

- Provider configuration for API keys, model lists, priorities, and quotas.
- Usage dashboard grouped by provider, model, project, and time window.
- Rule-based routing for thresholds, task classes, and quality/cost modes.
- OpenAI-compatible proxy API for existing Agent tools.
- Failure recovery with retry, downgrade, fallback, and request auditing.
- Team mode with shared usage, member budgets, and project-level cost attribution.

## Contributing

See [AGENTS.md](./AGENTS.md) for repository guidelines, coding conventions, and PR expectations.

## License

MIT
