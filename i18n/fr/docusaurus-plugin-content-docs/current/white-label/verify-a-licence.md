---
title: Vérifier une licence
description: Vérifiez qu’une copie LifeWell possède une licence avec sa clé ou son site Web, et comprenez chaque réponse.
keywords: [vérifier licence LifeWell, vérifier licence marque blanche, fichier de licence]
tags: [white-label]
sidebar_position: 5
last_update:
  date: 2026-11-13
  author: L’équipe LifeWell
---

# Vérifier une licence

Chaque copie de LifeWell sous licence possède une clé et sert un fichier `/.well-known/lifewell-white-label-license.json` sur son site. Vous pouvez vérifier l’un ou l’autre sur [la page de vérification](https://lifewell.aoneahsan.com/verify-license). La réponse vient de notre service de licences, jamais de la copie vérifiée.

## Avec la clé \{#by-key}

| Réponse | Signification |
|---|---|
| Active | La licence est valide. La page indique à qui elle a été délivrée, ainsi que les sites, plateformes et dates couverts. |
| En configuration | La licence est payée, mais la copie n’est pas encore en ligne. |
| Révoquée | Une copie utilisant cette clé ne possède pas de licence valide. |
| Aucune licence pour cette clé | Comparez-la au certificat. |
| Ce n’est pas une clé LifeWell | Les clés commencent par `LIFEWELL-`. |

## Avec le site Web \{#by-website}

| Réponse | Signification |
|---|---|
| Sous licence | Le fichier du site nomme une licence active qui couvre ce site. |
| Ce site n’est pas couvert | Le fichier nomme une licence prévue pour une autre adresse. |
| Aucun fichier de licence | Le site ne sert pas de fichier de licence LifeWell. |
| Site inaccessible | Réessayez dans quelques minutes. |

La vérification n’affiche que des champs publics. Ni adresse e-mail ni prix ne sont révélés.

## Dans une copie sous licence \{#inside-a-licensed-copy}

Une copie vérifie sa clé au démarrage, puis à chaque réouverture. Si la licence est révoquée ou ne couvre pas son site, elle indique qu’elle n’est plus active. Rien de ce que les personnes ont noté n’est supprimé, et une panne de notre service n’empêche jamais la copie de fonctionner.
