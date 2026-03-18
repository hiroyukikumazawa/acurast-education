# Contributing to `acurast-education`

Thanks for helping build open education for Acurast.

## Quick contributions (5–30 minutes)

- Fix a typo or broken link in `docs/`
- Add a screenshot (with secrets removed) to `assets/`
- Improve a tutorial step or add a troubleshooting note
- Translate a single page (create a new `*-<lang>.md` file and link it)

## Before you contribute

- **Primary sources first**: prefer official Acurast sources and link them:
  - `https://docs.acurast.com/`
  - `https://acurast.com/blog/`
  - `https://github.com/Acurast`
- **No secrets**: never include mnemonics, private keys, API keys, or wallet screenshots that show sensitive data.
- **Be explicit about networks**: if a step is for canary/testnet vs mainnet, say so clearly.

## Repo structure

- **`docs/`**: Docusaurus-published documentation (curriculum).
- **`tutorials/`**: Longer, lab-style walkthroughs.
- **`courses/`**: Course plans and assessments.
- **`videos/`**: Video scripts (voiceover + scenes + on-screen text).
- **`assets/`**: Diagrams and visual assets.
- **`community/`**: Ambassador/community playbooks.
- **`website/`**: Docusaurus site.

## Local development (docs website)

Prereq: Node.js 20+

```bash
cd website
npm install
npm run start
```

## Writing style guide (docs/tutorials)

- **Audience-first**: define who the page is for at the top.
- **Outcome-driven**: state what the learner will accomplish.
- **Step-by-step**: numbered steps, copy/paste blocks.
- **Troubleshooting**: include common errors and how to fix them.
- **References**: add a “References” section with official links.

## Adding a new page

1. Create a markdown file in the appropriate folder under `docs/`.
2. Include Docusaurus frontmatter:

```md
---
title: Your Title
sidebar_position: 1
---
```

3. Link to official references.
4. Run the site locally to verify navigation.

## Pull request checklist

- [ ] Content is accurate and beginner-friendly
- [ ] No secrets or sensitive screenshots
- [ ] Links verified
- [ ] “References” section included (when applicable)
- [ ] Docusaurus site builds locally (`npm run build` in `website/`)

