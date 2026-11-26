---
title: "الأدوات والحاسبات"
description: "أي الحاسبات تعمل داخل LifeWell وأيها على ZTools، ولماذا يغلب على دليل الأدوات أن يكون مجموعة روابط."
keywords: [أدوات lifewell, حاسبات صحية, حاسبة مؤشر كتلة الجسم, مؤقت الفترات, نمو الطفل]
tags: [features, tools]
sidebar_position: 11
---

# الأدوات والحاسبات \{#tools-and-calculators}

صفحة [`/tools`](https://lifewell.aoneahsan.com/tools) دليل. معظم أدواتها موجودة على [ZTools](https://ztools.zaions.com)، وهو موقع منفصل لحاسبات لا تحفظ سجلاً، وتنقلك البطاقة إلى الأداة هناك.

هذا مقصود. لا نعيد بناء حاسبة موجودة في مكان يُصان بالفعل.

## ما يعمل داخل LifeWell \{#what-runs-inside-lifewell}

بقيت أربع حاسبات لأن ZTools لا يقدمها:

| الأداة | العنوان |
|---|---|
| نسبة الخصر إلى الورك | `/tools/waist-hip-ratio` |
| نمو الطفل | `/tools/child-growth` |
| زيادة الوزن | `/tools/wellness-weight-gain` |
| مؤقت الفترات | `/tools/interval-timer` |

وتوجد صفحة [`/baby-names`](https://lifewell.aoneahsan.com/baby-names)، وهي متصفح أسماء وليست حاسبة.

الخمسة كلها عامة، ولا تتطلب حساباً ولا تحفظ عنك بيانات.

## ما انتقل إلى خارج التطبيق \{#what-moved-out}

تُعيد عناوين مؤشر كتلة الجسم وTDEE وBMR والمغذيات الكبرى والبروتين ونسبة دهون الجسم والوزن المثالي ومناطق نبض القلب والعمر ومؤقت التمرين التوجيه إلى ما يقابلها على ZTools. وتبقى عناوين LifeWell القديمة صالحة؛ تعيد توجيهاً دائماً بدلاً من صفحة 404، لأن الناس قد ربطوا بها.

وتُوجَّه أدوات أخرى **داخل التطبيق** إلى الشاشة التي حلت محلها: `/tools/calorie-counter` ← `/health/calories`، و`/tools/fasting-tracker` ← `/health/fasting`، و`/tools/sleep-tracker` ← `/health/sleep`، و`/tools/step-counter` ← `/health/steps`.

تجد القائمة الكاملة في [العناوين التي لا تنتقل](../reference/addresses.md#redirects).

## `/health-tools`

[`/health-tools`](https://lifewell.aoneahsan.com/health-tools) فهرس للحاسبات المرتبطة بالصحة.

:::note[أُزيلت أرقام الشعبية]
كانت نسخة 2.x تعرض بجانب كل أداة رقماً لحجم البحث، مثل *3.2M*، وترتب القائمة بناء عليه. لم تكن لهذه الأرقام مصادر؛ اختُلقت. أُزيلت من 3.0.0، وصار الترتيب مبنياً على معلومات فعلية.
:::

## المؤقتات داخل التطبيق \{#timers-inside-the-app}

`/health/workout-timer` والجلسات الموجهة ضمن [الذهن](../domains/mind.md#guided-sessions) جزء من التطبيق لا من دليل الأدوات، لأنها تكتب في سجلك، خلافاً للأدوات.
