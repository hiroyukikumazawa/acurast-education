---
title: Staked Compute actors (Committer vs Delegator)
---

## Purpose

Explain the roles and incentives in Staked Compute: committers provide hardware-backed capacity, delegators delegate stake, both can be slashed.

## Audience

Intermediate/advanced learners (tokenomics + staking).

## Elements

- **Committer** (phone + shield icon)
  - labels: “Runs processor”, “Commits capacity”, “Stakes ACU”, “Can be slashed”
- **Delegator** (wallet icon)
  - labels: “Delegates ACU”, “Earns share of rewards”, “Shares slashing risk”
- **Staked Compute Pool** (central pool node)
  - labels: “Rewards”, “Slashing”, “Delegation fee”
- **Developer** (optional) with label: “Needs reliable capacity”

## Layout

Radial:

- Pool in the center.
- Committers on the left feeding “capacity + stake” into pool.
- Delegators on the right feeding “stake” into pool.
- Rewards arrows flow back to both; slashing arrows point to both (lighter for delegators).

## Style guidance

- Rewards: green arrows.
- Slashing: red/orange arrows.
- Delegation fee: dashed arrow from rewards to committer.

## Alt text

“Diagram showing committers staking ACU and providing hardware capacity into the staked compute pool while delegators delegate stake to committers. Rewards flow back to both; slashing risk applies to both.”

## Official references

- Staked compute overview: `https://docs.acurast.com/staked-compute/overview`
- Tokenomics: `https://docs.acurast.com/tokenomics`

