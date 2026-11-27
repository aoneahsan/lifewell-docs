---
title: Jetons d’accès et authentification
description: 'Comment un script ou une application prouve son droit de lire votre dossier LifeWell : jetons avec portées, règle des dix minutes, OAuth, limites de débit et erreurs.'
keywords: [jeton d’accès LifeWell, authentification API LifeWell, OAuth LifeWell, portées API, limites de débit]
topics: [developers, api, security]
sidebar_position: 2
last_update:
  date: 2026-11-19
  author: L’équipe LifeWell
---

# Jetons d’accès et authentification

Un jeton d’accès LifeWell est un long secret que vous créez sous **Paramètres → Autres applications** et envoyez avec chaque requête API sous la forme `Authorization: Bearer <token>`. Il porte les autorisations et la date d’expiration que vous avez choisies. Un geste suffit pour le révoquer. Une application qui veut agir en votre nom utilise plutôt OAuth ; vous ne lui remettez aucun jeton.

## Comment créer un jeton ? \{#how-do-i-create-a-token}

1. Ouvrez **Paramètres → Autres applications → Jetons d’accès**, puis choisissez **Nouveau jeton**.
2. Donnez-lui un nom reconnaissable, par exemple *script du calendrier de la cuisine* plutôt que *jeton 1*.
3. Choisissez ses portées et sa date d’expiration.
4. LifeWell montre le jeton une fois avec un bouton de copie. Conservez-le dans un lieu sûr avant de fermer le panneau.

La liste affiche ensuite son nom, ses portées, ses premiers caractères, sa date de création et sa dernière utilisation, jamais le jeton entier. LifeWell vous envoie un e-mail à chaque création, pour qu’un jeton créé sans votre accord ne passe pas inaperçu.

## Puis-je revoir un jeton ? \{#can-i-see-a-token-again}

Oui, pendant les **dix minutes suivant votre connexion**. Choisissez **Afficher** sur sa ligne :

- **Connexion datant de moins de dix minutes** — le jeton s’affiche.
- **Connexion plus ancienne** — LifeWell vous l’indique et propose **Se reconnecter**, puis vous ramène à la même ligne.
- **Connexion en deux étapes active** — vous devez aussi saisir le code de votre application d’authentification, même pendant ces dix minutes.

Rester connecté pendant des jours est pratique, mais un ordinateur volé peut l’être aussi. Une connexion récente vérifie que la personne qui demande le secret est bien vous. L’affichage est limité à dix fois par heure et chaque consultation est inscrite sur votre compte. Un jeton n’est jamais envoyé par e-mail.

## Que signifient les portées ? \{#what-do-the-scopes-mean}

Chaque partie du dossier possède au plus trois portées :

| Portée | Autorise le jeton à… |
|---|---|
| `<resource>:read` | Lire cette partie du dossier |
| `<resource>:write` | Y ajouter et modifier des éléments |
| `<resource>:delete` | Y supprimer des éléments |

`account:read` donne accès aux informations de votre propre compte. Les ressources et noms exacts de leurs portées sont dans [le fichier OpenAPI](./api.md#where-is-the-full-reference).

**La suppression n’est jamais implicite.** Écrire ne permet pas de supprimer. Les cases de suppression sont séparées et décochées au départ. Les portées d’un jeton ne peuvent pas s’élargir après sa création : si vous avez besoin de droits supplémentaires, créez-en un nouveau et révoquez l’ancien. Aucun jeton ne peut recevoir de droit d’administration.

## Combien de temps un jeton dure-t-il ? \{#how-long-does-a-token-last}

Vous choisissez **30, 90 ou 365 jours**. LifeWell vous envoie un e-mail sept jours avant l’expiration. Une fois la date passée, le jeton cesse de fonctionner et les requêtes reçoivent `401`.

## Comment remplacer ou révoquer un jeton ? \{#how-do-i-replace-or-revoke-a-token}

- **Renouveler** crée un nouveau jeton. L’ancien fonctionne encore pendant 24 heures, le temps de le remplacer dans votre script, puis il est révoqué. Les deux figurent dans la liste entre-temps.
- **Révoquer** arrête immédiatement le jeton. Sa prochaine requête reçoit `401`. Appuyez deux fois pour confirmer ; aucune boîte de dialogue ne s’ouvre.

Supprimer votre compte LifeWell révoque aussi tous les jetons, applications connectées, webhooks et flux.

## Comment connecter une application sans lui donner de jeton ? \{#how-does-an-app-connect-without-a-token}

Avec OAuth 2.1, la même connexion qu’utilise un assistant IA. L’application vous dirige vers `https://lifewell.aoneahsan.com/oauth/consent`, qui affiche :

- le nom de l’application et l’adresse de retour ;
- le compte LifeWell concerné ;
- les actions demandées, en phrases regroupées par lecture, écriture et suppression, chacune avec sa case ; la suppression est décochée au départ ;
- **Autoriser** et **Refuser**, côte à côte.

Si la connexion en deux étapes est active, un code est demandé. L’application figure ensuite sous **Paramètres → Autres applications → Applications connectées**. Vous pouvez la renommer ou la révoquer. La révocation prend effet à la prochaine requête, sans attendre l’expiration de la session en cours. Voir [Assistants IA (MCP)](./mcp.md#what-does-the-consent-page-ask).

## Quelles sont les limites de débit ? \{#what-are-the-rate-limits}

Chaque jeton ou application connectée peut envoyer 120 requêtes par minute. Le compte entier possède aussi un plafond quotidien selon son offre : 5 000 avec Free, 50 000 avec Pro ou Family. Tous vos jetons et applications partagent ce plafond ; en créer davantage ne l’augmente pas. Paramètres → Autres applications affiche vos limites et le nombre de requêtes du jour. Chaque réponse comporte :

| En-tête | Signification |
|---|---|
| `RateLimit-Limit` | Requêtes autorisées dans la période actuelle |
| `RateLimit-Remaining` | Requêtes encore possibles |
| `RateLimit-Reset` | Secondes avant la prochaine période |

Au-delà, l’API répond `429` avec l’en-tête `Retry-After`. Attendez le nombre de secondes indiqué avant de réessayer.

Une rafale de requêtes simultanées peut également recevoir `546` de la plateforme d’hébergement, avant même que LifeWell ne voie la requête. Envoyez-les successivement ou par petits groupes et réessayez après une seconde.

## À quoi ressemble une erreur ? \{#what-does-an-error-look-like}

Toutes les routes renvoient les erreurs sous la même forme :

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

Programmez votre code à partir de `code` ; `message` est destiné aux personnes et peut changer de formulation. Si vous signalez une requête ratée, citez `correlation_id` : il permet de la retrouver, sans révéler autre chose.

| Statut | Signification habituelle |
|---|---|
| `401` | Jeton absent, erroné, révoqué ou expiré |
| `403` | Portée manquante (nommée dans `details`) ou nouvelle connexion requise |
| `404` | Aucun élément avec cet identifiant dans votre dossier, y compris s’il appartient à quelqu’un d’autre |
| `429` | Limite de débit atteinte ; voir `Retry-After` |

La liste complète des codes figure dans [le fichier OpenAPI](./api.md#where-is-the-full-reference).
