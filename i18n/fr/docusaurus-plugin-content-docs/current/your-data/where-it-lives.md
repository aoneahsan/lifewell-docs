---
title: Où se trouve votre dossier
description: Votre dossier est conservé dans une base Postgres, vos photos dans votre Google Drive et quelques notes rapides en attente sur l’appareil si la saisie hors ligne est activée.
keywords: [LifeWell hors ligne, stockage Google Drive, où se trouvent mes données, synchronisation, Postgres]
tags: [your-data, privacy, concepts]
sidebar_position: 3
---

# Où se trouve votre dossier

Trois endroits, qui conservent volontairement des choses différentes.

| Élément | Emplacement | Qui peut le lire |
|---|---|---|
| Tout ce que vous saisissez | Une base Postgres hébergée par Supabase | Vous et les personnes avec qui vous [l’avez partagé](../domains/sharing.md) |
| Photos et fichiers | **Votre propre Google Drive** | Vous, par l’intermédiaire de Google |
| Préférences, session, brouillons | Votre appareil | Vous, sur cet appareil |

## Quand la connexion tombe \{#when-the-connection-drops}

LifeWell écrit normalement votre dossier dans sa base. Quand le réseau se coupe, l’application bloque la page courante jusqu’à ce qu’une véritable requête réussisse. Si **Continuer à travailler hors ligne** est actif dans les réglages de l’appareil, vous pouvez choisir de noter certaines mesures compatibles, des changements de jour de cycle et des épisodes de symptômes. Ils restent sur cet appareil avant d’être envoyés à la reconnexion.

En pratique :

- Une note rapide en attente n’est pas visible sur un autre appareil avant son acceptation par le serveur.
- Les autres modifications du dossier et les lectures du serveur exigent une connexion.
- Le service worker ne met pas les pages en cache ; un onglet fermé ne peut pas rouvrir LifeWell hors ligne.

## Vos photos sont dans votre Drive \{#photos-are-in-your-drive-not-ours}

LifeWell demande à Google une autorisation limitée **aux fichiers qu’il a lui-même créés**. Il ne peut ni parcourir, ni lire, ni modifier le reste de votre Drive. Cette limite vient de l’autorisation, pas seulement de notre conduite.

Nous gardons une référence au fichier, pas le fichier lui-même.

| Si vous… | Alors… |
|---|---|
| Déconnectez Drive | Légendes, dates, albums et étiquettes restent ; les images deviennent inaccessibles |
| Supprimez un fichier dans Drive | L’image disparaît ; LifeWell garde la trace qu’elle existait |
| Exportez votre dossier | Vous recevez les références et les légendes, pas les octets des images |
| Supprimez votre compte LifeWell | Les références disparaissent ; les fichiers restent dans votre Drive, où vous pouvez les supprimer |

Une photo dépend ainsi d’un compte Google sous votre contrôle, plutôt que d’un stockage sous le nôtre. C’est le compromis voulu.

## La base de données et la séparation des comptes \{#the-database-and-what-stops-another-account-reading-you}

La sécurité par ligne est active sur chaque table et chaque lecture s’exécute **sous votre identité**. Aucune clé de service ne se trouve dans le navigateur ; l’application ne dispose d’aucun accès d’administration en votre nom.

Chaque requête doit démontrer par ses propres filtres qu’elle porte sur vos lignes. C’est important : la sécurité par ligne de Postgres *filtre* une liste au lieu de rejeter la requête. Sans filtre propriétaire, elle renvoie moins de lignes plutôt qu’une erreur, ce qui peut sembler correct lors d’un examen alors que ce ne l’est pas.

Deux comptes ont été alimentés pour vérifier la règle avec de vraies lignes : une requête qui ne trouve rien satisferait n’importe quelle règle sans la prouver.

## Sauvegardes \{#backups}

Cette base ne dispose pas de restauration à un instant donné. Prétendre le contraire serait facile, mais faux. Les sauvegardes sont faites à la main, vérifiées par restauration dans une base temporaire avec comparaison des nombres de lignes, puis conservées chez un autre fournisseur que la base active.

**Votre propre sauvegarde est [l’exportation](./export.md)**. Elle est accessible avec toutes les offres, y compris l’offre gratuite. Un produit qui conserve votre vie ne doit pas vous faire payer pour en obtenir une copie.

## Ce qui quitte aussi votre appareil \{#what-else-leaves-your-device}

Les photos vont dans votre propre compte Google. Les mesures d’utilisation et les rapports d’erreur vont aux services cités dans [Intégrations](../reference/integrations.md), sans le contenu de votre dossier : un rapport d’erreur nomme l’écran et le problème, pas ce que vous y avez écrit.

Rien de votre dossier n’est vendu. Le produit ne contient aucun réseau publicitaire tiers.
