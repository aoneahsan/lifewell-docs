---
id: intro
title: LifeWell
description: LifeWell 把您生活中的人和时刻留在同一个地方——家人、朋友、您对他们的了解、回忆和计划，身心健康的内容围绕在旁。适用于网页和 Android，由您保管。
keywords: [lifewell, 生活记录, 家谱, 人物, 回忆, 家人和朋友, android 应用]
topics: [overview, getting-started]
slug: /intro
sidebar_position: 1
---

# LifeWell

**把您生活中的人和时刻留在同一个地方，连同围绕他们的一切。**

LifeWell 把您生活中的人和时刻留在同一个地方。从您自己开始，加入重要的人，记下您对他们的了解和您与他们共度的时刻。LifeWell 保存的其他内容，都是为了让生活过得更好。

LifeWell 不是健康追踪工具。健康只是围绕生活中那些人的一个领域，不是产品的中心。

## 七个领域，围绕着您

| 领域 | 保存的内容 |
|---|---|
| [人物](./domains/people.md) | 家人与工作关系、家谱、您联系的人、群组和聊天 |
| [回忆](./domains/memories.md) | 照片、相册、剪贴簿，以及让回忆更容易理解的说明 |
| [日常](./domains/everyday.md) | 日历、笔记、收藏地点、提醒和购物清单 |
| [分享](./domains/sharing.md) | 您允许别人查看的内容——链接、伴侣分享和收到的回复 |
| [健康](./domains/health.md) | 生命体征、用药、饮食、运动、睡眠、健康状况和化验结果 |
| [心灵](./domains/mind.md) | 日记、引导练习、心情、感恩记录和呼吸练习 |
| [人生阶段](./domains/stages.md) | 生理周期、生育、孕期、更年期和孩子的早年成长 |

**您自己**不属于这七个领域。您的账号包含个人资料、方案、设置，以及管理上述一切的控制项。

七个领域中有六个可以[关闭](./domains/overview.md#switching-an-area-off)。关闭意味着安静下来：菜单不再显示该领域；您记下的内容会保留；如果直接打开页面，页面仍可访问。分享没有关闭开关，因为您允许他人查看了什么，必须始终对您可见。

## 可在哪些平台使用

| 平台 | 说明 |
|---|---|
| 网页 | 在 [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) 使用任意当前版本的浏览器 |
| Android | 同一应用的 Capacitor 构建版本——参阅 [Android](./platforms/android.md) |
| iOS | 已于 [2026年7月16日移除](./platforms/ios.md)。项目没有对应的 Apple Developer 账号 |
| 浏览器扩展程序 | [Chrome 和 Firefox 版已建成](./platforms/browser-extension.md)，尚未在应用商店上架 |

## 关于您的记录

- **少量快捷记录可以暂存在您的设备上。** 如果启用离线记录，受支持的测量值、经期变化和症状发作会在网络恢复后发送。其他页面在离线时会暂停。
- **照片和文件保存在您自己的 Google Drive 中**，授予的权限只能访问 LifeWell 创建的文件。参阅[记录保存在哪里](./your-data/where-it-lives.md)。
- **您可以导出所选日期范围的副本**——在应用内导出 JSON 或 CSV 记录数据，或 PDF 摘要。每张表每次最多导出 5,000 行。[导出文件格式](./reference/export-format.md)逐字段说明。
- **您可以删除在线账号，也可以只删除一个领域的内容**；应用会说明删除了哪些记录。加密的手动备份可能保留较早的副本，直到备份轮换结束；详情见隐私页面。

## 版本

本文档介绍 **LifeWell 3.x**：它由已发布的 2.x 版本重建，并改用新的后端。

:::warning[从 2.x 升级到 3.0.0 时，旧记录曾被重置]
后端已更换，且没有迁移路径。直接从 2.x 升级到 3.0.0 时，旧记录没有随之迁移。这项决定是在应用还没有真实用户时作出的，仍在这里说明，因为对打开应用的人来说，有意重置与严重故障可能看起来一样。
:::

## 接下来可以看什么

- 安装：[网页版](./getting-started/install-web.md) · [Android 版](./getting-started/install-android.md)
- 然后阅读：[首次使用](./getting-started/first-run.md)、[简短介绍](./getting-started/tour.md)，以及[页面导览和操作演示](./getting-started/tours-and-walkthrough.md)
- 如果您要了解自己的记录：[导出](./your-data/export.md) · [删除](./your-data/delete.md) · [导出文件格式](./reference/export-format.md)
- 如果您要将 LifeWell 连接到日历应用、脚本或 AI 助手：参阅[开发者文档](./developers/index.md)
