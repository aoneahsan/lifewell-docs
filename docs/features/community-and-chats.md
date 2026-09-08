---
title: Community and chats
description: Groups with posts and replies, one-to-one messages between connected accounts, blocking, and a moderation route that never tells an author who reported them.
keywords: [lifewell community, health forum, group chat, messaging, blocking, moderation]
tags: [features, people]
sidebar_position: 4
---

# Community and chats

## Community

`/community` is a set of groups, each with posts and replies. The groups are a shared catalogue rather than
something you create — the list is the same for every account.

A post is written by you and read by the group. Nothing in your own record is attached to it automatically:
posting in a group about sleep does not publish your sleep record.

## Chats

`/chats` is messaging between accounts that are connected. A conversation is one-to-one or a small group, and
`/chats/new` starts one from your [connections](../domains/people.md#connections-and-groups).

A [consultation with a professional](./professionals.md) is the same mechanism with a different kind on the
conversation, so the thread behaves the way every other thread does.

## Blocking

You can block someone. A block is enforced on the server, not by a screen declining to render them.

Who you have chosen not to see is your own decision and your own record. It is in [the
export](../reference/export-format.md) as **People you blocked**, which is one of the few things in that file
a person might genuinely want a copy of if they ever left.

## Reporting

Any post or reply can be reported.

:::note[A report is write-only, including to the person who made it]
Nobody can read the reports table back — not the author, not the reporter. The person who wrote the reported
post is never told who reported them, and a report is deliberately absent from the export for the same
reason: a moderation queue that leaks through a data download is the same leak with an extra step.
:::

A moderator can work the queue; only an administrator can answer it. Those are two different permissions on
purpose, because adding a role and giving it the power to hide posts in one change is how a role nobody
reviewed ends up deciding what other people may say.

A decision always carries a note. The author reads one version and the reporter reads the other — a decision
nobody can explain is one nobody dares undo.

## What is in the export

Community posts, community replies, the groups you joined, your conversations, who is in each of them, the
messages **you** sent, and the messages you hid.

The other person's words are the other person's record, and they are not in your file.
