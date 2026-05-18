# Runme CLI

With the CLI, you can run commands from your Notebooks in the terminal. The Runme CLI is available for MacOS, Windows, and other platforms.

<Infobox type="sidenote" title="Install Runme">

To get started with the Runme CLI, it is important that you have Runme CLI installed. The [installation](/installation/cli) will guide you through this process.

</Infobox>

To confirm the installation and the Runme version running on your machine, run the command `runme —v`.

With the CLI, it is easy to execute Runme commands and flags.

In this section, we will demonstrate how to execute Runme commands and run Markdown files within a terminal.

Runme won't work if your current working directory doesn't contain a README file at the top level!

## Executing Runme Commands and Flags

Runme parses every shell or bash code block of a Markdown file and allows you to execute it within your terminal environment. It comes with several commands that help you to run code blocks in your Markdown successfully. To get a list of the available commands, run the command below:

```sh {"id":"01J44HVAP9TQ9XKZKFGJBZVCES"}
runme help
```

This will return a full list of the available commands and flags. The Runme flags and commands make it easy to run Markdown files from the CLI.

```plaintext {"id":"01J44HY9YXEG3W0M2CFV297RH4"}
Runme executes commands inside your runbooks, docs, and READMEs. Parses commands
directly from markdown files to make them executable.

Usage:
  runme [flags]
  runme [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  extension   Check your Runme VS Code extension status
  fmt         Format a Markdown file into canonical format
  help        Help about any command
  list        List available commands
  open        Launch Runme in a headless web client
  print       Print a selected snippet
  run         Run a selected command
  tui         Run the interactive TUI

Flags:
      --allow-unknown                Display snippets without known executor (default true)
      --allow-unnamed                Allow scripts without explicit names
      --background                   Enable running background blocks as background processes
      --chdir string                 Switch to a different working directory before executing the command (default "/Users/macbookpro/Desktop/istio-1.22.3")
      --entries int                  Number of entries to show in TUI (default 5)
      --env-order stringArray        List of environment files to load in order. (default [.env.local,.env])
      --exit                         Exit TUI after running a command
      --filename string              Name of the README file (default "README.md")
      --git-ignore                   Whether to respect .gitignore file(s) in project (default true)
  -h, --help                         Help for runme
      --ignore-pattern stringArray   Patterns to ignore in project mode (default [node_modules,.venv])
      --insecure                     Run command in insecure-mode
      --load-env                     Load env files from local project. Control which files to load with --env-order (default true)
      --log                          Enable logging
      --log-file string              Log file path (default "/var/tmp/runme.log")
      --project string               Root project to find runnable tasks
  -s, --server string                Server address to connect runner to
      --stateful                     Set Stateful instead of the Runme default
      --tls string                   Directory for TLS authentication (default "/Users/macbookpro/Library/Application Support/runme/tls")
  -v, --version                      Version of runme

Use "runme [command] --help" for more information about a command.

Feedback:
  For issues and questions join the Runme community at https://discord.gg/jFy92yxT
```

The base command for the Runme CLI is runme. For example, to run an interactive Terminal User Interface(TUI), the command below does that.

```sh {"id":"01J44HV6XGWQ49QVGJPWG0CM7R"}
# short for "runme tui"
runme
```

![Runme TUI Usage](/img/runme-tui.gif)

### Proximity in Directory Tree

Proximity in the directory tree helps you organize and easily access your code block’s file. Runme uses the proximity rule in its interactive terminal UI to ensure that code block files in the root directory are easier to find and use than those that are deeply nested in the directory structure.

For example, if you have two files with deploy commands:

- One file is located at `./CONTRIBUTING.md`
- Another file is located at `./examples/README.md`

Since `./CONTRIBUTING.md` is in the root directory and `./examples/README.md` is nested deeper within the `examples` folder, the command in `./CONTRIBUTING.md` will appear higher in the terminal UI compared to the command in `./examples/README.md`.

![proximity in directory tree ](/img/how-runme-works/runme-cli-ptd.png)

This structure helps prioritize commands that are closer to the top-level directory, making them more accessible and easier to use in the Interactive Terminal UI.

### Get a List of All Code Blocks in a Directory

