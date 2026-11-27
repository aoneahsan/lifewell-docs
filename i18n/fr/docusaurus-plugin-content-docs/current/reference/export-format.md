---
title: Le format des fichiers d’export
description: '« Le contenu d’un export LifeWell, champ par champ et table par table : en-tête JSON, archive CSV, éléments exclus du PDF et données absentes de tous les formats. »'
keywords: [format export LifeWell, schéma JSON export, export CSV, importer données LifeWell, portabilité des données]
topics: [reference, export, your-data]
sidebar_position: 1
---

# Le format des fichiers d’export

Cette page décrit les fichiers produits par [Exporter une copie](../your-data/export.md), pour qu’une autre application puisse les lire sans deviner leur structure.

Ce n’est pas un format propriétaire LifeWell. Le JSON est du JSON ; l’archive est un fichier zip ordinaire contenant des fichiers CSV ordinaires.

## Les trois fichiers \{#the-three-files}

| Format | Nom du fichier | Type de média | Contenu |
|---|---|---|---|
| JSON | `lifewell-export-<YYYY-MM-DD>.json` | `application/json` | Période choisie ; 5 000 lignes par table |
| CSV | `lifewell-export-<YYYY-MM-DD>.zip` | `application/zip` | Période choisie ; 5 000 lignes par table |
| PDF | `lifewell-export-<YYYY-MM-DD>.pdf` | `application/pdf` | Résumé — voir ci-dessous |

La date correspond à votre jour local, et non à celui d’un serveur. Le nom reste en ASCII et garde la même forme dans toutes les langues, pour que vous puissiez le retrouver dans votre dossier de téléchargements.

## Le document JSON \{#the-json-document}

Un objet : un petit en-tête, puis une clé par table contenant chacune un tableau de lignes.

```json
{
  "exportedAt": "2026-09-08T11:04:22.417Z",
  "schema": 1,
  "range": { "from": "2026-01-01", "to": "2026-09-08" },
  "rowCap": 5000,
  "truncated": ["metric_entries"],
  "profile": { "id": "…", "display_name": "…" },
  "conditions": [],
  "medications": [ { "…": "…" } ]
}
```

| Champ d’en-tête | Type | Signification |
|---|---|---|
| `exportedAt` | Chaîne ISO 8601, UTC | Date et heure de création du fichier |
| `schema` | Nombre | Version du format. Actuellement **1** |
| `range.from` / `range.to` | Date ISO ou `null` | Période choisie. `null` signifie qu’aucune borne n’est fixée |
| `rowCap` | Nombre | Plafond appliqué à chaque table : **5 000** |
| `truncated` | Tableau de noms de tables | Tables qui ont atteint le plafond. Un tableau vide signifie qu’aucune ligne n’a été coupée |
| `profile` | Objet ou `null` | Votre profil entier, plutôt qu’un tableau à une seule ligne |

Trois points à connaître avant d’écrire un lecteur :

- **Une table sans ligne donne un tableau vide, pas une clé absente.** `"meals": []` dit quelque chose ; l’absence de la clé `meals` laisserait planer un doute.
- **La période choisie et `truncated` déterminent les lignes présentes.** Vérifiez les deux avant de conclure qu’une personne n’a pas d’historique.
- **Le JSON est indenté sur deux espaces.** Ce fichier est fait pour être ouvert et parcouru. Un éditeur de texte gère difficilement une seule ligne de huit mégaoctets.

## L’archive CSV \{#the-csv-archive}

Un fichier zip contenant **un fichier `.csv` par table**, nommé `<table>.csv`. Les colonnes sont celles de la table concernée.

| Détail | Valeur |
|---|---|
| Fins de ligne | CRLF, selon la RFC 4180 |
| Encodage | UTF-8 **avec marque d’ordre des octets** |
| Guillemets | RFC 4180 : guillemets doublés ; les champs contenant `"`, `,`, CR ou LF sont placés entre guillemets |
| Cellule vide | `null` et `undefined` donnent tous deux une cellule vide |
| Valeurs imbriquées | Conservées comme JSON dans la cellule, sans être réparties sur plusieurs lignes |

Deux choix délibérés pourraient autrement sembler être des erreurs :

