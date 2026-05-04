export const roles = {
  intake: {
    owns: ["brief", "constraints", "unknowns", "initialRisk"],
    tools: ["read_context", "ask_clarifying_questions"],
  },
  planner: {
    owns: ["plan", "artifacts", "checkpoints"],
    tools: ["read_context", "inspect_repository"],
  },
  worker: {
    owns: ["workProduct", "verificationNotes"],
    tools: ["scoped_edit", "run_checks"],
  },
  critic: {
    owns: ["critique", "missingTests", "weakAssumptions"],
    tools: ["read_artifacts", "run_checks"],
  },
  safety: {
    owns: ["approvalRequirements", "policyFindings"],
    tools: ["read_policy", "inspect_logs"],
  },
  delivery: {
    owns: ["finalResponse", "residualRisk", "nextSteps"],
    tools: ["package_artifacts"],
  },
};

export const approvalRules = [
  {
    id: "external_contact",
    label: "External contact",
    test: (run) => includesAny(run.request, ["email", "reply", "customer", "post", "publish"]),
  },
  {
    id: "production_change",
    label: "Production change",
    test: (run) => includesAny(run.request, ["crm", "production", "deploy", "ticket"]),
  },
  {
    id: "restricted_data",
    label: "Restricted data",
    test: (run) => includesAny(run.request, ["customer", "inbox", "contract", "financial", "secret"]),
  },
  {
    id: "automation",
    label: "Autonomous action",
    test: (run) => includesAny(run.request, ["automatically", "watch", "handle", "autopilot"]),
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
  run.approvals = requiredApprovals(run);
  run.artifacts.critique = critique(run);
  run.artifacts.delivery = deliver(run);
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
    inspectability: 5,
    riskHandling: run.artifacts.critique.findings.length >= 3 ? 5 : 3,
    usefulness: 4,
  };

  const average =
    Object.values(scores).reduce((total, score) => total + score, 0) /
    Object.values(scores).length;

  return {
    scores,
    average,
    ship: average >= 4 && Object.values(scores).every((score) => score >= 3),
  };
}

function createBrief(request) {
  return {
    goal: "Turn a broad automation request into a scoped, reviewable first milestone.",
    nonGoals: [
      "No customer-facing automation in the first milestone.",
      "No production CRM writes.",
      "No use of real customer data before approval.",
    ],
    constraints: [
      "Use synthetic data first.",
      "Keep humans in the loop for external replies.",
      "Require approval before production integration.",
    ],
    unknowns: [
      "Ticket schema",
      "Escalation rules",
      "Tone guidelines",
      "Data retention policy",
      "CRM API permissions",
    ],
    initialRisk: includesAny(request, ["customer", "crm", "automatically"])
      ? "High"
      : "Medium",
  };
}

function createPlan(brief) {
  return {
    milestone: "Local workflow prototype with synthetic support emails.",
    steps: [
      "Define structured ticket schema.",
      "Create synthetic inbox examples.",
      "Draft classification and response role cards.",
      "Add critique pass before any drafted reply is shown.",
      "Score outputs with the support rubric.",
    ],
    artifacts: [
      "ticket-schema",
      "synthetic-email-set",
      "role-cards",
      "approval-record",
      "evaluation-report",
    ],
    checkpoints: [
      "Approve schema before CRM integration.",
      "Approve tone rules before draft replies.",
      "Approve data handling before real inbox access.",
    ],
    constraints: brief.constraints,
  };
}

function critique(run) {
  return {
    findings: [
      "The request combines inbox monitoring, CRM writes, drafting, escalation, and autonomous replies. Split it.",
      "Customer replies must remain drafts until a human approves them.",
      "Real inbox access requires data handling approval.",
      "CRM writes require a production-change gate.",
    ],
    recommendation:
      "Build a synthetic-data prototype first, then add integrations behind explicit approval gates.",
  };
}

function deliver(run) {
  return {
    answer:
      "Start with a local prototype that creates structured tickets and draft replies from synthetic emails. Keep CRM writes and customer replies behind approval gates.",
    approvals: run.approvals,
    residualRisk:
      "Escalation quality depends on business rules that have not been supplied yet.",
    nextStep:
      "Approve the ticket schema and escalation categories before integration work begins.",
  };
}

function includesAny(value, needles) {
  const haystack = value.toLowerCase();
  return needles.some((needle) => haystack.includes(needle));
}

