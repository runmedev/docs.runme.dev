---
sidebar_position: 1
title: Quickstart
---

# Quickstart

This quickstart runs a simple agent task eval through Runme, opens the eval dashboard, compares results, and previews promotion with eval evidence.

## Install The Adapter

`runme eval` requires the optional `runme-harbor` adapter:

```sh
uv tool install runme-harbor
```

The adapter keeps `runme eval` compatible with Harbor's evaluator, dataset, and job model.

Confirm that Runme is available:

```sh
runme --version
runme eval --help
```

## Run A Smoke Eval

The examples below use task datasets from the Runme repository. Clone `runmedev/runme` or use an existing checkout, then run the commands from the Runme repository root.

Run the smoke dataset with Harbor's built-in `oracle` solution runner:

```sh
runme eval examples/harbor/datasets/runme-smoke \
  --task-dir simple-agent \
  --agent oracle
```

Each eval run writes job and trial metadata under `.runme/evals/jobs` by default.

## Run With A Real Agent

Use a real agent when you want to evaluate an installed local agent CLI:

```sh
runme eval examples/harbor/datasets/runme-smoke \
  --task-dir simple-agent \
  --agent codex
```

You can replace `codex` with another supported agent, such as `claude-code`, `cursor-cli`, or `openclaw`, after that agent is installed and authenticated locally.

## View Eval Jobs

Open the eval dashboard for the default jobs directory:

```sh
runme eval view
```

To keep the dashboard from opening a browser automatically:

```sh
runme eval view --no-open
```

## Compare Results

Compare the latest local eval job against the latest Git-tracked baseline:

```sh
runme eval compare
```

`runme eval compare` is read-only. It prints an advisory recommendation based on job counters and overlapping result rewards. It does not commit, promote, or enforce policy.

For machine-readable output:

```sh
runme eval compare --format json
```

## Preview Promotion

Before creating a commit, preview which eval evidence would be added:

```sh
runme eval promote --latest --dry-run
```

The dry run prints the selected eval job, evidence mode, files to add, comparison result, and proposed commit message.

## Promote With Eval Evidence

After staging the source changes you want to promote, add eval evidence to the commit:

```sh
git add <changed-files>
runme eval promote --latest
```

By default, promotion records compact eval evidence. Use `--artifacts` only when you need full logs and trial outputs; artifacts can contain sensitive information.

If comparison blocks promotion and you intentionally want to continue, use:

```sh
runme eval promote --latest --promote-anyway
```

To commit only eval evidence when no source changes are staged:

```sh
runme eval promote --latest --evidence-only
```
