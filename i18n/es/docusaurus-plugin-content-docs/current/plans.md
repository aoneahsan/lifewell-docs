---
title: Planes
description: "Free, Pro y Family: qué incluye cada plan, cómo funcionan las plazas Family, los límites gratuitos y las dos formas de pago. Precios mensuales y anuales en dólares estadounidenses."
keywords: [planes de lifewell, precios de lifewell, plan gratis, plan pro, plan familiar, plazas familiares, pagos de google play]
topics: [plans, account]
sidebar_position: 8
---

# Planes \{#plans}

Hay tres niveles. La página [`/plans`](https://lifewell.aoneahsan.com/plans) de la aplicación muestra los valores actuales desde la misma tabla que utiliza el servidor para aplicar los límites.

Los precios están en dólares estadounidenses.

| | Free | Pro | Family |
|---|---|---|---|
| Mensual | $0 | **$9.99** | **$8.99 por plaza** |
| Anual | $0 | **$99.90** | **$89.90 por plaza** |
| Plazas | 1 | 1 | 3 o más, sin límite superior |
| Personas que puedes registrar | 50 | Sin límite | Sin límite |
| Registros | Sin límite | Sin límite | Sin límite |
| Almacenamiento | 5 GB | 50 GB | 200 GB |
| Exportación completa | Sí | Sí | Sí |
| Enlaces compartidos de solo lectura | Sí | Sí | Sí |
| Exportaciones programadas | — | Sí | Sí |
| Consultas activas | Hasta 10 | Sin límite | Sin límite |
| Estimaciones de IA al mes | 50 | 1,000 | 1,500 |

Family comienza con tres plazas: $26.97 al mes por tres. Eliges la cantidad al comprar y después asignas las plazas.

## Plazas Family \{#family-seats}

Una plaza cambia el plan de otra persona. No cambia nada más.

- **A quién puedes asignarla.** A una persona que ya esté conectada contigo en LifeWell como familiar y figure en tu [grupo Familia](./domains/people.md#connections-and-groups). No se puede asignar a desconocidos.
- **No comparte datos.** No puedes ver los registros, las personas ni los archivos de quien usa una de tus plazas; esa persona tampoco puede ver los tuyos. Solo ves que ocupa una plaza y la fecha en que la recibió.
- **Cualquiera de las dos partes puede terminarla** en cualquier momento.
- **Si el plan termina, terminan todas sus plazas.** Cada registro permanece como estaba. Lo que exceda los límites de Free pasa a ser de solo lectura hasta que su titular elija otro plan.

## Cómo se definen los límites de Free \{#how-the-free-tier-is-drawn}

Los niveles no separan el producto por partes. Los límites responden al **costo de ofrecer cada uso**:

- Una fila de la base de datos cuesta muy poco. Por eso Free permite 50 personas, registros sin límite y enlaces compartidos de solo lectura.
- El almacenamiento tiene un costo real, aunque no por cada uso. Free incluye menos espacio en vez de eliminarlo.
- Cada estimación de IA tiene un costo. Por eso tiene el límite más ajustado. **Si aportas tu propia clave, ese límite desaparece en cualquier plan, incluso Free**.
- Las exportaciones programadas implican trabajo recurrente del servidor y están incluidas en los planes de pago.

**Puedes exportar tus datos con cualquier plan.** No deberías tener que pagar para recuperar una copia de tu vida.

## Dos formas de pagar \{#two-ways-to-pay}

### En la web \{#on-the-web}

`/profile/premium` muestra los planes y las instrucciones de pago. El pago se organiza manualmente, sin formulario de tarjeta: pagas, nos avisas y un administrador aplica el plan a tu solicitud con una fecha de vencimiento.

### En Android \{#on-android}

Las compras en Android utilizan **Google Play Billing**, como exige Google para los productos digitales vendidos en esa plataforma. La aplicación no enlaza a otra forma de pago. El panel de Android tampoco muestra precios de la web ni los compara.

:::warning[Play Billing está desarrollado, pero desactivado]
El flujo de compra, la verificación del servidor y las notificaciones de renovación de Google están implementados, compilados y probados con respuestas registradas. **Todavía no se ha realizado una compra real**. La cuenta de servicio de Play no está configurada y el control de la plataforma que activa este flujo permanece desactivado. Hasta completar una compra auténtica en un dispositivo con una compilación de pruebas internas, el pago en Android sigue sin estar comprobado. Solo puede probarse con una compilación firmada por Play.
:::

## Cómo se aplican los límites del plan \{#what-a-plan-actually-gates}

El servidor rechaza las acciones que superan los límites. Un límite no consiste en ocultar un botón: la base de datos rechaza la escritura aunque la solicitud no venga de la aplicación.

Los límites se guardan en la fila del plan y pueden cambiar sin publicar una versión. Las cifras de arriba son las actuales.

## Concesiones y fechas de vencimiento \{#grants-and-end-dates}

Un plan aplicado por un administrador tiene fecha de vencimiento y un motivo registrado. No se puede conceder un plan ya vencido: sería invisible en todas las pantallas y no mostraría ningún error.

Una [recompensa por invitación](./features/referrals.md) amplía un plan de pago en vez de sustituirlo.

## Cambiar o terminar un plan \{#changing-or-stopping}

- **Web:** el plan continúa hasta su fecha de vencimiento. No hay renovación automática que cancelar.
- **Android:** administra o cancela la suscripción desde Google Play, donde se gestiona la compra. LifeWell no muestra un botón de cancelación propio que no pueda controlar la transacción.

Tus datos permanecen igual cuando termina un plan. Los límites de Free se aplican a los registros nuevos; conservas lo que ya registraste y puedes [exportarlo](./your-data/export.md) con cualquier nivel.
