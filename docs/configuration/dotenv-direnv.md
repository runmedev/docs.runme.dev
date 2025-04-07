# DotEnv, Direnv, etc

Runme has a built-in Environment store that manages configuration and secrets per session. A session has a unique identifier and its lifetime is controlled by the user.

For your projects, you can use DotEnv or Direnv to populate environment variables at session startup.

If notebooks or tasks in your project mutate values of environment variables as part of their execution, you can reset the session (e.g. using the notebook UX "Reset Session" toolbar button) which in turn resets the environment variables to the initial values.

## How to use DotEnv

To use DotEnv, create a `.env` file (or `.env.local`) in the root of your project and add your environment variables. The root is defined as the git-root, if the project is a repository, or the top-level directory otherwise. The definition of top-level might different in CLI or IDE/Notebook/Editor. For the latter it's always the directory/folder opened in the editor/IDE window.

The `.env` and `.env.local` files are loaded into the environment of the session in order of their appearance. Configuration allows additional `.env.*` to be added to the loading order.

### Example `.env` file

```sh
ALLOWED_URL_PATTERNS="^vscode:|^vscode-insiders:|\.github\.dev|^vscode\.dev"
DATABASE_URL=postgres://platform:platform@localhost:5432/platform
TEST_DATABASE_URL=postgres://platform:platform@localhost:5432/test
DIRECT_DATABASE_URL=postgres://platform:platform@localhost:5432/platform
NODE_ENV="development"
PORT=4000
WEB_PORT=4001
```

Please note that `.env` does not allow for shell evaluation and expression such as `export HOMEDIR=$(pwd)` will be ignored. If you need to use shell expressions, skip ahead and use Direnv instead.

## How to use Direnv

To use Direnv, create a `.envrc` file in the root of your project and add your environment variables. The `.envrc` file is used to configure the environment for the session. The top-level directory has the same definition as above.

<br />
<Infobox type="sidenote" title="Important">
Runme requires both authorization via `direnv allow` and a Session reset to source `.envrc` files, specifically after any changes. It's standard Direnv behavior. Please refer to the [direnv documentation](https://direnv.net/#how-it-works) for details.
</Infobox>

### Example `.envrc` file

```sh
export GITHUB_TOKEN="$(gh auth token)"
```

Unlike DotEnv, Direnv allows for shell evaluation and expression such as `export HOMEDIR=$(pwd)` will be honored. Direnv comes with built-in security features to prevent the execution of arbitrary shell commands.

```sh
$ direnv allow
direnv: loading ~/Projects/stateful/oss/vscode-runme/examples/.envrc
direnv: export +GITHUB_TOKEN +GOAWAY +MY_NAME
```

Security is a core feature of Direnv and is documented at [direnv.net](https://direnv.net/). Runme inherits these features when sourcing `.envrc` files.

### Checking if Direnv is enabled

If you are unsure if Direnv is enabled for your project, you can use Direnv's CLI (i.e. `direnv status`) to check the status of the `.envrc` file. Whether or not a Runme session sourced the `.envrc` file is reported in the logs (in the IDE's bottom panel: `Output->Runme`).

```text
[2025-04-07T18:01:05.434Z] INFO Runme(KernelServer): {"level":"info","ts":1744048865.4345229,"caller":"runner/session.go:76","msg":"direnv returned","msg":"direnv: loading ~/Projects/stateful/oss/vscode-runme/examples/.envrc
direnv: export +GITHUB_TOKEN +GOAWAY +MY_NAME"}
```

## Env Store tab in Pre-release

Runme now has a dedicated tab for managing environment variables available in Runme's pre-release. It shows the environment variables currently set in the session, when and where they were set, and securely allows inspecting their values.

![Environment populated with direnv/.envrc](../../static/img/configuration-page/runme-env-store-tab.png)
> Example of Env Store tab in action

## Experimental Owl Store

While the Env Store tab is one of many 🦉 Owl Store features in Runme. The [🦉 Owl Store](https://runme.dev/blog/typed-env-vars) is an experimental implementation of a Environment Variables Store that's rooted in a type system for environment variables. It helps specify, verify, and ensure correctness of environment variables in your notebooks and tasks.

<video autoPlay loop muted playsInline controls>
  <source src="../../static/videos/typed-env-vars.mp4" type="video/mp4" />
  <source src="../../static/videos/typed-env-vars.webm" type="video/webm" />
  <source src="/videos/typed-env-vars.mp4" type="video/mp4" />
  <source src="/videos/typed-env-vars.webm" type="video/webm" />
</video>
<br />

A detailed walkthrough of the Owl Store is worth a read in this blog post: [Typed ENV Vars for Valid Environments from Dev to Production](https://runme.dev/blog/typed-env-vars). Feedback is welcome! Find us on [Discord](https://discord.gg/runme) or [GitHub Issues](https://github.com/runmedev/runme/issues/new).
