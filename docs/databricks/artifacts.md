# Databricks-shaped Artifacts

Databricks appears in this repo only as locally inert artifact shape.

The purpose is to show how Claude Code workflows can wrap data engineering and analytics work without publishing a reusable platform accelerator.

## Included

- `databricks/job.service-risk-triage.example.yml`: example job shape only.
- `notebooks/service-risk-triage.py`: notebook-shaped placeholder.
- `sql/service-risk-summary.sql`: synthetic summary query.

## Deliberately Withheld

- Workspace configuration.
- Cluster policies.
- Authentication setup.
- Deployment scripts.
- Real schemas.
- Optimization logic.
- Governed data access patterns.

## How It Fits The Framework

The Data Agent would treat notebook and SQL outputs as artifacts. The Decision Agent would use those artifacts to produce a risk brief. The Critic Agent would test whether claims are supported. The Safety Agent would block real workspace access, production writes, or customer-facing actions until approved.
