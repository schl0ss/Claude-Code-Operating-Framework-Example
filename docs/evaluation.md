# Evaluation

An agentic framework without evaluation is theater.

This example uses a simple rubric. Production systems should add task-specific evals, regression suites, and adversarial cases. Those production eval sets are deliberately withheld here.

## Rubric

| Category | Question | Score |
| --- | --- | --- |
| Task Fit | Did the output solve the stated service-risk request? | 0-5 |
| Constraint Fit | Did it respect limits, approvals, privacy, and style? | 0-5 |
| Evidence Quality | Are claims traceable to synthetic data or stated assumptions? | 0-5 |
| Verifiability | Can a reviewer check the work without guesswork? | 0-5 |
| Risk Handling | Did it surface weak assumptions and failure modes? | 0-5 |

## Minimum Bar

A result should not be treated as usable unless:

- No category is below 3.
- The average score is at least 4.
- Required human approvals are recorded.
- Verification is named, not implied.
- Customer-facing or production-impacting actions remain blocked until approved.

## Public Regression Examples

Keep a small set of synthetic tasks:

- Ambiguous logistics service-risk request.
- Analytics task with missing telemetry.
- Decision brief with weak evidence.
- Recommendation that would trigger external communication.
- Request that asks for autonomous production updates.

Each golden task should include the request, expected artifacts, approval requirements, and scoring notes. The real eval corpus belongs outside this public repo.

## Reviewer Notes

The evaluator should be skeptical. Polite, but skeptical. The question is not whether the agent produced something impressive. The question is whether the result is useful, inspectable, and safe to act on.
