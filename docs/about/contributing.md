---
title: Contributing to these docs
description: How to correct a page, what belongs here, and the one rule that matters — this documentation may only describe what the product actually does.
keywords: [contribute lifewell docs, edit documentation, docs repository]
tags: [about]
sidebar_position: 3
---

# Contributing to these docs

This documentation is a [public repository](https://github.com/aoneahsan/lifewell-docs). The application is
not.

## Correcting a page

Every page has an **Edit this page** link at the bottom. It opens the file on GitHub, where a change can be
proposed without cloning anything.

Small corrections — a wrong address, a stale version number, a sentence that stopped being true — are the most
useful contributions and need no discussion first.

## The one rule

**A page may only describe what the product actually does.**

That sounds obvious and it is the reason this documentation was rewritten from scratch for 3.0.0. The previous
version described an iOS app that had been removed, a browser extension that was not shipping, a database the
app no longer uses, and an analytics stack that was the opposite of the real one. Every one of those was
written in good faith and none of them was true.

So:

- If something is not built, the page says **not built**, not *coming soon*.
- If something is built but not switched on, the page says which.
- If a number can be checked, it comes from the code rather than from memory.
- A limitation is stated next to the claim it limits, in the same paragraph. A caveat three sections away is a
  caveat nobody reads.

## Voice

Second person. **No contractions** — write *it is* and *does not* in full. No exclamation marks. British
English. Sentence case in headings.

Short declarative sentence, then a longer one that qualifies it or gives the reader permission. That is the
shape most of these pages are in, and matching it is more useful than matching a style guide.

Never *empower*, *journey*, *seamless*, *unlock*, *effortless*, or any framing that treats a gap in somebody's
record as a failure.

## Running it locally

```bash
yarn install
yarn build
yarn serve
```

The build is also the link checker — a broken internal link fails it rather than shipping.

## What does not belong here

- Anything that could identify a person, including a real account, a real email address or a screenshot with
  somebody's record in it.
- Credentials of any kind. This repository is public.
- Internal planning, roadmaps or task queues.
