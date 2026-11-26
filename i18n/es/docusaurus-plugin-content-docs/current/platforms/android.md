---
title: Android
description: "LifeWell en Android: versión mínima 9, permisos, recordatorios locales, actualizaciones firmadas y funciones que esperan su publicación en la tienda."
keywords: [lifewell android, permisos de android, permiso de contactos, minsdk 28, capacitor android, play store]
tags: [platforms, android]
sidebar_position: 2
---

# Android \{#android}

Es la misma aplicación que en la web, dentro de Capacitor. Utiliza la misma cuenta y los mismos datos.

| | |
|---|---|
| Identificador de aplicación | `com.aoneahsan.lifewell`, permanente |
| Versión mínima | **Android 9 (API 28)** |
| Versión actual del código fuente | **3.30.0**; consulta Google Play para saber cuál está disponible en tu dispositivo |
| Distribución | [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell) |

:::note[La versión mínima es Android 9, no Android 7]
Una versión anterior de esta documentación indicaba Android 7.0. Era incorrecto: el SDK mínimo de la compilación es 28, correspondiente a Android 9. Un dispositivo anterior no puede instalar la aplicación y Play oculta la ficha sin explicar el motivo.
:::

## Permisos \{#permissions}

La aplicación explica sus permisos declarados en [`/permissions`](https://lifewell.aoneahsan.com/permissions). Los primeros cinco se solicitan al usar la función y puedes denegarlos. Los dos de contactos aparecen en una sola solicitud. Android concede los demás al instalar.

| Permiso | Motivo |
|---|---|
| Cámara | Tomar una foto para tus recuerdos o registros. Se solicita al tocar *Tomar una foto* por primera vez. Si lo deniegas, puedes elegir una foto existente |
| Micrófono | Grabar en Speak it. Se solicita al pulsar grabar; si lo deniegas, puedes escribir. LifeWell no escucha en segundo plano |
| Ubicación aproximada | Ordenar profesionales por distancia mientras esa página está abierta. Se solicita al tocar *Usar mi ubicación* y no se guarda |
| Leer contactos | Leer el nombre y números del único contacto que eliges al tocar **Contactos** junto a un campo de teléfono, para colocar el número seleccionado. No se solicita al iniciar |
| Modificar contactos | LifeWell no lo utiliza. Android reúne leer y modificar en un mismo permiso. LifeWell solo lee; nunca añade, cambia ni borra contactos |
| Notificaciones | Entregar los recordatorios que solicitaste |
| Internet | Sincronizar tus datos |
| Estado de red | Saber si puede sincronizar y avisarte cuando no puede |
| Ejecutarse al iniciar | Mantener los recordatorios después de reiniciar el dispositivo |
| Bloqueo de suspensión | Permitir la entrega de un recordatorio programado |
| Identificador de publicidad | Declarado; consulta la explicación siguiente |

Si deniegas el acceso a contactos, puedes escribir el número. Todos los campos de teléfono funcionan de ambas formas. Tu agenda nunca se sube, busca ni guarda.

No se solicitan SMS, historial de llamadas, ubicación en segundo plano ni acceso amplio a fotos o archivos.

### Dos permisos eliminados expresamente \{#two-that-are-actively-removed}

La biblioteca de notificaciones declara `SCHEDULE_EXACT_ALARM` y `USE_EXACT_ALARM` en su manifiesto. LifeWell **elimina ambos** de la compilación.

Android reserva las alarmas exactas para despertadores y calendarios. Conservarlas exigiría un permiso que Google no concede a una aplicación de esta clase. En Android 12 y posteriores, intentar programar sin el permiso abre los ajustes del sistema *Alarmas y recordatorios* en vez de crear el aviso. Por eso los recordatorios se programan sin precisión exacta y pueden llegar unos minutos antes o después de la hora indicada.

### Identificador de publicidad \{#the-advertising-id}

Está declarado en el manifiesto. **La aplicación no contiene una red publicitaria** ni código de anuncios de terceros. La declaración mantiene coherencia entre la ficha de la tienda y las capacidades de la compilación; no significa que se te estén mostrando anuncios.

## Qué añade la compilación Android \{#what-the-android-build-adds}

- **Recordatorios locales** que entrega Android aunque LifeWell esté cerrado. Consulta [Recordatorios](../features/reminders.md).
- **Inicio de sesión nativo**, con la sesión guardada en el almacén de claves del sistema en lugar del almacenamiento web.

## Push y Google Play Billing

### Notificaciones push \{#push-notifications}

Si activas push y la suscripción del dispositivo queda activa, LifeWell puede recibir un aviso general del equipo mediante OneSignal. La aplicación no envía automáticamente avisos por eventos de la cuenta. Push es independiente de los recordatorios locales, que Android programa en el dispositivo. Consulta [Recordatorios](../features/reminders.md#push-notifications).

### Google Play Billing \{#google-play-billing}

El flujo de compra, la verificación del servidor y las notificaciones de renovación de Google están implementados y compilados. La relación entre las respuestas de Google y los derechos de acceso se probó con respuestas registradas. **Aún no se ha realizado una compra real**. La cuenta de servicio no está configurada y el control de plataforma que habilita los pagos de Play está desactivado inicialmente. Solo puede probarse con una compilación firmada por Play e instalada desde un canal. Se necesita una prueba interna real para comprobarlo. Consulta [Planes](../plans.md#on-android).

## Actualizaciones inalámbricas \{#over-the-air-updates}

LifeWell integra paquetes firmados de Native Update para instalaciones Android compatibles. La aplicación comprueba cada paquete antes de aplicarlo y puede conservarlo tras un inicio en frío. La clave pública de firma está integrada en la compilación nativa; una instalación anterior sin ella no puede adquirir después la capacidad de recibirlos. El código nativo y los permisos siguen llegando por Google Play. El registro de versiones de la aplicación también te avisa cuando debes actualizar.

## iOS \{#ios}

[Se retiró el 16 de julio de 2026.](./ios.md)
