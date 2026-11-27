---
title: Búsqueda
description: Una búsqueda para todo tu registro. La parte del servidor está construida; la página todavía no está terminada y la aplicación lo dice en vez de mostrar una lista vacía.
keywords: [búsqueda en lifewell, buscar en tu registro]
topics: [features]
sidebar_position: 3
---

# Búsqueda \{#search}

`/search` busca en tu propio registro —notas, recuerdos, personas, acontecimientos, medicamentos y más—
desde un solo campo en la barra superior.

:::warning[La página todavía no está terminada]
La búsqueda existe: la consulta que recorre tu registro está escrita y publicada. La página que la abre todavía
no está construida. La aplicación lo dice en vez de mostrar una lista vacía que podría hacerte pensar que
*ningún dato tuyo coincidió*.
:::

## A qué llegará y a qué no \{#what-it-will-and-will-not-reach}

- **Solo a tu registro.** La búsqueda actúa con tu identidad y respeta las mismas reglas de acceso por fila
  que cualquier otra lectura. No puede leer filas de otra cuenta aunque un error de código lo intentara.
- **A tu registro, no a las páginas públicas.** El blog, las páginas de funciones y las herramientas son
  páginas públicas que se encuentran en los buscadores, no en este campo.
- **Nunca se indexará.** `/search` lleva `noindex` y no aparece en el mapa del sitio. Incluir una página de
  búsqueda en un índice invitaría a sondearla.
