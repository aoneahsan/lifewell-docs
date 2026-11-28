---
title: ツールと計算機
description: LifeWellの記録機能と、ZToolsの単発の計算ツールへのリンク。旧計算ツールのURLは対応するZToolsのページへ転送されます。
keywords: [lifewell tools, health calculators, bmi calculator, interval timer, child growth, 計算ツール]
topics: [features, tools]
sidebar_position: 11
---

# ツールと計算機

[ツール一覧](https://lifewell.aoneahsan.com/tools)にある多くの計算機は、別サイトの[ZTools](https://ztools.zaions.com)で動きます。カードからそのページへ進めます。

意図してそうしています。すでに保守されている計算機を、ここで重ねて作りません。

## LifeWell内で動くもの

LifeWellには、あなたが保存を選んだ健康と家族の記録が残ります。子どもの成長グラフは、保存した子どもの記録の中でWHOの参照データを使います。公開の名前一覧もここに残ります。

## 外へ移ったもの

以前のLifeWellの四つの計算ツールURLは、現在ZToolsへ恒久的に転送されます。

| ZTools | URL |
|---|---|
| [ウエストとヒップの比率](https://ztools.zaions.com/waist-hip-ratio-calculator) | `waist-hip-ratio-calculator` |
| [子どもの成長](https://ztools.zaions.com/child-growth-percentile-calculator) | `child-growth-percentile-calculator` |
| [体重の増加](https://ztools.zaions.com/pregnancy-weight-gain-calculator) | `pregnancy-weight-gain-calculator` |
| [インターバルタイマー](https://ztools.zaions.com/workout-timer) | `workout-timer` |

ほかの旧計算ツールURLもZToolsへ転送されます。四つの旧記録ツールURLはLifeWell内の保存先へ移ります：`/tools/calorie-counter` → `/health/calories`、`/tools/fasting-tracker` → `/health/fasting`、`/tools/sleep-tracker` → `/health/sleep`、`/tools/step-counter` → `/health/steps`。

全ての対応は[変わらないURL](../reference/addresses.md#redirects)をご覧ください。

## `/health-tools`

[健康関連ツール](https://lifewell.aoneahsan.com/health-tools)は、健康に関する計算機の一覧です。

:::note[人気度の数字は削除しました]
2.x版は、各ツールの横に*3.2M*のような出典のない検索数を表示し、その数字で並べていました。数字は作られたものでした。3.0.0には含めず、実際に確認できる基準で並べています。
:::

## アプリ内のタイマー

`/health/workout-timer`と[心の領域](../domains/mind.md#guided-sessions)のガイド付きセッションは、ツール一覧ではなくアプリの一部です。これらは記録に書き込み、一覧にあるツールは書き込まないためです。
