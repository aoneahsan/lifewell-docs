---
title: "عناوين لا تتغير"
description: عناوين LifeWell العامة الأصلية البالغ عددها 99 ما زالت تعمل؛ وتحفظ 19 إعادة توجيه دائمة العناوين التي انتقلت.
keywords: [عناوين lifewell, روابط دائمة, تحويلات, خريطة الموقع, عناوين ثابتة]
topics: [reference, seo]
sidebar_position: 2
---

# عناوين لا تتغير \{#addresses-that-do-not-move}

ثُبّت ستة وتسعون عنواناً عاماً على [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) عند إعادة البناء. تعمل كلها في 3.0.0 ولم تتغير. أضيفت بعدها ثلاثة وثُبتت بالطريقة نفسها: `/features/professionals` و`/changelog` و`/how-lifewell-works`؛ المجموع تسعة وتسعون.

ثُبتت لأنها منشورة: فهرستها محركات البحث، أو وصلت إلى تطبيقات مثبّتة، أو ربطت بها مواقع لا نتحكم فيها. **تغير إعادة البناء الشيفرة، لا الالتزامات التي تمثلها العناوين.**

## ما ضمن الستة والتسعين؟ \{#what-is-in-the-ninety-six}

| المجموعة | العدد | أمثلة |
|---|---|---|
| الصفحات العامة الأساسية | 9 | `/` · `/features` · `/about` · `/contact` · `/get-involved` · `/support` · `/sitemap` · `/blog` · `/feed` |
| مقالات المدونة | 47 | `/blog/<slug>` |
| صفحات الميزات | 28 | `/features/<slug>` |
| الأدوات | 5 | تضم مجموعة الأدوات الأصلية `/tools` وأربعة عناوين تعيد التوجيه الآن إلى ZTools. |
| الصفحات المستقلة | 3 | `/baby-names` · `/blood-donors` · `/health-tools` |
| القانون والامتثال | 4 | `/privacy` · `/terms` · `/delete-account` · `/permissions` |

دليل المختصين نفسه شاشة تتطلب الدخول في `/professionals` ولا تُفهرس. أما صفحة الميزة العامة `/features/professionals` فمنشورة وتدخل ضمن التسعة والتسعين؛ راجع [المختصين](../features/professionals.md).

:::note[`/feed` موجز المدونة، وليس موجزاً اجتماعياً]
وصفت نسخة سابقة من هذه الوثيقة `/feed` بأنه موجز اجتماعي، ولم يكن كذلك قط. إنه **موجز عام قابل للقراءة لأحدث مقالات المدونة**، ويقابله `/feed.xml`. لمن سجل دخوله، يضم `/community` موجزاً منفصلاً لمنشورات المجموعات؛ ولا يستخدم `/feed`.
:::

تظهر العناوين القانونية الأربع في صفحة Google Play ونموذج أمان البيانات. عطل `/privacy` أو`/delete-account` مخالفة للسياسة، لا مجرد رابط مكسور.

## تبقى صفحة الميزة شارحة للميزة \{#a-feature-page-keeps-describing-a-feature}

دمجت إعادة البناء بعض الشاشات المكررة. ما زالت صفحة الميزة تعمل وتشرح ما يمكن فعله، وتشير إلى الموضع الجديد بدلاً من القديم.

## التحويلات \{#redirects}

هناك 19 عنوانًا أساسيًا، وكل تحويل دائم. وتعيد مسارات الحاسبات الأربع السابقة التوجيه أيضًا تحت كل بادئة من بادئات اللغات التسع المترجمة.

### إلى ZTools \{#out-to-ztools}

| من | إلى |
|---|---|
| `/tools/child-growth` | [ZTools](https://ztools.zaions.com/child-growth-percentile-calculator) |
| `/tools/waist-hip-ratio` | [ZTools](https://ztools.zaions.com/waist-hip-ratio-calculator) |
| `/tools/wellness-weight-gain` | [ZTools](https://ztools.zaions.com/pregnancy-weight-gain-calculator) |
| `/tools/interval-timer` | [ZTools](https://ztools.zaions.com/workout-timer) |
| `/tools/bmi-calculator` | `ztools.zaions.com/bmi-calculator` |
| `/tools/tdee-calculator` | `ztools.zaions.com/tdee-calculator-advanced` |
| `/tools/bmr-calculator` | `ztools.zaions.com/bmr-calculator` |
| `/tools/macro-calculator` | `ztools.zaions.com/macronutrient-calculator` |
| `/tools/protein-calculator` | `ztools.zaions.com/protein-intake-calculator` |
| `/tools/body-fat-calculator` | `ztools.zaions.com/body-fat-calculator` |
| `/tools/ideal-weight-calculator` | `ztools.zaions.com/ideal-weight-calculator` |
| `/tools/heart-rate-zones` | `ztools.zaions.com/heart-rate-zone-calculator` |
| `/tools/age-calculator` | `ztools.zaions.com/age-calculator` |
| `/tools/workout-timer` | `ztools.zaions.com/workout-timer` |

### داخل LifeWell إلى الشاشة البديلة \{#in-to-the-screen-that-replaced-them}

| من | إلى |
|---|---|
| `/data-deletion` | `/delete-account` |
| `/tools/calorie-counter` | `/health/calories` |
| `/tools/fasting-tracker` | `/health/fasting` |
| `/tools/sleep-tracker` | `/health/sleep` |
| `/tools/step-counter` | `/health/steps` |

قد يتغير هدف التحويل إذا انتقلت الشاشة، لكن قاعدة التحويل نفسها لا تُحذف.

## ملفات الجذر \{#files-at-the-root}

تشمل الملفات: `sitemap.xml` · `feed.xml` · `robots.txt` · `llms.txt` · `ai.txt` · `pricing.txt` · `humans.txt`

تُولد خريطة الموقع والموجز وقت البناء من سجل المسارات، ولا تُصان يدوياً، فلا تختلف عما يقدمه الموقع. كُتبا يدوياً في 2.x واختلفا عن الحقيقة.

يسمح `robots.txt` لروبوتات الذكاء الاصطناعي المسماة GPTBot وChatGPT-User وClaudeBot وanthropic-ai وPerplexityBot وGoogle-Extended وCCBot وApplebot وBingbot، ويكرر قواعد المسارات الخاصة داخل كل مجموعة؛ إذ يتبع الروبوت مجموعته ويتجاهل المجموعة العامة.

## لماذا لا تطابق العناوين المجالات؟ \{#why-the-addresses-do-not-match-the-areas}

تقع `/health/mood-journal` في الذهن و`/health/menopause` في مراحل الحياة. مقدمة العنوان لا تطابق المجال عمداً؛ راجع [المجالات السبعة](../domains/overview.md#why-the-addresses-do-not-match-the-areas).

## ما ليس في القائمة \{#not-in-the-list}

تغيب `/search` عن خريطة الموقع وتحمل `noindex` عمداً. هي شاشة لحساب مسجل يبحث في سجله؛ لا شيء فيها لمحرك البحث، وفهرسة صفحة بحث تفتح باباً لفحصها آلياً.
