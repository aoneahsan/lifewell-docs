---
title: Instalar no Android
description: O LifeWell no Android é uma versão Capacitor do mesmo aplicativo. Baixe pelo Google Play, entre com o Google e acesse o mesmo registro da versão web.
keywords: [lifewell android, google play, aplicativo capacitor, instalar lifewell android]
tags: [getting-started, android]
sidebar_position: 2
---

# Instalar no Android

O aplicativo Android é a mesma aplicação da versão web, empacotada pelo Capacitor. Ele acessa o mesmo registro e usa a mesma conta; o que você escreve no celular aparece no computador, e vice-versa.

## Onde baixar

[LifeWell no Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell)

| | |
|---|---|
| Identificador do aplicativo | `com.aoneahsan.lifewell` |
| Versão mínima do Android | **Android 9 (API 28)** |
| Série de versões coberta por esta documentação | **3.x** |

Um dispositivo anterior ao Android 9 não pode instalá-lo. Esse limite vem da configuração de compilação, não de uma política. Ele está aqui porque o Google Play simplesmente oculta o aplicativo nesses dispositivos, sem explicar o motivo.

## O que o Android acrescenta

- **Lembretes compatíveis no dispositivo.** Com as notificações permitidas, o Android pode entregar lembretes de eventos e bem-estar mesmo com o aplicativo fechado. Avisos de doses de medicamentos vencidas ficam na caixa de entrada do LifeWell. Veja [Lembretes](../features/reminders.md).
- **Entrada e armazenamento de sessão nativos.** A sessão fica no armazenamento seguro da plataforma, em vez de no armazenamento do navegador.

## O que ele não pede

O aplicativo declara um conjunto pequeno de permissões, explicado dentro dele em `/permissions`. Ele não pede acesso a SMS nem ao histórico de chamadas. O acesso aos contatos só é solicitado quando você toca em Contatos ao lado de um número de telefone (veja a tabela de permissões do Android). O sistema de lembretes também não pede permissão para alarmes exatos: os horários são aproximados de propósito, já que o Google reserva essa permissão a relógios e agendas.

A página [Android](../platforms/android.md) mostra o quadro completo, inclusive o que mudou em relação à versão 2.x.

## Atualizações

O Google Play fornece atualizações do aplicativo nativo. Instalações compatíveis também podem receber pacotes assinados do Native Update para os arquivos web. O aviso de versão dentro do aplicativo informa quando uma atualização é necessária. Veja [Atualizações remotas](../platforms/android.md#atualizações-pelo-ar).
