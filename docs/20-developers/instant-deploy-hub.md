---
title: Instant deploy (Hub)
sidebar_position: 2
---

## Goal

Publish a working “Hello World” deployment using the **Acurast Hub** with a prepared IPFS code bundle — the fastest way to experience Acurast deployments end-to-end.

## Official source (primary)

This tutorial is based on the official “First App Deployment (Hub)” guide:
`https://docs.acurast.com/developers/deploy-first-app-console`

## Steps (from official guide)

1. Open the Hub: `https://hub.acurast.com/`
2. Click **Create Deployments**
3. Scroll to **Deployment Code**
4. Select **IPFS URL** and paste:

`ipfs://Qmb7sw1mH349wNJsoGWRs1HedAwVXtHPsW4YoXok15DeZL`

5. Optionally pick a specific processor (or leave defaults)
6. Under **Execution Schedule** choose **One-time** and set an **End time** in the future
7. Click **Suggest Reward**, then **Publish Deployment**

## Verify

When the start time is reached, the app becomes available at:

`https://<processor-address>.acu.run`

To find the processor address, open your deployment in Hub → **Assigned Processors** → copy **Main Acurast Account** (processor addresses are lowercase).

## References

- Hub deploy tutorial: `https://docs.acurast.com/developers/deploy-first-app-console`
- Hub: `https://hub.acurast.com/`
- Cloud Rebellion: `https://rebellion.acurast.com/`

