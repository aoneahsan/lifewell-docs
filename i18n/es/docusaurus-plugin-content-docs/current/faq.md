---
title: Preguntas frecuentes
description: Respuestas sobre costo, privacidad, exportación, uso sin conexión y los límites de LifeWell antes de confiarle los datos de tu vida.
keywords: [preguntas frecuentes de lifewell, lifewell gratis, privacidad de lifewell, exportar datos, eliminar cuenta, plazas familiares, permiso de contactos, favoritos]
tags: [faq]
sidebar_position: 10
---

# Preguntas frecuentes \{#questions-people-ask}

## ¿Es una aplicación de salud? \{#is-it-a-health-app}

No. LifeWell reúne a las personas y los momentos de tu vida. Empiezas por ti, añades a las personas importantes, conservas lo que sabes de ellas y los momentos que comparten. Las demás funciones ayudan a organizar una vida que vaya bien. Hay [siete áreas](./domains/overview.md): personas, recuerdos, vida diaria y compartir; alrededor están salud, mente y etapas de la vida. **Tú** estás en el centro. La salud es una parte, no el propósito principal de LifeWell.

Presentarla como un monitor de salud daría una idea equivocada del producto.

## ¿Cuánto cuesta? \{#what-does-it-cost}

Hay un plan Free y dos de pago en dólares estadounidenses: Pro cuesta $9.99 al mes o $99.90 al año; Family cuesta $8.99 por plaza al mes o $89.90 por plaza al año, con un mínimo de tres plazas. La compra en Android usa Google Play Billing, pero aún no está activada; la aplicación no enlaza a otra caja. Consulta la comparación completa en [Planes](./plans.md).

**Puedes exportar tus datos en cualquier plan, incluso Free.** No deberías pagar para obtener una copia de tu propia vida.

## ¿Qué obtiene una persona con una plaza Family? \{#what-does-a-family-seat-give-the-person-who-holds-it}

