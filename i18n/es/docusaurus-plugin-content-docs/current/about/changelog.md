---
title: Historial de cambios
description: LifeWell 3.0 (versión 3.22.0) fue una reconstrucción completa con una base nueva. Las versiones 3.23 a 3.25 llegaron en octubre de 2026. Cambios, eliminaciones, correcciones y reinicio de datos.
keywords: [lifewell 3.0, lifewell 3.22.0, historial de cambios, notas de versión, novedades]
topics: [about, changelog]
sidebar_position: 2
---

# Historial de cambios \{#changelog}

La aplicación 2.x se reconstruyó por completo. Sigue siendo LifeWell, con código nuevo y otra base de datos.

:::warning[3.22.0 reinicia tus datos]
**IMPORTANTE: LifeWell 3.0 comienza desde cero. Los datos registrados en versiones anteriores no se trasladan. Esta versión utiliza un sistema de cuentas nuevo y no migra tus entradas previas.**

Se reemplazó el backend **sin vía de migración**. Los datos de 2.x no pasan a la versión nueva. Fue una decisión deliberada cuando la aplicación todavía no tenía usuarios reales. La explicamos claramente porque, desde dentro, un reinicio previsto puede parecer un fallo grave.

Si tienes datos en 2.x, [expórtalos antes de actualizar](../your-data/export.md).
:::

Entre las novedades principales:

- Reconstrucción completa para que LifeWell sea más rápido y ligero, organizado alrededor de las personas y momentos de tu vida: familia, recuerdos y vida diaria, con salud, mente y etapas de la vida a su alrededor.
- Fotos y archivos en tu propio Google Drive, nunca en nuestros servidores.
- Inicio de sesión con Google en todos los dispositivos.

A continuación se explican los cambios con más detalle.

## 29 de octubre de 2026 \{#29-october-2026}

- **La página inicial aparece antes en el teléfono.** Sus estilos se incluyen en la página, así que la primera pantalla ya no espera un archivo aparte. La pausa más larga del arranque es menor.
- **El enlace al perfil indica de quién es.** Los lectores de pantalla anuncian *«Tu perfil»* junto a tus iniciales. Los enlaces que abren otra pestaña también lo anuncian.
- **Se aplica una política de seguridad del navegador en todas las páginas.** Enumera los servicios desde los que LifeWell puede cargar scripts, conexiones y marcos; el navegador rechaza los demás.
- **Las páginas privadas no se presentan a los buscadores como la portada.** Una dirección interna indica que no debe indexarse.
- **Se limpia una etapa inválida de la dirección.** Si abres *Cómo funciona LifeWell* con un número que no corresponde a sus seis etapas, se abre la primera y se quita el número incorrecto.

## 27 y 28 de octubre de 2026 \{#27-and-28-october-2026}

