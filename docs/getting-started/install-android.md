---
title: Install LifeWell on Android — Play Store and direct AAB
description: Install LifeWell on Android. Once published to the Play Store, search "LifeWell" — for now, beta testers can install via direct AAB or use the web app PWA.
keywords: [lifewell android, install lifewell android, play store, lifewell apk, capacitor android, ahsan mahmood]
sidebar_position: 2
---

# Install LifeWell on Android

LifeWell on Android is a Capacitor-built native wrapper around the same React app you can use on the web — same UI, same data, same Firestore account, with native Android features layered on top (push notifications, native share sheet, camera, native back-gesture handling, edge-to-edge layout).

This page covers two install paths: the Play Store (preferred, once published) and direct AAB / APK install for testers. iOS support is in preparation but not yet shipped — see [Install on the web](./install-web) for an iOS-friendly PWA option.

## Play Store (preferred path, when available)

**Status as of 2026-05-10**: LifeWell's Android build is production-ready (Play Console permissions cleanup completed 2026-04-18; CAMERA permission auto-injected by `@capacitor/camera` is now disclosed in the privacy policy and Data Safety form). Public Play Store listing is pending final review. Once live, the install path will be:

1. Open the Play Store on your Android device.
2. Search for **LifeWell**.
3. Confirm the developer is **Ahsan Mahmood** before installing — there are unrelated apps with similar names from other developers.
4. Tap **Install**. The app downloads (~25 MB) and appears in your app drawer.
5. Open it. Sign in with the same Google / Apple / email account you use on the web. Tracked data syncs automatically.

When the listing is live, this page will link directly to the Play Store URL.

## Direct AAB install (for testers right now)

If you're a tester or want LifeWell on Android before the public Play Store launch, you can install the latest AAB / APK directly. This requires enabling "Install unknown apps" for your file manager or browser — Android will prompt you the first time.

1. Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) requesting tester access. Include the Android version of your device and what you're hoping to test.
2. You'll receive a signed APK or a closed-testing Play Store link.
3. If APK: download to your phone, open the file in your file manager, confirm "Install unknown apps" when Android prompts, then install.
4. If closed testing: open the link on your Android device, accept the tester invite, then install via Play Store as normal.
5. Open LifeWell. Sign in.

This path is identical to the production build — same app, same features, same data flow — just delivered out-of-band while we wait on Play Store review.

## Permissions LifeWell requests

LifeWell asks for permissions only when you tap a feature that needs them, not at install time. You can grant or deny each one independently. Every sensitive permission has a non-permission fallback so the app stays useful even if you say no.

| Permission | When it's requested | Why | Fallback if denied |
| --- | --- | --- | --- |
| Camera | When you tap "Take photo" on an avatar / memory upload | Capture profile / memory photos in-app | Use gallery picker instead |
| Photos / media | When you tap "Choose from gallery" | Select existing photos | None needed — standard system picker |
| Notifications | When you enable a reminder | Wellness reminders, medication reminders, push notifications | Reminder still saved; just no push delivery |
| Location (optional) | When you geo-tag a memory or open a map view | Pin memories to a place, locate family on the map | Manual map placement |
| Calendar | When you sync wellness events | Two-way sync with Google Calendar / Outlook | Manual entry only |

LifeWell does NOT request: contacts, SMS, call log, body sensors, or activity recognition. You can verify this list yourself by checking the app's permission page in Android Settings → Apps → LifeWell → Permissions.

## What you need (Android requirements)

| Component | Minimum | Recommended |
| --- | --- | --- |
| Android version | Android 7.0 (API 24, Nougat) | Android 13+ |
| Storage | ~80 MB free | 200 MB |
| RAM | 2 GB | 3 GB+ |
| Network | Cellular or Wi-Fi | Wi-Fi for first sync of large photo backups |

## Updates

When LifeWell ships updates, the Play Store delivers them automatically (unless you've turned off auto-update). Direct-AAB testers receive new builds out-of-band.

LifeWell version `2.0.0` is the current production build as of 2026-05-10. Major updates are described on the [Changelog](/docs/about/changelog) page.

## Frequently asked

**Is LifeWell on the Play Store right now?**
Not yet at the time this page was written (2026-05-10). The build passed the 2026-04-18 permissions audit; public listing is pending. Until the listing is live, use the [web app](./install-web) or request tester access via email.

**Will my data sync between web and Android?**
Yes — both clients write to the same Firestore document under your account. Sign in with the same provider on both, and your tracked data, memories, notes, family tree, and settings appear identically.

**Why does LifeWell ask for the camera permission?**
The Capacitor camera plugin auto-declares the CAMERA permission in the merged AndroidManifest, even though you only see the prompt when you actively choose "Take photo" on an avatar or memory upload. Gallery uploads use the system file picker and don't trigger the camera prompt. See [Privacy & security](/docs/concepts/privacy-and-security) for full detail.

**Is there an APK download link on this page?**
No — APK distribution is gated through email request to discourage malicious mirrors. If you want a direct APK, email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

**Will there be an iOS version?**
Yes — the Capacitor app already has iOS configured (`Capacitor 8` with iOS 8.3.1 platform), but the App Store submission is not complete. Until then, iOS users can use the web app from Safari and "Add to Home Screen" for a standalone-app experience.

## Next steps

- [First-time setup](./first-time-setup) — sign in, set up your profile, choose a theme.
- [Quickstart tour](./quickstart-tour) — see what LifeWell can do in five minutes.
- [Push notifications](/docs/mobile/push-notifications) — configure delivery and quiet hours.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
