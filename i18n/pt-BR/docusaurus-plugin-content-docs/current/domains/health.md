---
title: Saúde
description: Acompanhamentos, medicamentos, alimentação, exercícios e condições — uma área ao redor das pessoas da sua vida, disponível se você quiser, sem ser o centro do LifeWell.
keywords: [saúde LifeWell, acompanhar saúde, medicamentos, sintomas, sinais vitais]
topics: [domains, health]
sidebar_position: 6
---

# Saúde

Uma área ao redor das pessoas da sua vida, disponível se você quiser. O LifeWell reúne pessoas e momentos; saúde é uma das coisas ao redor delas que podem ajudar sua vida a correr bem. Não é a finalidade do aplicativo.

## Acompanhamentos

`/health/water` e as telas relacionadas mostram dados de **uma única fonte**. Um copo de água registrado no atalho do painel, em `/health/water` ou em `/tracking` é a mesma linha. Não há uma segunda cópia que possa ficar desatualizada.

Cada acompanhamento tem unidade, regra para resumir um dia e limites razoáveis. Há duas regras:

- **Somar** — água, passos e calorias. Uma segunda entrada no dia é outra medição.
- **Usar a mais recente** — peso, pressão arterial, sono e humor. Uma segunda entrada no dia é uma correção.

O banco de dados aplica a regra, não apenas uma tela. Ela vale independentemente de como a linha foi enviada.

As telas com data incluem água, passos, peso, IMC, pressão arterial, glicemia, colesterol, frequência cardíaca, sono, cochilos, caminhada e vitaminas diárias.

**O seu dia segue o seu relógio.** A data de uma entrada vem do dispositivo, não do servidor. Uma pessoa em UTC+5 que registra água às duas da manhã ainda está no dia atual; o dia dela não deve reiniciar às sete da noite.

## Medicamentos

`/health/medications` guarda medicamentos, doses, horários e o registro das doses realmente tomadas. `/health/child-medication` faz o mesmo para uma criança, em uma lista separada para que doses pediátricas não se misturem às de adultos.

Medicamentos podem gerar [lembretes](../features/reminders.md).

## Alimentação e refeições

Você entra por `/diet-plan`. Ali há:

- **Refeições** — o que comeu e quando.
- **Refeições salvas** — as que se repetem, para registrar com um toque.
- **Receitas** e **planejador de refeições**.
- **Janela de jejum**, para quem acompanha isso.
- **Porções** e **análise nutricional**.
- **[Lista de compras](../features/shopping-list.md)**, que o planejador pode preencher.

## Exercícios

`/exercise` registra sessões: atividade, duração e intensidade. `/health/workout-timer`, `/health/stretching`, `/health/yoga` e `/health/kegel` oferecem orientações durante a atividade.

## Condições

Você entra por `/health/symptoms`. Uma condição é um registro permanente — o que é e desde quando —, e um episódio é um registro com data ligado a ela. A área também inclui alergias, asma, artrite, enxaqueca, vacinas, resultados de exames e histórico médico.

A separação ajuda na consulta futura: uma lista de episódios sem a condição correspondente diz muito pouco.

## O que esta área não faz

Ela não dá nota, classifica você nem mantém uma sequência. Não há pontuação de zero a dez nem medalha por começar. Uma lacuna no histórico é apenas uma lacuna: *um registro incompleto ainda é um registro*.

## Levar uma cópia

Você pode incluir dados de saúde de um intervalo escolhido [numa exportação](../your-data/export.md). JSON e CSV incluem os campos compatíveis das tabelas, com limite de 5.000 linhas por tabela. O PDF é um resumo mais curto para uma consulta e deixa de fora alguns campos privados e linhas volumosas.
