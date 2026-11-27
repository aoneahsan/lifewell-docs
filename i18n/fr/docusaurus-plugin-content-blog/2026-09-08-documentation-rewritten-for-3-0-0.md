---
slug: documentation-rewritten-for-3-0-0
title: La documentation était inexacte. Nous l’avons réécrite.
authors:
  - name: "L’équipe LifeWell"
    title: "Les personnes qui créent et entretiennent LifeWell"
    url: https://lifewell.aoneahsan.com
    image_url: /img/logo.svg
topics: [announcement, lifewell, docs, release]
description: La version 3.0.0 de LifeWell est une reconstruction sur une nouvelle infrastructure. L’ancienne documentation décrivait une application qui n’existe plus. Chaque page a été réécrite à partir du code.
---

La version précédente de ce site décrivait une application iOS supprimée, une extension de navigateur qui n’était pas encore distribuée, une base de données que l’application n’utilise plus et des outils de mesure presque à l’opposé de ceux réellement employés.

Ces pages avaient été écrites de bonne foi. Puis le produit a changé, sans que personne ne revienne les corriger.

{/* truncate */}

## Ce qui était inexact

Trois affirmations méritent d’être reprises, car des personnes les avaient lues et crues.

**`/feed` était présenté comme un fil social.** C’est la liste publique et lisible des derniers articles du blog. LifeWell ne possède pas de fil social et n’en a jamais eu.

**Firebase Analytics était présenté comme interdit et remplacé.** Google Analytics 4 *est* la propriété Firebase Analytics — une seule propriété, désignée de deux façons — et fonctionne aux côtés d’Amplitude, de Clarity et de Sentry. Une personne qui cherchait à savoir ce que l’application mesure avait reçu l’inverse de la vérité.

**Les mises à jour à distance étaient décrites comme « pas encore intégrées ».** C’était exact lors de la réécriture pour la version 3.0.0. LifeWell intègre désormais des paquets Native Update signés sur les installations Android compatibles. La [page Android](/platforms/android#over-the-air-updates) actuelle explique ce que l’application vérifie et ce qui nécessite encore une version native.

Par ailleurs, soixante-cinq pages décrivaient un modèle de documents remplacé par Postgres, trente-cinq citaient une plateforme iOS supprimée le 16 juillet 2026, et toute une section expliquait comment installer et utiliser une extension qui n’existait pas encore.

## Ce que nous avons changé

Toutes les pages ont été supprimées. Leurs remplaçantes ont été écrites à partir du code source : le format d’exportation provient du registre des tables utilisé par l’exportateur lui-même, les limites des offres de leur registre, la version minimale d’Android du fichier de compilation et les fonctions d’administration de l’interface correspondante.

Lorsqu’une fonction n’est construite qu’en partie, la page précise laquelle. Elles sont sept, réunies dans [Ce qui a changé dans la version 3.0.0](/about/changelog).

Nous avons vérifié les chiffres vérifiables. L’ancienne documentation indiquait Android 7.0 comme minimum ; le fichier de compilation indique le niveau 28, soit Android 9.

## La règle que suit désormais ce site

**Une page ne décrit que ce que le produit fait réellement.**

Ni ce qu’il s’apprête à faire, ni ce que prévoit sa feuille de route, ni ce qui sonnerait mieux. Si une fonction n’est pas construite, la page le dit clairement. Si une commande fait moins que son apparence ne le laisse penser, la limite est expliquée à côté de cette commande.

Cette règle demande plus de vigilance qu’il n’y paraît. Le risque n’est pas seulement de dire quelque chose de faux : c’est de laisser en place une phrase juste après que le produit a changé. Les pages qui décrivent un comportement indiquent désormais où il se trouve dans le code. La page du format d’exportation repose sur le même registre que l’exportateur, pour ne pas décrire un fichier que le produit ne crée pas.

## Où mènent les anciennes adresses

Toutes les adresses sous `/docs/**` redirigent maintenant. La documentation se trouve à la racine du site ; `/reference/export-format`, l’adresse ouverte depuis l’écran d’exportation de l’application, fonctionne donc.

Une page consacrée à une fonction disparue redirige vers celle qui explique la situation actuelle. Les anciens guides de l’extension mènent à [Extension de navigateur](/platforms/browser-extension), qui décrit le compagnon Chrome et Firefox déjà construit et son état de publication. Les pages iOS mènent à [iOS](/platforms/ios), où figurent la date de retrait et la condition d’un éventuel retour.
