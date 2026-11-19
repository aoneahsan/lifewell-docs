---
title: Two-step sign-in
description: Turn on two-step sign-in for your LifeWell account with an authenticator app, keep your recovery codes, and choose whether a browser is remembered for 7 days.
keywords: [lifewell two-step sign-in, two-factor authentication, authenticator app, recovery codes]
tags: [developers, security]
sidebar_position: 7
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# Two-step sign-in

Two-step sign-in asks for a six-digit code from an authenticator app each time you sign in to LifeWell, after
you have signed in with Google. Someone who gets into your Google account still cannot get into your
LifeWell record without your phone. It is optional for you, and it is required for everyone who runs the
admin panel.

## How do I turn it on?

1. Open **Settings → Security → Two-step sign-in**.
2. Scan the QR code with an authenticator app — Google Authenticator, Microsoft Authenticator, 1Password,
   Bitwarden or any other that makes six-digit codes. If you cannot scan, type in the key shown under it.
3. Enter the code the app shows. Two-step sign-in is on once LifeWell accepts it.

## What are recovery codes?

When you turn it on, LifeWell shows **10 recovery codes**, once. Each one gets you in a single time if your
phone is lost or wiped. Download them or copy them somewhere that is not your phone.

- Each code works once.
- Using one turns two-step sign-in off and takes you straight to setting it up again, on your new phone.
- **Make new codes** replaces the whole set, and the old codes stop working. It asks for a current code first.

## What does "Remember this browser for 7 days" do?

After you enter a code, the sign-in screen offers **Remember this browser for 7 days**. It is unticked, and
it stays that way unless you tick it.

- **Unticked** — the next time you sign in, LifeWell asks for a code again.
- **Ticked** — this browser, on this device, skips the code for 7 days from now. Another browser, or another
  device, still asks.

Signing out ends it for that browser. **Settings → Security → Trusted browsers** lists every remembered
browser with when it was remembered and when that runs out; **Forget** ends one, **Forget all** ends every
one. Turning two-step sign-in off forgets them all.

A remembered browser still asks for a code to show an access token or a webhook secret, to change two-step
sign-in itself, and to open the admin panel.

## Where else does it ask for a code?

- **Showing a token or a secret again** — see [Access tokens](./authentication.md#can-i-see-a-token-again).
- **Approving a new app or AI assistant** on the consent page — see [AI assistants](./mcp.md#what-does-the-consent-page-ask).
- **Turning two-step sign-in off** — you need a current code to remove it.

## Do admins have to use it?

Yes. Nobody can open the LifeWell [admin panel](../admin.md) without a code entered in that session — a
remembered browser is not enough for admin screens.
