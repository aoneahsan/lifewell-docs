---
title: La API de LifeWell
description: "API REST de LifeWell: dirección base, paginación por cursor con 20 filas por página inicialmente y un máximo de 50, y archivo OpenAPI de rutas y campos."
keywords: [api de lifewell, api rest de lifewell, openapi, paginación api, next_cursor]
topics: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: El equipo de LifeWell
---

# La API de LifeWell \{#the-lifewell-api}

LifeWell ofrece una API REST con una dirección base. Un archivo OpenAPI legible por programas describe todas sus rutas, campos y errores. Ese archivo es la referencia completa. Aquí encontrarás la dirección, cómo consultarlo y las dos reglas de todas las listas.

## ¿Cuál es la dirección base? \{#what-is-the-base-address}

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

El `v1` final identifica la versión de la API. Cada solicitud requiere un token o una conexión de aplicación; consulta [Autenticación](./authentication.md).

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

## ¿Dónde está la referencia completa? \{#where-is-the-full-reference}

| Archivo | Dirección | Cómo leerlo |
|---|---|---|
| OpenAPI 3.1 en JSON | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | Swagger UI, Redocly, Postman, Insomnia u otro lector o generador de clientes OpenAPI |
| El mismo contenido en Markdown | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | Navegador, editor de texto o asistente de IA al que se lo proporciones |

Ambos se generan desde la misma fuente que la API. Por eso no pueden describir una ruta inexistente ni omitir una publicada. Las futuras páginas por recurso de este sitio se generarán desde el mismo archivo. Por ahora, todos los detalles están allí.

## ¿Cómo leo el archivo OpenAPI? \{#how-do-i-read-the-openapi-file}

Cuatro apartados responden la mayoría de las preguntas:

- **`paths`:** rutas, métodos y permisos necesarios.
- **`components.schemas`:** campos y tipos de las respuestas. No se envía ningún campo que no esté declarado.
- **`components.securitySchemes`:** las dos vías de acceso: token de acceso bearer y OAuth.
- **Respuestas de error:** posibles valores de `code` en el [formato de error](./authentication.md#what-does-an-error-look-like) de cada ruta.

La API solo puede acceder a las partes y campos de tus datos enumerados allí. La ausencia de un campo es deliberada.

## ¿Cómo funciona la paginación? \{#how-does-pagination-work}

Todas las listas se dividen en páginas:

- **20 filas por página** inicialmente, con un **máximo de 50**.
- Si quedan resultados, la respuesta incluye `next_cursor`. Envía ese valor para obtener la página siguiente.
- Si no aparece `next_cursor`, llegaste a la última página.

El cursor señala una posición, no un número de página. Una fila añadida mientras navegas no desplaza todas las siguientes. Cada ruta de lista indica en OpenAPI los nombres de los parámetros de tamaño y cursor.

## ¿Y los límites de uso y errores? \{#what-about-rate-limits-and-errors}

Son iguales para todas las rutas. Se explican en [Autenticación](./authentication.md#what-are-the-rate-limits).
