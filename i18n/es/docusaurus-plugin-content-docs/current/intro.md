---
id: intro
title: LifeWell
description: LifeWell guarda a las personas y los momentos de tu vida en un solo lugar — familiares, amistades, lo que sabes de ellos, recuerdos y planes, con el bienestar alrededor. Web y Android, bajo tu control.
keywords: [lifewell, aplicación para la vida, árbol familiar, personas, recuerdos, familia y amistades, aplicación android]
tags: [overview, getting-started]
slug: /intro
sidebar_position: 1
---

# LifeWell \{#lifewell}

**Guarda a las personas y los momentos de tu vida en un solo lugar, junto a todo lo que los rodea.**

Empiezas por ti, añades a quienes te importan y conservas lo que sabes de esas personas y los momentos que
compartes. Todo lo demás que guarda LifeWell está a su alrededor, para ayudar a que tu vida vaya bien.

LifeWell no es un rastreador de salud. La salud es un área alrededor de las personas de tu vida, no el
centro de la aplicación.

## Las siete áreas, contigo en el centro \{#the-seven-areas-and-you-in-the-middle}

| Área | Qué hay en ella |
|---|---|
| [Personas](./domains/people.md) | Familia y trabajo, árbol familiar, personas con las que te relacionas, grupos y conversaciones |
| [Recuerdos](./domains/memories.md) | Fotos, álbumes, cuaderno de recuerdos y descripciones que les dan sentido |
| [Lo cotidiano](./domains/everyday.md) | Calendario, notas, lugares guardados, recordatorios y lista de compras |
| [Compartir](./domains/sharing.md) | Lo que permitiste leer a otras personas: enlaces, acceso de tu pareja y respuestas recibidas |
| [Salud](./domains/health.md) | Signos vitales, medicamentos, comida, movimiento, sueño, condiciones y resultados de laboratorio |
| [Mente](./domains/mind.md) | Diario, sesiones guiadas, estado de ánimo, gratitud y respiración |
| [Etapas de la vida](./domains/stages.md) | Ciclo, fertilidad, embarazo, menopausia y primeros años de una criatura |

**Tú** no eres una de las siete áreas. Eres la cuenta: tu perfil, plan, configuración y los controles sobre
todo lo anterior.

Puedes [desactivar](./domains/overview.md#switching-an-area-off) seis de las siete. Desactivar significa
ocultar: el menú deja de mostrar el área, pero conserva todo lo que registraste y puedes abrir sus páginas
por su dirección directa. Compartir no tiene interruptor porque lo que permitiste leer debe seguir visible
para ti.

## Dónde funciona \{#what-it-runs-on}

| | |
|---|---|
| Web | Cualquier navegador actual en [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) |
| Android | La misma aplicación en Capacitor; consulta [Android](./platforms/android.md) |
| iOS | [Retirada el 16 de julio de 2026](./platforms/ios.md). No hay una cuenta de Apple Developer para publicarla |
| Extensión para navegador | [Construida para Chrome y Firefox](./platforms/browser-extension.md); aún no publicada en sus tiendas |

## Lo que es cierto sobre tu registro \{#what-is-true-of-your-record}

- **Un conjunto pequeño de entradas rápidas puede esperar en tu dispositivo.** Si activas el registro sin
  conexión, las lecturas admitidas, los cambios de días del ciclo y los episodios de síntomas se envían al
  volver la red. Las demás páginas se pausan sin conexión.
- **Las fotos y los archivos van a tu propio Google Drive**, bajo un permiso que solo alcanza los archivos
  creados por LifeWell. Consulta [Dónde vive tu registro](./your-data/where-it-lives.md).
- **Puedes llevártelo todo** en JSON, CSV o PDF desde la aplicación. El formato está documentado
  [campo por campo](./reference/export-format.md).
- **Puedes borrarlo todo o borrar un área**, y la aplicación indica qué filas se eliminaron.

## Versión \{#version}

Esta documentación cubre la aplicación **LifeWell 3.x**, reconstruida sobre una nueva base de datos a partir
de la versión 2.x que llegó a publicarse.

:::warning[El paso de 2.x a 3.0.0 reinició los registros]
Se reemplazó la base de datos sin una ruta de migración. Una actualización directa de 2.x a 3.0.0 no llevaba
el registro anterior. La decisión se tomó cuando la aplicación no tenía usuarios reales. Se explica aquí
porque un reinicio deliberado puede parecer un fallo grave a quien abre la aplicación.
:::

## Adónde ir ahora \{#where-to-go-next}

- Instálala: [web](./getting-started/install-web.md) · [Android](./getting-started/install-android.md)
- Después: [el primer uso](./getting-started/first-run.md), [un recorrido breve](./getting-started/tour.md) y
  [la guía de la aplicación](./getting-started/tours-and-walkthrough.md)
- Si buscas tu información: [exportarla](./your-data/export.md) · [borrarla](./your-data/delete.md) ·
  [el formato de exportación](./reference/export-format.md)
- Para conectar LifeWell con un calendario, un programa o un asistente de IA: [Desarrolladores](./developers/index.md)
