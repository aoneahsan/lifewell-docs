---
title: Chats — direct, group, and self conversations
description: LifeWell chats are persistent direct, group, or self conversations with full message history, media, and cross-feature associations.
keywords: [lifewell chats, direct messages, group chat, notes to self, conversation history, ahsan mahmood]
sidebar_position: 2
---

# Chats

**Chats** in LifeWell are persistent conversation threads between you and other LifeWell users (direct or group) or with yourself (notes-to-self). Unlike most chat apps where messages can disappear, **LifeWell never deletes a message** — full history is always preserved for the conversation's lifetime. The threads support text, images, audio, file attachments, and cross-feature associations linking messages to memories, notes, events, and people.

## Conversation types

| Type | Use |
| --- | --- |
| `direct` | One-to-one chat with another LifeWell user |
| `group` | Group chat with 3+ participants |
| `self` | Personal channel for notes-to-self (great for journaling) |

The `self` type is unusual for a chat app — it's a notebook in conversation format. Drop links, voice memos, photos, half-formed thoughts. Searchable, timestamped, and not in your face like a notes app.

## What a conversation stores

| Field | Notes |
| --- | --- |
| `participantIds` | Array of person/user IDs |
| `participantNames` | Denormalised for quick display |
| `participantAvatars` | Denormalised thumbnails |
| `title` | Optional custom title; auto-generated from participants if absent |
| `lastMessagePreview` / `lastMessageAt` / `lastMessageSenderId` | Used for the conversation-list preview |
| `totalMessages` / `unreadCount` | Counters |
| `isPinned` / `isMuted` / `isArchived` | Per-user state |
| `associations` | Cross-feature links (memories, events, notes the conversation references) |

## Starting a conversation

From the chats list:

1. Tap **New**.
2. Pick a type:
   - **Direct** → pick a connection.
   - **Group** → pick 2+ connections, name the group.
   - **Self** → opens your personal channel (or creates it).
3. Send the first message.

You can only chat with **connections** — verified bidirectional links (see [connections](/docs/family/connections)). Unverified person records can't be chat targets; that prevents harassment from random strangers.

## Messages

Each message stores:

- **Sender** (who).
- **Content** (text + formatting).
- **Media** (optional photos, audio, files).
- **Reactions** (emoji-style reactions).
- **Read receipts** (per-participant read state).
- **Replied-to** (optional pointer to another message — threading).
- **Edited-at** (if the message was edited).
- **Created-at** (timestamp).

## Message types

| Type | Notes |
| --- | --- |
| Text | Plain or rich text |
| Image | Photo attachment |
| Audio | Voice message |
| Video | Short video clip |
| File | Generic file attachment (PDFs, docs) |
| System | "Alice joined the chat" / "Bob left" — auto-generated |
| Location | Pin a current or chosen location |
| Memory | Inline-shared memory card |
| Note | Inline-shared note card |
| Event | Inline-shared calendar event |

Memory / note / event sharing renders as a preview card linking to the original — useful for "look at this memory" without losing context.

## Persistent message history

A core design principle: **messages are never deleted**. You can:

- **Edit** a message (with an "edited" indicator and access to the original via long-press).
- **React** with emoji.
- **Reply** to a specific message (threading).
- **Pin** a message to the top.

You **can't**:

- Delete a message permanently — only soft-archive your view of it.
- "Unsend" — once sent, the recipient has it.

This is intentional: the value of a conversation log compounds over time. Deletable messages devalue the archive.

## Media storage

Photos, audio, and files attached to messages are stored in your Google Drive (see [Google Drive sync](/docs/memories-and-notes/google-drive-sync)). The metadata + Drive file ID live in Firestore; the binary lives in Drive.

For group chats, each participant's Drive holds the files they sent. There's no shared "chat drive" — each side owns their attachments.

## Cross-feature associations

A conversation can be associated with:

- **Memories** — the memory shared in the chat appears in the memory's associations.
- **Events** — calendar events linked to the conversation.
- **Notes** — notes that reference the chat.
- **People** — beyond participants, mentioned people.

These associations surface on the [chats map](/docs/maps/overview) and on each entity's detail page.

## Pinned / muted / archived

| State | Effect |
| --- | --- |
| Pinned | Conversation stays at the top of the list |
| Muted | No notifications, but the conversation still shows in the list |
| Archived | Hidden from the main list; still searchable and accessible |

These are personal-view states — pinning a conversation only affects your view, not the other participants'.

## Search

Substring search across:

- Message content (text only — media is not OCR'd).
- Sender name.
- Conversation title.

Case-insensitive. Search ignores archived conversations by default (toggle to include).

## Notifications

By default, you get a push notification (mobile) or browser notification (web) for each new message in an unmuted conversation. Configure under [Reminders](/docs/profile-and-settings/reminders) → Notifications.

## Encryption

Standard Firebase encryption at rest. Not client-side end-to-end encrypted. For most everyday conversations this is fine; for legally sensitive content, use a dedicated E2EE app (Signal).

## What chats are not

- **Not Signal / WhatsApp.** No end-to-end encryption (planned for a future release as opt-in).
- **Not a forum or community.** For public discussion, use [communities](./communities).
- **Not Slack.** No channels, no integrations, no enterprise admin.
- **Not auto-deleted.** Messages persist.
- **Not anonymous.** Connections must be verified bidirectional links.

## Frequently asked

**Can I chat with someone who isn't on LifeWell?**
Not directly. The chat system requires both users to be LifeWell accounts (verified connection). Invite them first.

**Can I delete a chat?**
You can archive your view of a conversation (hides it from your list). True deletion of message content isn't supported — that's the design.

**Why am I getting notifications I don't want?**
Mute the conversation, or open [Reminders](/docs/profile-and-settings/reminders) → Notifications → adjust chat-notification settings.

**Can I export my chat history?**
Yes — per-conversation JSON export from the chat info panel. Includes all messages, reactions, and links to attached files.

**Why no end-to-end encryption?**
E2EE is a future feature; currently messages use Firebase at-rest encryption. For now, treat chats as you would email — private to the platform, but not E2EE-private.

## Where to read next

- [Communities](./communities) — public topic feeds.
- [Connections](/docs/family/connections) — verified bidirectional links required to chat.
- [Partner features](./partner-features) — couple-specific sharing.
- [Memories](/docs/memories-and-notes/memories) — share memories in chat.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
