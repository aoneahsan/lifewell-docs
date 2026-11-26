---
title: Confidentialité et sécurité
description: 'Ce qui quitte votre appareil et ce qui y reste : connexion sans mot de passe, règles par ligne, mesures filtrées, contacts, photos de pièces d’identité et promesses que LifeWell ne fait pas.'
keywords: [confidentialité LifeWell, confidentialité des données de santé, sécurité par ligne, filtrage des mesures, autorisation contacts, places Family]
tags: [concepts, privacy]
sidebar_position: 3
---

# Confidentialité et sécurité

Voici la version complète, y compris ce qu’une page promotionnelle préférerait parfois taire.

## Connexion \{#sign-in}

Google uniquement. Il n’y a aucun champ de mot de passe : **nous n’en voyons ni n’en conservons aucun**, puisqu’il n’y en a pas à conserver.

Sur le Web, la session se trouve dans le stockage du navigateur ; sur Android, dans l’espace sécurisé de la plateforme. Se déconnecter partout termine toutes les sessions, pas seulement celle de l’appareil présent.

## Ce qui empêche un autre compte de lire votre dossier \{#what-stops-another-account-reading-your-record}

La sécurité par ligne est active sur chaque table, et chaque lecture s’exécute **sous votre identité**. Il n’y a aucune clé d’administration dans le navigateur ni de chemin que l’application pourrait emprunter pour vous.

Trois détails comptent, car c’est là que des erreurs surviennent souvent :

- **Une liste est filtrée, pas rejetée.** La sécurité par ligne de Postgres renvoie moins de lignes plutôt qu’une erreur. Une requête sans filtre de propriétaire peut donc sembler fonctionner. Chaque lecture de liste filtre sur la colonne examinée par la règle.
- **Les règles sont vérifiées avec de vraies lignes.** Une requête qui ne renvoie rien satisferait n’importe quelle règle sans rien prouver. Les comptes de test contiennent des données : l’un a quatre-vingt-dix jours de mesures, l’autre quatorze. Aucun n’est administrateur.
- **Chaque liste a un plafond.** Une lecture renvoie vingt lignes par défaut, cinquante au maximum, limite appliquée par la base. Aucune requête ne parcourt toute une table.

## Ce que nous mesurons de votre usage \{#what-we-collect-about-how-you-use-it}

Quatre services, chacun désactivé si sa clé manque :

| Service | Rôle |
|---|---|
| Google Analytics 4 | Pages consultées |
| Amplitude | Actions effectuées |
| Microsoft Clarity | Relecture des sessions pour trouver les défauts de l’interface |
| Sentry | Erreurs |

**Aucun ne reçoit le contenu de votre dossier.** Une liste autorisée l’impose : une propriété de mesure ne passe que si elle figure dans le registre de cet événement *et* satisfait un contrôle de type. Une chaîne doit être un identifiant court ; phrase, adresse e-mail ou corps de note ne passent pas. Un nombre doit être un petit entier positif ; une mesure personnelle ne passe pas pour un compteur.

Les filtres sont testés en y soumettant de vrais identifiants : le test échoue si l’un survit. Lire seulement le code d’un filtre ne suffirait pas à repérer sa régression.

La relecture de session mérite une attention particulière : elle enregistre une interface, pas seulement un événement. Les éléments sensibles sont marqués pour être masqués dans l’enregistrement.

:::note[Firebase Analytics n’est pas interdit, contrairement à ce qu’indiquait cette page]
Une ancienne version de cette documentation prétendait que Firebase Analytics était interdit et remplacé. C’était faux. Google Analytics 4 **est** la propriété Firebase Analytics — une propriété, deux façons de la consulter — et fonctionne aux côtés d’Amplitude, de Clarity et de Sentry. Ces quatre services forment l’ensemble des outils de mesure. La phrase précédente donnait une fausse idée de ce que le produit fait.
:::

## Autorisations \{#permissions}

[`/permissions`](https://lifewell.aoneahsan.com/permissions) liste toutes les autorisations déclarées et leur raison. La liste est courte et vérifiée dans le manifeste Android fusionné, pas seulement dans les intentions du projet : les extensions ajoutent parfois des autorisations sans qu’une personne les ait choisies.

Aucune autorisation n’est demandée pour les SMS ou l’historique des appels.

### Contacts

Android ne demande l’accès que lorsque vous appuyez sur **Contacts** près d’un numéro de téléphone. La lecture et la modification des contacts forment une seule autorisation Android ; LifeWell ne lit que le nom et les numéros du contact choisi et ne conserve que le numéro sélectionné. Il n’ajoute, ne modifie et ne supprime jamais de contact. Votre carnet d’adresses n’est ni téléversé, ni parcouru, ni conservé. Si vous refusez, vous saisissez simplement le numéro.

## Photo de la pièce d’identité d’une autre personne \{#a-picture-of-somebody-elses-identity-card}

La photo recto verso d’une pièce d’identité ajoutée à une personne de votre dossier est conservée par LifeWell, sous forme chiffrée, et non dans votre Google Drive. C’est la seule image traitée ainsi, car un administrateur doit pouvoir l’ouvrir pour une vérification. Seuls les administrateurs LifeWell y ont accès et chaque ouverture est inscrite dans un journal. Vous voyez sa présence, sa taille et sa date, mais pas l’image. Ni la personne concernée, ni vos relations, ni un lien de partage ne peuvent la voir. La retirer, supprimer cette personne ou supprimer votre compte l’efface du stockage actif ; une ancienne copie subsiste dans les sauvegardes manuelles chiffrées jusqu’à leur rotation. Voir [Proches](../domains/people.md#identity-card-pictures).

## Les places Family ne partagent rien \{#family-seats-share-nothing}

Une place payée par quelqu’un d’autre change votre offre, rien de plus. La personne qui paie ne voit ni votre dossier, ni vos entrées, ni vos proches, ni vos fichiers ; vous ne voyez pas non plus les siens. Elle voit uniquement que vous occupez une place et depuis quand. Voir [Places Family](../plans.md#family-seats).

## Ce que LifeWell ne prétend pas \{#what-lifewell-does-not-claim}

- **Pas de chiffrement de bout en bout.** Le fournisseur de base chiffre votre dossier en transit et au repos, mais la base peut le lire. Dire le contraire serait faux.
- **Ce n’est pas un dispositif médical**, et rien dans l’application ne constitue un diagnostic.
- **Aucun réseau publicitaire.** Rien à votre sujet n’est vendu ; aucun code publicitaire tiers n’est présent.
- **Aucune restauration à un instant donné.** Les sauvegardes sont réalisées à la main et vérifiées par restauration. Votre propre copie est [l’exportation](../your-data/export.md), disponible avec toutes les offres.

## Exporter ou supprimer \{#getting-it-out-or-getting-rid-of-it}

[Exporter une copie](../your-data/export.md) · [Supprimer votre dossier](../your-data/delete.md) · [Où se trouve votre dossier](../your-data/where-it-lives.md).

Les pages juridiques sont [`/privacy`](https://lifewell.aoneahsan.com/privacy) et [`/terms`](https://lifewell.aoneahsan.com/terms). Elles sont écrites pour être lues, pas pour être endurées.
