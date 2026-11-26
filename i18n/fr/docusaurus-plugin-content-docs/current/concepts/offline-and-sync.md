---
title: Hors ligne et synchronisation
description: LifeWell met l’application en pause quand la connexion est perdue, avec la possibilité facultative de conserver certaines notes rapides sur cet appareil jusqu’à son retour.
keywords: [LifeWell hors ligne, synchronisation, absence de connexion, saisie hors ligne]
tags: [concepts, offline]
sidebar_position: 4
---

# Hors ligne et synchronisation

LifeWell vérifie qu’une véritable requête atteint l’application. Quand la connexion tombe, un message plein écran fige la page courante. Il disparaît au retour du réseau, après la réussite d’une nouvelle requête ; la page reprend sans se recharger.

## Sans réseau \{#what-works-with-no-signal}

Si **Continuer à travailler hors ligne** est activé dans les réglages de l’appareil, le message propose **Continuer à noter hors ligne**. La page courante s’ouvre avec une fine barre indiquant l’état hors ligne. Les mesures compatibles, changements de jour de cycle et épisodes de symptômes peuvent attendre sur cet appareil, puis être rejoués au retour de la connexion. La file a une limite et indique quand une écriture ne peut plus être conservée. Elle ne présente jamais un échec côté serveur comme une réussite.

Un rappel Android déjà programmé sur l’appareil peut toujours arriver sans connexion.

## Ce qui nécessite une connexion \{#what-does-not}

- **Nouvelles pages et ressources non chargées.** Le service worker ne conserve pas les pages et n’intercepte pas les requêtes. Ouvrir une page encore jamais chargée exige le réseau.
- **Lectures du serveur et autres écritures.** Messages, communauté, partages, photos, rendez-vous et connexion au compte nécessitent le service. La file locale se limite aux types de notes rapides cités plus haut.
- **Premier chargement hors ligne.** LifeWell ne possède pas de coque hors ligne capable de démarrer depuis un onglet fermé sans connexion.

## En cas de conflit \{#how-a-conflict-is-settled}

Les changements en attente sont rejoués quand une véritable connexion revient. Chaque opération porte une identité qui permet de la réessayer sans la dupliquer. Le suivi de destination applique ensuite sa règle :

- Un suivi qui **additionne** traite la deuxième entrée comme une autre mesure.
- Un suivi qui garde **la dernière valeur** la traite comme une correction.

Deux mesures d’eau restent deux mesures ; un suivi de dernière valeur traite la correction selon sa propre règle. Un changement en attente reste invisible sur un autre appareil tant que le serveur ne l’a pas accepté.

## Le bandeau \{#the-banner}

Par défaut, le message de connexion bloque l’application et propose de réessayer. Vous ne pouvez le dépasser qu’avec **Continuer à noter hors ligne**, si ce réglage est actif sur l’appareil. Une fine barre rappelle alors l’absence de réseau. À la reconnexion, LifeWell envoie les écritures en attente et actualise les lectures actives sans recharger la page.

## Ce qui n’a pas été construit \{#what-is-deliberately-not-built}

Il n’existe ni copie complète de l’application conservée hors ligne, ni synchronisation en arrière-plan lorsque l’onglet est fermé. La file de notes rapides répond à une perte temporaire de connexion, pour un ensemble limité d’entrées.
