---
title: Contribua com a documentação
description: Como corrigir uma página, o que pertence a esta documentação e a regra principal — ela só pode descrever o que o produto realmente faz.
keywords: [contribuir com a documentação LifeWell, editar documentação, repositório de documentação]
topics: [about]
sidebar_position: 3
---

# Contribua com a documentação

Esta documentação está em um [repositório público](https://github.com/aoneahsan/lifewell-docs). O código do aplicativo não está.

## Corrigir uma página

No rodapé de cada página há um link **Editar esta página**. Ele abre o arquivo no GitHub, onde você pode propor uma mudança sem clonar o repositório.

Correções pequenas — um endereço errado, um número de versão desatualizado ou uma frase que deixou de ser verdadeira — são contribuições valiosas e não precisam de uma conversa prévia.

## A regra principal

**Uma página só pode descrever o que o produto realmente faz.**

Parece óbvio, mas foi por isso que a documentação foi reescrita do zero para a versão 3.0.0. A versão anterior descrevia um aplicativo iOS que já tinha sido removido, uma extensão que ainda não tinha sido lançada, um banco de dados que o aplicativo não usava mais e um conjunto de ferramentas de análise diferente do real. Tudo havia sido escrito de boa-fé; nada daquilo era verdade.

Portanto:

- Se algo não foi construído, a página diz **não foi construído**, e não *em breve*.
- Se foi construído, mas não está ativo, a página diz exatamente isso.
- Se um número pode ser conferido, ele vem do código, não da memória.
- Uma limitação aparece junto da afirmação que limita, no mesmo parágrafo. Uma ressalva três seções adiante passa despercebida.

## Tom de voz

Fale diretamente com a pessoa que lê. Na versão em inglês, escreva as palavras completas, sem contrações e sem exclamações, e use inglês britânico. Escreva os títulos em estilo de frase.

Uma frase declarativa curta, seguida de outra mais longa que dá contexto ou uma opção ao leitor: muitas destas páginas seguem esse ritmo. Mantê-lo ajuda mais do que copiar um manual de estilo.

Evite promessas grandiosas e qualquer linguagem que trate uma lacuna nos registros de alguém como um fracasso.

## Executar localmente

```bash
yarn install
yarn build
yarn serve
```

A compilação também confere os links. Um link interno quebrado causa falha antes da publicação.

## O que não pertence aqui

- Dados que possam identificar alguém, inclusive uma conta real, um endereço de e-mail real ou uma captura dos registros de uma pessoa.
- Credenciais de qualquer tipo. Este repositório é público.
- Planos internos, roteiros de lançamento ou filas de tarefas.
