---
cwd: ..
shell: dagger shell
terminalRows: 20
---

# The Docs, daggerized with Dagger Shell

If you're running this example for the first time, please complete the steps in [prerequisites](SETUP.md) first.

> 💡 Be sure to switch to the pre-release version of the Runme extension to see the `Env Store` tab. [Here](https://docs.runme.dev/installation/vscode#bleeding-edge-features) is how.

Let's define local site as the local host's root directory of the docs site. Mainly for clarity.

```sh {"name":"LocalSite","terminalRows":"11"}
### Exported in runme.dev as LocalSite
host | directory "."
```

See what functions are available in the `docs` module, and how to use them.

```sh {"terminalRows":"15"}
. $(LocalSite) | .help
```

Inspect a local instance of the docs before deploying it to the cloud.

```sh {"background":"true","name":"LocalService"}
### Exported in runme.dev as LocalService
. $(LocalSite) | serve | up --random=true
```

## Deploy a docs site preview

```sh {"interpreter":"bash","terminalRows":"3"}
echo "Deploying preview into \"${DOCS_GCP_PROJECT_ID}\" in \"${DOCS_GCP_REGION}\" via artifacts repo \"${DOCS_GCP_ARTIFACTS_REPO}\"."
```

This will deploy a preview of the docs site to the cloud. The last positional argument has no leading `$` because it's a secret.

```sh {"background":"false","name":"PreviewSite"}
### Exported in runme.dev as PreviewSite
. $(LocalSite) | deploy $DOCS_GCP_PROJECT_ID $DOCS_GCP_REGION $DOCS_GCP_ARTIFACTS_REPO DOCS_GCP_CREDENTIALS
```
