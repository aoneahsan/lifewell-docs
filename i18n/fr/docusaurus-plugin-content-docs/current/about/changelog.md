---
title: Journal des versions
description: '« LifeWell 3.0 (version 3.22.0) a été entièrement reconstruit sur un nouveau système de données. Les versions 3.23 à 3.25 ont suivi en octobre 2026 : nouveautés, retraits, corrections et remise à zéro liée à la 3.0. »'
keywords: [lifewell 3.0, lifewell 3.22.0, journal des versions, notes de version, nouveautés]
topics: [about, changelog]
sidebar_position: 2
---

# Journal des versions

Une reconstruction complète de l’application 2.x. Le même produit, réécrit sur une autre infrastructure de données.

:::warning[La version 3.22.0 remet votre dossier à zéro]
**IMPORTANT : LifeWell 3.0 repart de zéro. Les données saisies dans les versions précédentes ne sont pas reprises. Cette version utilise un nouveau système de comptes et vos anciennes entrées ne sont pas migrées.**

L’infrastructure de données a été remplacée **sans possibilité de migration**. Le dossier de la version 2.x n’est pas transféré. Cette décision a été prise alors que l’application n’avait pas d’utilisateurs réels. Nous la disons clairement, car, de l’intérieur, une remise à zéro volontaire ressemble exactement à une perte de données causée par une erreur grave.

[Exportez vos données depuis la version 2.x avant de mettre à jour](../your-data/export.md) si vous y avez saisi quelque chose.
:::

Les principaux changements :

- Une reconstruction complète, plus rapide et plus légère, organisée autour des personnes et des moments de votre vie : famille, souvenirs et quotidien, entourés de la santé, de l’esprit et des étapes de vie.
- Vos photos et fichiers vont dans votre propre Google Drive, jamais sur nos serveurs.
- Vous vous connectez avec Google sur tous vos appareils.

La suite de cette page donne le détail.

## 29 octobre 2026 \{#29-october-2026}

- **La page d’accueil s’affiche plus vite sur téléphone.** Ses styles sont désormais intégrés à la page : le premier écran n’attend plus un fichier séparé et la plus longue pause au démarrage a diminué.
- **Le lien de profil précise à qui il appartient.** Les lecteurs d’écran annoncent maintenant *« Votre profil »* avec vos initiales ; chaque lien ouvrant un nouvel onglet l’indique aussi.
- **Une politique de sécurité du navigateur s’applique à toutes les pages.** Elle énumère les services dont LifeWell peut charger les scripts, connexions et cadres. Le navigateur refuse les autres.
- **Les pages privées ne sont plus proposées aux moteurs de recherche comme page d’accueil.** Une adresse interne de l’application leur demande désormais de ne pas l’indexer.
- **Une étape inexistante est retirée de l’adresse.** Si vous ouvrez *Comment fonctionne LifeWell* avec un numéro hors de ses six étapes, vous revenez à la première et le numéro erroné disparaît de l’adresse.

## 27 et 28 octobre 2026 \{#27-and-28-october-2026}

