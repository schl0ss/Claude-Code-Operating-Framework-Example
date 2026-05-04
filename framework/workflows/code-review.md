# Workflow: Code Review

## Purpose

Review a code change for behavioral risk, maintainability, and missing verification.

## Steps

1. Intake identifies the stated change and affected surfaces.
2. Planner lists the files, contracts, and tests to inspect.
3. Worker gathers diffs and relevant context.
4. Critic produces findings with severity and file references.
5. Safety agent flags secrets, access control, or production risk.
6. Delivery agent summarizes findings first, then context.

## Done

- Findings are concrete.
- Line references are tight.
- Test gaps are named.
- No unrelated refactor is requested.
- The review helps the author ship better code.

