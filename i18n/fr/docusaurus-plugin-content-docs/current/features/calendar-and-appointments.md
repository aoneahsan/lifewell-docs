---
title: Calendrier et rendez-vous
description: Un calendrier pour la semaine ordinaire comme pour la semaine médicale, avec une liste de questions sur chaque rendez-vous.
keywords: [calendrier LifeWell, suivi des rendez-vous, questions pour un rendez-vous médical]
topics: [features, everyday]
sidebar_position: 1
---

# Calendrier et rendez-vous

## Le calendrier \{#the-calendar}

`/calendar` présente sur un mois tout ce qui porte une date dans votre dossier. Il n’y a pas un calendrier médical à côté d’un calendrier personnel : la semaine ne se divise pas en deux.

## Les rendez-vous \{#appointments}

`/appointments` présente les mêmes événements sous forme de liste, limitée aux rendez-vous.

Chaque rendez-vous peut indiquer :

- quand et où il a lieu ;
- avec qui ;
- **une liste de questions** à poser et de résultats à rapporter.

Cette liste est souvent griffonnée au dos d’une enveloppe, puis perdue entre le parking et le cabinet. Ici, elle reste auprès du rendez-vous ; la réponse peut donc rester à côté de la question.

## Rappels \{#reminders}

Le formulaire propose un rappel une heure avant un rendez-vous avec une heure définie. Sur Android, une alerte peut arriver si les notifications de l’appareil sont disponibles et autorisées. Sur le Web, le rendez-vous est enregistré, mais le navigateur ne peut pas vous alerter après la fermeture de l’onglet. Voir [Rappels](./reminders.md).

## Dans l’exportation \{#what-is-in-the-export}

Les événements du calendrier sont exportés sous **Calendar**, leurs listes sous **Appointment notes**. Les deux figurent dans les exports JSON et CSV ; les notes de rendez-vous ne figurent pas dans le résumé PDF. Les événements portent une date : limiter la période exportée les limite aussi. Voir [le format d’exportation](../reference/export-format.md).

## Ce que ce calendrier ne fait pas \{#what-this-is-not}

Il n’est connecté ni à Google Calendar, ni à Outlook, ni à un autre calendrier externe. Il ne lit et n’écrit rien dans ces services. Un rendez-vous dans LifeWell reste dans LifeWell.
