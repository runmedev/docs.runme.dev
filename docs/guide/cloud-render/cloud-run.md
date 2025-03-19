# Google Cloud Run

Runme Cloud Renderers enable you to access various cloud resources directly within your Markdown files without the need to log into your cloud console. With Cloud Renderers, you can manage your Google Cloud Run resources and perform various operations without leaving your Markdown environment.

It is available on Runme client interfaces, including the [editor](/installation/vscode) and [web browser](/installation/web). This section will explore how you can access the Google Cloud Run with Runme Cloud Renderers in a [web browser](/installation/web).

## Prerequisites

Before proceeding, ensure you have the following installed:

- **Install Runme**

To access Runme on your web browser, you are required to [install Runme](/installation/cli) on your terminal. To do that, run the command below:

```sh {"id":"01J30C5KDGY6TVVXPNHWKZPTYX"}
brew install runme
```

Check out our detailed installation guide for instructions on [installing Runme CLI](/installation/cli) on other operation systems.

- **Change directory**

The next step is to navigate into your directory. However, if you do not have an existing folder you would love to work on, you can create a new folder or [clone the repo](https://github.com/runmedev/vscode-runme/blob/main/examples/gcp/cloudRun.md) you want to work with.

To create a folder, run the command below

```sh {"id":"01J30C7QTHM2G24NEC35E4S73H"}
mkdir my_new_directory
```

Where `my_new_directory` is the name of your folder.

Now, navigate into that directory by [changing directory](/configuration/cell-level#cell-cwd-current-working-directory) to `my_new_directory`.

- **Open the Web Browser**

Now, open the browser by running this command.

```sh {"id":"01J30CA4QFZYDHMZ5HDGHN25GC"}
runme open
```

This will load and open Runme in your default web browser and set up a Runme `code-server`.

Now, create a `README.md` file and run the following sections below inside the code cell one after the other.

![run-web](/img/integration/runme-web.png)

- **Install Google Cloud SDK**

Google Cloud SDK is one requirement that must be installed to interact with your Google Cloud resources. It provides the necessary tools and libraries for users. To install the Google Cloud SDK, run the command below.

```sh {"id":"01J30CCFHFS85QHXHTAWY4SX9R"}
 brew install --cask google-cloud-sdk
```

For other platforms, consult [GCP’s official docs](https://cloud.google.com/sdk/docs/install).

## Authenticate with Google Cloud

The next step is to authenticate your account. This step is crucial as it allows you to access your cloud resources. To authenticate, run the command below.

```sh {"id":"01J30CDKZXE7WTCFRWQWVD0HFT"}
 gcloud auth login
```

### Setup Default Credentials

Setting up default application credentials allows applications to access your Google Cloud resources without requiring further authentication prompts. To set up your credentials, run the command below:

```sh {"id":"01J30CEYAFZ3SYETTDZ0Q91GTN"}
gcloud auth application-default login
```

## How to Manage Google Cloud Run with Runme Cloud Renderers

Google Cloud Run is a service that allows you to run your containerized applications directly on Google’s infrastructure without worrying about infrastructure management. With Runme Cloud Renderers, you can access, list, and visualize Cloud Run services directly in your Markdown file.

This section will explain how Google Cloud Run works in Runme Notebook Cloud Renderers.

**Set Your Project ID Using an Environment Variable**

Use the [environment variable prompts](/configuration/cell-level#environment-variable-prompts) to set your project ID. Run the command below to experience how it works.

```sh {"id":"01J30CGS5MMDB865SCNVZNDJGH"}
export PROJECT_ID="runme-ci"
echo "PROJECT_ID set to $PROJECT_ID"
```

**Specify the Project for Visualization**

After setting your project ID, you can visualize your project. To do this, paste a link from your console that specifies the desired project for visualization, like the link below, and click run.

```sh {"id":"01J30CJ5PP340ZDBW66H4V50KE"}
https://console.cloud.google.com/run?project=$PROJECT_ID
```

In this example, `runme-ci` is the project ID.
Once the operation is successful, you will receive a table displaying your Google Cloud Console page, similar to the one below.

![cloud run dashboard](/img/integration/runme-web-console.png)

If you would love to view the logs of a particular project under the `actions` section, click the icon beside `Revisons`. This will take you to the log page of your console, where you can view the logs.

## Access and Manage Project Revisions

Runme Notebook Cloud Renderers makes accessing and managing the details of your Cloud Run project possible. This section will explore how it does it.

**Get Revision**

To get the revision of a project, click the Revisions icon beside the project name, as indicated in the image below.

![Get revision](/img/integration/runme-web-revisions.png)

This will create a new code cell to run automatically and display a table with your project revisions.

![project revision](/img/integration/runme-web-cloud-run.png)

To view more details about your project, click the `Details` icon beside the project name.

![Detail project](/img/integration/runme-web-cloudrun-details.png)

This will load a table that will provide details of your project, such as containers, volumes, storage, network, security, and YAML.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/runme-revision-cloudrun.mp4" type="video/mp4" />
  <source src="/videos/runme-revision-cloudrun.webm" type="video/webm" />
  <source src="/videos/runme-revision-cloudrun.mp4" type="video/mp4" />
</video>

**Visualize and Download YAML**

Once you have gotten the details of your revision, navigate to the section on YAML.
You will find two gcloud commands, `Visualize` and `Download`.

![Visualize and Download YAML](/img/integration/runme-web-cloud-run-yaml.png)

To visualize the project YAML configurations, click Run under the visualize section.

![visualize yaml](/img/integration/runme-web-cloud-run-visualize.png)

This will add a new code block, which will run automatically to visualize your YAML configuration in Runme’s terminal.

![cat yaml file cloud run](/img/integration/runme-web-cloud-run-visualize-terminal.png)

On the other hand, to download the project YAML configurations, click `Run` under the download section.

![download yaml](/img/integration/runme-web-download-yaml.png)

This will add a new code block that automatically downloads your YAML configuration. Once that is successful, the terminal will show that the operation has been completed, and the `.yaml` will be added to your current directory.

![download yaml](/img/integration/runme-web-cloud-run-download-yaml.png)

## Feedback and Contribution

We are still developing more features for the Runme Notebook Cloud Renderers. If you have feedback on this or new ideas on how to improve this feature, feel free to [reach out to us](https://github.com/runmedev/runme?tab=readme-ov-file#feedback).

## Additional Resources

See more resources on the Runme Cloud Notebook Renderer feature:

- [Manage your Google Cloud Console with Runme Cloud Renderer](/guide/cloud-render/gcp)
- [Execute a series of AWS operations in your Runbook](/guide/cloud-render/aws)
- [Organize your JSON Data with Runme Notebook Renderer](/configuration/output-rendering)
