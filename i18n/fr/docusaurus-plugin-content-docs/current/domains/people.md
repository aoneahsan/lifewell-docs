---
title: Les personnes
description: « LifeWell commence par vous, les personnes qui comptent et ce que vous savez d’elles. Arbres familiaux et professionnels, relations, lieux, messages, communauté, professionnels et don de sang. »
keywords: [arbre familial LifeWell, organigramme professionnel, relations, contacts, pièce d’identité, communauté, discussions, annuaire de professionnels, donneurs de sang]
tags: [domains, people]
sidebar_position: 2
---

# Les personnes

C’est ici que LifeWell commence. Vous partez de vous-même, ajoutez les personnes qui comptent — la famille d’un côté, le travail de l’autre — et gardez ce que vous savez d’elles ainsi que les moments partagés. C’est aussi le domaine qui regroupe le plus d’écrans dans l’application et la raison pour laquelle LifeWell ne se résume pas à un suivi de santé.

## Personnes \{#people}

`/people` rassemble les personnes de votre vie : leur lien avec vous et les détails que vous conserveriez autrement à quatre endroits différents. `/people/import` permet d’importer une liste au lieu de tout saisir.

### Choisir un numéro dans vos contacts \{#choosing-a-number-from-your-contacts}

Sur Android, un bouton **Contacts** accompagne chaque champ de numéro de téléphone. Appuyez dessus : votre téléphone affiche vos contacts. Vous en choisissez un ; LifeWell lit uniquement son nom et ses numéros, puis ne conserve que le numéro sélectionné. Android regroupe la lecture et la modification des contacts dans une seule autorisation, demandée uniquement quand vous appuyez sur Contacts. LifeWell n’ajoute, ne modifie et ne supprime jamais de contact. Votre carnet d’adresses n’est ni téléversé, ni parcouru, ni stocké. Si vous refusez l’autorisation, saisissez le numéro : tous les champs fonctionnent aussi ainsi.

### Images de pièces d’identité \{#identity-card-pictures}

Pour une personne de votre dossier, vous pouvez ajouter une image du recto et du verso de sa pièce d’identité : JPEG, PNG ou WebP, jusqu’à 5 Mo par face. Un numéro peut être mal saisi ; en cas de contestation d’une correspondance, la vérification se fait à partir de l’image.

- **Où elles sont conservées.** Chez LifeWell, chiffrées, et non dans votre Google Drive. Ce sont les seules images de LifeWell conservées de cette façon.
- **Qui peut les ouvrir.** Uniquement les administrateurs de LifeWell, pour une vérification. Chaque ouverture est inscrite au journal d’administration. Vous pouvez voir qu’une image est conservée, sa taille et sa date d’ajout, mais pas l’image elle-même.
- **Qui ne les voit jamais.** La personne concernée, les personnes avec lesquelles vous êtes en relation et les destinataires d’un lien de partage.
- **Comment elles disparaissent.** Retirer l’image, supprimer cette personne ou votre compte l’efface du stockage actif ; une ancienne copie subsiste dans les sauvegardes manuelles chiffrées jusqu’à leur rotation.

### Adresse e-mail manquante \{#email-needed}

