---
sidebar_position: 1
---

# ▶ Welcome

## Why Runme? ⚡️

The goal of Runme is to enable engineers to capture operational processes as reliable, refinable, and reusable assets called Runme Notebooks. All DevOps engineers have experienced the frustration of not being able to get work done because documentation is out of date, hard to find, or lacking integration with cloud-native tools or infrastructure. By building and curating reliable Runme Notebooks, you can break through this frustration and unlock engineering productivity.

## What is Runme?

Runme makes Markdown documentation actually runnable. It is a cloud-native shell kernel with a notebook, editor, terminal, and CLI interface. Runme helps you build and curate Notebooks and also run them, making it easy to automate step-by-step instructions, especially in cloud-native environments. Runme Notebooks are perfect for capturing and persisting operational knowledge, making operational docs reliable and less likely to become outdated.

<Infobox type="sidenote" title="New: Runme Eval">
Notebooks are linear trajectories through a task. [`runme eval`](/eval) expands that model beyond Markdown, so you can define, replay, and score how agents and workflows reach an outcome.
</Infobox>

## Built on Open Technologies & Standards

Runme is Markdown compatible (and a superset), open source licensed toolchain under Apache 2.0. We also work hard to use open standards for interoperability. Get more details in our [open-source](/resources/open-source) section.

<RunmeStars /><br /><br />

All the code for Runme can be found in four repositories on GitHub:

- [Kernel / CLI](https://github.com/runmedev/runme)
- [VS Code extension](https://github.com/runmedev/vscode-runme)
- [GitHub action](https://github.com/runmedev/runme-action)
- [Docs](https://github.com/runmedev/docs.runme.dev)

## Runme in 2 Minutes

A quick hands-on example of Runme in action.

<video autoPlay loop muted playsInline controls>
  <source src="https://runme.dev/videos/runme-hello-world.mp4" type="video/mp4" />
</video>

<br /><br />
<Infobox type="sidenote" title="Jump forward">
[Install Runme](/installation) or [get started](/getting-started).
</Infobox>

## What Makes a Runme Notebook?

When you create a Notebook using Markdown and then either open its Notebook form in VS Code (or use the CLI), we are adding important capabilities that don't exist in a pure Markdown rendering.

The Notebook interface makes:

- Commands and code executable
- Behavior and output configurable (stored transparently in the Markdown)
- Commands aware of .ENV dependencies

A great example of this is when you specify the **mimetype**. That config metadata tells the Notebook to automatically render an image or a sortable table instead of text for output. We can also interpret URLs to cloud consoles as an interactive dashboard UI.

<br />
<img src="/img/notebook-components.png" style={{width: "80%", display: "inline"}} alt="What is Runme" />
<br /><br />

## What's Next?

- First, you need to [install Runme](/installation) for the client you want to use.
- Next, follow the [Getting Started](/getting-started) guide.

If you've already done that, skip to [Configuring Notebooks](/configuration) or our [Guides](/guide).
