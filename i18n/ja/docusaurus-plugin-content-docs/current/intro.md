---
id: intro
title: LifeWell
description: LifeWellは、家族や友人、その人たちについて知っていること、思い出や予定を1か所に残します。その周りに健康に関することも置ける、ウェブとAndroidのアプリです。
keywords: [lifewell, life companion, family tree, people, memories, family and friends, android app, 家系図, 大切な人, 思い出]
topics: [overview, getting-started]
slug: /intro
sidebar_position: 1
---

# LifeWell

**人生の大切な人と出来事を、その周りのことも含めて1か所に。**

LifeWellでは、まず自分のページを作り、大切な人を加えます。その人について知っていることや一緒に過ごした出来事を残せます。ほかの機能は、その記録の周りにあります。

LifeWellは健康管理だけを目的としたアプリではありません。健康は、大切な人を中心とする7つの領域の1つです。

## あなたを囲む7つの領域

| 領域 | ここにあるもの |
|---|---|
| [人](./domains/people.md) | 家族と仕事上のつながり、家系図、連絡する人、グループとチャット |
| [思い出](./domains/memories.md) | 写真、アルバム、スクラップブック、あとで読み返せる説明文 |
| [日々のこと](./domains/everyday.md) | カレンダー、メモ、保存した場所、リマインダー、買い物リスト |
| [共有](./domains/sharing.md) | ほかの人に読むことを許した情報、リンク、パートナーとの共有、届いた返信 |
| [健康](./domains/health.md) | バイタル、薬、食事、運動、睡眠、症状、検査結果 |
| [心](./domains/mind.md) | 日記、ガイド付きセッション、気分、感謝の記録、呼吸 |
| [人生の段階](./domains/stages.md) | 月経周期、妊娠しやすさ、妊娠、更年期、子どもの幼い時期 |

**あなた自身**は7つの領域に数えません。アカウント、プロフィール、プラン、設定と、すべての記録を管理する権限の中心です。

7つのうち6つは[オフにできます](./domains/overview.md#switching-an-area-off)。オフにするとメニューに表示されなくなりますが、記録は残り、ページのアドレスを直接開くこともできます。共有にはオフの設定がありません。ほかの人に見せることを許した内容は、あなたがいつでも確認できる必要があるためです。

## 利用できる環境

| | |
|---|---|
| ウェブ | [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com)を現在のブラウザーで開けます。 |
| Android | 同じアプリのCapacitorビルドです。詳しくは[Android](./platforms/android.md)をご覧ください。 |
| iOS | [2026年7月16日に提供を終了しました](./platforms/ios.md)。Apple Developerアカウントもありません。 |
| ブラウザー拡張機能 | [ChromeとFirefox向けに完成しています](./platforms/browser-extension.md)が、どちらのストアでもまだ公開されていません。 |

## 記録について知っておきたいこと

- **一部の簡単な入力は端末内で待機できます。** オフライン記録を有効にすると、対応する測定値、周期の日付変更、症状の記録は、通信が戻ってから送信されます。ほかのページは通信がない間、操作を待ちます。
- **写真とファイルは自分のGoogle Driveに保存されます。** LifeWellが作成したファイルにだけ届く権限を使います。[記録の保存先](./your-data/where-it-lives.md)をご覧ください。
- **選んだ期間の記録をエクスポートできます。** アプリ内でJSONまたはCSVの記録データ、あるいはPDFの概要を作れます。各テーブルの上限は1回につき5,000行です。形式は[項目ごとに説明](./reference/export-format.md)しています。
- **アカウント全体または1つの領域の現在の記録を削除できます。** アプリは削除した行を示します。暗号化された手動バックアップには、入れ替え時まで以前のコピーが残る場合があります。詳しくはプライバシーのページをご覧ください。

## バージョン

このドキュメントは、公開済みの2.xから新しいバックエンドで再構築された**LifeWell 3.x**を対象とします。

:::warning[2.xから3.0.0への更新で記録は初期化されました]
バックエンドは移行経路なしで置き換えられました。2.xから3.0.0へ直接更新しても、古い記録は引き継がれません。この判断は実際の利用者がいない時点で行われましたが、意図した初期化と重大な障害は、アプリを開いた人には同じように見えるため、ここに記録しています。
:::

## 次に読むページ

- インストール：[ウェブ](./getting-started/install-web.md) · [Android](./getting-started/install-android.md)
- 最初の操作：[初回の利用](./getting-started/first-run.md) · [短いツアー](./getting-started/tour.md) · [ページツアーと操作ガイド](./getting-started/tours-and-walkthrough.md)
- 記録について：[エクスポート](./your-data/export.md) · [削除](./your-data/delete.md) · [エクスポートファイルの形式](./reference/export-format.md)
- カレンダーアプリ、スクリプト、AIアシスタントとの接続：[開発者向け](./developers/index.md)
