# Demo Run

This is a synthetic example. Names, companies, data, and tasks are fictional.

## Request

> We want an AI assistant that reviews shipment events, asset telemetry, maintenance notes, and route constraints, then produces a service-risk brief for operations. It should recommend next actions, but not update customers or production systems without approval.

## Claude Code Wiring

The demo prints the public Claude Code composition before the run artifacts:

- Six sub-agent role cards in `.claude/agents`.
- Two public skills in `.claude/skills`.
- Hook events wired through `.claude/settings.json`.
- The project-scoped toy MCP server in `.mcp.json`.

## Intake Artifact

- Goal: produce a reviewable service-risk brief from synthetic logistics data.
- Primary users: operations analysts and service managers.
- Constraints: use only synthetic data, no external messages, no production updates, no real credentials.
- Unknowns: risk thresholds, escalation policy, delay tolerance, asset criticality, retention policy.
- Risks: unsupported causality, stale telemetry, overconfident recommendations, hidden production impact.

## Plan Artifact

1. Inspect tiny synthetic samples for service events, asset snapshots, maintenance notes, and route constraints.
2. Produce a data summary with visible assumptions and missing fields.
3. Draft a risk brief that separates evidence from inference.
4. Run critique against evidence quality and approval gates.
5. Score the result with the evaluation rubric before treating it as usable.

## Data Summary Artifact

- Route `L-104` has a delayed transfer event and a temperature variance note.
- Asset `A-17` has a recent vibration warning and open maintenance note.
- Route constraint `C-9` indicates a weather delay window.
- Evidence is synthetic and incomplete by design.

## Risk Brief Artifact

Recommended classification: **Elevated service risk**.

Reasoning: the synthetic delay, maintenance note, and route constraint point to a plausible service disruption. The brief should propose analyst review and manager approval before any customer-facing message or production update.

## Critique Artifact

- The brief should not claim root cause. The data supports risk, not certainty.
- The synthetic samples are too small for statistical confidence.
- Any customer-facing update requires approval.
- Any operational system write requires a production-change gate.

## Approval Record

Human approval required before:

- Sending customer-facing updates.
- Updating service status in production.
- Connecting to a real data warehouse or Databricks workspace.
- Using confidential logistics, customer, or asset data.

## Evaluation

The public demo should be inspectable, bounded, and useful for discussion. It should not be a deployable logistics automation system.
