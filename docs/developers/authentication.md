---
title: Access tokens and authentication
description: How a script or an app proves it may read your LifeWell record — access tokens with read, write and delete scopes, the 10-minute rule for showing one again, OAuth for apps, rate limits and errors.
keywords: [lifewell access token, lifewell api authentication, lifewell oauth, api scopes, rate limits]
tags: [developers, api, security]
sidebar_position: 2
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# Access tokens and authentication

A LifeWell access token is a long secret you create in **Settings → Other apps** and send with every API
request as `Authorization: Bearer <token>`. It carries the scopes you chose, it expires on the date you
chose, and you can revoke it with one press. An app that wants to connect on your behalf uses OAuth instead,
so you never hand it a token at all.

## How do I create a token?

1. Open **Settings → Other apps → Access tokens** and choose **New token**.
2. Give it a name you will recognise later — *kitchen calendar script* says more than *token 1*.
3. Choose its scopes and its expiry.
4. LifeWell shows the token once, with a copy button. Put it somewhere safe before you close the panel.

The list afterwards shows each token's name, scopes, the first few characters, when it was created and when
it was last used. It never shows the whole token. LifeWell sends you an email whenever a token is created,
so one you did not make does not go unnoticed.

## Can I see a token again?

Yes, within **10 minutes of signing in**. Choose **Reveal** on the token's row:

- **Signed in less than 10 minutes ago** — the token is shown.
- **Signed in longer ago than that** — LifeWell says so and offers **Sign in again**, which brings you back
  to the same row.
- **Two-step sign-in is on** — you also enter a code from your authenticator app, even inside the 10 minutes.

Staying signed in for days is convenient, and it is also exactly what a stolen laptop looks like. A fresh
sign-in is the proof that the person asking is you. Revealing is limited to 10 times an hour, and each reveal
is recorded on your account. A token is never sent by email.

## What do the scopes mean?

Each part of your record has up to three scopes:

| Scope | Lets the token |
|---|---|
| `<resource>:read` | Read that part of your record |
| `<resource>:write` | Add to it and change it |
| `<resource>:delete` | Delete from it |

`account:read` reads your own account details. Which resources exist, and the exact scope names, are listed
in the [OpenAPI file](./api.md#where-is-the-full-reference).

**Delete is never implied.** Write does not include delete, and delete scopes sit apart on the screen, off
until you tick one. A token's scopes never grow after it is made: when you need more, make a new token and
revoke the old one. No token can ever hold an admin permission.

## How long does a token last?

You choose **30, 90 or 365 days**. LifeWell emails you 7 days before a token expires. After that date the
token stops working, and requests made with it answer `401`.

## How do I replace or revoke a token?

- **Rotate** makes a new token. The old one keeps working for 24 hours, so you have time to swap it into your
  script, and is then revoked. Both appear in the list until then.
- **Revoke** stops a token at once. The next request made with it answers `401`. Press it twice to confirm;
  there is no dialog.

Deleting your LifeWell account revokes every token, connected app, webhook and feed with it.

## How does an app connect without a token?

Through OAuth 2.1, the same sign-in an AI assistant uses. The app sends you to LifeWell's consent page at
`https://lifewell.aoneahsan.com/oauth/consent`, which shows:

- the app's name and the address it will send you back to;
- the LifeWell account being connected;
- what it is asking for, as plain sentences grouped into read, write and delete, each with its own tick
  box — delete unticked to start;
- **Approve** and **Deny**, side by side.

With two-step sign-in on, approving asks for a code. The app then appears under **Settings → Other apps →
Connected apps**, where you can rename it or revoke it. Revoking ends its access on the next request, not
when its current sign-in would have run out. More on the consent page: [AI assistants (MCP)](./mcp.md#what-does-the-consent-page-ask).

## What are the rate limits?

Each token and each connected app may send 120 requests a minute. On top of that, your whole account has a
daily total that comes from your plan — 5,000 a day on Free, 50,000 on Pro and Family — shared by every token
and app you have, so making more tokens never raises it. Settings → Other apps shows your limits beside
today's count. Every response carries:

| Header | Means |
|---|---|
| `RateLimit-Limit` | Requests allowed in the current window |
| `RateLimit-Remaining` | Requests left in it |
| `RateLimit-Reset` | Seconds until the window starts again |

Past the limit the API answers `429` with a `Retry-After` header. Wait that many seconds before trying again.

Sending many requests at the same instant can also get a `546` from the hosting platform before LifeWell sees
the request. Send requests one after another, or a few at a time, and retry a `546` after a second.

## What does an error look like?

Every error, from every route, has the same shape:

```json
{
  "error": {
    "code": "reauth_required",
    "message": "Sign in again to see this token.",
    "details": { "max_age_seconds": 600 },
    "correlation_id": "…"
  }
}
```

`code` is the one to program against; `message` is for people and may be reworded. Quote the
`correlation_id` if you write to us about a failed request — it is how we find that request and nothing else.

| Status | Usually means |
|---|---|
| `401` | No token, a wrong one, or one that is revoked or expired |
| `403` | The token lacks a scope the request needs (`details` names it), or a fresh sign-in is needed |
| `404` | Nothing with that id in your record — including anything that belongs to somebody else |
| `429` | Rate limit reached; see `Retry-After` |

The full list of codes is in the [OpenAPI file](./api.md#where-is-the-full-reference).
