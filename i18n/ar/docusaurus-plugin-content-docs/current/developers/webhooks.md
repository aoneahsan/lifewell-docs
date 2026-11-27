---
title: "خطافات الويب"
description: "تخبر خطافات ويب LifeWell خادمك فور تغير شيء في سجلك؛ تُوقع وفق Standard Webhooks، وتُعاد محاولتها لأكثر من يوم، مع أمثلة تحقق لـNode وPython وPHP."
keywords: [خطافات ويب lifewell, standard webhooks, التحقق من توقيع خطاف الويب, إعادة محاولة الإرسال]
topics: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: فريق LifeWell
---

# خطافات الويب \{#webhooks}

خطاف ويب LifeWell طلب `POST` موقّع إلى عنوان تملكه، يُرسل حين يتغير شيء في سجلك. تضيف العنوان من **الإعدادات ← التطبيقات الأخرى ← خطافات الويب**، وتختار الأحداث التي تصله، وتتحقق من توقيع كل طلب لتعرف أنه جاء من LifeWell.

## ما الأحداث المتاحة؟ \{#which-events-are-there}

تسمى الأحداث `resource.verb`: جزء السجل ثم ما حدث له. القائمة الكاملة ومحتوى كل حدث في [ملف OpenAPI](./api.md#where-is-the-full-reference). لا نكررها هنا حتى لا تتخلف الصفحة عن المصدر.

هناك حدث متاح دائماً: `webhook.test`، يُرسل عند ضغط **إرسال حدث تجريبي**.

## ما العناوين المقبولة؟ \{#which-addresses-are-accepted}

- عناوين `https://` فقط، على المنفذ 443 أو8443، ودون اسم مستخدم أو كلمة مرور في العنوان.
- لا يُقبل عنوان خاص أو محلي، مثل `localhost` و`127.0.0.1` و`10.x.x.x` و`192.168.x.x` والعناوين المحلية للرابط، أو اسم يُحل إلى أي منها. يجري الفحص عند الحفظ وقبل كل إرسال، ويُرفض أيضاً التحويل إلى عنوان خاص.
- أمام خادمك 10 ثوانٍ للرد.

## ماذا يحمل الطلب؟ \{#what-does-a-request-carry}

يتبع LifeWell مواصفة [Standard Webhooks](https://www.standardwebhooks.com/). لكل طلب ثلاث ترويسات:

| الترويسة | محتواها |
|---|---|
| `webhook-id` | معرّف الحدث، ثابت في كل إعادة محاولة؛ استخدمه لتجاهل التكرار |
| `webhook-timestamp` | وقت الإرسال بالثواني منذ 1970 |
| `webhook-signature` | `v1,` وتوقيع HMAC-SHA256 مرمز بـbase64؛ قد توجد عدة تواقيع تفصل بينها مسافات |

يبدأ سر التوقيع بـ`whsec_`. يمكنك كشفه مجدداً تحت [قاعدة العشر دقائق](./authentication.md#can-i-see-a-token-again) نفسها الخاصة بالرموز. ينشئ **تدوير** سراً جديداً ويوقع بالاثنين لمدة 24 ساعة، ليستمر عمل المستقبل أثناء استبدال السر.

## كيف أتحقق من الطلب؟ \{#how-do-i-verify-a-request}

تحقق قبل تحليل الطلب باستخدام البايتات المستلمة نفسها. نص JSON بعد تحليله وإعادة كتابته لن يطابق التوقيع.

المكتبات أدناه تتبع Standard Webhooks: الإصدار 1.3.0 من `standardwebhooks` على npm وPyPI، و`standard-webhooks/standard-webhooks` على Packagist، بحسب التحقق في 19 نوفمبر 2026.

### Node

```js
import { Webhook } from 'standardwebhooks';

const wh = new Webhook(process.env.LIFEWELL_WEBHOOK_SECRET);

app.post('/hooks/lifewell', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = wh.verify(req.body, req.headers);
  } catch {
    return res.sendStatus(400);
  }
  if (alreadyHandled(req.headers['webhook-id'])) return res.sendStatus(200);
  queue.add(event);
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

### أي لغة \{#any-language}

1. احذف البادئة `whsec_` من السر وفك ترميز الجزء الباقي باستخدام `base64decode`.
2. `signed = webhook-id + "." + webhook-timestamp + "." + raw body`، بالبايتات المستلمة نفسها.
3. `expected = base64(HMAC_SHA256(secret, signed))`.
4. قارن `expected` بكل قيمة `v1,` في `webhook-signature` بزمن ثابت؛ تكفي مطابقة واحدة.
5. ارفض إذا كان `|now − webhook-timestamp| > 300`.

## ماذا لو لم يرد خادمي؟ \{#what-happens-when-my-server-does-not-answer}

تُعد أي استجابة `2xx` تسليماً ناجحاً. أي حالة أخرى، أو انتهاء مهلة، أو عنوان مرفوض، محاولة فاشلة. يعيد LifeWell المحاولة كالتالي:

| المحاولة | وقت الإرسال |
|---|---|
| 1 | فوراً |
| 2 | بعد 5 ثوانٍ |
| 3 | بعد 5 دقائق |
| 4 | بعد 30 دقيقة |
| 5 | بعد ساعتين |
| 6 | بعد 5 ساعات |
| 7 | بعد 10 ساعات |
| 8 | بعد 10 ساعات |

توقف ثلاثة أمور العنوان:

- **`410 Gone` فوراً.** أعد هذه الحالة حين تتقاعد عن استخدام العنوان عمداً.
- **فشل المحاولات الثماني** لحدث واحد.
- **خمسة أيام من الفشل المتواصل** لذلك العنوان.

عند إيقافه، يرسل LifeWell إليك آخر خطأ بالبريد مع رابط لإعادة تشغيله.

## كيف أختبر وأعيد الإرسال؟ \{#how-do-i-test-and-replay}

- **إرسال حدث تجريبي** يرسل `webhook.test` الآن.
- **سجل التسليم** لكل عنوان يسرد كل محاولة: الحالة ورقم المحاولة ورمز الاستجابة ومدتها ووقت الإعادة التالية. يتحدث أثناء التسليم دون إعادة تحميل.
- **إعادة الإرسال** ترسل عملية تسليم مجدداً مع `webhook-id` نفسه. بعد انقطاع، يمكنك إعادة عمليات التسليم الفاشلة منذ وقت تختاره، حتى 1,000 دفعة واحدة.
- **إيقاف مؤقت** يمنع الإرسال إلى العنوان حتى تستأنفه.
