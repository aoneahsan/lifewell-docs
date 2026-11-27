---
title: Questions fréquentes
description: 'Réponses aux questions posées avant de confier une partie de sa vie à une application : prix, confidentialité, exportation, usage hors ligne et limites de LifeWell.'
keywords: [questions LifeWell, LifeWell gratuit, confidentialité LifeWell, exporter mes données, supprimer un compte, places Family, contacts]
topics: [faq]
sidebar_position: 10
---

# Questions fréquentes

## Est-ce une application de santé ? \{#is-it-a-health-app}

Non. LifeWell réunit les personnes et les moments de votre vie. Vous commencez par vous, ajoutez les proches qui comptent, puis gardez ce que vous savez d’eux et les moments partagés. Le reste accompagne votre vie. L’application compte [sept espaces](./domains/overview.md) — proches, souvenirs, quotidien et partage, puis santé, esprit et étapes de la vie autour — avec **vous** au centre. La santé n’en est qu’un espace, pas l’objectif.

Présenter LifeWell comme un suivi de santé serait inexact.

## Quel est son prix ? \{#what-does-it-cost}

Il existe une offre Free et deux offres payantes en dollars américains : Pro à 9,99 $ par mois ou 99,90 $ par an, Family à 8,99 $ par place et par mois ou 89,90 $ par place et par an, à partir de trois places. Le parcours d’achat Android utilise la facturation Google Play, mais il n’est pas encore activé ; l’application ne renvoie pas vers une autre caisse. Voir [Offres](./plans.md).

**L’exportation est disponible avec toutes les offres, Free compris.** Une application qui conserve votre vie ne doit pas vous faire payer pour en récupérer une copie.

## Que donne une place Family ? \{#what-does-a-family-seat-give-the-person-who-holds-it}

