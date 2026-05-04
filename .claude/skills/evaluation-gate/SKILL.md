---
description: Use when a generated artifact needs rubric-based review before it is considered usable or safe to act on.
---

# Evaluation Gate

This is a public skill. It shows how evaluation fits the loop without publishing private eval sets.

## Procedure

1. Read the request, constraints, artifacts, critique, and approval record.
2. Score the result from 0 to 5 on task fit, constraint fit, evidence quality, verifiability, and risk handling.
3. Fail the gate if any score is below 3.
4. Fail the gate if the average score is below 4.
5. Fail the gate if an approval-sensitive action is recommended without an approval record.
6. Name the weakest assumption and the next verification step.

## Output Shape

```text
Evaluation:
- task_fit:
- constraint_fit:
- evidence_quality:
- verifiability:
- risk_handling:
- average:
- usable:
- weakest_assumption:
- next_verification:
```

## Public Boundary

Use the public rubric in `evals/rubric.md`. Do not infer or disclose private regression tasks.
