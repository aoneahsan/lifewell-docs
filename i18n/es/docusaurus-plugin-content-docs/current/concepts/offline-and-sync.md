---
title: Sin conexión y sincronización
description: LifeWell pausa la aplicación cuando se pierde la conexión y ofrece una opción para guardar algunas entradas rápidas en este dispositivo hasta que vuelva.
keywords: [lifewell sin conexión, sincronización, sin internet, uso sin conexión]
tags: [concepts, offline]
sidebar_position: 4
---

# Sin conexión y sincronización \{#offline-and-sync}

LifeWell comprueba si puede completar una solicitud real a la aplicación. Cuando se pierde la conexión, un
mensaje de pantalla completa detiene la página actual. Desaparece cuando vuelve la red y una solicitud nueva
se completa; la página continúa sin recargarse.

## Qué funciona sin señal \{#what-works-with-no-signal}

Si activaste **Seguir trabajando sin conexión** en la configuración del dispositivo, el mensaje ofrece
**Seguir registrando sin conexión**. Así vuelves a la página con una barra discreta que indica que no hay red.
Las lecturas métricas admitidas, los cambios en días del ciclo y los episodios de síntomas pueden esperar en
este dispositivo y enviarse cuando vuelva la conexión. La cola tiene un límite y avisa si no puede guardar
un cambio; nunca dice que un cambio fallido ya llegó al servidor.

Un recordatorio Android que ya estaba programado en el dispositivo puede llegar sin conexión.

## Qué no funciona \{#what-does-not}

- **Páginas nuevas y recursos no cargados.** El service worker no guarda páginas ni intercepta solicitudes.
  Necesitas conexión para abrir una página que aún no se ha cargado.
- **Lecturas del servidor y otras escrituras.** Mensajes, comunidad, enlaces compartidos, fotos, citas e
  inicio de sesión necesitan el servicio. La cola local solo admite los registros rápidos indicados arriba.
- **El primer acceso sin conexión.** LifeWell no guarda una versión completa de la aplicación que pueda
  iniciarse desde una pestaña cerrada sin red.

## Cómo se resuelven los cambios \{#how-a-conflict-is-settled}

Los cambios en espera se envían cuando vuelve una conexión real. Cada operación lleva una identidad que
permite reintentarla sin duplicarla. El registro de destino mantiene su propia regla:

- Uno que **suma** trata una segunda entrada como otra lectura.
- Uno donde **prevalece la última** trata la segunda como una corrección.

Dos vasos de agua siguen siendo dos lecturas; un registro que conserva el último valor trata el segundo como
una corrección. Un cambio en espera no aparece en otro dispositivo hasta que el servidor lo acepta.

## El mensaje de conexión \{#the-banner}

Por defecto, el mensaje bloquea la aplicación y ofrece volver a intentar. Solo puedes pasar de largo con
**Seguir registrando sin conexión** si activaste esa opción en el dispositivo. La barra discreta mantiene
visible el estado sin conexión. Al recuperar la red, LifeWell envía los cambios pendientes y actualiza las
lecturas abiertas sin recargar la página.

## Lo que no está construido por decisión \{#what-is-deliberately-not-built}

No hay una copia de toda la aplicación guardada para usarla sin conexión, ni sincronización en segundo plano
con la pestaña cerrada. La cola de registros rápidos es una forma limitada de conservar una anotación durante
una pérdida temporal de conexión.
