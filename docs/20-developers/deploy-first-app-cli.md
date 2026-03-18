---
title: Deploy your first app (CLI)
sidebar_position: 1
---

## Goal

Deploy a simple Node.js/TypeScript app to Acurast using the official CLI flow.

## Official reference (primary)

Follow along with the official tutorial:
`https://docs.acurast.com/developers/deploy-first-app/`

## The mental model

- Build your app.
- Bundle to a single JS file (`dist/bundle.js`).
- Create `acurast.json` + `.env` via `acurast init`.
- Fund the CLI-generated address using the faucet (as instructed by the CLI).
- Deploy with `acurast deploy`.

## Quick checklist (from the official tutorial)

- Install CLI:

```bash
npm install -g @acurast/cli
```

- Create project (optional starter):

```bash
npx @acurast/cli new
```

- Initialize Acurast config:

```bash
acurast init
```

- Bundle:

```bash
npm run bundle
```

- Deploy:

```bash
acurast deploy
```

## Security notes

- Never commit `.env` files (they can contain mnemonics and secrets).
- Treat example tunnel setups as **non-production** unless the official docs state otherwise.

## References

- First App Deployment: `https://docs.acurast.com/developers/deploy-first-app/`
- Acurast CLI repo: `https://github.com/Acurast/acurast-cli`
- Example apps: `https://github.com/Acurast/acurast-example-apps`

