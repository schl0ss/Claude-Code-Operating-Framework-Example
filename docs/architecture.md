# Architecture

This framework separates agentic work into explicit stages. The goal is not to make the model more mystical. The goal is to make the work inspectable.

## Operating Model

1. Intake receives the request, extracts goals, constraints, unknowns, and risk.
2. Planning converts the request into a scoped path with artifacts and checkpoints.
3. Execution performs the work inside a tool boundary.
4. Critique tests the artifact against the brief, constraints, and likely failure modes.
5. Approval pauses actions that affect money, reputation, data, customers, or production systems.
6. Delivery packages the result with assumptions, residual risk, and verification.
7. Evaluation scores the result so the system can improve over time.

## Role Topology

```text
Intake Agent
  -> Planner Agent
  -> Worker Agent
  -> Critic Agent
  -> Safety Agent
  -> Delivery Agent
```

The roles are intentionally boring. Boring is useful. Boring can be logged, tested, reviewed, and improved.

## Artifacts

Every run carries structured artifacts:

- `brief`: what the user actually asked for.
- `constraints`: deadlines, forbidden moves, style rules, budgets, privacy boundaries.
- `plan`: proposed steps and required checkpoints.
- `work_product`: the generated result.
- `critique`: failures, weak assumptions, and missing verification.
- `approval_record`: what needed a human decision and what the decision was.
- `evaluation`: rubric scores and notes.

## Context Strategy

The framework distinguishes between four kinds of context:

- Project context: durable facts about the system or business.
- Task context: facts needed for the current run.
- Tool context: what the agent can actually inspect or change.
- Decision context: why a choice was made.

The agent can be creative in the work. It cannot be creative about the rules of engagement.

## Failure Modes Addressed

- Misread requests.
- Hidden assumptions.
- Tool overreach.
- Unreviewed irreversible actions.
- Pretty output that fails the task.
- One-shot prompting that cannot explain itself.
- Work that cannot be evaluated after the fact.

