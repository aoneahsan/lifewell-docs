---
title: Feeds de calendário
description: Acompanhe seu calendário LifeWell no Google Calendar, Apple Calendar ou Outlook por um endereço somente de leitura, que você pode revogar quando quiser.
keywords: [feed de calendário LifeWell, acompanhar calendário LifeWell, feed ics, assinatura Google Calendar]
topics: [developers, calendar]
sidebar_position: 6
last_update:
  date: 2026-11-19
  author: Equipe LifeWell
---

# Feeds de calendário

Um feed coloca o calendário LifeWell no aplicativo de calendário que você já usa. Crie-o em **Configurações → Outros aplicativos → Feeds de calendário**, copie o endereço e assine-o no Google Calendar, Apple Calendar, Outlook ou em qualquer aplicativo que aceite assinaturas `.ics`. O feed é somente de leitura: o outro aplicativo mostra os eventos, mas não pode alterá-los.

## Como assinar?

1. No LifeWell, abra **Configurações → Outros aplicativos → Feeds de calendário** e escolha **Novo feed**.
2. Copie o endereço informado.
3. No aplicativo de calendário, adicione um calendário **por URL** (no Google Calendar, *Por URL*; no Apple Calendar, *Nova assinatura de calendário*) e cole o endereço.

O aplicativo de calendário, não o LifeWell, decide quando consultar o feed. Alguns verificam a cada poucos minutos; o Google Calendar pode levar horas. Por isso, uma mudança feita no LifeWell pode demorar a aparecer lá.

## O que o feed contém?

Eventos do seu [calendário LifeWell](../features/calendar-and-appointments.md), desde 90 dias atrás até cerca de 13 meses à frente, no máximo 2.000. Nenhuma outra parte dos seus dados é acessível pelo feed. Notas privadas ficam de fora.

Os horários permanecem como aparecem no LifeWell: *dentista às 09h30* continua às 09h30 quando você muda de fuso horário, em vez de se deslocar.

## O endereço é secreto?

Sim. Aplicativos de calendário não enviam um token separado, então a credencial faz parte do endereço. Quem tiver esse endereço pode ler o calendário. Por isso, o feed revela o mínimo possível:

- dá acesso a **um calendário**, somente para leitura, e a nada mais;
- não é um token de acesso e não funciona na [API](./api.md);
- você só pode vê-lo novamente pela mesma [regra dos dez minutos](./authentication.md#posso-ver-um-token-novamente) aplicada a tokens.

Se o endereço for compartilhado indevidamente, revogue o feed e crie outro.

## Como interromper um feed?

Escolha **Revogar** na linha do feed. A partir daí, o endereço responde `404`, e o outro aplicativo remove os eventos na próxima consulta. Crie um feed para cada aplicativo; assim, revogar um não interrompe os demais.
