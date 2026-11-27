---
title: Connect LifeWell to other apps
description: The four ways something outside LifeWell can reach your record — a calendar app through a feed, a script through an access token, an AI assistant through MCP, and another app through webhooks.
keywords: [connect lifewell to other apps, lifewell api, lifewell mcp, lifewell webhooks, lifewell calendar feed]
topics: [developers, api]
sidebar_position: 1
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# Connect LifeWell to other apps

Four things outside LifeWell can reach your record, and each one goes in through its own door: a **calendar
app** through a feed, a **script** through an access token, an **AI assistant** through MCP, and **another
app** through webhooks. Every door is opened by you, from **Settings → Other apps**, and every one can be
closed again from the same page.

## What is this for?

Mostly for one ordinary wish: to see what LifeWell holds without opening LifeWell. Your family tree shown in
another app you already use. Your appointments sitting in the calendar on your phone, beside your work
meetings, rather than in a second calendar you have to remember to check.

## Which door do I need?

| You want to | Use | It can | Start here |
|---|---|---|---|
| Put LifeWell's calendar into Google Calendar, Apple Calendar or Outlook | A calendar feed | Read your calendar, nothing else | [Calendar feeds](./calendar-feeds.md) |
| Read or change your record from your own code | An access token and the API | What the token's scopes allow | [Authentication](./authentication.md), then [the API](./api.md) |
| Ask Claude, ChatGPT, Claude Code or Cursor about your record | The MCP server | What you approved on the consent page | [AI assistants (MCP)](./mcp.md) |
| Have another app told the moment something changes | Webhooks | Receive events; it cannot read anything else | [Webhooks](./webhooks.md) |

## What stays true whichever door you use?

- **Nothing is open until you open it.** There is no token, feed, connection or webhook on a new account.
- **Delete is never implied.** Read and write can be granted; deleting is a separate permission, off unless
  you tick it, and an AI assistant cannot delete anything without you confirming it inside LifeWell.
- **You can see everything that has a way in.** Settings → Other apps lists every token, connected app,
  webhook and feed, with when it was last used.
- **Your record is still only yours.** Every request is answered as you, by the same rules that decide what
  you can see in the app. Nothing reaches another person's record.

Two-step sign-in protects all of this: with it on, showing a token again or approving a new connection asks
for a code. See [Two-step sign-in](./two-step-sign-in.md).

## What changed?

Every change to the API, the MCP server, webhooks and feeds is listed in the [developer changelog](./changelog.md).
