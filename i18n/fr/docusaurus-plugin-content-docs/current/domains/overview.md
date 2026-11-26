---
title: Les sept espaces
description: 'LifeWell place sept espaces autour de Vous : les proches d’abord, puis les souvenirs, le quotidien et le partage, avec la santé, l’esprit et les étapes de la vie autour. Six se désactivent sans supprimer leur contenu ; pas le Partage.'
keywords: [espaces LifeWell, domaines de vie, désactiver un espace, navigation LifeWell, partage LifeWell]
tags: [concepts, domains]
sidebar_position: 1
---

# Les sept espaces

Six applications connaissaient chacune une partie de vous. Aucune ne vous connaissait vraiment.

LifeWell réunit sept espaces avec **Vous** au centre. Vous, c’est votre compte — profil, offre, paramètres — et non l’un des sept espaces : un compte ne se désactive pas comme un espace.

Les proches viennent d’abord. Vous ajoutez les personnes qui comptent, gardez ce que vous savez d’elles et les moments partagés. Souvenirs, quotidien et partage restent auprès d’elles. Santé, esprit et étapes de la vie les entourent, pour accompagner votre vie. La santé est l’un de ces espaces, pas le but de l’application.

| Espace | Groupe du menu | Contenu |
|---|---|---|
| [Proches](./people.md) | Famille et travail | Personnes, arbres, lieux, messages, communauté, professionnels et donneurs de sang |
| [Souvenirs](./memories.md) | Souvenirs | Photos, souvenirs et notes |
| [Quotidien](./everyday.md) | Quotidien | Calendrier |
| [Partage](./sharing.md) | Partage | Ce que vous avez autorisé d’autres personnes à lire — liens, partage avec un partenaire et réponses reçues |
| [Santé](./health.md) | Santé | Suivis, médicaments, alimentation, activité et affections |
| [Esprit](./mind.md) | Esprit | Journal, respiration, sommeil et pauses au bureau |
| [Étapes de la vie](./stages.md) | Étapes de la vie | Cycle, bébé et croissance |

## Pourquoi les adresses ne correspondent pas toujours aux espaces \{#why-the-addresses-do-not-match-the-areas}

`/health/mood-journal` se trouve dans **Esprit**. `/health/menopause` appartient aux **Étapes de la vie**. `/people/share-links` relève du **Partage**. Le préfixe ne correspond pas à l’espace, et il reste ainsi volontairement.

Ces adresses étaient indexées par les moteurs de recherche dans la version 2.x. Une adresse indexée est une promesse à toutes les personnes qui l’ont reprise dans un lien. La reconstruction change le code, pas les adresses. Voir la liste des [Adresses qui ne changent pas](../reference/addresses.md).

Un espace est une idée du produit. Un préfixe d’adresse est une trace de son histoire. Ne confondez pas les deux.

## Désactiver un espace \{#switching-an-area-off}

`/settings?tab=domains` présente six interrupteurs. Le Partage figure aussi dans cette liste, mais sans interrupteur : ce que vous avez laissé lire à d’autres doit rester visible pour vous. Voir [Partage](./sharing.md#why-it-has-no-switch).

**Désactiver un espace le rend discret, selon trois règles concrètes :**

- le menu cesse de le montrer ;
- tout ce que vous y avez noté reste conservé, maintenant et plus tard ;
- chaque page s’ouvre toujours par son adresse directe, avec une phrase expliquant pourquoi elle ne figure pas au menu.

Ce panneau n’a pas de bouton Enregistrer. Un interrupteur qui attendrait ce bouton donnerait une fausse impression de changement : chaque bascule est écrite immédiatement et l’interrupteur confirme l’action. Si l’écriture échoue, il revient à son état précédent et vous l’indique.

## Masquer un espace n’est pas le supprimer \{#hiding-an-area-is-not-deleting-it}

Ce sont deux actions distinctes :

| Action | Où | Résultat |
|---|---|---|
| Désactiver un espace | `/settings` → Espaces | Il disparaît du menu. Toutes ses lignes restent |
| [Supprimer un espace](../your-data/delete.md#delete-one-area) | `/settings` → Vos données | Toutes ses lignes sont supprimées dans une transaction et l’application indique leur nombre |

Confondre la première action avec la deuxième ne laisserait aucun retour possible. C’est pourquoi la suppression demande de saisir des mots précis.

## Ce qui détermine les écrans affichés \{#what-decides-which-screens-appear}

Deux réponses, et rien d’autre :

1. **Les espaces que vous avez activés** — les six interrupteurs ci-dessus.
2. **La manière dont vous vous définissez** — un champ du profil qui décide si six écrans des étapes de la vie figurent au menu. Voir [Votre première ouverture](../getting-started/first-run.md#the-one-answer-that-changes-what-you-see).

Une personne concernée par les deux réglages retrouve la même explication aux deux endroits. C’est voulu.
