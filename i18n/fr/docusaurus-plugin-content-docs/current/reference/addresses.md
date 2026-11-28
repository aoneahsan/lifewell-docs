---
title: Adresses qui ne changent pas
description: Les 99 adresses publiques d’origine de LifeWell restent accessibles ; 19 redirections permanentes préservent les adresses déplacées.
keywords: [adresses LifeWell, liens permanents, redirections, plan du site, URL fixes]
topics: [reference, seo]
sidebar_position: 2
---

# Adresses qui ne changent pas

Quatre-vingt-seize adresses publiques de [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) ont été fixées lors de la reconstruction. Elles fonctionnent toutes avec la version 3.0.0, sans changement. Trois autres se sont ajoutées depuis : `/features/professionals`, `/changelog` et `/how-lifewell-works`. Elles sont fixes elles aussi, soit quatre-vingt-dix-neuf adresses au total.

Elles étaient déjà publiques : indexées par les moteurs de recherche, intégrées à des applications installées ou reprises dans des liens que nous ne contrôlons pas. **La reconstruction change le code, pas ces engagements.**

## Les quatre-vingt-seize adresses initiales \{#what-is-in-the-ninety-six}

| Groupe | Nombre | Exemples |
|---|---|---|
| Pages publiques principales | 9 | `/` · `/features` · `/about` · `/contact` · `/get-involved` · `/support` · `/sitemap` · `/blog` · `/feed` |
| Articles du blog | 47 | `/blog/<slug>` |
| Pages de fonctions | 28 | `/features/<slug>` |
| Outils | 5 | Le groupe d’origine comprend `/tools` et quatre adresses qui redirigent désormais vers ZTools. |
| Pages indépendantes | 3 | `/baby-names` · `/blood-donors` · `/health-tools` |
| Pages juridiques et réglementaires | 4 | `/privacy` · `/terms` · `/delete-account` · `/permissions` |

L’annuaire des professionnels à `/professionals` exige une connexion et n’est pas indexé. Sa page publique `/features/professionals` figure parmi les quatre-vingt-dix-neuf. Voir [Professionnels](../features/professionals.md).

:::note[`/feed` est le flux du blog, jamais un fil social]
Une ancienne version de cette documentation décrivait `/feed` comme un fil social. Ce n’est pas le cas et cela ne l’a jamais été. C’est le **flux public et lisible des articles récents du blog**, en complément humain de `/feed.xml`. L’espace `/community`, réservé aux membres connectés, possède son propre fil de publications de groupe ; il n’utilise pas `/feed`.
:::

Les quatre adresses juridiques figurent dans la fiche Google Play et le formulaire Data Safety. Une erreur 404 sur `/privacy` ou `/delete-account` enfreindrait une obligation, au-delà d’un simple lien cassé. C’est pourquoi elles se trouvent dans cette liste.

## Une page de fonction garde son sujet \{#a-feature-page-keeps-describing-a-feature}

La reconstruction a réuni certains écrans autrefois séparés. Les pages de fonctions correspondantes restent accessibles et décrivent toujours ce que vous pouvez faire ; elles indiquent le nouvel emplacement au lieu de l’ancien.

## Redirections \{#redirects}

Dix-neuf adresses de base redirigent de façon permanente. Les quatre anciennes adresses des calculateurs redirigent aussi sous chacun des neuf préfixes de langue traduits.

### Vers ZTools \{#out-to-ztools}

| Depuis | Vers |
|---|---|
| `/tools/child-growth` | [ZTools](https://ztools.zaions.com/child-growth-percentile-calculator) |
| `/tools/waist-hip-ratio` | [ZTools](https://ztools.zaions.com/waist-hip-ratio-calculator) |
| `/tools/wellness-weight-gain` | [ZTools](https://ztools.zaions.com/pregnancy-weight-gain-calculator) |
| `/tools/interval-timer` | [ZTools](https://ztools.zaions.com/workout-timer) |
| `/tools/bmi-calculator` | `ztools.zaions.com/bmi-calculator` |
| `/tools/tdee-calculator` | `ztools.zaions.com/tdee-calculator-advanced` |
| `/tools/bmr-calculator` | `ztools.zaions.com/bmr-calculator` |
| `/tools/macro-calculator` | `ztools.zaions.com/macronutrient-calculator` |
| `/tools/protein-calculator` | `ztools.zaions.com/protein-intake-calculator` |
| `/tools/body-fat-calculator` | `ztools.zaions.com/body-fat-calculator` |
| `/tools/ideal-weight-calculator` | `ztools.zaions.com/ideal-weight-calculator` |
| `/tools/heart-rate-zones` | `ztools.zaions.com/heart-rate-zone-calculator` |
| `/tools/age-calculator` | `ztools.zaions.com/age-calculator` |
| `/tools/workout-timer` | `ztools.zaions.com/workout-timer` |

### Vers l’écran de remplacement \{#in-to-the-screen-that-replaced-them}

| Depuis | Vers |
|---|---|
| `/data-deletion` | `/delete-account` |
| `/tools/calorie-counter` | `/health/calories` |
| `/tools/fasting-tracker` | `/health/fasting` |
| `/tools/sleep-tracker` | `/health/sleep` |
| `/tools/step-counter` | `/health/steps` |

Une cible peut changer si son écran déménage. La redirection, elle, ne disparaît jamais.

## Fichiers à la racine \{#files-at-the-root}

Les fichiers publiés à la racine sont `sitemap.xml`, `feed.xml`, `robots.txt`, `llms.txt`, `ai.txt`, `pricing.txt` et `humans.txt`.

Le plan du site et le flux sont **générés à la compilation** depuis le registre des routes. Ils correspondent donc aux pages réellement servies, contrairement à ceux de la version 2.x, maintenus à la main et devenus périmés.

`robots.txt` autorise nommément les robots d’IA — GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Applebot et Bingbot — et répète les règles des routes privées dans chaque groupe. Un robot suit les règles de son propre groupe et ignore celles du groupe général.

## Pourquoi les adresses ne correspondent pas aux espaces \{#why-the-addresses-do-not-match-the-areas}

`/health/mood-journal` appartient à Esprit et `/health/menopause` aux Étapes de la vie. Leur préfixe ne correspond pas à l’espace et reste volontairement ainsi. Voir [Les sept espaces](../domains/overview.md#why-the-addresses-do-not-match-the-areas).

## Adresse exclue de la liste \{#not-in-the-list}

`/search` est volontairement absent du plan du site et porte la directive `noindex`. Cette page connectée porte sur le dossier d’une seule personne : un robot n’y a rien à lire. L’indexer encouragerait les requêtes sans objet.
