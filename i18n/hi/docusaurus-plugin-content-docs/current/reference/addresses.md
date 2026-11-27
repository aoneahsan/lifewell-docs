---
title: जो पते नहीं बदलते
description: LifeWell के निन्यानवे सार्वजनिक पते और पंद्रह स्थायी रीडायरेक्ट। दोबारा बनाया ऐप कोड बदलता है, पते नहीं।
keywords: [lifewell पते, स्थायी लिंक, रीडायरेक्ट, साइटमैप]
topics: [reference, seo]
sidebar_position: 2
---

# जो पते नहीं बदलते

दोबारा बनाते समय [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) के छियानवे सार्वजनिक पते तय रखे गए। हर एक 3.0.0 में खुलता है और कोई नहीं बदला। उसके बाद तीन और इसी तरह स्थायी किए गए: `/features/professionals`, `/changelog` और `/how-lifewell-works`—कुल निन्यानवे।

वे पहले से सार्वजनिक हैं: खोज इंजन में दर्ज, इंस्टॉल किए ऐप में दिए गए या ऐसी जगह लिंक किए गए जिन्हें हम नियंत्रित नहीं करते। **दोबारा बना ऐप कोड बदलता है, किए हुए वादे नहीं।**

## शुरुआती छियानवे में क्या है

| समूह | गिनती | उदाहरण |
|---|---|---|
| मुख्य सार्वजनिक पेज | 9 | `/` · `/features` · `/about` · `/contact` · `/get-involved` · `/support` · `/sitemap` · `/blog` · `/feed` |
| ब्लॉग पोस्ट | 47 | `/blog/<slug>` |
| सुविधा पेज | 28 | `/features/<slug>` |
| साधन | 5 | `/tools` और बचे हुए चार कैलकुलेटर |
| अलग पेज | 3 | `/baby-names` · `/blood-donors` · `/health-tools` |
| कानूनी और अनुपालन | 4 | `/privacy` · `/terms` · `/delete-account` · `/permissions` |

पेशेवरों की सूची `/professionals` साइन इन के बाद खुलती है; खोज इंजन में दर्ज नहीं होती। सार्वजनिक `/features/professionals` प्रकाशित है और ऊपर के निन्यानवे में शामिल है। [पेशेवर](../features/professionals.md) देखें।

:::note[`/feed` ब्लॉग फ़ीड है, सामाजिक फ़ीड कभी नहीं था]
पुराने दस्तावेज़ों ने `/feed` को सामाजिक फ़ीड बताया था। वह ऐसा नहीं है और कभी था भी नहीं। यह **हाल की ब्लॉग सामग्री का सार्वजनिक, पढ़ा जा सकने वाला फ़ीड** है—`/feed.xml` का मनुष्यों के लिए बना साथी। साइन इन करने के बाद `/community` में समूह पोस्ट का अलग फ़ीड है; वह `/feed` नहीं है।
:::

चार कानूनी पते Google Play की सूची और Data Safety फ़ॉर्म में दिए गए हैं। `/privacy` या `/delete-account` का 404 होना केवल टूटा लिंक नहीं, नीति की समस्या है। इसीलिए ये अनिवार्य सूची में हैं।

## सुविधा पेज सुविधा का ही वर्णन करता है

नए ऐप में कुछ एक जैसे पेज जोड़े गए। जहाँ ऐसा हुआ, सार्वजनिक सुविधा पेज फिर भी खुलता है और आप क्या कर सकते हैं बताता है; वह पुरानी के बजाय नई जगह दिखाता है।

<a id="redirects"></a>

## रीडायरेक्ट

पंद्रह, सभी स्थायी।

### बाहर, ZTools पर

| पुराने पते से | नए पते पर |
|---|---|
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

### भीतर, पुरानी स्क्रीन की जगह आई स्क्रीन पर

| पुराने पते से | नए पते पर |
|---|---|
| `/data-deletion` | `/delete-account` |
| `/tools/calorie-counter` | `/health/calories` |
| `/tools/fasting-tracker` | `/health/fasting` |
| `/tools/sleep-tracker` | `/health/sleep` |
| `/tools/step-counter` | `/health/steps` |

पीछे की स्क्रीन बदले तो रीडायरेक्ट का लक्ष्य बदल सकता है। रीडायरेक्ट खुद कभी नहीं हटता।

## मुख्य पते पर फ़ाइलें

मुख्य फ़ाइलें: `sitemap.xml` · `feed.xml` · `robots.txt` · `llms.txt` · `ai.txt` · `pricing.txt` · `humans.txt`

साइटमैप और फ़ीड हाथ से लिखने के बजाय **बिल्ड के समय** पेजों की रजिस्ट्री से बनते हैं। इसलिए वे साइट पर मिल रहे पेजों से अलग नहीं पड़ सकते। 2.x ऐप में दोनों हाथ से लिखे थे और पुरानी जानकारी देने लगे थे।

`robots.txt` AI क्रॉलर के नाम—GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Applebot और Bingbot—से अनुमति देता है। हर नाम वाले समूह में निजी पेजों के नियम भी दोहराता है, क्योंकि क्रॉलर अपना समूह मानता है और सामान्य समूह अनदेखा करता है।

## पते क्षेत्र से मेल क्यों नहीं खाते

`/health/mood-journal` मन क्षेत्र में और `/health/menopause` जीवन के पड़ाव में है। पते की शुरुआत ग़लत क्षेत्र बताती है, पर जानबूझकर वही रखी गई है। [सात क्षेत्र](../domains/overview.md#पते-क्षेत्रों-से-मेल-क्यों-नहीं-खाते) देखें।

## सूची में क्या नहीं है

`/search` साइटमैप से जानबूझकर बाहर है और `noindex` दिया गया है। यह एक व्यक्ति के रिकॉर्ड की साइन इन वाली स्क्रीन है; क्रॉलर के लिए वहाँ कुछ नहीं। खोज पेज को खोज इंजन में डालना उसे टटोलने का रास्ता होगा।
