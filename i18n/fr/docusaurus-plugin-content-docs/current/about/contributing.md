---
title: Contribuer à cette documentation
description: "Comment corriger une page, ce qui a sa place ici et la règle essentielle : cette documentation ne décrit que ce que le produit fait réellement."
keywords: [contribuer à la documentation LifeWell, modifier une page, dépôt de documentation]
tags: [about]
sidebar_position: 3
---

# Contribuer à cette documentation

Cette documentation se trouve dans un [dépôt public](https://github.com/aoneahsan/lifewell-docs). L’application, elle, n’a pas de code source public.

## Corriger une page \{#correcting-a-page}

Chaque page possède un lien **Modifier cette page** au bas de l’écran. Il ouvre le fichier sur GitHub, où vous pouvez proposer une correction sans rien installer.

Les petites corrections — mauvaise adresse, numéro de version périmé ou phrase devenue inexacte — sont particulièrement utiles. Elles ne nécessitent pas de discussion préalable.

## La règle essentielle \{#the-one-rule}

**Une page ne décrit que ce que le produit fait réellement.**

Cela peut sembler évident. Pourtant, c’est la raison de la réécriture complète de cette documentation pour la version 3.0.0. L’ancienne version décrivait une application iOS retirée, une extension de navigateur non distribuée, une base de données que l’application n’utilise plus et des outils de mesure opposés à ceux réellement employés. Chaque phrase avait été écrite de bonne foi. Aucune n’était encore vraie.

Par conséquent :

- Si une fonction n’est pas construite, la page dit **non construite**, pas *bientôt disponible*.
- Si elle est construite mais désactivée, la page précise quelle partie.
- Un chiffre vérifiable vient du code, pas d’un souvenir.
- Toute limite figure dans le paragraphe de l’affirmation concernée. Trois sections plus loin, personne ne la lira.

## La voix \{#voice}

Adressez-vous à la personne qui lit. En anglais, écrivez les formes complètes *it is* et *does not*, sans contractions. Aucun point d’exclamation. Anglais britannique. Titres en casse de phrase.

Commencez par une déclaration courte, puis ajoutez une phrase plus longue qui la nuance ou laisse un choix. C’est la cadence de ces pages ; elle compte davantage qu’un guide de style formel.

Évitez *empower*, *journey*, *seamless*, *unlock* et *effortless*, ainsi que toute formule qui traite un trou dans le dossier de quelqu’un comme un échec.

## Exécuter le site en local \{#running-it-locally}

```bash
yarn install
yarn build
yarn serve
```

La compilation vérifie aussi les liens. Un lien interne cassé l’arrête au lieu d’être publié.

## Ce qui n’a pas sa place ici \{#what-does-not-belong-here}

- Tout élément permettant d’identifier une personne : compte réel, adresse e-mail réelle ou capture montrant son dossier.
- Tout identifiant secret. Ce dépôt est public.
- Les plans internes, feuilles de route et files de tâches.
