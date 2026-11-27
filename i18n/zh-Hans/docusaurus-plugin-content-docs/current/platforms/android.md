---
title: Android
description: Android 版 LifeWell 的最低系统版本、权限、本地提醒、签名更新，以及等待商店发布的功能。
keywords: [lifewell android, android 权限, 通讯录权限, minsdk 28, capacitor android, play store]
topics: [platforms, android]
sidebar_position: 2
---

# Android

与网页版是同一款应用，只是由 Capacitor 包装在原生外壳中。账号和记录也相同。

| | |
|---|---|
| 应用标识符 | `com.aoneahsan.lifewell`，永久不变 |
| 最低版本 | **Android 9（API 28）** |
| 当前源码版本 | **3.31.0**；您设备可用的版本以 Google Play 为准 |
| 发布渠道 | [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell) |

:::note[最低版本是 Android 9，不是 Android 7]
旧版文档曾写 Android 7.0，这不对。构建的最低 SDK 为 28，即 Android 9。低于此版本的设备无法安装应用，Google Play 只会隐藏商店页面，不会解释原因。
:::

## 权限

应用会在 [`/permissions`](https://lifewell.aoneahsan.com/permissions) 逐一说明声明的权限。

| 权限 | 原因 |
|---|---|
| 相机 | 直接拍照并加入回忆或记录。首次点“拍照”时请求；拒绝后仍可从设备挑选照片 |
| 麦克风 | 用于「说出来」录音。按下录音键时才请求；拒绝后仍可打字。LifeWell 不会在后台监听 |
| 位置（大致位置） | 在专业人员页面打开时按距离排序。点“使用我的位置”时才请求，不会保存位置 |
| 联系人（读取） | 点电话号码旁的**联系人**后，只读取您选中的那位联系人及其姓名和号码，再把您选择的号码填入字段。不会在启动时请求 |
| 联系人（修改） | 应用并不修改联系人。Android 把读取与修改合并为一项权限；LifeWell 只读取，不会新增、修改或删除联系人 |
| 通知 | 送达您设置的提醒 |
| 互联网 | 同步您的记录 |
| 网络状态 | 判断能否同步，并在无法连接时明确告知您 |
| 开机启动 | 让提醒在设备重启后继续有效 |
| 唤醒锁定 | 让已安排的提醒能够送达 |
| 广告标识符 | 已在清单中声明；说明见下文 |

`/people/location-tracking` 和 `/people/location-history` 介绍一项**默认关闭**、需要您主动开启的独立功能。Android 3.31.0 及后续版本已实现后台位置记录器；开启记录时会请求单独的位置权限。已有历史仍可查看和删除。3.31.0 的 Google Play 版本尚待所有者上传并在真机上验证，因此目前商店提供的版本不能视为已具备此功能。

拒绝联系人权限后，您可以手动输入号码；所有电话字段两种方式都可用。应用不会上传、搜索或保存您的通讯录。

应用不会请求短信、通话记录或对照片和文件的广泛访问权限。

### 主动移除的两项权限

通知库在自己的清单中声明了 `SCHEDULE_EXACT_ALARM` 和 `USE_EXACT_ALARM`。LifeWell 会在构建中**移除两者**。

Android 把精确闹钟留给闹钟和日历应用。保留这些权限意味着申请 Google 不会授予此类应用的权限；在 Android 12 及更高版本上，没有权限却安排精确闹钟，还会打开系统的“闹钟和提醒”设置，而不是设好提醒。因此，所有提醒都采用非精确安排，实际送达时间可能比设定时间早或晚几分钟。

### 广告标识符

它在应用清单中声明。**应用没有广告网络**，也没有第三方广告代码。之所以声明，是因为商店要求回答与构建可能使用的能力一致，并不表示正在向您投放广告。

## Android 版增加了什么

- **本地提醒**由 Android 自身送达，即使应用已经关闭也会出现。参阅[提醒](../features/reminders.md)。
- **原生登录**将会话保存在平台密钥库，而不是网页存储中。

## 推送与 Google Play 结算

### 推送通知

开启推送且设备订阅生效后，LifeWell 可通过 OneSignal 接收团队广播。应用不会自动推送账号事件。推送与本地提醒分开；Android 会在设备上安排本地提醒。参阅[提醒](../features/reminders.md#push-notifications)。

### Google Play Billing

购买流程、服务端验证和 Google 的续订通知已经编写并编译；Google 响应到使用权益的映射，也用记录的响应进行了测试。**尚未进行真实购买**，服务账号未配置，启用 Google Play 购买的开关默认关闭。只能在从 Google Play 测试轨道安装、经 Play 签名的构建中验证账单功能，因此在内部测试之前无法证明整个流程。参阅[方案](../plans.md#on-android)。

## 无线更新 \{#over-the-air-updates}

兼容的 Android 安装版本已集成签名的 Native Update 更新包。应用会在应用更新前验证签名，并能在冷启动后保留已应用的更新。公开签名密钥编译在原生版本中，因此没有该密钥的旧安装版本，之后也无法获得无线更新能力。原生代码和权限仍通过 Google Play 发布。应用内的发布记录也会告诉您何时必须更新到新版本。

## iOS

[已于 2026 年 7 月 16 日移除。](./ios.md)
