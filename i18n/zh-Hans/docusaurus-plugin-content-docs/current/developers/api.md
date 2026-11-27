---
title: LifeWell API
description: LifeWell REST API 的基础地址、默认每页 20 条且最多 50 条的游标分页，以及描述所有路由和字段的 OpenAPI 文件。
keywords: [lifewell api, lifewell rest api, openapi, api 分页, next_cursor]
topics: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: LifeWell 团队
---

# LifeWell API

LifeWell API 是位于一个基础地址下的 REST API。每条路由、每个字段和错误，都记载在机器可读的 OpenAPI 文件中。**该文件才是完整参考资料**；本页说明它在哪里、如何阅读，以及所有列表遵循的两条规则。

## 基础地址是什么？

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

末尾的 `v1` 是 API 版本。每次请求都需要令牌或应用连接——参阅[身份验证](./authentication.md)。

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

## 完整参考资料在哪里？ \{#where-is-the-full-reference}

| 文件 | 地址 | 可使用的工具 |
|---|---|---|
| OpenAPI 3.1，JSON 格式 | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | 任意 OpenAPI 工具：Swagger UI、Redocly、Postman、Insomnia，或客户端代码生成器 |
| 同一份内容的 Markdown 格式 | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | 浏览器、文本编辑器，或您粘贴内容的 AI 助手 |

两份文件都与 API 本身来自同一份源码，因此不会描述不存在的路由，也不会漏掉现有路由。本站以后会从同一文件生成每类资源的页面；在此之前，详细定义以文件为准。

## 如何阅读 OpenAPI 文件？

以下四部分能回答大多数问题：

- **`paths`**——每条路由、请求方法及所需权限范围。
- **`components.schemas`**——响应中可能出现的每个字段及其类型。未列出的字段不会发送。
- **`components.securitySchemes`**——两种认证方式：Bearer 访问令牌和 OAuth。
- **错误响应**——按路由列出[错误响应结构](./authentication.md#what-does-an-error-look-like)中可能出现的每个 `code`。

API 能访问您记录中的哪些部分，以及每部分的哪些字段，都以文件所列为准。没有列出的内容，按设计无法访问。

## 分页如何工作？

每个列表都会分成多页：

- 默认**每页 20 条**，最多**每页 50 条**。
- 如果后面还有内容，响应会带有 `next_cursor`。将它传回，即可获取下一页。
- 没有 `next_cursor`，表示已到最后一页。

游标像书签，不是页码。所以您阅读期间新添一条记录，不会把后面的全部内容都挪动一位。每条列表路由的 OpenAPI 定义中，写明了页大小和游标的参数名。

## 速率限制和错误呢？

所有路由都遵循相同规则。两者都在[身份验证](./authentication.md#what-are-the-rate-limits)页面说明。
