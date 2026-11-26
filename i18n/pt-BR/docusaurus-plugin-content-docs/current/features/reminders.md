---
title: Lembretes
description: O que o LifeWell pode lembrar, quando e em qual dispositivo — três controles gerais, horário de silêncio e o motivo de não pedir ao Android a permissão de alarme exato.
keywords: [lembretes lifewell, lembrete de medicamento, lembrete de compromisso, horário de silêncio, notificações android]
tags: [features, everyday]
sidebar_position: 2
---

# Lembretes

Abra `/profile/reminders` ou o mesmo painel em `/settings`.

## Os três controles gerais

| Controle | Padrão | O que abrange |
|---|---|---|
| Lembretes de medicamentos | **Ativado** | Avisos na caixa de entrada do LifeWell para doses vencidas e não marcadas quando você abre a lista de medicamentos neste dispositivo |
| Lembretes de compromissos | **Ativado** | Eventos com horário e lembrete configurado; o Android pode avisar uma hora antes se as notificações forem autorizadas |
| Lembretes de bem-estar | **Desativado** | Pausas para os olhos, movimento e postura que você escolhe nas respectivas páginas |

As duas primeiras categorias partem de um medicamento ou evento que você decidiu registrar. As pausas de bem-estar são interrupções opcionais e começam desativadas. Ativar uma categoria não cria um evento nem um lembrete diário.

São controles gerais. Você também pode desativar o lembrete de um medicamento específico. O controle de medicamentos decide se este dispositivo pede avisos de doses vencidas ao abrir a lista; ele não apaga avisos já recebidos.

## Horário de silêncio

O horário de silêncio fica **no dispositivo**, não na sua conta. O painel informa isso no próprio lugar onde você o configura. Uma pessoa pode querer notificações no celular que leva consigo, mas não no tablet da cozinha. Avisos de dose de medicamento vencida ficam na caixa de entrada do LifeWell, fora desse canal do dispositivo.

## No Android

Se você permitir notificações no dispositivo, o Android pode entregar lembretes de eventos e bem-estar compatíveis mesmo com o LifeWell fechado. Avisos de doses de medicamentos vencidas e não registradas aparecem na caixa de entrada do LifeWell; eles não enviam notificação ao celular nem e-mail. O acompanhamento de água no aplicativo não agenda lembretes para beber.

:::note[O LifeWell não pede permissão para alarmes exatos]
O Android reserva alarmes exatos a relógios e agendas. O plugin de notificações declara essa permissão por padrão; o LifeWell a retira da compilação e agenda os lembretes com horários aproximados. Um aviso pode chegar alguns minutos antes ou depois do horário definido. Pedir uma permissão que o Google não concede a um aplicativo desse tipo impediria a aprovação em vez de melhorar os lembretes.
:::

## Notificações push \{#push-notifications}

Uma notificação push não é a mesma coisa que um lembrete:

- **Um lembrete no dispositivo** é agendado a partir de um evento ou aviso de bem-estar compatível. Ele pode chegar com o aplicativo fechado.
- **Uma notificação push** é uma mensagem enviada manualmente pela equipe LifeWell pelo OneSignal, por exemplo um anúncio. O LifeWell não envia push automaticamente por eventos da conta.

O push é **somente para recebimento**: o LifeWell inscreve o dispositivo e trata o toque na notificação. Você ativa isso em cada dispositivo; nunca acontece automaticamente. Na web, o push só funciona no site publicado.

Conceder permissão para notificações não significa que o dispositivo esteja inscrito. As configurações mostram o estado da inscrição; na web, ela só funciona no endereço publicado do LifeWell. A equipe decide quando enviar um aviso, então ativar o push não promete mensagens periódicas.

## O que aparece em um lembrete

O aviso de dose de medicamento vencida permanece na caixa de entrada do LifeWell. No Android, um lembrete de evento compatível pode mostrar o título na tela bloqueada, onde alguém próximo pode lê-lo. Se isso for importante para você, as configurações de notificação podem ocultar o conteúdo até o desbloqueio. Esse controle pertence ao Android, não ao LifeWell.
