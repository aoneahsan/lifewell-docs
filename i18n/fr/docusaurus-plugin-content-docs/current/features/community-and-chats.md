---
title: Communauté et conversations
description: Groupes avec publications et réponses, messages entre comptes connectés, blocage et modération sans révéler à l’auteur l’identité de la personne qui l’a signalé.
keywords: [communauté LifeWell, groupe de santé, discussion, messagerie, blocage, modération]
topics: [features, people]
sidebar_position: 4
---

# Communauté et conversations

## Communauté \{#community}

`/community` réunit des groupes, chacun avec des publications et des réponses. La liste des groupes est un catalogue commun à tous les comptes ; vous ne créez pas vos propres groupes.

Une publication est écrite par vous et lue par le groupe. Rien de votre dossier personnel n’y est joint automatiquement : publier dans un groupe sur le sommeil ne publie pas votre suivi du sommeil.

## Conversations \{#chats}

`/chats` permet d’écrire aux comptes avec lesquels vous êtes en relation. Une conversation réunit deux personnes ou un petit groupe. Vous en lancez une depuis `/chats/new`, à partir de vos [relations](../domains/people.md#connections-and-groups).

Une [consultation avec un professionnel](./professionals.md) utilise le même système avec un autre type de conversation ; le fil se comporte comme les autres.

### Partager un rendez-vous dans une conversation \{#sharing-an-appointment-in-a-chat}

Chaque fil propose **Partager un élément de mon dossier**. Un panneau montre vos prochains rendez-vous, chacun avec une commande **Partager** :

- **Un lien est envoyé, pas une copie.** L’autre personne voit le titre et l’heure du rendez-vous, rien d’autre dans votre dossier.
- **Votre message l’accompagne.** Le texte saisi est envoyé avec le lien.
- **Supprimer le rendez-vous désactive le lien.** Sa fiche ne l’affiche plus.

La fiche vous indique « Un lien vers le rendez-vous, pas une copie de votre dossier ». La personne destinataire lit « Un lien vers leur rendez-vous, pas une copie de leur dossier ». Si aucun rendez-vous n’approche, le panneau vous le dit et propose **En ajouter un au calendrier**.

Aucun fichier ne peut être joint à une conversation ; il n’y a donc pas de trombone. L’en-tête nomme la personne et ce que chacun peut voir, sans deviner ses pronoms.

## Bloquer une personne \{#blocking}

Vous pouvez bloquer quelqu’un. Le serveur applique le blocage ; l’écran ne se contente pas de masquer la personne.

Votre décision de ne plus voir une personne fait partie de votre dossier. Elle figure dans [l’exportation](../reference/export-format.md) sous **People you blocked**. C’est une information dont vous pourriez réellement vouloir garder une copie si vous quittiez LifeWell.

## Signaler un contenu \{#reporting}

Toute publication ou réponse peut être signalée.

:::note[Un signalement ne peut être que déposé, même par son auteur]
Personne ne peut relire directement la table des signalements : ni l’auteur de la publication, ni la personne qui l’a signalée. L’identité de cette dernière n’est jamais communiquée à l’auteur, et les signalements sont volontairement absents de l’exportation. Une file de modération qui fuit par un fichier téléchargé reste une fuite.
:::

Une personne chargée de la modération peut traiter la file. Seule une personne chargée de l’administration peut répondre au signalement. Ces autorisations sont distinctes : donner à un nouveau rôle le pouvoir de masquer des publications sans examen lui laisserait décider de ce que les autres peuvent dire.

Toute décision comprend une note. L’auteur lit une version, la personne qui a signalé le contenu en lit une autre. Une décision impossible à expliquer est difficile à corriger.

## Dans l’exportation \{#what-is-in-the-export}

Vos publications et réponses, les groupes rejoints, vos conversations, leurs membres, les messages envoyés **par vous** et les messages que vous avez masqués.

Les mots d’une autre personne appartiennent à son dossier, pas à votre fichier.
