# Agentic Framework Example

A sanitized example of how I structure agentic work.

This repository is not an app. It is not a model wrapper. It is the operating layer around agentic systems: roles, context, handoffs, guardrails, evaluation, and human approval.

The point is simple: reliable agents need a system. Otherwise they are just talented interns with root access and amnesia.

## What This Shows

- Role design: intake, planner, worker, critic, and safety review.
- Workflow state: every run carries goals, constraints, artifacts, approvals, and risks.
- Tool boundaries: agents receive scoped permissions instead of a blank check.
- Human gates: costly, irreversible, or reputation-sensitive actions require approval.
- Evaluation: outputs are judged against rubrics, not vibes.
- Portability: the framework can run on top of Claude, OpenAI, local models, or a hybrid stack.

## What This Does Not Show

- Proprietary prompts.
- Client data.
- Private routing heuristics.
- Vendor credentials.
- Production eval sets.
- Business-specific automation recipes.

Those details are deliberately absent. A good public example should prove the engineering shape without handing over the machinery that makes the business work.

## Repository Map

```text
docs/
  architecture.md       Framework design and lifecycle
  guardrails.md         Approval gates, data policy, and tool constraints
  evaluation.md         Rubrics and regression strategy
  demo-run.md           Synthetic end-to-end run
framework/
  agent-contract.yaml   Runtime-agnostic contract for roles and gates
  roles/                Role cards used by agents
  workflows/            Reusable operating playbooks
evals/
  rubric.md             Scoring model for output quality
examples/
  synthetic-client-request.md
src/
  framework.mjs         Minimal state machine
  demo.mjs              Runs a synthetic example
```

## Quick Demo

```bash
npm run demo
```

The demo does not call an LLM. That is intentional. It shows the framework contract: how a request becomes scoped work, how risks are surfaced, where approvals happen, and how the final artifact is evaluated.

## Core Loop

```text
request
  -> intake
  -> plan
  -> execute
  -> critique
  -> approve
  -> deliver
  -> evaluate
```

Each step produces an artifact. Each artifact can be inspected. The system does not rely on a single magical prompt doing everything correctly in one pass.

## Design Principle

The agent should never be asked to be brilliant and reckless at the same time.

Give it context. Give it a lane. Give it tests. Give it a critic. Give it a human checkpoint before it can burn money, ship code, publish content, or contact a customer.

Solo brilliance does not scale. Systems do.

## Status

This is an interview-safe public example. It is meant to demonstrate framework thinking, not expose production IP.

