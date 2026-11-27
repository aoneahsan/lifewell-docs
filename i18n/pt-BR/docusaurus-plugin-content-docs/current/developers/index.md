---
title: Conecte o LifeWell a outros aplicativos
description: Quatro caminhos para acessar seus dados fora do LifeWell — calendário, API com token, assistente de IA por MCP e webhooks.
keywords: [conectar LifeWell a outros aplicativos, API LifeWell, MCP LifeWell, webhooks LifeWell, calendário LifeWell]
topics: [developers, api]
sidebar_position: 1
last_update:
  date: 2026-11-19
  author: Equipe LifeWell
---

# Conecte o LifeWell a outros aplicativos

Há quatro caminhos para acessar seus dados fora do LifeWell: um **aplicativo de calendário** por um feed, um **programa** com um token de acesso, um **assistente de IA** por MCP e **outro aplicativo** por webhooks. Você abre cada caminho em **Configurações → Outros aplicativos** e pode fechá-lo na mesma página.

## Para que serve?

Principalmente para uma vontade simples: ver o que está no LifeWell sem precisar abri-lo. Sua árvore genealógica em outro aplicativo que você já usa. Seus compromissos no calendário do celular, ao lado das reuniões de trabalho, em vez de um segundo calendário que você precisa se lembrar de consultar.

## Qual caminho escolher?

| Você quer | Use | Pode fazer | Comece por aqui |
|---|---|---|---|
| Ver o calendário LifeWell no Google Calendar, Apple Calendar ou Outlook | Um feed de calendário | Ler seu calendário, nada mais | [Feeds de calendário](./calendar-feeds.md) |
| Ler ou alterar seus registros pelo seu próprio código | Um token de acesso e a API | O que os escopos do token permitirem | [Autenticação](./authentication.md), depois [a API](./api.md) |
| Perguntar ao Claude, ChatGPT, Claude Code ou Cursor sobre seus registros | O servidor MCP | O que você autorizou na página de consentimento | [Assistentes de IA (MCP)](./mcp.md) |
| Avisar outro aplicativo quando algo mudar | Webhooks | Receber eventos, sem acesso para ler outros dados | [Webhooks](./webhooks.md) |

## O que vale para todos os caminhos?

- **Nada se abre sem você.** Uma conta nova não tem token, feed, conexão nem webhook.
- **Excluir exige uma permissão própria.** Você pode conceder leitura e escrita; a exclusão fica desligada até que você a marque. Um assistente de IA não pode excluir nada sem sua confirmação no LifeWell.
- **Você vê todos os acessos.** Configurações → Outros aplicativos lista tokens, aplicativos conectados, webhooks e feeds, com a data do último uso.
- **Seus dados continuam sendo seus.** Cada solicitação segue as mesmas regras que controlam o que você vê no aplicativo. Nenhum caminho alcança o registro de outra pessoa.

A autenticação em duas etapas protege esses acessos: quando ativada, mostrar um token novamente ou autorizar uma nova conexão pede um código. Veja [Autenticação em duas etapas](./two-step-sign-in.md).

## O que mudou?

As mudanças na API, no servidor MCP, nos webhooks e nos feeds aparecem no [histórico para desenvolvedores](./changelog.md).
