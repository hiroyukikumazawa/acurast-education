---
title: Acurast overview diagram
---

## Purpose

Show the simplest “mental model” of Acurast: developers deploy apps → orchestration → processors execute.

## Audience

Beginner (first 10 minutes of learning).

## Elements

- **Developer** (laptop icon) with label “Developer”
- **Deployment** card labeled “Deployment (bundled JS + `acurast.json`)”
- **Acurast Network** box labeled “Orchestration layer (on-chain)”
- **Hub** label: “Hub (web console)”
- **Processors** group: 6–10 phone icons labeled “Processor Lite/Core”
- **Outputs**: optional arrow to “Results / services”

## Layout

Left-to-right flow:

1. Developer → Deployment card
2. Deployment card → Acurast Network
3. Acurast Network → Processor fleet
4. Hub sits above the Network + Processors, connected with dashed lines to both (represents management/visibility)

## Style

- Use distinct colors for:
  - Developer (neutral)
  - Network (primary accent)
  - Processors (secondary accent)
  - Hub (outline / dashed)
- Keep text minimal; add a legend for Lite vs Core if needed.

## Alt text

“Diagram showing a developer deploying an application through Acurast’s orchestration layer, which schedules execution across many smartphone processors. The Hub is shown as the web console connected to the network and processors.”

## Official references

- Acurast docs: `https://docs.acurast.com/`
- Processor Lite/Core overview: `https://docs.acurast.com/acurast-processors/`
- Hub: `https://hub.acurast.com/`

