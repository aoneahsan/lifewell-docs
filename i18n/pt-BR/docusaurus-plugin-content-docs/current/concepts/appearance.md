---
title: Aparência
description: Um ícone e um painel para tema, cores, cantos, densidade, tamanho do texto, fonte, superfícies e movimento. As escolhas são aplicadas antes de a página aparecer.
keywords: [tema LifeWell, modo escuro, opções de aparência, tamanho do texto, movimento reduzido]
tags: [concepts, appearance]
sidebar_position: 5
---

# Aparência

Um ícone na barra superior abre um único painel com todas as opções de aparência. Ele está disponível em qualquer tela, com ou sem uma sessão iniciada.

## As oito opções

| Opção | O que muda |
|---|---|
| Tema | Claro, escuro ou acompanhar o sistema |
| Cores | A cor de destaque e os tons neutros ao redor |
| Cantos | O arredondamento dos elementos |
| Densidade | O espaço ocupado por cada linha |
| Tamanho do texto | Toda a escala tipográfica, não só o corpo do texto |
| Fonte | A família tipográfica do aplicativo |
| Superfícies | A aparência dos painéis sobre a página |
| Movimento | Animações completas ou reduzidas |

## Antes de a página aparecer

As opções são lidas e aplicadas à página **antes de qualquer conteúdo ser exibido**. Assim, o aplicativo não pisca com o tema errado enquanto inicia.

Por isso, todas ficam guardadas em um lugar e são aplicadas a partir de uma tabela única. Uma cor ou um arredondamento fixo dentro de um componente escaparia desse painel; o controle central evita justamente esse problema.

## Movimento

**O movimento nunca é a única forma de comunicar algo.** Reduzir animações não retira informações.

A opção guarda o valor final, e não a palavra *sistema*. Isso importa porque uma consulta direta a `prefers-reduced-motion` prevaleceria sobre qualquer escolha. Quem usa movimento reduzido no sistema não conseguiria optar por animações completas no aplicativo. Ao resolver a preferência uma vez, *completo* realmente significa completo.

## Onde as escolhas ficam guardadas

Suas opções ficam neste dispositivo. Se você ativar **Levar minha aparência para outros dispositivos** no mesmo painel, elas também serão salvas na sua conta e poderão acompanhar você em outro dispositivo conectado. Desative essa opção se quiser aparências diferentes no notebook e no celular; cada dispositivo mantém sua própria escolha.

## Contraste e áreas de toque

Todas as telas seguem, no mínimo, contraste AA, áreas de toque de 44 pixels, foco visível, operação completa pelo teclado e um layout que funciona de 320 a 1920 pixels de largura.
