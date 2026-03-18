---
title: Runtime API playground (HTTP + env + signing)
estimated_time: 45-120 minutes
level: intermediate
---

## Goal

Build confidence with the Acurast runtime APIs by creating a tiny “oracle-like” deployment:

- fetch JSON over HTTP
- use an injected env var
- sign a payload using a deployment key

## Official references (primary)

- Runtime environment reference: `https://docs.acurast.com/developers/deployment-runtime-environment`
- CLI deploy tutorial: `https://docs.acurast.com/developers/deploy-first-app/`

## Outline

1. Create a basic project (use the CLI starter or example apps).
2. Inject an env var (e.g. `API_KEY`) and access it via `_STD_.env["API_KEY"]`.
3. Fetch data with `httpGET(...)`.
4. Hash/encode your payload if needed (chain helpers exist in `_STD_.chains.*`).
5. Sign data using one of `_STD_.signers.*` and print the signature.

## What to look for

- Does the deployment receive env vars as expected?
- Do HTTP requests return payload + certificate?
- Do signatures remain stable for the same payload?

## Notes

This tutorial intentionally avoids prescribing a specific chain integration, because the official runtime reference is the source of truth and evolves over time.

