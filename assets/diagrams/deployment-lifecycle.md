---
title: Deployment lifecycle (Hub + processors)
---

## Purpose

Visualize what happens from “Publish deployment” to “Assigned processor” to “Execution” and “Verification via `.acu.run`”.

## Audience

Beginner/intermediate developers.

## Elements

- Hub UI steps:
  - “Create Deployment”
  - “Publish Deployment”
  - “Suggest Reward”
  - “Assigned Processors”
- Network orchestration box
- Processor box
- States:
  - “Published”
  - “Matched”
  - “Acknowledged”
  - “Executing”
  - “Completed / Running”
- Output:
  - `.acu.run` URL

## Layout

Swimlanes with 3 lanes:

1. **Developer/Hub**
2. **Network**
3. **Processor**

Arrows show the transition of state. Add callouts:

- “Processor addresses are lowercase” (from the official Hub deploy guide)
- “Find address in Hub → Assigned Processors → Main Acurast Account”

## Alt text

“Swimlane diagram of a deployment lifecycle: a developer publishes via Hub, the network matches to processors, processors acknowledge and execute, and the result is verified through a `.acu.run` URL derived from the processor address.”

## Official references

- Hub deploy guide: `https://docs.acurast.com/developers/deploy-first-app-console`

