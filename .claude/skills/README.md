# Project skills

The `listing-description`, `lead-follow-up` and `offer-comparison` skills
are vendored from [polytheseus/real-estate-skills](https://github.com/polytheseus/real-estate-skills)
(commit `cae768f`, MIT License — see `LICENSE-real-estate-skills`).

Claude Code loads them automatically in this repo; invoke with
`/listing-description`, `/lead-follow-up` or `/offer-comparison`, or just ask.

## Realtor Starter Pack

`copywriting`, `funnel-building`, `sphere-activation`, `prospecting-research`,
`cold-call-coach`, `lead-magnet-builder`, `community-group-builder`,
`realtor-website-builder` and `lead-follow-up-crm` are vendored from
[tderoussel/agent-skills](https://github.com/tderoussel/agent-skills)
(commit `1d5d427`, MIT License — see `LICENSE-agent-skills`).

`lead-follow-up-crm` is that repo's `lead-follow-up`, renamed so it doesn't
clash with the polytheseus skill above. It works from the real conversation
history and CRM; the polytheseus one drafts a first reply and follow-up sequence.

## Rest of tderoussel/agent-skills

The other 19 skills from the same repo are also installed here, and its 4
subagents (`planner`, `builder`, `reviewer`, `researcher`) are in
`.claude/agents/`. Same MIT License (`LICENSE-agent-skills`).

## Claude Projects version

`claude-projects/real-estate-skills-pack.md` bundles 25 of these skills into
one file for a Claude Project (upload it to Project knowledge and paste
`claude-projects/project-instructions.txt` into Project instructions). The six
developer skills (`ship-gate`, `fleet-brief`, `overnight-build`,
`codebase-audit`, `vault-doctor`, `session-log`) are left out because they
need Claude Code.