- **Une table sans ligne possède quand même un fichier**, contenant seulement sa ligne d’en-tête. Un fichier absent serait impossible à distinguer d’un échec de l’export ; un en-tête seul prouve que la table a été prise en compte.
- **Une cellule dont le texte commence par `=`, `+`, `-`, `@`, une tabulation ou un retour chariot reçoit une apostrophe en préfixe.** Les tableurs interprètent ces caractères comme le début d’une formule. Vos données vous appartiennent : cette mesure protège la personne à qui vous remettez le fichier, souvent un médecin dans le contexte de cette page. Retirez l’apostrophe initiale si vous analysez le fichier plutôt que de l’ouvrir dans un tableur.

La marque d’ordre des octets est présente parce qu’Excel sous Windows peut lire un fichier UTF-8 sans marque avec l’encodage local. Cela déforme les noms accentués, précisément dans l’outil auquel ce format est destiné.

## Toutes les tables du fichier \{#every-table-in-the-file}

Soixante-cinq tables, regroupées par domaine.

- **Période** : les lignes *datées* respectent la période choisie. Les lignes *permanentes* sont toujours incluses : une dose sans le médicament auquel elle se rapporte ressemblerait à une perte de données.
- **Dans le PDF** : *Détaillé* signifie que les lignes sont imprimées ; *Compté, non détaillé* indique le nombre et la période, sans les lignes ; *Absent du PDF* signifie exactement cela.

### Santé \{#health}

| Table | Contenu | Période | Dans le PDF |
|---|---|---|---|
| `conditions` | Problèmes de santé | Permanente | Détaillé |
| `condition_episodes` | Épisodes | Datée | Détaillé |
| `medications` | Médicaments | Permanente | Détaillé |
| `medication_doses` | Prises de médicaments | Datée | Compté, non détaillé |
| `metric_entries` | Relevés de suivi | Datée | Compté, non détaillé |
| `user_metric_settings` | Paramètres des suivis | Permanente | Détaillé |
| `metric_definitions` | Types de suivi | Permanente | Détaillé |
| `meals` | Repas | Datée | Compté, non détaillé |
| `saved_meals` | Repas enregistrés | Permanente | Absent du PDF |
| `saved_meal_items` | Éléments de repas enregistrés | Permanente | Absent du PDF |
| `eating_windows` | Fenêtre de jeûne | Permanente | Détaillé |
| `shopping_lists` | Listes de courses | Permanente | Absent du PDF |
| `shopping_list_items` | Articles des listes de courses | Permanente | Absent du PDF |
| `movement_sessions` | Séances d’activité physique | Datée | Compté, non détaillé |
| `wellness_breaks` | Pauses bien-être | Datée | Absent du PDF |
| `wellness_nudges` | Suggestions de bien-être | Permanente | Absent du PDF |

### Esprit \{#mind}

| Table | Contenu | Période | Dans le PDF |
|---|---|---|---|
| `journal_entries` | Entrées du journal | Datée | Absent du PDF |
| `mind_sessions` | Séances guidées | Datée | Compté, non détaillé |

### Étapes de vie \{#life-stages}

| Table | Contenu | Période | Dans le PDF |
|---|---|---|---|
| `cycle_days` | Jours du cycle | Datée | Compté, non détaillé |
| `babies` | Enfants | Permanente | Détaillé |
| `baby_growth` | Mesures de croissance | Permanente | Détaillé |
| `baby_logs` | Suivi des bébés | Datée | Compté, non détaillé |
| `baby_milestones` | Étapes de développement | Permanente | Détaillé |

### Personnes \{#people}

