---
title: Mapas e lugares
description: Acompanhe as relações entre memórias, notas, pessoas, eventos e nomes de lugares salvos. O histórico de localização é uma opção separada.
keywords: [mapas lifewell, mapa de lembranças, lugares salvos, histórico de localização]
tags: [features, people, memories]
sidebar_position: 10
---

# Mapas e lugares

No aplicativo, `/maps` se chama “Conexões”. A página mostra relações entre registros que você já fez; a camada Lugares lista nomes associados a memórias ou eventos. Ela lê os registros originais, sem criar outra cópia nem deduzir coordenadas geográficas.

## Visões de conexões \{#the-four-maps}

| Endereço | O que abre |
|---|---|
| `/maps` | Visão Conexões com camadas de tudo, pessoas, lugares e histórico de localização |
| `/maps/memories` | Percurso limitado de relações a partir de uma memória |
| `/maps/notes` | Percurso limitado de relações a partir de uma nota |
| `/maps/people` | Gráfico de pessoas e suas relações |

`/maps/full` retira o entorno da página para dar mais espaço ao gráfico de pessoas. Entradas do calendário e das conversas também têm percursos de relações; datas e nomes de lugares continuam nos registros originais.

## Lugares salvos

Aqui, lugar é o nome que você informou, não uma posição coletada pelo LifeWell. A camada Lugares lista memórias e eventos do calendário com nomes de lugar. Os dados de lugares salvos aparecem na [exportação](../reference/export-format.md).

## Histórico de localização

`/people/location-tracking` e `/people/location-history` descrevem uma função separada, **desligada por padrão**. O gravador de localização em segundo plano foi implementado para Android 3.31.0 e versões posteriores. Ao ativar a gravação, o aplicativo solicita permissões de localização específicas. O histórico existente ainda pode ser visto e excluído. A versão 3.31.0 ainda precisa ser enviada ao Google Play pelo responsável e verificada em um aparelho real; não conte com esse gravador na versão que a loja oferece atualmente.

:::note[O local nunca é compartilhado com outra conta]
Um link pode mostrar um registro, seus medicamentos ou uma árvore familiar, mas não sua localização. Não há permissão para localização no compartilhamento; isso vem das regras do banco de dados, não de uma opção que a tela escolheu esconder. Veja [Compartilhamento](../domains/sharing.md).
:::

## O que entra na exportação

Lugares salvos e configurações de localização entram em JSON e CSV. O PDF conta os registros de lugares, sem imprimir uma lista de coordenadas.
