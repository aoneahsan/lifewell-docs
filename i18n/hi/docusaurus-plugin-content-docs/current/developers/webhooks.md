---
title: वेबहुक
description: आपके रिकॉर्ड में बदलाव होते ही LifeWell आपके सर्वर को Standard Webhooks हस्ताक्षर वाला संदेश भेजता है; एक दिन से अधिक दोबारा कोशिश और Node, Python, PHP में जाँच के उदाहरण।
keywords: [lifewell वेबहुक, standard webhooks, हस्ताक्षर जाँच]
tags: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: LifeWell टीम
---

# वेबहुक

LifeWell वेबहुक आपके रिकॉर्ड में बदलाव होने पर आपके पते पर हस्ताक्षरित `POST` भेजता है। **सेटिंग्स → दूसरे ऐप → वेबहुक** में पता जोड़ें, मिलने वाली घटनाएँ चुनें और हर अनुरोध का हस्ताक्षर जाँचें, ताकि पता चले कि वह LifeWell से आया है।

## कौन सी घटनाएँ हैं?

घटनाओं का नाम `resource.verb` है—पहले रिकॉर्ड का हिस्सा, फिर उस पर हुआ काम। हर घटना के डेटा समेत पूरी सूची [OpenAPI फ़ाइल](./api.md#पूरा-संदर्भ-कहाँ-है) में है। यह पेज उसे दोहराता नहीं, ताकि पुरानी सूची न दे।

एक घटना हमेशा उपलब्ध है: **टेस्ट घटना भेजें** दबाने पर `webhook.test`।

## कौन से पते स्वीकार होते हैं?

- केवल `https://`, पोर्ट 443 या 8443 पर; पते में उपयोगकर्ता नाम या पासवर्ड नहीं।
- निजी या स्थानीय पता कभी नहीं—`localhost`, `127.0.0.1`, `10.x.x.x`, `192.168.x.x`, स्थानीय लिंक वाले पते या ऐसे पते का नाम। पता सहेजते और हर बार भेजने से पहले जाँच होती है। निजी पते पर जाने वाला रीडायरेक्ट भी रोका जाता है।
- आपके सर्वर को 10 सेकंड में जवाब देना होता है।

## अनुरोध में क्या होता है?

LifeWell [Standard Webhooks](https://www.standardwebhooks.com/) नियम अपनाता है। हर अनुरोध में तीन हेडर हैं:

| हेडर | क्या रखता है |
|---|---|
| `webhook-id` | घटना की पहचान। दोबारा कोशिश में भी वही रहती है; दोहरा काम रोकने के लिए इस्तेमाल करें |
| `webhook-timestamp` | भेजने का समय, 1970 के बाद सेकंड में |
| `webhook-signature` | `v1,` और base64 HMAC-SHA256 हस्ताक्षर; जगह से अलग किए एक से अधिक हो सकते हैं |

हस्ताक्षर की गुप्त कुंजी `whsec_` से शुरू होती है। टोकन वाले [10 मिनट के नियम](./authentication.md#क्या-टोकन-फिर-देख-सकते-हैं) से उसे दोबारा देख सकते हैं। **बदलें** नया गुप्त मान जारी करता है और 24 घंटे दोनों से हस्ताक्षर करता है, ताकि पाने वाला नया मान लगाते समय भी काम करता रहे।

## अनुरोध की जाँच कैसे करें?

पढ़ने से पहले मिले हुए ठीक उन्हीं बाइट से हस्ताक्षर जाँचें। JSON पढ़कर फिर लिखने पर वह हस्ताक्षर से मेल नहीं खाएगा।

नीचे Standard Webhooks की लाइब्रेरी हैं: npm और PyPI पर `standardwebhooks` 1.3.0, तथा Packagist पर `standard-webhooks/standard-webhooks` 1.3.0। इनकी जाँच 19 नवंबर 2026 को हुई थी।

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

### किसी भी भाषा में

1. `secret = base64decode(whsec value without the "whsec_" prefix)`।
2. `signed = webhook-id + "." + webhook-timestamp + "." + raw body`—मिले हुए ठीक वही बाइट।
3. `expected = base64(HMAC_SHA256(secret, signed))`।
4. `expected` को `webhook-signature` के हर `v1,` मान से स्थिर समय में मिलाएँ; कोई एक मेल काफ़ी है।
5. `|now − webhook-timestamp| > 300` हो तो मना करें।

## आपका सर्वर जवाब न दे तो क्या होगा?

कोई भी `2xx` पहुँचने की पुष्टि है। दूसरी स्थिति, समय सीमा ख़त्म होना या अस्वीकृत पता असफल प्रयास हैं। LifeWell इस क्रम में फिर कोशिश करता है:

| प्रयास | कब भेजा जाएगा |
|---|---|
| 1 | तुरंत |
| 2 | 5 सेकंड बाद |
| 3 | 5 मिनट बाद |
| 4 | 30 मिनट बाद |
| 5 | 2 घंटे बाद |
| 6 | 5 घंटे बाद |
| 7 | 10 घंटे बाद |
| 8 | 10 घंटे बाद |

तीन स्थितियों में पता बंद होता है:

- **`410 Gone`**, तुरंत। पता जानबूझकर बंद किया हो तो यही जवाब दें।
- एक घटना के **सभी आठ प्रयास असफल** हों।
- पते पर **लगातार 5 दिन असफलता** रहे।

पता बंद होने पर LifeWell आख़िरी त्रुटि और उसे फिर चालू करने का लिंक ईमेल से भेजता है।

## जाँच और दोबारा भेजना कैसे करें?

- **टेस्ट घटना भेजें** अभी उस पते पर `webhook.test` भेजता है।
- हर पते का **भेजे जाने का लॉग** हर प्रयास की स्थिति, संख्या, जवाब कोड, लगा समय और अगली कोशिश का समय दिखाता है। नई कोशिशें बिना पेज दोबारा लोड किए दिखती हैं।
- **फिर भेजें** उसी `webhook-id` से एक प्रयास दोबारा भेजता है। सेवा बंद होने के बाद के सभी असफल प्रयास चुने हुए समय से फिर भेजें, एक बार में अधिकतम 1,000।
- **रोकें** फिर चालू करने तक उस पते पर भेजना बंद करता है।
