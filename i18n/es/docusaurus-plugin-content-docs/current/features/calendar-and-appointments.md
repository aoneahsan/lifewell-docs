---
title: Calendario y citas
description: Un calendario para la semana cotidiana y la médica, con una lista en cada cita para no olvidar las preguntas que querías hacer.
keywords: [calendario lifewell, registro de citas, lista de preguntas, citas médicas]
topics: [features, everyday]
sidebar_position: 1
---

# Calendario y citas \{#calendar-and-appointments}

## El calendario \{#the-calendar}

`/calendar` muestra por mes todo lo que tiene fecha en tu registro. Hay un solo calendario, no uno médico
junto a uno personal: la semana tampoco viene dividida en dos.

## Las citas \{#appointments}

`/appointments` muestra esos mismos eventos en forma de lista y filtrados para ver solo las citas.

Cada cita guarda:

- cuándo y dónde es;
- con quién es;
- **una lista de preguntas** que querías hacer y respuestas que querías recordar después.

Esa lista suele terminar escrita detrás de un sobre y perderse entre el estacionamiento y el consultorio.
Aquí permanece con la cita, para que la respuesta quede al lado de la pregunta.

## Recordatorios \{#reminders}

El formulario ofrece un recordatorio una hora antes de una cita con hora. En Android puede llegar una alerta si las notificaciones del dispositivo están disponibles y autorizadas. En la web se guarda la cita, pero el navegador no puede avisarte cuando la pestaña está cerrada. Consulta [Recordatorios](./reminders.md).

## Qué aparece en la exportación \{#what-is-in-the-export}

Los eventos del calendario se exportan como **Calendar** y sus listas como **Appointment notes**. Ambos aparecen en JSON y CSV; las notas de citas no figuran en el resumen PDF. Los eventos tienen fecha, así que limitar el intervalo de exportación también los limita. Consulta [el formato de exportación](../reference/export-format.md).

## Qué no hace \{#what-this-is-not}

No hay conexión con Google Calendar, Outlook ni otro calendario externo. LifeWell no lee ni escribe nada en
ellos. Una cita de LifeWell permanece en LifeWell.
