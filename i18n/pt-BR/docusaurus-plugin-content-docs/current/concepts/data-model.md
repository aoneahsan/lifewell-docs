---
title: O modelo de dados
description: Como o LifeWell guarda seus registros — uma tabela por conceito, uma fonte para todos os acompanhamentos e três decisões que orientam o restante.
keywords: [modelo de dados LifeWell, esquema Postgres, medições, dados de acompanhamento, projeto do banco de dados]
topics: [concepts, architecture]
sidebar_position: 2
---

# O modelo de dados

Postgres. Uma tabela por conceito, não por tela.

## Uma fonte para todos os acompanhamentos

`/tracking`, `/health/water` e o atalho do painel são **três maneiras de ver os mesmos dados**, não três lugares onde eles ficam guardados.

| Objeto | O que representa |
|---|---|
| `metric_definitions` | O catálogo dos acompanhamentos: unidade, regra para resumir um dia, limites razoáveis, gráfico, área e meta padrão. Uma linha sem titular é do sistema; com titular, foi definida por você |
| `metric_entries` | Cada medição de cada área. A série ao longo do tempo |
| `user_metric_settings` | Sua meta, visibilidade e ordem para cada acompanhamento. Sem uma linha própria, valem as opções padrão |
| `metric_daily` | Uma visualização com uma linha por pessoa, acompanhamento e dia, resumida pela regra daquele acompanhamento |

A versão 2.x gravava o mesmo número em vários lugares e deixava as cópias divergirem. Corrigir isso foi a mudança de maior valor na reconstrução.

## Três decisões importantes

### Resumir um dia muda o significado dos dados

Um acompanhamento **soma** os valores do dia (água, passos, calorias) ou usa o **mais recente** (peso, pressão arterial, sono, humor).

Esse campo determina tanto o total diário quanto o tratamento de uma segunda entrada no mesmo dia: nova medição ou correção. Um índice do banco aplica a regra; um serviço externo não pode ignorá-la.

### A data vem do seu dispositivo

O *hoje* de um acompanhamento diário é o **hoje da pessoa**. Quem registra água às duas da manhã no fuso UTC+5 está no dia atual. Se a data vier do relógio do servidor, a medição cai em ontem, e o dia parece reiniciar às sete da noite.

Só o dispositivo conhece o deslocamento correto, então o cliente informa o dia. Não há um valor presumido.

### Cada entrada guarda sua unidade

Trocar o sistema métrico pelo imperial não pode reinterpretar silenciosamente anos de registros. O histórico mantém a unidade original; a conversão acontece na leitura.

## O restante do modelo

Ao redor dessa base ficam as tabelas de cada área: condições e episódios, medicamentos e doses, refeições e receitas salvas, dias do ciclo, crianças e seus registros, pessoas e suas relações, memórias e álbuns, notas e pastas, eventos do calendário e listas, conversas e mensagens, publicações na comunidade, perfis profissionais, doadores de sangue e dados da conta.

A lista completa, com o conteúdo e a exportação de cada tabela, está em [O formato do arquivo exportado](../reference/export-format.md). Essa página é gerada a partir do mesmo catálogo usado pela exportação; assim, não pode descrever uma tabela ausente do arquivo.

## Linhas permanentes e linhas com data

Toda tabela pertence a um dos grupos:

- Uma linha **com data** pertence a um dia: medição, dose, refeição ou compromisso.
- Uma linha **permanente** dá significado às linhas com data: medicamento, condição, refeição salva ou meta.

Os filtros de data se aplicam ao primeiro grupo, nunca ao segundo. Uma lista de doses sem os medicamentos correspondentes não é uma exportação menor; é uma exportação quebrada.

## O que não faz parte do modelo

- **Sem pontuações de saúde, sequências, classificações ou níveis.** Os registros do dia a dia e da saúde são observações, não uma medida do seu valor. O [programa de indicações](../features/referrals.md), separado, pode conceder pontos e distintivos por convites confirmados; essas recompensas não avaliam sua saúde nem sua atividade diária.
- **Sem coluna de e-mail.** O provedor de identidade guarda seu endereço. Uma segunda cópia teria dois responsáveis pela escrita e ficaria desatualizada na primeira mudança.
- **Sem permissão de compartilhamento de localização.** O conjunto de dados que podem ser compartilhados contém três tipos — acompanhamentos, medicamentos e árvores — e nenhum deles é localização.
