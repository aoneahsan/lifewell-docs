---
title: 将 LifeWell 连接到其他应用
description: 外部服务访问您记录的四种方式：日历订阅源、使用访问令牌的脚本、通过 MCP 连接的 AI 助手，以及使用 Webhook 的其他应用。
keywords: [连接 lifewell 到其他应用, lifewell api, lifewell mcp, lifewell webhooks, lifewell 日历订阅源]
topics: [developers, api]
sidebar_position: 1
last_update:
  date: 2026-11-19
  author: LifeWell 团队
---

# 将 LifeWell 连接到其他应用

LifeWell 之外有四种工具可以访问您的记录，各有自己的入口：**日历应用**使用订阅源，**脚本**使用访问令牌，**AI 助手**使用 MCP，**其他应用**使用 Webhook。每个入口都由您在**设置 → 其他应用**中开启，也能在同一页面关闭。

## 这些连接有什么用？

多半是为了满足一个普通愿望：不用打开 LifeWell，也能看到其中保存的内容。例如在您已经使用的应用中查看家谱，或让 LifeWell 预约显示在手机日历里，排在工作会议旁边，而不是再记得去看第二份日历。

## 应该选哪种方式？

| 您想做什么 | 使用 | 能做到什么 | 从这里开始 |
|---|---|---|---|
| 把 LifeWell 日历放进 Google Calendar、Apple Calendar 或 Outlook | 日历订阅源 | 只读取日历，不读取其他内容 | [日历订阅源](./calendar-feeds.md) |
| 用自己的代码读取或修改记录 | 访问令牌和 API | 令牌授权范围内的操作 | [身份验证](./authentication.md)，然后阅读 [API](./api.md) |
| 让 Claude、ChatGPT、Claude Code 或 Cursor 查询您的记录 | MCP 服务器 | 您在授权页面同意的操作 | [AI 助手（MCP）](./mcp.md) |
| 有内容变化时立即通知另一款应用 | Webhook | 接收事件，不能据此读取其他内容 | [Webhook](./webhooks.md) |

## 无论使用哪种方式，哪些原则不变？

- **由您开启前，连接不会存在。** 新账号没有令牌、订阅源、应用连接或 Webhook。
- **删除权限不会附带授予。** 读取和写入可以授权；删除是独立权限，除非您主动勾选，否则默认关闭。AI 助手要删除内容，还必须由您在 LifeWell 内确认。
- **所有入口都能查看。** 设置 → 其他应用列出每个令牌、已连接应用、Webhook 和订阅源，并显示上次使用时间。
- **记录仍然只属于您。** 每次请求都以您的身份执行，遵守应用内决定您能看什么的同一套规则，不会触及其他人的记录。

两步登录能保护这些入口：启用后，再次显示令牌或批准新连接时都需要验证码。参阅[两步登录](./two-step-sign-in.md)。

## 变更记录在哪里？

API、MCP 服务器、Webhook 和订阅源的每项变更都列在[开发者更新日志](./changelog.md)中。
