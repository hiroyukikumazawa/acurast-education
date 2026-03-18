---
title: Instant deploy via Hub (Hello World)
estimated_time: 10-20 minutes
level: beginner
---

## Goal

Deploy a working webserver to Acurast using the Hub (no local dev environment required).

## Primary official source

This tutorial follows the official guide:
`https://docs.acurast.com/developers/deploy-first-app-console`

## Prerequisites

- Access to the Acurast Hub: `https://hub.acurast.com/`

## Steps

1. Open `https://hub.acurast.com/` and click **Create Deployments**.
2. Scroll to **Deployment Code**.
3. Select **IPFS URL**, then paste:

`ipfs://Qmb7sw1mH349wNJsoGWRs1HedAwVXtHPsW4YoXok15DeZL`

4. (Optional) Select a processor you control; otherwise keep defaults.
5. Under **Execution Schedule**, choose **One-time** and set the **End time** far enough in the future.
6. Click **Suggest Reward**, then **Publish Deployment**.

## Verify

When the start time is reached:

- Go to your deployment in Hub → **Assigned Processors**
- Copy **Main Acurast Account** (lowercase address)
- Open:

`https://<processor-address>.acu.run`

## Troubleshooting

- **URL doesn’t load**: wait for the start time; check that a processor is assigned in Hub.
- **Address casing**: the official doc notes processor addresses are lowercase.

## References

- Instant deploy guide: `https://docs.acurast.com/developers/deploy-first-app-console`
- Hub: `https://hub.acurast.com/`
- Cloud Rebellion: `https://rebellion.acurast.com/`

