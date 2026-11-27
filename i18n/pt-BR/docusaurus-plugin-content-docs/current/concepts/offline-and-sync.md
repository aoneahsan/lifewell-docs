---
title: Uso offline e sincronização
description: O LifeWell pausa o aplicativo sem conexão, mas pode guardar alguns registros rápidos no dispositivo, se você ativar essa opção.
keywords: [LifeWell offline, sincronização, sem internet, funciona offline]
topics: [concepts, offline]
sidebar_position: 4
---

# Uso offline e sincronização

O LifeWell confere se consegue concluir uma solicitação real. Quando a conexão cai, uma mensagem em tela cheia mantém a página atual parada. Ela desaparece depois que a conexão volta e uma nova solicitação funciona; a página continua sem recarregar.

## O que funciona sem sinal

Se **Continuar trabalhando offline** estiver ativo nas configurações do dispositivo, a mensagem de conexão oferece **Continuar registrando offline**. Isso abre a página atual com uma faixa discreta informando a falta de conexão. Medições compatíveis, mudanças no dia do ciclo e episódios de sintomas podem esperar no dispositivo e ser enviados quando a conexão volta. A fila tem limite e informa quando não pode guardar uma alteração. Ela nunca apresenta uma gravação rejeitada pelo servidor como concluída.

Um lembrete Android já agendado no dispositivo também pode chegar sem conexão.

## O que não funciona

- **Páginas novas e arquivos não carregados.** O service worker não salva páginas nem intercepta solicitações. Abrir uma página ainda não carregada exige conexão.
- **Leituras do servidor e outras gravações.** Mensagens, comunidade, compartilhamentos, fotos, compromissos e acesso à conta precisam do serviço. A fila local aceita apenas os tipos de registro mencionados acima.
- **A primeira abertura sem internet.** O LifeWell não tem uma estrutura offline que permita iniciar o aplicativo de uma aba fechada sem conexão.

## Como um conflito é resolvido

As alterações na fila são enviadas quando uma conexão real volta. Cada operação traz uma identificação que permite repetir a tentativa sem duplicá-la. O acompanhamento de destino ainda aplica sua própria regra:

- Um acompanhamento que **soma** trata a segunda entrada como outra medição.
- Um acompanhamento que usa o **valor mais recente** trata a segunda como correção.

Duas anotações de água continuam sendo duas anotações; um acompanhamento que guarda o valor mais recente processa a correção conforme sua regra. Uma alteração na fila só aparece em outro dispositivo depois de aceita pelo servidor.

## A faixa de conexão

Por padrão, a mensagem bloqueia o aplicativo e oferece uma nova tentativa. Ela só pode ser ignorada pela opção **Continuar registrando offline**, quando essa preferência estiver ativa no dispositivo. A faixa discreta mantém o estado offline visível. Ao reconectar, o LifeWell envia as gravações pendentes e atualiza as leituras abertas, sem recarregar a página.

## O que não foi construído

Não há uma cópia offline em cache do aplicativo inteiro nem sincronização em segundo plano com a aba fechada. A fila de registros rápidos é uma solução limitada para pequenas anotações durante uma interrupção temporária da conexão.
