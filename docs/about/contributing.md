---
title: Contributing — how to improve the documentation
description: How to contribute to LifeWell's documentation — typo fixes, clarifications, new examples. The docs are open-source on GitHub. Code contributions handled separately.
keywords: [contributing, open source, docs improvement, pull request, github, ahsan mahmood]
sidebar_position: 4
---

# Contributing

The LifeWell documentation site (this site) is **open-source on GitHub at [github.com/aoneahsan/lifewell-docs](https://github.com/aoneahsan/lifewell-docs)** under the CC-BY-4.0 license. Anyone can suggest improvements via pull request, file issues, or simply email feedback. The main LifeWell application code lives in a separate **private** repository and is not currently accepting public code contributions.

This page covers how to contribute to the docs, what kind of contributions are welcome, and the workflow.

## What's welcome

| Contribution | Welcome? |
| --- | --- |
| Typo fixes / grammar corrections | Yes |
| Clarifications on confusing passages | Yes |
| Adding "where to read next" links | Yes |
| New examples / worked examples | Yes |
| Better screenshots / illustrations | Yes |
| Translations (eventually — pending i18n setup) | Yes (deferred) |
| New page proposals (uncovered topic) | Yes — open an issue first |
| Bug reports on the docs site itself | Yes |
| Bug reports on the LifeWell app | Yes (but via the app, not docs PRs) |

## What's NOT welcome via this repo

- **Code contributions to the LifeWell app** — the app codebase is private.
- **Feature requests for LifeWell** — file via the app's [feedback form](mailto:aoneahsan@gmail.com), not as docs issues.
- **Account support requests** — email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).
- **Privacy / security issues** — email directly, don't post publicly.

## How to contribute

### Small fixes (typos, grammar, broken links)

1. Open the page you want to fix on `lifewell-docs.aoneahsan.com`.
2. Click the **Edit this page** link at the bottom (renders from Docusaurus when published).
3. Edit on GitHub.
4. Submit a pull request.
5. Wait for review (usually within a week).

### Larger contributions (clarifications, new examples)

1. Fork the repo.
2. Make changes locally (Docusaurus dev server: `cd lifewell-docs && yarn start`).
3. Run `yarn build` to confirm no warnings.
4. Open a PR with a clear description of what changed and why.
5. Discuss in the PR if any review feedback.

### Proposing new pages

1. Open a GitHub issue first describing what page you'd like to add and why it's not covered already.
2. Discuss with maintainers — sometimes the topic is intentionally not documented (because it doesn't exist in the app yet).
3. If approved, write the page following the existing conventions:
   - Frontmatter: `title` (50-60 chars), `description` (140-160 chars), `keywords`, `sidebar_position`.
   - Definition-first intro paragraph.
   - Tables for structured data.
   - "Frequently asked" section toward the bottom.
   - "Where to read next" with 3-5 internal links.
   - Footer: `Last updated: YYYY-MM-DD` + `Author: [Ahsan Mahmood]...`.

## Conventions

The docs follow a specific voice and structure — please match what's already there:

| Convention | Notes |
| --- | --- |
| **Voice** | Plainspoken, slightly informal, honest about limits |
| **Length** | 800-1500 words per page typically |
| **Structure** | Definition → details → examples → FAQ → "where next" |
| **Honest framing** | Always describe what the feature is NOT, alongside what it is |
| **Citations** | Cite public-health sources by name when making health claims |
| **No fabricated stats** | Don't invent user counts, percentages, or numbers |
| **No marketing language** | Avoid "best", "top", "#1", "ultimate", "revolutionary" |
| **Internal links** | Use relative paths within docs (e.g. `[Vitals](./vitals)`) |
| **Code blocks** | TypeScript / Markdown / shell; use fenced blocks |

## Style guide

- **Title case** in page titles; **sentence case** in section headers.
- **Numbers** under ten spelled out except for technical / clinical values.
- **Date format**: `YYYY-MM-DD` (ISO 8601) for "Last updated".
- **Time format**: 24-hour for technical contexts, 12-hour for examples.
- **Units**: metric primary, imperial in parentheses where helpful.

## Review process

1. PR opened.
2. Maintainer (currently Ahsan) reviews within 1-2 weeks.
3. Feedback in comments.
4. Author addresses feedback.
5. Maintainer merges.
6. The site rebuilds and the change goes live within minutes.

## License

By contributing, you agree your changes are licensed under **CC-BY-4.0** (Creative Commons Attribution 4.0 International) — the same license as the docs repo. Attribution to LifeWell + the original author is preserved.

The CC-BY license means anyone can:

- Use the docs in their own materials (with attribution).
- Translate to other languages.
- Build on top of the structure.

## Code of conduct

Be kind. Disagree productively. Don't use the issues / PR comments as a soapbox. Documentation issues are about improving the documentation; product feedback goes via the app's feedback channels.

## Recognition

Contributors are listed in the docs repo's `CONTRIBUTORS.md` (created once the first external contributors land).

## Where do I read next?

- [About the developer](./about-the-developer) — who maintains.
- [Tech stack](./tech-stack) — what's used.
- [Changelog](./changelog) — version history.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
