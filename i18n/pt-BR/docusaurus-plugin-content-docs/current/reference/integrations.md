---
title: Serviços de terceiros
description: Todos os serviços externos com que o LifeWell se comunica, sua finalidade, os dados recebidos e o que acontece quando uma chave não está configurada.
keywords: [integrações LifeWell, serviços de terceiros, Google Drive, Sentry, Amplitude, Clarity, OneSignal, Turnstile]
tags: [reference, privacy]
sidebar_position: 3
---

# Serviços de terceiros

Estes são os serviços externos com que o LifeWell se comunica. **Cada um fica desligado quando a chave correspondente não está configurada**: o aplicativo ignora o serviço em vez de falhar durante o uso.

## Seus dados

| Serviço | Para que serve | O que recebe |
|---|---|---|
| **Supabase** | Banco de dados e acesso à conta | Tudo o que você registra; é onde os dados ficam |
| **Conta Google** | Entrar no aplicativo | Seu endereço de e-mail e nome, enviados pelo Google |
| **Google Drive** | Suas fotos e arquivos | Os próprios arquivos, no **seu** Drive, com permissão restrita aos arquivos criados pelo LifeWell |
| **Google Maps** | Os mapas exibidos em [Mapas](../features/maps.md) | A região mostrada no mapa |

O acesso usa apenas a conta Google; **nunca vemos nem guardamos uma senha sua**.

## Enviar avisos a você

| Serviço | Para que serve | Estado |
|---|---|---|
| **OneSignal** | Notificações push opcionais | Se você ativar o push nas Configurações e a inscrição do aparelho ficar ativa, o serviço receberá essa inscrição. A equipe LifeWell pode enviar uma mensagem geral; o aplicativo não envia notificações automaticamente por eventos da conta. |
| **Google Play Billing** | Assinaturas no Android | Construído e testado com respostas registradas, mas **desligado**. Veja [Planos](../plans.md#no-android) |

O aplicativo só **recebe** notificações push: inscreve o dispositivo e encaminha o toque. Dar permissão não significa que a inscrição esteja ativa. Os lembretes de eventos e bem-estar compatíveis com Android usam a agenda de notificações do aparelho. Os avisos de medicamentos aparecem na caixa de entrada do LifeWell quando você abre a lista de medicamentos; não dependa deles sem conexão.

## Como sabemos se o produto funciona

| Serviço | Para que serve | O que recebe |
|---|---|---|
| **Google Analytics 4** | Saber quais páginas são usadas | O caminho da página e o nome do evento |
| **Amplitude** | Saber quais ações são realizadas | Nome do evento e propriedades permitidas |
| **Microsoft Clarity** | Reproduzir sessões para encontrar falhas na interface | Uma gravação da interface, com elementos sensíveis marcados para ocultação |
| **Sentry** | Registrar erros | Falha, tela e versão, com identificadores removidos |

:::note[Os quatro serviços funcionam; Firebase Analytics não foi proibido]
Uma versão anterior desta documentação dizia que Firebase Analytics era proibido e tinha sido substituído por Sentry e Amplitude. Ambas as afirmações estavam erradas. Google Analytics 4 **é** a propriedade de análise do Firebase — uma propriedade, dois SDKs — e funciona **junto com** Amplitude, Clarity e Sentry. Os quatro formam o conjunto usado.
:::

**Nenhum desses serviços recebe o conteúdo dos seus registros.** Uma propriedade de análise só é aceita se estiver declarada no catálogo de eventos e o valor passar pela conferência de tipo. Assim, frases, e-mails e medições não passam. Os filtros são testados com identificadores reais e falham se algum deles sobreviver.

## Proteção dos formulários

| Serviço | Para que serve |
|---|---|
| **Cloudflare Turnstile** | Conferência contra robôs nos formulários de contato e participação |

Turnstile é uma verificação, não um rastreador, e aparece apenas nesses dois formulários públicos.

## Arquivos e e-mails enviados

O armazenamento de arquivos e os poucos e-mails enviados pelo LifeWell — boas-vindas e confirmação de um pedido de exclusão de conta — passam por um serviço privado operado pelo desenvolvedor, não por uma plataforma de e-mail de terceiros.

Não há e-mail entre usuários, boletim informativo nem envio de marketing. Seu nome e endereço são usados somente para entregar a mensagem.

## Atualizações pelo ar

O aplicativo Android integra pacotes assinados do Native Update. Uma instalação compatível confere e aplica esses pacotes; o Google Play entrega as versões nativas. A chave de verificação faz parte do aplicativo nativo. Uma instalação sem ela não pode receber esses pacotes. Veja [Android](../platforms/android.md#atualizações-pelo-ar).

## O que fica de fora de propósito

- **Nenhuma rede de publicidade** nem código de anúncios de terceiros.
- **Nenhuma corretora de dados nem venda de informações.**
- **Nenhum serviço de dados do Firebase.** A versão 2.x usava o banco de documentos do Google; a 3.0.0 não usa. Uma das falhas corrigidas pela reconstrução foi o esgotamento da cota de leitura, que deixou a versão 2.x indisponível por um dia.
- **Nenhum calendário externo conectado.** O aplicativo não lê nem grava eventos no Google Calendar ou em outro serviço.
