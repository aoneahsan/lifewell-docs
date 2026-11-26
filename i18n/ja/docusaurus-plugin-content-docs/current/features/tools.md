---
title: ツールと計算機
description: LifeWell内にある計算機、ZToolsにある計算機、ツール一覧が主にリンクで構成される理由を説明します。
keywords: [lifewell tools, health calculators, bmi calculator, interval timer, child growth, 計算ツール]
tags: [features, tools]
sidebar_position: 11
---

# ツールと計算機

[ツール一覧](https://lifewell.aoneahsan.com/tools)にある多くの計算機は、別サイトの[ZTools](https://ztools.zaions.com)で動きます。カードからそのページへ進めます。

意図してそうしています。すでに保守されている計算機を、ここで重ねて作りません。

## LifeWell内で動くもの

ZToolsにはない次の4つの計算機が残っています。

| ツール | アドレス |
|---|---|
| ウエストとヒップの比率 | `/tools/waist-hip-ratio` |
| 子どもの成長 | `/tools/child-growth` |
| 体重の増加 | `/tools/wellness-weight-gain` |
| インターバルタイマー | `/tools/interval-timer` |

さらに、計算機ではなく検索用の[赤ちゃんの名前](https://lifewell.aoneahsan.com/baby-names)があります。

この5つはすべて公開されており、アカウントは不要です。あなたについての情報も保存しません。

## 外へ移ったもの

BMI、TDEE、BMR、マクロ栄養素、たんぱく質、体脂肪、理想体重、心拍数の範囲、年齢、運動タイマーは、それぞれのZToolsページへ転送されます。以前のLifeWellのアドレスも残り、404ではなく恒久的に転送します。既にそのアドレスへリンクしている人がいるためです。

一部は外ではなく、代わりのアプリ内画面へ転送されます。
`/tools/calorie-counter` → `/health/calories`、`/tools/fasting-tracker` → `/health/fasting`、
`/tools/sleep-tracker` → `/health/sleep`、`/tools/step-counter` → `/health/steps`です。

全一覧は[変えないアドレス](../reference/addresses.md#redirects)をご覧ください。

## `/health-tools`

[健康関連ツール](https://lifewell.aoneahsan.com/health-tools)は、健康に関する計算機の一覧です。

:::note[人気度の数字は削除しました]
2.x版は、各ツールの横に*3.2M*のような出典のない検索数を表示し、その数字で並べていました。数字は作られたものでした。3.0.0には含めず、実際に確認できる基準で並べています。
:::

## アプリ内のタイマー

`/health/workout-timer`と[心の領域](../domains/mind.md#guided-sessions)のガイド付きセッションは、ツール一覧ではなくアプリの一部です。これらは記録に書き込み、一覧にあるツールは書き込まないためです。
