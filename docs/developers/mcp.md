---
title: Connect an AI assistant (MCP)
description: Connect Claude, ChatGPT, Claude Code or Cursor to your LifeWell record through the LifeWell MCP server — what the consent page asks, how deletes are confirmed, and how to disconnect.
keywords: [lifewell mcp server, connect claude to lifewell, chatgpt connector, claude code mcp, cursor mcp]
topics: [developers, mcp, ai]
sidebar_position: 4
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# Connect an AI assistant (MCP)

The LifeWell MCP server lets an AI assistant read and change your record when you ask it to — *"who in my
family has a birthday this month?"*, *"add the dentist on Thursday at half nine"*. You give the assistant one
address, sign in to LifeWell, and choose on the consent page what it may do. It works with Claude, ChatGPT,
Claude Code, Cursor, and any other assistant that speaks MCP.

## What is the address?

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

The same address is under **Settings → Other apps → Connect an AI assistant**, with a copy button. You never
paste a token into an assistant: it finds LifeWell's sign-in from this address and sends you there.

## How do I connect each assistant?

Menus in these apps move between releases. If a step below does not match what you see, look for
**Connectors** in the app's settings.

### Claude

1. In Claude, open **Settings → Connectors** and add a custom connector.
2. Paste the address above.
3. Sign in to LifeWell when asked, and approve on the consent page.

### ChatGPT

1. In ChatGPT, open **Settings → Connectors**. Some accounts need developer mode switched on first.
2. Add a connector with the address above.
3. Sign in to LifeWell when asked, and approve on the consent page.

### Claude Code

```bash
claude mcp add --transport http lifewell https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

Then run `/mcp` inside Claude Code, choose **lifewell**, and sign in in the browser it opens.

### Cursor

Add LifeWell to your `mcp.json`:

```json
{
  "mcpServers": {
    "lifewell": {
      "url": "https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp"
    }
  }
}
```

Cursor asks you to sign in the first time it uses it.

## What does the consent page ask?

Before any assistant reaches your record, LifeWell shows you, at `https://lifewell.aoneahsan.com/oauth/consent`:

- **which app is asking**, and the address it will return you to;
- **which LifeWell account** it is about to reach — worth a glance if you have more than one;
- **what it may do**, written as sentences and grouped into read, write and delete, each with its own tick
  box. Delete starts unticked;
- **Approve** and **Deny**, side by side.

With [two-step sign-in](./two-step-sign-in.md) on, approving asks for a code. Nothing is approved for you:
every new connection goes through this page.

The assistant sees only the tools your choices allow. Grant read alone and it has no way to change anything.

## How are deletes handled?

An assistant can **prepare** a delete; only you can **carry it out**. When you ask it to remove something,
it shows what would go and gives you a link into LifeWell. You confirm there, in LifeWell, within 10 minutes,
or nothing is deleted. A sentence hidden in a web page or a pasted document cannot talk the assistant into
deleting part of your record, because the assistant cannot confirm its own request.

This applies only if you ticked a delete permission on the consent page. Without one, the assistant cannot
even prepare a delete.

## How do I disconnect an assistant?

Open **Settings → Other apps → Connected apps** and choose **Revoke** on its row. Its access ends on the next
request it makes. The list shows each app's permissions, when it connected and when it was last used, and a
new connection appears there the moment you approve it. LifeWell also emails you when an app connects.

## Why is it not working?

| What you see | What to do |
|---|---|
| The assistant asks you to sign in again | Its sign-in ran out. Sign in to LifeWell again from the assistant |
| It says it lacks a permission | It was not granted that one. Disconnect, reconnect, and tick it on the consent page |
| LifeWell is gone from its list of tools, or every call fails | It was revoked. Check **Connected apps**, then reconnect if you want it back |
| A delete did nothing | It was not confirmed in LifeWell within 10 minutes. Ask again |
| You want to know what it has been doing | **Connected apps** shows when each app was last used |
