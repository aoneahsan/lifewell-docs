---
title: Santé
description: Mesures, médicaments, alimentation, activité et affections — un espace autour de vos proches, disponible si vous le souhaitez, sans être le centre de LifeWell.
keywords: [santé LifeWell, suivi de santé, suivi des médicaments, suivi des symptômes, constantes]
topics: [domains, health]
sidebar_position: 6
---

# Santé

Un espace autour des personnes qui font partie de votre vie, disponible si vous le souhaitez. LifeWell réunit les personnes et les moments de votre vie ; la santé peut les accompagner, mais elle n’est pas le centre de l’application.

## Suivis \{#trackers}

`/health/water` et les écrans voisins montrent **les mêmes données**. Un verre d’eau noté depuis l’action rapide du tableau de bord, `/health/water` ou `/tracking` représente la même ligne : aucune deuxième copie ne risque de diverger.

Chaque suivi possède une unité, une façon de résumer la journée et des limites raisonnables. Deux comportements sont voulus :

- **Addition** — eau, pas, calories. Une deuxième entrée dans la journée ajoute une mesure.
- **Dernière mesure retenue** — poids, tension, sommeil, humeur. Une deuxième entrée corrige la première.

La base de données applique cette différence, quel que soit l’écran par lequel la ligne arrive.

Les écrans datés comprennent l’eau, les pas, le poids, l’IMC, la tension artérielle, la glycémie, le cholestérol, la fréquence cardiaque, le sommeil, les siestes, la marche et les vitamines quotidiennes.

**Votre journée vous appartient.** La date d’une entrée vient de votre appareil, pas de l’horloge du serveur. Une personne en UTC+5 qui note un verre d’eau à deux heures du matin reste sur la journée en cours ; son jour ne recommence pas à 19 h.

## Médicaments \{#medications}

`/health/medications` garde le nom du médicament, la dose, le programme et les prises réellement effectuées. `/health/child-medication` fait de même pour un enfant, dans une liste séparée afin qu’une dose pédiatrique ne se retrouve pas parmi celles d’un adulte.

Les médicaments peuvent déclencher des [rappels](../features/reminders.md).

## Alimentation et repas \{#food-and-meals}

Vous y accédez par `/diet-plan`. Cet espace réunit :

- les **repas** — ce que vous avez mangé et quand ;
- les **repas enregistrés** — ceux que vous reprenez souvent, accessibles en un geste ;
- les **recettes** et le **planificateur de repas** ;
- une **période de jeûne**, pour les personnes qui en notent une ;
- les **portions** et un **analyseur nutritionnel** ;
- la **[liste de courses](../features/shopping-list.md)**, que le planificateur peut remplir.

## Activité physique \{#exercise}

`/exercise` conserve vos séances : activité, durée et intensité. `/health/workout-timer`, `/health/stretching`, `/health/yoga` et `/health/kegel` sont des parcours guidés.

## Affections \{#conditions}

`/health/symptoms` est le point d’entrée. Une affection est un dossier de fond — ce qu’elle est et depuis quand — tandis qu’un épisode est un événement daté qui lui est rattaché. À côté se trouvent allergies, asthme, arthrite, migraine, vaccinations, résultats d’analyse et antécédents médicaux.

Cette séparation aide à relire le dossier plus tard : une liste d’épisodes sans affection associée dit peu de choses.

## Ce que cet espace ne fait pas \{#what-this-area-is-not}

Il ne vous attribue ni note, ni classement, ni série à maintenir. Aucun chiffre sur dix et aucun badge de départ. Un trou dans le dossier reste un trou dans le dossier — *un dossier incomplet reste un dossier*.

## Emporter vos informations \{#taking-it-out}

Vous pouvez inclure les dossiers de santé d’une période choisie dans [un export](../your-data/export.md). Le JSON et le CSV contiennent les champs des tables prises en charge, dans la limite de 5 000 lignes par table. Le PDF est un résumé plus court à emporter à un rendez-vous ; il laisse de côté certains champs privés et les lignes trop nombreuses.
