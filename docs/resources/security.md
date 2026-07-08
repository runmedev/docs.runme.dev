---
title: Security
---

# Security Overview

## Telemetry and Connection to home.runme.dev

The connection to `home.runme.dev:443` is part of Runme's telemetry system, which is used to collect anonymous, coarse usage data for improving the product. Runme uses separate routes for CLI telemetry and Kernel/server startup telemetry. All data collected is free of personally identifiable information (PII), ensuring that user privacy is respected.

The telemetry system is designed similarly to an anonymous tracking pixel, a common method used by many open-source projects to gather basic, non-intrusive metrics. Stateful runs the open-source Runme kernel, and this telemetry is part of maintaining and enhancing the open-core functionality of the platform.

If you wish to disable telemetry, instructions are provided in the [telemetry configuration documentation](https://docs.runme.dev/configuration/telemetry). This allows you to fully opt-out of any data collection while continuing to use the Runme platform.

## Unix Domain Socket (UDS) Support for Enhanced Security

To accommodate environments with stricter security requirements, Runme provides the option to use a Unix Domain Socket (UDS) instead of the default TCP/loopback connection. Switching to UDS can reduce the attack surface by avoiding TCP-based connections and is recommended for certain high-security environments.

You can enable this option within the VS Code settings by navigating to `runme.server.transportType` and selecting UDS instead of TCP. This provides an additional layer of security for users who prefer or require a socket-based communication method.
