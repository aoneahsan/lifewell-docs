---
title: El panel de administración
description: Diez pantallas, tres roles, un registro de auditoría que nadie puede editar directamente y controles para cambiar planes e invitaciones sin publicar una versión.
keywords: [administración de lifewell, panel de administración, administración de la plataforma, registro de auditoría, moderación, gestión de usuarios]
topics: [admin]
sidebar_position: 9
---

# El panel de administración \{#the-admin-panel}

`/admin` no forma parte de las pantallas habituales de un miembro. Lo documentamos porque sus decisiones afectan a los miembros: límites de los planes, moderación y qué puede ver un administrador sobre una cuenta.

## Los tres roles \{#the-three-roles}

| Rol | Acceso |
|---|---|
| **Moderador** | Cola de moderación en modo de lectura y listas del personal |
| **Administrador** | Todo lo descrito a continuación |
| **Superadministrador** | Lo mismo, además de conceder roles |

Leer la cola de moderación y resolver las denuncias son **dos permisos distintos**. Un moderador puede revisar la cola, pero no decidir sobre ella. Así, añadir un rol no concede de inmediato poder para ocultar publicaciones.

## Las diez pantallas \{#the-ten-screens}

| Pantalla | Función |
|---|---|
| `/admin` | Resumen |
| `/admin/users` | Listar cuentas, conceder o revocar roles, suspender, restablecer, eliminar y cambiar límites de una cuenta |
| `/admin/plans` | Crear, editar o retirar un plan; resolver solicitudes; conceder planes con vencimiento; métodos de pago; relación con productos de Play y compras del dispositivo |
| `/admin/moderation` | Cola de denuncias y decisión sobre cada una |
| `/admin/verifications` | Aprobar o rechazar comprobaciones de registros profesionales |
| `/admin/inbox` | Mensajes de personas interesadas en participar |
| `/admin/announcements` | Redactar, publicar y finalizar anuncios, incluidas promociones de otros productos |
| `/admin/content` | Catálogo de bienestar y tipos de seguimiento del sistema |
| `/admin/settings` | Ajustes, mantenimiento, indicadores de funciones, dos controles de pago, cifras de invitaciones y dirección de contacto |
| `/admin/audit` | Registro de auditoría |

Las treinta y dos operaciones administrativas detrás de esas pantallas rechazan a los usuarios habituales. La comprobación se hizo ejecutando cada operación con una cuenta que no es administradora.

## Lo que no puede ver un administrador \{#what-an-administrator-cannot-see}

**Tus registros.** Las listas y detalles de cuentas solo devuelven columnas permitidas. No incluyen columnas de salud. Administrar una cuenta no da acceso a su diario.

Hay otras dos limitaciones deliberadas:

- **El token de compra de Play y el recibo completo** no están entre las columnas que puede leer el panel. El primero es una credencial frente a Google; el segundo contiene toda la transacción. Ninguno es necesario para saber cuándo vence el plan.
- **No se pueden listar las invitaciones.** La política de lectura solo permite a cada persona consultar sus propias filas. Por eso, hoy un administrador no puede detectar desde el panel una red de invitaciones abusivas.

## El registro de auditoría \{#the-audit-log}

En `/admin/audit`, las filas llegan **solo** desde las funciones del servidor que realizan acciones. Nadie tiene permiso directo para insertarlas, cambiarlas o eliminarlas. De otro modo, alguien podría falsificar o borrar el registro.

Esto tiene dos consecuencias:

- Al eliminar una cuenta, se escribe **primero** la fila de auditoría. Si falla esa escritura, no se elimina la cuenta.
- Las filas de auditoría permanecen después de eliminar la cuenta a la que se refieren. Describen una acción, no conservan el registro sobre el que se actuó.

## Decisiones del panel que afectan a un miembro \{#things-the-panel-does-that-a-member-feels}

- **Los límites de los planes son datos de la base, no constantes del código.** Pueden cambiar sin publicar una versión. El panel impide guardar un plan de pago peor que Free; la base comprueba esta condición en la misma transacción.
- **Cada concesión de plan tiene vencimiento y motivo.** Se rechaza un plan que ya venció.
- **Cada decisión de moderación incluye una nota.** El autor y quien denunció reciben versiones distintas.
- **Cada comprobación identifica el registro profesional consultado.** Una afirmación sin registro solo puede rechazarse.
- **Cada cambio de límites para una cuenta incluye una nota** que permite entenderlo y revisarlo después.

## Dos controles con un alcance limitado \{#two-controls-that-do-less-than-they-look-like}

Conviene conocer sus límites:

- **Desactivar un indicador de función no bloquea escrituras.** Quita la opción del menú y su pantalla, pero no es una medida de seguridad.
- **El modo de mantenimiento es informativo.** Cambia lo que muestra el producto, pero no cierra la base de datos.

## Una operación sin pantalla \{#the-one-thing-with-no-screen}

Anular una invitación requiere ejecutar una función del servidor directamente contra la base de datos. La función exige un motivo para que la anulación pueda entenderse y revisarse.
