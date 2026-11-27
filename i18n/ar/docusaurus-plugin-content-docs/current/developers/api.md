---
title: "واجهة LifeWell البرمجية"
description: "واجهة REST لـLifeWell: عنوانها الأساسي، وتقسيم القوائم بمؤشر عند 20 صفاً افتراضياً و50 على الأكثر، وملف OpenAPI الذي يصف كل مسار وحقل."
keywords: [واجهة lifewell البرمجية, rest api, openapi, تقسيم صفحات api, next_cursor]
topics: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: فريق LifeWell
---

# واجهة LifeWell البرمجية \{#the-lifewell-api}

واجهة LifeWell هي REST API بعنوان أساسي واحد. يصف ملف OpenAPI المقروء آلياً كل مسار وحقل وخطأ. هذا الملف هو المرجع التفصيلي؛ وتخبرك هذه الصفحة أين تجده وكيف تقرؤه والقاعدتين اللتين تحكمان كل قائمة.

## ما العنوان الأساسي؟ \{#what-is-the-base-address}

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

`v1` في نهاية العنوان إصدار الواجهة. يحتاج كل طلب إلى رمز وصول أو اتصال تطبيق؛ راجع [المصادقة](./authentication.md).

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

## أين المرجع الكامل؟ \{#where-is-the-full-reference}

| الملف | العنوان | كيف تقرؤه |
|---|---|---|
| OpenAPI 3.1 بصيغة JSON | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | أداة OpenAPI مثل Swagger UI أوRedocly أوPostman أوInsomnia أو مولد عميل |
| المحتوى نفسه بصيغة Markdown | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | متصفح أو محرر نص أو مساعد ذكاء اصطناعي تلصق الملف فيه |

يُبنى الملفان من المصدر نفسه الذي تُبنى منه الواجهة، فلا يصفان مساراً غير موجود ولا يغفلان مساراً قائماً. ستُنشأ صفحات منفصلة للموارد من الملف نفسه؛ وحتى ذلك الحين، التفاصيل فيه.

## كيف أقرأ ملف OpenAPI؟ \{#how-do-i-read-the-openapi-file}

تجيب أربعة أجزاء عن معظم الأسئلة:

- **`paths`:** كل مسار وطريقته والصلاحية المطلوبة له.
- **`components.schemas`:** كل حقل قد تحمله الاستجابة ونوعه. لا يُرسل حقل غير مذكور هناك.
- **`components.securitySchemes`:** طريقتا الدخول، رمز وصول من نوع bearer وOAuth.
- **استجابات الخطأ:** كل قيمة `code` قد تحملها [استجابة الخطأ](./authentication.md#what-does-an-error-look-like) بحسب المسار.

الأجزاء التي تصل إليها الواجهة من سجلك وحقول كل جزء هي ما يسرده الملف بدقة. ما يغيب عنه غير متاح عمداً.

## كيف يعمل تقسيم القوائم؟ \{#how-does-pagination-work}

تُقسم كل قائمة إلى صفحات:

- **20 صفاً للصفحة** افتراضياً، و**50 على الأكثر**.
- إذا تلت الصفحةَ بيانات أخرى، تحمل `next_cursor`. أرسل هذه القيمة لجلب الصفحة التالية.
- الصفحة التي لا تحمل `next_cursor` هي الأخيرة.

المؤشر علامة موضع لا رقم صفحة؛ إذا أضيف صف وأنت تقرأ، لا تتحرك بقية الصفوف بمقدار واحد. أسماء معاملات الحجم والمؤشر في ملف OpenAPI لكل مسار قائمة.

## ماذا عن حدود الطلبات والأخطاء؟ \{#what-about-rate-limits-and-errors}

تنطبق القواعد نفسها على كل مسار؛ تجدها في صفحة [المصادقة](./authentication.md#what-are-the-rate-limits).
