---
runme:
  id: 01J88N4SQ1GXFYG7H5NC7RQ4KY
  version: v3
sidebar_position: 6
title: Walkthrough
---

# Runme Walkthrough

> 💡 This document is a self contained Runme Notebook which will guide you through Runme's key features. If you have _VS Code_ installed locally, you can open this document in Runme by clicking the _"Open with Runme"_ badge on **[docs.runme.dev](https://docs.runme.dev/)** which will open this document as a notebook locally. If you are already inside VS Code, you can skip over the next paragraph.

## Clone the Repository

```sh {"id":"01HY0Y62WJCT2BVD5VA2HZ32TG"}
git clone --depth=1 https://github.com/runmedev/docs.runme.dev.git
cd docs.runme.dev
```

Unless you already have VS Code installed locally, go ahead and install the Runme CLI. Otherwise skip to the next paragraph please.

### MacOS

```sh {"cwd":"docs.runme.dev","id":"01HY0SZCMGA291TVE2R1QKNVX4"}
brew install runme && runme open
```

### Linux & Windows

```sh {"cwd":"docs.runme.dev","id":"01HY0SZCMGA291TVE2R40BDNJ9"}
npx runme open
```

## Runme by Example

Let's quickly run through some examples:

> 🚨 Please be absolutely sure that you have cloned into the repository and opened the `docs/resources/walkthrough.md` file in the notebook UI inside VS Code.

<br/>

After cloning into the repo you should see something similar to the follow screenshot:

![Runme in VS Code](/img/doc-in-vscode.png)

## Generic Docs Using Prompts

Create generic documentation and notebooks using Runme's smart prompting feature, which is helpful for enabling others to work on different platforms. By default, any exported environment variables will trigger prompts for users to input values. If the export is declared without quotes, Runme will display the value as a message in the prompt. If the export is enclosed in quotes (single or double), Runme will use the value as a placeholder, asking the user to confirm or modify it."

<video autoPlay loop muted playsInline controls>
  <source src="/videos/prompting.mp4" type="video/mp4" />
  <source src="../../static/videos/prompting.mp4" type="video/mp4" />
  <source src="/videos/prompting.webm" type="video/webm" />
  <source src="../../static/videos/prompting.webm" type="video/webm" />
</video>
<br/>

Runme's default prompt setting is _"auto"_, meaning it won't prompt again on re-runs if the values are already known. To change this, click **"Configure"** on the cell and set `promptEnv` to `never` (never prompt; run as is) or `always` (always prompt; overwrite previous values).

Try it yourself—just click the play button!

```sh {"id":"01HY0Z7HSFFV7KHPX559SNVSHN","terminalRows":"4"}
export PROJECT_NAME=[Enter your project id]
echo "PROJECT_NAME set to $PROJECT_NAME"

export CLUSTER_ZONE="us-central1-c"
echo "CLUSTER_ZONE set to $CLUSTER_ZONE"
```

You can reset all environment variables using the **Reset Session** button in the top bar or choose _"Execute and always prompt for input"_ from the caret menu next to the play button. Learn more [here](https://docs.runme.dev/configuration/cell-level#set-environment-variables).

## Piping and Referencing Cells

Runme, unlike [Jupyter](https://jupyter.org/), does not allow block-scope variables and functions sharing. This means that variables declared in one cell are not per se available in another cell. However, Runme is aware of environment variables. As seen above, `export` variable declarations ultimately will be stored in the environment.

Outside of that, you can reference cells in two ways. This is particularly useful when different languages (Bash/Shell, Python, Ruby, PHP, etc.) are used in different cells.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/referencing.mp4" type="video/mp4" />
  <source src="../../static/videos/referencing.mp4" type="video/mp4" />
  <source src="/videos/referencing.webm" type="video/webm" />
  <source src="../../static/videos/referencing.webm" type="video/webm" />
</video>
<br/>

### 1. Reference Last Cell Output

The most recent cell output will be stored in a special environment variable called `$__` (double underscore).

```sh {"id":"01HY18GGPG1C8KT40T8D41885F","name":"FILE_LIST"}
ls *.md | head -n 5
```

This is useful when you want to reference the output of the last cell. When `$__` is reference the cells have to be executed back-to-back.

```sh {"id":"01HY192SQK8VCQ9DXX2KGR249N"}
echo -n "Previous cell's output was:\n\n$__"
```

### 2. Reference by Cell Name

Notice how the cell above is named `FILE_LIST` (visible in notebook UI & [raw Markdown](https://raw.githubusercontent.com/stateful/docs.runme.dev/refs/heads/main/docs/resources/walkthrough.md)). This allows you to reference the output of that cell by using the cell name as an environment variable. This makes reference outputs more robust since they no longer have to run back-to-back. However, sequence still matters. The referenced cells has to run first.

```sh {"id":"01HY18W7RX74HFNZSBNYB9SEFR"}
echo "Reference a cell via the ENV using its name \"\$FILE_LIST\":"
echo "\n$(echo -n $FILE_LIST | sort | uniq -c)"
```
