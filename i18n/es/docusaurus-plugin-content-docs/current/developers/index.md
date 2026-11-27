---
title: Conectar LifeWell con otras aplicaciones
description: "Cuatro formas en que algo externo puede acceder a tu registro: un calendario mediante un feed, un programa con un token, un asistente de IA por MCP y otra aplicación mediante webhooks."
keywords: [conectar lifewell, api lifewell, mcp lifewell, webhooks, calendario lifewell]
topics: [developers, api]
sidebar_position: 1
last_update:
  date: 2026-11-19
  author: El equipo LifeWell
---

# Conectar LifeWell con otras aplicaciones \{#connect-lifewell-to-other-apps}

Hay cuatro puertas para acceder a tu registro desde fuera de LifeWell: un **calendario** mediante un feed,
un **programa** mediante un token de acceso, un **asistente de IA** mediante MCP y **otra aplicación** mediante
webhooks. Tú abres cada puerta en **Configuración → Otras aplicaciones** y puedes cerrarla allí mismo.

## ¿Para qué sirve? \{#what-is-this-for}

Sobre todo para algo cotidiano: ver lo que guarda LifeWell sin tener que abrir LifeWell. El árbol familiar
en otra aplicación que ya usas. Tus citas en el calendario del teléfono junto a las reuniones de trabajo,
en vez de un segundo calendario que debes recordar consultar.

## ¿Qué puerta necesito? \{#which-door-do-i-need}

| Quieres | Usa | Puede | Empieza aquí |
|---|---|---|---|
| Poner el calendario de LifeWell en Google Calendar, Apple Calendar u Outlook | Un feed de calendario | Leer tu calendario y nada más | [Feeds de calendario](./calendar-feeds.md) |
| Leer o cambiar tu registro desde tu propio código | Un token de acceso y la API | Lo que permitan los ámbitos del token | [Autenticación](./authentication.md), después [la API](./api.md) |
| Preguntar a Claude, ChatGPT, Claude Code o Cursor sobre tu registro | El servidor MCP | Lo que aprobaste en la página de consentimiento | [Asistentes de IA (MCP)](./mcp.md) |
| Avisar a otra aplicación cuando algo cambia | Webhooks | Recibir eventos; no puede leer nada más | [Webhooks](./webhooks.md) |

## ¿Qué se mantiene en cualquiera de las cuatro? \{#what-stays-true-whichever-door-you-use}

- **Nada se abre hasta que tú lo abres.** Una cuenta nueva no tiene tokens, feeds, conexiones ni webhooks.
- **Borrar requiere permiso aparte.** Puedes autorizar lectura y escritura; borrar tiene un permiso
  independiente, apagado hasta que lo marques. Un asistente de IA no puede borrar nada sin que lo confirmes
dentro de LifeWell.
- **Puedes ver todos los accesos.** Configuración → Otras aplicaciones enumera tokens, aplicaciones
  conectadas, webhooks y feeds, con la última vez que se usaron.
- **Tu registro sigue siendo tuyo.** Cada solicitud actúa con tu identidad bajo las mismas reglas que
  determinan lo que ves en la aplicación. No alcanza el registro de otra persona.

El inicio de sesión en dos pasos protege todo esto. Si está activo, volver a mostrar un token o aprobar una
conexión nueva pide un código. Consulta [Inicio de sesión en dos pasos](./two-step-sign-in.md).

## ¿Qué cambió? \{#what-changed}

Los cambios en la API, el servidor MCP, los webhooks y los feeds están en el
[historial para desarrolladores](./changelog.md).
