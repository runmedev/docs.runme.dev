---
cwd: ..
runme:
  id: 01JBWW23ENADYZXX5KFGME12KR
  version: v3
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

```sh {"id":"01JBW9KGZT5XE4B0G1Z8GK1239","terminalRows":"15"}
. $(LocalSite) | .help
```

Inspect a local instance of the docs before deploying it to the cloud.

```sh {"background":"true","id":"01JBWGTT8R91VNCV1JSG8KF1K5","name":"ServeLocally"}
### Exported in runme.dev as ServeLocally
. $(LocalSite) | serve | up --random=true
```

## Deploy a docs site preview

```sh {"id":"01JBWVFDXVDBBMRQAQA61NN6CB","interpreter":"bash","terminalRows":"3"}
echo "Deploying preview into \"${DOCS_GCP_PROJECT_ID}\" in \"${DOCS_GCP_REGION}\" via artifacts repo \"${DOCS_GCP_ARTIFACTS_REPO}\"."
```

This will deploy a preview of the docs site to the cloud. The last positional argument has no leading `$` because it's a secret.

```sh {"background":"false","id":"01JBWA2741XJE0KZZTGP7P1WKB"}
. $(LocalSite) | deploy $DOCS_GCP_PROJECT_ID $DOCS_GCP_REGION $DOCS_GCP_ARTIFACTS_REPO DOCS_GCP_CREDENTIALS
```
