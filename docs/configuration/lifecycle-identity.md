---
title: Lifecycle identity
---

# Lifecycle Identity for Cells and Documents

The Lifecycle Identity feature in Runme is a tool that assigns unique identifiers and versions to individual cells, the entire file, or both, depending on your [configuration](https://docs.runme.dev/configuration/).

With this feature, you can easily track changes, versions, and the complete history of your documents using the assigned identifiers. If downstream processing requires lifecycle identities (e.g. saving cells to [Stateful](https://stateful.com/)) to be present, they will automatically be added to cells and document.

> The default setting is to assign **no identifiers** to any cells or the document.

### Usage

The following metadata will be added to your Markdown file:

`id`: The unique identifier that represents the specific instance of your document or cell.

`version`: The current version number on your document is the version of Runme you are using.

Here is a sample of what the lifecycle identity on your file looks like:

```yaml {"id":"01HRA0QJMWD2TKSPDAZJ1BJH90"}
runme:
  id: 01HFY0VFSB5F1PF7C28BW2YSVT
  version: v3
```

To manually add the lifecycle identity to your markdown file, use the following command:

```sh {"id":"01HYX1H6800B70SWHVG6MFMHFM"}
runme fmt --identity all --write
```

> Note: Each document or cell will have a unique identifier generated by Runme. Do not edit these to avoid conflicts.

### Remove Lifecycle Identifiers

To manually remove the lifecycle identities, cell- & doc-level, from your markdown file, use the following command:

```sh
runme fmt reset --write
```

Remove `--write` to only print the updated markdown files (dry-run) to the console.

### Configuration

To update the Lifecycle Identity feature in Runme, follow these steps:

- Navigate to Runme's [Extension Settings](https://docs.runme.dev/configuration/lifecycle-identity) on your [VS code](https://docs.runme.dev/installation/vscode). Click on the **Settings** icon and select **Extension Settings**. The Runme extension can be found in the extension toolbar on the left side of your screen.
- Next, choose the tracking level by selecting the document you wish to enable lifecycle identity tracking.

![lifecycle-identity](/img/lifecycle-identity1.png)

As shown in the image above, there are three levels of tracking available:

- [Cell level](https://docs.runme.dev/configuration/cell-level): This tracks changes within individual cells in a document.
- [Document level](https://docs.runme.dev/configuration/document-level): This monitors the entire document for any modifications or version changes.
- All: This tracks changes made to both [Cell level](https://docs.runme.dev/configuration/cell-level) and [document](https://docs.runme.dev/configuration/document-level) levels.
