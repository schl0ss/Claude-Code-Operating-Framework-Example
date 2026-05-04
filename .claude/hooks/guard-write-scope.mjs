#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { relative, resolve } from "node:path";

const projectDir = resolve(process.env.CLAUDE_PROJECT_DIR || process.cwd());
const input = readHookInput();
const paths = collectPaths(input);

const allowedPrefixes = [
  ".claude/",
  "artifacts/",
  "data/synthetic/",
  "databricks/",
  "docs/",
  "evals/",
  "examples/",
  "framework/",
  "mcp/",
  "notebooks/",
  "sql/",
  "src/",
];

const allowedFiles = new Set([
  ".gitignore",
  ".mcp.json",
  "CONTEXT.md",
  "NOTICE.md",
  "README.md",
  "package.json",
]);

const denied = paths.filter((filePath) => !isAllowed(filePath));

if (denied.length > 0) {
  writeJson({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: `Public teaser hook blocked write outside approved paths: ${denied.join(", ")}`,
    },
  });
} else {
  writeJson({ continue: true, suppressOutput: true });
}

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

function isAllowed(filePath) {
  const absolute = resolve(projectDir, filePath);
  const relativePath = normalize(relative(projectDir, absolute));

  if (relativePath.startsWith("..")) return false;
  if (allowedFiles.has(relativePath)) return true;
  return allowedPrefixes.some((prefix) => relativePath.startsWith(prefix));
}

function normalize(filePath) {
  return filePath.split("\\").join("/");
}

function writeJson(value) {
  process.stdout.write(`${JSON.stringify(value)}\n`);
}
