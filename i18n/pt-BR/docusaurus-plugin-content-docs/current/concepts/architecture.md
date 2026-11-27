---
title: Arquitetura
description: Uma aplicação estática de página única sobre Postgres, com funções de borda apenas onde o navegador não pode guardar um segredo ou privilégio.
keywords: [arquitetura LifeWell, supabase, react, vite, capacitor, funções de borda, spa]
topics: [concepts, architecture]
sidebar_position: 1
---

# Arquitetura

Uma **aplicação estática de página única**. A compilação produz uma pasta de arquivos, e essa pasta é toda a publicação. Não há um servidor Node nessa arquitetura.

## Estrutura

```text
Navegador / WebView do Android
        │
        ├──────────────► Postgres, por PostgREST          (leituras e gravações comuns)
        │                 · segurança em nível de linha
        │                 · permissões por coluna
        │                 · limite fixo de 50 linhas por lista
        │
        └──────────────► Funções de borda em Deno          (o que o navegador não pode guardar)
                          · dois formulários públicos, protegidos contra robôs
                          · resolução de um link de compartilhamento somente de leitura
                          · troca do token do Google Drive
                          · estimativa de IA e sua própria chave de IA
                          · exportações agendadas
                          · verificação de compras Play
                          · ações administrativas sobre contas
```

## A regra que define o caminho

> O navegador acessa diretamente o banco para dados comuns. Uma função de borda só é usada quando a operação exige algo que o navegador nunca deve guardar: um segredo, privilégio elevado ou confiança em uma informação fornecida pela pessoa.

Todo o restante é uma consulta direta, executada como você, sob as regras explicadas em [Privacidade e segurança](./privacy-and-security.md).

## Por que a proteção fica no banco

Se a autorização existisse apenas no código do aplicativo, cada ponto de acesso precisaria se lembrar de aplicá-la. Com a segurança em nível de linha, o *banco de dados* recusa o acesso. Uma consulta incorreta não devolve linhas de outra pessoa.

Por isso, também não há ORM no aplicativo em execução. O esquema é escrito em TypeScript e convertido em migrações antes da publicação. O aplicativo acessa os dados pela biblioteca cliente, como a pessoa autenticada, com as regras aplicadas.

## Tecnologias usadas

| Camada | Escolha |
|---|---|
| Interface | React 19 |
| Compilação | Vite 8, sem mapas de código na versão publicada |
| Rotas | Rotas baseadas em arquivos, com parâmetros de busca tipados |
| Dados do servidor | TanStack Query |
| Estado local da interface | Zustand; React context não guarda estado do aplicativo |
| Formulários | React Hook Form e Zod; os mesmos esquemas Zod validam as funções de borda |
| Acessibilidade | React Aria Components cuida do DOM, de ARIA e do teclado nos controles |
| Estilo | Tailwind v4, configurado em CSS |
| Gráficos | D3 |
| Texto formatado | Tiptap; o produto não usa campos de texto simples nativos |
| Armazenamento local | Uma biblioteca única tem acesso ao armazenamento do navegador |
| Android | Capacitor 8 |

## Sem Firebase

A versão 2.x usava Firebase. Um dos problemas que motivaram a reconstrução foi o esgotamento da cota gratuita de leituras, que deixou o aplicativo indisponível por um dia.

O modelo de compartilhamento foi outro motivo. Compartilhar parte dos dados com uma pessoa identificada é uma questão de linhas do banco. Postgres resolve isso dentro do banco; o antigo armazenamento de documentos dependia de um arquivo de regras que precisava acompanhar cada consulta.

## Estado no endereço

Janelas, abas, filtros, ordenação, páginas e termos de busca ficam no endereço, em vez de apenas no estado do componente. Atualizar a página não perde seu lugar, e um link aponta exatamente para o que você está vendo.
