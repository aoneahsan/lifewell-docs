---
title: Endereços permanentes
description: Noventa e nove endereços públicos e quinze redirecionamentos do LifeWell são permanentes. A reconstrução muda o código, não os endereços.
keywords: [urls LifeWell, links permanentes, redirecionamentos, mapa do site, endereços fixos]
tags: [reference, seo]
sidebar_position: 2
---

# Endereços permanentes

Noventa e seis endereços públicos em [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) foram preservados na reconstrução. Todos abrem na versão 3.0.0, sem mudanças. Mais três foram adicionados depois e receberam a mesma garantia: `/features/professionals`, `/changelog` e `/how-lifewell-works`. São 99 ao todo.

Eles permanecem porque já são públicos: indexados por buscadores, usados por aplicativos instalados ou vinculados em lugares que não controlamos. **A reconstrução muda o código, não os compromissos com esses endereços.**

## O que compõe os 96 endereços originais

| Grupo | Quantidade | Exemplos |
|---|---|---|
| Páginas públicas principais | 9 | `/` · `/features` · `/about` · `/contact` · `/get-involved` · `/support` · `/sitemap` · `/blog` · `/feed` |
| Publicações do blog | 47 | `/blog/<slug>` |
| Páginas de recursos | 28 | `/features/<slug>` |
| Ferramentas | 5 | `/tools` e quatro calculadoras mantidas |
| Páginas independentes | 3 | `/baby-names` · `/blood-donors` · `/health-tools` |
| Páginas legais e de conformidade | 4 | `/privacy` · `/terms` · `/delete-account` · `/permissions` |

O diretório de profissionais em `/professionals` exige acesso à conta e não é indexado. A página pública `/features/professionals` está publicada e faz parte dos 99. Veja [Profissionais](../features/professionals.md).

:::note[`/feed` reúne publicações do blog, não uma rede social]
Uma versão anterior da documentação descrevia `/feed` como um feed social. Não é e nunca foi. É o **feed público e legível das publicações recentes do blog**, correspondente ao arquivo `/feed.xml`. A área `/community`, para quem entrou na conta, tem seu próprio feed de publicações em grupos; ela não usa `/feed`.
:::

Os quatro endereços legais são mencionados na página do Google Play e no formulário de segurança dos dados. Um erro `404` em `/privacy` ou `/delete-account` é uma falha de conformidade, não apenas um link quebrado. Por isso, esses endereços são obrigatórios.

## Uma página de recurso continua descrevendo um recurso

A reconstrução uniu algumas telas duplicadas. As páginas públicas desses recursos continuam funcionando e explicam o que você pode fazer, apontando para a nova tela quando necessário.

## Redirecionamentos

São quinze, todos permanentes.

### Para fora, em direção ao ZTools

| Origem | Destino |
|---|---|
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

### Para dentro, até a tela substituta

| Origem | Destino |
|---|---|
| `/data-deletion` | `/delete-account` |
| `/tools/calorie-counter` | `/health/calories` |
| `/tools/fasting-tracker` | `/health/fasting` |
| `/tools/sleep-tracker` | `/health/sleep` |
| `/tools/step-counter` | `/health/steps` |

O destino pode mudar se a tela correspondente mudar de lugar. O endereço de origem nunca é removido.

## Arquivos na raiz

Na raiz do site ficam `sitemap.xml`, `feed.xml`, `robots.txt`, `llms.txt`, `ai.txt`, `pricing.txt` e `humans.txt`.

O mapa do site e o feed são **gerados na compilação** a partir do catálogo de rotas, não escritos à mão. Assim, correspondem ao que o site realmente oferece. Na versão 2.x, os dois eram mantidos manualmente e ficaram desatualizados.

`robots.txt` autoriza explicitamente GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Applebot e Bingbot. As regras de rotas privadas são repetidas dentro do grupo de cada robô, pois cada um segue seu próprio grupo e ignora o grupo genérico.

## Por que os endereços não correspondem às áreas

`/health/mood-journal` está em Mente, e `/health/menopause` está em Fases da vida. Os prefixos históricos não mudam de propósito. Veja [As sete áreas](../domains/overview.md#por-que-os-endereços-não-correspondem-às-áreas).

## Fora da lista

`/search` fica de fora do mapa do site e recebe `noindex` de propósito. É uma busca nos registros de uma pessoa autenticada. Não há conteúdo ali para os buscadores, e indexar uma página de busca convidaria tentativas de sondagem.
