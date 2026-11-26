---
title: Exportar todos tus datos
description: Obtén una copia completa de tus datos de LifeWell en JSON, CSV o PDF. El archivo se crea en tu dispositivo y los formatos están documentados campo por campo.
keywords: [exportar datos de lifewell, exportar datos de salud, descargar mis datos, exportación json csv pdf]
tags: [your-data, export]
sidebar_position: 1
---

# Exportar todos tus datos \{#export-everything}

Puedes hacerlo desde `/health/export` o desde **Exportar todo** en el menú principal.

Un registro debe poder leerse de nuevo. Esta función te permite llevártelo.

## Los tres formatos \{#the-three-formats}

| Formato | Archivo | ¿Completo? | Uso recomendado |
|---|---|---|---|
| **JSON** | `lifewell-export-<date>.json` | **Sí:** incluye todo | Leerlo o importarlo en otro lugar |
| **CSV** | `lifewell-export-<date>.zip` | **Sí:** un archivo por tabla | Abrirlo en una hoja de cálculo |
| **PDF** | `lifewell-export-<date>.pdf` | **No, deliberadamente** | Entregarlo a un profesional de salud |

El PDF omite datos a propósito. [Formato de los archivos de exportación](../reference/export-format.md) detalla los tres tipos campo por campo, incluidos los datos que no aparecen en PDF y la razón.

## El archivo se crea en tu dispositivo \{#the-file-is-built-on-your-device}

El navegador genera el archivo a partir de una sola lectura. No se prepara nada en un servidor ni se guarda una copia adicional de tus datos durante la descarga.

En concreto, **tus datos no pasan por nuestros servidores mientras obtienes el archivo**.

El trabajo ocurre en la pestaña. Si sales de la página, la exportación se cancela. No queda ningún archivo incompleto guardado en el servidor.

## Elegir un intervalo de fechas \{#choosing-a-date-range}

Algunas filas corresponden a un día; otras explican el contexto de esas filas.

- **Filas con fecha:** una medición, comida, dosis o evento del calendario respeta el intervalo elegido.
- **Filas permanentes:** medicamentos, condiciones, comidas guardadas u objetivos de seguimiento siempre se incluyen, aunque se hayan creado antes del intervalo.

Si se omitieran las filas permanentes, podrías recibir dosis sin los medicamentos a los que pertenecen. Eso se leería como una pérdida de datos.

## Límite de filas \{#the-row-ceiling}

Cada tabla exporta como máximo **5,000 filas**. Si llega al límite, el propio encabezado del archivo lo indica; no tendrás que descubrir más adelante que faltaba un año de datos.

## Exportaciones programadas \{#scheduled-exports}

Con un plan de pago, `/health/export` puede ejecutarse automáticamente cada semana, en domingo o miércoles; cada mes, el día primero; o cada trimestre. Eliges cuántas copias conservar: las últimas cuatro, las últimas ocho o todas.

Las exportaciones anteriores aparecen en la página con su formato, tamaño y cantidad de filas.

## Trabajos \{#jobs}

Cada exportación también aparece en `/jobs`, accesible al final del menú junto a *Exportar todo*. Allí también se muestra una grabación que la función de dictado está procesando. Cada fila dice **En curso**, **Listo** o **No se completó**, con una acción: *Abrir* o *Intentar de nuevo*.

Cuando una exportación está lista, recibes una notificación. **Abrir** te lleva directamente al archivo. Si falla, no se envía notificación; en Trabajos figura como *No se completó*.

## Si prefieres eliminar los datos \{#deleting-instead}

Exportar y eliminar están en la misma pantalla, en ese orden. Consulta [Eliminar tus datos](./delete.md).
