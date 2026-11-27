---
title: Dónde viven tus datos
description: Tus registros se guardan en una base de datos Postgres, tus fotos en tu Google Drive y, si activas el registro sin conexión, algunas entradas rápidas pendientes en tu dispositivo.
keywords: [lifewell sin conexión, almacenamiento en google drive, dónde se guardan mis datos, sincronización, postgres]
topics: [your-data, privacy, concepts]
sidebar_position: 3
---

# Dónde viven tus datos \{#where-your-record-lives}

Se guardan en tres lugares, cada uno para un propósito distinto.

| Datos | Lugar | Quién puede leerlos |
|---|---|---|
| Lo que escribes | Base de datos Postgres alojada en Supabase | Tú y las personas con quienes [lo compartiste](../domains/sharing.md) |
| Fotos y archivos | **Tu propio Google Drive** | Tú, mediante Google |
| Preferencias, sesión y borradores | Tu dispositivo | Tú, en ese dispositivo |

## Cuando se pierde la conexión \{#when-the-connection-drops}

Normalmente, LifeWell escribe tus registros en la base de datos. Al perder la conexión, bloquea la página hasta que una solicitud real se complete. Si activaste **Seguir trabajando sin conexión** en los ajustes del dispositivo, puedes elegir registrar algunas mediciones, cambios del día del ciclo y episodios de síntomas. Esos cambios permanecen en este dispositivo y se envían tras reconectar.

En la práctica:

- Una entrada rápida pendiente no se ve en otro dispositivo hasta que el servidor la acepta.
- Los demás cambios y lecturas del servidor requieren conexión.
- El service worker no guarda las páginas; si cierras la pestaña, no puedes volver a abrir LifeWell sin conexión.

## Las fotos están en tu Drive, no en el nuestro \{#photos-are-in-your-drive-not-ours}

LifeWell solicita a Google un permiso que alcanza **solo los archivos creados por LifeWell**. No puede listar, leer ni modificar el resto de tu Drive. Es una restricción del permiso, no solo una promesa de nuestra parte.

Guardamos una referencia al archivo, no el archivo.

| Si haces esto… | Ocurre esto… |
|---|---|
| Desconectar Drive | Permanecen los pies de foto, fechas, álbumes y etiquetas. Las imágenes dejan de estar accesibles |
| Eliminar un archivo en Drive | La imagen desaparece. LifeWell conserva la referencia que indica que existió |
| Exportar tus datos | Recibes referencias y pies de foto, nunca los bytes de las imágenes |
| Eliminar tu cuenta de LifeWell | Desaparecen las referencias. Los archivos siguen en tu Drive, donde puedes eliminarlos |

Esto implica que tus fotos dependen de una cuenta de Google que controlas tú, en vez de un almacenamiento que controlamos nosotros. Es una elección deliberada.

## La base de datos y la protección entre cuentas \{#the-database-and-what-stops-another-account-reading-you}

Todas las tablas tienen seguridad por filas y cada lectura se ejecuta **con tu identidad**. El navegador no tiene una clave de servicio ni una vía administrativa que la aplicación pueda utilizar por ti.

Cada consulta debe demostrar que te pertenecen los datos mediante sus propios filtros. Postgres filtra las listas según la seguridad por filas en vez de rechazar toda la consulta. Sin el filtro de propietario, una consulta puede devolver menos filas y parecer correcta aunque no lo sea.

Se crearon dos cuentas con filas reales para comprobar estas reglas. Una consulta que devuelve cero filas no demuestra por sí sola que la protección funcione.

## Copias de seguridad \{#backups}

Esta base de datos no dispone de recuperación a un momento concreto. Las copias se hacen manualmente, se comprueban restaurándolas en una base temporal y comparando cantidades de filas, y se conservan fuera del proveedor que aloja los datos activos.

**Tu propia copia es la [exportación](./export.md)**. Está disponible en todos los planes, incluso Free. No deberías pagar para obtener una copia de tus datos.

## Otros datos que salen de tu dispositivo \{#what-else-leaves-your-device}

Tus fotos van a tu cuenta de Google. Los datos de análisis y los informes de errores van a los servicios indicados en [Integraciones](../reference/integrations.md). Ninguno recibe el contenido de tus registros: un informe de error identifica la pantalla y el fallo, no lo que escribiste allí.

No vendemos tus registros y el producto no integra ninguna red publicitaria.
