---
title: Services externes
description: Chaque service extérieur utilisé par LifeWell, son rôle, les informations qu’il reçoit et ce qui se passe si sa clé manque.
keywords: [intégrations LifeWell, services tiers, Google Drive, Sentry, Amplitude, Clarity, OneSignal, Turnstile]
topics: [reference, privacy]
sidebar_position: 3
---

# Services externes

Voici les services auxquels LifeWell parle. **Chacun est désactivé si sa clé manque** : un service non configuré est ignoré plutôt que de produire une erreur pendant l’utilisation.

## Votre dossier \{#your-record}

| Service | Rôle | Ce qu’il reçoit |
|---|---|---|
| **Supabase** | Base de données et connexion | Tout ce que vous notez ; c’est le stockage du dossier |
| **Compte Google** | Connexion | Votre adresse e-mail et votre nom, transmis de Google à LifeWell |
| **Google Drive** | Vos photos et fichiers | Les fichiers eux-mêmes, dans **votre** Drive, avec une autorisation limitée à ceux créés par LifeWell |
| **Google Maps** | Fonds des [cartes](../features/maps.md) | La zone affichée |

La connexion passe uniquement par Google : **nous ne voyons et ne conservons aucun mot de passe**.

## Vous avertir \{#telling-you-things}

| Service | Rôle | État |
|---|---|---|
| **OneSignal** | Notifications push facultatives | Si vous activez le push dans les réglages et que l’inscription de l’appareil devient active, ce service reçoit cette inscription. L’équipe LifeWell peut envoyer un message général ; l’application n’envoie pas automatiquement de notifications pour les événements du compte. |
| **Google Play Billing** | Abonnements Android | Construit et testé avec des réponses enregistrées, mais **désactivé**. Voir [Offres](../plans.md#on-android) |

La réception push est conçue pour être **uniquement entrante** : l’application inscrit l’appareil et ouvre la destination quand vous touchez une notification. Autoriser les notifications ne suffit pas à activer l’inscription. Les rappels d’événement et de bien-être pris en charge sur Android utilisent la programmation de l’appareil. Les doses dues apparaissent dans la boîte de réception LifeWell lorsque vous ouvrez la liste des médicaments ; ne comptez pas sur elles hors connexion.

## Mesurer le fonctionnement du produit \{#how-we-know-the-product-works}

| Service | Rôle | Ce qu’il reçoit |
|---|---|---|
| **Google Analytics 4** | Pages consultées | Chemin de la page et nom de l’événement |
| **Amplitude** | Actions effectuées | Nom de l’événement et propriétés autorisées |
| **Microsoft Clarity** | Relecture d’une session pour trouver les défauts de l’interface | Enregistrement de l’interface, avec masquage des éléments sensibles |
| **Sentry** | Erreurs | Échec, écran et version, avec identifiants retirés |

:::note[Les quatre fonctionnent. Firebase Analytics n’est pas interdit]
Une ancienne version de cette documentation affirmait que Firebase Analytics était interdit et remplacé par Sentry et Amplitude. C’était faux dans les deux cas. Google Analytics 4 **est** la propriété Firebase Analytics — une propriété, deux SDK — et fonctionne **avec** Amplitude, Clarity et Sentry. Ces quatre services forment l’ensemble utilisé.
:::

**Aucun ne reçoit le contenu de votre dossier.** Une propriété de mesure ne passe que si elle figure dans le registre de l’événement et si sa valeur satisfait un contrôle de type ; une phrase, une adresse e-mail ou une mesure personnelle ne peut donc pas être transmise. Les filtres sont testés avec de vrais identifiants et échouent si l’un d’eux subsiste.

## Protéger les formulaires \{#keeping-the-forms-usable}

| Service | Rôle |
|---|---|
| **Cloudflare Turnstile** | Contrôle contre les robots sur les formulaires de contact et de participation |

Turnstile présente un défi plutôt qu’un outil de suivi et n’apparaît que sur ces deux formulaires publics.

## Fichiers et e-mails envoyés \{#files-and-outbound-email}

Le stockage des fichiers et les quelques e-mails envoyés par LifeWell — message de bienvenue et confirmation d’une demande de suppression de compte — passent par un service privé exploité par le développeur, et non par une plateforme tierce d’envoi d’e-mails.

Il n’existe ni e-mail entre utilisateurs, ni lettre d’information, ni envoi marketing. Votre nom et votre adresse servent uniquement à livrer le message.

## Mises à jour à distance \{#over-the-air-updates}

L’application Android intègre des paquets Native Update signés. Une version compatible déjà installée peut les vérifier et les appliquer ; Google Play fournit les versions natives. La clé de signature est intégrée à la compilation native : une installation qui ne la possède pas ne peut pas recevoir ces paquets. Voir [Android](../platforms/android.md#over-the-air-updates).

## Ce qui est absent volontairement \{#what-is-deliberately-absent}

- **Aucun réseau publicitaire** ni code de publicité tierce.
- **Aucun courtier de données et aucune vente d’informations.**
- **Aucun backend Firebase.** La version 2.x utilisait sa base de documents ; 3.0.0 ne l’utilise plus. La reconstruction corrige notamment l’épuisement d’un quota gratuit de lectures qui avait interrompu l’ancienne application pendant un jour.
- **Aucun calendrier externe.** LifeWell ne lit et n’écrit rien dans Google Calendar ou un autre service de calendrier.
