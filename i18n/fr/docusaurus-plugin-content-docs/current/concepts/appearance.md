---
title: Apparence
description: Une icône et un panneau pour le thème, les couleurs, les angles, la densité, la taille du texte, la police, les surfaces et les animations. Réglages appliqués avant l’affichage.
keywords: [thème LifeWell, mode sombre, réglages d’apparence, taille du texte accessible, réduction des animations]
tags: [concepts, appearance]
sidebar_position: 5
---

# Apparence

Une icône dans la barre supérieure. Un panneau. Tous les réglages d’apparence y sont réunis, sur chaque écran, que vous soyez connecté ou non.

## Huit réglages \{#the-eight-settings}

| Réglage | Ce qu’il change |
|---|---|
| Thème | Clair, sombre ou identique au système |
| Couleurs | La couleur principale et les tons neutres |
| Angles | L’arrondi des éléments |
| Densité | L’espace occupé par chaque ligne |
| Taille du texte | Toute l’échelle typographique, pas seulement le corps du texte |
| Police | La famille de caractères de l’application |
| Aspect des surfaces | La manière dont les panneaux se détachent de la page |
| Animations | Complètes ou réduites |

## Avant le premier affichage \{#applied-before-the-first-paint}

Les réglages sont lus et appliqués à la page **avant tout rendu**. Vous ne voyez pas apparaître brièvement un mauvais thème pendant le démarrage : il est choisi avant même l’exécution de l’application.

C’est pourquoi les choix sont conservés au même endroit et appliqués depuis un registre commun. Une couleur ou un angle codé directement dans un composant échapperait à ce panneau ; la commande unique existe pour éviter cela.

## Animations \{#motion}

**Une animation ne porte jamais seule une information.** Les réduire retire le mouvement, pas le contenu.

Le réglage conserve une valeur résolue plutôt que le mot *système*. Ce détail compte : une simple règle `prefers-reduced-motion` primerait sur n’importe quel choix et empêcherait une personne dont le système réduit les animations de choisir des animations complètes dans l’application. Une résolution unique fait que *complètes* signifie bien complètes.

## Où vos choix sont conservés \{#where-it-is-kept}

Vos choix restent sur cet appareil. Si vous activez **Retrouver mon apparence sur mes appareils** dans le même panneau, ils sont également enregistrés dans votre compte et vous suivent sur un autre appareil connecté. Désactivez cette option pour donner des apparences différentes à l’ordinateur et au téléphone ; chacun garde son choix.

## Contraste et commandes tactiles \{#contrast-and-targets}

Chaque écran vise au minimum un contraste AA, des zones tactiles de 44 pixels, un focus visible, un usage complet au clavier et une mise en page qui tient entre 320 et 1 920 pixels de large.
