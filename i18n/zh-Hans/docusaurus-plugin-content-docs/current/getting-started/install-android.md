---
title: 在 Android 上安装
description: Android 版 LifeWell 是同一应用的 Capacitor 构建版本。从 Google Play 获取，使用 Google 登录，就能访问与网页版相同的记录。
keywords: [lifewell android, google play, capacitor 应用, 安装 lifewell android]
topics: [getting-started, android]
sidebar_position: 2
---

# 在 Android 上安装

Android 版是用 Capacitor 包装的同一款网页应用。它使用同一账号，读取同一份记录；您在手机上写下的内容会出现在电脑上，反过来也一样。

## 获取应用

[Google Play 上的 LifeWell](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell)

| 项目 | 内容 |
|---|---|
| 应用标识 | `com.aoneahsan.lifewell` |
| 最低 Android 版本 | **Android 9（API 28）** |
| 本文档涵盖的版本系列 | **3.x** |

低于 Android 9 的设备无法安装。这是构建设置，不是单独制定的政策。这里说明原因，是因为 Play 通常只会隐藏应用页面，不会解释为什么找不到。

## Android 版本增加了什么

- **受支持的设备提醒。** 在允许设备通知后，活动和日常状态提醒可由 Android 送达，包括应用关闭时。到期服药提示留在 LifeWell 收件箱。参阅[提醒](../features/reminders.md)。
- **原生登录和会话存储。** 会话保存在平台密钥库中，而不是浏览器存储中。

## 它不会请求什么

应用声明的权限范围经过控制，每项用途都在应用的 `/permissions` 页面说明。它不请求短信或通话记录权限；只有您在电话号码旁按下“联系人”时，才会请求联系人权限（参阅 Android 权限表）；提醒系统也不会请求精确闹钟权限。Google 将该权限留给闹钟和日历应用，所以 LifeWell 有意以非精确方式安排提醒。

包括与 2.x 版本差异在内的完整说明，见 [Android](../platforms/android.md)。

## 更新

原生应用更新由 Google Play 提供。兼容的安装版本也可以接收经过签名的 Native Update 网页资源更新。应用内的版本通知会说明何时必须更新。参阅[无线更新](../platforms/android.md#over-the-air-updates)。
