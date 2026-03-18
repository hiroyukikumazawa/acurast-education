# Workshop B (90 minutes): Deploy via CLI + iterate

## Outcome

Participants deploy an example Node.js app via CLI and understand bundling + config + env vars.

## Primary official sources

- CLI first deploy: `https://docs.acurast.com/developers/deploy-first-app/`
- Example apps: `https://github.com/Acurast/acurast-example-apps`

## Agenda

### 0:00–0:15 — Setup

- Node/npm sanity check
- Explain `.env` safety (never share or commit)

### 0:15–0:50 — Guided deployment

- Create starter project
- Bundle to `dist/bundle.js`
- `acurast init` → generate `acurast.json` + `.env`
- Fund address via faucet link shown by CLI
- `acurast deploy`

### 0:50–1:10 — Iteration

- Add an environment variable and access via `_STD_.env`
- Rebundle and redeploy

### 1:10–1:30 — Wrap-up

- Point learners to runtime API reference
- Share next labs and contribution path

