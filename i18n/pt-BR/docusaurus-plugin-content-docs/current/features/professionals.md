---
title: Profissionais
description: Um diretório de profissionais que se cadastraram. O LifeWell não verifica as qualificações de ninguém; mostra o número de registro e um link para você conferir na entidade responsável.
keywords: [profissionais LifeWell, diretório de profissionais, registro profissional, consulta]
tags: [features, people]
sidebar_position: 5
---

# Profissionais

`/professionals` é um diretório de profissionais que se cadastraram. Se você é um deles, pode criar seu perfil em `/profile`.

## O LifeWell não verifica as qualificações de ninguém

Essa frase aparece no próprio diretório, logo no início. É a informação mais importante desta página.

Quem aparece no perfil preencheu todas as informações ali. O diretório mostra o número de registro completo e traz um link para a consulta pública da entidade que o emitiu. Assim, você pode conferir por conta própria em cerca de um minuto. É isso que o LifeWell pode oferecer com honestidade. Não há avaliações nem recomendações de profissionais.

## O que a pessoa declarou e o que alguém conferiu

Cada perfil tem três colunas: o que a pessoa declarou, o que o LifeWell verificou e como você pode conferir. **A coluna do meio geralmente fica vazia — e isso é intencional.**

Um selo de *verificado* poderia parecer uma confirmação de cinco coisas diferentes: qualificação, registro, seguro, identidade e disponibilidade. O selo não provaria nenhuma delas. As três colunas mostram exatamente em qual declaração você está confiando e a quem pedir confirmação. Não há selo de verificação no diretório, e o profissional não pode preencher a coluna reservada ao administrador.

O LifeWell confirma apenas que o endereço de e-mail recebe mensagens, pois a pessoa abriu um link enviado a ele. Só o servidor registra essa confirmação, que não prova nada sobre a qualificação profissional.

:::note[Uma declaração sem entidade de registro não pode ser aprovada]
Um administrador pode registrar uma conferência junto a uma entidade profissional identificada. Se a declaração não informar nenhuma entidade, ela só pode ser recusada. Essa regra está no banco de dados: a função gera um erro em vez de gravar uma conferência sem fundamento. Uma aprovação sem registro não significaria nada.
:::

Todas as aprovações e recusas ficam no histórico de auditoria. Cada recusa inclui o motivo.

## Oferecer horários

Um profissional pode publicar horários disponíveis. Quando alguém reserva um deles, abre uma **consulta**: uma [conversa](./community-and-chats.md#conversas) de outro tipo.

Não é possível excluir um horário reservado enquanto uma consulta estiver ligada a ele. Ao retirar um perfil, as conversas são encerradas antes, para que nenhuma fique sem referência.

## Consultas e seu plano

As consultas fazem parte de um plano pago. Contas gratuitas não podem abri-las; o servidor aplica essa restrição, mesmo que alguém tente contornar a interface. Veja [Planos](../plans.md).

## O que entra na exportação

Seu perfil profissional, as informações que você declarou, os horários que ofereceu e as conferências dos seus registros. O perfil de outra pessoa pertence ao registro dela.
