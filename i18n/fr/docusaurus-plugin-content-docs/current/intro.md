---
id: intro
title: LifeWell
description: LifeWell réunit les personnes et les moments de votre vie — famille, amis, souvenirs et projets, avec le bien-être autour. Sur le Web et Android, sous votre contrôle.
keywords: [LifeWell, compagnon de vie, arbre généalogique, proches, souvenirs, famille et amis, application Android]
tags: [overview, getting-started]
slug: /intro
sidebar_position: 1
---

# LifeWell

**Gardez les personnes et les moments de votre vie au même endroit — avec tout ce qui les entoure.**

LifeWell réunit les personnes et les moments de votre vie. Vous commencez par vous, ajoutez les proches qui comptent, puis gardez ce que vous savez d’eux et les moments partagés. Tout le reste est là pour accompagner votre vie.

LifeWell n’est pas un suivi de santé. La santé est un espace autour des personnes qui font partie de votre vie, pas le centre de l’application.

## Les sept espaces, avec vous au centre \{#the-seven-areas-and-you-in-the-middle}

| Espace | Ce que vous y trouvez |
|---|---|
| [Proches](./domains/people.md) | Famille et travail, arbre généalogique, personnes avec qui vous échangez, groupes et discussions |
| [Souvenirs](./domains/memories.md) | Photos, albums, carnet de souvenirs et légendes qui leur donnent du sens |
| [Quotidien](./domains/everyday.md) | Calendrier, notes, lieux enregistrés, rappels et liste de courses |
| [Partage](./domains/sharing.md) | Ce que vous avez autorisé d’autres personnes à lire — liens, partage avec votre partenaire et réponses reçues |
| [Santé](./domains/health.md) | Constantes, médicaments, alimentation, activité, sommeil, affections et résultats d’analyse |
| [Esprit](./domains/mind.md) | Journal, séances guidées, humeur, gratitude et respiration |
| [Étapes de la vie](./domains/stages.md) | Cycle, fertilité, grossesse, ménopause et premières années d’un enfant |

**Vous** n’êtes pas l’un de ces sept espaces. C’est votre compte : profil, offre, paramètres et commandes qui régissent tout ce qui précède.

Vous pouvez [désactiver](./domains/overview.md#switching-an-area-off) six des sept espaces. Un espace désactivé se fait discret : il disparaît du menu, mais ce que vous y avez noté reste conservé et sa page s’ouvre toujours par son adresse directe. Le Partage n’a pas d’interrupteur, car ce que vous avez autorisé d’autres personnes à lire doit rester visible pour vous.

## Où fonctionne LifeWell \{#what-it-runs-on}

| | |
|---|---|
| Web | Dans un navigateur récent, sur [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) |
| Android | La même application intégrée avec Capacitor — voir [Android](./platforms/android.md) |
| iOS | [Retirée le 16 juillet 2026](./platforms/ios.md). Aucun compte Apple Developer ne lui est associé |
| Extension de navigateur | [Construite pour Chrome et Firefox](./platforms/browser-extension.md), pas encore publiée dans leurs boutiques |

## Ce qu’il faut savoir sur votre dossier \{#what-is-true-of-your-record}

- **Quelques notes rapides peuvent attendre sur votre appareil.** Si vous activez la saisie hors ligne, les mesures compatibles, les changements de jour de cycle et les épisodes de symptômes sont envoyés au retour de la connexion. Les autres pages se mettent en pause hors ligne.
- **Vos photos et fichiers vont dans votre propre Google Drive**, avec une autorisation limitée aux fichiers créés par LifeWell. Voir [Où se trouve votre dossier](./your-data/where-it-lives.md).
- **Vous pouvez exporter une période choisie** depuis l’application : les données du dossier en JSON ou en CSV, ou un résumé PDF. Chaque table est limitée à 5 000 lignes par export. Le format est décrit [champ par champ](./reference/export-format.md).
- **Vous pouvez supprimer le compte actif, ou un seul espace**. L’application indique quelles lignes ont été supprimées. Des sauvegardes manuelles chiffrées peuvent conserver une copie antérieure jusqu’à leur rotation, comme l’explique la page de confidentialité.

## Version

Cette documentation couvre **LifeWell 3.x**, reconstruit à partir de la version 2.x publiée sur une nouvelle infrastructure.

:::warning[Le passage de 2.x à 3.0.0 a réinitialisé les dossiers]
L’infrastructure a été remplacée sans possibilité de migration. Un passage direct de 2.x à 3.0.0 ne transférait pas l’ancien dossier. Cette décision a été prise alors que l’application n’avait pas de véritables utilisateurs. Nous la documentons toujours, car une réinitialisation délibérée et une panne grave peuvent se ressembler pour la personne qui ouvre l’application.
:::

## Pour continuer \{#where-to-go-next}

- Installez l’application sur le [Web](./getting-started/install-web.md) ou sur [Android](./getting-started/install-android.md).
- Découvrez [la première ouverture](./getting-started/first-run.md), [une courte visite](./getting-started/tour.md), puis [la visite de page et le parcours de découverte](./getting-started/tours-and-walkthrough.md).
- Pour vos informations : [exportation](./your-data/export.md) · [suppression](./your-data/delete.md) · [format des fichiers exportés](./reference/export-format.md).
- Pour relier LifeWell à un calendrier, un script ou un assistant IA : [Développeurs](./developers/index.md).
