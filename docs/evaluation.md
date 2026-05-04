# Evaluation

An agentic framework without evaluation is theater.

This example uses a simple rubric. Production systems should add task-specific evals, regression suites, and adversarial cases.

## Rubric

| Category | Question | Score |
| --- | --- | --- |
| Task Fit | Did the output solve the stated problem? | 0-5 |
| Constraint Fit | Did it respect limits, approvals, privacy, and style? | 0-5 |
| Completeness | Did it cover the necessary artifacts and next steps? | 0-5 |
| Verifiability | Can a reviewer check the work without guesswork? | 0-5 |
| Risk Handling | Did it surface weak assumptions and failure modes? | 0-5 |

## Minimum Bar

A result should not ship unless:

- No category is below 3.
- The average score is at least 4.
- Required human approvals are recorded.
- Verification is named, not implied.

## Regression Examples

Keep a small set of golden tasks:

- Ambiguous client request.
- Coding task with hidden constraints.
- Public content draft with reputational risk.
- Research task with source quality concerns.
- Automation request that could trigger external side effects.

Each golden task should include the request, expected artifacts, approval requirements, and scoring notes.

## Reviewer Notes

The evaluator should be skeptical. Polite, but skeptical. The question is not whether the agent produced something impressive. The question is whether the result is useful, inspectable, and safe to act on.

