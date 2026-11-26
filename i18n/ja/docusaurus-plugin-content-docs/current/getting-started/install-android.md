---
title: Androidにインストール
description: Android版LifeWellは同じアプリのCapacitorビルドです。Google Playから入手し、Googleでログインすると、ウェブ版と同じ記録を開けます。
keywords: [lifewell android, google play, capacitor app, install lifewell android, Android]
tags: [getting-started, android]
sidebar_position: 2
---

# Androidにインストール

Android版はウェブ版と同じアプリをCapacitorで包んだものです。同じアカウントでログインし、同じ記録を開きます。スマートフォンで書いた内容をパソコンでも読めます。その逆も同じです。

## 入手方法

[Google PlayのLifeWell](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell)

| | |
|---|---|
| アプリID | `com.aoneahsan.lifewell` |
| 最低Androidバージョン | **Android 9（API 28）** |
| このドキュメントの対象 | **3.x系列** |

Android 9より前の端末にはインストールできません。これはビルドの設定です。Google Playは理由を説明せずにアプリを一覧から隠すため、ここに明記します。

## Android版に加わる機能

- **対応する端末通知。** 通知を許可すると、アプリを閉じている間も予定や健康に関するリマインダーがAndroidに届きます。服薬時刻の案内はLifeWell内の受信箱に届きます。[リマインダー](../features/reminders.md)をご覧ください。
- **ネイティブのログインとセッション保存。** セッションはブラウザーの保存領域ではなく、プラットフォームのキーストアに置かれます。

## 求めない権限

アプリが宣言する権限は必要な範囲に絞られ、それぞれ`/permissions`で説明しています。SMSや通話履歴の権限は求めません。連絡先は電話番号の横の「連絡先」を押したときだけ求めます（Androidの権限表を参照）。リマインダーは正確な時刻のアラーム権限を求めず、おおよその時刻に設定します。Googleが正確なアラームを目覚まし時計やカレンダー用に制限しているためです。

2.xからの変更を含む全体像は[Android](../platforms/android.md)で説明しています。

## 更新

ネイティブアプリの更新はGoogle Playから届きます。対応するインストールには、ウェブ用のファイルを含む署名済みNative Updateバンドルも届きます。新しいバージョンへの更新が必要な場合は、アプリ内で通知します。[無線での更新](../platforms/android.md#over-the-air-updates)をご覧ください。
