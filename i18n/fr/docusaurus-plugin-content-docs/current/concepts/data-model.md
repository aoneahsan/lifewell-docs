---
title: Le modèle de données
description: 'Comment LifeWell conserve une vie : une table par idée, un espace commun derrière chaque suivi et trois décisions qui influencent tout le reste.'
keywords: [modèle de données LifeWell, schéma Postgres, mesures, données de suivi, conception de base de données]
topics: [concepts, architecture]
sidebar_position: 2
---

# Le modèle de données

Postgres. Une table par idée, pas une table par écran.

## Un espace commun derrière chaque suivi \{#one-store-behind-every-tracker}

`/tracking`, `/health/water` et l’action rapide du tableau de bord sont **trois vues d’un même ensemble de données**, pas trois espaces distincts.

| Objet | Son rôle |
|---|---|
| `metric_definitions` | Registre des suivis : unité, règle de calcul par jour, bornes raisonnables, graphique, espace et objectif par défaut. Sans propriétaire, c’est un suivi système ; avec un propriétaire, il a été défini par cette personne |
| `metric_entries` | Toutes les mesures, dans tous les espaces. La série chronologique |
| `user_metric_settings` | Vos objectifs, visibilité et ordre pour chaque suivi. Sans ligne, les valeurs par défaut s’appliquent |
| `metric_daily` | Une vue qui résume chaque jour par personne et suivi, selon la règle de ce dernier |

La version 2.x écrivait un même chiffre à plusieurs endroits et les laissait diverger. Corriger cela a été le changement le plus utile de la reconstruction.

## Trois décisions à connaître \{#three-decisions-worth-knowing-before-you-read-anything-else}

### Le résumé d’une journée n’est pas un détail d’affichage \{#how-a-day-collapses-is-not-cosmetic}

Un suivi **additionne** les valeurs (eau, pas, calories) ou retient **la plus récente** (poids, tension, sommeil, humeur).

Ce champ détermine à la fois le total quotidien et le sens d’une seconde saisie le même jour : nouvelle mesure ou correction. Un index dans la base applique la règle, plutôt qu’un service que quelqu’un pourrait contourner.

### La date vient de votre appareil \{#the-date-comes-from-your-device}

Le *jour actuel* d’un suivi quotidien est **votre** jour actuel. Une personne en UTC+5 qui note de l’eau à deux heures du matin est déjà aujourd’hui. Si l’horloge du serveur décidait, cette entrée serait classée hier et la journée semblerait recommencer à 19 h.

Seul l’appareil connaît le décalage ; le client indique donc le jour. Il n’existe pas de valeur par défaut.

### Chaque entrée conserve son unité \{#the-unit-is-stored-on-every-entry}

Passer du métrique à l’impérial ne doit pas réinterpréter silencieusement douze ans de mesures. L’historique garde l’unité d’origine et la conversion se fait à la lecture.

## Le reste du dossier \{#everything-else}

Autour de ce noyau se trouvent les tables de chaque espace : affections et épisodes, médicaments et prises, repas et repas enregistrés, jours de cycle, enfants et leurs suivis, proches et liens entre eux, souvenirs et albums, notes et dossiers, événements du calendrier et listes de questions, conversations et messages, publications de communauté, fiches de professionnels, fiches de donneurs de sang et éléments du compte.

La liste complète, avec le contenu de chaque table et son mode d’exportation, figure dans [Le format des fichiers exportés](../reference/export-format.md). Cette page provient du même registre que l’exportation elle-même ; elle ne peut donc pas décrire une table absente du fichier.

## Lignes datées et lignes de référence \{#standing-rows-and-dated-rows}

Chaque table appartient à l’une de ces catégories :

- Une ligne **datée** appartient à un jour : mesure, prise, repas ou rendez-vous.
- Une ligne **de référence** donne leur sens aux lignes datées : médicament, affection, repas enregistré ou objectif.

Le filtre de dates s’applique aux premières, jamais aux secondes. Une liste de prises sans leurs médicaments ne serait pas une exportation plus courte, mais une exportation inutilisable.

## Ce qui n’est volontairement pas modélisé \{#what-is-deliberately-not-modelled}

- **Aucune note de santé, série, classification ou niveau.** Les enregistrements du quotidien et de la santé sont des observations, pas une mesure de votre valeur. Le [programme de parrainage](../features/referrals.md), distinct, peut attribuer des points et des badges pour des invitations confirmées ; ces récompenses ne notent ni votre santé ni votre activité quotidienne.
- **Aucune colonne e-mail.** Le fournisseur d’identité détient votre adresse ; une seconde copie aurait deux sources de modification et deviendrait périmée au premier changement.
- **Aucune portée de partage de position.** La liste des éléments partageables en compte trois : suivis, médicaments et arbres. La position n’en fait pas partie.
