---
sidebar_position: 5
title: Dagger
---

# Runme for Dagger

In this guide, we will explain step-by-step how to leverage both Dagger Shell and "Dagger Call" integrations into Runme and how it works.

## Getting Started

To proceed with this guide, it is crucial to install Dagger first:

- **Install Runme**

Install the [Runme extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) in your VS Code editor. Runme also provides other [client interfaces](/installation/index.md) where you can run your Markdown file. Once installed, you can make Runme your [default Markdown viewer](/installation/vscode#how-to-set-vs-code-as-your-default-markdown-viewer).

- **Install Docker(if not already installed)**

Get Docker installed and running on your local machine. You can download Docker from the [official website](https://www.docker.com/). After downloading Docker, you need to keep it running before executing any command.

- **Install Dagger**

Install Dagger on your local machine. The [Dagger installation guide](https://docs.dagger.io/install/) provides more information on how to install Dagger on any platform of your choice. if you have brew installed already run the command below to install dagger

```sh
brew install dagger/tap/dagger
```

## Dagger Shell with ".dag" Notebooks

Dagger shell is the latest interface for interacting with Dagger. If you're looking for `dagger call`, please see futher down in this guide. While it's up to personal preference, we recommend using Dagger Shell to express your Dagger pipelines. Its syntax is more concise and easier to read. For a complete introduction to Dagger shell, please visit the [Dagger docs](https://docs.dagger.io/).

Of course, Runme can always bring up an instance of Dagger shell using the following command. This will drop you into a REPL prompt interface interface.

```sh
$ dagger shell
```

### Your first Dagger Shell notebook

While a shell session is great during interactive development, Runme notebooks excel at expressing Dagger pipelines in a self-documenting manner. This is useful to document tasks, workflows, onboarding instructions, or the beaten path of your Dagger pipelines.

There are two ways to get started with the native integration with Dagger shell:

1. Add `dagger shell` as interpreter in your [cell configuration](https://docs.runme.dev/configuration/cell-level#cell-configuration-keys) or globally in the notebook document's [frontmatter](https://docs.runme.dev/configuration/document-level).
2. Or, create a new `my-notebook.dag` notebook file (in the Runme Extension) in your project which will auto-set the document's frontmatter to use `dagger shell` as the interpreter.

> 💡 Note that the `.dag` is interchangeable with `.md` and both will render to Markdown. The `.dag` extension is simply a signal to the Runme extension to bootstrap the document with the Dagger shell interpreter.

![dagger shell in frontamtter](/img/integration/runme-dagger-shell-frontmatter.png)

### Running Dagger Shell-native in Notebook Cells

Here's a quick rundown how to run a Dagger Module via the Dagger Shell inside a cell. For a end-to-end example, please see [README.md](https://github.com/runmedev/docs.runme.dev/blob/main/dagger/README.md).

Following simple snippet will build the runme binary for tag v3.12.2 and export it to a temporary file. While the language is Dagger shell, the syntax is standard shell compatible. Much like how `bash` or `zsh` are just `sh`.

```sh {"interpreter":"dagger shell","name":"RunmeBinary","terminalRows":"16"}
github.com/purpleclay/daggerverse/golang $(git https://github.com/runmedev/runme | tag v3.12.2 | tree) |
  build --arch arm64 --os darwin |
  file runme |
  export /tmp/runme_binary
```

Running the above snippet will produce the following output and drop a binary at `/tmp/runme_binary`.

![build runme binary via dagger shell](/img/integration/runme-dagger-shell-snippet.png)

### Run the same cell with Runme CLI

In case where opening the notebook interface is not ideal, you can run the same cell with the Runme CLI by running the following command:

```sh
$ runme run RunmeBinary
```

![build runme binary via named cell](/img/integration/runme-dagger-shell-named.png)

### Compose Pipelines Chaining Cells

Shell expression syntax in Dagger Shell allows you to chain cells together. This is useful when you want to build more complex pipelines. The ability to build pipelines incrementally or build individual artifacts in isolation is a powerful feature for development, troubleshooting, and testing.

```sh {"interpreter":"dagger shell","name":"RunmeVersion"}
git https://github.com/runmedev/runme | tag v3.12.2 | tree
```

This exports a reference to Runme's git repository at the tag `v3.12.2` under `RunmeVersion`. In turn, this reference can be used with a shell expression to build the runme binary in separate cell.

```sh {"interpreter":"dagger shell","name":"RunmeBinary"}
github.com/purpleclay/daggerverse/golang $(RunmeVersion) |
  build |
  file runme |
  export /tmp/runme_binary
```

Running the `RunmeBinary` cell in the notebook or the Runme CLI will produce the following output and drop a Runme binary at `/tmp/runme_binary`.

![build runme binary referencing the version](/img/integration/runme-dagger-shell-reference.png)

To make the reference names clear, Runme will automatically add comments to a cell's markdown representation.

![dagger shell cells exported with names](/img/integration/runme-dagger-shell-reference-comment.png)

This allows pipelines to be expressed incrementally, cell-by-cell, and still be clear, readable, and most of all, executable across notebooks, editor, and the CLI.

Please check out the Runme Extension's [shell.dag](https://github.com/runmedev/vscode-runme/blob/main/dagger/notebook/shell.dag) for a more comprehensive example.

## Alternative Interface: "dagger call"

Dagger CLI is an alternative core interface used to interact with Dagger’s functions. You can chain commands and build entire DevOps pipelines by calling dagger functions from the CLI. While we do recommend using Dagger Shell, this CLI interface is still useful.

This section will explore navigating the Dagger CLI in your Runme Notebooks. We will explain how it works in detail.

### Calling Dagger Modules within Runme Notebook cell

Runme Notebook interface includes a terminal environment with [additional features](/getting-started/vscode#interactive-mode), that gives you the experience of working in your regular terminal and more. With the Runme Notebook interface, you can write and execute Dagger commands.

Let’s explore the code block below.

```sh
dagger call \
    -m github.com/purpleclay/daggerverse/golang@v0.3.0 \
    --src "https://github.com/runmedev/runme#main" \
    build \
        --arch $(go env GOARCH) \
        --os $(go env GOOS) \
    file \
        --path runme
```

This code uses the Dagger CLI to build a [Go](https://go.dev/) project from the `runme` GitHub repository using your system's architecture and Operating System. After the build, it fetches a specific file from the `runme` project.

Output:

![runme binary](/img/integration/runme-dagger-runme-binary.png)

This output shows the steps executed by Dagger, which successfully performed the tasks in the code block.

### Run with Runme CLI

Runme offers additional support for the Dagger CLI by providing options and support based on the context of your current task.

When you insert a Dagger command into a Runme cell, Runme automatically provides helpful CLI options based on the type of result returned (like a file, directory, or text). It shows buttons like "Export" or "Size," allowing you to run the next step with a quick click.

![runme cli dagger ](/img/integration/runme-dagger-file-ready.png)

To retrieve the file's name, click on `Name`. A code block similar to the one below will be created and automatically run to display the file's name.

```sh
dagger call \
    -m github.com/purpleclay/daggerverse/golang@v0.3.0 \
    --src "https://github.com/runmedev/runme#main" \
    build \
        --arch $(go env GOARCH) \
        --os $(go env GOOS) \
    file \
        --path runme name
```

To get the size of your file, click on `size`. A code block similar to the one below will be created and automatically run to display the size of your file.

```sh
dagger call --progress=$PROGRESS \
  -m golang \
  --src ../runme \
  build \
  file \
    --path runme size
```

To view the contents of your file, click on `content`. A code block similar to the one below will be created and automatically run to display the contents of your file.

```sh
# This code block will show the contents of your specified file
dagger call \
    -m github.com/purpleclay/daggerverse/golang@v0.3.0 \
    --src "https://github.com/runmedev/runme#main" \
    file \
    --path runme contents
```

To export your file, click on `export`. First, you will be prompted to choose where you'd like to save the file, and the file path will be displayed. After selecting the location, a code block similar to the one below will be created and automatically run to export your file.

```sh
# This code block will export the specified file from your project
dagger call \
    -m github.com/purpleclay/daggerverse/golang@v0.3.0 \
    --src "https://github.com/runmedev/runme#main" \
    build \
        --arch $(go env GOARCH) \
        --os $(go env GOOS) \
    file \
    --path runme export --path runme
```

### Running Dagger Functions with a Single Click

With the Runme interactive interface, you can run your Dagger functions with a single click. When you set up a function call within a notebook cell, Runme improves the experience by offering follow-up actions tailored to the return type.

This interactive interface makes the execution of complex pipelines easy and eliminates the need to type follow-up commands manually.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/runme-dagger-output.mp4" type="video/mp4" />
  <source src="../../static/videos/runme-dagger-output.mp4" type="video/mp4" />
  <source src="/videos/runme-dagger-output.webm" type="video/webm" />
  <source src="../../static/videos/runme-dagger-output.webm" type="video/webm" />
</video>
<br/>

## Running Dagger Pipelines in Runme (using the CLI)

More than just running Dagger commands, developing pipelines, or troubleshooting them in VSCode, Runme also helps you run your Dagger pipelines inside your notebook through the Runme CLI.

If you have a Markdown file with your dagger pipeline commands written, you can run your pipeline from the terminal by running this command `$ runme run --filename my-notebook.md --all --skip-prompts`.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/runme-dagger-demo.mp4" type="video/mp4" />
  <source src="../../static/videos/runme-dagger-demo.mp4" type="video/mp4" />
  <source src="/videos/runme-dagger-demo.webm" type="video/webm" />
  <source src="../../static/videos/runme-dagger-demo.webm" type="video/webm" />
</video>
<br/>

You can also run individual cells using the names of the cells or select them individually from Runme’s TUI.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/runme-tui-dagger.mp4" type="video/mp4" />
  <source src="../../static/videos/runme-tui-dagger.mp4" type="video/mp4" />
  <source src="/videos/runme-tui-dagger.webm" type="video/webm" />
  <source src="../../static/videos/runme-tui-dagger.webm" type="video/webm" />
</video>
<br/>

To learn more about how the Runme CLI functions and how to use it for your project, check out [our documentation.](/getting-started/cli)

## Additional Resources

To learn more about Runme, see more resources on Runme Integrations:

[Runme Cloud Renderers](/guide/cloud-render/)
[Data Rendering with Runme and JSON](/configuration/output-rendering)
[How to Use Foyle AI with Runme](/guide/foyle)
