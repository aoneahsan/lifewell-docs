---
title: Architecture
description: Une application monopage statique reliée à Postgres, avec des fonctions Edge lorsque le navigateur ne doit pas détenir un secret. Répartition des rôles et absence de serveur propre.
keywords: [architecture LifeWell, Supabase, React, Vite, Capacitor, fonctions Edge, application monopage]
topics: [concepts, architecture]
sidebar_position: 1
---

# Architecture

Une **application monopage statique**. La compilation produit un dossier de fichiers ; ce dossier constitue tout le déploiement. Aucun serveur Node n’intervient.

## Vue d’ensemble \{#the-shape}

```text
Navigateur / WebView Android
        │
        ├──────────────► Postgres, par PostgREST       (lectures et écritures ordinaires)
        │                 · sécurité par ligne
        │                 · droits par colonne
        │                 · plafond strict de 50 lignes par liste
        │
        └──────────────► Fonctions Edge sur Deno       (ce que le navigateur ne doit pas détenir)
                          · deux formulaires publics, protégés contre les robots
                          · résolution des liens de partage en lecture seule
                          · échange de jetons Google Drive
                          · estimation IA et votre propre clé d’IA
                          · exportations programmées
                          · vérification des achats Google Play
                          · actions d’administration sur les comptes
```

## La règle de séparation \{#the-one-rule-that-decides-which}

> Le navigateur parle directement à la base pour les données ordinaires. Une fonction Edge n’intervient **que** si l’opération nécessite un élément que le navigateur ne doit jamais posséder : secret, privilège élevé ou vérification de ce qu’une personne a saisi.

Tout le reste est une requête directe exécutée sous votre identité, avec les règles décrites dans [Confidentialité et sécurité](./privacy-and-security.md).

## Pourquoi les autorisations sont dans la base \{#why-the-boundary-sits-in-the-database}

Une autorisation placée dans le code de l’application doit être appliquée correctement à chaque appel. Avec la sécurité par ligne, c’est la *base* qui refuse : une requête mal écrite ne renvoie rien au lieu de renvoyer les lignes de quelqu’un d’autre.

C’est aussi pourquoi l’application en cours d’exécution n’utilise pas d’ORM. Le schéma est écrit en TypeScript puis converti en migrations hors ligne. L’application passe uniquement par la bibliothèque cliente, sous l’identité de la personne connectée, avec les règles en vigueur.

## Les composants techniques \{#what-it-is-built-from}

| Couche | Choix |
|---|---|
| Interface | React 19 |
| Compilation | Vite 8, sans cartes de sources en production |
| Navigation | Routes à partir de fichiers, avec paramètres de recherche typés |
| État du serveur | TanStack Query |
| État du client | Zustand, jamais le contexte React pour l’état de l’application |
| Formulaires | React Hook Form et Zod ; les mêmes schémas Zod valident les fonctions Edge |
| Accessibilité | React Aria Components gère le DOM, ARIA et le clavier de chaque commande |
| Styles | Tailwind v4, configuré dans CSS plutôt que dans un fichier de configuration |
| Graphiques | D3 |
| Texte enrichi | Tiptap ; aucun champ de texte brut dans le produit |
| Stockage local | Une seule bibliothèque autorisée à utiliser le stockage du navigateur |
| Android | Capacitor 8 |

## Pourquoi Postgres, pas Firebase \{#not-firebase}

La version 2.x fonctionnait sur Firebase. L’un des problèmes corrigés par la reconstruction était l’épuisement du quota gratuit de lectures, qui avait interrompu l’application pendant une journée.

Le partage en est une autre raison. Autoriser une personne nommée à lire une partie d’un dossier est une question de lignes. Postgres y répond dans la base ; l’ancien stockage de documents utilisait un fichier de règles qui devait suivre chaque requête.

## État dans l’adresse \{#url-state}

Fenêtres, onglets, filtres, tris, pagination et termes recherchés figurent dans l’adresse plutôt que seulement dans l’état d’un composant. Actualiser la page ne vous fait pas perdre votre place ; le lien vers ce que vous voyez ouvre ce que vous voyez.
