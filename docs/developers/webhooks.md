---
title: Webhooks
description: LifeWell webhooks tell your own server the moment something in your record changes — signed with Standard Webhooks, retried for just over a day, with verification code for Node, Python and PHP.
keywords: [lifewell webhooks, standard webhooks, webhook signature verification, webhook retries]
topics: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# Webhooks

A LifeWell webhook is a signed `POST` to an address you own, sent when something in your record changes.
You add the address in **Settings → Other apps → Webhooks**, choose which events it receives, and check the
signature on every request so you know it came from LifeWell.

## Which events are there?

Events are named `resource.verb` — the part of your record, then what happened to it. The full catalogue,
with every event's payload, lives in the [OpenAPI file](./api.md#where-is-the-full-reference); this page does
not repeat it, so it cannot fall behind.

One event is always there: `webhook.test`, sent when you press **Send test event**.

## Which addresses are accepted?

- `https://` only, on port 443 or 8443, with no user name or password in the address.
- Never a private or local address — `localhost`, `127.0.0.1`, `10.x.x.x`, `192.168.x.x`, link-local
  addresses, or a name that resolves to any of them. The check runs when you save the address and again
  before every send, and a redirect to a private address is refused too.
- Your server has 10 seconds to answer.

## What does a request carry?

LifeWell follows the [Standard Webhooks](https://www.standardwebhooks.com/) specification. Each request has
three headers:

| Header | Holds |
|---|---|
| `webhook-id` | The event's id. It stays the same on every retry, so use it to ignore a repeat |
| `webhook-timestamp` | When it was sent, in seconds since 1970 |
| `webhook-signature` | `v1,` and a base64 HMAC-SHA256 signature; there may be more than one, separated by spaces |

The signing secret starts `whsec_`. You can see it again under the same
[10-minute rule](./authentication.md#can-i-see-a-token-again) as a token. **Rotate** issues a new secret and
signs with both for 24 hours, so a receiver that accepts either keeps working while you swap it in.

## How do I verify a request?

Verify before you parse, using the exact bytes you received. A JSON body that has been parsed and
re-serialised will not match its signature.

The libraries below are the Standard Webhooks ones — `standardwebhooks` 1.3.0 on npm and PyPI, and
`standard-webhooks/standard-webhooks` 1.3.0 on Packagist, as checked on 19 November 2026.

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

### Any language

1. `secret = base64decode(whsec value without the "whsec_" prefix)`.
2. `signed = webhook-id + "." + webhook-timestamp + "." + raw body` (the exact bytes received).
3. `expected = base64(HMAC_SHA256(secret, signed))`.
4. Compare `expected` to each `v1,` value in `webhook-signature`, in constant time; any match passes.
5. Refuse when `|now − webhook-timestamp| > 300`.

## What happens when my server does not answer?

Any `2xx` counts as delivered. Anything else — another status, a timeout, a refused address — is a failed
attempt, and LifeWell tries again on this schedule:

| Attempt | Sent |
|---|---|
| 1 | At once |
| 2 | 5 seconds later |
| 3 | 5 minutes later |
| 4 | 30 minutes later |
| 5 | 2 hours later |
| 6 | 5 hours later |
| 7 | 10 hours later |
| 8 | 10 hours later |

Three things turn an address off:

- **`410 Gone`**, at once. Answer with it when you have retired the address on purpose.
- **All eight attempts failing** for one event.
- **5 days of continuous failure** on the address.

When an address is turned off, LifeWell emails you the last error with a link to turn it back on.

## How do I test and replay?

- **Send test event** sends `webhook.test` to the address now.
- The **delivery log** on each address lists every attempt — status, attempt number, the response code, how
  long it took, and when the next retry is due. It updates as deliveries happen, without reloading.
- **Replay** sends one delivery again, with the same `webhook-id`. To catch up after an outage, replay every
  failed delivery since a time you choose, up to 1,000 at once.
- **Pause** stops sending to an address until you resume it.
