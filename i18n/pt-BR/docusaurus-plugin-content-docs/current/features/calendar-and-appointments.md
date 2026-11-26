---
title: Agenda e compromissos
description: Uma agenda para a semana comum e a semana de consultas, com uma lista em cada compromisso para as perguntas que você queria fazer.
keywords: [agenda lifewell, registro de compromissos, lista para consulta, consultas de saúde]
tags: [features, everyday]
sidebar_position: 1
---

# Agenda e compromissos

## A agenda

`/calendar` mostra por mês tudo o que tem data no seu registro. É uma agenda só, não uma agenda médica ao lado de outra pessoal. Afinal, a semana não chega dividida em duas.

## Compromissos

`/appointments` mostra os mesmos eventos em lista, filtrados para os que são compromissos.

Cada compromisso guarda:

- quando e onde vai acontecer;
- com quem será;
- **uma lista** com as perguntas que você pretendia fazer e as respostas que queria trazer de volta.

É a lista que costuma ser anotada no verso de um envelope e perdida entre o estacionamento e a sala de consulta. Aqui, ela continua junto do compromisso depois, para que a resposta fique ao lado da pergunta.

## Lembretes

O formulário oferece um lembrete uma hora antes de um compromisso com horário definido. No Android, o dispositivo pode avisar se as notificações estiverem disponíveis e autorizadas. Na web, o compromisso é salvo, mas o navegador não avisa depois que a aba é fechada. Veja [Lembretes](./reminders.md).

## O que entra na exportação

Os eventos da agenda saem como **Calendar** e suas listas como **Appointment notes**. Ambos aparecem nas exportações JSON e CSV; as notas do compromisso não entram no resumo PDF. Como os eventos têm data, escolher um período menor na exportação também os limita. Veja [o formato da exportação](../reference/export-format.md).

## O que não acontece

Não há conexão com Google Calendar, Outlook ou outra agenda externa. O LifeWell não lê eventos dessas agendas nem grava nelas. Um compromisso criado no LifeWell fica no LifeWell.