Le filtre **Adresse e-mail manquante** de la page Personnes (`/people?filter=email-needed`) affiche les personnes de votre dossier sans adresse e-mail et que vous n’avez pas indiquées comme n’en ayant pas. Une personne importée avec son seul nom y apparaît donc. Indiquez qu’elle n’a pas d’adresse e-mail pour la retirer de la liste. Quand plus aucune adresse n’est attendue, la page l’indique : *Toutes les personnes de votre dossier ont une adresse e-mail, ou vous avez indiqué qu’elles n’en ont pas.* Une [demande de mise en relation](#when-somebody-invites-you) est envoyée à cette adresse.

## Arbres \{#trees}

- **`/people/family-tree`** : les liens de parenté.
- **`/people/work-tree`** : le même principe pour les collègues et les liens hiérarchiques.

Les deux arbres reposent sur les mêmes personnes et relations. Une personne présente dans les deux n’a donc qu’une fiche.

## Relations et groupes \{#connections-and-groups}

- **`/people/connections`** : les personnes qui utilisent aussi LifeWell et ont accepté d’être en relation avec vous. Dans le menu, cette page figure sous [Partage](./sharing.md), sous le nom *Partage avec les proches*.
- **`/people/family-groups`** : un foyer ou un groupe familial. Les places d’une formule Family ne peuvent être attribuées qu’à une personne déjà en relation avec vous ici. Une place ne partage aucune donnée : voir [Places Family](../plans.md#family-seats).
- **`/people/journeys`** : un voyage ou une période partagée, avec ses photos et ses notes.

Inviter quelqu’un à se mettre en relation ne crée qu’une seule demande. Si sa fiche n’a pas d’adresse e-mail, si l’adresse est la vôtre ou si vous avez envoyé trop de demandes, l’application vous indique la raison au lieu d’échouer silencieusement. Le filtre [Adresse e-mail manquante](#email-needed) montre toutes les personnes de votre dossier pour lesquelles il en manque une.

### Quand quelqu’un vous invite \{#when-somebody-invites-you}

Si quelqu’un vous ajoute à son dossier avec votre adresse e-mail avant que vous ayez un compte LifeWell, puis appuie sur **Inviter**, vous recevez un e-mail d’invitation avec un lien. Ouvrez-le, créez votre compte et terminez la prise en main : l’invitation est conservée, et sa demande de mise en relation vous attend une fois connecté.

| Destinataire | Notification | Ce qu’elle indique | Action |
|---|---|---|---|
| Vous | *[son nom] vous a ajouté à sa famille sur LifeWell* | Sa demande de mise en relation vous attend. | *Examiner la demande* |
| La personne qui vous a invité | *[votre nom] a rejoint LifeWell* | Vous avez désormais un compte. | *Voir sa page* |
| La personne qui vous a invité, si vous acceptez | *[votre nom] a accepté votre demande* | Vous êtes maintenant en relation. | *Voir ce qu’elle peut voir* |

Rien n’est partagé avant votre acceptation. Vous pouvez toujours refuser.

## Lieux \{#places}

`/maps` regroupe les noms de lieux enregistrés et les vues qui relient souvenirs, notes, personnes et événements à ces noms ; il ne déduit pas de coordonnées géographiques des enregistrements. `/people/location-tracking` et `/people/location-history` présentent une fonction distincte, facultative et désactivée par défaut. Cette version n’a pas d’enregistreur en arrière-plan : l’interrupteur sauvegarde un réglage, pas des points de position.

:::note[Aucun partage de position entre comptes]
Les lieux enregistrés et l’historique de position vous appartiennent. Un lien peut contenir un suivi, vos médicaments ou un arbre, rien d’autre. L’énumération de la base de données qui définit ce qu’un partage peut contenir n’a que trois valeurs ; la position n’en fait pas partie. C’est ainsi que cette interdiction est appliquée, au-delà de l’absence d’option à l’écran.
:::

## Messages \{#messages}

`/chats` permet d’échanger des messages entre comptes en relation, à deux ou en petit groupe. Une conversation avec un [professionnel](../features/professionals.md) utilise le même mécanisme, avec un type différent.

L’export contient **les messages que vous avez envoyés**. Les mots de l’autre personne appartiennent à son dossier.

## Communauté \{#community}

`/community` rassemble des groupes, des publications et des réponses. Les groupes proviennent d’un catalogue commun : vous ne les créez pas. Chaque publication suit la même procédure de modération que les autres.

Vous pouvez bloquer une personne. La liste des personnes que vous avez choisi de ne plus voir relève de votre décision et de votre dossier. C’est l’une des rares données de l’export dont une copie peut réellement compter si vous partez.

## Professionnels \{#professionals}

`/professionals` est un annuaire de praticiens qui s’y sont inscrits, avec vérification auprès d’un registre. Voir [Professionnels](../features/professionals.md).

## Don de sang \{#blood-donation}

`/blood-donors` est un annuaire public ; `/profile/blood-donor` vous permet de vous y inscrire. Voir [Don de sang](../features/blood-donation.md).

## Partage \{#sharing}

Tout ce qui précède suit un même modèle de partage, décrit dans son propre domaine : [Partage](./sharing.md). Aucune de ces données n’est visible par un autre compte sans votre décision.
