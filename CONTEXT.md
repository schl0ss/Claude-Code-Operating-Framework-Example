# Agentic Framework

This context describes a public, sanitized example of the operating layer around agentic systems. Its purpose is to show framework thinking without exposing proprietary prompts, routing heuristics, client data, or production recipes.

## Language

**Agentic Framework**:
An operating layer that structures agent work through roles, context, handoffs, guardrails, evaluation, and human approval.
_Avoid_: App, model wrapper, chatbot

**Claude Code Operating Framework**:
A Claude Code-first implementation of an agentic framework using skills, sub-agents, hooks, MCP servers, settings, and reviewable workflow artifacts.
_Avoid_: Vendor-neutral sketch, prompt collection

**Synthetic Demo Case**:
A fictional scenario used to demonstrate the framework's shape without disclosing private business machinery.
_Avoid_: Product vertical, client workflow, production recipe

**Generic Logistics Analytics Case**:
A synthetic demo case about logistics telemetry, service events, maintenance notes, and operational decisioning.
_Avoid_: Rail-specific example, support inbox example, client-shaped workflow

**Service Risk Triage**:
The canonical generic logistics demo workflow that turns synthetic operational data into a reviewable risk brief and proposed next actions.
_Avoid_: Dashboard, report, support triage

**Teaser Repo**:
A public repository that demonstrates architectural fluency and Claude Code concepts without providing production-ready automation or proprietary operating machinery.
_Avoid_: Open-source product, implementation giveaway, complete framework

**Composition Pattern**:
The visible arrangement of Claude Code primitives, role boundaries, artifact flow, approval gates, and evaluation loops.
_Avoid_: Special sauce, routing logic, production implementation

**Sub-agent Topology**:
The visible role graph that shows how Claude Code sub-agents divide responsibility and hand off artifacts during a run.
_Avoid_: Prompt chain, persona list, hidden router

**Public Sub-agent Set**:
The six-agent topology exposed in the teaser repo: Intake, Planning, Data, Decision, Critic, and Safety.
_Avoid_: Full production agent graph, delivery agent, generic worker

**Public Role Card**:
A skeletal Claude Code sub-agent file that shows purpose, inputs, artifacts, tool boundary, and escalation rules without exposing production prompts.
_Avoid_: Production prompt, private role card, prompt engineering asset

**Public Skill**:
A skeletal Claude Code skill that shows a reusable workflow procedure without exposing proprietary heuristics or production playbooks.
_Avoid_: Skill library, consulting collateral, private playbook

**Public Hook**:
A minimal Claude Code hook example that shows where enforcement belongs without providing production policy machinery.
_Avoid_: Policy engine, private guardrail, routing hook

**Toy MCP Server**:
A read-only MCP example that exposes bounded synthetic logistics context for the demo workflow.
_Avoid_: Data connector, Databricks integration, production context server

**Databricks-shaped Artifact**:
A locally inert example file that shows how Databricks jobs, notebooks, or SQL outputs would fit into the workflow without providing a runnable integration.
_Avoid_: Databricks starter kit, workspace integration, deployment template

**Tiny Synthetic Sample**:
A small fictional dataset that makes the demo data shape concrete without becoming a realistic benchmark or reusable schema.
_Avoid_: Realistic dataset, benchmark, production schema sample

**Data Agent**:
The public sub-agent responsible for synthetic Python and SQL analysis artifacts in the demo workflow.
_Avoid_: Worker agent, generic executor

**Decision Agent**:
The public sub-agent responsible for turning analysis artifacts into an operational risk brief and proposed next actions.
_Avoid_: Delivery agent, final responder

**Implementation Boundary**:
The explicit line between conceptual completeness and withheld production machinery.
_Avoid_: Incomplete repo, missing code, secretiveness

**Reviewer Guide**:
A short navigation document that tells a hiring reviewer what to inspect and what the public example is deliberately withholding.
_Avoid_: Sales pitch, README duplicate, portfolio essay

**Interview Prep**:
A private local note for defending the architecture in a technical panel without publishing rehearsed answers or proprietary implementation detail.
_Avoid_: Public FAQ, sales script, committed notes

