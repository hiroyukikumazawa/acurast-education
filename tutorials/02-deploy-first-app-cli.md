---
title: Deploy your first app via CLI (from scratch)
estimated_time: 45-90 minutes
level: intermediate
---

## Goal

Build and deploy a small Node.js app to Acurast using the official CLI workflow.

## Primary official source

Follow the official tutorial in parallel:
`https://docs.acurast.com/developers/deploy-first-app/`

## Prerequisites

- Node.js + npm
- Comfortable with a terminal

## Steps (guided by the official flow)

### 1) Create a project

```bash
npx @acurast/cli new
```

### 2) Write code

Use your own app or start from an official example:

- Webserver example: `https://github.com/Acurast/acurast-example-apps/tree/main/apps/app-webserver`
- Fetch example: `https://github.com/Acurast/acurast-example-apps/tree/main/apps/app-fetch`

### 3) Bundle

Bundle into a single JS file (often `dist/bundle.js`):

```bash
npm run bundle
```

### 4) Install CLI + init

```bash
npm install -g @acurast/cli
acurast init
```

This generates `acurast.json` and `.env`. **Do not commit `.env`**.

### 5) Fund the address (faucet)

Run:

```bash
acurast deploy
```

If your balance is 0, the CLI prints a faucet link (official tutorial shows this exact behavior).

### 6) Deploy

Run `acurast deploy` again after funding.

## Verify

Use the Hub (`https://hub.acurast.com/`) or follow CLI output to confirm assignment/execution.

## References

- First app deployment (CLI): `https://docs.acurast.com/developers/deploy-first-app/`
- CLI repo: `https://github.com/Acurast/acurast-cli`
- Example apps: `https://github.com/Acurast/acurast-example-apps`

