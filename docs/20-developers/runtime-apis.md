---
title: Runtime APIs (what code can do)
sidebar_position: 3
---

## Official source (primary)

This page is a guided map of the official “Deployment Runtime Environment” reference:
`https://docs.acurast.com/developers/deployment-runtime-environment`

## Top-level functions (high level)

The runtime exposes functions such as:

- `print(message)`
- `httpGET(url, headers, success, error)`
- `httpPOST(url, body, headers, success, error)`
- `environment(key)`

See the official reference for exact signatures and behavior:
`https://docs.acurast.com/developers/deployment-runtime-environment`

## The `_STD_` object

The `_STD_` object exposes additional capabilities, including:

- **Environment**: `_STD_.env["MY_KEY"]`
- **Random**: `_STD_.random.generateSecureRandomHex()`
- **Deployment info**: `_STD_.job.getId()`, `_STD_.job.getSlot()`, `_STD_.job.getPublicKeys()`
- **Device info**: `_STD_.device.getPublicKey()`, `_STD_.device.getAddress()`
- **Signers**: signing/encryption helpers per curve
- **Websocket / P2P**
- **Chain integrations**: helpers for Substrate / Tezos / Ethereum / Bitcoin (and more)

## Why this matters (developer guidance)

- Use `_STD_.env` for secrets you inject at deployment time (don’t hardcode keys).
- Use device/deployment identities when building “oracle” style workflows.
- Prefer official references when targeting chain integration helpers (they evolve over time).

## References

- Runtime environment: `https://docs.acurast.com/developers/deployment-runtime-environment`