If you need to view all the code blocks in a directory, you can use the `runme list`, which provides a list of every line block in your directory.

```sh {"id":"01J44J36T7S9WRHGZ4T89S9G4A"}
runme list
```

This command also lets you view all the code blocks in every Markdown file in your directory.

![runme list](/img/how-runme-works/runme-cli-lists.png)

### Navigating to a Specific File

With Runme CLI, you can also navigate to a specific Markdown file. Use the command below to navigate to a specific Markdown file in a directory.

```sh {"id":"01J44J4G50SW91RX83YJBCCSMG"}
runme ls --filename ../../README.md
```

This command returns all code blocks in the specified Markdown file.

![navigating specific file](/img/how-runme-works/runme-cli-singlefile.png)

By default, Runme will try to open a `Readme.md` file in your current work directory but you can modify this by using the `filename` and `chdir` flags, e.g.:

```sh {"id":"01J44KVT4KAT13FXBAZRGFG5JJ"}
runme ls --filename README.md --chdir ../..
```

You can use the `--chdir` flag to alter the working directory or `--filename` to specify any other Markdown file, without changing the environment's working directory.

### Named vs Unnamed Code Block

You have the option to name your code blocks. Unlike the Runme Notebook UX, the CLI filters out unnamed code blocks by default. However, you can view your unnamed code blocks directly on your CLI by adding the `-- allow-unnamed` flag to any CLI command, which will deactivate the filter and display all unnamed code blocks.

The highlighted code block in the image below is an unnamed code block.

![runme cli ](/img/how-runme-works/runme-cli-list.png)

## Running Scripts

With Runme CLI, markdown files can be executed in the terminal. This section will explore the various ways to run scripts in the Runme CLI. To run a specific script by name, use the `runme run <command>` subcommand.

**Running a Code Block**

With the Runme CLI, you can run any specific code block in your directory. To do this, run the command below.

his allows you to quickly execute any script present in the README.

```sh {"id":"01J44J6S4QFVGF9F0MMA14S3H8"}
runme run [name of code block]
```

This will run your code block and return the output to your terminal.

![run code block](/img/how-runme-works/runme-cli-run.png)

**Run all Code Blocks in Your Directory**

If you do not want to run your code blocks one after the other, you can run them all simultaneously. To do that, run the command below.

```sh {"id":"01J44J8A8GTX468X5T2TP6P6HY"}
runme run --all --allow-unnamed --skip-prompts
```

This command will run all code block cells, including unnamed ones, and skip the prompts.

imag![skip prompts](/img/how-runme-works/runme-cli-unnamed-prompt.png)

Alternatively, you can run only named cells and skip prompts using the command below:

```sh {"id":"01J44J9K9RY6P3SG7MJDQ0ADY5"}
runme run --all --skip-prompts
```

**Run all Code Blocks in Your Markdown File**

In addition to running your cell, you can run all code blocks in a specific Markdown file. Regardless of the number of commands in the file, they will be executed simultaneously within the Notebook.

You can try this using the command below:

```sh {"id":"01J44JA7NSJB5WQHMW7DC7XDZE"}
runme run --all --allow-unnamed --skip-prompts --filename=Readme2.md
```

This will run all code block cells in the Markdown file, including the unnamed cells, and also skip prompts.

![skip prompts](/img/how-runme-works/runme-cli-skip-prompt.png)

Alternatively, you can run only named cells in the file. To do that, run the command below.

## How to Access Runme Notebook

Runme works with a highly interactive and user-friendly notebook that allows you to run and view your commands and codes. Using the CLI, you can access this notebook UI on your web browser. This will enable you to view and execute your commands and create a Markdown file that can be shared with your teammates anytime.

To access the notebook, first, navigate to the directory where your Markdown file exists in your terminal and run the commands below.

```sh {"id":"01J44JC1P5W47QMJXZRK51D4DH"}
runme open
```

This command opens Runme in your web browser.

![web browser](/img/how-runme-works/runme-cli-notebook.png)

## Additional Resources

See more resources on how Runme works:

- [Getting started with the browser](/getting-started/web)
- [Getting started in VS Code](/getting-started/vscode)
- [Getting started on VS Code SSH and Remote](/getting-started/vscode-ssh)
