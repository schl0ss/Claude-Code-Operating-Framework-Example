# Guardrails

Guardrails are not an apology for weak agents. They are how serious systems handle risk.

## Data Policy

The framework classifies data before work begins:

| Class | Examples | Rule |
| --- | --- | --- |
| Public | docs, marketing pages, public repos | Usable without approval |
| Internal | private plans, non-sensitive business notes | Use inside approved workspace |
| Confidential | customer data, contracts, financials | Minimize, redact, and log usage |
| Restricted | credentials, secrets, regulated data | Never expose to model context unless explicitly approved |

## Tool Policy

Each role receives only the tools it needs.

| Role | Allowed Tools | Blocked By Default |
| --- | --- | --- |
| Intake | search, read-only docs | writes, deploys, email |
| Planner | read-only repo/docs, issue tracker | shell writes, customer contact |
| Worker | scoped file edits, tests | billing, production deploys |
| Critic | read-only artifacts, tests | changing final output silently |
| Safety | audit logs, policy docs | bypassing approvals |
| Delivery | final artifact packaging | unapproved publishing |

## Approval Gates

Human approval is required before:

- Sending external email or messages.
- Publishing public content.
- Deploying to production.
- Spending money.
- Changing data retention, security, or access control.
- Using confidential data in a new tool.
- Making a decision that cannot be cheaply reversed.

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

