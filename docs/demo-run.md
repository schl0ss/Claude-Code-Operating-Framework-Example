# Demo Run

This is a synthetic example. Names, companies, data, and tasks are fictional.

## Request

> We want an AI assistant that turns messy customer emails into support tickets and draft replies. Can you build it?

## Intake Artifact

- Goal: convert inbound customer emails into structured support tickets and draft responses.
- Primary users: support team members.
- Constraints: no automatic customer replies, no use of restricted data, no production deployment without approval.
- Unknowns: ticket schema, escalation categories, tone guidelines, CRM integration, data retention policy.
- Risks: hallucinated policy commitments, privacy leakage, incorrect escalation priority.

## Plan Artifact

1. Define ticket schema and response categories.
2. Build a synthetic email set.
3. Draft role cards for intake, classification, response drafting, and critique.
4. Create approval gate before any customer-facing output.
5. Score outputs with rubric before integration.

## Critique Artifact

- The request is too broad for a single build step.
- The first deliverable should be a workflow prototype and eval set, not production automation.
- Customer replies must remain drafts until support approves them.
- The framework needs escalation rules before any CRM write access.

## Approval Record

Human approval required before:

- Connecting to CRM.
- Reading real customer data.
- Sending customer replies.
- Updating ticket priority in production.

## Delivery

Recommended first milestone:

Build a local prototype that ingests synthetic emails, generates structured tickets, drafts replies, and scores each output against a support rubric. No external writes. No customer contact. No production secrets.

