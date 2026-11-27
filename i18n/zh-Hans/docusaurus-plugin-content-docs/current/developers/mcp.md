---
title: 连接 AI 助手（MCP）
description: 通过 LifeWell MCP 服务器，让 Claude、ChatGPT、Claude Code 或 Cursor 访问您的记录。了解授权页面会问什么、如何确认删除，以及怎样断开连接。
keywords: [lifewell mcp 服务器, 连接 claude 与 lifewell, chatgpt 连接器, claude code mcp, cursor mcp]
topics: [developers, mcp, ai]
sidebar_position: 4
last_update:
  date: 2026-11-19
  author: LifeWell 团队
---

# 连接 AI 助手（MCP）

LifeWell MCP 服务器让 AI 助手按您的要求读取和修改记录，例如“我家里谁这个月过生日？”或“把周四九点半的牙医预约加进去”。您向助手提供一个地址，登录 LifeWell，并在授权页面决定它能做什么。Claude、ChatGPT、Claude Code、Cursor 和其他支持 MCP 的助手都可以连接。

## 地址是什么？

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

同一地址也显示在**设置 → 其他应用 → 连接 AI 助手**中，并附有复制按钮。您无须把令牌粘贴给助手；助手会从这个地址找到 LifeWell 的登录入口，并将您带过去。

## 如何连接不同的助手？

这些应用的菜单可能随版本变化。如果以下步骤与您看到的不符，请在应用设置中查找**连接器**。

### Claude

1. 在 Claude 中打开**设置 → 连接器**，添加自定义连接器。
2. 粘贴上面的地址。
3. 按提示登录 LifeWell，并在授权页面批准。

### ChatGPT

1. 在 ChatGPT 中打开**设置 → 连接器**。部分账号可能需要先开启开发者模式。
2. 使用上面的地址添加连接器。
3. 按提示登录 LifeWell，并在授权页面批准。

### Claude Code

```bash
claude mcp add --transport http lifewell https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

然后在 Claude Code 中运行 `/mcp`，选择 **lifewell**，并在打开的浏览器中登录。

### Cursor

在 `mcp.json` 中添加 LifeWell：

```json
{
  "mcpServers": {
    "lifewell": {
      "url": "https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp"
    }
  }
}
```

Cursor 首次使用时会请您登录。

## 授权页面会问什么？ \{#what-does-the-consent-page-ask}

在任何助手访问您的记录之前，LifeWell 会在 `https://lifewell.aoneahsan.com/oauth/consent` 显示：

- **哪个应用提出请求**，以及完成后会返回的地址；
- **将访问哪个 LifeWell 账号**——如果您有多个账号，值得确认；
- **它可以做什么**，以完整句子说明，并按读取、写入和删除分组，各自带有勾选框。删除默认不勾选；
- 并排显示的**批准**和**拒绝**按钮。

如果开启了[两步登录](./two-step-sign-in.md)，批准时还要输入验证码。每个新连接都必须经过此页面，不会替您自动批准。

助手只能看到您授权使用的工具。如果只授予读取权限，它就没有修改内容的途径。

## 删除如何处理？

助手可以**准备**删除，只有您能**执行**删除。您要求它移除内容时，它会显示将要删除什么，并给您一个打开 LifeWell 的链接。您必须在十分钟内，在 LifeWell 中亲自确认，否则不会删除任何内容。网页或粘贴文档里隐藏的一句话，无法诱导助手删除您的记录，因为助手不能自行确认请求。

只有在授权页面勾选了删除权限，这个流程才可使用。没有授予删除权限时，助手连准备删除都做不到。

## 如何断开助手连接？

打开**设置 → 其他应用 → 已连接应用**，在对应行选择**撤销**。它下一次发起请求时，访问权限即告终止。清单会显示每款应用的权限、连接时间和最近使用时间；您批准新连接后，它会立即出现在清单中。新应用连接时，LifeWell 也会给您发邮件。

## 为什么无法使用？

| 您看到的情况 | 处理方式 |
|---|---|
| 助手要求再次登录 | 登录状态已过期。请从助手中重新登录 LifeWell |
| 提示缺少权限 | 这项权限未获授予。断开连接后重新连接，并在授权页面勾选 |
| LifeWell 从工具列表中消失，或每次调用都失败 | 连接可能已被撤销。查看**已连接应用**，需要时重新连接 |
| 删除没有发生 | 未在十分钟内于 LifeWell 确认。请重新提出请求 |
| 想知道助手最近做了什么 | **已连接应用**会显示每款应用最近一次使用时间 |
