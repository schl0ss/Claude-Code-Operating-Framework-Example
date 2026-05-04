#!/usr/bin/env node
import { createInterface } from "node:readline";

const scenarios = [
  {
    id: "scenario-elevated-risk",
    summary: "Delayed transfer plus maintenance warning and route constraint.",
  },
];

const serviceEvents = [
  { event_id: "E-1001", asset_id: "A-17", route_id: "L-104", status: "departed", delay_minutes: 0 },
  { event_id: "E-1002", asset_id: "A-17", route_id: "L-104", status: "transfer_delayed", delay_minutes: 86 },
  { event_id: "E-1003", asset_id: "A-22", route_id: "L-205", status: "arrived", delay_minutes: 12 },
];

const assetSnapshots = [
  { asset_id: "A-17", health: "watch", temperature_c: 7.8, vibration: "warning" },
  { asset_id: "A-22", health: "normal", temperature_c: 5.1, vibration: "normal" },
];

const routeConstraints = [
  { constraint_id: "C-9", route_id: "L-104", type: "weather_window", severity: "medium" },
  { constraint_id: "C-12", route_id: "L-205", type: "yard_capacity", severity: "low" },
];

const policyExcerpt = {
  title: "Public Demo Approval Policy",
  rules: [
    "Customer-facing updates require approval.",
    "Production status changes require approval.",
    "Synthetic data may be used without approval.",
    "Real customer, asset, or operations data requires classification first.",
  ],
};

const tools = [
  {
    name: "list_synthetic_scenarios",
    description: "List the tiny synthetic scenarios available to the public demo.",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
  {
    name: "get_service_events",
    description: "Return synthetic service events for the public demo.",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
  {
    name: "get_asset_snapshot",
    description: "Return synthetic asset snapshots for the public demo.",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
  {
    name: "get_route_constraints",
    description: "Return synthetic route constraints for the public demo.",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
  {
    name: "get_policy_excerpt",
    description: "Return the public approval policy excerpt.",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  if (!line.trim()) return;

  try {
    const message = JSON.parse(line);
    handleMessage(message);
  } catch (error) {
    sendError(null, -32700, `Invalid JSON: ${error.message}`);
  }
});

function handleMessage(message) {
  if (message.method === "initialize") {
    sendResult(message.id, {
      protocolVersion: "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: {
        name: "synthetic-logistics",
        version: "0.2.0-public-teaser",
      },
    });
    return;
  }

  if (message.method === "tools/list") {
    sendResult(message.id, { tools });
    return;
  }

  if (message.method === "tools/call") {
    callTool(message);
    return;
  }

  if (message.id !== undefined) {
    sendError(message.id, -32601, `Unsupported method: ${message.method}`);
  }
}

function callTool(message) {
  const name = message.params?.name;
  const value = {
    list_synthetic_scenarios: scenarios,
    get_service_events: serviceEvents,
    get_asset_snapshot: assetSnapshots,
    get_route_constraints: routeConstraints,
    get_policy_excerpt: policyExcerpt,
  }[name];

  if (!value) {
    sendError(message.id, -32602, `Unknown tool: ${name}`);
    return;
  }

  sendResult(message.id, {
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            boundary: "Synthetic public demo context. Not a production connector.",
            value,
          },
          null,
          2,
        ),
      },
    ],
  });
}

function sendResult(id, result) {
  process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id, result })}\n`);
}

function sendError(id, code, message) {
  process.stdout.write(
    `${JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } })}\n`,
  );
}
