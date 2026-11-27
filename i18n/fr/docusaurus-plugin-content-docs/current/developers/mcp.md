---
title: Connecter un assistant IA (MCP)
description: Reliez Claude, ChatGPT, Claude Code ou Cursor à votre dossier LifeWell par le serveur MCP ; découvrez les autorisations, la confirmation des suppressions et la déconnexion.
keywords: [serveur MCP LifeWell, connecter Claude à LifeWell, connecteur ChatGPT, Claude Code MCP, Cursor MCP]
topics: [developers, mcp, ai]
sidebar_position: 4
last_update:
  date: 2026-11-19
  author: L’équipe LifeWell
---

# Connecter un assistant IA (MCP)

Le serveur MCP de LifeWell permet à un assistant IA de lire ou modifier votre dossier à votre demande : *« Qui, dans ma famille, fête son anniversaire ce mois-ci ? »*, *« Ajoute le dentiste jeudi à 9 h 30. »* Vous lui donnez une adresse, vous connectez à LifeWell, puis choisissez sur la page d’autorisation ce qu’il peut faire. Cela fonctionne avec Claude, ChatGPT, Claude Code, Cursor et tout autre assistant compatible MCP.

## Quelle adresse utiliser ? \{#what-is-the-address}

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

Vous la trouverez aussi sous **Paramètres → Autres applications → Connecter un assistant IA**, avec un bouton de copie. Ne collez jamais un jeton dans l’assistant : il découvre la connexion LifeWell depuis cette adresse et vous y conduit.

## Comment connecter chaque assistant ? \{#how-do-i-connect-each-assistant}

Les menus de ces applications changent selon les versions. Si les étapes ci-dessous ne correspondent plus à votre écran, cherchez **Connecteurs** dans leurs paramètres.

### Claude

1. Dans Claude, ouvrez **Paramètres → Connecteurs** et ajoutez un connecteur personnalisé.
2. Collez l’adresse ci-dessus.
3. Connectez-vous à LifeWell lorsqu’on vous le demande, puis confirmez sur la page d’autorisation.

### ChatGPT

1. Dans ChatGPT, ouvrez **Paramètres → Connecteurs**. Certains comptes doivent d’abord activer le mode développeur.
2. Ajoutez un connecteur avec l’adresse ci-dessus.
3. Connectez-vous à LifeWell, puis confirmez sur la page d’autorisation.

### Claude Code

```bash
claude mcp add --transport http lifewell https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

Lancez ensuite `/mcp` dans Claude Code, choisissez **lifewell** et connectez-vous dans le navigateur qui s’ouvre.

### Cursor

Ajoutez LifeWell à votre `mcp.json` :

```json
{
  "mcpServers": {
    "lifewell": {
      "url": "https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp"
    }
  }
}
```

Cursor vous demande de vous connecter à sa première utilisation.

## Que demande la page d’autorisation ? \{#what-does-the-consent-page-ask}

Avant tout accès à votre dossier, LifeWell affiche à `https://lifewell.aoneahsan.com/oauth/consent` :

- **l’application qui demande l’accès** et l’adresse vers laquelle elle vous renverra ;
- **le compte LifeWell concerné** — à vérifier si vous en avez plusieurs ;
- **les actions autorisées**, en phrases et par groupes lecture, écriture et suppression, avec une case pour chacune. La suppression est décochée au départ ;
- **Autoriser** et **Refuser**, côte à côte.

Si la [connexion en deux étapes](./two-step-sign-in.md) est active, l’autorisation demande un code. Rien n’est approuvé à votre place : toute nouvelle connexion passe par cette page.

L’assistant ne voit que les outils correspondant à vos choix. Autorisez uniquement la lecture et il ne pourra rien modifier.

## Comment les suppressions sont-elles traitées ? \{#how-are-deletes-handled}

Un assistant peut **préparer** une suppression ; vous seul pouvez **l’exécuter**. Si vous lui demandez de retirer quelque chose, il vous montre ce qui disparaîtrait et fournit un lien vers LifeWell. Vous confirmez dans LifeWell sous dix minutes, sinon rien n’est supprimé. Une phrase cachée sur une page Web ou dans un document collé ne peut pas lui faire supprimer votre dossier : il ne peut pas confirmer sa propre demande.

Cela ne s’applique que si vous avez coché une autorisation de suppression. Sinon, l’assistant ne peut même pas préparer l’opération.

## Comment déconnecter un assistant ? \{#how-do-i-disconnect-an-assistant}

Ouvrez **Paramètres → Autres applications → Applications connectées** et choisissez **Révoquer** sur sa ligne. Son accès cesse à sa prochaine requête. La liste indique les autorisations de chaque application, sa date de connexion et sa dernière utilisation. Une nouvelle application y apparaît dès votre approbation. LifeWell vous envoie aussi un e-mail lorsqu’une application se connecte.

## Si cela ne fonctionne pas \{#why-is-it-not-working}

| Ce que vous voyez | Que faire |
|---|---|
| L’assistant redemande la connexion | Sa session a expiré. Reconnectez-vous à LifeWell depuis l’assistant |
| Il manque une autorisation | Elle n’a pas été accordée. Déconnectez l’assistant, reconnectez-le et cochez-la sur la page d’autorisation |
| LifeWell disparaît de ses outils ou tous les appels échouent | L’accès a été révoqué. Vérifiez **Applications connectées**, puis reconnectez-le si vous le souhaitez |
| Une suppression n’a rien fait | Elle n’a pas été confirmée dans LifeWell sous dix minutes. Recommencez |
| Vous souhaitez savoir ce qu’il a fait | **Applications connectées** indique la dernière utilisation de chaque application |
