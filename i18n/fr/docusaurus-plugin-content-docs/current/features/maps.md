---
title: Cartes et lieux
description: Suivez les liens entre souvenirs, notes, proches, événements et noms de lieux enregistrés. L’historique de position est une option distincte.
keywords: [cartes LifeWell, carte de souvenirs, lieux enregistrés, historique de position]
tags: [features, people, memories]
sidebar_position: 10
---

# Cartes et lieux

Dans l’application, `/maps` s’appelle « Connexions ». Cette vue relie les éléments déjà enregistrés ; la couche Lieux présente les noms associés à des souvenirs ou des événements. Elle lit les enregistrements d’origine sans en créer une autre copie ni déduire de coordonnées géographiques.

## Vues des liens \{#the-four-maps}

| Adresse | Ce qu’elle ouvre |
|---|---|
| `/maps` | La vue Connexions et ses couches Tout, Personnes, Lieux et Historique de position |
| `/maps/memories` | Un parcours limité des liens à partir d’un souvenir |
| `/maps/notes` | Un parcours limité des liens à partir d’une note |
| `/maps/people` | Le graphe des personnes et de leurs relations |

`/maps/full` enlève l’habillage de la page pour donner plus de place au graphe des personnes. Les éléments du calendrier et des discussions ont aussi des parcours de liens ; leurs dates et noms de lieux restent attachés aux enregistrements d’origine.

## Lieux enregistrés \{#saved-places}

Un lieu est ici le nom que vous avez saisi, pas une position recueillie par LifeWell. La couche Lieux liste les souvenirs et événements du calendrier associés à un nom de lieu. Les lieux enregistrés figurent dans [l’exportation](../reference/export-format.md).

## Historique de position \{#location-history}

`/people/location-tracking` et `/people/location-history` décrivent une fonction distincte, **désactivée par défaut**. L’enregistreur de position en arrière-plan est implémenté pour Android 3.31.0 et les versions suivantes. Il demande des autorisations de localisation distinctes à l’activation. L’historique existant reste consultable et supprimable. La version 3.31.0 doit encore être mise en ligne sur Google Play par le propriétaire et vérifiée sur un appareil réel ; ne comptez donc pas sur cet enregistreur dans la version actuellement proposée par le magasin.

:::note[Votre position n’est jamais partagée avec un autre compte]
Un lien peut donner accès à un suivi, à vos médicaments ou à un arbre, et à rien d’autre. Le partage de position n’existe pas dans la base de données ; il ne s’agit pas seulement d’une option absente de l’écran. Voir [Partage](../domains/sharing.md).
:::

## Contenu de l’exportation \{#what-the-export-carries}

Les lieux enregistrés et les réglages de position figurent en JSON et CSV. Le PDF compte les lignes de lieux sans imprimer de liste de coordonnées.
