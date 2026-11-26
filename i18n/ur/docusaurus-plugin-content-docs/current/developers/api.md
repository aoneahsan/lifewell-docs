---
title: LifeWell API
description: LifeWell REST API کا بنیادی پتہ، فہرستوں میں بنیادی طور پر 20 اور زیادہ سے زیادہ 50 قطاریں، اور ہر راستہ اور خانہ بیان کرنے والی OpenAPI فائل۔
keywords: [lifewell api, lifewell rest api, openapi, api pagination, next_cursor]
tags: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# LifeWell API

LifeWell API ایک بنیادی پتے پر REST API ہے۔ اس کے تمام راستے، خانے اور خرابیاں مشین کے پڑھنے کے قابل OpenAPI فائل میں بیان ہیں۔ حوالہ وہ فائل ہے، یہ صفحہ نہیں۔ یہاں بتایا گیا ہے کہ فائل کہاں ہے، اسے کیسے پڑھیں، اور ہر فہرست کے دو بنیادی اصول کیا ہیں۔

## بنیادی پتہ کیا ہے؟

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

آخر میں `v1` API کا ورژن ہے۔ ہر درخواست کے لیے ٹوکن یا ایپ کا منظور شدہ رابطہ چاہیے۔ [توثیق](./authentication.md) دیکھیں۔

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

## مکمل حوالہ کہاں ہے؟ {/* #where-is-the-full-reference */}

| فائل | پتہ | کس میں پڑھیں |
|---|---|---|
| OpenAPI 3.1، JSON | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | کوئی بھی OpenAPI ٹول: Swagger UI، Redocly، Postman، Insomnia یا کلائنٹ جنریٹر |
| وہی، Markdown میں | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | براؤزر، متن کا ایڈیٹر، یا ایسا AI معاون جس میں آپ اسے چسپاں کریں |

دونوں فائلیں API ہی کے ماخذ سے بنتی ہیں؛ اس لیے کسی غیر موجود راستے کو بیان نہیں کر سکتیں، نہ موجود راستہ چھوڑ سکتی ہیں۔ اس سائٹ کے ہر وسائل کے لیے الگ صفحہ بھی اسی فائل سے بنایا جائے گا۔ تب تک مکمل تفصیل فائل ہی میں ہے۔

## OpenAPI فائل کیسے پڑھیں؟

اس کے چار حصے زیادہ تر سوالوں کا جواب دیتے ہیں:

- **`paths`** — ہر راستہ، اس کا طریقہ اور درکار اجازت۔
- **`components.schemas`** — جواب کے ہر ممکن خانے اور اس کی قسم۔ وہاں درج نہ ہونے والا خانہ کبھی نہیں بھیجا جاتا۔
- **`components.securitySchemes`** — داخلے کے دو راستے: bearer رسائی ٹوکن اور OAuth۔
- **خرابی کے جوابات** — [خرابی کے جواب](./authentication.md#what-does-an-error-look-like) میں ہر راستے کے لیے ممکنہ `code`۔

API آپ کے ریکارڈ کے انہی حصوں اور خانوں تک پہنچتی ہے جو فائل میں درج ہیں۔ غیر درج چیز تک رسائی دانستہ طور پر نہیں۔

## فہرست کے صفحات کیسے کام کرتے ہیں؟

ہر فہرست کو حصوں میں بانٹا جاتا ہے:

- بنیادی طور پر **ہر صفحے پر 20 قطاریں**، زیادہ سے زیادہ **50**۔
- مزید قطاریں ہوں تو جواب میں `next_cursor` آتا ہے۔ اگلا حصہ لینے کے لیے یہی قدر واپس بھیجیں۔
- `next_cursor` نہ ہو تو وہ آخری حصہ ہے۔

کرسر صفحے کا نمبر نہیں، نشانِ کتاب ہے۔ پڑھتے ہوئے نئی قطار شامل ہو تو باقی سب ایک نمبر آگے نہیں سرکتے۔ ہر فہرست والے راستے پر سائز اور کرسر کے خانوں کے نام OpenAPI فائل میں ہیں۔

## درخواست کی حدیں اور خرابیاں؟

ہر راستے پر ایک ہی اصول لاگو ہوتے ہیں۔ دونوں کی تفصیل [توثیق](./authentication.md#what-are-the-rate-limits) کے صفحے پر ہے۔
