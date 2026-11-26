---
title: Comprobar una licencia
description: Cómo comprobar si una copia de LifeWell tiene licencia por su clave o por su sitio web, y qué significa cada respuesta.
keywords: [comprobar licencia lifewell, verificar marca blanca, archivo de licencia]
tags: [white-label]
sidebar_position: 5
last_update:
  date: 2026-11-13
  author: El equipo LifeWell
---

# Comprobar una licencia \{#verify-a-licence}

Cada copia de LifeWell con licencia tiene una clave y publica un archivo en
`/.well-known/lifewell-white-label-license.json` en su propio sitio. Puedes comprobar cualquiera de los dos
en la [página de verificación](https://lifewell.aoneahsan.com/verify-license). La respuesta proviene de
nuestro servicio de licencias, nunca de la copia que se comprueba.

## Por clave \{#by-key}

| Respuesta | Significado |
|---|---|
| Activa | La licencia es válida. La página muestra a quién se emitió, sus sitios, plataformas y fechas. |
| En preparación | Está pagada, pero la copia aún no está publicada. |
| Revocada | Una copia que use esta clave no tiene licencia. |
| No hay licencia para esta clave | Compárala con el certificado. |
| No es una clave de LifeWell | Las claves comienzan con `LIFEWELL-`. |

## Por sitio web \{#by-website}

| Respuesta | Significado |
|---|---|
| Con licencia | El archivo del sitio identifica una licencia activa que cubre esa dirección. |
| No cubre este sitio | El archivo identifica una licencia de otro sitio. |
| No hay archivo de licencia | El sitio no publica un archivo de licencia de LifeWell. |
| No se pudo acceder | Inténtalo de nuevo en unos minutos. |

La comprobación solo muestra campos públicos. Nunca aparece una dirección de correo ni un precio.

## Dentro de una copia con licencia \{#inside-a-licensed-copy}

La copia comprueba su clave una vez al iniciarse y otra al volver a abrirse. Si la licencia está revocada o
no cubre el sitio, muestra que no está activa. No borra nada de lo que una persona registró, y una caída de
nuestro servicio no impide que la copia funcione.
