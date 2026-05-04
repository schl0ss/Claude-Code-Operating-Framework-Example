# Claude Code Composition

This repo is Claude Code-first, portable second.

The framework concepts are durable: runs, roles, artifacts, approval gates, tool boundaries, and evaluation. Claude Code is the concrete public implementation surface.

## Public Composition Pattern

| Concept | Claude Code Primitive | Public Example |
| --- | --- | --- |
| Role | Sub-agent | `.claude/agents/data.md` |
| Workflow procedure | Skill | `.claude/skills/service-risk-triage/SKILL.md` |
| Enforcement point | Hook | `.claude/hooks/guard-write-scope.mjs` |
| Controlled context | MCP server | `.mcp.json` and `mcp/synthetic-logistics-server.mjs` |
| Tool boundary | Settings | `.claude/settings.json` |
| Reviewable output | Artifact | `brief`, `data_summary`, `risk_brief`, `critique`, `evaluation` |

## Why Sub-agents Are The Hero

Sub-agents make responsibility visible. Intake should not do analysis. Data should not send customer updates. Decision should not quietly bypass Safety. Critic should produce findings, not silently rewrite the final answer.

That role separation is the architectural point.

## Public Boundary

The public files show the skeleton:

- purpose
- allowed inputs
- expected artifacts
- tool boundary
- escalation rules

They do not include private prompt craft, routing heuristics, production policy, or real evals.
