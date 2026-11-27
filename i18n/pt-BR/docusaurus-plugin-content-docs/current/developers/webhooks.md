---
title: Webhooks
description: Webhooks do LifeWell avisam seu servidor quando seus registros mudam. São assinados conforme Standard Webhooks, repetidos por pouco mais de um dia e incluem exemplos para Node, Python e PHP.
keywords: [webhooks LifeWell, standard webhooks, verificar assinatura webhook, novas tentativas webhook]
topics: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: Equipe LifeWell
---

# Webhooks

Um webhook do LifeWell é uma solicitação `POST` assinada, enviada a um endereço seu quando algo muda nos seus registros. Cadastre o endereço em **Configurações → Outros aplicativos → Webhooks**, escolha os eventos e confira a assinatura de cada solicitação para saber que veio do LifeWell.

## Quais eventos existem?

Os nomes seguem `resource.verb`: a parte dos seus registros e o que aconteceu. O catálogo completo, com os dados de cada evento, fica no [arquivo OpenAPI](./api.md#onde-está-a-referência-completa). Esta página não repete a lista para não ficar desatualizada.

Um evento está sempre disponível: `webhook.test`, enviado ao clicar em **Enviar evento de teste**.

## Quais endereços são aceitos?

- Apenas `https://`, na porta 443 ou 8443, sem usuário ou senha no endereço.
- Nenhum endereço privado ou local: `localhost`, `127.0.0.1`, `10.x.x.x`, `192.168.x.x`, endereços locais de enlace ou nomes que resolvam para eles. A conferência ocorre ao salvar e antes de cada envio. Redirecionamentos para endereços privados também são recusados.
- Seu servidor tem dez segundos para responder.

## O que uma solicitação contém?

O LifeWell segue a especificação [Standard Webhooks](https://www.standardwebhooks.com/). Cada solicitação tem três cabeçalhos:

| Cabeçalho | Conteúdo |
|---|---|
| `webhook-id` | Identificador do evento. Continua igual nas novas tentativas; use-o para ignorar duplicatas |
| `webhook-timestamp` | Momento do envio, em segundos desde 1970 |
| `webhook-signature` | `v1,` seguido de uma assinatura HMAC-SHA256 em base64; pode haver várias, separadas por espaços |

O segredo de assinatura começa com `whsec_`. Você pode vê-lo novamente pela mesma [regra dos dez minutos](./authentication.md#posso-ver-um-token-novamente) aplicada aos tokens. **Trocar segredo** cria outro e assina com ambos por 24 horas. Assim, o receptor pode aceitar qualquer um enquanto você atualiza sua configuração.

## Como verificar uma solicitação?

Verifique antes de interpretar o corpo, usando os bytes exatos recebidos. Um JSON interpretado e depois convertido novamente em texto não terá a mesma assinatura.

As bibliotecas abaixo são as de Standard Webhooks: `standardwebhooks` 1.3.0 no npm e PyPI, e `standard-webhooks/standard-webhooks` 1.3.0 no Packagist, conferidas em 19 de novembro de 2026.

### Node

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

### Python

```python
from standardwebhooks.webhooks import Webhook
wh = Webhook(os.environ["LIFEWELL_WEBHOOK_SECRET"])
payload = wh.verify(request.get_data(), dict(request.headers))
```

### PHP

```php
$wh = new \StandardWebhooks\Webhook(getenv('LIFEWELL_WEBHOOK_SECRET'));
$payload = $wh->verify(file_get_contents('php://input'), getallheaders());
```

### Qualquer linguagem

1. `secret = base64decode(valor whsec sem o prefixo "whsec_")`.
2. `signed = webhook-id + "." + webhook-timestamp + "." + corpo bruto` (os bytes exatos recebidos).
3. `expected = base64(HMAC_SHA256(secret, signed))`.
4. Compare `expected` com cada valor `v1,` de `webhook-signature` em tempo constante. Qualquer coincidência é válida.
5. Recuse quando `|agora − webhook-timestamp| > 300`.

## E se meu servidor não responder?

Qualquer resposta `2xx` conta como entrega. Outro código, demora além do limite ou endereço recusado gera uma nova tentativa:

| Tentativa | Quando |
|---|---|
| 1 | Imediatamente |
| 2 | Cinco segundos depois |
| 3 | Cinco minutos depois |
| 4 | Trinta minutos depois |
| 5 | Duas horas depois |
| 6 | Cinco horas depois |
| 7 | Dez horas depois |
| 8 | Dez horas depois |

Um endereço é desligado em três situações:

- **`410 Gone`**, imediatamente. Responda com esse código se desativou o endereço de propósito.
- **Oito tentativas falhas** para um evento.
- **Cinco dias de falhas contínuas** no endereço.

Quando isso acontece, o LifeWell envia por e-mail o último erro e um link para reativar o endereço.

## Como testar e reenviar?

- **Enviar evento de teste** envia `webhook.test` agora.
- O **histórico de entregas** de cada endereço lista todas as tentativas: estado, número da tentativa, código de resposta, duração e próximo horário. Ele é atualizado sem recarregar a página.
- **Reenviar** repete uma entrega com o mesmo `webhook-id`. Para recuperar eventos após uma interrupção, reenvie as entregas falhas desde um horário escolhido, até 1.000 por vez.
- **Pausar** interrompe os envios até você retomar.
