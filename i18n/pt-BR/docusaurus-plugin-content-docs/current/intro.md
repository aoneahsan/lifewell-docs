---
id: intro
title: LifeWell
description: O LifeWell reúne as pessoas e os momentos da sua vida — família, amigos, o que você sabe sobre eles, suas memórias e seus planos, com o bem-estar ao redor. Na web e no Android, sob seu controle.
keywords: [lifewell, aplicativo para a vida, árvore genealógica, pessoas, memórias, família e amigos, aplicativo android]
topics: [overview, getting-started]
slug: /intro
sidebar_position: 1
---

# LifeWell

**Guarde as pessoas e os momentos da sua vida em um só lugar — e tudo o que vem com eles.**

O LifeWell reúne as pessoas e os momentos da sua vida. Você começa por si, adiciona quem importa, guarda o que sabe sobre essas pessoas e os momentos que vivem juntos. Tudo o mais que o LifeWell guarda serve para ajudar sua vida a correr bem.

O LifeWell não é um rastreador de saúde. Saúde é uma das áreas ao redor das pessoas da sua vida, não o centro do aplicativo.

## Sete áreas, com você no centro

| Área | O que você encontra |
|---|---|
| [Pessoas](./domains/people.md) | Família e trabalho, árvore genealógica, conexões, grupos e conversas |
| [Memórias](./domains/memories.md) | Fotos, álbuns, um livro de recortes e legendas que dão contexto às lembranças |
| [Dia a dia](./domains/everyday.md) | Calendário, notas, lugares salvos, lembretes e lista de compras |
| [Compartilhamento](./domains/sharing.md) | O que você permitiu que outras pessoas lessem: links, compartilhamento com parceiro e respostas recebidas |
| [Saúde](./domains/health.md) | Sinais vitais, medicamentos, alimentação, movimento, sono, condições e exames |
| [Mente](./domains/mind.md) | Diário, sessões guiadas, humor, gratidão e respiração |
| [Fases da vida](./domains/stages.md) | Ciclo, fertilidade, gravidez, menopausa e os primeiros anos de uma criança |

**Você** não é uma das sete áreas. É a sua conta: perfil, plano, configurações e controles de tudo o que aparece acima.

Seis das sete áreas podem ser [desativadas](./domains/overview.md#desativar-uma-área). Desativar significa tirar do menu: seus dados continuam guardados, e você ainda pode abrir qualquer página por um link direto. Compartilhamento não tem esse controle, pois tudo o que você permitiu que outras pessoas lessem precisa continuar visível para você.

## Onde o LifeWell funciona

| | |
|---|---|
| Web | Em qualquer navegador atual, em [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) |
| Android | A mesma aplicação, empacotada com Capacitor. Veja [Android](./platforms/android.md) |
| iOS | [Removido em 16 de julho de 2026](./platforms/ios.md). Não há uma conta de desenvolvedor Apple para o aplicativo |
| Extensão do navegador | [Criada para Chrome e Firefox](./platforms/browser-extension.md), mas ainda fora das lojas |

## O que acontece com seus dados

- **Alguns registros rápidos podem esperar no dispositivo.** Se você ativar os registros offline, medições compatíveis, mudanças no dia do ciclo e episódios de sintomas são enviados quando a conexão volta. As demais páginas param enquanto não há internet.
- **Fotos e arquivos vão para seu próprio Google Drive**, com uma permissão que alcança somente os arquivos criados pelo LifeWell. Veja [Onde seus dados ficam](./your-data/where-it-lives.md).
- **Você pode exportar um intervalo de datas escolhido** no aplicativo: dados em JSON ou CSV, ou um resumo em PDF. Cada tabela tem o limite de 5.000 linhas por exportação. O formato está documentado [campo por campo](./reference/export-format.md).
- **Você pode excluir a conta ativa ou uma área dela**, e o aplicativo informa quais linhas foram removidas. Backups manuais criptografados podem guardar uma cópia anterior até serem substituídos, conforme explica a página de privacidade.

## Versão

Esta documentação descreve o aplicativo **LifeWell 3.x**, reconstruído sobre um novo serviço de dados a partir da versão 2.x lançada anteriormente.

:::warning[A atualização da 2.x para a 3.0.0 zerou os registros]
O serviço de dados foi substituído sem um caminho de migração. Atualizar diretamente da 2.x para a 3.0.0 não levou os registros antigos. Essa decisão foi tomada quando o aplicativo ainda não tinha usuários reais. Ela continua documentada aqui porque, para quem abre o aplicativo, uma redefinição intencional pode parecer uma falha grave.
:::

## Por onde seguir

- Instale pela [web](./getting-started/install-web.md) ou pelo [Android](./getting-started/install-android.md).
- Depois, veja [o primeiro acesso](./getting-started/first-run.md), [um passeio rápido](./getting-started/tour.md) e [o passeio pela página e o guia](./getting-started/tours-and-walkthrough.md).
- Para cuidar dos seus dados: [exportação](./your-data/export.md), [exclusão](./your-data/delete.md) e [formato do arquivo exportado](./reference/export-format.md).
- Para conectar o LifeWell a um calendário, um programa ou um assistente de IA: [Desenvolvedores](./developers/index.md).