- **Les images de pièces d’identité sont conservées et supprimées correctement.** L’ajout du recto et du verso d’une pièce enregistre maintenant les deux images ; retirer la pièce les supprime. Voir [Images de pièces d’identité](../domains/people.md#identity-card-pictures).
- **Une place Family envoie sa notification.** Attribuer une place à un proche en relation avec vous, ou la reprendre, déclenche désormais un message dans sa boîte de réception.
- **Un nom trop long est signalé.** Un nom peut compter jusqu’à 60 caractères. Au-delà, l’application indique maintenant : *« Ce nom dépasse 60 caractères. Un prénom ou Ammi suffit. »*
- **La page des autorisations nomme trois autres groupes** accordés par Android à l’installation : un compteur sur l’icône de l’application, la réception de notifications et les achats Google Play. Voir [`/permissions`](https://lifewell.aoneahsan.com/permissions).
- **Une nouvelle icône d’application.** L’icône, l’onglet du navigateur et l’écran de lancement Android reprennent maintenant le symbole de l’en-tête de l’application. L’application Android l’affiche après sa prochaine mise à jour sur Google Play.

## Octobre 2026 : versions 3.23 à 3.25 \{#october-2026-323-to-325}

La version 3.25.0 est disponible sur Google Play et sur le web. L’application web se met à jour seule ; sur Android, les mêmes changements arrivent par mise à jour à distance.

- **Les personnes d’abord.** La page d’accueil dit maintenant *« Les personnes et les moments de votre vie, au même endroit. »* Les menus commencent par vous, la famille, le travail et les souvenirs. Sur téléphone, la barre inférieure affiche Aujourd’hui, Personnes, Speak, Souvenirs et Plus. Voir [Personnes](../domains/people.md).
- **Une visite guidée sur les pages essentielles.** Un bouton de visite se trouve dans l’en-tête et chaque page affiche une indication une seule fois. Vous pouvez ignorer la visite, la fermer ou passer directement à une étape, sur téléphone comme sur ordinateur. [`/how-lifewell-works`](https://lifewell.aoneahsan.com/how-lifewell-works) présente toute l’application avec de vrais écrans. Voir [Visites guidées et parcours](../getting-started/tours-and-walkthrough.md).
- **Tâches en cours.** Les exports et les enregistrements que Speak est en train de traiter figurent sur `/jobs`. Une notification vous prévient lorsqu’un export est prêt. Voir [Tâches en cours](../your-data/export.md#jobs).
- **Premier affichage plus rapide.** Les pages publiques arrivent déjà dessinées, avant l’exécution des scripts.
- **Partager un rendez-vous dans une discussion.** *Partager un élément de mon dossier* envoie un lien vers un rendez-vous à venir, jamais une copie de votre dossier. Voir [Partager un rendez-vous dans une discussion](../features/community-and-chats.md#sharing-an-appointment-in-a-chat).
- **La page des autorisations nomme le microphone.** Sur le web, le navigateur ne demande son accès que pendant un enregistrement dans Speak. Voir [`/permissions`](https://lifewell.aoneahsan.com/permissions).
- **L’IA continue quand le crédit gratuit est en pause.** Le crédit gratuit d’IA est attribué par tranches horaires. Lorsqu’il n’est pas disponible, un modèle payant à faible coût répond dans la limite normale de votre formule : aucun supplément n’est accordé ni facturé. La [politique de confidentialité](https://lifewell.aoneahsan.com/privacy) nomme tous les services d’IA concernés.

## 25 septembre 2026 \{#25-september-2026}

- **Les prix sont en dollars américains.** Pro coûte 9,99 $ par mois ou 99,90 $ par an. Family coûte 8,99 $ par place et par mois ou 89,90 $ par place et par an, à partir de trois places et sans plafond. Vous choisissez le nombre de places, puis les attribuez à des personnes déjà en relation familiale avec vous. Une place ne partage aucune donnée ; chacun peut y mettre fin et, si la formule prend fin, toutes les places se terminent. Le parcours Android utilise la facturation Google Play, mais reste désactivé jusqu’aux vérifications sur appareil et en boutique ; aucun autre paiement n’est proposé. Voir [Formules](../plans.md#family-seats).
- **Choisir un numéro dans vos contacts.** Un bouton *Contacts* à côté de chaque champ de téléphone permet de sélectionner un numéro. Android regroupe lecture et modification des contacts dans une seule autorisation ; LifeWell ne lit que le contact choisi et ne modifie jamais votre carnet d’adresses. Voir [Personnes](../domains/people.md#choosing-a-number-from-your-contacts).
- **Images des pièces d’identité des personnes de votre dossier.** Recto et verso, conservés chez LifeWell sous forme chiffrée, ouverts uniquement par des administrateurs pour une vérification et jamais montrés à vous, à la personne concernée ni par un lien. Voir [Personnes](../domains/people.md#identity-card-pictures).
- **Un menu plus court.** Marquez une page d’une étoile pour la placer parmi les *Favoris* en haut du menu, jusqu’à 12 pages. *Toutes les pages*, au bas du menu, les répertorie. Chaque page se termine par une ligne *Plus dans…*. La commande *Se déconnecter* est plus facile à trouver : sous votre nom sur téléphone, en bas de la barre latérale sur ordinateur, sur votre profil et en premier sous Paramètres → Sécurité.
- **Inviter quelqu’un à se mettre en relation ne crée qu’une demande.** Si elle ne peut pas être envoyée — adresse e-mail absente, identique à la vôtre ou trop de demandes — l’application en donne la raison.

## Les deux numéros de version \{#the-two-version-numbers}

La fiche de la boutique appelle cette version **LifeWell 3.0**. La compilation porte le numéro **3.22.0**. Il s’agit de la même version.

Le nombre du milieu dans un numéro de version LifeWell est son code de version Android : ici, 22. Le nom doit donc être 3.22.0, et la compilation échoue s’il ne correspond pas. Les notes de chaque version figurent sur la [fiche Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell).

## Changement de système de données \{#the-backend-changed}

La base de documents utilisée par l’application 2.x a été remplacée par Postgres.

Ce choix répond à un problème concret. La version 2.x épuisait son quota gratuit de lectures quotidiennes et devenait indisponible pendant une journée entière pour chaque utilisateur réel, jusqu’à la remise à zéro du quota. Partager une partie d’un dossier avec une personne nommée est aussi une question de droits sur les lignes de données : Postgres la traite dans la base, plutôt que dans un fichier de règles à maintenir en accord avec chaque requête.

Pour vous, cela signifie qu’aucun quota de lectures ne peut être épuisé, que chaque liste est limitée dans la base et que les droits de partage sont appliqués là où résident les données.

## Une seule source pour tous les suivis \{#one-store-behind-every-tracker}

`/tracking`, `/health/water` et l’action rapide du tableau de bord étaient trois endroits où saisir le même nombre, avec des écarts possibles. Ce sont maintenant trois vues d’une même source. Un verre d’eau enregistré à un endroit apparaît aussitôt partout.

## Nouveautés de cette version \{#new-in-this-release}

- **[Calendrier et rendez-vous](../features/calendar-and-appointments.md)**, avec une liste de points à vérifier pour chaque rendez-vous.
- **[Rappels](../features/reminders.md)** envoyés par Android lui-même, avec trois interrupteurs principaux et des heures de silence définies sur l’appareil.
- **[Communauté et discussions](../features/community-and-chats.md)** : groupes, publications, réponses, messagerie, blocage et procédure de modération qui ne révèle jamais à l’auteur qui l’a signalé.
- **[Professionnels](../features/professionals.md)**, avec une vérification dont la portée est précisément définie.
- **[Don de sang](../features/blood-donation.md)**, avec des coordonnées communiquées une seule fois et révocables.
- **[Liste de courses](../features/shopping-list.md)**, partageable en texte brut.
- **[Six interrupteurs de domaine](../domains/overview.md#switching-an-area-off)**, pour désactiver un domaine sans supprimer ses données.
- **[Partage](../domains/sharing.md)**, septième domaine et seul sans interrupteur : un lien peut maintenant montrer un suivi, vos médicaments ou un arbre au niveau choisi, avec un onglet par élément.
- **[Écrans adaptés au genre](../getting-started/first-run.md#the-one-answer-that-changes-what-you-see)** : une réponse détermine si six écrans consacrés aux étapes de vie figurent dans le menu.
- **[Export dans trois formats](../your-data/export.md)**, créé sur votre appareil, avec des exports programmés dans une formule payante.
- **[Un panneau d’apparence](../concepts/appearance.md)** comportant huit réglages appliqués avant le premier affichage.
- **[Un panneau d’administration](../admin.md)** de dix écrans, avec un journal d’audit dans lequel personne ne peut écrire directement.
- **[Un programme de parrainage](../features/referrals.md)**, côté serveur.

## Éléments retirés \{#removed}

- **iOS.** Retiré le 16 juillet 2026, faute de compte Apple Developer. Voir [iOS](../platforms/ios.md).
- **L’extension de navigateur de la version 3.0.0.** Elle n’en faisait pas partie. Une extension distincte pour Chrome et Firefox a depuis été créée, mais aucune des deux boutiques ne l’a publiée. Voir [Extension de navigateur](../platforms/browser-extension.md).
- **Les faux chiffres de popularité sur `/health-tools`.** La page 2.x affichait, à côté de chaque outil, des volumes de recherche sans source qui servaient à classer la liste. Ils étaient inventés et ont été retirés.
- **Les calculateurs qui reproduisaient ceux de ZTools.** Dix redirigent vers ZTools ; quatre sont restés parce que ZTools ne les propose pas. Voir [Outils](../features/tools.md).

## Corrections de cette documentation \{#corrections-to-this-documentation}

Certaines affirmations de la documentation 2.x étaient fausses. Elles sont corrigées ici explicitement :

| Ce qui était écrit | La réalité |
|---|---|
| `/feed` est un fil social | C’est le **flux public des articles du blog**. LifeWell n’a pas de fil social. [Adresses](../reference/addresses.md) |
| Firebase Analytics est interdit et remplacé par Sentry et Amplitude | Google Analytics 4 **est** la propriété d’analyse Firebase. Il fonctionne avec Amplitude, Clarity et Sentry. [Services tiers](../reference/integrations.md) |
| Les mises à jour à distance étaient seulement prévues | Des ensembles Native Update signés sont intégrés pour les installations Android compatibles. [Android](../platforms/android.md#over-the-air-updates) |

Le reste de la documentation 2.x décrivait l’ancien modèle de données, une application iPhone, une extension de navigateur et une bibliothèque de composants que la reconstruction n’utilise plus. Ces passages ont été supprimés plutôt que retouchés.

## Fonctionnalités pas encore disponibles \{#not-built-yet}

Cette liste est rassemblée ici pour éviter toute ambiguïté ailleurs sur le site :

| Fonctionnalité | État |
|---|---|
| Notifications push | Inscription pour recevoir les messages généraux de l’équipe ; aucun push automatique pour les événements du compte |
| Recherche globale | La requête existe ; la page est explicitement provisoire |
| Écran de parrainage | La partie serveur fonctionne ; aucun écran ne montre encore votre code |
| Paiement Google Play | Développé et testé à partir de réponses enregistrées ; non configuré et désactivé |
