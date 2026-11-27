---
title: Memórias
description: Fotos, álbuns, um livro de recortes e as legendas que dão contexto às lembranças — com os arquivos no seu próprio Google Drive.
keywords: [memórias LifeWell, álbum de fotos, livro de recortes, fotos Google Drive, guardar lembranças]
topics: [domains, memories]
sidebar_position: 3
---

# Memórias

Uma foto sem legenda nem data é apenas um arquivo. Esta área guarda o que ajuda você a entendê-la depois.

## Fotos e lembranças

`/photos` é a biblioteca. Uma lembrança pode ter uma foto ou várias, acompanhadas de data, legenda, lugar e pessoas que aparecem nelas.

Você cria uma em `/memories/create`. `/scrapbook` é mais livre: coisas guardadas porque valia a pena guardá-las, sem formulário para preencher.

## Onde os arquivos ficam de verdade

**No seu próprio Google Drive**, não nos nossos servidores.

O LifeWell pede uma permissão que alcança somente os arquivos criados pelo próprio LifeWell. Ele não pode ver o restante do seu Drive; isso é uma característica da permissão, não apenas uma promessa nossa.

Guardamos uma referência ao arquivo, não o arquivo em si. Na prática:

- Desconectar o Drive mantém legendas, datas e álbuns, mas torna as imagens inacessíveis.
- Excluir um arquivo no Drive remove a imagem. O LifeWell ainda sabe que ela existiu.
- A [exportação](../your-data/export.md) leva referências e legendas, mas não os bytes das imagens, pois os arquivos não estão conosco.

Veja os detalhes em [Onde seus dados ficam](../your-data/where-it-lives.md).

## Álbuns, etiquetas e pessoas

- **Álbuns** agrupam lembranças.
- **Etiquetas** atravessam as categorias: a mesma pode marcar uma nota, uma lembrança ou um item do livro de recortes.
- **Quem aparece na foto** liga a lembrança a alguém em [Pessoas](./people.md).

Essa última ligação tem uma consequência importante: excluir a área Pessoas também remove as marcações de fotos, pois apontariam para pessoas que deixaram de existir nos dados. O aplicativo conta essas linhas e informa a remoção, em vez de deixar que desapareçam de uma área que você não escolheu. Veja [Excluir uma área](../your-data/delete.md#delete-one-area).


`/maps/memories` mostra as conexões entre uma lembrança, sua data, o nome do lugar e os registros relacionados. O lugar é o nome que você informou, não coordenadas deduzidas por LifeWell a partir da foto. A página lê os mesmos registros, sem criar outra cópia geográfica.
