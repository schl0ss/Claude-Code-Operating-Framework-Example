#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const projectDir = resolve(process.env.CLAUDE_PROJECT_DIR || process.cwd());
const ignoredDirs = new Set([".git", "node_modules", "coverage", "dist"]);
const riskyPatterns = [
  /sk-ant-[A-Za-z0-9_-]{20,}/,
  /sk-[A-Za-z0-9_-]{32,}/,
  /DATABRICKS_TOKEN\s*=/i,
  /BEGIN PRIVATE PROMPT/i,
  /PRODUCTION_SECRET/i,
];

const findings = [];

for (const filePath of walk(projectDir)) {
  const rel = normalize(relative(projectDir, filePath));
  if (rel === ".claude/hooks/check-public-boundary.mjs") continue;
  const text = safeRead(filePath);
  if (!text) continue;

  for (const pattern of riskyPatterns) {
    if (pattern.test(text)) {
      findings.push(rel);
      break;
    }
  }
}

if (findings.length > 0) {
  process.stderr.write(
    `Public boundary check found risky content in: ${findings.join(", ")}\n`,
  );
  process.stdout.write(
    `${JSON.stringify({
      continue: false,
      stopReason: "Public boundary check found risky content.",
    })}\n`,
  );
} else {
  process.stdout.write(`${JSON.stringify({ continue: true, suppressOutput: true })}\n`);
}

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (entry.isFile()) {
      yield fullPath;
    }
  }
}

function safeRead(filePath) {
  try {
    if (statSync(filePath).size > 500_000) return "";
    return readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function normalize(filePath) {
  return filePath.split("\\").join("/");
}
