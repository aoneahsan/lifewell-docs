---
title: Mapas y lugares
description: Sigue las relaciones entre recuerdos, notas, personas, eventos y nombres de lugares guardados. El historial de ubicación es otra opción independiente.
keywords: [mapas lifewell, mapa de recuerdos, lugares guardados, historial de ubicaciones]
topics: [features, people, memories]
sidebar_position: 10
---

# Mapas y lugares \{#maps-and-places}

En la aplicación, `/maps` se llama «Conexiones». Muestra cómo se relacionan los registros que ya guardaste; la capa Lugares reúne los nombres asociados a recuerdos o eventos. Lee los registros originales, sin crear otra copia ni deducir coordenadas geográficas.

## Vistas de conexiones \{#the-four-maps}

| Dirección | Qué abre |
|---|---|
| `/maps` | Vista Conexiones con capas de conjunto, personas, lugares e historial de ubicación |
| `/maps/memories` | Recorrido acotado de relaciones desde un recuerdo |
| `/maps/notes` | Recorrido acotado de relaciones desde una nota |
| `/maps/people` | Gráfico de personas y sus relaciones |

`/maps/full` quita el marco de la página para dar más espacio al gráfico de personas. Las entradas de calendario y chat también tienen recorridos de relaciones; sus fechas y nombres de lugar siguen en los registros originales.

## Lugares guardados \{#saved-places}

Un lugar es el nombre que escribiste, no una posición recogida por LifeWell. La capa Lugares enumera recuerdos y citas con un nombre de lugar. Los datos de lugares guardados aparecen en [la exportación](../reference/export-format.md).

## Historial de ubicaciones \{#location-history}

`/people/location-tracking` y `/people/location-history` describen una función independiente, **desactivada inicialmente**. El grabador de ubicación en segundo plano está implementado para Android 3.31.0 y posteriores. Al activar la grabación, solicita permisos de ubicación por separado. El historial existente se puede consultar y borrar. El dueño todavía debe subir la versión 3.31.0 a Google Play y comprobarla en un dispositivo real; no cuentes con este grabador en la versión que ofrece actualmente la tienda.

:::note[La ubicación nunca se comparte con otra cuenta]
Un enlace puede incluir un registro de seguimiento, tus medicamentos o un árbol, y nada más. No existe una
opción para compartir la ubicación: es una regla de la base de datos, no una decisión de mostrar u ocultar
un botón. Consulta [Compartir](../domains/sharing.md).
:::

## Qué lleva la exportación \{#what-the-export-carries}

Los lugares guardados y los ajustes de ubicación figuran en JSON y CSV. El PDF cuenta los lugares guardados, sin imprimir una lista de coordenadas.
