import { createRun, roles } from "./framework.mjs";

const request =
  "We want an assistant that reviews shipment events, asset telemetry, maintenance notes, and route constraints, then produces a service-risk brief. It should recommend next actions, but not message customers or update production systems without approval.";

const run = createRun(request);

console.log("Claude Code Operating Framework Example");
console.log("");
console.log("Public sub-agent topology:", Object.keys(roles).join(" -> "));
console.log("Run ID:", run.id);
console.log("");
console.log("Brief");
console.log(JSON.stringify(run.artifacts.brief, null, 2));
console.log("");
console.log("Plan");
console.log(JSON.stringify(run.artifacts.plan, null, 2));
console.log("");
console.log("Data Summary");
console.log(JSON.stringify(run.artifacts.dataSummary, null, 2));
console.log("");
console.log("Risk Brief");
console.log(JSON.stringify(run.artifacts.riskBrief, null, 2));
console.log("");
console.log("Critique");
console.log(JSON.stringify(run.artifacts.critique, null, 2));
console.log("");
console.log("Approval Record");
console.log(JSON.stringify(run.artifacts.approvalRecord, null, 2));
console.log("");
console.log("Evaluation");
console.log(JSON.stringify(run.evaluation, null, 2));
