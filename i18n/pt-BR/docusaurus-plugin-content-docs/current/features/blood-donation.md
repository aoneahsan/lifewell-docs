---
title: Doação de sangue
description: Um diretório público de doadores, pedidos dirigidos a pessoas compatíveis e um contato revelado uma vez a uma pessoa, que pode ser retirado.
keywords: [diretório de doadores de sangue, doação de sangue, pedido de sangue, doadores lifewell]
tags: [features, people]
sidebar_position: 6
---

# Doação de sangue

## O diretório

[`/blood-donors`](https://lifewell.aoneahsan.com/blood-donors) é público. Não é preciso ter uma conta para consultá-lo.

Uma ficha mostra o grupo sanguíneo e uma região aproximada. **Ela não mostra o número de telefone.** Essa proteção faz parte do projeto, não é um recurso que falta acrescentar.

## Cadastrar-se como doador

`/profile/blood-donor` cria sua ficha. Ela não inclui seu histórico de saúde — apenas grupo sanguíneo, região e disponibilidade atual.

## Pedidos

Os pedidos que você fez ficam em `/dashboard/blood-requests`. Um pedido chega a doadores compatíveis; não é enviado a todos.

## Revelar o contato

Quando uma pessoa doadora decide responder, ela revela seus dados de contato **a uma pessoa, uma única vez**.

Isso tem duas consequências concretas:

- **A revelação pode ser retirada.** Se a pessoa doadora a retirar, o contato também desaparece da tela de quem fez o pedido.
- **O contato não entra na exportação.** Um dado em um arquivo baixado não seria visto uma única vez nem poderia ser retirado. A pessoa que fez o pedido já viu o contato no aplicativo; torná-lo permanente não foi uma escolha da pessoa doadora.

Sua própria ficha e os pedidos enviados entram na [exportação](../reference/export-format.md). O número de outra pessoa, não.

## O que isso não faz

O LifeWell não organiza doações, verifica elegibilidade nem entra em contato com serviços de sangue. É um diretório e uma forma de fazer um pedido. O restante acontece entre as duas pessoas e o hospital.