Les limites de l’offre Family, et rien de votre dossier. Une place ne partage ni dossier, ni entrée, ni personne, ni fichier dans aucun sens. La personne qui paie voit seulement que vous occupez une place et depuis quand. Elle ne peut l’attribuer qu’à un proche déjà relié à elle. Chacun peut y mettre fin. Si l’offre se termine, toutes les places se terminent et ce qui dépasse les limites Free passe en lecture seule. Voir [Places Family](./plans.md#family-seats).

## Puis-je récupérer mon dossier ? \{#can-i-get-my-record-out}

Oui. Choisissez une période et téléchargez les données du dossier en JSON ou en CSV, ou un résumé PDF. Chaque table est limitée à 5 000 lignes par export. [La page du format](./reference/export-format.md) précise le contenu de chaque fichier.

Le navigateur crée le fichier à partir d’une lecture authentifiée de votre compte. L’export manuel ne laisse pas de fichier supplémentaire stocké sur le serveur.

## Puis-je tout supprimer ? \{#can-i-delete-everything}

Vous pouvez supprimer le compte actif depuis **Réglages → Vos données**, après avoir confirmé l’action. Des sauvegardes manuelles chiffrées peuvent conserver des données antérieures jusqu’à leur rotation. Si vous ne pouvez pas vous connecter, la page publique [`/delete-account`](https://lifewell.aoneahsan.com/delete-account) explique comment demander de l’aide. Voir [Supprimer votre dossier](./your-data/delete.md).

## Fonctionne-t-il hors ligne ? \{#does-it-work-offline}

LifeWell met l’application en pause si la connexion tombe. Si **Continuer à travailler hors ligne** est activé, vous pouvez garder en attente sur cet appareil certaines mesures, modifications du cycle et épisodes de symptômes jusqu’au retour du réseau. Les pages ne sont pas mises en cache. Voir [Hors ligne et synchronisation](./concepts/offline-and-sync.md).

## Où sont mes photos ? \{#where-are-my-photos}

Dans **votre propre Google Drive**, avec une autorisation limitée aux fichiers créés par LifeWell. Nous gardons une référence au fichier, pas le fichier lui-même. Voir [Où se trouve votre dossier](./your-data/where-it-lives.md).

## Le chiffrement est-il de bout en bout ? \{#is-it-end-to-end-encrypted}

Non. Il serait facile de le laisser croire à tort. Le fournisseur de base de données chiffre le dossier en transit et au repos, et cette base peut le lire. Rien n’est vendu, exploité pour extraire des informations ou ciblé par une publicité tierce.

## Vais-je être relancé sans cesse ? \{#will-it-nag-me}

Les rappels de prise de médicament apparaissent dans la boîte de réception LifeWell ; ils n’envoient ni notification sur le téléphone ni e-mail. Les notifications sur l’appareil pour les rappels d’événements compatibles nécessitent votre autorisation. Le suivi de l’eau dans l’application ne programme pas de rappels pour boire. Vérifiez le canal indiqué pour chaque rappel avant de compter dessus.

Il n’y a ni série, ni score, ni classement, ni badge de départ, ni bilan hebdomadaire qui vous évalue. Un dossier incomplet reste un dossier.

## Existe-t-il une application iPhone ? \{#is-there-an-iphone-app}

Non. [iOS a été retiré le 16 juillet 2026](./platforms/ios.md). Il ne reviendra que si un compte Apple Developer existe. L’application Web fonctionne dans Safari et donne accès au même dossier.

## Existe-t-il une extension de navigateur ? \{#is-there-a-browser-extension}

Elle est construite pour Chrome et Firefox, mais [pas encore disponible dans leurs boutiques](./platforms/browser-extension.md). Ses notes de bien-être restent dans le navigateur ; connecter votre compte ne les téléverse pas.

## Pourquoi Android demande-t-il mes contacts ? \{#why-does-android-ask-about-my-contacts}

Parce que vous avez appuyé sur **Contacts** près d’un numéro, et seulement à ce moment. Android réunit lecture et modification des contacts dans une seule autorisation. LifeWell lit uniquement le nom et les numéros du contact choisi, ne garde que le numéro sélectionné et ne modifie jamais votre carnet. Il n’est ni téléversé, ni parcouru, ni conservé. Si vous refusez, saisissez le numéro vous-même. Voir [Confidentialité et sécurité](./concepts/privacy-and-security.md#permissions).

## Qui peut voir la photo d’une pièce d’identité ? \{#who-can-see-a-picture-of-somebody-elses-identity-card}

Seuls les administrateurs LifeWell, pour une vérification ; chaque ouverture est enregistrée. Vous pouvez voir qu’une photo est conservée, sa taille et sa date, mais pas l’image. Elle n’est montrée ni à la personne concernée, ni à vos relations, ni par un lien partagé. Elle reste chiffrée chez LifeWell, pas dans votre Drive, jusqu’à ce que vous la retiriez, supprimiez la personne ou supprimiez votre compte. Voir [Proches](./domains/people.md#identity-card-pictures).

## Comment placer mes pages habituelles en haut du menu ? \{#how-do-i-keep-the-pages-i-use-at-the-top-of-the-menu}

Appuyez sur l’étoile dans la barre supérieure d’une page. Elle apparaît sous **Favoris** en haut du menu. Vous pouvez en garder jusqu’à 12 dans votre compte ; une confirmation est demandée avant d’en retirer un. **Toutes les pages**, au bas du menu, les répertorie. Une ligne *À voir aussi dans…* clôt chaque page avec des liens associés.

## Où se trouve la déconnexion ? \{#where-is-sign-out}

Sous votre nom dans le menu du téléphone, au bas de la barre latérale sur ordinateur, sur votre profil et en premier sous Paramètres → Sécurité.

## Qui peut voir ce que je note ? \{#who-can-see-what-i-record}

Personne, sauf si vous [l’avez partagé](./domains/sharing.md). Un lien peut porter un suivi, vos médicaments ou un arbre, rien d’autre : journal, souvenirs, notes et position ne peuvent pas être partagés ainsi.

Un administrateur ne peut pas non plus lire votre dossier : la liste des comptes ne renvoie qu’un ensemble limité de colonnes, sans colonne de santé.

## Qui crée LifeWell ? \{#who-builds-it}

L’équipe LifeWell. Elle dit clairement ce que l’application ne peut pas faire, comme une bonne partie de cette page. Voir [Qui crée LifeWell](./about/the-developer.md).

## Quelque chose ne fonctionne pas \{#something-is-wrong}

Utilisez [`/contact`](https://lifewell.aoneahsan.com/contact) dans l’application ou [`/support`](https://lifewell.aoneahsan.com/support).
