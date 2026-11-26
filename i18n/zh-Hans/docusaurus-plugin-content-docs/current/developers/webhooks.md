---
title: Webhook
description: LifeWell Webhook 会在您的记录发生变化时通知您自己的服务器。请求遵循 Standard Webhooks 签名规则，失败后会在略多于一天内重试，并提供 Node、Python 和 PHP 验签示例。
keywords: [lifewell webhooks, standard webhooks, webhook 签名验证, webhook 重试]
tags: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: LifeWell 团队
---

# Webhook

LifeWell Webhook 会在记录发生变化时，向您拥有的地址发送带签名的 `POST` 请求。在**设置 → 其他应用 → Webhook** 中添加地址，选择要接收的事件，并验证每次请求的签名，确认它确实来自 LifeWell。

## 有哪些事件？

事件名称采用 `resource.verb` 格式：先写记录中的部分，再写发生的操作。完整事件清单及各事件的数据内容见 [OpenAPI 文件](./api.md#where-is-the-full-reference)。本页不复制清单，以免将来落后于实际实现。

有一个事件始终可用：按下**发送测试事件**时发出的 `webhook.test`。

## 接受哪些地址？

- 必须使用 `https://`，端口为 443 或 8443，地址中不能带用户名或密码。
- 不能使用私有或本地地址，包括 `localhost`、`127.0.0.1`、`10.x.x.x`、`192.168.x.x`、链路本地地址，或解析到其中任何地址的域名。保存地址时会检查，每次发送前也会检查；重定向到私有地址同样会被拒绝。
- 您的服务器必须在十秒内响应。

## 请求包含什么？

LifeWell 遵循 [Standard Webhooks](https://www.standardwebhooks.com/) 规范。每次请求包含三个请求头：

| 请求头 | 内容 |
|---|---|
| `webhook-id` | 事件 ID。每次重试都保持相同，可用于忽略重复事件 |
| `webhook-timestamp` | 发送时间，以自 1970 年起的秒数表示 |
| `webhook-signature` | 以 `v1,` 开头的 base64 HMAC-SHA256 签名；可能有多个，以空格分隔 |

签名密钥以 `whsec_` 开头。与令牌一样，您可以按[十分钟规则](./authentication.md#can-i-see-a-token-again)再次查看。选择**轮换**会签发新密钥，并在 24 小时内同时使用新旧密钥签名，使接收端在更换密钥期间仍能工作。

## 如何验证请求？

请在解析正文之前，使用收到的原始字节验证。JSON 正文一旦解析后再重新序列化，就不会与原签名相符。

以下使用 Standard Webhooks 的软件库：npm 和 PyPI 上的 `standardwebhooks` 1.3.0，以及 Packagist 上的 `standard-webhooks/standard-webhooks` 1.3.0；版本于 2026 年 11 月 19 日核查。

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

### 任意编程语言

1. `secret = base64decode(whsec value without the "whsec_" prefix)`。
2. `signed = webhook-id + "." + webhook-timestamp + "." + raw body`（必须使用收到的原始字节）。
3. `expected = base64(HMAC_SHA256(secret, signed))`。
4. 以恒定时间比较 `expected` 与 `webhook-signature` 中每个 `v1,` 值；只要一个匹配即可通过。
5. 当 `|now − webhook-timestamp| > 300` 时拒绝请求。

## 服务器没有响应会怎样？

任何 `2xx` 响应都算送达。其他情况——其他状态码、超时、地址被拒绝——都算失败，LifeWell 会按以下时间表重试：

| 次数 | 发送时间 |
|---|---|
| 1 | 立即 |
| 2 | 五秒后 |
| 3 | 五分钟后 |
| 4 | 三十分钟后 |
| 5 | 两小时后 |
| 6 | 五小时后 |
| 7 | 十小时后 |
| 8 | 再过十小时 |

以下三种情况会停用地址：

- **返回 `410 Gone`**：立即停用。主动废弃地址时，可以返回这个状态。
- **同一事件的八次尝试全部失败**。
- **该地址连续五天发送失败**。

地址停用后，LifeWell 会发邮件告知最近一次错误，并附上重新启用的链接。

## 如何测试和重放？

- **发送测试事件**会立即向地址发送 `webhook.test`。
- 每个地址的**投递日志**会列出所有尝试——状态、次数、响应代码、耗时和下次重试时间。投递进行时，列表会更新，无需重新加载页面。
- **重放**会使用相同的 `webhook-id` 再次发送一条投递记录。若要补发故障期间的事件，可按您选择的起始时间重放失败投递，一次最多 1,000 条。
- **暂停**会停止向地址发送，直到您恢复。
