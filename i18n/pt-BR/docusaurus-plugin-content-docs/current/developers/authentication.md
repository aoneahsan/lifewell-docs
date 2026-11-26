---
title: Tokens de acesso e autenticação
description: Como um programa ou aplicativo comprova o acesso aos seus dados LifeWell — tokens com permissões de leitura, escrita e exclusão, regra de dez minutos, OAuth, limites e erros.
keywords: [token de acesso LifeWell, autenticação api LifeWell, oauth LifeWell, escopos api, limites de uso]
tags: [developers, api, security]
sidebar_position: 2
last_update:
  date: 2026-11-19
  author: Equipe LifeWell
---

# Tokens de acesso e autenticação

Um token de acesso LifeWell é um segredo longo que você cria em **Configurações → Outros aplicativos** e envia com cada solicitação à API como `Authorization: Bearer <token>`. Ele tem as permissões e a data de validade que você escolheu, e pode ser revogado com um toque. Um aplicativo que se conecta em seu nome usa OAuth; você não precisa entregar um token a ele.

## Como criar um token?

1. Abra **Configurações → Outros aplicativos → Tokens de acesso** e escolha **Novo token**.
2. Dê a ele um nome que você reconhecerá depois. *Programa do calendário da cozinha* é mais claro que *token 1*.
3. Escolha as permissões e o vencimento.
4. O LifeWell mostra o token uma vez, com um botão para copiar. Guarde-o em lugar seguro antes de fechar o painel.

Depois, a lista mostra nome, permissões, primeiros caracteres, data de criação e último uso de cada token. Ela nunca exibe o token inteiro. O LifeWell envia um e-mail sempre que um token é criado, para que você perceba um que não reconhece.

## Posso ver um token novamente?

Sim, nos **dez minutos após entrar na conta**. Escolha **Revelar** na linha do token:

- **Você entrou há menos de dez minutos** — o token é exibido.
- **Você entrou há mais tempo** — o LifeWell avisa e oferece **Entrar novamente**, que leva você de volta à mesma linha.
- **A autenticação em duas etapas está ativa** — você também digita um código do aplicativo autenticador, mesmo dentro dos dez minutos.

Permanecer conectado por dias é prático; também é o que se vê num notebook roubado. Entrar de novo ajuda a comprovar que é você quem pede o segredo. Cada conta pode revelar tokens até dez vezes por hora, e cada revelação fica registrada. Um token nunca é enviado por e-mail.

## O que significam as permissões?

Cada parte dos seus dados pode ter até três escopos:

| Escopo | Permite ao token |
|---|---|
| `<resource>:read` | Ler essa parte dos seus dados |
| `<resource>:write` | Adicionar e alterar dados nessa parte |
| `<resource>:delete` | Excluir dados nessa parte |

`account:read` permite ler os detalhes da sua própria conta. Os recursos disponíveis e os nomes exatos dos escopos estão no [arquivo OpenAPI](./api.md#onde-está-a-referência-completa).

**Escrita não concede exclusão.** Os escopos de exclusão aparecem separados e desmarcados até que você escolha um. As permissões de um token não aumentam depois de criá-lo: se precisar de mais acesso, crie outro e revogue o anterior. Nenhum token pode ter uma permissão administrativa.

## Por quanto tempo o token funciona?

Você escolhe **30, 90 ou 365 dias**. O LifeWell envia um e-mail sete dias antes do vencimento. Depois da data escolhida, o token para de funcionar e as solicitações respondem `401`.

## Como substituir ou revogar?

- **Trocar** cria um novo token. O antigo continua funcionando por 24 horas, para que você possa substituí-lo no seu programa, e então é revogado. Até lá, ambos aparecem na lista.
- **Revogar** interrompe o acesso imediatamente. A próxima solicitação com o token responde `401`. Toque duas vezes para confirmar; não há uma janela de confirmação.

Excluir sua conta LifeWell revoga todos os tokens, aplicativos conectados, webhooks e feeds.

## Como um aplicativo se conecta sem token?

Com OAuth 2.1, o mesmo acesso usado por assistentes de IA. O aplicativo encaminha você para `https://lifewell.aoneahsan.com/oauth/consent`, onde aparecem:

- o nome do aplicativo e o endereço para o qual você voltará;
- a conta LifeWell que será conectada;
- as permissões solicitadas em frases simples, agrupadas em leitura, escrita e exclusão, cada grupo com sua caixa — exclusão começa desmarcada;
- **Aprovar** e **Negar**, lado a lado.

Com autenticação em duas etapas ativa, aprovar pede um código. O aplicativo aparece em **Configurações → Outros aplicativos → Aplicativos conectados**, onde você pode renomeá-lo ou revogá-lo. A revogação interrompe o acesso na próxima solicitação, sem esperar o vencimento da sessão. Veja também [Assistentes de IA (MCP)](./mcp.md#o-que-a-página-de-consentimento-pergunta).

## Quais são os limites de uso?

Cada token e aplicativo conectado pode enviar 120 solicitações por minuto. Além disso, a conta inteira tem um limite diário conforme o plano: 5.000 no Gratuito, 50.000 no Pro e no Família. Todos os seus tokens e aplicativos dividem esse total; criar mais tokens não aumenta o limite. Configurações → Outros aplicativos mostra os limites ao lado da contagem de hoje. Toda resposta traz:

| Cabeçalho | Significado |
|---|---|
| `RateLimit-Limit` | Solicitações permitidas no intervalo atual |
| `RateLimit-Remaining` | Solicitações restantes |
| `RateLimit-Reset` | Segundos até o início do próximo intervalo |

Ao ultrapassar o limite, a API responde `429` com o cabeçalho `Retry-After`. Espere esse número de segundos antes de tentar novamente.

Muitas solicitações no mesmo instante também podem receber `546` da plataforma de hospedagem antes de chegar ao LifeWell. Envie uma de cada vez ou poucas em paralelo; tente um `546` novamente após um segundo.

## Qual é o formato de um erro?

Todos os erros, em todas as rotas, têm a mesma estrutura:

```json
{
  "error": {
    "code": "reauth_required",
    "message": "Sign in again to see this token.",
    "details": { "max_age_seconds": 600 },
    "correlation_id": "…"
  }
}
```

Use `code` no seu programa; `message` é para pessoas e pode mudar de redação. Se entrar em contato sobre uma falha, informe `correlation_id`: ele identifica a solicitação correspondente, sem expor seus dados.

| Estado | Em geral significa |
|---|---|
| `401` | Token ausente, incorreto, revogado ou vencido |
| `403` | Falta uma permissão exigida (`details` informa qual), ou é preciso entrar novamente |
| `404` | O ID não existe nos seus dados, inclusive se pertence a outra pessoa |
| `429` | Limite de uso atingido; veja `Retry-After` |

A lista completa dos códigos está no [arquivo OpenAPI](./api.md#onde-está-a-referência-completa).
