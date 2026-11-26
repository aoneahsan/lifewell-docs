---
title: El modelo de datos
description: "Cómo guarda LifeWell una vida: una tabla por concepto, un almacén común para todos los seguimientos y tres decisiones que organizan lo demás."
keywords: [modelo de datos de lifewell, esquema postgres, mediciones, datos de seguimiento, diseño de base de datos]
tags: [concepts, architecture]
sidebar_position: 2
---

# El modelo de datos \{#the-data-model}

Postgres. Una tabla por concepto, no por pantalla.

## Un almacén común para todos los seguimientos \{#one-store-behind-every-tracker}

`/tracking`, `/health/water` y la acción rápida del panel son **tres vistas del mismo almacén**.

| Objeto | Qué representa |
|---|---|
| `metric_definitions` | Catálogo de seguimientos: unidad, forma de resumir un día, límites razonables, gráfico, área y objetivo inicial. Sin propietario, es un seguimiento del sistema; con propietario, lo definiste tú |
| `metric_entries` | Todas las mediciones de todas las áreas; la serie temporal |
| `user_metric_settings` | Tus objetivos, visibilidad y orden por seguimiento. Si no hay fila, rigen los valores iniciales |
| `metric_daily` | Una vista con una fila por persona, seguimiento y día, resumida según la regla propia de ese seguimiento |

La aplicación 2.x guardaba la misma cifra en varios sitios y permitía que dejaran de coincidir. Corregirlo fue el cambio más valioso de la reconstrucción.

## Tres decisiones que conviene conocer primero \{#three-decisions-worth-knowing-before-you-read-anything-else}

### Resumir un día cambia el significado de los datos \{#how-a-day-collapses-is-not-cosmetic}

Un seguimiento **suma** valores (agua, pasos, calorías) o toma **el último** (peso, presión arterial, sueño, estado de ánimo).

Ese campo determina cómo se calcula el día y si una segunda entrada del mismo día representa una nueva medición o una corrección. Un índice de la base de datos aplica la regla, sin depender de un servicio que pudiera omitirse.

### La fecha viene de tu dispositivo \{#the-date-comes-from-your-device}

El *hoy* de un seguimiento diario es el **hoy de la persona**. Si alguien en UTC+5 registra agua a las dos de la mañana, corresponde al día actual. Con la hora del servidor podría quedar en el día anterior y parecer que el día se reinicia a las siete de la tarde.

Solo el dispositivo conoce la diferencia horaria; por eso el cliente indica el día, sin un valor predeterminado.

### Cada entrada conserva su unidad \{#the-unit-is-stored-on-every-entry}

Cambiar de unidades métricas a imperiales no debe reinterpretar doce años de registros. Cada dato histórico conserva la unidad con la que se escribió y se convierte al leerlo.

## El resto del modelo \{#everything-else}

Alrededor de ese núcleo están las tablas de cada área: condiciones y episodios, medicamentos y dosis, comidas y comidas guardadas, días del ciclo, niños y sus registros, personas y sus relaciones, recuerdos y álbumes, notas y carpetas, eventos del calendario y listas, chats y mensajes, publicaciones de la comunidad, fichas profesionales, donantes de sangre y datos de la cuenta.

La lista completa, con el contenido y la forma de exportar cada tabla, está en [Formato de los archivos de exportación](../reference/export-format.md). Esa página se genera desde el mismo catálogo que lee la exportación, por lo que no puede describir una tabla ausente del archivo.

## Filas permanentes y filas con fecha \{#standing-rows-and-dated-rows}

Cada tabla pertenece a una de estas dos clases, una distinción presente en todo el producto:

- Una fila **con fecha** corresponde a un día: medición, dosis, comida o cita.
- Una fila **permanente** explica el contexto: medicamento, condición, comida guardada u objetivo.

Los filtros de fecha se aplican a la primera clase y nunca a la segunda. Una lista de dosis sin sus medicamentos no sería una exportación más pequeña, sino una exportación incompleta.

## Lo que deliberadamente no forma parte del modelo \{#what-is-deliberately-not-modelled}

- **Sin puntuaciones de salud, rachas, clasificaciones ni niveles.** Los registros cotidianos y de salud son observaciones, no una medida de tu valía. El [programa de invitaciones](../features/referrals.md) separado puede conceder puntos e insignias por invitaciones confirmadas; esos premios no puntúan tu salud ni tu actividad diaria.
- **No hay columna de correo electrónico.** El proveedor de identidad gestiona tu dirección; otra copia tendría dos fuentes y podría quedar desactualizada al primer cambio.
- **No hay permiso para compartir ubicaciones.** El tipo que define qué puede llevar un enlace tiene tres opciones: seguimientos, medicamentos y árboles. La ubicación no es una de ellas.
