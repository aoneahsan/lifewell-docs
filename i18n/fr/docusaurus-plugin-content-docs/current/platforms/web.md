---
title: Web
description: La version Web fait référence pour LifeWell. Android reprend la même application et ajoute deux fonctions assurées par son système d’exploitation.
keywords: [application Web LifeWell, navigateurs compatibles, application Web progressive, PWA]
tags: [platforms, web]
sidebar_position: 1
---

# Web

[lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) ouvre LifeWell dans un navigateur. L’application Android partage le compte et les enregistrements ; les notifications de l’appareil et le partage varient selon la plateforme.

## Navigateurs \{#browsers}

Les versions récentes de Chrome, Edge, Firefox et Safari sont visées. Si un navigateur est trop ancien, l’écran de démarrage l’indique au lieu d’afficher une page cassée.

## Ce que la version Web n’a pas \{#what-the-web-build-does-not-have}

Certaines actions dépendent du navigateur et du système d’exploitation :

- **Les rappels locaux reçus lorsque l’application est fermée.** Android programme les alertes prises en charge pour les événements et le bien-être lorsque les notifications sont autorisées. Un onglet fermé ne peut pas transmettre ces alertes de l’appareil ; les doses dues apparaissent dans la boîte de réception LifeWell lorsque vous ouvrez la liste des médicaments.
- **La feuille de partage du système.** Sur le Web, partager une [liste de courses](../features/shopping-list.md) ouvre la vue LifeWell avec une action explicite pour copier, au lieu de la feuille du système.

Le compte et les enregistrements sauvegardés sont disponibles sur les deux plateformes. Consultez le guide de chaque fonction pour connaître ses modalités d’envoi et les autorisations nécessaires.

## Ajouter l’application à l’écran d’accueil \{#adding-it-to-a-home-screen}

La plupart des navigateurs proposent de l’installer. Vous obtenez une icône et une fenêtre sans barre d’adresse. Rien d’autre n’est téléchargé, et l’application fonctionne de la même manière : c’est une fonction du navigateur.

## Hors ligne \{#offline}

L’application Web bloque la page courante lorsque la connexion est coupée. Si **Continuer à travailler hors ligne** est activé, vous pouvez choisir de mettre en attente quelques notes rapides compatibles sur cet appareil ; le reste du dossier nécessite toujours le serveur. Les pages ne sont pas mises en cache pour une ouverture hors ligne. Voir [Hors ligne et synchronisation](../concepts/offline-and-sync.md).

## Pages publiques \{#the-public-pages}

Certaines adresses fonctionnent sans compte : les [outils](../features/tools.md), le catalogue de prénoms, l’annuaire des donneurs de sang, le blog, les pages de fonctions et les quatre pages juridiques. Ce sont des pages ordinaires, rendues en véritable HTML plutôt qu’assemblées par JavaScript après chargement. Un moteur de recherche ou un robot d’IA lit donc les mêmes mots que vous.
