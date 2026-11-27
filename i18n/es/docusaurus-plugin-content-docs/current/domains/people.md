---
title: Personas
description: "El punto de partida de LifeWell: tú, las personas importantes y lo que sabes de ellas. Árboles familiares y laborales, conexiones, lugares, mensajes, comunidad, profesionales y donación de sangre."
keywords: [árbol familiar de lifewell, árbol laboral, contactos, selector de contactos, foto de identificación, comunidad, chats, profesionales, donantes de sangre]
topics: [domains, people]
sidebar_position: 2
---

# Personas \{#people}

Aquí empieza LifeWell. Comienzas por ti y añades a las personas importantes: familia por un lado, trabajo por otro. Guardas lo que sabes de ellas y los momentos que comparten. Es el grupo de pantallas más amplio del producto y la razón por la que LifeWell no es solo un seguimiento de salud.

## Registros de personas \{#people-1}

`/people` guarda quiénes son las personas de tu vida, qué relación tienen contigo y datos que de otro modo quedarían repartidos por varias aplicaciones. `/people/import` permite importar una lista sin escribir cada nombre.

### Elegir un número de tus contactos \{#choosing-a-number-from-your-contacts}

En Android, cada campo de teléfono tiene un botón **Contactos**. Al tocarlo, el teléfono muestra tu agenda. Eliges a una persona y LifeWell solo lee su nombre y números; conserva el número que seleccionaste. Android reúne lectura y modificación de contactos en un mismo permiso, solicitado únicamente cuando tocas Contactos. LifeWell nunca añade, cambia ni elimina contactos. La agenda no se sube, busca ni guarda. Si deniegas el permiso, puedes escribir el número; todos los campos funcionan así.

### Fotos de identificaciones \{#identity-card-pictures}

En el registro de una persona puedes añadir el frente y reverso de su identificación en JPEG, PNG o WebP, hasta 5 MB por lado. Un número puede escribirse mal; la foto sirve para comprobarlo si alguna vez se cuestiona una coincidencia.

- **Dónde se guarda:** cifrada en LifeWell y no en tu Google Drive. Es el único tipo de foto que se almacena así.
- **Quién puede abrirla:** solo los administradores de LifeWell para una comprobación. Cada acceso queda en el registro administrativo. Tú puedes ver que existe, su tamaño y la fecha en que la añadiste, pero no la imagen misma.
- **Quién nunca la ve:** la persona identificada, tus contactos y quienes abran un enlace compartido.
- **Cómo se elimina:** quitarla, borrar a esa persona o eliminar tu cuenta la retira del almacenamiento activo; las copias anteriores en respaldos manuales cifrados permanecen hasta su rotación.

### Direcciones de correo pendientes \{#email-needed}

El filtro **Falta correo** de Personas (`/people?filter=email-needed`) muestra a quienes no tienen dirección y no fueron marcados como personas sin correo. Si importas solo nombres, esas personas aparecen aquí. Al indicar que alguien no tiene correo, sale de la lista. Cuando no queda nadie pendiente, la página lo explica: *Todas las personas tienen correo o has indicado que no tienen uno*. La dirección sirve para enviar [solicitudes de conexión](#when-somebody-invites-you).

## Árboles \{#trees}

- **`/people/family-tree`:** vínculos familiares.
- **`/people/work-tree`:** compañeros y relaciones laborales.

Ambos utilizan los mismos registros de personas y relaciones. Quien aparece en los dos árboles sigue siendo una sola persona en la base.

## Conexiones y grupos \{#connections-and-groups}

- **`/people/connections`:** personas que usan LifeWell y aceptaron conectarse contigo. En el menú aparece en [Compartir](./sharing.md) como *Compartir con contactos*.
- **`/people/family-groups`:** un grupo familiar o del hogar. Las plazas Family solo se pueden dar a alguien ya conectado contigo aquí. Una plaza no comparte datos; consulta [Plazas Family](../plans.md#family-seats).
- **`/people/journeys`:** un viaje o período compartido, con sus propias fotos y notas.

Invitar a alguien a conectar genera una sola solicitud. Si el registro no tiene correo, la dirección es tuya o has enviado demasiadas solicitudes, la aplicación explica qué ocurrió. [Falta correo](#email-needed) muestra a quienes aún necesitan una dirección.

### Cuando alguien te invita \{#when-somebody-invites-you}

Si alguien te añade a sus personas con tu correo antes de que tengas cuenta y pulsa **Invitar**, recibes un correo con un enlace. Al abrirlo, crear tu cuenta y terminar los primeros pasos, la invitación permanece: la solicitud de conexión te espera.

| Quién | Aviso | Qué indica | Acción |
|---|---|---|---|
| Tú | *[su nombre] te añadió como familiar en LifeWell* | Su solicitud de conexión te espera | *Revisar solicitud* |
| Quien te invitó | *[tu nombre] se unió a LifeWell* | La persona invitada ya tiene cuenta | *Ver su página* |
| Quien te invitó, si aceptas | *[tu nombre] aceptó tu solicitud* | Ya están conectados | *Qué puede ver* |

No se comparte nada hasta que aceptas. También puedes rechazar la invitación.

## Lugares \{#places}

`/maps` reúne nombres de lugares guardados y vistas que relacionan recuerdos, notas, personas y eventos con esos nombres; no deduce coordenadas de los registros. `/people/location-tracking` y `/people/location-history` explican otra función opcional, desactivada inicialmente. Esta versión no tiene grabador en segundo plano: el interruptor guarda una preferencia, no puntos de ubicación.

:::note[No se comparte la ubicación entre cuentas]
Los lugares guardados y el historial de ubicación son tuyos. Un enlace puede mostrar un seguimiento, tus medicamentos o un árbol, y nada más. El tipo de la base de datos que define qué puede compartirse tiene esas tres opciones; la ubicación no aparece. La restricción se aplica a los datos, no solo a la pantalla.
:::

## Mensajes \{#messages}

`/chats` permite conversaciones entre dos personas o grupos pequeños de cuentas conectadas. Una conversación con un [profesional](../features/professionals.md) usa el mismo sistema con otra categoría.

La exportación incluye **los mensajes que enviaste tú**. Las palabras de otra persona pertenecen a su propio registro.

## Comunidad \{#community}

`/community` contiene grupos con publicaciones y respuestas. El catálogo de grupos es compartido: no creas grupos nuevos. Todas las publicaciones disponen de una vía para denunciarlas.

Puedes bloquear a alguien. Tu elección de no ver a esa persona forma parte de tus datos y aparece en la exportación, por si algún día quieres conservar una copia.

## Profesionales \{#professionals}

`/professionals` es un directorio de profesionales que crearon sus propias fichas, con comprobaciones frente a un registro. Consulta [Profesionales](../features/professionals.md).

## Donación de sangre \{#blood-donation}

`/blood-donors` es un directorio público. Puedes añadir tu ficha desde `/profile/blood-donor`. Consulta [Donación de sangre](../features/blood-donation.md).

## Compartir \{#sharing}

Todo lo anterior sigue un modelo de acceso propio: [Compartir](./sharing.md). Ninguna otra cuenta puede verlo salvo que tú le hayas concedido acceso.
