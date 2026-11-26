---
title: Souvenirs
description: Photos, albums, carnet de souvenirs et légendes qui leur donnent du sens — avec les fichiers dans votre propre Google Drive.
keywords: [souvenirs LifeWell, album photo, carnet de souvenirs, photos Google Drive]
tags: [domains, memories]
sidebar_position: 3
---

# Souvenirs

Une photo sans légende ni date reste un fichier. Cet espace conserve ce qui vous permettra de la comprendre plus tard.

## Photos et souvenirs \{#photos-and-memories}

`/photos` est votre bibliothèque. Un souvenir peut être une photo ou un ensemble de photos, accompagné des détails qui lui donnent du sens : date, légende, lieu et personnes présentes.

Vous en créez un sous `/memories/create`. `/scrapbook` est un carnet plus libre : des choses gardées parce qu’elles méritent de l’être, sans formulaire à remplir.

## Où se trouvent les fichiers \{#where-the-files-actually-live}

**Dans votre propre Google Drive**, pas sur nos serveurs.

LifeWell demande une autorisation Drive limitée aux fichiers qu’il a lui-même créés. Il ne peut pas voir le reste de votre Drive ; c’est une limite de l’autorisation, pas une simple promesse de notre part.

Nous conservons une référence au fichier, pas le fichier lui-même. Concrètement :

- Déconnecter Drive conserve vos légendes, dates et albums, mais rend les images inaccessibles.
- Supprimer un fichier dans Drive efface l’image ; LifeWell garde la trace de son existence.
- [L’exportation](../your-data/export.md) comprend les références et les légendes, pas les images elles-mêmes : leurs octets n’ont jamais été à nous.

Pour le détail, voir [Où se trouve votre dossier](../your-data/where-it-lives.md).

## Albums, étiquettes et personnes \{#albums-tags-and-people}

- Les **albums** regroupent les souvenirs.
- Les **étiquettes** les relient entre eux ; une même étiquette peut aussi figurer sur une note ou un élément du carnet.
- **Les personnes présentes sur une photo** relient le souvenir à une personne de l’espace [Proches](./people.md).

Ce dernier lien a une conséquence à connaître : supprimer l’espace Proches retire aussi les références aux personnes dans les photos, puisqu’elles pointeraient vers une personne disparue. L’application compte ces lignes et vous en informe. Voir [Supprimer un espace](../your-data/delete.md#delete-one-area).


`/maps/memories` montre les liens entre un souvenir, sa date, le nom du lieu et les autres enregistrements associés. Le lieu est le nom que vous avez saisi, pas des coordonnées déduites de la photo par LifeWell. Cette vue lit les mêmes enregistrements, sans créer de copie géographique.
