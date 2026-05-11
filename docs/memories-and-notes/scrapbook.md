---
title: Scrapbook — drag-drop layout of photos, text, stickers
description: LifeWell scrapbook is a drag-drop visual editor for photos, text, stickers, shapes, and frames. Templates, layers, PDF export — a digital scrapbook for memories.
keywords: [digital scrapbook, drag drop photo layout, photo collage, memory book, scrapbook templates, ahsan mahmood]
sidebar_position: 2
---

# Scrapbook

The **scrapbook** in LifeWell is a free-form drag-drop visual editor for arranging photos, text, stickers, shapes, and frames onto a page. It's the layout layer above [memories](./memories) — useful when you want to take a memory's photos and turn them into a printable scrapbook page rather than just a chronological list. Templates give you a starting point; the editor lets you reposition, resize, rotate, layer, and style each element until the page looks right.

Each scrapbook page exports as a PDF or image for printing or sharing.

## What you can drop on a page

| Element | Properties |
| --- | --- |
| **Photo** | Source photo + fit (cover / contain / fill) + border radius / width / colour + shadow + filter (none / grayscale / sepia / vintage / bright / contrast) |
| **Text** | Content + font family + size + weight + style + alignment + colour + background + line height |
| **Sticker** | Pre-curated decorative graphics (hearts, stars, frames, ribbons, seasonal) |
| **Shape** | Rectangles, circles, lines (with stroke + fill controls) |
| **Frame** | Decorative borders that wrap a photo or empty area |

Every element has shared properties:

- `x` / `y` — position.
- `width` / `height` — size.
- `rotation` — degrees.
- `zIndex` — layer order (front to back).
- `opacity` — 0–100%.
- `locked` — pin in place so you don't accidentally move it.

## Editor UX

The editor canvas works like a lightweight desktop publishing app:

- **Drag** an element to move; constrained-drag with `Shift` for straight lines.
- **Resize** via corner handles.
- **Rotate** via the dedicated handle above the element.
- **Layer up/down** with bring-forward / send-back controls.
- **Lock** an element to prevent accidental moves.
- **Group** selected elements (planned).
- **Snap to grid** toggle and **snap to elements** toggle.
- **Undo / redo** stack.

## Templates

A starter set of templates covers common use cases:

- **Single-photo poster** — one large photo + title + caption.
- **Photo grid** — 2x2, 3x3, mixed sizes.
- **Travel-page** — map element + photos + journey notes.
- **Birthday** — frame + birthday-themed stickers + photos.
- **Wedding** — elegant frame + couple photo + date + names.
- **Year-in-review** — large header + monthly photo strip.
- **Baby memory** — photo + milestone caption + date.
- **Blank** — start from nothing.

Pick a template, then customise. Templates are starting points, not constraints — change anything, replace everything.

## Photos source

Photos in the scrapbook can come from:

- **Your existing memory media** (linked from any memory's photos).
- **Direct upload** (goes to your Google Drive via the [Drive sync](./google-drive-sync)).
- **URL paste** (rare but supported).

Linking from a memory keeps the source-of-truth in the memory; the scrapbook references the photo rather than duplicating it.

## Filters

Per-photo filters apply visually but don't modify the source file:

| Filter | Effect |
| --- | --- |
| None | Original |
| Grayscale | Black & white |
| Sepia | Warm vintage tone |
| Vintage | Faded retro look |
| Bright | Lifted exposure |
| Contrast | Punched contrast |

Filters are CSS-based for the on-screen preview and applied via image processing for export.

## Export

| Format | Use |
| --- | --- |
| **PDF** | Printable, vector text, full-fidelity. The main export format. |
| **PNG image** | Web-shareable, raster. Good for Instagram or message attachments. |
| **High-res image** | 300 DPI for printing. |

A4 and Letter paper sizes are supported; custom sizes are configurable.

## What this is

- A free-form visual layout tool for memories.
- A way to turn photos into something more than a chronological gallery.
- An export pipeline (PDF / image) for printing.

## What this is not

- **Not Photoshop.** Real photo editing (crop / colour-correct / heal / clone) belongs in a dedicated editor.
- **Not Canva.** A general design tool with thousands of templates and a brand kit is a much bigger product.
- **Not collaborative.** Scrapbooks are single-user — you can't co-edit with your partner in real time. (Planned for a future release.)
- **Not auto-laid-out.** AI-generated scrapbook layouts ("make me a 12-photo wedding page") aren't built yet.

## Performance

The editor renders in the browser:

- **Up to ~50 elements per page** — smooth.
- **50–200 elements** — usable but interactions may lag on lower-end devices.
- **200+** — split into multiple pages.

Photos are loaded at preview resolution for the editor, then re-fetched at full resolution for export — so the editor stays responsive even when the export will be a 50 MB PDF.

## Privacy

Scrapbooks live in your account:

- Layout metadata in Firestore, per-account, rule-protected.
- Photo references point to your Google Drive (same as memories).
- Stickers / shapes / frames are app assets — shared resources, no privacy concern.
- Exports go to your device; nothing is uploaded for export rendering.

## Worked example

You want a scrapbook page from your wedding memory.

1. New scrapbook → pick **Wedding template**.
2. Click the placeholder photo, replace it with your wedding memory's main photo.
3. Edit the title text from the default "Wedding" to your names + date.
4. Drop in 3 more photos along the bottom — drag them from your memory's media tray.
5. Apply **Vintage** filter to all four.
6. Add a small heart sticker between the names.
7. Tweak positions and rotations until the layout reads.
8. Save → Export PDF → print.

## Frequently asked

**Can I print directly from the app?**
The export is PDF / image — open in your OS's print dialog or send to a print service (Snapfish, Shutterfly, local print shop).

**Can I make a multi-page scrapbook (a book)?**
Multi-page scrapbooks are in progress; for now each scrapbook is one page. Workaround: create multiple scrapbooks and merge the PDFs externally.

**Can my partner contribute photos to a shared scrapbook?**
Not yet — scrapbooks are single-user. Your partner can contribute by sharing photos to you (memory-level sharing) and you place them.

**What if I want to print on Etsy / Shutterfly / Snapfish?**
Export PNG / high-res image, upload there. Their templates will overlay.

**Can I save my own templates?**
Custom templates is a planned feature. For now, save the scrapbook as a draft and duplicate it as a starting point.

## Where to read next

- [Memories](./memories) — the source of most scrapbook photos.
- [Google Drive sync](./google-drive-sync) — where photos live.
- [Notes](./notes) — different shape of memory keeping.
- [Memory maps](/docs/maps/memory-maps) — connections between memories.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
