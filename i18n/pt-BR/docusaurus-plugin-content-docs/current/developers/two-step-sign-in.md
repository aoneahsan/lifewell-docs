---
title: Autenticação em duas etapas
description: Ative a autenticação em duas etapas com um aplicativo autenticador, guarde os códigos de recuperação e escolha se o navegador será lembrado por sete dias.
keywords: [autenticação em duas etapas LifeWell, autenticação de dois fatores, aplicativo autenticador, códigos de recuperação]
topics: [developers, security]
sidebar_position: 7
last_update:
  date: 2026-11-19
  author: Equipe LifeWell
---

# Autenticação em duas etapas

Depois de entrar no LifeWell com Google, a autenticação em duas etapas pede um código de seis dígitos de um aplicativo autenticador. Mesmo que alguém acesse sua conta Google, essa pessoa não entra nos seus registros LifeWell sem o seu telefone. O recurso é opcional para você e obrigatório para quem usa o painel administrativo.

## Como ativar?

1. Abra **Configurações → Segurança → Autenticação em duas etapas**.
2. Leia o código QR com um aplicativo autenticador, como Google Authenticator, Microsoft Authenticator, 1Password ou Bitwarden. Qualquer aplicativo que gere códigos de seis dígitos serve. Se não puder ler o QR, digite a chave mostrada abaixo dele.
3. Digite o código exibido pelo aplicativo. A proteção fica ativa quando o LifeWell aceita o código.

## O que são códigos de recuperação?

Ao ativar o recurso, o LifeWell mostra **dez códigos de recuperação**, uma única vez. Cada um permite entrar uma vez se o telefone for perdido ou apagado. Baixe-os ou copie-os para um lugar que não seja o próprio telefone.

- Cada código funciona uma vez.
- Usar um código desativa a autenticação em duas etapas e leva você diretamente à configuração dela no novo telefone.
- **Gerar novos códigos** substitui o conjunto inteiro. Os antigos param de funcionar, e você precisa informar um código atual antes.

## O que faz “Lembrar deste navegador por 7 dias”?

Depois que você digita um código, a tela oferece **Lembrar deste navegador por 7 dias**. A caixa começa desmarcada e só muda se você marcá-la.

- **Desmarcada** — o LifeWell pede outro código no próximo acesso.
- **Marcada** — este navegador, neste dispositivo, dispensa o código pelos próximos sete dias. Outros navegadores e dispositivos ainda o pedem.

Sair da conta encerra essa confiança no navegador. **Configurações → Segurança → Navegadores confiáveis** lista os navegadores lembrados, quando foram adicionados e quando o prazo termina. **Esquecer** remove um; **Esquecer todos** remove todos. Desativar a autenticação em duas etapas também os remove.

Mesmo num navegador lembrado, você precisa digitar um código para revelar um token de acesso ou segredo de webhook, alterar a autenticação em duas etapas ou abrir o painel administrativo.

## Quando mais o código é exigido?

- **Para mostrar novamente um token ou segredo** — veja [Tokens de acesso](./authentication.md#posso-ver-um-token-novamente).
- **Para aprovar um novo aplicativo ou assistente de IA** na página de consentimento — veja [Assistentes de IA](./mcp.md#o-que-a-página-de-consentimento-pergunta).
- **Para desativar a autenticação em duas etapas** — é preciso informar um código atual.

## Administradores precisam usar?

Sim. Ninguém abre o [painel administrativo](../admin.md) do LifeWell sem ter digitado um código na sessão atual. Um navegador lembrado não basta para as telas de administração.
