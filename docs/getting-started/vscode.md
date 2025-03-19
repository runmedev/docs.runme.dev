---
sidebar_position: 1
title: VS Code
---

# Runme in VS Code

Make sure you followed the [installation process for Runme in VS Code](/installation/vscode). Next, in the VS Code file `Explorer` create a new `README.md` file by right clicking or using the `File->New File` menu. When you open it, you should get an empty canvas, like this:

![start readme project](/img/start-readme-projects.png)

## Adding Markdown

To add a new Markdown section, click the "**+ Markdown"** button in the top left or center:

![add Markdown vs code](/img/add-markdown-vscodes.png)

You can then edit the Markdown cell directly:

<video autoPlay loop muted playsInline controls>
  <source src="/videos/edit-markdown-block.mp4" type="video/mp4" />
  <source src="/videos/edit-markdown-block.webm" type="video/webm" />
</video>

As shown in the image below, once you're done editing a cell, use the **check** icon (the one with the checkmark):

![Stop Editing Cell vs code](/img/check-icon.png)

To edit the cell again, use the **edit cell** icon:

![start editing Markdown in vs code](/img/editing-cell.png)

Finally, you can remove a cell at any time using the **delete cell** icon:

![remove cell in Markdown](/img/dell-cell.png)

Note that the usual shortcuts (like `Ctrl + Z`) work perfectly in this environment too!

<Infobox type="sidenote">

Other shortcuts you can use are:

1. `ESC` or `Ctrl+Enter` to quickly finish editing a cell.
2. `Enter` on its own to start editing a selected cell.
3. `CMD+Delete` to quickly remove a cell.

</Infobox>

## Adding Code

Code cell blocks work similarly to Markdown blocks and can be edited, saved, or deleted in the same way.

To create a new code block, use the `+ Code` button in the top left or center:

![add new code block vs code](/img/adding-code.png)

You can then freely add runnable code:

![run hello world from vs code](/img/echo-hello-world.png)

## Running Scripts

All bash commands added to the Notebook will become runnable. This makes getting started with a new project a breeze - say goodbye to annoying copy-and-pasting!

To run a script, click the Run button on its left-hand side:

<video autoPlay loop muted playsInline controls>
  <source src="/videos/run-scripting-vscode.mp4" type="video/mp4" />
  <source src="/videos/run-scripting-vscode.webm" type="video/webm" />
</video>

As you can see, we have downloaded the `business_data.csv` file, which contains business statistics about New Zealand in the years 2000-2021. It's a pretty big file!

## Command Output

After running cells you will see their output displayed below the cell

For example:

![Command output vs code](/img/command-output-vscodess.png)

Great! You can see the terminal output from each command beneath its respective cell. Our Node.JS script was able to parse that massive file with no problems!

### Successful Execution

Wondering how you know when a command is finished executing? Look out for the checkmark in the bottom left:

![checkmar in vs code](/img/checkmark-vs-codes.jpg)

If the command fails, it will be an "X" mark instead!

### Copying Output

Runme provides a handy "**copy**" button to easily copy the output of a command!

![copy output vs code](/img/copy-output-vscodes.png)

### Clearing Output

Sometimes, the output of a command can clutter up the screen. To prevent this, use the "Clear Cell Outputs" menu option.

Alternatively, select the output and use the **Option+Delete shortcut**.

![clear output vs code](/img/clear-output-vscodes.png)

Congratulations on running your first Runme notebook! 🎉. While you've understood the basics, there's more to discover about Runme's powerful features. Let's get ready to dive deeper.

## Interactive Mode

What is an interactive runbook without interaction?

By default, our script will run in “Interactive Mode”. This mode enables you to interact with interactive scripts in the output terminal. It will run the script in a separate terminal window rather than in the notebook itself.

If we just try to run this as it is, we will experience the following:

<video autoPlay loop muted playsInline controls>
  <source src="/videos/hello-world-vscode-error.mp4" type="video/mp4" />
  <source src="/videos/hello-world-vscode-error.webm" type="video/webm" />