**Topology Diagram**:
A public Mermaid diagram that shows the visible sub-agent and artifact flow without exposing private routing logic.
_Avoid_: Orchestration internals, routing map, production graph

**First-screen Signal**:
The README opening that names the Claude Code primitives the reviewer is looking for without stuffing the title with keywords.
_Avoid_: Keyword-stuffed title, buried requirements match

**Production Extension**:
A public architectural note describing what would need to be added for production without giving implementation steps or reusable deployment machinery.
_Avoid_: How-to guide, starter kit, deployment recipe

**Run**:
A single pass through the framework from request intake to evaluated delivery.
_Avoid_: Session, chat, job

**Role**:
A bounded responsibility assigned to an agent within a run.
_Avoid_: Persona, prompt, assistant

**Artifact**:
A reviewable output produced by a role during a run.
_Avoid_: Response, blob, result

**Approval Gate**:
A human checkpoint required before costly, irreversible, customer-facing, production, financial, or restricted-data actions.
_Avoid_: Confirmation, permission prompt

**Tool Boundary**:
The explicit set of tools and permissions available to a role.
_Avoid_: Access, capabilities, permissions

**Portability Layer**:
The separation between the framework's domain concepts and the specific Claude Code primitives used to demonstrate them.
_Avoid_: Abstraction, adapter, vendor neutrality

**Evaluation**:
A rubric-based judgment of whether the run was useful, inspectable, and safe to act on.
_Avoid_: Vibe check, review

## Relationships

- An **Agentic Framework** executes one **Run** for a user request.
- A **Claude Code Operating Framework** is the public implementation of the **Agentic Framework**.
- A **Run** contains one or more **Roles**.
- A **Role** produces one or more **Artifacts**.
- A **Role** operates inside exactly one **Tool Boundary**.
- An **Approval Gate** pauses a **Run** before sensitive action.
- **Evaluation** scores a **Run** after delivery.
- A **Synthetic Demo Case** demonstrates the **Agentic Framework** without becoming the framework's domain.
- The **Generic Logistics Analytics Case** is the preferred **Synthetic Demo Case** for this repository.
- **Service Risk Triage** is the concrete workflow inside the **Generic Logistics Analytics Case**.
- The repository is a **Teaser Repo**, so examples should teach concepts and invite discussion without shipping a reusable production system.
- A **Teaser Repo** reveals the **Composition Pattern** while withholding proprietary operating machinery.
- The **Sub-agent Topology** is the central exhibit in the **Composition Pattern**.
- The **Public Sub-agent Set** exposes six roles: Intake frames the request, Planning scopes the work, Data handles synthetic Python and SQL analysis, Decision writes the operational risk brief, Critic tests evidence and assumptions, and Safety enforces gates.
- Each role in the **Public Sub-agent Set** should have a skeletal `.claude/agents` **Public Role Card**.
- The repo should include exactly two **Public Skills**: service-risk-triage and evaluation-gate.
- The repo should include minimal **Public Hooks** for write-scope guarding, artifact metadata recording, and public-boundary checks.
- The repo should include a read-only **Toy MCP Server** over synthetic logistics context.
- Databricks should appear only through **Databricks-shaped Artifacts**, not runnable workspace integration.
- The logistics data should appear only as **Tiny Synthetic Samples**.
- The repo should include a **Reviewer Guide** that directs first-round reviewers to the strongest evidence.
- **Interview Prep** should live in `interview-prep.md` and be ignored by git.
- The public architecture docs should include a **Topology Diagram** for the visible **Sub-agent Topology**.
- The README title should stay broad, while the opening body should provide the **First-screen Signal** for sub-agents, skills, hooks, MCP, and settings.
- The README should include a **Production Extension** section that names missing production concerns at an architectural level only.
- The repo's public language should use **Data Agent** instead of "Worker Agent" and **Decision Agent** instead of "Delivery Agent."
- The README should state the **Implementation Boundary** directly so restraint is understood as deliberate architecture, not incompleteness.
- A **Portability Layer** keeps the framework concepts separable from the Claude Code implementation.

## Example dialogue

