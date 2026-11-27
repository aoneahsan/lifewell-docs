---
title: Pesquisa
description: Uma pesquisa para todo o seu registro. A consulta no servidor está pronta, mas a página ainda não; o aplicativo informa isso em vez de mostrar uma lista vazia.
keywords: [pesquisa lifewell, pesquisar registros]
topics: [features]
sidebar_position: 3
---

# Pesquisa

`/search` pesquisa seu próprio registro — notas, lembranças, pessoas, eventos, medicamentos e outros itens — em um campo na barra superior.

:::warning[A página ainda não está pronta]
A pesquisa em si existe: a consulta que percorre seu registro foi escrita e publicada. A página que a abre ainda não foi construída. O aplicativo informa isso em vez de exibir uma lista vazia, que daria a entender que *nenhum dos seus registros corresponde à busca*.
:::

## O que ela poderá pesquisar

- **Só o seu registro.** A pesquisa é executada com sua identidade e as mesmas regras por linha das outras leituras. Ela não acessa registros de outra conta.
- **Seu registro, não as páginas públicas.** Blog, páginas de recursos e ferramentas são páginas públicas encontradas por mecanismos de busca, não por esse campo.
- **Fora do índice de busca.** `/search` tem `noindex` e fica fora do mapa do site. Uma página de pesquisa indexada convidaria tentativas de exploração.
