---
title: LifeWell API
description: LifeWell REST APIのベースURL、既定20件・最大50件のカーソル式ページ分割、全ルートとフィールドを記述するOpenAPIファイル。
keywords: [LifeWell API, LifeWell REST API, OpenAPI, APIページ分割, next_cursor]
topics: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# LifeWell API

LifeWell APIは、1つのベースURLで提供されるREST APIです。ルート、フィールド、エラーはすべて機械可読のOpenAPIファイルに記述されています。詳しい仕様はこのページではなく、そのファイルをご確認ください。ここではファイルの場所と読み方、一覧に共通する2つの規則を説明します。

## ベースURLは？

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

末尾の`v1`はAPIのバージョンです。すべてのリクエストにトークンかアプリ接続が必要です。[認証](./authentication.md)をご覧ください。

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

## 完全な仕様はどこにありますか？ \{#where-is-the-full-reference}

| ファイル | URL | 開き方 |
|---|---|---|
| OpenAPI 3.1、JSON | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | Swagger UI、Redocly、Postman、Insomnia、クライアント生成ツールなど |
| 同じ内容のMarkdown | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | ブラウザー、テキストエディター、貼り付け先のAIアシスタント |

どちらもAPI本体と同じソースから作られるため、存在しないルートが記載されたり、存在するルートが抜けたりしません。このサイトでは今後、同じファイルからリソースごとのページを生成します。それまでは、このファイルが詳細仕様です。

## OpenAPIファイルはどう読めばよいですか？

主に次の4か所を確認してください。

- **`paths`**：各ルート、メソッド、必要な権限範囲。
- **`components.schemas`**：レスポンスに含まれ得る各フィールドと型。ここにないフィールドは送信されません。
- **`components.securitySchemes`**：BearerアクセストークンとOAuthの2つの認証方法。
- **エラーレスポンス**：ルートごとに[エラー形式](./authentication.md#what-does-an-error-look-like)の`code`として返され得る値。

APIでアクセスできる記録の部分と各フィールドは、ファイルに記載されたものに限られます。記載されていないものにはアクセスできません。

## ページ分割はどう動きますか？

すべての一覧はページに分かれます。

- 既定では**1ページ20件**、最大**50件**です。
- 次のページがある場合、`next_cursor`が返ります。その値を送って次のページを取得します。
- `next_cursor`がなければ最後のページです。

カーソルはページ番号ではなく、続きの位置を示すしおりです。読み取り中に行が追加されても、後続の行が1つずつずれることはありません。ページサイズとカーソルのパラメーター名は、OpenAPIファイルの各一覧ルートに記載されています。

## 利用制限とエラーは？

どのルートでも共通です。[認証](./authentication.md#what-are-the-rate-limits)のページをご覧ください。
