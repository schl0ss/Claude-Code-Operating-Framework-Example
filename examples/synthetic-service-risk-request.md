# Synthetic Service Risk Request

We want an AI assistant that reviews shipment events, asset telemetry, maintenance notes, and route constraints, then produces a service-risk brief for operations. It should recommend next actions, but it should not update customers or production systems without approval.

## Notes

This request is intentionally broad. A good framework should slow it down in the right places:

- Synthetic data is safe for the public demo.
- Real customer, asset, or operations data would need classification and approval.
- Operational recommendations must distinguish evidence from inference.
- Customer-facing updates create reputational risk.
- Production writes require a human approval gate.
- "Service risk" needs thresholds before automation.
