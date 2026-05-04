export const roles = {
  intake: {
    owns: ["brief", "constraints", "unknowns", "initialRisk"],
    tools: ["read_context", "ask_clarifying_questions"],
  },
  planning: {
    owns: ["plan", "artifacts", "checkpoints"],
    tools: ["read_context", "inspect_repository"],
  },
  data: {
    owns: ["dataSummary", "evidenceNotes", "missingFields"],
    tools: ["read_synthetic_samples", "run_public_sql", "query_toy_mcp"],
  },
  decision: {
    owns: ["riskBrief", "proposedNextActions", "residualRisk"],
    tools: ["read_analysis_artifacts", "read_policy_excerpts"],
  },
  critic: {
    owns: ["critique", "missingTests", "weakAssumptions"],
    tools: ["read_artifacts", "run_checks"],
  },
  safety: {
    owns: ["approvalRequirements", "policyFindings", "blockedActions"],
    tools: ["read_policy", "inspect_hook_logs"],
  },
};

export const approvalRules = [
  {
    id: "external_contact",
    label: "External contact",
    test: (run) =>
      includesAny(run.request, ["customer", "message", "email", "publish", "status update"]),
  },
  {
    id: "production_change",
    label: "Production change",
    test: (run) =>
      includesAny(run.request, ["production", "deploy", "update status", "write back"]),
  },
  {
    id: "restricted_data",
    label: "Restricted data",
    test: (run) =>
      includesAny(run.request, ["customer", "credential", "secret", "real data", "confidential"]),
  },
  {
    id: "autonomous_action",
    label: "Autonomous action",
    test: (run) =>
      includesAny(run.request, ["automatically", "autonomous", "without approval", "handle it"]),
  },
];

export function createRun(request) {
  const run = {
    id: `run_${Date.now()}`,
    request,
    artifacts: {},
    approvals: [],
    evaluation: null,
  };

  run.artifacts.brief = createBrief(request);
  run.artifacts.plan = createPlan(run.artifacts.brief);
  run.artifacts.dataSummary = createDataSummary();
  run.artifacts.riskBrief = createRiskBrief(run.artifacts.dataSummary);
  run.artifacts.critique = critique(run);
  run.approvals = requiredApprovals(run);
  run.artifacts.approvalRecord = createApprovalRecord(run.approvals);
  run.evaluation = evaluate(run);

  return run;
}

export function requiredApprovals(run) {
  return approvalRules
    .filter((rule) => rule.test(run))
    .map((rule) => ({
      id: rule.id,
      label: rule.label,
      status: "required",
    }));
}

export function evaluate(run) {
  const scores = {
    taskFit: 4,
    constraintFit: run.approvals.length > 0 ? 5 : 3,
    evidenceQuality: run.artifacts.riskBrief.evidence.length >= 3 ? 4 : 3,
    inspectability: 5,
    riskHandling: run.artifacts.critique.findings.length >= 3 ? 5 : 3,
  };

  const average =
    Object.values(scores).reduce((total, score) => total + score, 0) /
    Object.values(scores).length;

  return {
    scores,
    average,
    usable: average >= 4 && Object.values(scores).every((score) => score >= 3),
    boundary: "Public teaser result. Not a production automation decision.",
  };
}

function createBrief(request) {
  return {
    goal: "Turn a broad logistics analytics request into a scoped, reviewable service-risk brief.",
    nonGoals: [
      "No customer-facing updates.",
      "No production system writes.",
      "No real logistics, customer, or asset data.",
      "No runnable Databricks integration.",
    ],
    constraints: [
      "Use tiny synthetic samples only.",
      "Separate evidence from inference.",
      "Require approval before external or production-impacting action.",
    ],
    unknowns: [
      "Risk thresholds",
      "Escalation policy",
      "Delay tolerance",
      "Asset criticality",
      "Data retention policy",
    ],
    initialRisk: includesAny(request, ["customer", "production", "automatically"])
      ? "High"
      : "Medium",
  };
}

function createPlan(brief) {
  return {
    milestone: "Public service-risk triage walkthrough with synthetic logistics data.",
    steps: [
      "Frame the request and identify approval gates.",
      "Inspect tiny synthetic samples and policy excerpts.",
      "Produce a data summary with evidence notes and missing fields.",
      "Draft a service-risk brief with proposed next actions.",
      "Critique claims and score the result before use.",
    ],
    artifacts: [
      "brief",
      "data-summary",
      "risk-brief",
      "critique",
      "approval-record",
      "evaluation",
    ],
    checkpoints: [
      "Approve thresholds before automation.",
      "Approve real data access before integration.",
      "Approve customer-facing language before external use.",
      "Approve production writes before operational updates.",
    ],
    constraints: brief.constraints,
  };
}

function createDataSummary() {
  return {
    facts: [
      "Route L-104 has a delayed transfer event in the synthetic sample.",
      "Asset A-17 has a recent vibration warning and an open maintenance note.",
      "Constraint C-9 flags a weather delay window for the route.",
    ],
    missingFields: [
      "No historical baseline.",
      "No customer priority tier.",
      "No real-time recovery estimate.",
    ],
    boundary: "Tiny synthetic sample. Suitable for architecture review, not operational inference.",
  };
}

function createRiskBrief(dataSummary) {
  return {
    classification: "Elevated service risk",
    evidence: dataSummary.facts,
    inference:
      "The synthetic delay, maintenance note, and route constraint create a plausible service disruption.",
    proposedNextActions: [
      "Ask an operations analyst to review the route.",
      "Request manager approval before any customer-facing update.",
      "Keep production status unchanged until a production-change gate is approved.",
    ],
    residualRisk:
      "The sample supports a triage discussion, not a confident root-cause finding.",
  };
}

function critique(run) {
  return {
    findings: [
      "The risk brief must not claim root cause from synthetic samples.",
      "Customer-facing updates require an external-contact approval gate.",
      "Production status updates require a production-change gate.",
      "Real Databricks or warehouse access is outside the public implementation boundary.",
    ],
    recommendation:
      "Use this as a reviewable architecture demo, then discuss production thresholds and data contracts privately.",
  };
}

function createApprovalRecord(approvals) {
  return {
    approvals,
    blockedByDefault: [
      "Customer-facing update",
      "Production system write",
      "Real workspace connection",
      "Use of confidential logistics data",
    ],
  };
}

function includesAny(value, needles) {
  const haystack = value.toLowerCase();
  return needles.some((needle) => haystack.includes(needle));
}
