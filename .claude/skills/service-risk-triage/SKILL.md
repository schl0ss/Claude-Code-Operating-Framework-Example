---
description: Use for the public service-risk triage walkthrough: frame a logistics analytics request, inspect synthetic artifacts, produce a bounded risk brief, critique claims, and identify approval gates.
---

# Service Risk Triage

This is a public skill. It shows workflow composition, not production heuristics.

## Procedure

1. Read `CONTEXT.md` and confirm the request is about the synthetic service-risk demo, not a real client workflow.
2. Ask Intake to produce a brief with goals, constraints, unknowns, and initial risk.
3. Ask Planning to name the smallest reviewable milestone and expected artifacts.
4. Ask Data to inspect only tiny synthetic samples, public SQL, notebook-shaped artifacts, or the toy MCP server.
5. Ask Decision to produce a risk brief that separates evidence from inference.
6. Ask Critic to challenge evidence quality, missing assumptions, and unsupported claims.
7. Ask Safety to identify approval gates and blocked actions.
8. Run the evaluation gate before treating the result as usable.

## Required Output Shape

- Brief.
- Plan.
- Data summary.
- Risk brief.
- Critique.
- Approval record.
- Evaluation note.

## Public Boundary

Do not use real data, real Databricks workspaces, client workflows, proprietary prompts, private routing logic, or production eval sets.
