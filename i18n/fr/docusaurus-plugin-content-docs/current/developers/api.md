---
title: L’API LifeWell
description: Adresse de base de l’API REST LifeWell, pagination par curseur de 20 lignes par défaut et 50 au maximum, et fichier OpenAPI décrivant chaque route et champ.
keywords: [API LifeWell, API REST LifeWell, OpenAPI, pagination API, next_cursor]
tags: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: L’équipe LifeWell
---

# L’API LifeWell

L’API LifeWell est une API REST à une seule adresse de base. Toutes ses routes, tous ses champs et toutes ses erreurs sont décrits dans un fichier OpenAPI lisible par machine. Ce fichier fait référence, pas cette page. Vous trouverez ici où il se trouve, comment le lire et les deux règles communes à toutes les listes.

## Quelle est l’adresse de base ? \{#what-is-the-base-address}

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

Le `v1` final est la version de l’API. Chaque requête demande un jeton ou une connexion d’application. Voir [Authentification](./authentication.md).

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

## Où trouver la référence complète ? \{#where-is-the-full-reference}

| Fichier | Adresse | Ouvrir avec |
|---|---|---|
| OpenAPI 3.1, JSON | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | Un outil OpenAPI : Swagger UI, Redocly, Postman, Insomnia ou un générateur de client |
| Le même contenu, en Markdown | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | Un navigateur, un éditeur de texte ou un assistant IA auquel vous le transmettez |

Les deux sont construits à partir de la même source que l’API : ils ne peuvent ni décrire une route inexistante ni en omettre une. Des pages distinctes par ressource seront générées à partir du même fichier. Pour l’instant, les détails se trouvent dans ce fichier.

## Comment lire le fichier OpenAPI ? \{#how-do-i-read-the-openapi-file}

Quatre parties répondent à la plupart des questions :

- **`paths`** — chaque route, sa méthode et la portée requise.
- **`components.schemas`** — les champs possibles dans une réponse et leurs types. Un champ absent de cette liste n’est jamais envoyé.
- **`components.securitySchemes`** — les deux modes d’accès : jeton porteur et OAuth.
- **Les réponses d’erreur** — chaque `code` possible dans [l’enveloppe d’erreur](./authentication.md#what-does-an-error-look-like), route par route.

Les parties de votre dossier accessibles par l’API et les champs de chacune sont exactement ceux indiqués dans le fichier. Ce qui n’y figure pas est inaccessible par conception.

## Comment fonctionne la pagination ? \{#how-does-pagination-work}

Chaque liste est découpée en pages :

- **20 lignes par page** par défaut, **50 au maximum**.
- Si d’autres lignes suivent, la réponse contient `next_cursor`. Renvoyez cette valeur pour obtenir la page suivante.
- Si `next_cursor` est absent, vous avez atteint la dernière page.

Un curseur est un repère, pas un numéro de page : l’ajout d’une ligne pendant votre lecture ne décale pas tout le reste. Les noms des paramètres de taille et de curseur sont précisés dans le fichier OpenAPI de chaque liste.

## Qu’en est-il des limites de débit et des erreurs ? \{#what-about-rate-limits-and-errors}

Elles sont communes à toutes les routes et décrites sur la page [Authentification](./authentication.md#what-are-the-rate-limits).
