---
title: Conectar um assistente de IA (MCP)
description: Conecte Claude, ChatGPT, Claude Code ou Cursor aos seus registros pelo servidor MCP do LifeWell. Entenda o consentimento, a confirmação de exclusões e como desconectar.
keywords: [servidor mcp LifeWell, conectar Claude ao LifeWell, conector ChatGPT, mcp Claude Code, mcp Cursor]
topics: [developers, mcp, ai]
sidebar_position: 4
last_update:
  date: 2026-11-19
  author: Equipe LifeWell
---

# Conectar um assistente de IA (MCP)

O servidor MCP do LifeWell permite que um assistente de IA leia e altere seus registros quando você pedir: *“quem da minha família faz aniversário este mês?”*, *“adicione o dentista na quinta-feira às nove e meia”*. Você informa um endereço ao assistente, entra no LifeWell e escolhe na página de consentimento o que ele pode fazer. Funciona com Claude, ChatGPT, Claude Code, Cursor e outros assistentes compatíveis com MCP.

## Qual é o endereço?

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

O mesmo endereço aparece em **Configurações → Outros aplicativos → Conectar um assistente de IA**, com um botão para copiar. Você nunca cola um token no assistente: ele encontra o acesso ao LifeWell por esse endereço e encaminha você para lá.

## Como conectar cada assistente?

Os menus desses aplicativos mudam entre versões. Se uma etapa abaixo não corresponder ao que você vê, procure **Conectores** nas configurações.

### Claude

1. No Claude, abra **Configurações → Conectores** e adicione um conector personalizado.
2. Cole o endereço acima.
3. Entre no LifeWell quando solicitado e autorize a conexão na página de consentimento.

### ChatGPT

1. No ChatGPT, abra **Configurações → Conectores**. Algumas contas precisam ativar o modo de desenvolvedor primeiro.
2. Adicione um conector com o endereço acima.
3. Entre no LifeWell quando solicitado e autorize a conexão na página de consentimento.

### Claude Code

```bash
claude mcp add --transport http lifewell https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

Depois, execute `/mcp` no Claude Code, escolha **lifewell** e entre na conta no navegador que se abrir.

### Cursor

Adicione o LifeWell ao seu `mcp.json`:

```json
{
  "mcpServers": {
    "lifewell": {
      "url": "https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp"
    }
  }
}
```

O Cursor pedirá que você entre na primeira vez que usar a conexão.

## O que a página de consentimento pergunta?

Antes de qualquer acesso do assistente, o LifeWell mostra em `https://lifewell.aoneahsan.com/oauth/consent`:

- **qual aplicativo está pedindo acesso** e o endereço para o qual você voltará;
- **qual conta LifeWell** será acessada, algo importante se você tem mais de uma;
- **o que ele poderá fazer**, em frases agrupadas por leitura, escrita e exclusão, cada grupo com sua própria caixa. Excluir começa desmarcado;
- **Aprovar** e **Negar**, lado a lado.

Se a [autenticação em duas etapas](./two-step-sign-in.md) estiver ativa, a aprovação pede um código. Nenhuma conexão é aprovada automaticamente: toda nova conexão passa por essa página.

O assistente só vê as ferramentas que você permitiu. Se conceder apenas leitura, ele não tem como alterar nada.

## Como funcionam as exclusões?

Um assistente pode **preparar** uma exclusão; só você pode **executá-la**. Ao pedir que remova algo, ele mostra o que seria excluído e oferece um link para o LifeWell. Você confirma dentro do LifeWell em até dez minutos; sem confirmação, nada é excluído. Uma frase escondida numa página ou em um documento colado não pode convencer o assistente a apagar seus dados, pois ele não consegue confirmar seu próprio pedido.

Isso só vale se você marcou uma permissão de exclusão na página de consentimento. Sem ela, o assistente nem pode preparar a operação.

## Como desconectar?

Abra **Configurações → Outros aplicativos → Aplicativos conectados** e escolha **Revogar** na linha correspondente. O acesso termina na próxima solicitação. A lista mostra permissões, data de conexão e último uso. Uma conexão nova aparece assim que você a aprova. O LifeWell também envia um e-mail quando um aplicativo se conecta.

## Por que não está funcionando?

| O que você vê | O que fazer |
|---|---|
| O assistente pede para entrar novamente | A sessão dele expirou. Entre no LifeWell novamente a partir do assistente |
| Informa falta de permissão | Você não concedeu aquela permissão. Desconecte, conecte de novo e marque-a na página de consentimento |
| O LifeWell desapareceu das ferramentas, ou todas as chamadas falham | A conexão foi revogada. Confira **Aplicativos conectados** e reconecte se quiser |
| Uma exclusão não aconteceu | Ela não foi confirmada no LifeWell em até dez minutos. Faça o pedido novamente |
| Você quer saber o que o assistente fez | **Aplicativos conectados** mostra quando cada aplicativo foi usado pela última vez |
