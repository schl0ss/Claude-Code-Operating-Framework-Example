# Claude Code Operating Framework Example

A sanitized teaser of how I structure agentic engineering work in Claude Code.

This repository is not an app. It is not a model wrapper. It is not a turnkey accelerator. It shows the architecture of an operating framework: sub-agents, skills, hooks, MCP, settings, artifacts, approval gates, and evaluation.

The implementation boundary is intentional. The repo exposes the composition pattern and withholds the machinery that would make it production-specific: private prompts, routing heuristics, real eval sets, client workflows, credentials, Databricks integration, and production orchestration.

## What This Shows

- Sub-agent topology: intake, planning, data, decision, critic, and safety.
- Claude Code project artifacts: `.claude/agents`, `.claude/skills`, `.claude/settings.json`, hooks, and `.mcp.json`.
- Workflow state: every run carries goals, constraints, artifacts, approvals, and risks.
- Tool boundaries: roles get scoped access instead of a blank check.
- Human gates: customer-facing, production, financial, or restricted-data actions require approval.
- Evaluation: outputs are judged against rubrics, not vibes.
- Portability: the framework concepts are separate from the Claude Code primitives used to demonstrate them.

## What This Does Not Show

- Proprietary prompts.
- Private routing heuristics.
- Client data or client-shaped workflows.
- Vendor credentials.
- Production eval sets.
- Real Databricks workspace configuration.
- Reusable pipeline or MCP connector machinery.

Those details are deliberately absent. A public example should prove the engineering shape without giving away the machinery that makes the work valuable.

## Synthetic Demo Case

The demo case is **service risk triage** for generic logistics operations.

Given synthetic shipment events, asset snapshots, maintenance notes, and route constraints, the framework produces a reviewable operational risk brief and proposed next actions. Anything customer-facing or production-impacting stops at an approval gate.

This is close enough to show data engineering, analytics, and decisioning fluency. It is generic enough not to look built for a specific employer or client.

## Repository Map

```text
.claude/
  agents/                 Skeletal public sub-agent role cards
  skills/                 Two public skills: service-risk-triage and evaluation-gate
  hooks/                  Minimal illustrative hook scripts
  settings.json           Shared project settings and hook wiring
.mcp.json                 Project-scoped toy MCP server configuration
CONTEXT.md                Domain language and resolved design decisions
data/synthetic/           Tiny synthetic samples, not realistic datasets
databricks/               Databricks-shaped example job, not deployable config
docs/
  architecture.md         Framework design and lifecycle
  reviewer-guide.md       Where hiring reviewers should look first
  claude/composition.md   How Claude Code primitives compose
  databricks/artifacts.md How Databricks-shaped artifacts fit the workflow
  guardrails.md           Approval gates, data policy, and tool constraints
  evaluation.md           Rubrics and regression strategy
  demo-run.md             Synthetic service-risk triage run
evals/
  rubric.md               Scoring model for output quality
examples/
  synthetic-service-risk-request.md
framework/
  agent-contract.yaml     Public contract for roles, gates, and artifacts
  roles/                  Human-readable public role cards
  workflows/              Public service-risk triage playbook
mcp/
  synthetic-logistics-server.mjs  Read-only toy MCP server
notebooks/
  service-risk-triage.py  Notebook-shaped placeholder
sql/
  service-risk-summary.sql
src/
  framework.mjs           Minimal illustrative state machine
  demo.mjs                Prints a synthetic service-risk run
```

## Quick Demo

```bash
npm run demo
```

The demo does not call an LLM, connect to Databricks, or run a real MCP integration. That is intentional. It prints the actual public Claude Code wiring in this repo, then shows how a broad analytics request becomes scoped artifacts, how risks are surfaced, where approvals happen, and how the final brief is evaluated.

## Core Loop

```text
request
  -> intake
  -> planning
  -> data
  -> decision
  -> critique
  -> safety
  -> evaluation
```

Each step produces an artifact. Each artifact can be inspected. The system does not rely on one magical prompt doing everything correctly in one pass.

## Design Principle

The agent should never be asked to be brilliant and reckless at the same time.

Give it context. Give it a lane. Give it tests. Give it a critic. Give it a human checkpoint before it can spend money, touch production, publish content, contact customers, or use restricted data.

Solo brilliance does not scale. Systems do.

## Extending This In Production

A production version would keep the same composition pattern and replace the public placeholders with governed implementation:

- Governed data contracts instead of tiny synthetic samples.
- Authenticated MCP access instead of a read-only toy context server.
- Real eval sets and regression suites instead of the public rubric alone.
- Hardened hooks with audit trails instead of illustrative scripts.
- Approved Databricks workspace integration instead of inert job and notebook artifacts.
- Human approval workflows for external communication, production writes, financial action, and restricted data.
- Observability around each run, artifact, approval, and failed gate.

Those are architectural requirements, not instructions. The public repo stops before deployment machinery, private routing, production prompts, and reusable data-platform code.

## Status

This is an interview-safe public example. It is conceptually complete and implementation-limited by design.
