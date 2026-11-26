---
title: Exporter une copie
description: Exportez une période choisie en JSON ou en CSV, ou créez un résumé PDF. Chaque table est limitée à 5 000 lignes par export.
keywords: [export LifeWell, exporter mes informations, télécharger mes données, export JSON CSV PDF]
tags: [your-data, export]
sidebar_position: 1
---

# Exporter une copie

Ouvrez `/health/export` ou choisissez **Exporter une copie** dans le menu principal.

Un dossier que vous ne pouvez pas relire n’en est pas un. Cette page vous permet d’en obtenir une copie.

## Les trois formats \{#the-three-formats}

| Format | Fichier | Contenu | Pour quoi faire |
|---|---|---|---|
| **JSON** | `lifewell-export-<date>.json` | Période choisie ; 5 000 lignes par table | Relire les données incluses dans la copie |
| **CSV** | `lifewell-export-<date>.zip` | Période choisie ; 5 000 lignes par table | Ouvrir les données dans un tableur |
| **PDF** | `lifewell-export-<date>.pdf` | Résumé succinct, sans tous les champs | Emporter un résumé à un rendez-vous |

Le PDF laisse volontairement certains éléments de côté. Le JSON et le CSV peuvent aussi exclure les lignes datées hors de la période choisie, celles qui dépassent le plafond d’une table et les octets des fichiers téléversés. Vous trouverez le détail champ par champ dans [Le format des fichiers d’export](../reference/export-format.md).

## Un fichier immédiat créé sur votre appareil \{#an-immediate-file-is-built-on-your-device}

L’export immédiat est créé dans votre navigateur à partir d’une lecture authentifiée de votre dossier LifeWell. Le navigateur assemble le téléchargement ; cet export manuel ne laisse pas de fichier supplémentaire stocké sur le serveur.

Ce travail s’effectue dans l’onglet : si vous quittez la page, l’export immédiat est annulé. Une copie programmée est une tâche distincte effectuée sur le serveur, décrite plus bas.

## Choisir une période \{#choosing-a-date-range}

Certaines lignes correspondent à un jour ; d’autres expliquent ce que ces lignes signifient.

- **Lignes datées** — mesure, repas, prise de médicament, événement du calendrier — respectent la période choisie.
- **Lignes de référence** — médicament, affection, repas enregistré, objectif d’un suivi — sont toujours incluses, même si elles ont été créées avant cette période.

Sans les lignes de référence, vous pourriez exporter des prises sans les médicaments correspondants ; le dossier semblerait avoir perdu des informations.

## Limite de lignes \{#the-row-ceiling}

Chaque table exporte au plus **5 000 lignes**. Si elle atteint ce plafond, le fichier l’indique dans son en-tête. Choisissez d’autres périodes si vous avez besoin de davantage de lignes.

## Exportations programmées \{#scheduled-exports}

Avec une offre admissible, `/health/export` peut lancer chaque dimanche ou mercredi une copie créée sur le serveur. Le fichier reste disponible sept jours, puis est supprimé ; la ligne d’historique peut rester visible après son expiration. Pour obtenir une copie aujourd’hui, utilisez un export immédiat dans le navigateur.

Les exportations précédentes figurent sur la page avec leur format, leur taille et leur nombre de lignes.

## Tâches \{#jobs}

Chaque exportation figure aussi dans `/jobs`, accessible au bas du menu près d’*Exporter une copie*. Vous y trouvez également les enregistrements que Speak est en train de traiter. Chaque ligne porte l’état **En cours**, **Prête** ou **Non terminée**, et propose **Ouvrir** ou **Réessayer**.

Une notification vous avertit quand l’exportation est prête. **Ouvrir** mène directement au fichier. Une exportation qui échoue n’envoie pas de notification ; elle apparaît comme **Non terminée** dans Tâches.

## Supprimer plutôt \{#deleting-instead}

Exporter et supprimer se trouvent sur le même écran, dans cet ordre voulu. Voir [Supprimer votre dossier](./delete.md).
