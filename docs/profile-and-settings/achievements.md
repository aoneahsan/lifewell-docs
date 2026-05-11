---
title: Achievements — 7 categories, 4 tiers, real rewards
description: LifeWell achievements use 7 categories x 4 tiers (bronze, silver, gold, platinum) with rewards that unlock feature limits, badges, themes, and premium days.
keywords: [lifewell achievements, gamification, streak rewards, badge system, feature unlocks, ahsan mahmood]
sidebar_position: 6
---

# Achievements

**Achievements** in LifeWell are the lightweight gamification layer — earn badges and unlock rewards by using the app consistently, completing your profile, hitting health goals, engaging with the community. Designed to be encouraging without being manipulative: no infinite progress bars, no daily-streak-or-die guilt loops, and rewards that are useful rather than purely cosmetic.

## Categories

| Category | What earns it |
| --- | --- |
| **Consistency** | Streaks of daily app usage, daily logging |
| **Engagement** | Community posting, commenting, helpful reactions |
| **Completeness** | Profile completion, all-feature-explored |
| **Social** | Sharing, invites, partner connections |
| **Health milestones** | Specific health goals reached (weight, steps, vitals) |
| **Learning** | Reading educational content, completing courses |
| **Special** | Limited-time or unusual achievements (e.g. "Beta tester") |

Seven categories give enough variety that someone who uses LifeWell for health tracking but skips the community can still earn meaningful achievements; someone who uses it socially but isn't health-focused has their own path.

## Tiers

Each achievement has up to four tiers:

| Tier | Difficulty |
| --- | --- |
| **Bronze** | Easy — typically days to weeks of light use |
| **Silver** | Moderate — weeks to a month or two of consistent use |
| **Gold** | Hard — months of consistent use or significant milestone |
| **Platinum** | Long-term mastery — typically a year+ of consistency |

Tiers stack — earn bronze first, then silver builds on it. Each tier carries its own reward.

## Requirement types

Achievements measure progress via:

| Type | Example |
| --- | --- |
| `streak_days` | "Log water 7 days in a row" |
| `total_count` | "Log 50 memories total" |
| `single_action` | "Add your first family member" |
| `threshold` | "Hit 10,000 steps in one day" |
| `percentage` | "Complete 100% of your profile" |
| `time_based` | "Log every day this month" |
| `combination` | "Log vitals + sleep + nutrition every day for a week" |

The most engaging achievements tend to be `single_action` (one moment of accomplishment) and `streak_days` (rewarding consistency). Long `total_count` achievements (the "log 1000 memories" type) reward depth but can feel grind-y; the platinum tier is where these live.

## Rewards

Earned achievements unlock:

| Type | Example |
| --- | --- |
| `limit_increase` | "+20 photos per memory" |
| `feature_unlock` | "Unlock unlimited family-tree depth" |
| `badge` | Display badge on your profile |
| `theme_unlock` | New theme palette in the customizer |
| `premium_days` | Free premium tier for N days |
| `exclusive_content` | Access to special content (premium recipes, themes) |

Rewards are meant to be **useful**, not purely decorative. Earning gold on the "Consistency" category gives you a real feature-limit increase, not just a digital sticker.

## Honest framing — what we deliberately don't do

The achievement system has explicit anti-patterns:

- **No daily-login-or-lose-streak.** You can miss a day. Streaks have a grace period (typically 1 day per week) to avoid the dread that pure streak systems create. The Mayo Clinic and behavioural-science literature on goal-setting warn against all-or-nothing streaks.
- **No competitive leaderboards.** You don't see other users' achievement counts; achievements are personal. There's no rank-X-among-friends comparison that turns wellness into a sport.
- **No social broadcasts.** Earning an achievement is yours; the app doesn't auto-post it. Optional sharing exists; default off.
- **No FOMO time-limited events.** Special achievements exist, but they're not "earn this in the next 24 hours or lose it forever" engagement bait.
- **No achievement-gated content** that would be useful regardless. Premium features are paid; achievements unlock supplementary perks.

## Progress display

Each achievement card shows:

- **Title + icon**.
- **Description** ("Log water 30 days in a row").
- **Progress bar** with current value / target.
- **Tier dots** showing earned vs in-progress vs unearned tiers.
- **Reward preview** if earned at this tier.
- **Last activity** timestamp.

## Profile page

Your achievements page (`/profile/achievements`) shows:

- **Recent unlocks** at the top.
- **In-progress** achievements (~50% complete or higher).
- **Categorised view** of all achievements with completion percentage.
- **Filter** by tier, category, completion.

## Per-feature achievement opt-out

Don't want gamification at all? Toggle "Hide achievements" under [Preferences](/docs/profile-and-settings/preferences#wellness-score-toggle). Progress still tracks in the background (so re-enabling restores history) but no UI surfaces.

## Examples

A handful of real achievements:

- **First Steps** (bronze, single_action) — log your first health entry.
- **Hydration Hero** (gold, streak_days, 90 days) — hit your water goal 90 days in a row.
- **Memory Keeper** (silver, total_count, 25) — log 25 memories.
- **Family Builder** (gold, total_count, 20) — connect 20 family members.
- **Wellness Warrior** (platinum, combination, 365) — log vitals + sleep + nutrition every day for a year.
- **Community Contributor** (silver, total_count, 50) — write 50 helpful community comments.
- **Profile Perfectionist** (bronze, percentage, 100) — fill every profile field.

The list grows over time. New achievements ship in updates.

## Privacy

- Achievement progress lives in your account, private by default.
- The "share my achievements" toggle is off; you can flip it on per-achievement if you want to share via a public link.
- Connections don't see your achievements without explicit sharing.

## What achievements are not

- **Not addictive engagement loops.** Designed to encourage, not to manipulate.
- **Not a currency.** Achievement progress doesn't trade for anything beyond the stated rewards.
- **Not a substitute for the feature itself.** Earning an achievement for logging vitals doesn't replace the value of actually tracking vitals.
- **Not visible to other users by default.** Personal accomplishment, not social signal.

## Frequently asked

**I missed a day and lost my streak — is that really lost?**
Most streak achievements include a 1-day-per-week grace. Missing two days breaks the streak. If you're recovering from an illness or just took a deliberate break, that's life; the streak resetting isn't punishment.

**Can I see what's coming next?**
Yes — locked achievements show a partial preview (name + category + difficulty) so you know what's pursuable.

**Do achievements give me discounts on premium?**
Some platinum-tier achievements grant `premium_days` rewards. They don't grant ongoing discounts.

**Can I retroactively earn an achievement for things I did before joining LifeWell?**
No — achievements track app-recorded activity only. Past life events aren't backfilled.

**What if the achievement system feels gimmicky and I want it off?**
Toggle "Hide achievements" under Preferences. The system stays silent.

## Where to read next

- [Wellness scoring](/docs/concepts/wellness-scoring) — different "score" system, opt-out also available.
- [Premium and payments](./premium-and-payments) — what premium unlocks.
- [Theme customizer](./theme-customizer) — theme-unlock achievements feed here.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
