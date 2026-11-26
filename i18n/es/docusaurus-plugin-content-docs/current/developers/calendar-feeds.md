---
title: Feeds de calendario
description: Suscríbete a tu calendario LifeWell desde Google Calendar, Apple Calendar u Outlook con una dirección de solo lectura, y anúlala cuando quieras.
keywords: [feed calendario lifewell, suscribirse al calendario, feed ics, suscripción google calendar]
tags: [developers, calendar]
sidebar_position: 6
last_update:
  date: 2026-11-19
  author: El equipo LifeWell
---

# Feeds de calendario \{#calendar-feeds}

Un feed pone tu calendario LifeWell dentro de la aplicación de calendario que ya usas. Créalo en
**Configuración → Otras aplicaciones → Feeds de calendario**, copia su dirección y suscríbete desde Google
Calendar, Apple Calendar, Outlook o cualquier aplicación que admita suscripciones `.ics`. Es de solo lectura:
tu aplicación muestra los eventos de LifeWell, pero no puede cambiarlos.

## ¿Cómo me suscribo? \{#how-do-i-subscribe}

1. En LifeWell abre **Configuración → Otras aplicaciones → Feeds de calendario** y elige **Nuevo feed**.
2. Copia la dirección que aparece.
3. En tu aplicación de calendario, añade un calendario **desde una URL** —Google Calendar lo llama *Desde
   URL* y Apple Calendar, *Nueva suscripción a calendario*— y pega la dirección.

La frecuencia con la que se comprueba el feed la decide tu aplicación de calendario, no LifeWell. Algunas
lo hacen cada pocos minutos; Google Calendar puede tardar horas. Un cambio en LifeWell quizá tarde en
aparecer allí.

## ¿Qué contiene el feed? \{#what-does-the-feed-contain}

Los eventos de tu [calendario LifeWell](../features/calendar-and-appointments.md), desde 90 días atrás hasta
unos 13 meses adelante, con un máximo de 2,000. Ninguna otra parte de tu registro es accesible desde el
feed, y se omiten las notas privadas.

Las horas se mantienen como hora local, igual que en LifeWell: *el dentista a las 09:30* seguirá a las
09:30 donde estés, sin desplazarse al cambiar de zona horaria.

## ¿La dirección es secreta? \{#is-the-address-a-secret}

Sí. Las aplicaciones de calendario no pueden enviar un token, por lo que la credencial del feed forma parte
de la dirección. Quien tenga esa dirección puede leer ese calendario. Por eso el feed expone lo mínimo:

- alcanza **un calendario**, solo para lectura, y nada más de tu registro;
- no es un token de acceso y no sirve para llamar a [la API](./api.md);
- solo puedes volver a verla bajo la misma [regla de diez minutos](./authentication.md#can-i-see-a-token-again)
  que se aplica a un token.

Si la dirección se compartió donde no debía, anúlala y crea una nueva.

## ¿Cómo detengo un feed? \{#how-do-i-stop-a-feed}

Elige **Revocar** en su fila. Desde entonces, la dirección responde con `404`, y tu aplicación de calendario
quitará los eventos la próxima vez que la compruebe. Crea un feed por cada aplicación a la que te suscribas:
así puedes revocar uno sin afectar los demás.
