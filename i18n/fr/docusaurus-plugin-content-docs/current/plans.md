---
title: Offres
description: 'Free, Pro et Family : contenu de chaque offre, places Family, logique de l’offre gratuite et deux modes de paiement. Prix en dollars américains, par mois ou par an.'
keywords: [offres LifeWell, prix LifeWell, offre gratuite, offre Pro, offre Family, places Family, Google Play Billing]
tags: [plans, account]
sidebar_position: 8
---

# Offres

Trois offres. La page [`/plans`](https://lifewell.aoneahsan.com/plans) de l’application en donne les valeurs actuelles, lues dans la même table que celle utilisée par le serveur pour appliquer les limites.

Les prix sont en dollars américains.

| | Free | Pro | Family |
|---|---|---|---|
| Par mois | 0 $ | **9,99 $** | **8,99 $ par place** |
| Par an | 0 $ | **99,90 $** | **89,90 $ par place** |
| Places | 1 | 1 | 3 au minimum, sans maximum |
| Personnes que vous pouvez noter | 50 | Sans limite | Sans limite |
| Entrées | Sans limite | Sans limite | Sans limite |
| Stockage | 5 Go | 50 Go | 200 Go |
| Exporter une période choisie, jusqu’à 5 000 lignes par table | Oui | Oui | Oui |
| Liens de partage en lecture seule | Oui | Oui | Oui |
| Exportations programmées | — | Oui | Oui |
| Consultations en cours | Jusqu’à 10 | Sans limite | Sans limite |
| Estimations IA par mois | 50 | 1 000 | 1 500 |

Family commence à trois places : 26,97 $ par mois pour trois. Vous choisissez leur nombre à l’achat, puis les attribuez.

## Places Family \{#family-seats}

Une place change l’offre d’une personne, rien d’autre.

- **À qui l’attribuer.** À une personne déjà reliée à vous comme famille dans LifeWell et présente dans votre [groupe Famille](./domains/people.md#connections-and-groups). Pas à une personne inconnue.
- **Aucun partage implicite.** Une place ne vous donne accès ni au dossier, ni aux entrées, ni aux proches, ni aux fichiers de la personne qui la reçoit. Elle ne voit pas non plus les vôtres. Vous voyez seulement qu’elle occupe une place et depuis quand.
- **Chaque partie peut y mettre fin**, à tout moment.
- **Si l’offre s’arrête, toutes les places s’arrêtent.** Chaque dossier reste intact. Ce qui dépasse les limites de Free passe en lecture seule jusqu’à ce que la personne choisisse sa propre offre.

## Comment l’offre gratuite est définie \{#how-the-free-tier-is-drawn}

La différence entre offres ne dépend pas de la quantité de produit que vous voyez, mais **du coût de chaque usage** :

- Une ligne de table ne coûte presque rien : Free permet 50 personnes, un nombre illimité d’entrées et des liens de partage en lecture seule.
- Le stockage a un coût réel sans être facturé à chaque geste : il est plus petit sur Free, pas absent.
- Une estimation IA coûte à chaque demande : sa limite est la plus stricte. **Utiliser votre propre clé retire cette limite avec toutes les offres, Free compris.**
- Une tâche programmée se répète sans demande de votre part à chaque exécution : les exportations automatiques relèvent donc des offres payantes.

**L’exportation est disponible avec toutes les offres.** Ce n’est pas un oubli. Une application qui conserve votre vie ne doit pas vous faire payer pour en récupérer une copie.

## Deux façons de payer \{#two-ways-to-pay}

### Sur le Web \{#on-the-web}

`/profile/premium` affiche les offres et les moyens de paiement. Le paiement se règle manuellement plutôt que dans un formulaire de carte : vous payez, nous l’indiquez, puis un administrateur applique l’offre à votre demande avec une date de fin.

### Sur Android \{#on-android}

Sur Android, les achats passent par **Google Play Billing**, car Google exige ce système pour les biens numériques. L’application ne propose aucun lien vers un paiement ailleurs ; le panneau Android n’affiche pas non plus les prix Web ni une comparaison entre les deux.

:::warning[La facturation Google Play est construite mais désactivée]
Le parcours d’achat, la vérification côté serveur et les avis de renouvellement Google sont écrits, compilés et testés avec des réponses enregistrées. **Aucun achat réel n’a encore été effectué**, le compte de service Play n’est pas configuré et l’interrupteur de la plateforme est désactivé par défaut. Tant qu’une version de test interne n’a pas effectué un véritable achat sur un appareil, le parcours Android reste non prouvé. Il ne peut pas être exercé hors d’une version signée pour Google Play.
:::

## Ce que les offres limitent réellement \{#what-a-plan-actually-gates}

Le serveur refuse l’opération. Une limite ne se réduit pas à un bouton masqué : si vous dépassez le plafond, la base refuse l’écriture, même si la demande ne vient pas de l’application.

Les limites sont conservées dans la ligne de l’offre et peuvent changer sans nouvelle version. Les chiffres ci-dessus sont ceux actuellement indiqués par les offres.

## Attributions et dates de fin \{#grants-and-end-dates}

Une offre appliquée par un administrateur porte sa date de fin et sa raison. Une attribution déjà expirée est refusée, car elle serait invisible sur chaque écran sans produire d’erreur.

Une [récompense de parrainage](./features/referrals.md) prolonge une offre payante au lieu de la remplacer.

## Modifier ou arrêter une offre \{#changing-or-stopping}

- **Web** — l’offre reste active jusqu’à sa date de fin. Aucun renouvellement automatique n’est à annuler.
- **Android** — gérez ou annulez l’abonnement dans Google Play, où se trouve la transaction. LifeWell ne propose pas de faux bouton d’annulation sans effet.

Votre dossier ne change pas lorsque l’offre se termine. Les limites Free s’appliquent aux nouvelles écritures ; tout ce qui est déjà enregistré reste, et [l’exportation](./your-data/export.md) demeure disponible.
