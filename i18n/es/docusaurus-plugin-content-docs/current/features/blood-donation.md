---
title: Donación de sangre
description: Un directorio público de donantes, solicitudes que les llegan y una entrega de contacto concedida una sola vez a una persona y que puede retirarse.
keywords: [directorio de donantes de sangre, donación de sangre, solicitud de sangre, lifewell donantes]
topics: [features, people]
sidebar_position: 6
---

# Donación de sangre \{#blood-donation}

## El directorio \{#the-directory}

[`/blood-donors`](https://lifewell.aoneahsan.com/blood-donors) es público. No necesitas una cuenta para consultarlo.

Cada ficha muestra un grupo sanguíneo y una zona general. **No muestra un número de teléfono**. Esa decisión
es parte del diseño, no una función que falte.

## Incluirte como donante \{#listing-yourself}

`/profile/blood-donor` crea una ficha. No se adjunta nada de tu registro de salud: la ficha solo contiene
tu grupo sanguíneo, una zona y si estás disponible en ese momento.

## Solicitudes \{#requests}

Las solicitudes que envías aparecen en `/dashboard/blood-requests`. Llegan a donantes compatibles; no se
difunden a todo el directorio.

## Entrega de los datos de contacto \{#the-contact-release}

Cuando una persona donante decide responder, comparte sus datos de contacto **con una sola persona, una sola vez**.

De eso se desprenden dos decisiones, ambas aplicadas:

- **Puede retirar el acceso.** Si lo retira, los datos desaparecen también de la pantalla de quien hizo la solicitud.
- **No aparecen en la exportación.** Una fila en un archivo descargado no puede limitarse a una vez ni retirarse.
  Quien hizo la solicitud ya vio el contacto en la aplicación; conservarlo en un archivo no fue una decisión de
  la persona donante.

Tu propia ficha y las solicitudes que enviaste sí aparecen en [la exportación](../reference/export-format.md).
El número de otra persona, no.

## Qué no hace \{#what-this-is-not}

LifeWell no organiza donaciones, no comprueba si una persona puede donar y no contacta con servicios de
sangre. Ofrece un directorio y una forma de preguntar. Lo demás ocurre entre dos personas y un hospital.
