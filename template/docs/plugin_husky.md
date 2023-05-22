# Husky, commitlint and commitizen

The project embed those 3+ plugins that enable better commit messages
Husky create hooks that intercept some of your git command.
Use `yarn commit` to commit your changes and follow the prompt.

## Usage

Already using husky? See [Migrate from 4 to 8](#migrate-from-v4-to-v8).

### Automatic (recommended)

`husky-init` is a one-time command to quickly initialize a project with husky.

::: code-group

```shell [npm]
npx husky-init && npm install
```

```shell [pnpm]
pnpm dlx husky-init && pnpm install
```

```shell [yarn]
yarn dlx husky-init --yarn2 && yarn
```

:::

It will:

1. Add `prepare` script to `package.json`
1. Create a sample `pre-commit` hook that you can edit (by default, `npm test` will run when you commit)
1. Configure Git hooks path

To add another hook use `husky add`. For example:

```shell
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

::: info
For Windows users, if you see the help message when running `npx husky add ...`, try `node node_modules/husky/lib/bin add ...` instead. This isn't an issue with husky code.
:::

## Recipes

### Monorepo

It's recommended to add husky in root `package.json`. You can use tools like [lerna](https://github.com/lerna/lerna) and filters to only run scripts in packages that have been changed.

### Custom directory

If you want to install husky in another directory, for example `.config`, you can pass it to `install` command. For example:

::: code-group

```js [package.json]
{
  "scripts": {
    "prepare": "husky install .config/husky"
  }
}
```

:::

Another case you may be in is if your `package.json` file and `.git` directory are not at the same level. For example, `project/.git` and `project/front/package.json`.

By design, `husky install` must be run in the same directory as `.git`, but you can change directory during `prepare` script and pass a subdirectory:

::: code-group

```js [package.json]
{
  "scripts": {
    "prepare": "cd .. && husky install front/.husky"
  }
}
```

:::

In your hooks, you'll also need to change directory:

::: code-group

```shell [.husky/pre-commit]
# ...
cd front
npm test
```

:::

### Bypass hooks

You can bypass `pre-commit` and `commit-msg` hooks using Git `-n/--no-verify` option:

```shell
git commit -m "yolo!" --no-verify
```

For Git commands that don't have a `--no-verify` option, you can use `HUSKY` environment variable:

```shell
HUSKY=0 git push # yolo!
```

### Disable husky in CI/Docker/Prod

There's no right or wrong way to disable husky in CI/Docker/Prod context and is highly **dependent on your use-case**.

#### With npm

If you want to prevent husky from installing completely

```shell
npm ci --omit=dev --ignore-scripts
```

Alternatively, you can specifically disable `prepare` script with

```shell
npm pkg delete scripts.prepare
npm ci --omit=dev
```

#### With a custom script

You can create a custom JS script and conditionally require husky and install hooks.

::: code-group

```json [package.json]
"prepare": "node ./prepare.js"
```

```js [prepare.js]
const isCi = process.env.CI !== undefined
if (!isCi) {
  require('husky').install()
}
```

:::

Or make `prepare` script fail silently if husky is not installed:

```json [package.json]
"prepare": "node -e \"try { require('husky').install() } catch (e) {if (e.code !== 'MODULE_NOT_FOUND') throw e}\""
```

#### With env variables

You can set `HUSKY` environment variable to `0` in your CI config file, to disable hooks installation.

Alternatively, most Continuous Integration Servers set a `CI` environment variable. You can use it in your hooks to detect if it's running in a CI.

::: code-group

```shell [.husky/pre-commit]
# ...
[ -n "$CI" ] && exit 0
```

:::

#### With is-ci

You can also use [is-ci](https://github.com/watson/is-ci) in your `prepare` script to conditionally install husky

```shell
npm install is-ci --save-dev
```

::: code-group

```js [package.json]
{
  "scripts": {
    "prepare": "is-ci || husky install"
  }
}
```

:::

### Test hooks

If you want to test a hook, you can add `exit 1` at the end of the script to abort git command.

::: code-group

```shell [.husky/pre-commit]
# ...
exit 1 # Commit will be aborted
```

:::

### Git-flow

If using [git-flow](https://github.com/petervanderdoes/gitflow-avh/) you need to ensure your git-flow hooks directory is set to use Husky's (`.husky` by default).

```shell
git config gitflow.path.hooks .husky
```

**Note:**

- If you are configuring git-flow _after_ you have installed husky, the git-flow setup process will correctly suggest the .husky directory.
- If you have set a [custom directory](#custom-directory) for husky you need to specify that (ex. `git config gitflow.path.hooks .config/husky`)

To **revert** the git-flow hooks directory back to its default you need to reset the config to point to the default Git hooks directory.

```shell
git config gitflow.path.hooks .git/hooks
```

## FAQ

### Does it work on Windows?

Yes. When you install Git on Windows, it comes with the necessary software to run shell scripts.

## Troubleshoot

### Command not found

If you're running Git from an app and the command can be found in your terminal, this means that the `PATH` in your app is different from your terminal.

You can `echo $PATH` in your terminal and configure your app to use the same value.

If you've installed your command using `brew`, see the [Homebrew FAQ](https://docs.brew.sh/FAQ) to make your command available to your app.

Finally, if you're using a script for managing versions like `nvm`, `n`, `rbenv`, `pyenv`, ... you can use `~/.huskyrc` to load the necessary before running hooks.

For example, for `nvm` that would be:

::: code-group

```shell [~/.huskyrc]
# This loads nvm.sh, sets the correct PATH before running hook, and ensures the project version of Node
export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# If you have an .nvmrc file, we use the relevant node version
if [[ -f ".nvmrc" ]]; then
  nvm use
fi
```

:::

::: info
For some apps (e.g., VS Code), you can resolve this simply by restarting the app. Try this before following any of these steps above!\*\*
:::

### Hooks not running

1. Ensure that you don't have a typo in your filename. For example, `precommit` or `pre-commit.sh` are invalid names. See Git hooks [documentation](https://git-scm.com/docs/githooks) for valid names.
1. Check that `git config core.hooksPath` returns `.husky` (or your custom hooks directory).
1. Verify that hook files are executable. This is automatically set when using `husky add` command but you can run `chmod +x .husky/<hookname>` to fix that.
1. Check that your version of Git is greater than `2.9`.

### .git/hooks/ not working after uninstall

If after uninstalling `husky`, hooks in `.git/hooks/` aren't working. Run `git config --unset core.hooksPath`.

Note: this was done automatically by `npm <7` when uninstalling husky, however `preuninstall` is now unsupported.

### Yarn on Windows

Git hooks may fail when using Yarn on Windows with Git Bash (`stdin is not a tty`). If you have users on Windows, it's highly recommended to add the following workaround.

1. Create `.husky/common.sh`:

```shell
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
```

2. Source it in in places where Yarn is used to run commands:

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
. "$(dirname -- "$0")/common.sh"

yarn ...
```