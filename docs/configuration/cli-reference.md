---
runme:
  id: 01HX525D99NZJ6YPEFFBVMRTC6
  version: v3
sidebar_position: 3
title: CLI Reference
---

# Commands and Flags

Runme executes commands inside your runbooks, documentation, and READMEs. It parses commands directly from Markdown files to make them executable.

### NAME

Runme [command]: Specific commands or actions in Runme to perform different tasks.

Runme [flags]: Optional configurations to modify the behavior of our Runme runbook.

### Runme Commands:

Below are some available commands within Runme

| Commands   | Description                                                |
| ---------- | ---------------------------------------------------------- |
| branch     | Suggest a branch name (aka branchGPT)                      |
| completion | Generate the autocompletion script for the specified shell |
| eval       | Run agent task evals with Runme                            |
| extension  | Check your Stateful VS Code extension status               |
| fmt        | Format a Markdown file into canonical format               |
| help       | Help about any command                                     |
| list       | List available commands                                    |
| login      | Log in to Runme (optional)                                 |
| logout     | Log out from Runme                                         |
| open       | Launch Runme in a headless web client                      |
| print      | Print a selected snippet                                   |
| run        | Run a selected command                                     |
| suggest    | Use our suggestion engine to give contextual advice        |
| tui        | Run the interactive TUI                                    |

See [Agent Task Evals](/eval) for the experimental `runme eval` command group. It is distinct from normal notebook execution and is used for evaluation task datasets, eval job evidence, comparison, and promotion workflows.

### Runme Flags

Runme supported configuration flags.

| Flags                        | Description                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| --allow-unknown              | Display snippets without known executor (default true)                                                |
| --allow-unnamed              | Allow scripts without explicit names                                                                  |
| --background                 | Enable running background blocks as background processes                                              |
| --chdir string               | Switch to a different working directory before executing the command (default "~/oss/docs.runme.dev") |
| --entries int                | Number of entries to show in TUI (default 5)                                                          |
| --env-order stringArray      | List of environment files to load in order. (default [.env.local,.env])                               |
| --exit                       | Exit TUI after running a command                                                                      |
| --filename string            | Name of the README file (default "[README.md](http://readme.md/)")                                    |
| --filter string              | Regular expression to filter results, by filename and task name                                       |
| --git-ignore                 | Whether to respect .gitignore file(s) in project (default true)                                       |
| -h, --help                   | Help for Runme                                                                                        |
| --ignore-pattern stringArray | Patterns to ignore in project mode (default [node_modules])                                           |
| --insecure                   | Run command in insecure-mode                                                                          |
| --load-env                   | Load env files from a local project. Control which files to load with --env-order (default true)      |
| --project string             | Root project to find runnable tasks                                                                   |
| -s, --server string          | Server address to connect runner to                                                                   |
| --tls string                 | Directory for TLS authentication (default "~/Library/Application Support/runme/tls")                  |
| -v, --version                | -v, --version                                                                                         |
