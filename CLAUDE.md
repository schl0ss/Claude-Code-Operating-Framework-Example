# Claude Code Operating Framework Example

This file is the Claude Code routing layer for the repository. Read it first when working here.

This repo is a public, sanitized example of an agentic engineering operating framework. It shows architecture, role boundaries, skills, hooks, MCP shape, artifacts, approval gates, and evaluation. It is not an application, accelerator, production prompt pack, or deployable data platform.

## Start Here

1. Read `README.md` for the public implementation boundary.
2. Read `CONTEXT.md` for domain language and resolved design decisions.
3. Read `docs/architecture.md` for the agent topology and artifact lifecycle.
4. Read `docs/reviewer-guide.md` when you need the fastest orientation path.
5. Read `docs/guardrails.md` before touching data, actions, approvals, or policy language.

## Repository Map

- `.claude/agents/`: public sub-agent role cards for intake, planning, data, decision, critic, and safety.
- `.claude/skills/`: public reusable skills for service risk triage and evaluation.
- `.claude/hooks/`: illustrative enforcement scripts referenced by `.claude/settings.json`.
- `.claude/settings.json`: shared permissions and hook wiring.
- `.mcp.json` and `mcp/`: read-only toy MCP server over synthetic logistics context.
- `framework/`: vendor-neutral role cards, workflow playbooks, and the agent contract.
- `docs/`: architecture, reviewer guide, composition notes, guardrails, evaluation, and demo run.
- `data/synthetic/`, `sql/`, `notebooks/`, `databricks/`: tiny synthetic examples and inert Databricks-shaped artifacts.
- `evals/`: public scoring rubric.
- `examples/`: synthetic request that drives the demo run.
- `src/`: minimal illustrative state machine and demo printer.

Ignore `.claude/worktrees/` unless the task is explicitly about Claude-generated worktrees. It is generated working state, not the canonical source for this repository.

## Routing

| Task | Read First | Then |
| --- | --- | --- |
| Run the synthetic demo workflow | `.claude/skills/service-risk-triage/SKILL.md` | `framework/workflows/`, `examples/`, `data/synthetic/` |
| Score a completed run | `.claude/skills/evaluation-gate/SKILL.md` | `evals/rubric.md`, `docs/evaluation.md` |
| Understand a role boundary | `.claude/agents/<role>.md` | `framework/roles/`, `framework/agent-contract.yaml` |
| Reason about architecture | `docs/architecture.md`, `docs/claude/composition.md` | `CONTEXT.md` |
| Inspect guardrails | `docs/guardrails.md` | `.claude/settings.json`, `.claude/hooks/` |
| Orient a reviewer | `docs/reviewer-guide.md` | `README.md` |

## Operating Rules

- Preserve the public boundary. Do not invent proprietary prompts, private routing heuristics, production eval sets, client workflows, credentials, real Databricks configuration, or deployable connector machinery.
- Use synthetic data only. Treat anything client-shaped, employer-shaped, credential-shaped, or production-shaped as out of scope.
- Keep the six public roles separate: intake, planning, data, decision, critic, and safety.
- Customer-facing, production, financial, security, access-control, retention, or restricted-data actions require an `approval_record` before action.
- Artifacts are identified by name: `brief`, `plan`, `data_summary`, `risk_brief`, `critique`, `approval_record`, and `evaluation`.
- Hooks demonstrate enforcement points. Do not bypass them. If a hook blocks a write, update the policy deliberately or change the work.
- Keep examples implementation-limited. The value of this repo is the engineering shape, not hidden production machinery.

## Commands

```bash
npm run check
npm run demo
```

`npm run demo` does not call an LLM, connect to Databricks, or run a production MCP integration. That restraint is part of the design.
