---
title: ویب ہکس
description: LifeWell ویب ہکس آپ کے ریکارڈ میں تبدیلی ہوتے ہی آپ کے سرور کو بتاتے ہیں؛ Standard Webhooks دستخط، ایک دن سے ذرا زیادہ کوششیں، اور Node، Python اور PHP میں تصدیق کی مثالیں۔
keywords: [lifewell webhooks, standard webhooks, webhook signature verification, webhook retries]
topics: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# ویب ہکس

LifeWell ویب ہک آپ کے اپنے پتے پر دستخط شدہ `POST` درخواست ہے، جو ریکارڈ میں کچھ بدلنے پر بھیجی جاتی ہے۔ **Settings → Other apps → Webhooks** میں پتہ شامل کریں، واقعات چنیں، اور ہر درخواست کے دستخط جانچیں تاکہ معلوم ہو کہ یہ LifeWell سے آئی ہے۔

## کون سے واقعات ہیں؟

واقعات کے نام `resource.verb` کی صورت میں ہیں: پہلے ریکارڈ کا حصہ، پھر اس کے ساتھ ہونے والا کام۔ ہر واقعے کے مواد سمیت مکمل فہرست [OpenAPI فائل](./api.md#where-is-the-full-reference) میں ہے۔ یہاں اسے نہیں دہرایا جاتا تاکہ یہ صفحہ پیچھے نہ رہ جائے۔

ایک واقعہ ہمیشہ موجود ہے: `webhook.test`، جو **Send test event** دبانے پر بھیجا جاتا ہے۔

## کون سے پتے قبول ہوتے ہیں؟

- صرف `https://`، پورٹ 443 یا 8443 پر، پتے میں صارف نام یا پاس ورڈ کے بغیر۔
- نجی یا مقامی پتے کبھی نہیں: `localhost`، `127.0.0.1`، `10.x.x.x`، `192.168.x.x`، مقامی رابطے والے پتے، یا ان میں سے کسی کی طرف جانے والا نام۔ پتہ محفوظ کرتے وقت اور ہر بھیجنے سے پہلے جانچ ہوتی ہے۔ نجی پتے کی طرف ری ڈائریکٹ بھی رد ہوتا ہے۔
- آپ کے سرور کو جواب دینے کے لیے 10 سیکنڈ ملتے ہیں۔

## درخواست میں کیا ہوتا ہے؟

LifeWell، [Standard Webhooks](https://www.standardwebhooks.com/) کی وضاحت کے مطابق چلتا ہے۔ ہر درخواست میں تین سرخیاں ہیں:

| سرخی | کیا رکھتی ہے؟ |
|---|---|
| `webhook-id` | واقعے کی شناخت؛ ہر دوبارہ کوشش میں وہی رہتی ہے، اس لیے بار بار آنے والا واقعہ پہچانیں۔ |
| `webhook-timestamp` | بھیجنے کا وقت، 1970 سے گزرے سیکنڈ میں۔ |
| `webhook-signature` | `v1,` اور base64 HMAC-SHA256 دستخط؛ خالی جگہ سے جدا ایک سے زیادہ بھی ہو سکتے ہیں۔ |

دستخط کی خفیہ کلید `whsec_` سے شروع ہوتی ہے۔ اسے ٹوکن کی طرح [10 منٹ کے اصول](./authentication.md#can-i-see-a-token-again) کے تحت دوبارہ دیکھ سکتے ہیں۔ **Rotate** نئی کلید دیتا ہے اور 24 گھنٹے دونوں سے دستخط کرتا ہے، تاکہ وصول کرنے والا نظام کسی ایک کو قبول کرتے ہوئے تبدیلی کے دوران چلتا رہے۔

## درخواست کی تصدیق کیسے کریں؟

مواد کو سمجھنے سے پہلے، موصول ہونے والے بالکل اصل بائٹس سے تصدیق کریں۔ JSON کو پڑھ کر دوبارہ لکھا جائے تو اس کے بائٹس بدل سکتے ہیں اور دستخط نہیں ملے گا۔

نیچے Standard Webhooks کی لائبریریاں ہیں: npm اور PyPI پر `standardwebhooks` 1.3.0، اور Packagist پر `standard-webhooks/standard-webhooks` 1.3.0؛ 19 نومبر 2026 کو جانچی گئیں۔

### Node

```js
import { Webhook } from 'standardwebhooks';

const wh = new Webhook(process.env.LIFEWELL_WEBHOOK_SECRET);   // the whsec_… value

app.post('/hooks/lifewell', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = wh.verify(req.body, req.headers);                  // throws on a bad signature or old timestamp
  } catch {
    return res.sendStatus(400);
  }
  if (alreadyHandled(req.headers['webhook-id'])) return res.sendStatus(200);
  queue.add(event);                                            // answer fast, work later
  res.sendStatus(200);
});
```

### Python

```python
from standardwebhooks.webhooks import Webhook
wh = Webhook(os.environ["LIFEWELL_WEBHOOK_SECRET"])
payload = wh.verify(request.get_data(), dict(request.headers))
```

### PHP

```php
$wh = new \StandardWebhooks\Webhook(getenv('LIFEWELL_WEBHOOK_SECRET'));
$payload = $wh->verify(file_get_contents('php://input'), getallheaders());
```

### کسی بھی زبان میں

1. `secret = base64decode(whsec value without the "whsec_" prefix)`۔
2. `signed = webhook-id + "." + webhook-timestamp + "." + raw body`؛ موصول ہونے والے اصل بائٹس۔
3. `expected = base64(HMAC_SHA256(secret, signed))`۔
4. `expected` کو `webhook-signature` کی ہر `v1,` قدر سے مستقل وقت میں ملائیں؛ کوئی ایک مل جائے تو درست ہے۔
5. `|now − webhook-timestamp| > 300` ہو تو رد کریں۔

## سرور جواب نہ دے تو کیا ہوتا ہے؟

ہر `2xx` کامیاب ترسیل ہے۔ دوسرا جواب، وقت ختم ہونا یا پتہ رد ہونا ناکام کوشش ہے، اور LifeWell اس ترتیب سے دوبارہ کوشش کرتا ہے:

| کوشش | وقت |
|---|---|
| 1 | فوراً |
| 2 | 5 سیکنڈ بعد |
| 3 | 5 منٹ بعد |
| 4 | 30 منٹ بعد |
| 5 | 2 گھنٹے بعد |
| 6 | 5 گھنٹے بعد |
| 7 | 10 گھنٹے بعد |
| 8 | 10 گھنٹے بعد |

تین حالتوں میں پتہ بند ہو جاتا ہے:

- **`410 Gone`** ملتے ہی۔ پتہ جان بوجھ کر ختم کیا ہو تو یہی جواب دیں۔
- ایک واقعے کی **تمام آٹھ کوششیں ناکام** ہوں۔
- پتے پر **مسلسل 5 دن کی ناکامی** ہو۔

پتہ بند ہو تو LifeWell آخری خرابی اور اسے دوبارہ فعال کرنے کے رابطے کے ساتھ آپ کو ای میل کرتا ہے۔

## جانچ اور دوبارہ ترسیل کیسے کریں؟

- **Send test event** ابھی `webhook.test` بھیجتا ہے۔
- ہر پتے کی **ترسیل کی فہرست** ہر کوشش دکھاتی ہے: حالت، کوشش کی تعداد، جواب کا کوڈ، لگنے والا وقت، اور اگلی کوشش کب ہو گی۔ ترسیل ہوتے ہی فہرست صفحہ دوبارہ لوڈ کیے بغیر بدلتی ہے۔
- **Replay** ایک ترسیل پھر بھیجتا ہے، اسی `webhook-id` کے ساتھ۔ خرابی کے بعد واپس آنے کے لیے منتخب وقت سے ناکام ترسیلات دوبارہ چلائیں؛ ایک بار میں زیادہ سے زیادہ 1,000۔
- **Pause** دوبارہ چلانے تک اس پتے پر بھیجنا روکتا ہے۔
