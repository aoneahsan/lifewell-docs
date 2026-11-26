---
slug: documentation-rewritten-for-3-0-0
title: A documentação estava errada. Por isso, foi reescrita
authors: [ahsan]
tags: [announcement, lifewell, docs, release]
description: O LifeWell 3.0.0 foi reconstruído sobre uma nova estrutura de dados, enquanto a documentação antiga descrevia um produto que já não existia. Todas as páginas foram reescritas com base no código.
---

A versão anterior deste site descrevia um aplicativo iOS que havia sido removido, uma extensão de navegador que não era distribuída naquele momento, um banco de dados que o aplicativo não usava mais e um conjunto de ferramentas de análise quase oposto ao real.

Ninguém escreveu aquilo para enganar. O produto mudou e ninguém voltou para conferir o texto.

{/* truncate */}

## O que estava errado

Três afirmações merecem ser citadas. Alguém poderia lê-las e acreditar nelas.

**`/feed` era descrito como um feed social.** É a página pública com as publicações recentes deste blog. O LifeWell não tem um feed social e nunca teve.

**A documentação dizia que o Firebase Analytics havia sido proibido e substituído.** O Google Analytics 4 *é* a propriedade de análise do Firebase — a mesma propriedade, acessada de duas maneiras — e funciona junto com Amplitude, Clarity e Sentry. Quem queria saber o que o aplicativo registrava recebia a resposta contrária à realidade.

**As atualizações remotas eram descritas como “ainda não integradas”.** Isso era verdade quando a versão 3.0.0 foi reconstruída. Agora o LifeWell integra pacotes assinados do Native Update em instalações Android compatíveis. A página atual do [Android](/platforms/android#atualizações-pelo-ar) explica o que o aplicativo verifica e o que ainda exige uma versão nativa.

Além disso, 65 páginas descreviam um modelo de documentos que foi substituído pelo Postgres na reconstrução. Outras 35 mencionavam uma versão iOS removida em 16 de julho de 2026. Uma seção inteira explicava como instalar e usar uma extensão que ainda não existia naquela época.

## O que foi feito

Todas as páginas foram removidas. As novas foram escritas com base no código: o formato de exportação veio do mesmo registro de tabelas que o exportador usa; os limites dos planos, do registro de planos; a versão mínima do Android, do arquivo de compilação; e as capacidades administrativas, da interface administrativa documentada.

Quando algo está parcialmente pronto, a página indica qual parte. Sete casos desse tipo estão reunidos em [O que mudou na versão 3.0.0](/about/changelog).

Os números que podiam ser conferidos foram conferidos. A documentação antiga dizia que o Android mínimo era 7.0; o arquivo de compilação define a API 28, que corresponde ao Android 9.

## A regra deste site

**Uma página só pode descrever o que o produto realmente faz.**

Não o que está nos planos, nem o que ficaria melhor no texto. Se algo não foi construído, a página diz isso em vez de prometer que virá. Se um controle faz menos do que parece, a explicação fica ao lado dele — não seis seções adiante.

Essa regra exige revisão constante. O problema costuma ser uma afirmação que era verdadeira quando foi escrita e deixou de ser depois. Por isso, as páginas que descrevem comportamento apontam para a parte do produto que o implementa. A referência do formato de exportação acompanha o registro que o exportador lê.

## Para onde foram os endereços antigos

Os endereços em `/docs/**` agora redirecionam. A documentação passou para a raiz do site. Assim, `/reference/export-format` — o endereço aberto pela própria tela de exportação do aplicativo — funciona.

Uma página cujo assunto deixou de existir redireciona para outra que explica a situação atual. Os tutoriais antigos da extensão levam a [Extensão de navegador](/platforms/browser-extension), que descreve o complemento para Chrome e Firefox e sua situação de publicação.
As páginas antigas de iOS levam a [iOS](/platforms/ios), com a data em que o aplicativo foi removido e a condição para que ele volte.
