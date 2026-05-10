---
title: Quickstart tour — first 5 minutes in LifeWell
description: A 5-step quickstart for new LifeWell users. Log a vital, log water, set a reminder, run a calculator, customize your theme. Each step takes about a minute.
keywords: [lifewell quickstart, first 5 minutes, lifewell tour, log vital, water tracking, ahsan mahmood]
sidebar_position: 5
---

# Quickstart tour

This is a five-minute tour through what LifeWell can do, with one minute per stop. By the end, you'll have logged a vital, logged a glass of water, set a reminder, run a calculator, and customized your theme — enough to know whether LifeWell fits your day. Skip any step that doesn't interest you; nothing here is required.

You should be signed in already. If you're not, finish [first-time setup](./first-time-setup) first (about one minute) and come back.

## 1. Log a vital (1 minute)

The dashboard is the first screen after sign-in. Tap the **Vitals** card or use the sidebar to open the vitals screen.

1. Choose what to log: blood pressure, blood sugar, weight, BMI, or height.
2. Enter the reading. For blood pressure, that's two numbers (systolic / diastolic) plus an optional pulse.
3. Tap **Save**. The reading shows up immediately on the chart and in your history.

That's the model for almost every tracking surface in LifeWell — pick the metric, enter the value, save. The chart shows trends over time as you accumulate data, and you can tag entries with notes (e.g. "after coffee", "post-workout") to spot patterns.

See [Health overview](/docs/health/overview) for the full list of trackable metrics and [Vitals reference](/docs/health/vitals) for what each chart shows.

## 2. Log a glass of water (30 seconds)

Open the **Water** screen from the sidebar. The interface is one big button: **+ 1 glass**. Tap it. That's the entire log flow — one tap.

LifeWell defaults to 250ml glasses, but you can adjust the glass size in **Profile → Preferences** if you measure differently. The daily target is 2 liters by default; change it under the same preferences screen. The screen always shows your progress toward today's goal as a vertical bar that fills as you drink.

Why so simple? Water tracking only works if logging is friction-free. Designs with multi-step "amount" / "type" / "container" pickers measure better but get used less. LifeWell prioritizes the daily streak over the per-entry detail, with the option to override when you want.

## 3. Set a wellness reminder (1 minute)

Open **Reminders** from your profile or the sidebar.

1. Tap **+ New reminder**.
2. Pick the type: water, medication, mindfulness, stretch, eyes-off-screen, or custom.
3. Set the schedule — daily, weekdays, custom days, or a specific time of day.
4. Set quiet hours (default 22:00 – 07:00 in your time zone).
5. Save.

Reminders deliver via push notification on Android (when the [mobile app](/docs/mobile/overview) is installed), via desktop notifications on Chrome / Edge / Brave (when the [browser extension](/docs/extension/overview) is installed), and via in-app banners on the web. You can mute or pause any reminder from the same screen.

If you don't have the mobile app or the browser extension yet, the in-app banner still fires when you have LifeWell open in a tab.

## 4. Run a calculator (30 seconds)

Open **Tools** from the sidebar. You'll see 12+ calculators and timers. Tap **BMI** to start — it's the simplest.

1. Enter your height. (If you set it during [first-time setup](./first-time-setup), it's already there.)
2. Enter your weight.
3. The result appears instantly along with the WHO category (underweight, normal, overweight, obese class I/II/III).

Every calculator works the same way: enter inputs, see the result, optionally save the result to your tracking history. None of the calculators require a sign-in — they run entirely in your browser, with no data sent anywhere unless you actively choose to save.

Try the [Calorie calculator](/docs/tools/calorie-calculator) next if you want to plan around an activity goal, or the [Interval timer](/docs/tools/interval-timer) if you're prepping for a workout.

## 5. Customize your theme (1 minute)

Tap the **palette icon** in the header. The theme customizer opens.

1. Switch **Appearance** between Light / Dark / System. Pick what feels right.
2. Try a different **Accent color** — emerald (default), violet, blue, indigo, crimson, mint, amber, gray. Each one applies instantly across the app.
3. Adjust **UI scaling** if the default text feels too small or too big.
4. Optionally tweak the **border radius** (rounded corners) and **panel background** (solid or translucent).

If you don't like what you've changed, tap **Reset to defaults** at the bottom. Otherwise, your choices persist locally and sync to your profile, so the next device you sign in to picks up the same theme.

Full reference: [Theme customizer](/docs/profile-and-settings/theme-customizer).

## What you've seen so far

In five minutes you've used five different feature surfaces:

| Step | Surface | Source of truth |
| --- | --- | --- |
| Log a vital | `health/vitals` route | Firestore (tracking history) |
| Log water | `health/water-tracking` route | Firestore |
| Set a reminder | `profile/reminders` route | Firestore + delivery via OneSignal / browser API |
| Run a calculator | `tools/bmi-calculator` route | Browser only — nothing leaves your device |
| Customize theme | Theme customizer modal | Capacitor Preferences (local) + Firestore (sync) |

Each one is a starting point. The full surface is much bigger — see [Welcome](/docs/intro) for the complete map.

## Where to go next

- [Health overview](/docs/health/overview) — vitals, medications, sleep, exercise, mental health, conditions, period & fertility, pregnancy, breastfeeding.
- [Tools overview](/docs/tools/overview) — every calculator and timer.
- [Family overview](/docs/family/overview) — family tree, connections, journeys, location tracking.
- [Memories](/docs/memories-and-notes/memories) — geo-pin memories, attach photos, sync to Drive.
- [Privacy & security](/docs/concepts/privacy-and-security) — what data is stored where, and what isn't.

## Frequently asked

**I logged a vital but it disappeared.**
Almost always a network blip during save. The tracking screen shows a spinner while the write is in flight; if your network drops, the save reverts. Pull-to-refresh (or hard-refresh on web), and try again. Persistent failures are worth reporting to [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

**Can I undo a logged entry?**
Yes — open the entry from the history list and tap the trash icon (or swipe-to-delete on mobile). Deletion is immediate; no soft-archive.

**The reminder I set didn't fire.**
Three things to check, in order: (1) you have notifications enabled for LifeWell at the OS level, (2) the reminder isn't muted (toggle on the reminder edit screen), (3) you're not in the quiet-hours window. If all three are clear and reminders still aren't firing, see [Push notifications](/docs/mobile/push-notifications) troubleshooting.

**Does the calculator save my inputs?**
Only if you tap "Save to history" after the result. Without that explicit action, calculator inputs are forgotten when you leave the page.

**The theme reverted to defaults after I closed the browser.**
Almost always private / incognito mode — preferences only persist there for the lifetime of the window. In a normal window, theme choices persist locally and sync to your profile.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
