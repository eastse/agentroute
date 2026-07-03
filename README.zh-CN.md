# AgentRoute

[English](./README.md) | [中文](./README.zh-CN.md)

AgentRoute 是一个面向 AI Agent 工具链的智能 Provider 路由项目。它用于记录用量、评估任务成本，并动态选择合适的模型与服务商，让同一份订阅额度完成更多实际任务。

当前仓库已搭建 Tauri + React + Vite 桌面端外壳。Provider 路由、用量采集和模型切换模块会在后续逐步实现。

## 为什么需要 AgentRoute

Agent 工作流经常把高级模型用于简单步骤，需要人工切换 Provider，也很难看清 Token 消耗。AgentRoute 把这些决策放到路由层，根据任务类型、上下文长度、历史用量、Provider 健康状态和剩余额度选择模型。

## 目标能力

- 用量统计：记录请求数、输入 Token、输出 Token、总 Token、Provider、模型、任务类型和时间窗口。
- 智能切换：简单任务走轻量模型，规划、编码和长上下文推理保留高能力模型。
- Provider 路由：按优先级、额度、可用性、延迟和失败率选择服务商。
- 失败兜底：首选模型限速、不可用或超预算时自动重试或降级。
- 可观测性：按日期、项目、Provider 和模型汇总用量。

## 路由策略

| 维度 | 说明 |
| --- | --- |
| 任务复杂度 | 简单任务使用低成本模型，复杂任务使用高能力模型。 |
| Token 预算 | 根据会话、当天或订阅周期额度控制选择。 |
| 上下文长度 | 仅在需要时使用更大上下文窗口模型。 |
| Provider 状态 | 结合限速、延迟、失败率和可用额度做判断。 |
| 成本策略 | 支持成本优先、质量优先、均衡模式和固定 Provider。 |

```text
Agent 请求
  -> 识别任务类型与上下文规模
  -> 查询用量和 Provider 状态
  -> 选择 Provider / 模型
  -> 发起模型调用
  -> 记录 Token、耗时和状态
  -> 必要时重试或降级
```

## 技术栈

- 桌面端：Tauri 2
- 前端：React 19、React Router、Vite 8
- 样式：Tailwind CSS 4
- 类型与校验：TypeScript、Zod
- 包管理：Bun

## 本地开发

```bash
bun install
cp .env.example .env
bun dev
```

启动桌面应用：

```bash
bun tauri dev
```

常用命令：

```bash
bun run build      # 类型检查并构建前端
bun run typecheck  # 运行 TypeScript 检查
bun run check      # 运行 Ultracite 检查
bun run fix        # 自动修复格式与规则问题
bun tauri build    # 构建桌面应用
```

## 环境变量

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| `VITE_API_URL` | AgentRoute 后端或网关服务地址 | `http://localhost:3000` |

暴露给 Vite 前端的环境变量必须使用 `VITE_` 前缀。

## 项目结构

```text
.
├── .agents/             # Codex/OpenAI 兼容工具使用的 Agent skills
├── .claude/             # Claude Code 项目级 skills
├── src/                 # React 前端代码
│   ├── app/             # 路由、Provider、全局样式
│   ├── components/      # 通用 UI 组件
│   ├── config/          # 环境变量配置
│   ├── features/        # 功能模块
│   └── lib/             # 工具函数
├── src-tauri/           # Tauri / Rust 桌面端代码
├── public/              # 静态资源
├── package.json         # 脚本与依赖
├── README.md            # 英文 README
└── README.zh-CN.md      # 中文 README
```

## AI 助手支持

本仓库内置了一套共享的 shadcn/ui 助手规则：

- `.agents/skills/shadcn`：供 Codex/OpenAI 兼容的 Agent 工具使用。
- `.claude/skills/shadcn`：供 Claude Code 使用。Claude Code 会从 `.claude/skills/` 发现项目级 skill。

后续更新 shadcn 规则、示例或 registry 说明时，需要保持两个目录同步。Claude Code 可能需要重启会话并信任当前 workspace 后，项目 skill 以及其中的 `allowed-tools` 权限才会生效。

## 规划

- Provider 配置管理：API Key、模型清单、优先级和限额。
- 用量仪表盘：按 Provider、模型、项目和时间窗口查看 Token 消耗。
- 规则路由：支持阈值、任务分类、质量优先和成本优先策略。
- OpenAI-compatible 代理接口，让现有 Agent 工具低成本接入。
- 失败恢复：支持重试、降级、Provider 回退和请求审计。
- 团队模式：支持共享用量、成员预算和项目级成本归因。

## 贡献

贡献指南、代码约定和 PR 要求请查看 [AGENTS.md](./AGENTS.md)。

## License

MIT