</video>

<br/>
However, when you disable interactive mode from the configuration setting, you cannot interact with your scripts.

![configure vs code](/img/configure-vs-codes.png)

From here, we can easily disable interactive mode:

![disable interactive vs cose](/img/disable-interactives.png)

Our code block will now display its output exactly as below:

<video autoPlay loop muted playsInline controls>
  <source src="/videos/non-interactive-mode.mp4" type="video/mp4" />
  <source src="/videos/non-interactive-mode.webm" type="video/webm" />
</video>

## Frontmatter

[Frontmatter](https://jekyllrb.com/docs/front-matter/) is a common occurrence in Markdown documents. At the moment Runme won’t break your frontmatter, but we also haven’t yet implemented an interface for managing or editing it from within the notebook. Stay tuned!

## Awesome Runme Configurations for VS Code

In the VS Code settings, several configurable settings influence general Runme behavior and enable experimental functionality. They include:

### Background Processes

This handles scripts that you will love to run in the background.

![background task vs code](/img/backgroundrunme1.png)

<Infobox type="warning">

Background mode only works in tandem with Interactive mode!

</Infobox>

Now, when you run the script, it will be part of a long-running terminal session:

<video autoPlay loop muted playsInline controls>
  <source src="/videos/background-modes.mp4" type="video/mp4" />
  <source src="/videos/background-modes.webm" type="video/webm" />
</video>

As is demonstrated by the previous video, background tasks are delineated by the "Background Task" label:

![run in the background](/img/run-backgorund.png)

Background Task also has a **Stop Task** button to end their execution long after starting:

![stop task in background in vs code](/img/background-stop-tassk.png)

### Markdown Script Metadata

Configuration fields like `background` and `interactive` are set using Markdown's script metadata feature:

![configuration of background vs code](/img/runme-metedata.png)

<Infobox type="warning">

Be sure not to strip this data if you want to use it!

</Infobox>

## Feedback

At this point, we believe you now feel comfortable creating and using Runme on VS Code! We would appreciate your feedback. You can send us feedback directly from VS Code, simply click “Send Feedback” button on your Markdown file in your code editor.

![feedback](/img/feedback.png)

## Useful Tips & Tricks

Here are some useful tips and tricks to enable you to use Runme in your VS Code editor without hassle.

### How to ensure Runme is working properly?

It’s easy. Open your project README file and see it is now opened as a Notebook file! Check that shell commands are now rendered as runnable blocks. That’s pretty nice. Finally, you’re seeing the future of running your README files now. We bet you won’t want to return to plain markdown viewers.

### How to open a README file as a markdown file?

Sometimes, you will want to see the file as a regular Markdown file, and you don’t need to disable or uninstall Runme. You can right-click on the file and pick one of the options displayed when clicking Open with. You can select the built-in text editor or Markdown preview for such cases.

![open a README file as a Markdown file](/img/open-readme-file.gif)

### Notebook Explorer

To help you navigate the Markdown files in your project, Runme adds a super handy `Runme Notebooks` panel. It allows you to open and run cells quickly:

![notebook explorer](/img/runme-notebooks.png)

Include or Exclude unnamed cells

![notebook explorer - Include / Exclude](/videos/runme-notebooks-1.gif)

Open and Run cells

![notebook explorer - Open and Run](/videos/runme-notebooks-2.gif)

## Next Steps

Congratulations!

We believe, at this point, you have gotten an advanced understanding of how Runme works on VS Code. Now, it’s time to begin using Runme in VS Code for all your automation and documentation processes.

We have provided an [FAQ page](/resources/faq), which we constantly update to address common questions you may have about Runme.

If you run into any issues kindly [file a ticket](https://github.com/runmedev/runme/issues) or tell us about it [on Discord](https://discord.gg/runme). We are open to hearing your suggestions on how we can improve Runme.
