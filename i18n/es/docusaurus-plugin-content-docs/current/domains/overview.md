---
title: Las siete áreas
description: "LifeWell organiza siete áreas alrededor de ti: primero personas, después recuerdos, vida diaria y compartir; a su alrededor, salud, mente y etapas de la vida. Puedes ocultar seis sin borrar datos. Compartir permanece visible."
keywords: [áreas de lifewell, áreas de la vida, desactivar un área, navegación de lifewell, compartir en lifewell]
tags: [concepts, domains]
sidebar_position: 1
---

# Las siete áreas \{#the-seven-areas}

Seis aplicaciones sabían algo distinto de ti. Ninguna reunía las piezas.

LifeWell tiene siete áreas, con **Tú** en el centro. Tú representa la cuenta: perfil, plan y ajustes. No es una de las siete, porque no puedes desactivarla.

Primero están las personas importantes, lo que sabes de ellas y los momentos que comparten. Con ellas están los recuerdos, el día a día y lo que eliges compartir. La salud, la mente y las etapas de la vida rodean ese núcleo para ayudarte a organizar una vida que vaya bien. La salud es una de las áreas, no el propósito principal del producto.

| Área | Grupo del menú | Contenido |
|---|---|---|
| [Personas](./people.md) | Familia y trabajo | Personas, árboles, lugares, mensajes, comunidad, profesionales y donantes de sangre |
| [Recuerdos](./memories.md) | Recuerdos | Fotos, recuerdos y notas |
| [Vida diaria](./everyday.md) | Vida diaria | Calendario |
| [Compartir](./sharing.md) | Compartir | Lo que permitiste leer a otras personas: enlaces, acceso de pareja y respuestas |
| [Salud](./health.md) | Salud | Seguimientos, medicamentos, alimentos, comidas, ejercicio y condiciones |
| [Mente](./mind.md) | Mente | Diario, respiración, sueño y bienestar en el escritorio |
| [Etapas de la vida](./stages.md) | Etapas de la vida | Ciclo, bebés y crecimiento |

## Por qué las direcciones no coinciden con las áreas \{#why-the-addresses-do-not-match-the-areas}

`/health/mood-journal` pertenece a **Mente**. `/health/menopause` está en **Etapas de la vida**. `/people/share-links` corresponde a **Compartir**. El prefijo no refleja el área actual y se conserva deliberadamente.

Los buscadores ya habían indexado esas direcciones en la aplicación 2.x. Cambiarlas rompería los enlaces existentes. La reconstrucción cambia el código, no las direcciones. Consulta [Direcciones que se conservan](../reference/addresses.md).

Un área es una forma de organizar el producto; un prefijo puede venir de su historia. No significan lo mismo.

## Desactivar un área \{#switching-an-area-off}

`/settings?tab=domains` muestra seis interruptores, uno por área configurable. Compartir también aparece allí, sin interruptor: debes poder ver siempre a quién permitiste leer tus datos. Consulta [Compartir](./sharing.md#why-it-has-no-switch).

**Desactivar significa quitarla de la vista sin perder datos:**

- El menú deja de mostrar el área.
- Se conserva todo lo que registraste, ahora y después.
- Sus páginas siguen abriéndose con una dirección directa y muestran una nota que explica por qué no aparecen en el menú.

No hay botón Guardar. Cada cambio se escribe de inmediato y el interruptor confirma el resultado. Si falla, vuelve a su posición anterior y te lo indica.

## Ocultar un área no equivale a eliminarla \{#hiding-an-area-is-not-deleting-it}

Son dos acciones distintas:

| Acción | Lugar | Resultado |
|---|---|---|
| Desactivar un área | `/settings` → Áreas | Deja de aparecer en el menú. Se conservan todas sus filas |
| [Eliminar un área](../your-data/delete.md#delete-one-area) | `/settings` → Tus datos | Se eliminan todas sus filas en una transacción y la aplicación indica cuántas |

La segunda acción te pide escribir una confirmación para evitar que confundas ambas opciones.

## Qué determina las pantallas visibles \{#what-decides-which-screens-appear}

Solo intervienen dos datos:

1. **Las áreas activadas**, según los seis interruptores.
2. **Quién eres**, según un campo del perfil que determina si aparecen seis pantallas de etapas de la vida. Consulta [El primer inicio](../getting-started/first-run.md#the-one-answer-that-changes-what-you-see).

Cuando se cumplen ambas condiciones, la misma explicación aparece en los dos lugares pertinentes.
