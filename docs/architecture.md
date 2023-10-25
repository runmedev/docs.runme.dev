---
sidebar_position: 7
title: Kernel Architecture
---

Under the hood, much like other Notebook technologies such as Jupyter, Runme breaks down into the following parts:

- A serializer that transforms markdown into executable cells with input and output
- A portable runner interface that supports multimodal clients
- A kernel that retains state across execution in sessions akin to a terminal
- A raw-markdown editor (inside VS Code) client for the runner
- A CLI client for the runner
- A notebook client (inside VS Code) for the runner
- A visual markdown viewer and editor (inside VS Code)

This allows Runme to be seamlessly embedded into various User Interface technologies (notebook, editor, webapp, CLI) as well as headless excution as part of CI/CD pipelines.

<br />
<img src="/img/venn.png" style={{width: "60%", display: "inline"}} alt="What is runme"/>
