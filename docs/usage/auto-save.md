# Auto-Save session outputs

The Runme auto-save feature efficiently saves and manages your commands and executed cells for future reference. When you run a command within your Runme Notebook, a Session Ouputs file is automatically generated. This captures a complete copy of the original Markdown document, along with the generated outputs, details on when each cell was run, the time it took to run the cell, and exit codes. You can also turn your command/generated outputs into a [Runme gist](/usage/runme-gist).

## Enable Auto-Save

- Toggle Auto-Save On/Off:

The auto-save feature is available by default on your Markdown file whether you use the Runme Notebook on [VS Code](https://docs.runme.dev/how-runme-works/vscode) or the [web client interface](https://docs.runme.dev/how-runme-works/web) To enable you to access this feature, at the top of your Markdown file, you can easily turn on the “Auto-save” feature.

As seen in the image below:

![runme-autosave](/img/runme-autosave.png)

If you would like to turn the auto-save off, you can simply use the toggle button as shown above to set “Auto-Save” to (off)

Alternatively, you can set autosave to the default setting. This way, you do not need to manually enable the feature whenever you want to use it.

### Auto-save default

By default, auto-save is turned off, as indicated by the autosave button at the top bar displaying off. However, if you want to use the session output feature, you can toggle the feature (on) or (off) using the autosave button.

Alternatively, you can change the settings to be permanently on by adjusting the settings. To do this:

- Navigate to the extension settings in the Runme interface. This is typically found in the toolbar or under a settings menu in both the Runme web and VS Code interface.

![runme-setting](/img/configuration-page/runme-setting.png)

- Search for “autosave” to easily access the Auto-save feature settings.
- To set it as default, select “Yes” to set the selected option as a default.

![autosave-defualt](/img/runme-set-autosave-default.png)

This action configures the system to automatically save the output of each cell execution.

## Session Outputs

Runme uses the session output feature to provide advanced auto-save functionality. When auto-save is enabled, Runme captures a complete copy of the original Markdown document and creates the entire Markdown file during the notebook’s execution.

See the image below for a sample of the session output file.

![autosave-output-session](/img/Autosave-output.png)

The session output file includes details on when each cell was run, the time it took to run the cell, and exit codes. Additional contextual metadata like hostname and username are also saved to the Session Outputs file.

![Session output](/img/configuration-page/runme-session-output.png)

Runme also captures non-text mime types like images (base64 encoded) outside of textual output produced by terminals.

The session outputs are written per Runme session, which is saved throughout the lifetime of the window running the runbook until it is reset via “Reset Session” in the notebook.

![reset-session](/img/auto-save-reset-session.png)

If there are more forms you would like to be added to the session output, kindly [let us know](https://github.com/runmedev/runme/issues/new). We are open to incorporating your requests.

### Why Separate Session Outputs?

You might wonder why we have created a separate Session Outputs file instead of embedding outputs directly into the Markdown document. Here are some reasons:

1. Promote collaboration: We believe that cells, including their code and commands (inputs), should remain generic to facilitate collaboration and sharing of notebooks with others. This approach is particularly important for version control-tracked files.
2. Avoid version control errors: Separating files prevents accidental inclusion of outputs into version control, reducing the risk of overwriting historical artifacts from previous sessions if they were stored in the same file.
3. Enhance user experience: Session files with outputs are not directly opened in the notebook UX. After writing the output, Runme may struggle to distinguish between the input and output parts of a cell. Instead, the UX will prompt you to open the original document (which requires colocation in the same folder) as a notebook or launch the Markdown previewer to display the Session Outputs.

While we are contemplating the possibility of transparently opening Session Outputs files in the future, this may inevitably involve reformatting the original source file as part of the deserialization process.

<aside>
💡 Session Outputs

</aside>

> It is strongly recommended that you do not deploy the session output files to your version control. You can `.gitignore` the files to ensure that it doesn't get deployed.

## Additional Information

The auto-save feature is also used in other Runme’s features. Some of these include:

- **[Runme Gist](https://docs.runme.dev/usage/runme-gist)**: Runme Gist uses the auto-save feature to create session outputs, which is used to generate a GitHub Gist while still concealing your sensitive details.
