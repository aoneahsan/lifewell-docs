---
title: Langues et unités
description: LifeWell propose dix langues dans l’application, la documentation et l’extension de navigateur. Le choix des unités reste indépendant de la langue.
keywords: [langues LifeWell, traduction, i18n, unités métriques impériales, français]
tags: [concepts, i18n, accessibility]
sidebar_position: 6
---

# Langues et unités

## Choisir une langue \{#choose-a-language}

LifeWell propose l’anglais, le chinois simplifié, le hindi, l’espagnol, l’arabe, le français, le portugais du Brésil, le russe, le japonais et l’ourdou. Choisissez votre langue dans l’en-tête. L’arabe et l’ourdou inversent aussi le sens de la page pour une lecture de droite à gauche.

Votre choix suit votre compte LifeWell lorsque vous vous connectez sur un autre appareil ou reliez l’extension de navigateur. Il ne modifie pas les unités choisies pour vos mesures. La documentation et les pages publiques ont une adresse par langue ; vous pouvez envoyer un lien vers la version lue par votre destinataire.

Deux précisions pour les personnes qui consultent les fichiers de traduction :

- **Les clés décrivent un sens, pas la phrase anglaise.** Reformuler une phrase ne casse donc pas son emplacement.
- **Aucune phrase n’est assemblée à partir de fragments traduits.** Une clé contient une phrase complète avec ses valeurs insérées, car l’ordre des mots varie selon la langue.

## Les unités sont un choix, pas une langue \{#units-are-a-preference-not-a-language}

Le système métrique ou impérial est **votre choix**, enregistré dans votre profil et indépendant de la langue. Une personne au Royaume-Uni peut préférer les stones ; une autre, les kilogrammes. La langue de l’interface ne permet pas de le déduire.

En interne, **le dossier conserve une unité de référence et convertit les valeurs à la lecture**. Cela signifie que :

- changer de préférence réaffiche votre historique sans le réécrire ;
- chaque entrée garde l’unité dans laquelle elle a été saisie ; changer de préférence ne réinterprète pas silencieusement douze années de mesures.

## Dates, chiffres et premier jour de la semaine \{#dates-numbers-and-the-first-day-of-the-week}

Les dates et les nombres suivent la langue choisie, à l’aide des fonctions internationales de l’appareil. *8 September 2026* en anglais peut ainsi s’afficher autrement dans une autre langue. Le premier jour de la semaine est un réglage distinct de l’appareil ; changer de langue ne le déplace pas discrètement.

La journée à laquelle appartient une entrée dépend de **votre appareil**, pas d’un serveur. Voir [Le modèle de données](./data-model.md#the-date-comes-from-your-device).

## Accessibilité \{#accessibility}

L’interface utilise React Aria Components pour gérer le clavier et les lecteurs d’écran dans chaque commande interactive, sans laisser chaque page réinventer ces comportements.

Chaque écran vise au minimum un contraste AA, un focus visible, un usage complet au clavier, des zones tactiles d’au moins 44 pixels et une mise en page de 320 à 1 920 pixels de large. Le [réglage des animations](./appearance.md#motion) peut supprimer les mouvements sans retirer d’informations.

Les graphiques sont accompagnés d’un tableau lisible présentant les mêmes chiffres. Ils ne sont jamais le seul moyen de consulter une valeur.
