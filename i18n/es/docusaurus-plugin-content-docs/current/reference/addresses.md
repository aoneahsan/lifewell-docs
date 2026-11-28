---
title: Direcciones que se conservan
description: Las 99 direcciones públicas originales de LifeWell siguen funcionando; 19 redirecciones permanentes conservan las direcciones trasladadas.
keywords: [direcciones de lifewell, enlaces permanentes, redirecciones, mapa del sitio, urls conservadas]
topics: [reference, seo]
sidebar_position: 2
---

# Direcciones que se conservan \{#addresses-that-do-not-move}

Al reconstruir LifeWell se conservaron noventa y seis direcciones públicas de [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com). Todas funcionan en 3.0.0. Después se añadieron tres con la misma garantía: `/features/professionals`, `/changelog` y `/how-lifewell-works`. Son noventa y nueve en total.

Se conservan porque ya son públicas: los buscadores las indexaron, aparecen en aplicaciones instaladas o tienen enlaces que no controlamos. **La reconstrucción cambia el código, no esos compromisos.**

## Qué incluyen las noventa y seis originales \{#what-is-in-the-ninety-six}

| Grupo | Cantidad | Ejemplos |
|---|---|---|
| Páginas públicas principales | 9 | `/` · `/features` · `/about` · `/contact` · `/get-involved` · `/support` · `/sitemap` · `/blog` · `/feed` |
| Publicaciones del blog | 47 | `/blog/<slug>` |
| Páginas de funciones | 28 | `/features/<slug>` |
| Herramientas | 5 | El grupo original incluye `/tools` y cuatro direcciones que ahora redirigen a ZTools. |
| Páginas independientes | 3 | `/baby-names` · `/blood-donors` · `/health-tools` |
| Páginas legales y de cumplimiento | 4 | `/privacy` · `/terms` · `/delete-account` · `/permissions` |

El directorio de profesionales está en `/professionals`, una pantalla para usuarios con sesión iniciada que no se indexa. Su página pública `/features/professionals` sí está publicada y se cuenta entre las noventa y nueve. Consulta [Profesionales](../features/professionals.md).

:::note[`/feed` es el canal del blog, no una red social]
Una versión anterior de esta documentación describía `/feed` como un canal social. No lo es ni lo fue. Es el **canal público y legible del contenido reciente del blog**, acompañado de `/feed.xml`. La zona `/community`, para quienes han iniciado sesión, tiene su propio canal de publicaciones de grupo; no utiliza `/feed`.
:::

Las cuatro direcciones legales figuran en la ficha de Google Play y en el formulario de seguridad de datos. Un error 404 en `/privacy` o `/delete-account` incumpliría una obligación, no sería solo un enlace roto.

## Cada página de función sigue describiendo su función \{#a-feature-page-keeps-describing-a-feature}

La reconstrucción unificó algunas pantallas duplicadas. Sus páginas públicas siguen funcionando y explicando lo que puedes hacer, con la nueva ubicación de la función.

## Redirecciones \{#redirects}

Hay 19 direcciones base, todas con redirección permanente. Las cuatro rutas anteriores de calculadoras también redirigen bajo cada uno de los nueve prefijos de idioma traducidos.

### Hacia ZTools \{#out-to-ztools}

| Desde | Hacia |
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

### Dentro de LifeWell \{#in-to-the-screen-that-replaced-them}

| Desde | Hacia |
|---|---|
| `/data-deletion` | `/delete-account` |
| `/tools/calorie-counter` | `/health/calories` |
| `/tools/fasting-tracker` | `/health/fasting` |
| `/tools/sleep-tracker` | `/health/sleep` |
| `/tools/step-counter` | `/health/steps` |

El destino puede cambiar si cambia la pantalla correspondiente. La redirección no se elimina.

## Archivos en la raíz \{#files-at-the-root}

Archivos publicados: `sitemap.xml` · `feed.xml` · `robots.txt` · `llms.txt` · `ai.txt` · `pricing.txt` · `humans.txt`

El mapa del sitio y el canal se **generan al compilar** desde el catálogo de rutas. Así corresponden a las páginas publicadas. En la aplicación 2.x se mantenían a mano y se habían desactualizado.

`robots.txt` permite explícitamente los rastreadores de IA GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Applebot y Bingbot. Repite las reglas de las rutas privadas en cada grupo identificado, ya que un rastreador sigue su propio grupo e ignora el grupo general.

## Por qué las direcciones no coinciden con las áreas \{#why-the-addresses-do-not-match-the-areas}

`/health/mood-journal` pertenece a Mente y `/health/menopause` a Etapas de la vida. Conservan sus prefijos históricos. Consulta [Las siete áreas](../domains/overview.md#why-the-addresses-do-not-match-the-areas).

## Rutas que no aparecen en la lista \{#not-in-the-list}

`/search` se excluye deliberadamente del mapa del sitio y tiene `noindex`. Busca en los datos privados de la persona que inició sesión. Un buscador público no tiene nada que indexar allí.
