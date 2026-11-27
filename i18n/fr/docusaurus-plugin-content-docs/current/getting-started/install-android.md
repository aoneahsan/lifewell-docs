---
title: Installer LifeWell sur Android
description: LifeWell sur Android reprend la même application que sur le Web. Installez-la depuis Google Play et connectez-vous avec Google pour retrouver le même dossier.
keywords: [LifeWell Android, Google Play, application Capacitor, installer LifeWell sur Android]
topics: [getting-started, android]
sidebar_position: 2
---

# Installer LifeWell sur Android

L’application Android reprend la version Web dans une enveloppe Capacitor. Elle utilise le même compte et lit le même dossier : ce que vous écrivez sur le téléphone se retrouve sur l’ordinateur, et inversement.

## Où l’obtenir \{#getting-it}

[LifeWell sur Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell)

| | |
|---|---|
| Identifiant de l’application | `com.aoneahsan.lifewell` |
| Version minimale d’Android | **Android 9 (API 28)** |
| Série couverte par cette documentation | **3.x** |

Un appareil sous Android 9 ne peut pas l’installer. Cette limite vient du réglage de compilation, pas d’une politique de distribution. Elle est indiquée ici parce que Google Play masque simplement la fiche aux appareils incompatibles, sans expliquer pourquoi.

## Ce qu’ajoute la version Android \{#what-the-android-build-adds}

- **Rappels pris en charge sur l’appareil.** Android peut transmettre les rappels d’événements et de bien-être si vous autorisez les notifications, même lorsque l’application est fermée. Les avis de prise de médicament échue restent dans la boîte de réception LifeWell. Voir [Rappels](../features/reminders.md).
- **Connexion native et conservation de la session.** La session est placée dans l’espace sécurisé de la plateforme plutôt que dans le stockage du navigateur.

## Ce qu’elle ne demande pas \{#what-it-does-not-ask-for}

L’application déclare un nombre volontairement limité d’autorisations, expliquées sous `/permissions`. Elle ne demande ni l’accès aux SMS ni l’historique des appels. Les contacts ne sont demandés que lorsque vous appuyez sur **Contacts** à côté d’un numéro de téléphone (voir le tableau des autorisations Android). Les rappels ne demandent jamais l’autorisation des alarmes exactes : ils sont programmés de manière approximative, car Google réserve cette autorisation aux réveils et aux calendriers.

Pour le détail, y compris les changements depuis 2.x, voir [Android](../platforms/android.md).

## Mises à jour \{#updating}

Google Play distribue les mises à jour natives. Les installations compatibles peuvent aussi recevoir des paquets Native Update signés pour les ressources Web. Un avis dans l’application indique lorsqu’une version plus récente exige une mise à jour. Voir [Mises à jour à distance](../platforms/android.md#over-the-air-updates).
