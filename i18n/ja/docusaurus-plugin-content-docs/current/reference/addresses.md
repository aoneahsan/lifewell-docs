---
title: 変わらないURL
description: 固定されたLifeWellの公開URL99件とリダイレクト15件。再構築で変わるのはコードであり、URLではありません。
keywords: [LifeWell URL, 永続リンク, リダイレクト, サイトマップ, 固定URL]
topics: [reference, seo]
sidebar_position: 2
---

# 変わらないURL

再構築時に、[lifewell.aoneahsan.com](https://lifewell.aoneahsan.com)の公開URL96件を固定しました。どれも3.0.0で利用でき、変更されていません。その後、`/features/professionals`、`/changelog`、`/how-lifewell-works`の3件を追加し、同じく固定しました。合計99件です。

これらはすでに公開され、検索エンジンに登録されていたり、インストール済みアプリで使われていたり、管理できない場所からリンクされていたりします。**再構築で変えるのはコードであり、公開済みのURLではありません。**

## 当初の96件の内訳

| 種類 | 件数 | 例 |
|---|---|---|
| 主な公開ページ | 9 | `/` · `/features` · `/about` · `/contact` · `/get-involved` · `/support` · `/sitemap` · `/blog` · `/feed` |
| ブログ記事 | 47 | `/blog/<slug>` |
| 機能ページ | 28 | `/features/<slug>` |
| ツール | 5 | `/tools`と残した4つの計算ツール |
| 独立したページ | 3 | `/baby-names` · `/blood-donors` · `/health-tools` |
| 法的・規約関連 | 4 | `/privacy` · `/terms` · `/delete-account` · `/permissions` |

専門家ディレクトリー自体はサインイン後の`/professionals`にあり、検索対象ではありません。公開機能ページの`/features/professionals`は公開済みで、上記99件に含まれます。[専門家](../features/professionals.md)をご覧ください。

:::note[`/feed`はブログのフィードで、交流機能のフィードではありません]
以前の文書では`/feed`を交流機能のフィードと説明していましたが、誤りです。過去にもそうだったことはありません。`/feed`は**最近のブログ記事を読める公開フィード**で、`/feed.xml`を人が読める形にしたものです。サインイン後の`/community`にはグループ投稿用の別のフィードがあり、`/feed`は使いません。
:::

法的・規約関連の4つのURLは、Google Playの掲載情報とデータセーフティフォームで参照されています。`/privacy`や`/delete-account`が404を返すと、単なるリンク切れではなくポリシー違反となるため、必ず維持する一覧に含めています。

## 機能ページはその機能を説明し続けます

再構築では重複した画面をいくつか統合しました。その場合でも公開機能ページは引き続き開け、何ができるかを説明し、旧画面ではなく新しい場所を案内します。

## リダイレクト \{#redirects}

永続リダイレクトは15件です。

### 外部のZToolsへ

| 元URL | 転送先 |
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

### 代わりの画面へ

| 元URL | 転送先 |
|---|---|
| `/data-deletion` | `/delete-account` |
| `/tools/calorie-counter` | `/health/calories` |
| `/tools/fasting-tracker` | `/health/fasting` |
| `/tools/sleep-tracker` | `/health/sleep` |
| `/tools/step-counter` | `/health/steps` |

転送先の画面が移動すれば、転送先URLは変わる場合があります。元URLのリダイレクト自体は削除しません。

## ルートにあるファイル

ルートには`sitemap.xml`、`feed.xml`、`robots.txt`、`llms.txt`、`ai.txt`、`pricing.txt`、`humans.txt`があります。

サイトマップとフィードは、手作業ではなくビルド時にルート一覧から生成します。そのため、実際に提供するページとのずれを防げます。2.xでは両方を手作業で管理しており、ずれが生じていました。

`robots.txt`はGPTBot、ChatGPT-User、ClaudeBot、anthropic-ai、PerplexityBot、Google-Extended、CCBot、Applebot、Bingbotを名前で許可しています。各クローラーはワイルドカードではなく自分のグループの規則を読むため、非公開ルートの規則も各グループに記載しています。

## URLとエリア名が一致しない理由

`/health/mood-journal`は「心」、`/health/menopause`は「ライフステージ」のエリアにあります。URLの接頭辞はエリアと一致していませんが、既存URLを守るため残しています。[7つのエリア](../domains/overview.md#why-the-addresses-do-not-match-the-areas)をご覧ください。

## 一覧に含めないURL

`/search`は意図的にサイトマップから除外し、`noindex`を指定しています。サインインした本人の記録を検索する画面で、クローラーに見せる内容はありません。検索画面を検索結果に登録すると、不必要なアクセスを誘うことにもなります。
