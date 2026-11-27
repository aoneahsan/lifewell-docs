---
title: The LifeWell API
description: The LifeWell REST API — its base address, cursor pagination at 20 rows a page by default and 50 at most, and the OpenAPI file that describes every route and field.
keywords: [lifewell api, lifewell rest api, openapi, api pagination, next_cursor]
topics: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# The LifeWell API

The LifeWell API is a REST API at one base address. Every route, field and error it has is described in a
machine-readable OpenAPI file, and that file — not this page — is the reference. This page tells you where
it is, how to read it, and the two rules every list follows.

## What is the base address?

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

The `v1` at the end is the API's version. Every request needs a token or an app connection — see
[Authentication](./authentication.md).

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

## Where is the full reference?

| File | Address | Read it with |
|---|---|---|
| OpenAPI 3.1, JSON | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | Any OpenAPI tool: Swagger UI, Redocly, Postman, Insomnia, or a client generator |
| The same, as Markdown | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | A browser, a text editor, or an AI assistant you paste it into |

Both are built from the same source as the API itself, so they cannot describe a route that does not exist
or miss one that does. A page per resource on this site will be generated from the same file; until then,
the file is where the detail lives.

## How do I read the OpenAPI file?

Four parts of it answer most questions:

- **`paths`** — every route, its method, and which scope it needs.
- **`components.schemas`** — every field a response can carry, with its type. A field that is not listed
  there is never sent.
- **`components.securitySchemes`** — the two ways in: a bearer access token, and OAuth.
- **The error responses** — every `code` the [error envelope](./authentication.md#what-does-an-error-look-like)
  can carry, route by route.

The parts of your record the API reaches, and which fields of each, are exactly the ones the file lists.
Anything absent from it is not reachable, by design.

## How does pagination work?

Every list is cut into pages:

- **20 rows a page** by default, and **50 at most**.
- A page that has more after it carries a `next_cursor`. Send that value back to get the next page.
- A page with no `next_cursor` is the last one.

A cursor is a bookmark, not a page number, so a row added while you are reading does not shift everything
by one. The parameter names for the page size and the cursor are in the OpenAPI file, on each list route.

## What about rate limits and errors?

They are the same on every route. Both are on the [Authentication](./authentication.md#what-are-the-rate-limits)
page.
