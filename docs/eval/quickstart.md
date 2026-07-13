---
sidebar_position: 1
title: Quickstart
---

# Quickstart

This quickstart runs a simple agent task eval through Runme, opens the eval dashboard, compares results, and previews promotion with eval evidence.

## Install the Harbor adapter

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

## Run a smoke eval

The examples below use task datasets from the Runme repository. Clone `runmedev/runme` or use an existing checkout, then run the commands from the Runme repository root.

Run the smoke dataset with Harbor's built-in `oracle` solution runner:

```sh
runme eval examples/harbor/datasets/runme-smoke \
  --task-dir simple-agent \
  --agent oracle
```

Each eval run writes job and trial metadata under `.runme/evals/jobs` by default.

## Run with a real agent

Use a real agent when you want to evaluate an installed local agent CLI:

```sh
runme eval examples/harbor/datasets/runme-smoke \
  --task-dir simple-agent \
  --agent codex
```

You can replace `codex` with another supported agent, such as `claude-code`, `cursor-cli`, or `openclaw`, after that agent is installed and authenticated locally.

## Run with a real rubric

Use a rubric-based task when the verifier should score multiple criteria instead of returning a single pass or fail result. The Runme repository includes a text-statistics example built with Harbor's [RewardKit](https://www.harborframework.com/docs/rewardkit), with weighted criteria defined in the task's [rubric code](https://github.com/runmedev/runme/blob/main/examples/harbor/datasets/runme-rewardkit/text-stats-reward/tests/criteria.py). RewardKit is one way to break out reward scores; Harbor tasks can report rewards from any verifier.

Rubrics with LLM judges may require provider credentials, such as `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`. Harbor reports missing environment variables with a clear error.

```sh
runme eval examples/harbor/datasets/runme-rewardkit \
  --task-dir text-stats-reward \
  --agent codex

# Output:
runme-rewardkit • runme-codex • gpt-5.3-codex-spark
┏━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━┓
┃ Trials ┃ Exceptions ┃ Correctness ┃ Reward ┃ Structure ┃
┡━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━┩
│      1 │          0 │       1.000 │  0.944 │     0.545 │
└────────┴────────────┴─────────────┴────────┴───────────┘

Job Info
Total runtime: 8s
Results written to .runme/evals/jobs/2026-07-01__15-45-58/result.json
```

To run the same rubric with the deterministic oracle solution runner, replace `codex` with `oracle`.

## Run with a Harbor environment

Use `--env` to select one of the Harbor environments provided by the task dataset. When `--env` is omitted, Runme uses its default environment. For Docker environment configuration and task authoring details, see Harbor's [task environment docs](https://www.harborframework.com/docs/tasks#environment).

The RewardKit example also provides a Docker environment. Pass `OPENAI_API_KEY` explicitly because Docker runs hermetically and does not reuse your local agent OAuth session:

```sh
OPENAI_API_KEY="$OPENAI_API_KEY" runme eval examples/harbor/datasets/runme-rewardkit \
  --task-dir text-stats-reward \
  --agent codex \
  --model openai/gpt-5.4-mini \
  --env docker
```

## Create your own task scaffold

After running the included examples, use `runme eval task new` to start a task for your own workflow. The scaffold command is part of the `runme` CLI. Running evals still requires the Harbor adapter above.

Start a new task in the default eval dataset:

```sh
runme eval task new runmedev/my-task \
  --description "Evaluate whether an agent can complete my task"
```

This writes `evals/tasks/my-task/` by default. Bare task names are also supported when you pass `--org`; Harbor uses it as the task namespace for datasets and published registry packages:

```sh
runme eval task new my-task --org runmedev
```

Before running the scaffold as a real eval:

- Replace `instruction.md` with the task prompt.
- Implement `tests/test.sh` so it writes a meaningful reward to `$RUNME_REWARD_PATH`.
- Fill in `solution/solve.sh` if you want an oracle or reference solution.
- Add Docker setup in `environment/Dockerfile` only when the task needs `--env docker`.

Run the scaffold after editing:

```sh
runme eval --task-dir my-task --agent claude-code
```

## View eval jobs

Open the eval dashboard for the default jobs directory:

```sh
runme eval view
```

## Compare results

Compare the latest local eval job against the latest Git-tracked baseline:

```sh
runme eval compare

# Output:
Base:   .runme/evals/jobs/2026-07-01__15-12-00  tracked in HEAD
Latest: .runme/evals/jobs/2026-07-01__15-17-32  local

Dataset: examples/harbor/datasets/runme-rewardkit
Agent: runme-codex
Model: gpt-5.3-codex-spark
Environment: runme_harbor.environment:RunmeEnvironment

Metadata mismatches:
  model: gpt-5.4-mini -> gpt-5.3-codex-spark

Job:
  completed: 1 -> 1  +0
  errors:    0 -> 0  +0
  evals:     1 -> 1  +0

Results:
  runme-rewardkit: reward 1.000 -> 0.944  -0.056

Recommendation: metadata differs; review mismatches before promotion.
```

`runme eval compare` is read-only. It prints an advisory recommendation based on job counters and overlapping result rewards. It does not commit, promote, or enforce policy. Use `--format json` when you need machine-readable output.

## Preview promotion

Before creating a commit, preview which eval evidence would be added:

```sh
runme eval promote --latest --dry-run

# Output:
Selected eval job: .runme/evals/jobs/2026-07-01__15-17-32
Selection: latest job under .runme/evals/jobs
Evidence mode: compact
Files to add:
  .runme/evals/jobs/2026-07-01__15-17-32/config.harbor.json
  .runme/evals/jobs/2026-07-01__15-17-32/result.json
  ...

Comparison:
Base:   .runme/evals/jobs/2026-07-01__15-12-00  tracked in HEAD
Latest: .runme/evals/jobs/2026-07-01__15-17-32  local

Metadata mismatches:
  model: gpt-5.4-mini -> gpt-5.3-codex-spark

Results:
  runme-rewardkit: reward 1.000 -> 0.944  -0.056

Promotion gate: blocked
Reason: metadata differs; review mismatches or pass --promote-anyway to promote anyway

Proposed commit message:

Promote changes verified by task eval
...
```

The dry run prints the selected eval job, evidence mode, files to add, comparison result, and proposed commit message.

## Promote with eval evidence

After staging the source changes you want to promote, add eval evidence to the commit:

```sh
git add <changed-files>
runme eval promote --latest
```

By default, promotion records compact eval evidence. Use `--artifacts` only when you need full logs and trial outputs; artifacts can contain sensitive information.

To commit only eval evidence when no source changes are staged:

```sh
runme eval promote --latest --evidence-only
```

If comparison blocks promotion and you intentionally want to continue, use:

```sh
runme eval promote --latest --promote-anyway
```
