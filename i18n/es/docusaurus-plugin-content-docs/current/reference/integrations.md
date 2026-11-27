---
title: Servicios externos
description: Cada servicio externo al que se conecta LifeWell, su función, los datos que recibe y qué ocurre si falta su clave.
keywords: [integraciones de lifewell, servicios externos, google drive, sentry, amplitude, clarity, onesignal, turnstile]
topics: [reference, privacy]
sidebar_position: 3
---

# Servicios externos \{#third-party-services}

Estos son todos los servicios con los que se comunica LifeWell fuera de su propio producto. **Cada uno se desactiva si falta su clave**; un servicio sin configurar se omite, sin generar un fallo en tiempo de ejecución.

## Tus registros \{#your-record}

| Servicio | Función | Datos que recibe |
|---|---|---|
| **Supabase** | Base de datos e inicio de sesión | Todo lo que registras; es el almacén principal |
| **Cuenta de Google** | Inicio de sesión | Tu nombre y dirección de correo, enviados por Google a LifeWell |
| **Google Drive** | Tus fotos y archivos | Los propios archivos en **tu** Drive, con permiso limitado a los creados por LifeWell |
| **Google Maps** | Mapa de [Mapas](../features/maps.md) | La zona que se muestra |

Solo se inicia sesión con Google: **nunca vemos ni guardamos una contraseña**.

## Avisos para ti \{#telling-you-things}

| Servicio | Función | Estado |
|---|---|---|
| **OneSignal** | Notificaciones push opcionales | Si activas push en Ajustes y la suscripción del dispositivo queda activa, el servicio recibe esa suscripción. El equipo de LifeWell puede enviar un aviso general; la aplicación no envía automáticamente avisos por eventos de la cuenta. |
| **Google Play Billing** | Suscripciones en Android | Desarrollado y probado con respuestas registradas, pero **desactivado**. Consulta [Planes](../plans.md#on-android) |

El sistema push es **solo de recepción**: la aplicación suscribe el dispositivo y abre el destino al tocar la notificación. Dar permiso no implica que la suscripción esté activa. Los recordatorios compatibles de eventos y bienestar en Android usan la programación del dispositivo. Los avisos de medicación aparecen en la bandeja de LifeWell al abrir la lista de medicamentos; no dependas de ellos sin conexión.

## Cómo detectamos fallos en el producto \{#how-we-know-the-product-works}

| Servicio | Función | Datos que recibe |
|---|---|---|
| **Google Analytics 4** | Conocer qué páginas se utilizan | Ruta y nombre de evento |
| **Amplitude** | Conocer qué acciones se realizan | Nombre de evento y propiedades permitidas |
| **Microsoft Clarity** | Reproducir sesiones para encontrar problemas de interfaz | Grabación de la interfaz con elementos sensibles marcados para ocultarse |
| **Sentry** | Registrar errores | Fallo, pantalla y versión, con identificadores eliminados |

:::note[Los cuatro funcionan; Firebase Analytics no está prohibido]
Una versión anterior de la documentación afirmaba que Firebase Analytics estaba prohibido y había sido sustituido por Sentry y Amplitude. Ambas afirmaciones eran incorrectas. Google Analytics 4 **es** la propiedad de análisis de Firebase: una propiedad con dos SDK. Funciona **junto con** Amplitude, Clarity y Sentry.
:::

**Ninguno recibe el contenido de tus registros.** Cada propiedad de análisis debe estar declarada para el evento y pasar una comprobación de tipo. Así no se admiten frases, direcciones de correo ni mediciones. Los filtros se prueban enviándoles identificadores reales y comprobando que ninguno sobrevive.

## Protección de los formularios \{#keeping-the-forms-usable}

| Servicio | Función |
|---|---|
| **Cloudflare Turnstile** | Detectar bots en los formularios de contacto y participación |

Turnstile es una comprobación, no un rastreador, y solo aparece en esos dos formularios públicos.

## Archivos y correo saliente \{#files-and-outbound-email}

El almacenamiento de archivos y los pocos correos que envía LifeWell, como la bienvenida y la confirmación de una solicitud de eliminación de cuenta, se gestionan mediante un servicio privado del desarrollador, no una plataforma externa de correo.

No hay correos entre usuarios, boletín ni mensajes de marketing. Tu nombre y dirección se usan únicamente para entregar esos mensajes.

## Actualizaciones inalámbricas \{#over-the-air-updates}

La aplicación Android integra paquetes firmados de Native Update. Una instalación compatible los comprueba y aplica; Google Play entrega las versiones nativas. La clave de firma está incorporada en la compilación nativa. Una instalación sin ella no puede recibir los paquetes. Consulta [Android](../platforms/android.md#over-the-air-updates).

## Ausencias deliberadas \{#what-is-deliberately-absent}

- **No hay red publicitaria** ni código de anuncios de terceros.
- **No hay intermediarios de datos ni venta de información.**
- **No hay backend de Firebase.** La aplicación 2.x usaba la base documental de Google. La reconstrucción a 3.0.0 corrigió, entre otros problemas, el agotamiento de lecturas gratuitas que dejó la versión anterior sin servicio durante un día.
- **No hay calendario externo.** No se lee ni escribe en Google Calendar u otros servicios de calendario.
