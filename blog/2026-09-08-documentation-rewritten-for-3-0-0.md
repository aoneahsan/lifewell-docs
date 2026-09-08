---
slug: documentation-rewritten-for-3-0-0
title: The documentation was wrong, so it was rewritten
authors: [ahsan]
tags: [announcement, lifewell, docs, release]
description: LifeWell 3.0.0 is a rebuild on a new backend, and the old documentation described a product that no longer exists. Every page was deleted and rewritten against the code.
---

The previous version of this site described an iOS app that had been removed, a browser extension that is not
shipping, a database the application no longer uses, and an analytics stack that was close to the opposite of
the real one.

None of that was written dishonestly. It was written, and then the product moved, and nobody went back.

{/* truncate */}

## What was wrong

Three claims are worth naming, because each one had been read by somebody and believed.

**`/feed` was described as a social feed.** It is the public readable feed of recent blog content. There is no
social feed in LifeWell and there never was.

**Firebase Analytics was described as banned and replaced.** Google Analytics 4 *is* the Firebase analytics
property — one property, two ways of talking to it — and it runs alongside Amplitude, Clarity and Sentry
rather than instead of them. A reader who wanted to know what the app reports had been told the opposite of
the truth.

**Over-the-air updates were described as "not yet integrated".** That one was correct, and it is still
correct. It now says what actually exists behind it: two environment variables and a feature flag, no package,
no service, nothing fetched and nothing applied.

Beyond those, sixty-five pages described a document data model that the rebuild replaced with Postgres,
thirty-five mentioned an iOS platform that was removed on 2026-07-16, and a whole section explained how to
install and use an extension that does not exist.

## What was done about it

Every page was deleted. The replacements were written against the source — the export format from the table
registry the exporter itself reads, the plan limits from the plan registry, the Android minimum from the build
file, the admin capabilities from the derived admin surface.

Where something is half-built, the page says which half. There are seven of those, and they are listed in one
place on [What changed in 3.0.0](/about/changelog).

Where a number could be checked, it was. The old documentation said the Android minimum was 7.0; the build
says 28, which is Android 9.

## The rule this site now runs on

**A page may only describe what the product actually does.**

Not what it is about to do, not what the roadmap says, and not what would read better. If something is not
built, the page says not built rather than *coming soon*. If a control does less than it looks like it does,
the page says so next to the control rather than three sections away.

That is a harder standard to hold than it sounds, because the failure mode is not lying — it is writing
something true and then not going back. So the pages that make a claim about behaviour now name where that
behaviour lives, and the export format page is generated against the same registry the export reads, so it
cannot describe a file the product does not produce.

## Where the old addresses went

Everything under `/docs/**` now redirects. The documentation moved to the site root, which is what makes
`/reference/export-format` — the address the application itself links to from its export screen — resolve.

A page whose subject no longer exists redirects to the page that tells the truth about it. The extension
how-tos land on [Browser extension](/platforms/browser-extension), which says it is planned and not built.
The iOS pages land on [iOS](/platforms/ios), which gives the date it was removed and the condition for it
coming back.