| Table | Contenu | Période | Dans le PDF |
|---|---|---|---|
| `people` | Personnes | Permanente | Détaillé |
| `person_edges` | Relations | Permanente | Absent du PDF |
| `connections` | Mises en relation | Permanente | Détaillé |
| `connection_prefs` | Paramètres des relations | Permanente | Absent du PDF |
| `share_links` | Partages | Permanente | Détaillé |
| `share_submissions` | Réponses envoyées par un lien de partage | Permanente | Absent du PDF |
| `community_members` | Groupes rejoints | Permanente | Absent du PDF |
| `posts` | Publications de la communauté | Permanente | Détaillé |
| `post_replies` | Réponses dans la communauté | Permanente | Absent du PDF |
| `blocks` | Personnes bloquées | Permanente | Absent du PDF |
| `chats` | Conversations | Permanente | Absent du PDF |
| `chat_members` | Membres de chaque conversation | Permanente | Absent du PDF |
| `messages` | Messages que vous avez envoyés | Permanente | Absent du PDF |
| `message_hides` | Messages que vous avez masqués | Permanente | Absent du PDF |
| `professionals` | Votre fiche professionnelle | Permanente | Détaillé |
| `professional_claims` | Déclarations faites à votre sujet | Permanente | Absent du PDF |
| `professional_slots` | Créneaux proposés | Permanente | Absent du PDF |
| `professional_verifications` | Vérifications auprès des registres | Permanente | Absent du PDF |
| `blood_donor_profiles` | Votre fiche de donneur de sang | Permanente | Détaillé |
| `blood_requests` | Demandes de sang que vous avez envoyées | Permanente | Détaillé |

### Souvenirs \{#memories}

| Table | Contenu | Période | Dans le PDF |
|---|---|---|---|
| `memories` | Souvenirs | Permanente | Absent du PDF |
| `scrapbook_items` | Éléments d’album | Permanente | Absent du PDF |
| `media_files` | Fichiers multimédias | Permanente | Compté, non détaillé |
| `media_albums` | Albums | Permanente | Détaillé |
| `media_people` | Personnes présentes sur une photo | Permanente | Absent du PDF |
| `tags` | Étiquettes | Permanente | Détaillé |
| `taggables` | Éléments étiquetés | Permanente | Absent du PDF |

### Quotidien \{#everyday}

| Table | Contenu | Période | Dans le PDF |
|---|---|---|---|
| `notes` | Notes | Permanente | Absent du PDF |
| `note_folders` | Dossiers de notes | Permanente | Absent du PDF |
| `location_points` | Lieux enregistrés | Permanente | Compté, non détaillé |
| `location_settings` | Paramètres de position | Permanente | Détaillé |
| `events` | Calendrier | Datée | Détaillé |
| `event_checklist_items` | Notes de rendez-vous | Permanente | Absent du PDF |
| `reminder_schedules` | Rappels | Permanente | Détaillé |

### Votre compte \{#your-account}

| Table | Contenu | Période | Dans le PDF |
|---|---|---|---|
| `profiles` | Votre profil | Permanente | Détaillé |
| `notifications` | Messages qui vous ont été envoyés | Datée | Absent du PDF |
| `export_runs` | Exports précédents | Permanente | Absent du PDF |
| `export_schedules` | Exports programmés | Permanente | Absent du PDF |
| `plan_grant_requests` | Demandes de formule | Permanente | Absent du PDF |
| `referrals` | Personnes que vous avez invitées | Permanente | Absent du PDF |
| `referral_rewards` | Avantages obtenus grâce à vos invitations | Permanente | Absent du PDF |
| `account_audit` | Modifications de votre compte | Datée | Absent du PDF |

## Ce que chaque format laisse de côté \{#what-each-format-leaves-out}

**Le JSON et le CSV contiennent les tables prises en charge pour la période choisie.** Les lignes datées hors de cette période sont exclues. Une table dépassant 5 000 lignes est plafonnée et nommée dans l’en-tête. Ces formats servent à lire ou à déplacer les données incluses ; LifeWell ne propose pas actuellement de restauration de compte à partir de ces fichiers.

**Le PDF ne l’est pas, volontairement.** Un PDF peut être imprimé, remis à un secrétariat puis laissé sur un bureau. Il contient donc ce qu’un professionnel de santé peut réellement consulter et rien de plus :

- **Détaillé** : les données permanentes, notamment problèmes de santé, médicaments, types et objectifs de suivi, enfants, mesures de croissance, étapes de développement, personnes, relations, partages, calendrier, rappels et profil.
- **Compté, non détaillé** : les données datées volumineuses, comme les relevés, prises de médicaments, repas, activités physiques, jours du cycle, suivis des bébés, séances guidées, fichiers multimédias et lieux enregistrés. Quarante lignes sur quatre mille ne constituent qu’un échantillon. Dans un document présenté comme *votre dossier*, un tel échantillon tromperait la personne à qui il est destiné. Une table détaillée imprime au maximum **60 lignes**.
- **Totalement absent du PDF** : le journal, les souvenirs, notes, éléments d’album, messages, réponses de la communauté et le reste des textes écrits pour soi.

