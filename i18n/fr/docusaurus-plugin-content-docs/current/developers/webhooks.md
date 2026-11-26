---
title: Webhooks
description: Les webhooks LifeWell avertissent votre serveur dès qu’un élément du dossier change. Ils sont signés selon Standard Webhooks et réessayés pendant un peu plus d’un jour, avec des exemples pour Node, Python et PHP.
keywords: [webhooks LifeWell, Standard Webhooks, vérification de signature, nouvelles tentatives]
tags: [developers, webhooks]
sidebar_position: 5
last_update:
  date: 2026-11-19
  author: L’équipe LifeWell
---

# Webhooks

Un webhook LifeWell est une requête `POST` signée, envoyée à une adresse que vous gérez lorsqu’un élément de votre dossier change. Ajoutez cette adresse sous **Paramètres → Autres applications → Webhooks**, choisissez les événements reçus et vérifiez la signature de chaque requête pour savoir qu’elle vient bien de LifeWell.

## Quels événements existent ? \{#which-events-are-there}

Leur nom suit `resource.verb` : la partie du dossier, puis l’action. Le catalogue complet et le contenu de chaque événement figurent dans [le fichier OpenAPI](./api.md#where-is-the-full-reference). Cette page ne les recopie pas, pour ne pas devenir périmée.

Un événement existe toujours : `webhook.test`, envoyé par **Envoyer un événement de test**.

## Quelles adresses sont acceptées ? \{#which-addresses-are-accepted}

- Uniquement `https://`, sur le port 443 ou 8443, sans nom d’utilisateur ni mot de passe dans l’adresse.
- Jamais d’adresse privée ou locale : `localhost`, `127.0.0.1`, `10.x.x.x`, `192.168.x.x`, adresses locales au lien ou noms qui y aboutissent. La vérification se fait à l’enregistrement puis avant chaque envoi. Une redirection vers une adresse privée est également refusée.
- Votre serveur dispose de dix secondes pour répondre.

## Que contient une requête ? \{#what-does-a-request-carry}

LifeWell suit la spécification [Standard Webhooks](https://www.standardwebhooks.com/). Chaque requête comporte trois en-têtes :

| En-tête | Contenu |
|---|---|
| `webhook-id` | Identifiant de l’événement, identique lors des tentatives suivantes. Utilisez-le pour ignorer les doublons |
| `webhook-timestamp` | Date d’envoi, en secondes depuis 1970 |
| `webhook-signature` | `v1,` suivi d’une signature HMAC-SHA256 en base64 ; plusieurs signatures peuvent être séparées par des espaces |

Le secret de signature commence par `whsec_`. Vous pouvez le revoir selon la même [règle des dix minutes](./authentication.md#can-i-see-a-token-again) qu’un jeton. **Renouveler** émet un nouveau secret et signe avec les deux pendant 24 heures, le temps de modifier votre serveur.

## Comment vérifier une requête ? \{#how-do-i-verify-a-request}

Vérifiez-la avant de la décoder, à partir des octets exacts reçus. Un objet JSON décodé puis réécrit ne donnera pas la même signature.

Les bibliothèques ci-dessous sont celles de Standard Webhooks : `standardwebhooks` 1.3.0 sur npm et PyPI et `standard-webhooks/standard-webhooks` 1.3.0 sur Packagist, vérifiées le 19 novembre 2026.

### Node

```js
import { Webhook } from 'standardwebhooks';

const wh = new Webhook(process.env.LIFEWELL_WEBHOOK_SECRET);   // la valeur whsec_…

app.post('/hooks/lifewell', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = wh.verify(req.body, req.headers);                  // rejette une mauvaise signature ou un ancien horodatage
  } catch {
    return res.sendStatus(400);
  }
  if (alreadyHandled(req.headers['webhook-id'])) return res.sendStatus(200);
  queue.add(event);                                            // répondre vite, traiter ensuite
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

### Dans toute langue \{#any-language}

1. `secret = base64decode(valeur whsec sans le préfixe "whsec_")`.
2. `signed = webhook-id + "." + webhook-timestamp + "." + corps brut` (les octets exacts reçus).
3. `expected = base64(HMAC_SHA256(secret, signed))`.
4. Comparez `expected` à chaque valeur `v1,` de `webhook-signature` en temps constant ; une correspondance suffit.
5. Refusez si `|maintenant − webhook-timestamp| > 300`.

## Si mon serveur ne répond pas \{#what-happens-when-my-server-does-not-answer}

Tout statut `2xx` compte comme livré. Un autre statut, un délai dépassé ou une adresse refusée déclenche une nouvelle tentative selon ce calendrier :

| Tentative | Moment |
|---|---|
| 1 | Immédiatement |
| 2 | Cinq secondes plus tard |
| 3 | Cinq minutes plus tard |
| 4 | Trente minutes plus tard |
| 5 | Deux heures plus tard |
| 6 | Cinq heures plus tard |
| 7 | Dix heures plus tard |
| 8 | Dix heures plus tard |

Trois situations désactivent une adresse :

- **`410 Gone`**, immédiatement. Renvoyez ce statut si vous avez volontairement retiré l’adresse.
- **Les huit tentatives échouent** pour un événement.
- **Cinq jours d’échecs continus** sur l’adresse.

LifeWell vous envoie alors par e-mail la dernière erreur, avec un lien pour réactiver l’adresse.

## Comment tester et relancer un envoi ? \{#how-do-i-test-and-replay}

- **Envoyer un événement de test** transmet `webhook.test` immédiatement.
- Le **journal de livraison** de chaque adresse montre toutes les tentatives : état, numéro, code de réponse, durée et date de la prochaine tentative. Il s’actualise sans recharger la page.
- **Rejouer** renvoie une livraison avec le même `webhook-id`. Après une panne, vous pouvez rejouer les livraisons échouées depuis la date choisie, jusqu’à 1 000 à la fois.
- **Mettre en pause** suspend les envois jusqu’à votre reprise.
