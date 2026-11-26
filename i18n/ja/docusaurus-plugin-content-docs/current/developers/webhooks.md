---
title: Webhook
description: LifeWellの記録変更を自分のサーバーへ知らせるWebhook。Standard Webhooksの署名、1日強にわたる再試行、Node・Python・PHPでの検証方法。
keywords: [LifeWell Webhook, Standard Webhooks, Webhook署名検証, Webhook再試行]
tags: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# Webhook

LifeWellのWebhookは、記録に変更があったとき、自分が管理するURLへ署名付きの`POST`を送ります。**設定 → ほかのアプリ → Webhook**でURLを追加し、受け取るイベントを選びます。すべてのリクエストで署名を検証し、LifeWellから届いたことを確かめてください。

## どんなイベントがありますか？

イベント名は`resource.verb`形式で、記録の部分と起きた操作を表します。全イベントと各ペイロードは[OpenAPIファイル](./api.md#where-is-the-full-reference)に記載されています。このページでは重複して列挙せず、仕様の更新に合わせて確認できるようにしています。

**テストイベントを送信**を押したときの`webhook.test`は常に利用できます。

## どんなURLを登録できますか？

- `https://`のみ。ポートは443または8443で、URLにユーザー名やパスワードを含められません。
- プライベートまたはローカルのアドレスは使えません。`localhost`、`127.0.0.1`、`10.x.x.x`、`192.168.x.x`、リンクローカルアドレス、それらに解決される名前も対象です。登録時と送信前の毎回確認し、プライベートアドレスへのリダイレクトも拒否します。
- サーバーは10秒以内に応答する必要があります。

## リクエストには何が含まれますか？

LifeWellは[Standard Webhooks](https://www.standardwebhooks.com/)仕様に従います。各リクエストには3つのヘッダーがあります。

| ヘッダー | 内容 |
|---|---|
| `webhook-id` | イベントID。再試行でも同じため、重複を無視するために使えます |
| `webhook-timestamp` | 送信時刻。1970年からの秒数 |
| `webhook-signature` | `v1,`とbase64形式のHMAC-SHA256署名。空白区切りで複数入る場合があります |

署名用シークレットは`whsec_`で始まります。トークンと同じ[10分間の規則](./authentication.md#can-i-see-a-token-again)に従って再表示できます。**ローテーション**すると新しいシークレットが発行され、24時間は両方で署名されます。受信側を切り替える間、どちらかを受け付ければ動作します。

## リクエストの検証方法は？

受信したバイト列をそのまま使い、内容を解析する前に検証します。JSONを解析して再度文字列にしたものは、元の署名と一致しません。

以下はStandard Webhooksのライブラリーを使う例です。2026年11月19日に確認したバージョンは、npmとPyPIの`standardwebhooks` 1.3.0、Packagistの`standard-webhooks/standard-webhooks` 1.3.0です。

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

### ほかの言語

1. `secret = base64decode(whsec値から"whsec_"接頭辞を除いたもの)`。
2. `signed = webhook-id + "." + webhook-timestamp + "." + 受信した本文の生バイト列`。
3. `expected = base64(HMAC_SHA256(secret, signed))`。
4. `webhook-signature`内の各`v1,`値と`expected`を一定時間で比較します。1つでも一致すれば有効です。
5. `|現在時刻 − webhook-timestamp| > 300`なら拒否します。

## サーバーが応答しない場合は？

どの`2xx`も配信成功です。それ以外のステータス、タイムアウト、拒否されたURLは失敗とみなし、次の間隔で再試行します。

| 試行 | 送信時刻 |
|---|---|
| 1 | 直ちに |
| 2 | 5秒後 |
| 3 | 5分後 |
| 4 | 30分後 |
| 5 | 2時間後 |
| 6 | 5時間後 |
| 7 | 10時間後 |
| 8 | 10時間後 |

次のいずれかでURLが無効になります。

- **`410 Gone`**が返った場合は直ちに無効になります。意図してURLを廃止したときに返してください。
- 1つのイベントで**8回すべて失敗**した場合。
- URLで**5日間連続して失敗**した場合。

無効になると、LifeWellは最後のエラーと再有効化リンクをメールで送ります。

## テストと再送信は？

- **テストイベントを送信**すると、`webhook.test`を今すぐ送ります。
- 各URLの**配信ログ**には、ステータス、試行回数、応答コード、所要時間、次の再試行時刻が記録されます。ページの再読み込みなしで更新されます。
- **再送信**は同じ`webhook-id`で1件を再度送ります。障害後は指定時刻以降の失敗分を、最大1,000件まとめて再送信できます。
- **一時停止**すると、再開するまでそのURLへ送信しません。
