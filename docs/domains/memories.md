---
title: Memories
description: Photos, albums, a scrapbook and the captions that make them readable — with the files themselves in your own Google Drive.
keywords: [lifewell memories, photo album, scrapbook, google drive photos, memory keeping]
tags: [domains, memories]
sidebar_position: 6
---

# Memories

A photo with no caption and no date is a file. This area is about the part that makes it readable later.

## Photos and memories

`/photos` is the library. A memory is a photo or a set of them with the things that give them meaning — a
date, a caption, where it was, and who is in it.

`/memories/create` writes one. `/scrapbook` is the looser version: things kept because they were worth
keeping, without a form to fill in.

## Where the files actually live

**In your own Google Drive**, not on our servers.

LifeWell asks for a Drive scope that only reaches the files LifeWell itself created. It cannot see the rest
of your Drive, and that is a property of the scope rather than a promise about our behaviour.

We hold a reference to the file, not the file itself. What that means in practice:

- Disconnecting Drive leaves your captions, dates and albums intact and the images unreachable.
- Deleting a file in Drive removes the image; LifeWell still knows there was one.
- The [export](../your-data/export.md) carries the references and the captions. It does not carry the image
  bytes, because they were never ours to hand over.

Full detail: [Where your record lives](../your-data/where-it-lives.md).

## Albums, tags and people

- **Albums** group memories.
- **Tags** cross-cut them, and the same tag can sit on a note, a memory or a scrapbook item.
- **Who is in a photo** links a memory to a person in [People](./people.md).

That last link has a consequence worth knowing before you use it: deleting the People area removes the photo
tags too, because the tag points at a person who no longer exists. The app counts those rows and tells you,
rather than letting them vanish into an area you did not choose. See
[Delete one area](../your-data/delete.md#delete-one-area).

## Maps over memories

`/maps/memories` plots what you recorded where it happened. It reads the same rows; there is no second copy
with coordinates on it.
