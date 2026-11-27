---
title: Recherche
description: Une seule recherche dans tout votre dossier. La partie serveur existe, mais la page n’est pas terminée ; l’application le dit au lieu d’afficher une liste vide.
keywords: [recherche LifeWell, rechercher dans son dossier]
topics: [features]
sidebar_position: 3
---

# Recherche

`/search` permet de chercher dans votre propre dossier — notes, souvenirs, proches, événements, médicaments et autres éléments — depuis un champ de la barre supérieure.

:::warning[La page n’est pas terminée]
La recherche elle-même existe : la requête couvrant votre dossier est écrite et déployée. La page qui l’ouvre n’est pas encore construite. L’application l’indique au lieu d’afficher une liste vide qui pourrait vous faire croire qu’aucun de vos éléments ne correspond.
:::

## Ce que la recherche couvre \{#what-it-will-and-will-not-reach}

- **Votre propre dossier uniquement.** La recherche s’exécute sous votre compte, avec les mêmes règles d’accès aux lignes que toute autre lecture. Elle ne peut pas atteindre les lignes d’un autre compte.
- **Votre dossier, pas les pages publiques.** Le blog, les pages de fonctions et les outils sont des pages publiques ordinaires ; vous les trouverez avec un moteur de recherche, pas avec ce champ.
- **Aucune indexation.** `/search` porte la directive `noindex` et ne figure volontairement pas dans le plan du site. Une page de recherche indexée inviterait à l’interroger.
