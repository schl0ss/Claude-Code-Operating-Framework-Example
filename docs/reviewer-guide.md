# Reviewer Guide

This repository is a sanitized Claude Code operating framework example. It is meant to show architecture and judgment, not hand over a production accelerator.

## Start Here

1. Read `README.md` for the public implementation boundary.
2. Read `CONTEXT.md` for the resolved domain language.
3. Read `docs/architecture.md` for the six-agent topology.
4. Inspect `.claude/agents/` to see the public sub-agent role cards.
5. Inspect `.claude/skills/` to see how reusable workflows are represented.
6. Inspect `.claude/settings.json`, `.claude/hooks/`, and `.mcp.json` to see where permissions, enforcement, and controlled context access fit.

## What To Notice

- Intake, Planning, Data, Decision, Critic, and Safety have separate responsibilities.
- The Data Agent owns synthetic Python, SQL, and notebook-shaped analysis artifacts.
- The Decision Agent writes a risk brief but does not own customer-facing or production-impacting action.
- Critique and Safety are separate because evidence quality and policy boundaries are different concerns.
- MCP is used as bounded read-only context access, not a general data connector.
- Hooks show enforcement points, not a production policy engine.
- Databricks appears only through locally inert artifacts.

## Demo Thread

The synthetic scenario is service risk triage for generic logistics operations:

- Request: `examples/synthetic-service-risk-request.md`
- Demo run: `docs/demo-run.md`
- Workflow: `framework/workflows/service-risk-triage.md`
- Tiny samples: `data/synthetic/`
- SQL shape: `sql/service-risk-summary.sql`
- Notebook shape: `notebooks/service-risk-triage.py`

## Commands

```bash
npm run check
npm run demo
```

The demo does not call an LLM, connect to Databricks, or run a real production integration. That restraint is deliberate.

## Deliberately Withheld

- Production prompts.
- Private routing heuristics.
- Real eval sets.
- Client workflows.
- Credentials.
- Databricks workspace configuration.
- Reusable MCP/data connector machinery.

Those are interview discussion topics, not public repository contents.
