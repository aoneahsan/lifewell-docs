---
title: El programa de invitaciones
description: Invita a alguien. Cuando confirma su registro, obtienes puntos, una insignia y, al alcanzar el umbral, un mes de un plan de pago. Cada cifra se configura desde la administración.
keywords: [invitaciones de lifewell, invitar a un amigo, recompensas por invitación, mes gratis]
tags: [features, plans]
sidebar_position: 8
---

# El programa de invitaciones \{#the-referral-programme}

Recibes un código. Alguien se registra con él. Cuando se **confirma** su registro, obtienes puntos y una insignia. Al alcanzar el umbral, recibes un mes de un plan de pago.

## Qué significa «confirmado» \{#what-confirmed-means}

La confirmación requiere algo más que abrir un enlace: la cuenta invitada debe existir **y** tener una dirección de correo verificada. El servidor la confirma cuando se cumplen ambas condiciones.

Es una medida deliberada: la confirmación puede otorgar acceso a un plan de pago. Una invitación premiada por un clic solo recompensaría la apertura de un enlace.

## Reglas que aplica la base de datos \{#the-rules-the-database-enforces}

- **Una persona solo puede registrarse como invitada una vez.** Eliminar una cuenta y volver a crearla no genera nuevas recompensas.
- **No puedes invitarte a ti mismo.** El formulario lo explica y la base de datos lo comprueba.
- **El navegador no puede activar la entrega de recompensas.** Si pudiera confirmar por sí mismo una invitación, también podría conceder el premio.

## Qué puedes saber sobre las personas invitadas \{#what-you-can-see-about-the-people-you-invited}

Un número y un estado. Nunca un nombre.

La persona invitada no aparece identificada ante quien la invitó. Esta protección se aplica a los permisos de las columnas: la consulta autorizada ni siquiera devuelve su identificador.

## Un mes que se suma al plan \{#a-month-that-extends-rather-than-replaces}

Si ya tienes un plan de pago cuando recibes la recompensa, el mes se añade al final del período vigente. No sustituye el tiempo que pagaste.

## Cada cifra se configura desde la administración \{#every-number-is-an-admin-setting}

Los puntos por registro confirmado, la insignia, el umbral, el número de meses, el plan y el límite mensual son ajustes de la plataforma. Pueden cambiar sin publicar una nueva versión. El texto que ves refleja los valores vigentes.

Los umbrales y límites exactos solo se muestran a quienes han iniciado sesión. Son datos que facilitarían el abuso del programa si fueran públicos.

## Situación actual \{#where-it-stands-today}

:::warning[La pantalla para miembros todavía está en desarrollo]
La parte del servidor ya funciona: el registro de invitaciones, la confirmación, la concesión de puntos y recompensas, la ampliación del plan de pago y los controles de administración de las siete cifras. **Aún no existe la pantalla donde podrías consultar tu código y el número de invitaciones.** Por ahora, no hay ninguna pantalla de la aplicación que puedas abrir para hacerlo.
:::

Cuando esté disponible, las invitaciones y sus recompensas aparecerán en [la exportación](../reference/export-format.md) como **Personas que invitaste** y **Recompensas de tus invitaciones**.
