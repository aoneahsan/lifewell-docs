---
title: Le programme de parrainage
description: Invitez quelqu’un. Une inscription confirmée donne des points, un badge et, au-delà d’un seuil, un mois d’offre payante. Tous les chiffres sont réglables par l’administration.
keywords: [parrainage LifeWell, inviter un proche, récompenses de parrainage, mois offert]
tags: [features, plans]
sidebar_position: 8
---

# Le programme de parrainage

Vous recevez un code. Une personne s’inscrit avec ce code. Une fois son inscription **confirmée**, vous gagnez des points et un badge, puis un mois d’offre payante au-delà d’un certain seuil.

## Ce que signifie « confirmée » \{#what-confirmed-means}

La confirmation repose sur un fait, pas sur un clic : le compte invité doit exister **et** posséder une adresse e-mail vérifiée. Le serveur la valide lorsque les deux conditions sont remplies.

Cette exigence est volontaire, car la confirmation donne accès à une offre payante. Récompenser un clic reviendrait à payer pour l’ouverture d’un lien.

## Règles appliquées par la base de données \{#the-rules-the-database-enforces}

- **Une personne ne peut être parrainée qu’une fois.** Supprimer puis recréer un compte ne permet pas de produire d’autres récompenses.
- **Vous ne pouvez pas vous parrainer vous-même.** Le formulaire l’indique ; la base de données l’impose.
- **Le navigateur ne peut pas déclencher l’attribution.** Une commande « confirmer mon compte » accessible au navigateur donnerait aussi accès à « me payer ».

## Ce que vous voyez des personnes invitées \{#what-you-can-see-about-the-people-you-invited}

Un nombre et un état. Jamais un nom.

L’identité des personnes invitées n’est pas détaillée pour le parrain. Cette protection vient des droits d’accès aux colonnes : la requête autorisée ne renvoie même pas l’identifiant.

## Un mois ajouté à l’offre en cours \{#a-month-that-extends-rather-than-replaces}

Si vous disposez déjà d’une offre payante lorsque la récompense arrive, le mois est ajouté à la fin de votre période. Il ne remplace pas ce que vous avez payé.

## Chaque chiffre est un réglage d’administration \{#every-number-is-an-admin-setting}

Points par inscription confirmée, badge, seuil, nombre de mois, offre concernée et plafond mensuel sont des réglages de la plateforme, pas des constantes du code. Ils peuvent changer sans nouvelle version. La phrase affichée utilise toujours leurs valeurs actuelles.

Les seuils et plafonds exacts ne sont visibles que depuis un compte connecté. Ce sont précisément les chiffres qu’une personne cherchant à détourner le programme voudrait connaître.

## Situation actuelle \{#where-it-stands-today}

:::warning[L’écran des membres n’est pas encore construit]
La partie serveur du programme fonctionne : registre, confirmation, attribution, prolongation d’une offre payante et commandes d’administration des sept valeurs. **L’écran qui afficherait votre code et votre nombre d’invitations n’existe pas encore.** Vous ne pouvez donc pas ouvrir le programme dans l’application aujourd’hui.
:::

Lorsqu’il sera disponible, vos invitations et les récompenses obtenues figureront dans [l’exportation](../reference/export-format.md) sous **People you invited** et **What your invitations earned**.
