---
title: Ferramentas e calculadoras
description: Quais calculadoras ficam no LifeWell, quais estão no ZTools e por que o diretório de ferramentas reúne principalmente links, sem repetir as implementações.
keywords: [ferramentas lifewell, calculadoras de saúde, calculadora imc, temporizador, crescimento infantil]
tags: [features, tools]
sidebar_position: 11
---

# Ferramentas e calculadoras

[`/tools`](https://lifewell.aoneahsan.com/tools) é um diretório. A maioria dos itens leva ao [ZTools](https://ztools.zaions.com), um site separado de calculadoras que não guardam registros; o cartão abre a página exata da ferramenta.

Essa separação é deliberada. Uma calculadora que já existe e recebe manutenção em outro lugar não precisa ser criada de novo aqui.

## O que funciona dentro do LifeWell

Quatro calculadoras permanecem, pois o ZTools não as oferece:

| Ferramenta | Endereço |
|---|---|
| Relação cintura-quadril | `/tools/waist-hip-ratio` |
| Crescimento infantil | `/tools/child-growth` |
| Ganho de peso | `/tools/wellness-weight-gain` |
| Temporizador de intervalos | `/tools/interval-timer` |

Há ainda [`/baby-names`](https://lifewell.aoneahsan.com/baby-names), uma página para explorar nomes, não uma calculadora.

As cinco páginas são públicas. Você não precisa de conta, e elas não guardam informações sobre você.

## O que mudou de endereço

IMC, TDEE, BMR, macronutrientes, proteínas, gordura corporal, peso ideal, zonas de frequência cardíaca, idade e o temporizador de exercícios redirecionam para os equivalentes no ZTools. Os endereços antigos do LifeWell ainda funcionam: devolvem um redirecionamento permanente, não uma página 404, porque outras pessoas já criaram links para eles.

Alguns endereços redirecionam **para dentro do LifeWell**, para a tela que os substituiu: `/tools/calorie-counter` → `/health/calories`, `/tools/fasting-tracker` → `/health/fasting`, `/tools/sleep-tracker` → `/health/sleep` e `/tools/step-counter` → `/health/steps`.

A lista completa está em [Endereços preservados](../reference/addresses.md#redirecionamentos).

## `/health-tools`

[`/health-tools`](https://lifewell.aoneahsan.com/health-tools) reúne as calculadoras relacionadas à saúde.

:::note[Os números de popularidade foram retirados]
A versão 2.x desta página mostrava um volume de buscas ao lado de cada ferramenta — números como *3,2 milhões* sem fonte, usados para ordenar a lista. Eram números inventados. Eles não estão na versão 3.0.0, e a ordem agora segue um critério verificável.
:::

## Temporizadores dentro do aplicativo

`/health/workout-timer` e as sessões guiadas de [Mente](../domains/mind.md#sessões-guiadas) fazem parte do aplicativo, não do diretório de ferramentas. Eles escrevem no seu registro; as ferramentas, não.
