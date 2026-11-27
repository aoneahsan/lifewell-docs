---
title: LifeWell API
description: LifeWell REST API का मुख्य पता, सामान्यतः 20 और अधिकतम 50 पंक्तियों के पेज, और हर रास्ते व फ़ील्ड को बताने वाली OpenAPI फ़ाइल।
keywords: [lifewell api, lifewell rest api, openapi, api पेज]
topics: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: LifeWell टीम
---

# LifeWell API

LifeWell API एक मुख्य पते पर REST API है। उसका हर रास्ता, फ़ील्ड और त्रुटि मशीन से पढ़ी जा सकने वाली OpenAPI फ़ाइल में दर्ज है। संदर्भ वह फ़ाइल है, यह पेज नहीं। यहाँ उसका पता, उसे पढ़ने का तरीका और हर सूची के दो नियम हैं।

## मुख्य पता क्या है?

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

अंत का `v1` API का संस्करण है। हर अनुरोध के लिए टोकन या जुड़े ऐप की अनुमति चाहिए; [पहचान और अनुमति](./authentication.md) देखें।

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

<a id="where-is-the-full-reference"></a>

## पूरा संदर्भ कहाँ है?

| फ़ाइल | पता | किससे पढ़ें |
|---|---|---|
| OpenAPI 3.1, JSON | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | Swagger UI, Redocly, Postman, Insomnia या क्लाइंट बनाने वाला कोई OpenAPI साधन |
| वही, Markdown में | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | ब्राउज़र, पाठ संपादक या AI सहायक जिसमें आप इसे चिपकाएँ |

दोनों API के ही स्रोत से बनते हैं। इसलिए वे ऐसे रास्ते का वर्णन नहीं कर सकते जो मौजूद न हो या मौजूद रास्ता छोड़ दें। इस साइट पर हर संसाधन का अलग पेज भी उसी फ़ाइल से बनेगा; तब तक विवरण उसी फ़ाइल में है।

## OpenAPI फ़ाइल कैसे पढ़ें?

चार हिस्से ज़्यादातर सवालों के जवाब देते हैं:

- **`paths`**—हर रास्ता, उसका तरीका और ज़रूरी अनुमति।
- **`components.schemas`**—जवाब में आने वाला हर फ़ील्ड और उसका प्रकार। सूची में न दिया फ़ील्ड कभी नहीं भेजा जाता।
- **`components.securitySchemes`**—अंदर आने के दो तरीके: bearer एक्सेस टोकन और OAuth।
- **त्रुटि वाले जवाब**—[त्रुटि के ढाँचे](./authentication.md#त्रुटि-कैसी-दिखती-है) के हर `code`, हर रास्ते के अनुसार।

API आपके रिकॉर्ड के ठीक उन्हीं हिस्सों और फ़ील्ड तक पहुँचता है जो फ़ाइल में हैं। जो उसमें नहीं, वह जानबूझकर API से बाहर है।

## पेजों में सूची कैसे मिलती है?

हर सूची छोटे पेजों में मिलती है:

- सामान्यतः **हर पेज में 20 पंक्तियाँ**, अधिकतम **50**।
- और पंक्तियाँ हों तो जवाब में `next_cursor` आता है। अगले पेज के लिए वह मान वापस भेजें।
- `next_cursor` न हो तो वह आख़िरी पेज है।

कर्सर निशान है, पेज संख्या नहीं। पढ़ते समय नई पंक्ति जुड़ने से बाकी सब एक जगह नहीं खिसकते। आकार और कर्सर के पैरामीटर नाम OpenAPI फ़ाइल में हर सूची वाले रास्ते पर हैं।

## अनुरोध सीमा और त्रुटियों का क्या?

हर रास्ते पर एक ही नियम हैं। दोनों [पहचान और अनुमति](./authentication.md#अनुरोध-की-सीमाएँ-क्या-हैं) पेज पर हैं।
