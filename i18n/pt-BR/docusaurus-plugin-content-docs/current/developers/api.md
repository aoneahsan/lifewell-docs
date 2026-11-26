---
title: A API do LifeWell
description: Endereço da API REST, paginação por cursor com 20 linhas por padrão e no máximo 50, e o arquivo OpenAPI que descreve as rotas e os campos.
keywords: [api LifeWell, api rest LifeWell, openapi, paginação api, next_cursor]
tags: [developers, api, reference]
sidebar_position: 3
last_update:
  date: 2026-11-19
  author: Equipe LifeWell
---

# A API do LifeWell

A API REST do LifeWell tem um endereço base. Um arquivo OpenAPI legível por programas descreve todas as rotas, campos e erros. **O arquivo é a referência**, não esta página. Aqui você encontra o endereço, como ler o arquivo e as duas regras que valem para todas as listas.

## Qual é o endereço base?

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1
```

O `v1` final é a versão da API. Toda solicitação precisa de um token ou conexão de aplicativo. Veja [Autenticação](./authentication.md).

```bash
curl -H "Authorization: Bearer $LIFEWELL_TOKEN" \
  https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json
```

## Onde está a referência completa?

| Arquivo | Endereço | Como ler |
|---|---|---|
| OpenAPI 3.1 em JSON | [`/v1/openapi.json`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.json) | Uma ferramenta OpenAPI, como Swagger UI, Redocly, Postman, Insomnia ou gerador de clientes |
| O mesmo conteúdo em Markdown | [`/v1/openapi.md`](https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/api/v1/openapi.md) | Navegador, editor de texto ou assistente de IA ao qual você fornecer o arquivo |

Os dois são gerados da mesma fonte usada pela própria API. Não podem descrever uma rota inexistente nem omitir uma rota disponível. Páginas individuais por recurso serão geradas do mesmo arquivo; até lá, os detalhes estão nele.

## Como ler o arquivo OpenAPI?

Quatro partes respondem à maioria das perguntas:

- **`paths`** — as rotas, seus métodos e o escopo exigido.
- **`components.schemas`** — os campos possíveis nas respostas e seus tipos. Um campo ausente daqui não é enviado.
- **`components.securitySchemes`** — as duas formas de entrar: token de acesso Bearer e OAuth.
- **Respostas de erro** — os valores de `code` que o [formato de erro](./authentication.md#qual-é-o-formato-de-um-erro) pode trazer, por rota.

A API só alcança as partes e os campos dos seus dados listados nesse arquivo. O que está fora dele não pode ser acessado pela API.

## Como funciona a paginação?

Todas as listas são divididas em páginas:

- **20 linhas por página** por padrão e **50 no máximo**.
- Se houver outra página, a resposta traz `next_cursor`. Envie esse valor para receber a próxima.
- Sem `next_cursor`, você chegou à última página.

O cursor é um marcador de posição, não um número de página. Uma linha adicionada enquanto você lê não desloca todas as seguintes. Os nomes dos parâmetros para tamanho e cursor estão no arquivo OpenAPI de cada rota de lista.

## E os limites de uso e erros?

As regras são iguais em todas as rotas. Ambas estão na página [Autenticação](./authentication.md#quais-são-os-limites-de-uso).
