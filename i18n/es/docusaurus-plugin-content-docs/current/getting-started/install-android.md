---
title: Instalar en Android
description: LifeWell para Android es una versión Capacitor de la misma aplicación. Descárgala en Google Play, inicia sesión con Google y consulta el mismo registro que en la web.
keywords: [lifewell android, google play, aplicación capacitor, instalar lifewell android]
topics: [getting-started, android]
sidebar_position: 2
---

# Instalar en Android \{#install-on-android}

La aplicación Android es la misma que la versión web, dentro de Capacitor. Lee el mismo registro e inicia
sesión en la misma cuenta. Lo que escribes en el teléfono aparece en la computadora, y al revés.

## Cómo obtenerla \{#getting-it}

[LifeWell en Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell)

| | |
|---|---|
| Identificador de la aplicación | `com.aoneahsan.lifewell` |
| Versión mínima de Android | **Android 9 (API 28)** |
| Serie de versiones que cubre esta documentación | **3.x** |

Un dispositivo anterior a Android 9 no puede instalarla. Ese mínimo está fijado en la compilación, no en una
política. Lo explicamos porque Google Play suele ocultar la ficha sin decir por qué.

## Qué añade Android \{#what-the-android-build-adds}

- **Avisos compatibles del dispositivo.** Android puede entregar recordatorios de eventos y bienestar cuando
  permites las notificaciones, incluso con la aplicación cerrada. Los avisos de dosis pendientes permanecen
  en la bandeja de LifeWell. Consulta [Recordatorios](../features/reminders.md).
- **Inicio de sesión y almacenamiento de sesión nativos.** La sesión se guarda en el almacén de claves del
  sistema, no en el almacenamiento del navegador.

## Qué permisos no pide \{#what-it-does-not-ask-for}

La aplicación declara pocos permisos y explica cada uno en `/permissions`. No pide acceso a los SMS ni al
registro de llamadas. Solo solicita contactos cuando pulsas Contactos junto a un número de teléfono
(consulta la tabla de permisos Android). Los recordatorios tampoco piden permiso para alarmas exactas:
se programan de forma aproximada porque Google reserva las exactas para despertadores y calendarios.

El panorama completo, incluidos los cambios respecto a 2.x, está en [Android](../platforms/android.md).

## Actualizaciones \{#updating}

Google Play entrega las actualizaciones nativas. Las instalaciones compatibles también pueden recibir
paquetes firmados de Native Update para los recursos web. El aviso dentro de la aplicación te indica cuándo
una nueva versión exige actualizar. Consulta [Actualizaciones inalámbricas](../platforms/android.md#over-the-air-updates).
