---
title: Programa de indicações
description: "Convide alguém: um cadastro confirmado rende pontos, um distintivo e, após um limite, um mês de plano pago. Cada número é uma configuração administrativa."
keywords: [indicação lifewell, convidar amigo, recompensa por indicação, mês de plano]
tags: [features, plans]
sidebar_position: 8
---

# Programa de indicações

Você recebe um código. Outra pessoa se cadastra com ele. Quando o cadastro é **confirmado**, você ganha pontos e um distintivo; depois de atingir o limite definido, recebe um mês de um plano pago.

## O que significa confirmado

É um sinal real, não um clique: a conta convidada precisa existir **e** ter um endereço de e-mail verificado. O servidor confirma a indicação quando as duas condições são verdadeiras.

Essa regra é deliberada, pois a confirmação concede tempo de um plano pago. Premiar um clique seria pagar por alguém abrir um link.

## Regras aplicadas pelo banco de dados

- **Cada pessoa só pode ser indicada uma vez.** Excluir uma conta e criar outra não produz novas recompensas.
- **Você não pode indicar a si mesmo.** O formulário avisa; o banco de dados é quem aplica a regra.
- **O caminho que concede a recompensa não pode ser chamado pelo navegador.** Se o cliente pudesse chamar *confirme minha indicação*, também poderia chamar *conceda meu pagamento*.

## O que você vê sobre as pessoas convidadas

Quantidade e situação. Nunca o nome.

As pessoas convidadas não aparecem individualmente para quem fez a indicação. Isso é garantido pela permissão das colunas, não apenas pela tela: a consulta disponível nem retorna o identificador.

## Um mês que se soma ao período atual

Se você já tiver um plano pago quando receber a recompensa, o mês é acrescentado ao fim do período. Ele não substitui o tempo pelo qual você pagou.

## Cada número é uma configuração administrativa

Pontos por cadastro confirmado, distintivo, limite, número de meses, plano concedido e teto mensal são configurações da plataforma, não constantes do código. Podem mudar sem uma nova versão; a frase exibida usa os valores atuais.

Os limites exatos só aparecem para contas conectadas. São justamente os números que alguém tentando abusar do programa gostaria de conhecer.

## Situação atual

:::warning[A tela para participantes ainda não está pronta]
A parte do servidor está ativa: registro das indicações, confirmação, concessão, extensão de um plano pago e controles administrativos dos sete números. **Ainda não existe a tela que mostra seu código e sua contagem.** Por enquanto, não há uma página para abrir no aplicativo.
:::

Quando a tela existir, as indicações feitas e as recompensas recebidas entrarão na [exportação](../reference/export-format.md) como **Pessoas que você convidou** e **O que suas indicações renderam**.