- **Las fotos de identificaciones se guardan y eliminan correctamente.** Al añadir el frente y reverso de la identificación de una persona se guardan ambas imágenes. Al quitarla se borran. Consulta [Fotos de identificaciones](../domains/people.md#identity-card-pictures).
- **Las plazas Family envían avisos.** Al dar o quitar una plaza a un familiar conectado, se notifica en su bandeja.
- **Los nombres demasiado largos muestran un mensaje.** El límite es de 60 caracteres. Un nombre mayor indica: *«Eso supera los 60 caracteres. Un nombre de pila o Ammi es suficiente»*.
- **La página de permisos identifica tres grupos más** que Android concede al instalar: contador en el icono, recepción de notificaciones y compras de Google Play. Consulta [`/permissions`](https://lifewell.aoneahsan.com/permissions).
- **Nuevo icono.** El icono, la pestaña del navegador y la pantalla de inicio de Android muestran la marca de la cabecera. La aplicación Android lo recibirá en su próxima actualización de Google Play.

## Octubre de 2026: versiones 3.23 a 3.25 \{#october-2026-323-to-325}

La versión 3.25.0 está en Google Play y en la web. La web se actualiza sola; Android recibe los mismos cambios mediante actualización inalámbrica.

- **Primero las personas.** La portada dice *«Las personas y los momentos de tu vida, en un solo lugar»*. Los menús empiezan por ti, familia, trabajo y recuerdos. En el teléfono, la barra inferior muestra Hoy, Personas, Dictar, Recuerdos y Más. Consulta [Personas](../domains/people.md).
- **Recorridos en las páginas importantes.** Un botón en la cabecera abre el recorrido y cada página muestra una indicación inicial una sola vez. Puedes saltarlo, cerrarlo o ir a cualquier etapa en teléfono o computadora. [`/how-lifewell-works`](https://lifewell.aoneahsan.com/how-lifewell-works) guía por toda la aplicación con pantallas reales. Consulta [Recorridos y guía](../getting-started/tours-and-walkthrough.md).
- **Trabajos.** Las exportaciones y grabaciones que procesa el dictado aparecen en `/jobs`. Recibes un aviso cuando una exportación está lista. Consulta [Trabajos](../your-data/export.md#jobs).
- **Primera pantalla más rápida.** Las páginas públicas llegan ya dibujadas antes de ejecutar scripts.
- **Compartir una cita en un chat.** *Compartir algo de mi registro* envía un enlace a una cita próxima, nunca una copia de todos tus datos. Consulta [Compartir una cita](../features/community-and-chats.md#sharing-an-appointment-in-a-chat).
- **La página de permisos menciona el micrófono.** En la web, el navegador lo solicita solo mientras grabas con el dictado. Consulta [`/permissions`](https://lifewell.aoneahsan.com/permissions).
- **La IA sigue disponible cuando se agota temporalmente el crédito gratuito.** El crédito se distribuye por horas. Si no está disponible, responde un modelo de pago de bajo costo dentro del límite normal de tu plan, sin conceder ni cobrar uso adicional. La [política de privacidad](https://lifewell.aoneahsan.com/privacy) enumera los servicios de IA.

## 25 de septiembre de 2026 \{#25-september-2026}

- **Precios en dólares estadounidenses.** Pro cuesta $9.99 al mes o $99.90 al año. Family cuesta $8.99 por plaza al mes o $89.90 por plaza al año, con mínimo de tres plazas y sin máximo. Eliges cuántas compras y luego las asignas a personas ya conectadas contigo como familiares. La plaza no comparte datos, cualquiera de las partes puede terminarla y todas terminan al vencer el plan. El pago en Android usa Google Play Billing, pero sigue desactivado hasta las pruebas en dispositivo y tienda; la aplicación no enlaza a otra caja. Consulta [Planes](../plans.md#family-seats).
- **Elegir un número de tus contactos.** Un botón *Contactos* junto a cada campo de teléfono permite seleccionar uno. Android solicita lectura y modificación juntas. LifeWell solo lee el contacto elegido y no cambia la agenda. Consulta [Personas](../domains/people.md#choosing-a-number-from-your-contacts).
- **Fotos de la identificación de una persona:** frente y reverso, cifrados en LifeWell y accesibles solo a administradores para una comprobación. No se muestran a ti, a la persona identificada ni en enlaces. Consulta [Personas](../domains/people.md#identity-card-pictures).
- **Menú más breve.** La estrella guarda hasta 12 páginas en *Favoritos*. *Todas las páginas* aparece al final del menú y cada página ofrece *Más en…*. *Cerrar sesión* está bajo tu nombre en el teléfono, al final de la barra lateral en computadora, en tu perfil y al inicio de Ajustes → Seguridad.
- **Una solicitud para conectar con alguien.** Si no se puede enviar porque falta el correo de esa persona, es tu propia dirección o has solicitado demasiadas veces, la aplicación explica cuál es la causa.

## Los dos números de versión \{#the-two-version-numbers}

La ficha de la tienda llamó al lanzamiento **LifeWell 3.0**. La compilación llevó la versión **3.22.0**. Eran el mismo lanzamiento.

El número central del nombre de versión coincide con el código de versión de Android: en ese lanzamiento fue 22. Por eso debía llamarse 3.22.0; la compilación se detenía si no coincidían. Las notas de cada versión aparecen en la [ficha de Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell).

## Cambio de backend \{#the-backend-changed}

Se pasó de la base documental de 2.x a Postgres.

La versión 2.x agotó la cuota diaria gratuita de lecturas y dejó de funcionar durante un día para sus usuarios hasta que se restableció. Además, compartir una parte de los datos con una persona concreta requiere permisos por fila. Postgres los aplica dentro de la base; antes había que coordinar un archivo de reglas con cada consulta.

El resultado: no se agota una cuota de lecturas, todas las listas tienen un límite aplicado en la base de datos y las reglas de acceso se aplican donde viven los datos.

## Un almacén para todos los seguimientos \{#one-store-behind-every-tracker}

`/tracking`, `/health/water` y la acción rápida del panel escribían antes la misma cifra en lugares distintos y podían dejar de coincidir. Ahora son tres vistas de un solo almacén. Un vaso registrado en una aparece de inmediato en las demás.

## Novedades de aquel lanzamiento \{#new-in-this-release}

- **[Calendario y citas](../features/calendar-and-appointments.md)** con una lista en cada cita.
- **[Recordatorios](../features/reminders.md)** entregados por Android, con tres controles generales y horas de silencio por dispositivo.
- **[Comunidad y chats](../features/community-and-chats.md)** con grupos, publicaciones, respuestas, mensajes, bloqueos y denuncias que no revelan al autor quién las envió.
- **[Profesionales](../features/professionals.md)** con comprobaciones que afirman exactamente una cosa.
- **[Donación de sangre](../features/blood-donation.md)** con datos de contacto que se muestran una vez y pueden retirarse.
- **[Lista de compras](../features/shopping-list.md)** compartible como texto.
- **[Seis interruptores de áreas](../domains/overview.md#switching-an-area-off)** para ocultarlas sin eliminar datos.
- **[Compartir](../domains/sharing.md)**, la séptima área y la única sin interruptor: un enlace puede mostrar un seguimiento, medicamentos o un árbol con el nivel que elijas, en una pestaña por elemento.
- **[Pantallas según el perfil](../getting-started/first-run.md#the-one-answer-that-changes-what-you-see)**: una respuesta determina si aparecen seis pantallas de etapas de la vida.
- **[Exportación en tres formatos](../your-data/export.md)** creada en tu dispositivo, con exportaciones programadas en planes de pago.
- **[Panel de apariencia](../concepts/appearance.md)** con ocho ajustes aplicados antes de mostrar la página.
- **[Panel de administración](../admin.md)** con diez pantallas y un registro de auditoría que nadie puede editar directamente.
- **[Programa de invitaciones](../features/referrals.md)**, en su parte del servidor.

## Funciones retiradas de aquel lanzamiento \{#removed}

- **iOS.** Se retiró el 16 de julio de 2026 porque no había cuenta de Apple Developer. Consulta [iOS](../platforms/ios.md).
- **La extensión del lanzamiento 3.0.0.** Quedó fuera de esa versión. Desde entonces se desarrolló una extensión complementaria para Chrome y Firefox, aún sin publicar en ninguna tienda. Consulta [Extensión del navegador](../platforms/browser-extension.md).
- **Cifras inventadas de popularidad en `/health-tools`.** La página 2.x mostraba volúmenes de búsqueda sin fuente para ordenar las herramientas. Esas cifras se retiraron.
- **Calculadoras duplicadas por ZTools.** Diez direcciones redirigen allí y cuatro herramientas permanecieron porque ZTools no las ofrece. Consulta [Herramientas](../features/tools.md).

## Correcciones de esta documentación \{#corrections-to-this-documentation}

Algunas afirmaciones de la documentación 2.x sobre el producto eran erróneas. Las corregimos de forma explícita:

| Afirmación anterior | Situación real |
|---|---|
| `/feed` es una red social | Es el **canal público y legible del blog**. LifeWell no tiene un canal social general. [Direcciones](../reference/addresses.md) |
| Firebase Analytics está prohibido y sustituido por Sentry y Amplitude | Google Analytics 4 **es** la propiedad de análisis de Firebase y funciona junto con Amplitude, Clarity y Sentry. [Servicios externos](../reference/integrations.md) |
| Las actualizaciones inalámbricas solo estaban previstas | Los paquetes firmados de Native Update están integrados en instalaciones Android compatibles. [Android](../platforms/android.md#over-the-air-updates) |

El resto de la documentación 2.x hablaba de la antigua base documental, una aplicación para iPhone, una extensión y una biblioteca de componentes que la reconstrucción ya no utiliza. Se eliminó en lugar de parchearla.

## Funciones todavía en desarrollo \{#not-built-yet}

Estas son las funciones que aún no están listas:

| Función | Estado |
|---|---|
| Notificaciones push | Suscripción de recepción para avisos generales del equipo; sin push automático por eventos de la cuenta |
| Búsqueda general | La consulta existe; la página es una pantalla provisional declarada |
| Pantalla de invitaciones para miembros | El servidor funciona; no hay una pantalla con tu código |
| Google Play Billing | Implementado y probado con respuestas registradas; sin configurar y desactivado |
