---
title: Relier LifeWell à d’autres applications
description: 'Quatre chemins vers votre dossier depuis l’extérieur : calendrier par flux, script par jeton, assistant IA par MCP et autre application par webhook.'
keywords: [connecter LifeWell, API LifeWell, MCP LifeWell, webhooks LifeWell, flux de calendrier]
topics: [developers, api]
sidebar_position: 1
last_update:
  date: 2026-11-19
  author: L’équipe LifeWell
---

# Relier LifeWell à d’autres applications

Quatre types d’outils peuvent accéder à votre dossier LifeWell, chacun par son propre chemin : une **application de calendrier** par un flux, un **script** par un jeton d’accès, un **assistant IA** par MCP et une **autre application** par webhook. Vous ouvrez chaque accès depuis **Paramètres → Autres applications** et pouvez le refermer au même endroit.

## À quoi cela sert-il ? \{#what-is-this-for}

Le plus souvent, à consulter ce que LifeWell conserve sans ouvrir LifeWell. Votre arbre généalogique dans une autre application que vous utilisez déjà. Vos rendez-vous dans le calendrier du téléphone, à côté de ceux du travail, au lieu d’un deuxième calendrier dont il faut penser à vérifier le contenu.

## Quel chemin choisir ? \{#which-door-do-i-need}

| Votre besoin | Utilisez | Cela permet | Commencez ici |
|---|---|---|---|
| Afficher le calendrier LifeWell dans Google Calendar, Apple Calendar ou Outlook | Un flux de calendrier | Lire le calendrier, rien d’autre | [Flux de calendrier](./calendar-feeds.md) |
| Lire ou modifier votre dossier depuis votre propre code | Un jeton d’accès et l’API | Les opérations autorisées par la portée du jeton | [Authentification](./authentication.md), puis [API](./api.md) |
| Interroger votre dossier avec Claude, ChatGPT, Claude Code ou Cursor | Le serveur MCP | Ce que vous avez accepté sur la page d’autorisation | [Assistants IA (MCP)](./mcp.md) |
| Prévenir une autre application lorsqu’un changement survient | Des webhooks | Recevoir des événements, sans lire autre chose | [Webhooks](./webhooks.md) |

## Ce qui reste vrai pour chaque accès \{#what-stays-true-whichever-door-you-use}

- **Rien ne s’ouvre sans votre choix.** Un nouveau compte n’a ni jeton, ni flux, ni connexion, ni webhook.
- **La suppression est toujours distincte.** Vous pouvez autoriser la lecture et l’écriture ; supprimer demande une autorisation séparée, désactivée tant que vous ne la cochez pas. Un assistant IA ne peut rien supprimer sans votre confirmation dans LifeWell.
- **Vous voyez chaque accès.** Paramètres → Autres applications présente tous les jetons, applications connectées, webhooks et flux, avec leur dernière utilisation.
- **Votre dossier n’appartient qu’à vous.** Chaque requête agit sous votre identité, avec les mêmes règles que l’application. Rien n’atteint le dossier d’une autre personne.

La connexion en deux étapes protège aussi ces accès : lorsqu’elle est active, afficher à nouveau un jeton ou approuver une nouvelle connexion demande un code. Voir [Connexion en deux étapes](./two-step-sign-in.md).

## Qu’est-ce qui a changé ? \{#what-changed}

Chaque changement de l’API, du serveur MCP, des webhooks et des flux est consigné dans [l’historique pour les développeurs](./changelog.md).
