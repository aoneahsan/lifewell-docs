---
title: Eliminar tus datos
description: Elimina toda tu cuenta o una de las siete áreas y conserva las demás. Qué elimina cada opción, qué conserva deliberadamente y cuál funciona hoy.
keywords: [eliminar cuenta de lifewell, eliminar mis datos, eliminación según rgpd, eliminar cuenta]
tags: [your-data, privacy]
sidebar_position: 2
---

# Eliminar tus datos \{#delete-your-record}

Ve a `/settings` → **Tus datos**. La opción de exportar aparece antes que la de eliminar, deliberadamente.

## Eliminar tu cuenta \{#delete-your-account}

Esto elimina todos tus registros y la cuenta a la que pertenecen.

El proceso es: **Tus datos** → **Exportar una copia** → **Eliminar cuenta** → escribir `DELETE` para confirmar → cierre de sesión inmediato y eliminación de los registros activos.

No queda un archivo recuperable en la cuenta activa. Las copias de seguridad manuales cifradas pueden conservar datos anteriores hasta su rotación, como explica la página de privacidad. La aplicación envía la solicitud al servicio de eliminación con tu sesión iniciada; no te pide introducir un ID de cuenta. Si no puedes iniciar sesión, la página pública [`/delete-account`](https://lifewell.aoneahsan.com/delete-account) explica cómo pedir ayuda.

## Eliminar un área \{#delete-one-area}

Puedes borrar Salud o Recuerdos y conservar lo demás. La opción se encuentra en `/settings` → **Tus datos** → *Eliminar una sola área*.

- Se ejecuta en **una transacción**. O se confirman juntas todas las tablas, o ninguna. No queda un área eliminada a medias sin saber dónde se interrumpió.
- **Te indica lo que se eliminó**, tabla por tabla, con cantidades.
- Registra la acción en el historial de tu cuenta, para que puedas ver que ocurrió.
- Debes **escribir las palabras** `DELETE HEALTH` o `DELETE MEMORIES`. El servidor comprueba el texto; no depende solo del cuadro de confirmación.

### Una eliminación en cadena que debes conocer \{#one-cascade-worth-knowing-about}

Al eliminar **Personas**, también se borran las etiquetas de fotos que identifican a quienes aparecen en ellas, porque esas etiquetas apuntan a personas que ya no existirán. Se cuentan e informan esas filas en lugar de hacerlas desaparecer sin explicación.

### Personas y Compartir se eliminan por separado \{#people-and-sharing-are-deleted-separately}

Eliminar **Personas** borra tus personas, árboles y lugares, pero no modifica lo que compartes. Eliminar **Compartir** revoca todos los enlaces, termina las conexiones y borra las respuestas pendientes para ti; tus personas permanecen. Limpiar una lista de contactos no debería cortar sin aviso el acceso que concediste a tu médico. Consulta [Compartir](../domains/sharing.md).

### Lo que se conserva deliberadamente al eliminar un área \{#what-deleting-an-area-deliberately-keeps}

| Se conserva | Motivo |
|---|---|
| Notificaciones | El historial de entregas abarca todas las áreas. Eliminar Salud no debe borrar un aviso sobre algo compartido |
| Tu clave de proveedor de IA | Es una credencial de la cuenta, no contenido de un área |
| Tu conexión con Google Drive | Es una credencial activa y una conexión externa. Puedes desconectarla por separado en ajustes |
| Un registro de compra de Play | Pertenece a la cuenta. Eliminarlo podría dejarte sin un derecho de acceso que pagaste |
| La medición de uso de IA | Pertenece a la cuenta y se utiliza para calcular el límite |

## Ocultar no equivale a eliminar \{#hiding-is-not-deleting}

[Desactivar un área](../domains/overview.md#switching-an-area-off) conserva todas sus filas. Eliminarla no conserva ninguna. Son controles distintos en lugares distintos por esa razón.

## A qué no llega la eliminación \{#what-deletion-does-not-reach}

- **Archivos en tu propio Google Drive.** LifeWell guarda una referencia. Al eliminar tus datos, desaparece esa referencia; los archivos permanecen en Drive para que los borres allí. Consulta [Dónde viven tus datos](./where-it-lives.md).
- **Lo que enviaste a otra persona.** Un mensaje enviado también forma parte de su conversación.
- **Filas de auditoría administrativa relativas a tu cuenta.** Quedan después de eliminarla. Identifican una acción, no el contenido de tus registros. Si quien realiza una acción pudiera borrar el registro, este dejaría de ser fiable.
