import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createRun, roles } from "./framework.mjs";

const request =
  "We want an assistant that reviews shipment events, asset telemetry, maintenance notes, and route constraints, then produces a service-risk brief. It should recommend next actions, but not message customers or update production systems without approval.";

const run = createRun(request);
const claudeCodeWiring = inspectClaudeCodeWiring();

console.log("Claude Code Operating Framework Example");
console.log("");
console.log("Public sub-agent topology:", Object.keys(roles).join(" -> "));
console.log("Run ID:", run.id);
console.log("");
console.log("Claude Code Wiring");
console.log(JSON.stringify(claudeCodeWiring, null, 2));
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

function inspectClaudeCodeWiring() {
  const agents = Object.keys(roles).map((name) => {
    return {
      name,
      roleCard: `.claude/agents/${name}.md`,
      owns: roles[name]?.owns || [],
      toolBoundary: roles[name]?.tools || [],
    };
  });

  const skills = ["service-risk-triage", "evaluation-gate"].map((name) => ({
    name,
    skillFile: `.claude/skills/${name}/SKILL.md`,
  }));

  const settings = readJson(".claude/settings.json");
  const hooks = Object.entries(settings.hooks || {}).map(([event, entries]) => ({
    event,
    matchers: entries.map((entry) => entry.matcher || "*"),
    commands: entries.flatMap((entry) => entry.hooks?.map((hook) => hook.command) || []),
  }));

  const mcp = readJson(".mcp.json");
  const mcpServers = Object.keys(mcp.mcpServers || {}).map((name) => ({
    name,
    command: mcp.mcpServers[name].command,
    args: mcp.mcpServers[name].args,
  }));

  return {
    boundary: "Public Claude Code composition. Production prompts and machinery are withheld.",
    subAgents: agents,
    skills,
    hooks,
    mcpServers,
  };
}

function readJson(filePath) {
  return JSON.parse(readFileSync(join(process.cwd(), filePath), "utf8"));
}
