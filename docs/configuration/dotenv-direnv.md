# DotEnv, Direnv, etc

Runme has a built-in Environment store that manages configuration and secrets per session. A session has a unique identifier and its lifetime is controlled by the user.

For your projects, you can use `dotenv` or `direnv` to populate environment variables at session startup.

If notebooks or tasks in your project change values of environment variables as part of their execution, you can reset the session (e.g. using the notebook UX "Reset Session" toolbar button) which in turn resets the environment variables to the initial values.

## How to use DotEnv

To use `dotenv`, create a `.env` file (or `.env.local`) in the root of your project and add your environment variables. The root is defined as the git-root, if the project is a repository, or the top-level directory otherwise. The definition of top-level might different in CLI or IDE/Notebook/Editor. For the latter it's always the directory/folder opened in the editor/IDE window.

The `.env` and `.env.local` files are loaded into the environment of the session in order of their appearance. Configuration allows additional `.env.*` to be added to the loading order.

### Example `.env` file

```sh
NODE_ENV="development"
ALLOWED_URL_PATTERNS="^vscode:|^vscode-insiders:|\.github\.dev|^vscode\.dev"
PORT=4000
WEB_PORT=4001
DATABASE_URL=postgres://platform:platform@localhost:5432/platform
DIRECT_DATABASE_URL=postgres://platform:platform@localhost:5432/platform
TEST_DATABASE_URL=postgres://platform:platform@localhost:5432/test
```

Please note that `.env` does not allow for shell evaluation and expression such as `export HOMEDIR=$(pwd)` will be ignored. If you need to use shell expressions, skip ahead and use `direnv` instead.

## How to use Direnv

To use `direnv`, create a `.envrc` file in the root of your project and add your environment variables. The `.envrc` file is used to configure the environment for the session. The top-level directory has the same definition as above.

<br />
<Infobox type="sidenote" title="Important">
Runme requires both authorization via `direnv allow` and a Session reset to source `.envrc` files, specifically after any changes. It's standard `direnv` behavior. Please refer to the [direnv documentation](https://direnv.net/#how-it-works) for details.
</Infobox>

### Example `.envrc` file

```sh
export GITHUB_TOKEN="$(gh auth token)"
```

Unlike `.env`, `.envrc` allows for shell evaluation and expression such as `export HOMEDIR=$(pwd)` will be honored. `direnv` comes with built-in security features to prevent the execution of arbitrary shell commands.

### Checking if direnv is enabled

If you are unsure if `direnv` is enabled for your project, you can use direnv's CLI to check the status of the `.envrc` file. Whether or not a Runme session sourced the `.envrc` file is reported in the logs (in the IDE's bottom panel: `Output->Runme`).

```text
[2025-04-07T18:01:05.434Z] INFO Runme(KernelServer): {"level":"info","ts":1744048865.4345229,"caller":"runner/session.go:76","msg":"direnv returned","msg":"direnv: loading ~/Projects/stateful/oss/vscode-runme/examples/.envrc
direnv: export +GITHUB_TOKEN +GOAWAY +MY_NAME"}
```

## Experimental Owl Store

Runme also offers the 🦉 Owl Store, an experimental implementation of a Environment Variables Store that provides a type system for environment variables. It helps specify, verify, and ensure correctness of environment variables in your notebooks and tasks.

<video autoPlay loop muted playsInline controls>
  <source src="../../static/videos/typed-env-vars.mp4" type="video/mp4" />
  <source src="../../static/videos/typed-env-vars.webm" type="video/webm" />
  <source src="/videos/typed-env-vars.mp4" type="video/mp4" />
  <source src="/videos/typed-env-vars.webm" type="video/webm" />
</video>
<br />

A detailed walkthrough of the Owl Store is worth a read in this blog post: [Typed ENV Vars for Valid Environments from Dev to Production](https://runme.dev/blog/typed-env-vars). Feedback is welcome! Find us on [Discord](https://discord.gg/runme) or [GitHub Issues](https://github.com/runmedev/runme/issues/new).
