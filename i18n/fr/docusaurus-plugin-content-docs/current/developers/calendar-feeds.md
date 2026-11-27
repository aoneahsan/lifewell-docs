---
title: Flux de calendrier
description: Abonnez Google Calendar, Apple Calendar ou Outlook à votre calendrier LifeWell avec une adresse en lecture seule, révocable à tout moment.
keywords: [flux calendrier LifeWell, abonnement calendrier LifeWell, flux ics, abonnement Google Calendar]
topics: [developers, calendar]
sidebar_position: 6
last_update:
  date: 2026-11-19
  author: L’équipe LifeWell
---

# Flux de calendrier

Un flux affiche votre calendrier LifeWell dans l’application de calendrier que vous utilisez déjà. Créez-le sous **Paramètres → Autres applications → Flux de calendrier**, copiez son adresse, puis abonnez-y Google Calendar, Apple Calendar, Outlook ou toute application acceptant un abonnement `.ics`. Le flux est en lecture seule : l’autre application voit les événements LifeWell sans pouvoir les modifier.

## Comment m’abonner ? \{#how-do-i-subscribe}

1. Dans LifeWell, ouvrez **Paramètres → Autres applications → Flux de calendrier**, puis choisissez **Nouveau flux**.
2. Copiez l’adresse fournie.
3. Dans votre calendrier, ajoutez un calendrier **depuis une URL** et collez l’adresse. Google Calendar appelle cette option *Depuis l’URL* ; Apple Calendar, *Nouvel abonnement à un calendrier*.

C’est l’application de calendrier, et non LifeWell, qui décide de la fréquence de consultation. Certaines vérifient le flux toutes les quelques minutes ; Google Calendar peut prendre plusieurs heures. Un changement dans LifeWell peut donc mettre du temps à y apparaître.

## Que contient le flux ? \{#what-does-the-feed-contain}

Les événements de votre [calendrier LifeWell](../features/calendar-and-appointments.md), depuis 90 jours auparavant jusqu’à environ 13 mois à venir, dans la limite de 2 000 événements. Rien d’autre dans votre dossier n’est accessible par ce flux, et les notes privées en sont exclues.

Les horaires sont locaux, comme dans LifeWell : *dentiste à 9 h 30* reste à 9 h 30 où que vous soyez, sans se déplacer si vous changez de fuseau horaire.

## L’adresse est-elle secrète ? \{#is-the-address-a-secret}

Oui. Les calendriers ne peuvent pas envoyer un jeton ; le secret du flux se trouve donc dans son adresse. Toute personne qui la possède peut lire ce calendrier. Le flux limite pour cette raison ce qu’il révèle :

- il donne accès à **un seul calendrier**, en lecture seule, et à rien d’autre dans votre dossier ;
- il ne s’agit pas d’un jeton d’accès et il ne fonctionne pas avec [l’API](./api.md) ;
- vous ne pouvez le revoir que sous la même [règle des dix minutes](./authentication.md#can-i-see-a-token-again) qu’un jeton.

Si l’adresse a été partagée au mauvais endroit, révoquez-la et créez-en une nouvelle.

## Comment arrêter un flux ? \{#how-do-i-stop-a-feed}

Choisissez **Révoquer** sur sa ligne. Dès lors, l’adresse répond `404` et l’application de calendrier retire les événements lors de sa prochaine vérification. Créez un flux par application abonnée : vous pourrez en révoquer un sans arrêter les autres.
