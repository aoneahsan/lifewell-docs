---
title: Tokens de acceso y autenticación
description: "Cómo demuestra un programa o aplicación que puede leer tus datos de LifeWell: permisos de lectura, escritura y eliminación, plazo de 10 minutos para volver a mostrar un token, OAuth, límites y errores."
keywords: [token de acceso de lifewell, autenticación api de lifewell, oauth de lifewell, permisos api, límites de solicitudes]
topics: [developers, api, security]
sidebar_position: 2
last_update:
  date: 2026-11-19
  author: El equipo de LifeWell
---

# Tokens de acceso y autenticación \{#access-tokens-and-authentication}

Un token de acceso de LifeWell es una clave secreta larga que creas en **Ajustes → Otras aplicaciones**. Se envía en cada solicitud a la API como `Authorization: Bearer <token>`. Tiene los permisos y la fecha de vencimiento que elegiste, y puedes revocarlo con un toque. Una aplicación que quiera conectarse en tu nombre utiliza OAuth; no tienes que entregarle un token.

## ¿Cómo creo un token? \{#how-do-i-create-a-token}

1. Abre **Ajustes → Otras aplicaciones → Tokens de acceso** y elige **Nuevo token**.
2. Ponle un nombre reconocible, como *programa del calendario de la cocina* en vez de *token 1*.
3. Elige sus permisos y fecha de vencimiento.
4. LifeWell lo muestra una vez con un botón para copiarlo. Guárdalo en un lugar seguro antes de cerrar el panel.

Después, la lista muestra el nombre, los permisos, los primeros caracteres, la fecha de creación y el último uso de cada token. Nunca muestra el token completo. LifeWell te envía un correo cuando se crea uno, para que puedas detectar uno que no creaste.

## ¿Puedo volver a ver un token? \{#can-i-see-a-token-again}

Sí, durante los **10 minutos posteriores al inicio de sesión**. Elige **Mostrar** en su fila:

- **Iniciaste sesión hace menos de 10 minutos:** se muestra el token.
- **Ha pasado más tiempo:** LifeWell te ofrece **Iniciar sesión de nuevo** y luego te devuelve a la misma fila.
- **Activaste el inicio en dos pasos:** también debes introducir un código de tu aplicación de autenticación, incluso dentro de los 10 minutos.

Mantener la sesión abierta durante días es cómodo, pero no demuestra quién está frente a una computadora a la que alguien más pudo acceder. El inicio reciente comprueba tu identidad. Puedes mostrar un token diez veces por hora como máximo; cada acceso se anota en tu cuenta. Nunca se envía un token por correo.

## ¿Qué significan los permisos? \{#what-do-the-scopes-mean}

Cada parte de tus datos puede tener hasta tres permisos:

| Permiso | Qué permite al token |
|---|---|
| `<resource>:read` | Leer esa parte de tus datos |
| `<resource>:write` | Añadir y modificar datos en ella |
| `<resource>:delete` | Eliminar datos de ella |

`account:read` permite consultar los datos de tu propia cuenta. Los recursos y nombres exactos de permisos figuran en [OpenAPI](./api.md#where-is-the-full-reference).

**Eliminar nunca queda incluido automáticamente.** Escribir no permite borrar. Las casillas de eliminación se muestran aparte y desmarcadas. Los permisos de un token no se amplían después de crearlo: si necesitas más, crea otro y revoca el anterior. Ningún token puede tener permisos de administración.

## ¿Cuánto dura un token? \{#how-long-does-a-token-last}

Eliges **30, 90 o 365 días**. LifeWell te avisa por correo siete días antes del vencimiento. Después, el token deja de funcionar y las solicitudes responden `401`.

## ¿Cómo reemplazo o revoco un token? \{#how-do-i-replace-or-revoke-a-token}

- **Rotar** crea un token nuevo. El anterior sigue funcionando durante 24 horas para que puedas cambiarlo en tu programa; después se revoca. Hasta entonces, ambos figuran en la lista.
- **Revocar** lo desactiva de inmediato. La siguiente solicitud responde `401`. Debes pulsar dos veces para confirmar; no hay cuadro de diálogo.

Al eliminar tu cuenta de LifeWell también se revocan todos tus tokens, aplicaciones conectadas, webhooks y canales.

## ¿Cómo se conecta una aplicación sin recibir mi token? \{#how-does-an-app-connect-without-a-token}

Utiliza OAuth 2.1, el mismo mecanismo de inicio que usan los asistentes de IA. La aplicación te lleva a la página de consentimiento `https://lifewell.aoneahsan.com/oauth/consent`, que muestra:

- el nombre de la aplicación y la dirección a la que te devolverá;
- la cuenta de LifeWell que conectarás;
- lo que solicita, descrito con frases claras y agrupado en lectura, escritura y eliminación. Cada permiso tiene su casilla; las de eliminación empiezan desmarcadas;
- **Aprobar** y **Denegar**, uno junto al otro.

Si activaste el inicio en dos pasos, aprobar requiere un código. Después, la aplicación aparece en **Ajustes → Otras aplicaciones → Aplicaciones conectadas**, donde puedes cambiarle el nombre o revocarla. Al revocarla, pierde acceso en la siguiente solicitud, sin esperar a que venza su sesión. Consulta [Asistentes de IA (MCP)](./mcp.md#what-does-the-consent-page-ask).

## ¿Cuáles son los límites de solicitudes? \{#what-are-the-rate-limits}

Cada token y aplicación conectada puede hacer 120 solicitudes por minuto. Además, toda tu cuenta comparte un límite diario según el plan: 5,000 en Free y 50,000 en Pro o Family. Crear más tokens no aumenta ese máximo. Ajustes → Otras aplicaciones muestra el límite y el consumo de hoy. Cada respuesta incluye:

| Encabezado | Significado |
|---|---|
| `RateLimit-Limit` | Solicitudes permitidas en el período actual |
| `RateLimit-Remaining` | Solicitudes restantes |
| `RateLimit-Reset` | Segundos hasta el siguiente período |

Al superar el límite, la API responde `429` con `Retry-After`. Espera ese número de segundos antes de volver a intentarlo.

Si envías muchas solicitudes simultáneas, el alojamiento puede responder `546` antes de que LifeWell las reciba. Envíalas una detrás de otra o en grupos pequeños y, si recibes `546`, reintenta tras un segundo.

## ¿Cómo es un error? \{#what-does-an-error-look-like}

Todas las rutas utilizan el mismo formato:

```json
{
  "error": {
    "code": "reauth_required",
    "message": "Sign in again to see this token.",
    "details": { "max_age_seconds": 600 },
    "correlation_id": "…"
  }
}
```

Programa tu integración según `code`. `message` está dirigido a personas y puede cambiar de redacción. Si nos escribes por una solicitud fallida, incluye `correlation_id`; permite encontrar esa solicitud y nada más.

| Estado | Significado habitual |
|---|---|
| `401` | Falta el token, es incorrecto, fue revocado o venció |
| `403` | Faltan permisos (indicados en `details`) o debes iniciar sesión de nuevo |
| `404` | No existe ese identificador en tus datos, incluidos los datos de otra persona |
| `429` | Se alcanzó un límite; consulta `Retry-After` |

La lista completa de códigos está en el [archivo OpenAPI](./api.md#where-is-the-full-reference).
