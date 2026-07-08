---
title: Telemetry
---

# Telemetry

Your privacy is of utmost importance. Runme collects anonymous, coarse telemetry information to help improve the product. Runme does not collect command contents, raw arguments, notebook contents, file paths, working directories, environment values, repository remotes, usernames, hostnames, or executable paths.

Runme sends telemetry to `home.runme.dev` using separate routes for different components:

- CLI invocation telemetry is sent to `home.runme.dev/CLI`
- Kernel and server startup telemetry is sent to `home.runme.dev/Kernel`

CLI telemetry includes:

- Event name and component
- Runme version
- Operating system and architecture
- Coarse command and command path
- Best-effort install channel

VS Code extension telemetry includes:

- Buttons clicked and commands triggered
- Total cells and how many are executed
- Extension activation and deactivation
- Notebook opened and saved (incl. metadata; file names are obfuscated)

In VS Code, Runme respects [VS Code's global "no telemetry"](https://code.visualstudio.com/docs/getstarted/telemetry) setting (id: `telemetry.telemetryLevel`). You can also opt out of Runme telemetry by setting either `DO_NOT_TRACK=true` or `SCARF_NO_ANALYTICS=true`.

For more detailed information on security-related aspects, please visit our [Security Overview](/resources/security).
