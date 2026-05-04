# Guardrails

Guardrails are not an apology for weak agents. They are how serious systems handle risk.

## Data Policy

The framework classifies data before work begins:

| Class | Examples | Rule |
| --- | --- | --- |
| Public | docs, marketing pages, public repos, synthetic samples | Usable without approval |
| Internal | private plans, non-sensitive business notes | Use inside approved workspace |
| Confidential | customer data, contracts, financials | Minimize, redact, and log usage |
| Restricted | credentials, secrets, regulated data | Never expose to model context unless explicitly approved |

This repo uses only public synthetic data. The point is to show the boundary, not to model real logistics data.

## Tool Policy

Each role receives only the tools it needs.

| Role | Allowed Tools | Blocked By Default |
| --- | --- | --- |
| Intake | read-only context, clarifying questions | writes, deploys, external contact |
| Planning | read-only repo/docs, artifact planning | shell writes, customer contact |
| Data | synthetic samples, SQL, notebook-shaped artifacts | production data, credentials, real workspace writes |
| Decision | analysis artifacts, policy excerpts | customer-facing sends, production updates |
| Critic | read-only artifacts, checks | changing final output silently |
| Safety | policy docs, approval records, hook logs | bypassing approvals |

## Approval Gates

Human approval is required before:

- Sending external email or messages.
- Publishing public content.
- Deploying to production.
- Spending money.
- Changing data retention, security, or access control.
- Using confidential data in a new tool.
- Writing to operational systems.
- Making a decision that cannot be cheaply reversed.

## Claude Code Enforcement Points

This teaser repo includes illustrative hooks:

- `guard-write-scope.mjs`: demonstrates a pre-tool-use write boundary.
- `record-artifact.mjs`: demonstrates artifact metadata logging.
- `check-public-boundary.mjs`: demonstrates a session-end public-safety check.

These are intentionally small. They show where enforcement belongs. They are not a production policy engine.

## Prompt Hygiene

Prompts are treated as source code:

- Version them.
- Review them.
- Keep public examples sanitized.
- Separate durable policy from task-specific instructions.
- Avoid putting secrets, client facts, or private heuristics in prompt text.

## Recovery Loop

When a run fails, the system should record:

- What was requested.
- What the agent believed the request meant.
- Which artifact first went wrong.
- Which guardrail caught or missed it.
- Which eval should be added before the next run.

Good systems learn from boring failures. Bad systems rename them edge cases and move on.
