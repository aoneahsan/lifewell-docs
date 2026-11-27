---
title: 日历订阅源
description: 使用只读订阅地址，在 Google Calendar、Apple Calendar 或 Outlook 中查看 LifeWell 日历，并可随时撤销。
keywords: [lifewell 日历订阅源, 订阅 lifewell 日历, ics 订阅源, google calendar 订阅]
topics: [developers, calendar]
sidebar_position: 6
last_update:
  date: 2026-11-19
  author: LifeWell 团队
---

# 日历订阅源

日历订阅源把 LifeWell 日历放进您已经使用的日历应用。前往**设置 → 其他应用 → 日历订阅源**创建订阅源，复制地址，再在 Google Calendar、Apple Calendar、Outlook 或任何支持 `.ics` 订阅的应用中添加。订阅源只读：日历应用能显示 LifeWell 事件，不能修改它们。

## 如何订阅？

1. 在 LifeWell 打开**设置 → 其他应用 → 日历订阅源**，选择**新建订阅源**。
2. 复制页面给出的地址。
3. 在日历应用中选择**通过网址添加日历**（Google Calendar 称为 *通过网址添加*，Apple Calendar 称为 *新建日历订阅*），粘贴地址。

由日历应用决定多久检查一次订阅源，不由 LifeWell 决定。有些应用每几分钟检查一次，Google Calendar 则可能需要数小时。因此，您在 LifeWell 中作出的更改，可能稍后才出现在外部日历。

## 订阅源包含什么？

它最多包含 2,000 条 [LifeWell 日历](../features/calendar-and-appointments.md)事件，时间范围从过去 90 天到未来约 13 个月。订阅源不能访问您记录中的其他内容，也不会包含私人备注。

时间按 LifeWell 中显示的当地钟点保留：*上午 09:30 看牙医*，即使您更换时区，仍显示为 09:30，不会随时区移动。

## 地址是秘密吗？

是。日历应用不能随订阅请求发送令牌，因此订阅凭据是地址的一部分——任何拿到地址的人都能读取该日历。订阅源因此尽可能减少暴露范围：

- **只能读取一份日历**，不能访问记录中的其他内容；
- 它不是访问令牌，不能用于 [API](./api.md)；
- 与访问令牌一样，只能按[十分钟规则](./authentication.md#can-i-see-a-token-again)再次查看。

如果地址被分享到不该出现的地方，请撤销它并重新创建。

## 如何停止订阅源？

在对应订阅源那一行选择**撤销**。此后，该地址会返回 `404`；日历应用下次检查时会移除对应事件。建议为每个订阅应用分别创建一份订阅源，撤销其中一份时，其他应用仍可正常使用。
