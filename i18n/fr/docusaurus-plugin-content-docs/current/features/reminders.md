---
title: Rappels
description: "Ce que LifeWell peut vous rappeler, quand et sur quel appareil : trois interrupteurs généraux, des heures calmes et aucune autorisation d’alarme exacte sur Android."
keywords: [rappels LifeWell, rappel de médicament, rappel de rendez-vous, heures calmes, notifications Android]
tags: [features, everyday]
sidebar_position: 2
---

# Rappels

Vous les trouverez à `/profile/reminders`, ainsi que dans le panneau correspondant sous `/settings`.

## Les trois interrupteurs généraux \{#the-three-master-switches}

| Interrupteur | Valeur initiale | Ce qu’il couvre |
|---|---|---|
| Rappels de médicaments | **Activé** | Messages dans la boîte LifeWell pour les doses dues et non marquées lorsque vous ouvrez votre liste de médicaments sur cet appareil |
| Rappels de rendez-vous | **Activé** | Événements avec heure et rappel choisi ; Android peut prévenir une heure avant si les notifications sont autorisées |
| Rappels bien-être | **Désactivé** | Pauses visuelles, mouvement et posture réglés sur leurs pages |

Les deux premières catégories partent d’un médicament ou d’un événement que vous avez choisi de noter. Les pauses bien-être sont des interruptions facultatives et commencent désactivées. Activer une catégorie ne crée ni événement ni rappel quotidien.

Ce sont des interrupteurs généraux. Vous pouvez aussi désactiver le rappel d’un médicament précis. L’interrupteur des médicaments décide si cet appareil demande un message pour une dose due lorsque vous ouvrez la liste ; il ne supprime pas les messages déjà présents.

## Heures calmes \{#quiet-hours}

Les heures calmes sont conservées **sur l’appareil**, pas sur votre compte. Le panneau l’indique clairement. Vous pouvez vouloir des notifications sur le téléphone que vous portez, mais pas sur la tablette restée dans la cuisine. Les avis de prise de médicament échue restent dans la boîte de réception LifeWell, sans passer par ce canal de l’appareil.

## Sur Android \{#on-android}

Si vous autorisez les notifications de l’appareil, Android peut transmettre les rappels d’événements et de bien-être pris en charge, même lorsque LifeWell est fermé. Les avis concernant une dose échue et non marquée apparaissent dans la boîte de réception LifeWell ; ils n’envoient ni notification sur le téléphone ni courriel. Le suivi de l’eau ne programme pas de rappel pour boire.

:::note[LifeWell ne demande jamais l’autorisation des alarmes exactes]
Android réserve ces alarmes aux réveils et aux calendriers. L’extension de notifications déclare cette autorisation par défaut ; LifeWell la retire de sa compilation et programme les rappels sans précision à la minute. Un rappel peut donc arriver quelques minutes avant ou après l’heure prévue. Demander une autorisation que Google n’accorde pas à ce type d’application aurait bloqué son examen sans améliorer les rappels.
:::

## Notifications push \{#push-notifications}

Une notification push est distincte d’un rappel :

- **Un rappel sur l’appareil** est programmé à partir d’un événement ou d’une sollicitation de bien-être pris en charge. Il peut arriver lorsque l’application est fermée.
- **Une notification push** est un message envoyé manuellement par l’équipe LifeWell via OneSignal, par exemple une annonce. LifeWell n’envoie pas automatiquement de push pour les événements du compte.

La réception push est **uniquement entrante** : LifeWell inscrit votre appareil et dirige l’ouverture de la notification. Vous l’activez appareil par appareil. Sur le Web, elle ne fonctionne que sur le site déployé.

Autoriser les notifications ne signifie pas que l’appareil est inscrit. Le panneau de réglages affiche son état ; sur le Web, l’inscription n’est possible qu’à l’adresse publiée de LifeWell. L’équipe choisit quand envoyer un message, donc activer le push ne promet pas de messages réguliers.

## Contenu d’un rappel \{#what-a-reminder-shows}

L’avis de prise de médicament échue reste dans la boîte de réception LifeWell. Sur Android, le titre d’un rappel d’événement pris en charge peut apparaître sur l’écran verrouillé et être lu par une personne proche. Si cela vous préoccupe, les réglages du téléphone peuvent masquer le contenu jusqu’au déverrouillage. Cette commande appartient à Android, pas à LifeWell.