Los límites del plan Family y ninguno de tus datos. Una plaza no comparte registros, entradas, personas ni archivos en ninguna dirección. Quien paga solo ve que ocupas una plaza y desde qué fecha. Solo puedes recibirla de alguien con quien ya estés conectado como familiar en LifeWell. Cualquiera de los dos puede terminarla. Si termina el plan, terminan todas sus plazas; lo que exceda los límites de Free pasa a ser de solo lectura. Consulta [Plazas Family](./plans.md#family-seats).

## ¿Puedo obtener una copia de mis datos? \{#can-i-get-my-record-out}

Sí. Elige un intervalo de fechas y descarga los datos en JSON o CSV, o un resumen en PDF. Cada tabla tiene un máximo de 5.000 filas por exportación. [La guía de formatos](./reference/export-format.md) explica qué contiene cada archivo.

El navegador crea el archivo a partir de una lectura autenticada de tu cuenta. La exportación manual no deja otro archivo almacenado en el servidor.

## ¿Puedo eliminarlo todo? \{#can-i-delete-everything}

Puedes eliminar la cuenta activa desde **Configuración → Tus datos** después de confirmar la acción. Las copias de seguridad manuales cifradas pueden conservar datos anteriores hasta su rotación. Si no puedes iniciar sesión, la página pública [`/delete-account`](https://lifewell.aoneahsan.com/delete-account) explica cómo pedir ayuda. Consulta [Eliminar tus datos](./your-data/delete.md).

También puedes eliminar un área y conservar las demás desde **Configuración → Tus datos → Eliminar un área**. La aplicación muestra cuántos elementos se eliminaron de cada tabla. Consulta [Eliminar un área](./your-data/delete.md#delete-one-area).

## ¿Funciona sin conexión? \{#does-it-work-offline}

LifeWell detiene la aplicación al perder la conexión. Si activaste **Seguir trabajando sin conexión**, puedes elegir registrar ciertas mediciones, cambios del ciclo y episodios de síntomas en este dispositivo hasta recuperar la conexión. Las páginas no se guardan para uso sin conexión. Consulta [Uso sin conexión y sincronización](./concepts/offline-and-sync.md).

## ¿Dónde están mis fotos? \{#where-are-my-photos}

En **tu propio Google Drive**, con un permiso que solo alcanza los archivos creados por LifeWell. Guardamos una referencia al archivo, no el archivo. Consulta [Dónde viven tus datos](./your-data/where-it-lives.md).

## ¿Tiene cifrado de extremo a extremo? \{#is-it-end-to-end-encrypted}

No. Tus datos están cifrados durante el tránsito y cuando los guarda el proveedor de la base de datos, pero la base puede leerlos. No vendemos esos datos, no los utilizamos para extraer perfiles ni mostramos publicidad basada en ellos.

## ¿Me insistirá para que registre cosas? \{#will-it-nag-me}

Los avisos de la hora de tomar un medicamento aparecen en la bandeja de LifeWell; no envían notificaciones al teléfono ni correos. Las notificaciones del dispositivo para eventos compatibles necesitan tu permiso. El registro de agua de la aplicación no crea recordatorios para beber. Consulta el canal de cada recordatorio antes de depender de él.

No hay rachas, puntuaciones, clasificaciones, insignias por empezar ni informes semanales que juzguen cómo te fue. Un registro con espacios en blanco sigue siendo un registro.

## ¿Hay una aplicación para iPhone? \{#is-there-an-iphone-app}

No. [iOS se retiró el 16 de julio de 2026](./platforms/ios.md) y volverá cuando exista una cuenta de Apple Developer. La aplicación web funciona en Safari y es la misma aplicación.

## ¿Hay una extensión para el navegador? \{#is-there-a-browser-extension}

Está desarrollada para Chrome y Firefox, pero [todavía no está disponible en ninguna de las dos tiendas](./platforms/browser-extension.md). La extensión guarda los registros de bienestar en el navegador; conectar tu cuenta no los sube.

## ¿Por qué Android solicita acceso a mis contactos? \{#why-does-android-ask-about-my-contacts}

Porque tocaste **Contactos** junto a un número de teléfono, y solo entonces. Android combina la lectura y modificación de contactos en un mismo permiso. LifeWell solo lee el contacto que eliges, su nombre y números; conserva únicamente el número seleccionado y nunca añade, cambia ni elimina contactos. Tu agenda no se sube, busca ni guarda. Si rechazas el permiso, puedes escribir el número. Consulta [Privacidad y seguridad](./concepts/privacy-and-security.md#permissions).

## ¿Quién puede ver la foto de la identificación de otra persona? \{#who-can-see-a-picture-of-somebody-elses-identity-card}

Solo los administradores de LifeWell pueden abrirla para una comprobación, y cada acceso queda registrado. Tú puedes ver que la imagen está guardada, su tamaño y su fecha, pero no la imagen misma. Nunca se muestra a la persona identificada, a tus contactos ni mediante un enlace compartido. Se guarda cifrada en LifeWell, no en tu Google Drive, hasta que la elimines, elimines a esa persona o cierres tu cuenta. Consulta [Personas](./domains/people.md#identity-card-pictures).

## ¿Cómo dejo mis páginas habituales arriba del menú? \{#how-do-i-keep-the-pages-i-use-at-the-top-of-the-menu}

Toca la estrella de la barra superior de cualquier página. Aparece en **Favoritos**, al principio del menú. Puedes guardar hasta 12 en tu cuenta; se pide confirmación antes de quitar una. **Todas las páginas**, al final del menú, muestra el listado completo. Cada página termina con una fila *Más en…* de páginas relacionadas.

## ¿Dónde puedo cerrar sesión? \{#where-is-sign-out}

En el menú del teléfono, bajo tu nombre; al final de la barra lateral en una computadora; en tu perfil; y como primera opción de Ajustes → Seguridad.

## ¿Quién puede ver lo que registro? \{#who-can-see-what-i-record}

Nadie, salvo que [lo compartas](./domains/sharing.md). Un enlace puede incluir un seguimiento, tus medicamentos o un árbol familiar, y nada más. No hay permisos para compartir tu diario, recuerdos, notas o ubicación.

Un administrador tampoco puede leer tus registros personales: la lista de cuentas solo devuelve columnas permitidas y ninguna contiene datos de salud.

## ¿Quién desarrolla LifeWell? \{#who-builds-it}

El equipo de LifeWell. Explica claramente lo que aún no puede hacer, como en gran parte de esta página. Consulta [Quién desarrolla LifeWell](./about/the-developer.md).

## Encontré un problema \{#something-is-wrong}

Escríbenos desde [`/contact`](https://lifewell.aoneahsan.com/contact) o [`/support`](https://lifewell.aoneahsan.com/support).
