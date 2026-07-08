---
title: FAQ
---

# Frequently Asked Questions

## Runme and Stateful

Runme was developed by the venture-backed company Stateful, Inc. It was built as an open-source technology to address the issues of bitrot and outdated developer and operator documentation. Runme serves as a platform for running interactive runbooks in Markdown files, supporting scripting and pipelines. We believe in open-source software and plan for Runme to continue serving the community in this way.

## Does Runme work with other notebook formats?

Currently, we are focused on using Markdown, which is widely used for documentation. Runme stores configuration in a way similar to Markdown, ensuring compatibility with regular Markdown tools. While there are no specific plans yet, we may create tools to help migrate from other notebook formats to Runme. This could help teams centralize their workflows and adopt open standards.

## How do you plan to make money with Runme? Will you introduce paid enterprise or support plans, or consider monetizing user data?

At this time, we do not plan to charge for Runme, which is available under the open-source APL-2.0 license. Stateful, Inc. is focused on building open technology to solve outdated documentation issues. We are committed to maintaining Runme as an open-source solution for the community.

We assure you that we will not monetize or sell users' data. Monetization opportunities may arise in the form of features that add value to team collaboration, discoverability, or auditing for internal repositories. However, the core functionality of Runme, such as running runbooks, will remain available without the need for proprietary products from Runme or third parties.

## What is the Runme default editor in VS Code?

VS Code is one of Runme's client interfaces for running Markdown files. To use Runme in VS Code, install the Runme Extension, which enables you to create and manage interactive runbooks directly in your editor. With this extension, you can edit, save output, update documents, select custom interpreters, and more—all within VS Code. Once installed, every Markdown file in VS Code is displayed as a runbook.

## What differentiates Runme from a common Jupyter Notebook?

Runme offers several unique features compared to Jupyter Notebooks:

- Executes cells in multiple programming languages out of the box (see supported languages)
- Stores notebooks/runbooks in 100%-compatible Markdown
- Provides consistent results across clients (CLI, Extension, CI/CD)
- Focuses on a great CLI and VS Code experience, including web permutations
- Integrates with popular platforms, enhancing developer experience (e.g., workflow.yaml)
- Supports CI/CD via CLI/GH Action, Docker images, for test automation

## How do I share a variable between cells in Runme?

Runme uses a "Piping" feature, which is denoted by `$__`. This allows you to pass a variable declared in one cell to another within the same file. While variables in one cell cannot be accessed directly by another cell, this method allows for effective sharing of information between cells.

## How do I switch back from the Runme Notebook view to the Markdown text document?

You can easily switch between Runme's notebook UI and the standard Markdown text editing experience. More details can be found in the [Runme UX documentation](https://docs.runme.dev).

## Why is the extension connecting to home.runme[.]dev on port 443?

The connection to home.runme.dev:443 is related to telemetry, as documented [here](https://docs.runme.dev/configuration/telemetry). Stateful is open-core, and Runme's telemetry is anonymous and free of personally identifiable information (PII). If you'd like to disable telemetry, follow the steps in the documentation.

Stateful uses the open-source Runme kernel, and telemetry is implemented similarly to an anonymous tracking pixel.

## How do I use a Unix Domain Socket instead of TCP/loopback?

You can switch the extension to use a Unix Domain Socket (UDS) in the VS Code settings. Choose `runme.server.transportType` and select UDS instead of TCP (default). This option is available to satisfy security requirements for certain environments and tools.
