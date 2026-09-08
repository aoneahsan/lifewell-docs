---
title: Architecture
description: A static single-page app over Postgres, with edge functions only where the browser must not hold something. What runs where, and why there is no server of our own.
keywords: [lifewell architecture, supabase, react, vite, capacitor, edge functions, spa]
tags: [concepts, architecture]
sidebar_position: 1
---

# Architecture

A **static single-page application**. The build emits a folder of files, and that folder is the whole deploy.
There is no Node server anywhere in the picture.

## The shape

```text
Browser / Android WebView
        │
        ├──────────────► Postgres, through PostgREST      (all ordinary reads and writes)
        │                 · row-level security
        │                 · column grants
        │                 · a hard 50-row ceiling on a list
        │
        └──────────────► Edge functions, on Deno          (only what a browser must not hold)
                          · the two public forms, behind a bot check
                          · resolving a read-only share link
                          · the Google Drive token exchange
                          · the AI estimate, and your own AI key
                          · scheduled exports
                          · Play purchase verification
                          · administrative user actions
```

## The one rule that decides which

> The browser talks straight to the database for ordinary data. An edge function is used **only** when the
> operation needs something the browser must never hold — a secret, elevated privilege, or trust in something
> the user typed.

Everything else is a direct query, made as you, under the rules described in [Privacy and
security](./privacy-and-security.md).

## Why the boundary sits in the database

Because authorisation that lives in application code is authorisation that has to be remembered at every call
site. Row-level security means the *database* refuses, so a query written wrong returns nothing rather than
returning somebody else's rows.

That is also why there is no ORM in the running app. The schema is authored in TypeScript and turned into
migrations offline, but the app itself only ever speaks through the client library, as the signed-in caller,
with the rules applying.

## What it is built from

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Build | Vite 8, no source maps in production |
| Routing | File-based routes with typed search parameters |
| Server state | TanStack Query |
| Client state | Zustand — never React context for application state |
| Forms | React Hook Form and Zod, and the same Zod schemas validate the edge functions |
| Accessibility | React Aria Components owns the DOM, ARIA wiring and keyboard behaviour of every widget |
| Styling | Tailwind v4, configured in CSS rather than a config file |
| Charts | D3 |
| Rich text | Tiptap — there is no plain textarea in the product |
| Local storage | One library, which is the only thing allowed to touch browser storage |
| Android | Capacitor 8 |

## Not Firebase

The 2.x app ran on Firebase, and one of the defects this rebuild exists to fix is that it exhausted a free
read quota and took itself down for a day.

The sharing model is the other reason. Sharing part of a record with a named person is a row-level question,
and Postgres answers it in the database, where the old document store answered it in a rules file that had to
stay in step with every query.

## URL state

Modals, tabs, filters, sorting, pagination and search terms live in the address bar rather than in component
state. Refreshing a page does not lose your place, and a link to what you are looking at is a link to what you
are looking at.