:::warning[Le journal ne figure jamais dans le PDF : ce n’est pas une préférence]
Pour les autres éléments de cette page, nous avons choisi ce qui est utile. Le journal est le seul espace de LifeWell qui ne doit pas se retrouver sur une feuille laissée sur un bureau. Il figure dans les fichiers JSON et CSV, que vous ouvrez vous-même.
:::

## Ce qu’aucun format ne contient \{#what-no-format-ever-contains}

Sept éléments sont absents de **tous** les exports. La période choisie et le plafond par table peuvent exclure d’autres lignes.

| Élément absent | Raison |
|---|---|
| **Les fichiers multimédias eux-mêmes** | Les images se trouvent dans votre propre Google Drive. L’export contient la référence, la légende et la date : nous n’avons jamais détenu les octets à vous remettre. |
| **Les données partagées *avec* vous** | Il s’agit du dossier d’une autre personne, qu’elle vous laisse consulter. Ce droit disparaît quand elle révoque le partage ; une copie dans votre fichier ne disparaîtrait pas. |
| **Les lignes supprimées** | Une suppression est définitive. Aucun panier de récupération ne se cache derrière l’export. |
| **Les journaux de fonctionnement** | Compteurs de limites de requêtes, notifications ignorées et éléments semblables. C’est l’état de l’interface, pas votre dossier. |
| **Votre mot de passe** | Il n’y en a pas. La connexion passe par Google ; nous ne voyons ni ne stockons de mot de passe. |
| **Votre clé de fournisseur d’IA** | Elle est conservée chiffrée et reste un identifiant actif. L’inscrire dans un fichier en clair que vous pourriez vous envoyer par e-mail exposerait cette clé sous prétexte d’exhaustivité. |
| **Les compteurs d’utilisation de l’IA** | Ils servent à calculer une limite ; ce ne sont pas des données que vous avez écrites. |

Cinq autres tables sont écartées pour le même type de raison : elles contiennent un identifiant actif ou le dossier d’une autre personne.

| Élément écarté | Raison |
|---|---|
| Signalements que vous avez faits sur une publication | Personne ne peut relire cette table, vous compris. Une file de modération révélée par un téléchargement resterait une fuite. |
| Coordonnées communiquées par un donneur de sang | Elles sont fournies une fois, à une seule personne, et peuvent être retirées. Une ligne de fichier ne respecte aucune de ces conditions. |
| Votre connexion Google Drive | Elle contient un jeton de renouvellement actif. |
| Un reçu d’achat Google Play | Il contient un jeton d’achat reconnu par Google. Votre droit d’accès figure déjà dans le fichier, sur votre profil. |
| Annonces ignorées | Il s’agit des avis que vous avez fermés : un état de l’interface. |

Enfin, quatre tables contiennent des données de référence partagées, et non vos données : la liste des formules, le catalogue des groupes, la base alimentaire et une table interne servant au contrôle de disponibilité.

## Relire les données \{#reading-it-back}

LifeWell ne propose aucun import. Aucun de ces fichiers ne peut y être réintégré.

Le format est documenté pour qu’**autre chose** puisse les lire : un script, un tableur, une autre application, ou vous-même dans cinq ans avec un éditeur de texte. Deux choix délibérés facilitent cela :

1. Chaque identifiant du fichier est le nom de colonne de la base de données. Une colonne signifie donc la même chose dans le JSON, le CSV et cette page.
2. L’en-tête indique les limites du fichier. S’il est partiel, il le dit dans ses dix premières lignes.

## Quand cette page change \{#when-this-page-changes}

Toute évolution ajoutant une table ajoute aussi sa ligne ci-dessus. Un test vérifie que cette liste correspond au schéma dans les deux sens : une table présente d’un côté et absente de l’autre fait échouer la compilation au lieu de laisser passer un oubli silencieux.

Si vous écrivez un lecteur, appuyez-vous sur `schema`. Sa valeur est `1` aujourd’hui ; elle augmentera avant qu’un élément de la structure ci-dessus ne change de sens.
