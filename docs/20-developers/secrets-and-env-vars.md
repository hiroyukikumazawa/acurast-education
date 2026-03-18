---
title: Secrets and environment variables
sidebar_position: 4
---

## Goal

Learn how to pass secrets (API keys, tokens) to your deployment **without hardcoding** them.

## Official source (primary)

The official “Deploy your first app” tutorial includes a section on secret environment variables:
`https://docs.acurast.com/developers/deploy-first-app/`

## Recommended pattern

1. Put secrets in your local `.env` file (never commit it).
2. Configure which variables get included in the deployment.
3. Access them at runtime via `_STD_.env["KEY"]`.

## Runtime access (official)

The runtime environment exposes environment variables at:

- `_STD_.env`  
  Reference: `https://docs.acurast.com/developers/deployment-runtime-environment`

## Safety checklist

- Do not log secrets.
- Rotate keys when you suspect exposure.
- Use the minimum privilege keys required by your app.

## References

- CLI tutorial (env vars): `https://docs.acurast.com/developers/deploy-first-app/`
- Runtime env: `https://docs.acurast.com/developers/deployment-runtime-environment`

