---
sidebar_position: 2
title: Command reference
---

# Task eval command reference

`runme eval` is an experimental command group for running repeatable task datasets against local coding agents. `runme eval task new` helps authors create a starter task under the default dataset layout.

It builds on [Harbor's task, dataset, trial, and job model](https://www.harborframework.com/docs), but Runme presents the workflow through the `runme eval` CLI.

:::info Distinct from notebook execution

`runme eval` does not run Markdown cells from a notebook. It runs evaluation task datasets, collects eval job evidence, compares results, and optionally promotes changes backed by eval output.

:::

## `runme eval`

Run agent task evals with Runme.

```sh
runme eval [dataset-path] [flags] [-- harbor-flags...]
```

When `dataset-path` is omitted, Runme uses `./evals/tasks`.

Important flags:

- `--agent`: Harbor agent to use. Defaults to `oracle`, Harbor's built-in oracle solution runner.
- `--task-dir`: task directory name to include from the Harbor dataset.
- `--jobs-dir`: eval jobs directory. Defaults to `.runme/evals/jobs`.
- `--ask`: do not auto-accept Harbor confirmation prompts.
- `--agent-env`, `--ae`: environment variable to pass to the agent in `KEY=VALUE` format. Can be repeated.
- `--agent-kwarg`, `--ak`: Harbor agent kwarg. Can be repeated.
- `--model`: Harbor agent model.
- `--env`, `-e`: Harbor environment to use. When omitted, Runme's environment is used. Pass a Harbor environment name when the selected task dataset provides one. For Docker environment configuration, see Harbor's [task environment docs](https://www.harborframework.com/docs/tasks#environment).
- `--runme-bin`: Runme binary used by the Harbor environment.
- `--runme-arg`: additional Runme argument used by the Harbor environment. Can be repeated.
- `--runme-harbor-bin`: `runme-harbor` executable.
- `--debug`: print delegated commands.

Supported agents:

- `oracle`: Harbor's built-in oracle solution runner. It runs the task's provided solution and is not an external agent CLI.
- `codex`
- `claude-code`
- `cursor-cli`
- `openclaw`

External agent runs require the selected agent CLI to be installed and authenticated locally. Agent harness support is limited to the CLIs currently tested with `runme eval`; if a harness is missing, please [open a GitHub issue](http://github.com/runmedev/runme/issues/new) with the CLI name, install instructions, and local authentication requirements.

## Runtime environment paths

Runme exposes runtime path metadata to task and verifier commands as environment variables.

Use these variables in task scripts, verifiers, and artifact writers instead of hardcoding workspace, log, or reward paths:

- `RUNME_TASK_WORKDIR`: resolved task workspace.
- `RUNME_TASK_DIR`: task definition directory.
- `RUNME_TASK_NAME`: task name.
- `RUNME_TESTS_DIR`: uploaded verifier tests directory.
- `RUNME_LOGS_DIR`: base trial logs directory.
- `RUNME_AGENT_LOG_DIR`: agent logs directory.
- `RUNME_ARTIFACTS_DIR`: artifact output directory.
- `RUNME_VERIFIER_DIR`: verifier output directory.
- `RUNME_REWARD_PATH`: canonical reward JSON path.
- `RUNME_REWARD_DETAILS_PATH`: optional detailed reward JSON path.

Runtime path variables are set by Runme and take precedence over task environment values with the same names.

### Workdir staging

Harbor's `[environment].workdir` sets the default working directory for task command execution. Runme also uses that value to stage repo-local task state when the path can be mapped back to the current Git workspace.

Runme stages only absolute `/app/...` workdir paths. Empty values, relative paths, `/app`, missing directories, and paths outside the workspace are left alone.

Staging depends on the selected environment:

- When `--env` is omitted, Runme uses its Harbor environment and stages the mapped workdir into the trial workspace. `RUNME_TASK_WORKDIR` points at that staged directory.
- When `--env docker` is selected, Runme mirrors the mapped workdir into the task's `environment/workdir` directory before delegating to Harbor. Docker-based setup can then include that directory from the task environment.

Add `**/environment/workdir/` to `.gitignore` when Docker workdir staging is used. The staged copy is generated eval state, not source.

## `runme eval task new`

Create a Harbor eval task scaffold for Runme.

```sh
runme eval task new <org/name> [flags]
```

When `--tasks-dir` is omitted, Runme writes under `./evals/tasks`.

Important flags:

- `--tasks-dir`: eval tasks directory. Defaults to `./evals/tasks`.
- `--org`: organization namespace for bare task names, such as `runme eval task new my-task --org runmedev`. Harbor uses it for dataset membership and published registry packages.
- `--description`: task description written to `task.toml`.
- `--author`: author in `Name <email>` or `Name` format. Can be repeated. When omitted, Runme uses `git config user.name` and `git config user.email` when available.
- `--no-solution`: do not include `solution/solve.sh`.
- `--force`: overwrite scaffold-owned files in an existing task directory.

Generated files:

- `README.md`: task-local run hint.
- `task.toml`: Harbor task metadata and Runme-compatible environment defaults.
- `instruction.md`: placeholder task instruction.
- `environment/Dockerfile`: optional Docker environment starter.
- `workdir/`: Git-ignored workspace for task-local files.
- `tests/test.sh`: executable verifier stub that writes reward JSON.
- `solution/solve.sh`: executable reference solution stub, unless `--no-solution` is passed.

Behavior:

- Qualified names use Harbor's `org/name` task identifier format and create a local directory named `name`.
- Bare names require `--org`, which supplies the Harbor task namespace.
- The scaffold maps the task workdir to `/app/<dataset>/<task>/workdir`.
- Existing task directories require `--force`.
- `--force` overwrites scaffold-owned files. Review hand-edited tasks before using it.

## `runme eval view`

View eval jobs in the dashboard.

```sh
runme eval view [jobs-dir] [flags]
```

Important flags:

- `--port`: dashboard port. Defaults to the first open port from `8080`.
- `--no-open`: do not open the dashboard in the default browser.
- `--runme-harbor-bin`: `runme-harbor` executable.
- `--debug`: print delegated commands.

## `runme eval compare`

Compare eval jobs for a dataset.

```sh
runme eval compare [dataset-path] [flags]
```

When `dataset-path` is omitted, Runme uses `./evals/tasks`. Runme compares the latest Git-tracked eval job for that dataset with the latest local eval job for the same dataset under the jobs directory.

Important flags:

- `--jobs-dir`: eval jobs directory. Defaults to `.runme/evals/jobs` under the project root.
- `--job`: compare against a specific local eval job.
- `--base`: Git ref used to find the tracked baseline eval job. Defaults to `HEAD`.
- `--format`: output format, either `text` or `json`. Defaults to `text`.
- `--include-oracle`: allow comparing eval jobs that only used Harbor's built-in oracle solution runner.
- `--allow-errors`: allow comparing eval jobs with errored trials.

Behavior:

- The command is read-only.
- It filters tracked baselines, local candidates, and explicit `--job` values by dataset path.
- It uses job counters and overlapping result rewards.
- It prints an advisory recommendation.
- It does not commit, promote, or enforce policy.

## `runme eval promote`

Commit staged changes with eval job evidence.

```sh
runme eval promote [dataset-path] [flags]
```

When `dataset-path` is omitted, Runme uses `./evals/tasks`. Runme selects, compares, and promotes eval jobs for that dataset.

Important flags:

- `--job`: eval job directory to promote.
- `--latest`: promote the latest eval job for the dataset under `--jobs-dir`.
- `--dry-run`: print what would be committed without staging or committing.
- `--evidence-only`: commit only the selected eval job evidence when no source changes are staged.
- `--artifacts`: include full eval artifacts such as logs and trial outputs. These may contain sensitive information.
- `--include-oracle`: allow promoting eval jobs that only used Harbor's built-in oracle solution runner.
- `--allow-errors`: allow promoting eval jobs with errored trials.
- `--promote-anyway`: promote even when eval comparison blocks promotion.
- `--message`: commit subject line. Eval evidence is added to the commit body.

Behavior:

- Requires either `--job` or `--latest`.
- It filters latest-job selection, explicit `--job` values, comparison baselines, and newer-job warnings by dataset path.
- Adds eval evidence to a commit.
- Requires staged changes unless `--evidence-only` is used.
- Blocks promotion on comparison failures unless `--promote-anyway` is used.
- In `--dry-run` mode, prints the selected job, evidence mode, files to add, comparison result, and proposed commit message.