> **Dev:** "Should the logistics analytics workflow define our domain language?"
> **Domain expert:** "No. **Service Risk Triage** is the concrete workflow inside the **Generic Logistics Analytics Case**, which is still only a **Synthetic Demo Case**. The domain is the **Agentic Framework**: **Runs**, **Roles**, **Artifacts**, **Approval Gates**, **Tool Boundaries**, and **Evaluation**."

## Flagged ambiguities

- "support automation" was treated as a possible domain. Resolved: support automation is a **Synthetic Demo Case**, not the core domain of this repository.
- "runtime-agnostic framework" conflicts with the hiring signal for concrete Claude Code architecture. Resolved: this repo is **Claude Code Operating Framework** first and portable framework second.
- "rail service analytics" is too close to the target employer's domain. Resolved: use a **Generic Logistics Analytics Case** so the example signals relevant data work without looking tailored to a specific company.
- "service risk triage" is the canonical demo workflow. Resolved: it means producing a reviewable operational risk brief and proposed next actions from synthetic logistics data, not building a dashboard or production optimizer.
- "executable demo" risks giving away too much implementation value. Resolved: this should be a **Teaser Repo** with conceptual completeness, skeletal examples, and clear implementation boundaries.
- "what to reveal" is resolved as **Composition Pattern** only: Claude Code primitive arrangement, responsibility boundaries, artifact flow, approval gates, and evaluation loops are visible; prompts, routing heuristics, real evals, production hooks, reusable MCP implementation, and client-shaped workflows are withheld.
- "sanitized teaser" should be explicit in the README. Resolved: describe the repo as conceptually complete with an intentional **Implementation Boundary**, not as a partial or unfinished framework.
- "Claude Code primitive hero" is resolved as **Sub-agent Topology**. Skills, hooks, MCP, and settings support the topology rather than competing with it as the main architectural exhibit.
- "which sub-agents to show" is resolved as the **Public Sub-agent Set**: Intake, Planning, Data, Decision, Critic, and Safety. Delivery is an artifact, not a public sub-agent.
- "Worker Agent" and "Delivery Agent" conflict with the resolved **Public Sub-agent Set**. Resolved: rename public-facing worker language to **Data Agent**, rename delivery-role language to **Decision Agent**, and treat delivery as an **Artifact** rather than a role.
- "whether to include real sub-agent files" is resolved as yes: include skeletal `.claude/agents` **Public Role Cards** for Intake, Planning, Data, Decision, Critic, and Safety, but do not include production prompts.
- "which skills to include" is resolved as exactly two **Public Skills**: `service-risk-triage` for the visible demo workflow and `evaluation-gate` for rubric-based review before use.
- "whether to include hooks" is resolved as yes: include illustrative **Public Hooks** referenced by `.claude/settings.json`, but do not expose a production policy engine or private enforcement logic.
- "whether to include MCP" is resolved as yes: include a read-only **Toy MCP Server** for bounded synthetic context such as service events, asset snapshots, route constraints, policy excerpts, and scenario lists, but no real Databricks connectivity or production schemas.
- "how to show Databricks" is resolved as **Databricks-shaped Artifacts** only: example job YAML, notebook-shaped Python, and SQL summaries using synthetic placeholders, with no workspace config, cluster policies, auth setup, deployment scripts, reusable pipeline templates, or optimization logic.
- "whether to include synthetic data" is resolved as yes, but only **Tiny Synthetic Samples** of service events, asset snapshots, maintenance notes, and route constraints.
- "whether to include a reviewer guide" is resolved as yes: include a concise **Reviewer Guide** that points to the topology, Claude Code primitives, synthetic demo, and implementation boundary without reading like a sales pitch.
- "whether to include panel prep" is resolved as yes, but as private **Interview Prep** in ignored `interview-prep.md`, not public repository content.
- "whether to include a diagram" is resolved as yes: include a simple public **Topology Diagram** in `docs/architecture.md`, showing only visible sub-agent and artifact flow.
- "where to mention Claude Code primitives" is resolved as **First-screen Signal**: name sub-agents, skills, hooks, MCP, and settings in the README opening body, but keep the title as "Claude Code Operating Framework Example."
- "whether to include production extension guidance" is resolved as yes: include an architectural **Production Extension** section, but do not include steps, templates, deployment commands, or reusable implementation recipes.
