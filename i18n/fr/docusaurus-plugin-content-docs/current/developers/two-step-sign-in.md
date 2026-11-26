---
title: Connexion en deux étapes
description: Activez un code d’application d’authentification pour LifeWell, conservez vos codes de secours et choisissez si un navigateur peut être reconnu pendant sept jours.
keywords: [LifeWell connexion en deux étapes, authentification à deux facteurs, application d’authentification, codes de secours]
tags: [developers, security]
sidebar_position: 7
last_update:
  date: 2026-11-19
  author: L’équipe LifeWell
---

# Connexion en deux étapes

Après la connexion avec Google, LifeWell peut demander un code à six chiffres fourni par une application d’authentification. Une personne ayant accès à votre compte Google ne peut alors pas ouvrir votre dossier LifeWell sans votre téléphone. Cette protection est facultative pour vous et obligatoire pour toutes les personnes ayant accès au panneau d’administration.

## Comment l’activer ? \{#how-do-i-turn-it-on}

1. Ouvrez **Paramètres → Sécurité → Connexion en deux étapes**.
2. Scannez le code QR avec Google Authenticator, Microsoft Authenticator, 1Password, Bitwarden ou une autre application produisant des codes à six chiffres. Si vous ne pouvez pas le scanner, saisissez la clé affichée dessous.
3. Saisissez le code affiché par l’application. La connexion en deux étapes s’active lorsque LifeWell l’accepte.

## À quoi servent les codes de secours ? \{#what-are-recovery-codes}

Lors de l’activation, LifeWell affiche **10 codes de secours**, une seule fois. Chacun permet une connexion unique si votre téléphone est perdu ou effacé. Téléchargez-les ou copiez-les ailleurs que sur ce téléphone.

- Chaque code ne fonctionne qu’une fois.
- Utiliser un code désactive la connexion en deux étapes et vous conduit aussitôt à sa reconfiguration sur votre nouveau téléphone.
- **Créer de nouveaux codes** remplace la série entière ; les anciens cessent de fonctionner. Un code actuel est d’abord demandé.

## Que fait « Reconnaître ce navigateur pendant sept jours » ? \{#what-does-remember-this-browser-for-7-days-do}

Après la saisie du code, l’écran propose **Reconnaître ce navigateur pendant sept jours**. La case est décochée et le reste tant que vous ne la cochez pas.

- **Non cochée** — LifeWell redemande un code à la prochaine connexion.
- **Cochée** — ce navigateur, sur cet appareil, évite le code pendant sept jours. Un autre navigateur ou appareil le demande toujours.

Se déconnecter met fin à cette reconnaissance sur ce navigateur. **Paramètres → Sécurité → Navigateurs de confiance** les liste avec leurs dates de début et d’expiration. **Oublier** en retire un ; **Tout oublier** les retire tous. Désactiver la connexion en deux étapes les oublie également.

Même reconnu, un navigateur demande encore un code pour afficher un jeton d’accès ou le secret d’un webhook, modifier la connexion en deux étapes ou ouvrir le panneau d’administration.

## Où un code est-il également demandé ? \{#where-else-does-it-ask-for-a-code}

- **Réafficher un jeton ou un secret** — voir [Jetons d’accès](./authentication.md#can-i-see-a-token-again).
- **Autoriser une nouvelle application ou un assistant IA** sur la page d’autorisation — voir [Assistants IA](./mcp.md#what-does-the-consent-page-ask).
- **Désactiver la connexion en deux étapes** — un code actuel est nécessaire.

## Est-elle obligatoire pour l’administration ? \{#do-admins-have-to-use-it}

Oui. Personne ne peut ouvrir le [panneau d’administration LifeWell](../admin.md) sans avoir saisi un code pendant cette session. Un navigateur reconnu ne suffit pas pour les écrans d’administration.
