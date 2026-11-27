---
title: Android
description: "LifeWell sur Android : Android 9 au minimum, autorisations, rappels locaux, mises à jour signées et fonctions en attente d’une publication sur Google Play."
keywords: [LifeWell Android, autorisations Android, accès aux contacts, minSdk 28, Capacitor Android, Google Play]
topics: [platforms, android]
sidebar_position: 2
---

# Android

La même application que sur le Web, intégrée avec Capacitor. Le même compte, le même dossier.

| | |
|---|---|
| Identifiant de l’application | `com.aoneahsan.lifewell` — permanent |
| Version minimale | **Android 9 (API 28)** |
| Version actuelle du code source | **3.31.0** ; consultez Google Play pour celle proposée à votre appareil |
| Distribution | [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell) |

:::note[La version minimale est Android 9, pas Android 7]
Une ancienne version de cette documentation indiquait Android 7.0. C’était une erreur : le niveau SDK minimal du projet est 28, soit Android 9. Les appareils plus anciens ne peuvent pas installer l’application. Google Play masque simplement leur fiche au lieu d’en donner la raison.
:::

## Autorisations \{#permissions}

Les autorisations déclarées sont expliquées sous [`/permissions`](https://lifewell.aoneahsan.com/permissions).

| Autorisation | Pourquoi |
|---|---|
| Appareil photo | Prendre une photo directement pour vos souvenirs ou votre dossier. Demandée au premier appui sur *Prendre une photo*. Si vous refusez, vous pouvez toujours choisir une image déjà présente |
| Microphone | Enregistrer votre voix dans Speak it. Demandé quand vous lancez l’enregistrement ; si vous refusez, vous pouvez toujours écrire. LifeWell n’écoute pas en arrière-plan |
| Position approximative | Trier les professionnels par distance lorsque leur page est ouverte. Demandée quand vous appuyez sur *Utiliser ma position*. Elle n’est jamais conservée |
| Lecture des contacts | Lire le nom et les numéros du seul contact que vous choisissez avec **Contacts** près d’un champ de téléphone. Demandée lors de l’appui, jamais au démarrage |
| Modification des contacts | Aucune modification. Android accorde lecture et modification dans une seule autorisation ; LifeWell se limite à la lecture et n’ajoute, ne modifie et ne supprime jamais de contact |
| Notifications | Transmettre un rappel demandé par vous |
| Internet | Synchroniser votre dossier |
| État du réseau | Savoir si la synchronisation est possible et vous avertir plutôt que d’échouer silencieusement |
| Exécution au démarrage | Garder les rappels après un redémarrage |
| Verrouillage de veille | Permettre la transmission d’un rappel programmé |
| Identifiant publicitaire | Déclaré ; voir ci-dessous |

`/people/location-tracking` et `/people/location-history` décrivent une fonction distincte, **désactivée par défaut**. L’enregistreur de position en arrière-plan est implémenté pour Android 3.31.0 et les versions suivantes. Il demande des autorisations de localisation distinctes à l’activation. L’historique existant reste consultable et supprimable. La version 3.31.0 doit encore être mise en ligne sur Google Play par le propriétaire et vérifiée sur un appareil réel ; ne comptez donc pas sur cet enregistreur dans la version actuellement proposée par le magasin.

Si vous refusez les contacts, vous saisissez le numéro vous-même. Tous les champs de téléphone fonctionnent dans les deux cas. Votre carnet d’adresses n’est jamais téléversé, parcouru ni enregistré.

Aucune autorisation n’est demandée pour les SMS, l’historique des appels ou un accès général à vos photos et fichiers.

### Deux autorisations retirées explicitement \{#two-that-are-actively-removed}

La bibliothèque de notifications déclare `SCHEDULE_EXACT_ALARM` et `USE_EXACT_ALARM` dans son manifeste. LifeWell les **retire toutes les deux** de la compilation.

Android réserve les alarmes exactes aux réveils et calendriers. Les garder reviendrait à demander une autorisation que Google n’accorde pas à cette application. Sur Android 12 et versions suivantes, programmer sans cette autorisation ouvre les réglages système *Alarmes et rappels* au lieu de programmer quoi que ce soit. Les rappels sont donc approximatifs et peuvent arriver quelques minutes avant ou après l’heure prévue.

### L’identifiant publicitaire \{#the-advertising-id}

Il est déclaré dans le manifeste. **Aucun réseau publicitaire ni code de publicité tierce n’est présent dans l’application.** Cette déclaration permet à la réponse donnée à la boutique de correspondre aux capacités de la compilation. Elle ne signifie pas qu’une publicité tierce vous est diffusée.

## Ce qu’ajoute la version Android \{#what-the-android-build-adds}

- **Rappels locaux**, transmis par Android même lorsque l’application est fermée. Voir [Rappels](../features/reminders.md).
- **Connexion native**, avec la session dans l’espace sécurisé de la plateforme plutôt que dans le stockage Web.

## Push et facturation Google Play

### Notifications push \{#push-notifications}

Si vous activez le push et que l’inscription de l’appareil devient active, LifeWell peut recevoir un message général de l’équipe par OneSignal. L’application n’envoie pas automatiquement de notifications pour les événements du compte. Le push est distinct des rappels locaux, programmés par Android sur l’appareil. Voir [Rappels](../features/reminders.md#push-notifications).

### Facturation Google Play \{#google-play-billing}

Le parcours d’achat, la vérification côté serveur et les avis de renouvellement de Google sont écrits et compilés. Le passage d’une réponse Google à un droit d’accès a été testé avec des réponses enregistrées. **Aucun achat réel n’a été effectué**, le compte de service n’est pas configuré et l’interrupteur de la plateforme est désactivé par défaut. La facturation ne peut être essayée que dans une version signée pour Google Play et installée depuis un canal de test ; seul un test interne peut donc la démontrer. Voir [Offres](../plans.md#on-android).

## Mises à jour à distance \{#over-the-air-updates}

LifeWell intègre des paquets Native Update signés pour les installations Android compatibles. L’application vérifie un paquet avant de l’appliquer et peut conserver cette mise à jour après un démarrage à froid. La clé publique de signature est intégrée dans la version native ; une ancienne installation dépourvue de cette clé ne peut pas recevoir cette capacité plus tard. Le code natif et les autorisations passent toujours par Google Play. Le registre des versions de l’application vous avertit aussi lorsqu’une mise à jour est nécessaire.

## iOS

[Retiré le 16 juillet 2026.](./ios.md)
