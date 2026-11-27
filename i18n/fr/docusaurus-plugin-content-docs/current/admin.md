---
title: Le panneau d’administration
description: Dix écrans, trois rôles, un journal d’audit auquel personne ne peut écrire directement, et des réglages qui changent les limites des offres et le parrainage sans nouvelle version.
keywords: [administration LifeWell, panneau d’administration, journal d’audit, modération, gestion des comptes]
topics: [admin]
sidebar_position: 9
---

# Le panneau d’administration

`/admin` ne fait pas partie du produit utilisé par les membres. Il est documenté ici parce qu’il détermine des choses qu’ils ressentent : limites des offres, résultats de la modération et informations qu’une personne chargée de l’administration peut voir sur un compte.

## Trois rôles \{#the-three-roles}

| Rôle | Accès |
|---|---|
| **Modérateur** | File de modération en lecture seule et listes accessibles au personnel |
| **Administrateur** | Tous les éléments ci-dessous |
| **Superadministrateur** | Les mêmes, plus l’attribution des rôles |

Lire la file de modération et y prendre une décision sont **deux autorisations distinctes**. Un modérateur peut traiter la file sans trancher. Ajouter un rôle en lui donnant immédiatement le pouvoir de masquer des publications laisserait une personne non examinée décider de ce que les autres peuvent dire.

## Dix écrans \{#the-ten-screens}

| Écran | Rôle |
|---|---|
| `/admin` | Vue d’ensemble |
| `/admin/users` | Lister les comptes, attribuer ou retirer un rôle, suspendre, rétablir, supprimer ou modifier les limites d’un compte |
| `/admin/plans` | Créer, modifier ou retirer une offre ; régler une demande de plan ; accorder une offre jusqu’à une date ; gérer modes de paiement, correspondance des produits Play et achats effectués par un appareil |
| `/admin/moderation` | File des signalements et décision pour chacun |
| `/admin/verifications` | Vérifications dans les registres professionnels : approuver ou refuser |
| `/admin/inbox` | Messages de participation |
| `/admin/announcements` | Rédiger, publier et retirer des annonces, y compris pour d’autres produits |
| `/admin/content` | Catalogue de bien-être et types de suivis système |
| `/admin/settings` | Réglages de la plateforme, maintenance, indicateurs de fonctions, deux interrupteurs de paiement, chiffres du parrainage et adresse de contact |
| `/admin/audit` | Journal d’audit |

Chacune des trente-deux opérations administratives derrière ces écrans refuse un compte ordinaire. La vérification consiste à les exécuter comme une personne sans rôle d’administration, pas seulement à lire le code.

## Ce qu’un administrateur ne peut pas voir \{#what-an-administrator-cannot-see}

**Votre dossier.** Les listes et détails de comptes renvoient un ensemble limité de colonnes, sans aucune colonne de santé. Administrer un compte ne signifie jamais lire son journal personnel.

Deux autres limites délibérées :

- **Le jeton d’achat Google Play et le reçu brut** ne figurent pas parmi les colonnes lisibles par le panneau. L’un est un identifiant auprès de Google, l’autre un reçu complet ; aucun ne répond à la question « quand cette période prend-elle fin ? »
- **Les parrainages ne peuvent pas être listés.** La seule règle de lecture limite une personne à ses propres lignes. Un administrateur ne peut donc pas les parcourir. C’est une véritable limite : le panneau ne permet actuellement pas de repérer un réseau de parrainages abusifs.

## Journal d’audit \{#the-audit-log}

`/admin/audit`. Seules les fonctions serveur qui effectuent une action y ajoutent des lignes. Personne n’a de droit direct d’insertion, de modification ou de suppression : un auteur capable d’écrire dans son propre journal pourrait le falsifier, et s’il pouvait l’effacer, ce ne serait plus un journal.

Deux conséquences :

- La suppression d’un compte inscrit **d’abord** la ligne d’audit et refuse de continuer si l’écriture échoue.
- Les lignes d’audit subsistent après le compte qu’elles décrivent. Elles nomment une action, pas le contenu du dossier concerné.

## Effets visibles pour les membres \{#things-the-panel-does-that-a-member-feels}

- **Les limites des offres sont des lignes, pas du code.** Elles peuvent changer sans nouvelle version, et une offre s’ajoute par une insertion. Le panneau refuse d’enregistrer une offre payante moins avantageuse que Free ; la base le vérifie dans la même transaction.
- **Une attribution d’offre porte une date de fin et une raison.** Une attribution déjà expirée est refusée, car elle serait invisible partout sans produire d’erreur.
- **Chaque décision de modération comporte une note.** L’auteur et la personne qui a signalé lisent chacun la version qui les concerne.
- **Une vérification nomme le registre consulté.** Une affirmation sans registre ne peut être que refusée.
- **Une dérogation aux limites d’un compte comporte une note.** Sans explication, personne n’oserait la retirer.

## Deux commandes aux effets plus limités qu’il n’y paraît \{#two-controls-that-do-less-than-they-look-like}

Ces limites figurent ici, là où elles seront lues :

- **Désactiver un indicateur de fonction ne bloque aucune écriture.** Cela retire l’entrée du menu et l’écran ; c’est une présentation, pas une protection.
- **Le mode maintenance est un avis, pas une frontière d’accès.** Il modifie l’affichage, mais ne ferme pas la base de données.

## Une action sans écran \{#the-one-thing-with-no-screen}

Annuler un parrainage est une fonction serveur sans interface ; l’opération se fait directement dans la base. Elle exige une raison : sans explication, personne n’oserait revenir sur cette annulation.
