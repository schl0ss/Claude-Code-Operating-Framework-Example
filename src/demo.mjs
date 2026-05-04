import { createRun, roles } from "./framework.mjs";

const request =
  "We want an AI assistant that watches our shared support inbox, creates tickets in our CRM, drafts replies, and escalates angry customers to a manager. Ideally it should just handle the easy ones automatically.";

const run = createRun(request);

console.log("Agentic Framework Example");
console.log("");
console.log("Roles:", Object.keys(roles).join(", "));
console.log("Run ID:", run.id);
console.log("");
console.log("Brief");
console.log(JSON.stringify(run.artifacts.brief, null, 2));
console.log("");
console.log("Plan");
console.log(JSON.stringify(run.artifacts.plan, null, 2));
console.log("");
console.log("Required Approvals");
console.log(JSON.stringify(run.approvals, null, 2));
console.log("");
console.log("Critique");
console.log(JSON.stringify(run.artifacts.critique, null, 2));
console.log("");
console.log("Delivery");
console.log(JSON.stringify(run.artifacts.delivery, null, 2));
console.log("");
console.log("Evaluation");
console.log(JSON.stringify(run.evaluation, null, 2));

