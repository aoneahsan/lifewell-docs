---
title: Search
description: One search across your whole record. The server half is built; the page is not finished yet, and the app says so rather than showing an empty result list.
keywords: [lifewell search, search your record]
tags: [features]
sidebar_position: 3
---

# Search

`/search` searches your own record — notes, memories, people, events, medications and the rest — from one
box in the top bar.

:::warning[The page is not finished]
The search itself exists: the query that runs across your record is written and deployed. The page that opens
it is not built yet, and it says so in the app rather than rendering an empty result list, which would read
as *nothing of yours matched*.
:::

## What it will and will not reach

- **Your own record only.** Search runs as you, under the same row-level rules as every other read. It cannot
  reach another account's rows even when a bug would like it to.
- **Your record, not the public pages.** The blog, the feature pages and the tools are ordinary public pages
  and are found through a search engine, not through this box.
- **Never indexed.** `/search` is marked `noindex` and is deliberately absent from the sitemap. A search page
  in a search index is an invitation to probe it.
