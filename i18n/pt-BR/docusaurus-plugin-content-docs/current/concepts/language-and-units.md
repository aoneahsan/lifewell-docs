---
title: Idioma e unidades
description: O LifeWell oferece dez idiomas no aplicativo, na documentação e na extensão. A unidade de medida é uma escolha separada do idioma.
keywords: [idioma LifeWell, tradução, i18n, unidades métricas e imperiais, en-GB]
tags: [concepts, i18n, accessibility]
sidebar_position: 6
---

# Idioma e unidades

## Escolha um idioma

O LifeWell oferece inglês, chinês simplificado, hindi, espanhol, árabe, francês, português do Brasil, russo, japonês e urdu. Escolha pelo cabeçalho. Árabe e urdu também mudam a direção da página para que a leitura aconteça naturalmente da direita para a esquerda.

Sua escolha acompanha a conta quando você entra em outro dispositivo ou conecta a extensão. Ela não altera as unidades escolhidas para seus registros. A documentação e as páginas públicas têm endereços próprios para cada idioma; você pode enviar a alguém o link direto para a versão que essa pessoa lê.

Se um dia você olhar os arquivos de tradução, há dois detalhes:

- **As chaves descrevem o significado, não o texto em inglês.** Reescrever uma frase não quebra as referências.
- **As frases não são montadas com trechos traduzidos separadamente.** Cada chave contém uma frase inteira, com valores inseridos nela, porque a ordem das palavras muda de idioma para idioma.

## Unidade de medida é uma preferência, não um idioma

Usar o sistema métrico ou o imperial é **uma escolha sua**, no perfil, separada do idioma. Alguém no Reino Unido pode preferir medir o peso em *stone*; outra pessoa pode preferir quilogramas. O idioma da interface não decide isso.

Por trás da interface, **o registro usa uma unidade canônica e converte os valores na leitura**. Isso significa que:

- Mudar a preferência exibe novamente o histórico, sem reescrevê-lo.
- Cada entrada mantém a unidade com que foi registrada; a mudança não reinterpreta silenciosamente anos de medições.

## Datas, números e início da semana

Datas e números seguem o idioma escolhido, com os recursos de internacionalização do dispositivo. Assim, a ordem de uma data pode mudar de um idioma para outro. O primeiro dia da semana é uma configuração separada do dispositivo; mudar o idioma não o desloca sem avisar.

O dia ao qual um registro pertence vem **do seu dispositivo**, não do servidor. Veja [O modelo de dados](./data-model.md#a-data-vem-do-seu-dispositivo).

## Acessibilidade

A interface usa React Aria Components, que cuida do teclado e da integração com leitores de tela nos controles interativos, em vez de deixar cada página implementar isso por conta própria.

Todas as telas seguem, no mínimo, contraste AA, foco visível, operação completa pelo teclado, áreas de toque de pelo menos 44 pixels, layout de 320 a 1920 pixels de largura e uma [opção de movimento reduzido](./appearance.md#movimento) que tira as animações sem retirar informação.

Os gráficos também têm uma tabela legível com os mesmos números. Ninguém depende apenas de um gráfico para consultar um valor.
