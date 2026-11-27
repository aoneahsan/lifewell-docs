---
title: 不会改变的地址
description: LifeWell 已固定的 99 个公开地址和 15 条重定向。重建会更换代码，不会更换地址。
keywords: [lifewell 网址, 永久链接, 重定向, 站点地图, 固定网址]
topics: [reference, seo]
sidebar_position: 2
---

# 不会改变的地址

重建时，[lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) 上有 96 个公开地址被固定下来。它们在 3.0.0 中全部可用，一个也没有更改。之后又加入三个，并以同样方式固定：`/features/professionals`、`/changelog` 和 `/how-lifewell-works`，合计 99 个。

地址之所以固定，是因为它们已经公开：被搜索引擎收录、交给已安装的应用使用，或被我们无法控制的地方引用。**重建可以更换代码，不能破坏这些约定。**

## 最初的 96 个地址

| 类别 | 数量 | 示例 |
|---|---|---|
| 核心公开页面 | 9 | `/` · `/features` · `/about` · `/contact` · `/get-involved` · `/support` · `/sitemap` · `/blog` · `/feed` |
| 博客文章 | 47 | `/blog/<slug>` |
| 功能介绍页 | 28 | `/features/<slug>` |
| 工具 | 5 | `/tools` 及保留的四个计算器 |
| 独立页面 | 3 | `/baby-names` · `/blood-donors` · `/health-tools` |
| 法律与合规页面 | 4 | `/privacy` · `/terms` · `/delete-account` · `/permissions` |

专业人员目录本身是登录后才能访问的 `/professionals` 页面，不会被搜索引擎收录。公开的功能介绍页 `/features/professionals` 已发布，包含在上述 99 个地址中。参阅[专业人员](../features/professionals.md)。

:::note[`/feed` 是博客订阅页，不是社交动态]
旧文档曾把 `/feed` 描述为社交动态。它不是，也从来不是。它是**公开可读的近期博客内容订阅页**，与 `/feed.xml` 配套。登录后的 `/community` 有自己的群组帖子动态，不使用 `/feed`。
:::

Google Play 商店页面和 Data Safety 表单引用了四个法律地址。如果 `/privacy` 或 `/delete-account` 返回 404，那是政策问题，不只是一个坏链接，因此它们属于必须保留的地址。

## 功能介绍页继续介绍功能

重建时合并了一些重复的页面。即便如此，对应的功能介绍页仍可打开、仍说明您能做什么，并指向新位置，而不是旧页面。

## 重定向 \{#redirects}

共 15 条，全部为永久重定向。

### 跳转到 ZTools

| 原地址 | 目标地址 |
|---|---|
| `/tools/bmi-calculator` | `ztools.zaions.com/bmi-calculator` |
| `/tools/tdee-calculator` | `ztools.zaions.com/tdee-calculator-advanced` |
| `/tools/bmr-calculator` | `ztools.zaions.com/bmr-calculator` |
| `/tools/macro-calculator` | `ztools.zaions.com/macronutrient-calculator` |
| `/tools/protein-calculator` | `ztools.zaions.com/protein-intake-calculator` |
| `/tools/body-fat-calculator` | `ztools.zaions.com/body-fat-calculator` |
| `/tools/ideal-weight-calculator` | `ztools.zaions.com/ideal-weight-calculator` |
| `/tools/heart-rate-zones` | `ztools.zaions.com/heart-rate-zone-calculator` |
| `/tools/age-calculator` | `ztools.zaions.com/age-calculator` |
| `/tools/workout-timer` | `ztools.zaions.com/workout-timer` |

### 跳转到取代旧页面的新页面

| 原地址 | 目标地址 |
|---|---|
| `/data-deletion` | `/delete-account` |
| `/tools/calorie-counter` | `/health/calories` |
| `/tools/fasting-tracker` | `/health/fasting` |
| `/tools/sleep-tracker` | `/health/sleep` |
| `/tools/step-counter` | `/health/steps` |

页面位置改变时，重定向的目标可以随之调整；重定向本身不会删除。

## 网站根目录中的文件

根目录提供这些文件：`sitemap.xml` · `feed.xml` · `robots.txt` · `llms.txt` · `ai.txt` · `pricing.txt` · `humans.txt`。

站点地图和订阅源在构建时根据路由登记表生成，而不是手工维护，因此不会与实际提供的页面脱节。2.x 应用中，这两份文件都靠手工编写，后来确实出现了不一致。

`robots.txt` 明确允许 GPTBot、ChatGPT-User、ClaudeBot、anthropic-ai、PerplexityBot、Google-Extended、CCBot、Applebot 和 Bingbot 等 AI 抓取程序，并在每个命名分组内重复私人页面规则。抓取程序会遵循自己的分组，而忽略通配分组。

## 为什么地址与领域名称不一致

`/health/mood-journal` 属于心灵领域，`/health/menopause` 属于人生阶段领域。地址前缀并未反映现在的领域，这是有意保留的。参阅[七个领域](../domains/overview.md#why-the-addresses-do-not-match-the-areas)。

## 不在清单中的地址

`/search` 被刻意排除在站点地图之外，并标记为 `noindex`。这是登录后搜索个人记录的页面；抓取程序在这里没有可读取的公开内容，把它列入搜索结果反而会招来探测。
