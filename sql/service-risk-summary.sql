-- Public teaser query only.
-- Shows the kind of service-risk summary a Data Agent might produce from synthetic tables.

select
  e.route_id,
  e.asset_id,
  max(e.delay_minutes) as max_delay_minutes,
  max(case when a.vibration_state = 'warning' then 1 else 0 end) as has_vibration_warning,
  max(case when c.severity = 'medium' then 1 else 0 end) as has_medium_constraint
from synthetic_service_events e
left join synthetic_asset_snapshots a
  on e.asset_id = a.asset_id
left join synthetic_route_constraints c
  on e.route_id = c.route_id
group by e.route_id, e.asset_id
order by max_delay_minutes desc;
