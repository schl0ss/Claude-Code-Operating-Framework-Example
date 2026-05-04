#!/usr/bin/env node
import { appendFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const projectDir = resolve(process.env.CLAUDE_PROJECT_DIR || process.cwd());
const input = readHookInput();
const logPath = join(projectDir, "artifacts", "hook-log.ndjson");
const entry = {
  timestamp: new Date().toISOString(),
  hook: "PostToolUse",
  tool: input.tool_name || input.toolName || "unknown",
  paths: collectPaths(input),
  note: "Public teaser artifact metadata only.",
};

mkdirSync(dirname(logPath), { recursive: true });
appendFileSync(logPath, `${JSON.stringify(entry)}\n`);
process.stdout.write(`${JSON.stringify({ continue: true, suppressOutput: true })}\n`);

function readHookInput() {
  try {
    const raw = readFileSync(0, "utf8").trim();
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function collectPaths(value, results = []) {
  if (!value || typeof value !== "object") return results;

  for (const [key, child] of Object.entries(value)) {
    if (typeof child === "string" && /^(file_path|path|notebook_path)$/.test(key)) {
      results.push(child);
    } else if (Array.isArray(child)) {
      child.forEach((item) => collectPaths(item, results));
    } else if (child && typeof child === "object") {
      collectPaths(child, results);
    }
  }

  return [...new Set(results)];
}
