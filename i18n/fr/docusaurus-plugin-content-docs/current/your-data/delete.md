---
title: Supprimer votre dossier
description: Supprimez tout votre compte ou un seul des sept espaces en conservant le reste. Découvrez exactement ce qui disparaît, ce qui reste et l’état actuel de chaque fonction.
keywords: [supprimer compte LifeWell, supprimer mes données, suppression RGPD, suppression du compte]
tags: [your-data, privacy]
sidebar_position: 2
---

# Supprimer votre dossier

Allez dans `/settings` → **Vos données**. L’exportation apparaît au-dessus de la suppression, dans cet ordre voulu.

## Supprimer votre compte \{#delete-your-account}

Cette action concerne tout le dossier et le compte qui le porte.

Le parcours est le suivant : **Vos données** → **Exporter une copie** → **Supprimer le compte** → saisir `DELETE` pour confirmer → déconnexion immédiate et suppression du dossier actif.

Il n’y a pas d’archive récupérable dans le compte actif. Des sauvegardes manuelles chiffrées peuvent conserver des données antérieures jusqu’à leur rotation, comme l’explique la page de confidentialité. L’application transmet la demande au service de suppression avec votre session connectée ; elle ne vous demande pas de saisir un identifiant de compte. Si vous ne pouvez pas vous connecter, la page publique [`/delete-account`](https://lifewell.aoneahsan.com/delete-account) explique comment demander de l’aide.

## Supprimer un espace \{#delete-one-area}

Vous pouvez enlever tout le contenu de Santé ou de Souvenirs, par exemple, et garder le reste. L’option se trouve dans `/settings` → **Vos données** → *Supprimer un seul espace*.

- **Une seule transaction** couvre toutes les tables. Elles sont toutes modifiées ensemble, ou aucune ne l’est. Un espace à moitié supprimé, sans trace de l’arrêt, serait pire que l’un ou l’autre résultat complet.
- L’application **indique les éléments supprimés**, table par table, avec leur nombre.
- Elle inscrit la suppression dans le journal de votre compte ; l’action reste identifiable au lieu de se réduire à une absence découverte plus tard.
- Vous devez **saisir les mots** `DELETE HEALTH` ou `DELETE MEMORIES`. Le serveur vérifie la saisie, pas seulement la boîte de dialogue. Une confirmation limitée à l’interface serait une commodité ; celle-ci protège la frontière réelle.

### Une suppression en cascade à connaître \{#one-cascade-worth-knowing-about}

Supprimer **Proches** retire aussi les étiquettes des photos qui indiquent les personnes présentes, puisqu’elles pointeraient vers des personnes qui n’existent plus. Ces lignes sont comptées et signalées, pas effacées silencieusement dans un autre espace.

### Proches et Partage se suppriment séparément \{#people-and-sharing-are-deleted-separately}

Supprimer **Proches** enlève les personnes, les arbres et les lieux, sans toucher à vos partages. Supprimer **Partage** révoque tous les liens, termine toutes les relations et supprime les réponses en attente, mais vos proches restent. Vider une liste de contacts ne doit jamais arrêter sans avertissement ce qu’un médecin peut lire. Voir [Partage](../domains/sharing.md).

### Ce que la suppression d’un espace conserve \{#what-deleting-an-area-deliberately-keeps}

| Élément conservé | Pourquoi |
|---|---|
| Notifications | Le registre de transmission couvre tous les espaces. Supprimer Santé ne doit pas effacer silencieusement un avis de partage |
| Votre clé de fournisseur d’IA | Identifiant du compte, pas contenu d’un espace |
| Votre connexion Google Drive | Identifiant de connexion actif à un service externe. La couper est une action distincte dans les paramètres |
| Enregistrement d’un achat Google Play | Élément du compte. L’effacer rendrait impossible l’accès à un droit payé |
| Mesure de l’usage de l’IA | Élément du compte servant au calcul des limites |

## Masquer n’est pas supprimer \{#hiding-is-not-deleting}

[Désactiver un espace](../domains/overview.md#switching-an-area-off) conserve toutes ses lignes. Le supprimer n’en garde aucune. C’est pourquoi ces deux commandes se trouvent à deux endroits distincts.

## Ce que la suppression n’atteint pas \{#what-deletion-does-not-reach}

- **Les fichiers de votre propre Google Drive.** LifeWell en conserve une référence ; supprimer le dossier retire cette référence. Les fichiers restent dans votre Drive, où il vous appartient de les supprimer. Voir [Où se trouve votre dossier](./where-it-lives.md).
- **Ce que vous avez envoyé à une autre personne.** Un message envoyé figure aussi dans sa conversation.
- **Les lignes d’audit administratif concernant votre compte.** Si l’auteur d’une action pouvait effacer sa trace, ce ne serait plus un journal. Ces lignes subsistent après le compte et décrivent une action, pas le contenu de votre dossier.
