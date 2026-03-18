---
title: Key concepts (beginner)
sidebar_position: 2
---

## What you’ll learn

- What “decentralized compute” means in Acurast
- The roles in the ecosystem: providers, developers, and end-users
- How Hub, deployments, and processors relate

## Acurast roles

- **Compute Providers**: run the Acurast Processor app on smartphones and provide compute.
- **Developers**: deploy apps (“deployments”) that run on processors.
- **Token holders / delegators**: can participate in network economics (e.g. staking / staked compute).

## Processor types (Lite vs Core)

From the official processor overview:

- **Processor Core (Android-only)**: dedicated device, factory reset, locked down for higher reliability/performance.  
  Reference: `https://docs.acurast.com/acurast-processors/`
- **Processor Lite (Android + iOS)**: run on your everyday phone (e.g. while charging overnight), no factory reset.  
  Reference: `https://docs.acurast.com/acurast-processors/`

## Hub

The Acurast Hub (`https://hub.acurast.com/`) is the web console used for onboarding processors, viewing activity, and interacting with the ecosystem.

## Deployments (developer mental model)

At a high level:

1. You write an app (commonly Node.js/TypeScript).
2. You bundle it into a single JS file.
3. You configure `acurast.json` (how it should execute).
4. You deploy via the Acurast CLI / console.
5. Processors execute it.

Start with the official “First App Deployment” tutorial:
`https://docs.acurast.com/developers/deploy-first-app/`

