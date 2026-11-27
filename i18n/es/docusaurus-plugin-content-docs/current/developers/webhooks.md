---
title: Webhooks
description: Los webhooks de LifeWell avisan a tu servidor al cambiar tus datos. Firmas Standard Webhooks, reintentos durante más de un día y ejemplos de verificación en Node, Python y PHP.
keywords: [webhooks de lifewell, standard webhooks, verificar firma webhook, reintentos webhook]
topics: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: El equipo de LifeWell
---

# Webhooks \{#webhooks}

Un webhook de LifeWell es una solicitud `POST` firmada a una dirección tuya cuando cambian tus datos. Añades la dirección en **Ajustes → Otras aplicaciones → Webhooks**, eliges los eventos y verificas la firma de cada solicitud para confirmar su origen.

## ¿Qué eventos existen? \{#which-events-are-there}

Se nombran `resource.verb`: primero la parte de tus datos y luego la acción. El catálogo completo, con el contenido de cada evento, está en [OpenAPI](./api.md#where-is-the-full-reference). Esta página no lo duplica para que no se desactualice.

Siempre está disponible `webhook.test`, enviado al pulsar **Enviar evento de prueba**.

## ¿Qué direcciones se aceptan? \{#which-addresses-are-accepted}

- Solo `https://` en los puertos 443 u 8443, sin usuario ni contraseña en la dirección.
- Nunca direcciones locales o privadas como `localhost`, `127.0.0.1`, `10.x.x.x`, `192.168.x.x`, direcciones de enlace local o nombres que apunten a ellas. Se comprueba al guardar y antes de cada envío. También se rechazan redirecciones hacia una dirección privada.
- Tu servidor dispone de 10 segundos para responder.

## ¿Qué contiene una solicitud? \{#what-does-a-request-carry}

LifeWell sigue la especificación [Standard Webhooks](https://www.standardwebhooks.com/). Cada solicitud lleva tres encabezados:

| Encabezado | Contenido |
|---|---|
| `webhook-id` | Identificador del evento; se mantiene en los reintentos para que puedas ignorar duplicados |
| `webhook-timestamp` | Momento del envío, en segundos desde 1970 |
| `webhook-signature` | `v1,` y una firma HMAC-SHA256 en base64; puede haber varias separadas por espacios |

El secreto de firma comienza con `whsec_`. Puedes volver a verlo siguiendo la [regla de los 10 minutos](./authentication.md#can-i-see-a-token-again) de los tokens. **Rotar** crea otro secreto y firma con ambos durante 24 horas para que puedas cambiar el receptor sin interrumpirlo.

## ¿Cómo verifico una solicitud? \{#how-do-i-verify-a-request}

Comprueba la firma antes de analizar el cuerpo, usando exactamente los bytes recibidos. Si analizas el JSON y vuelves a serializarlo, la firma no coincidirá.

Las bibliotecas siguientes implementan Standard Webhooks: `standardwebhooks` 1.3.0 en npm y PyPI, y `standard-webhooks/standard-webhooks` 1.3.0 en Packagist, según la comprobación del 19 de noviembre de 2026.

### Node \{#node}

```js
import { Webhook } from 'standardwebhooks';

const wh = new Webhook(process.env.LIFEWELL_WEBHOOK_SECRET);   // the whsec_… value

app.post('/hooks/lifewell', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = wh.verify(req.body, req.headers);                  // throws on a bad signature or old timestamp
  } catch {
    return res.sendStatus(400);
  }
  if (alreadyHandled(req.headers['webhook-id'])) return res.sendStatus(200);
  queue.add(event);                                            // answer fast, work later
  res.sendStatus(200);
});
```

### Python \{#python}

```python
from standardwebhooks.webhooks import Webhook
wh = Webhook(os.environ["LIFEWELL_WEBHOOK_SECRET"])
payload = wh.verify(request.get_data(), dict(request.headers))
```

### PHP \{#php}

```php
$wh = new \StandardWebhooks\Webhook(getenv('LIFEWELL_WEBHOOK_SECRET'));
$payload = $wh->verify(file_get_contents('php://input'), getallheaders());
```

### Cualquier lenguaje \{#any-language}

1. Calcula `secret = base64decode(whsec value without the "whsec_" prefix)`.
2. `signed = webhook-id + "." + webhook-timestamp + "." + raw body` (los bytes exactos recibidos).
3. `expected = base64(HMAC_SHA256(secret, signed))`.
4. Compara `expected` con cada valor `v1,` de `webhook-signature` en tiempo constante. Una coincidencia basta.
5. Rechaza la solicitud si `|now − webhook-timestamp| > 300`.

## ¿Qué ocurre si mi servidor no responde? \{#what-happens-when-my-server-does-not-answer}

Cualquier respuesta `2xx` cuenta como entrega. Otro estado, tiempo agotado o dirección rechazada cuenta como intento fallido. LifeWell vuelve a intentarlo así:

| Intento | Momento |
|---|---|
| 1 | De inmediato |
| 2 | Cinco segundos después |
| 3 | Cinco minutos después |
| 4 | Treinta minutos después |
| 5 | Dos horas después |
| 6 | Cinco horas después |
| 7 | Diez horas después |
| 8 | Diez horas después |

La dirección se desactiva si:

- responde **`410 Gone`**, señal de que la retiraste deliberadamente;
- fallan **los ocho intentos** de un evento;
- presenta **cinco días de fallos continuos**.

Al desactivarla, LifeWell te envía un correo con el último error y un enlace para reactivarla.

## ¿Cómo pruebo y repito una entrega? \{#how-do-i-test-and-replay}

- **Enviar evento de prueba** manda `webhook.test` ahora.
- El **historial de entregas** de cada dirección muestra todos los intentos: estado, número, código de respuesta, duración y próximo reintento. Se actualiza al producirse las entregas, sin recargar la página.
- **Repetir** reenvía una entrega con el mismo `webhook-id`. Tras una interrupción, puedes repetir todas las fallidas desde una fecha elegida, hasta 1,000 a la vez.
- **Pausar** detiene los envíos a una dirección hasta que los reanudes.
