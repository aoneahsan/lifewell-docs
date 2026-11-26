---
title: Recordatorios
description: Qué puede enviarte LifeWell, cuándo y en qué dispositivo. Tres controles generales, horas de silencio y por qué la aplicación no solicita alarmas exactas en Android.
keywords: [recordatorios de lifewell, recordatorio de medicación, recordatorio de citas, horas de silencio, notificaciones de android]
tags: [features, everyday]
sidebar_position: 2
---

# Recordatorios \{#reminders}

Puedes configurarlos en `/profile/reminders` o en el mismo panel de `/settings`.

## Los tres controles generales \{#the-three-master-switches}

| Control | Valor inicial | Qué cubre |
|---|---|---|
| Recordatorios de medicamentos | **Activado** | Avisos en la bandeja de LifeWell por dosis pendientes sin marcar cuando abres la lista de medicamentos en este dispositivo |
| Recordatorios de citas | **Activado** | Eventos con hora y recordatorio configurado; Android puede avisar una hora antes si autorizas las notificaciones |
| Recordatorios de bienestar | **Desactivado** | Pausas para la vista, movimiento y postura que configuras en sus páginas |

Las dos primeras categorías parten de un medicamento o evento que decidiste registrar. Las pausas de bienestar son interrupciones opcionales y empiezan desactivadas. Activar una categoría no crea un evento ni un aviso diario.

Son controles generales. También puedes desactivar el recordatorio de un medicamento concreto. El control de medicamentos decide si este dispositivo solicita avisos de dosis pendientes al abrir la lista; no borra los avisos que ya están en la bandeja.

## Horas de silencio \{#quiet-hours}

Las horas de silencio se guardan **en el dispositivo**, no en tu cuenta. El panel lo indica claramente. Quizá quieras recibir avisos del dispositivo en el teléfono que llevas contigo, pero no en la tableta de la cocina. Los avisos de dosis pendientes aparecen en la bandeja de LifeWell, no por ese canal del dispositivo.

## En Android \{#on-android}

Si permites las notificaciones del dispositivo, Android puede entregar los recordatorios compatibles de eventos y bienestar aunque LifeWell esté cerrado. Los avisos de dosis pendientes aparecen en la bandeja de LifeWell; no envían notificaciones al teléfono ni correos. El seguimiento del agua no programa avisos para beber.

:::note[LifeWell no solicita permiso para alarmas exactas]
Android reserva las alarmas exactas para despertadores y calendarios. El complemento de notificaciones declara ese permiso de forma predeterminada; LifeWell lo elimina de la compilación y programa los avisos sin precisión exacta. Por eso, un recordatorio puede llegar unos minutos antes o después de la hora indicada. Solicitar un permiso que Google no concede a una aplicación de este tipo impediría su aprobación sin mejorar los recordatorios.
:::

## Notificaciones push \{#push-notifications}

Las notificaciones push y los recordatorios tienen orígenes distintos:

- **Un aviso del dispositivo** se programa a partir de un evento o una indicación de bienestar compatible. Puede llegar con la aplicación cerrada.
- **Una notificación push** es un aviso que el equipo de LifeWell envía manualmente por OneSignal, por ejemplo, un anuncio. LifeWell no envía mensajes push automáticos por actividad de la cuenta.

La función push es **solo de recepción**: LifeWell suscribe tu dispositivo y abre el destino al tocar la notificación. Se activa por dispositivo, nunca automáticamente. En la web, solo funciona en el sitio publicado.

Dar permiso para las notificaciones no significa que el dispositivo esté suscrito. La configuración muestra el estado de la suscripción; en la web, solo se puede suscribir desde la dirección publicada de LifeWell. El equipo decide cuándo enviar un aviso, así que activar push no promete mensajes periódicos.

## Qué muestra un recordatorio \{#what-a-reminder-shows}

Los avisos de dosis pendientes permanecen en la bandeja de LifeWell. En Android, un recordatorio de evento compatible puede mostrar su título en la pantalla bloqueada, donde alguien cercano podría leerlo. Si te preocupa, Android permite ocultar el contenido hasta que desbloquees el teléfono. Ese ajuste pertenece al sistema, no a LifeWell.
