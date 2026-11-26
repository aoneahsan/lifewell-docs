---
title: Android
description: LifeWell no Android — versão mínima Android 9, permissões, lembretes locais, atualizações assinadas e recursos que aguardam lançamento na loja.
keywords: [LifeWell Android, permissões Android, acesso a contatos, minsdk 28, Capacitor Android, Google Play]
tags: [platforms, android]
sidebar_position: 2
---

# Android

É o mesmo aplicativo da web, dentro de um contêiner Capacitor. Mesma conta, mesmos dados.

| | |
|---|---|
| Identificador do aplicativo | `com.aoneahsan.lifewell` — permanente |
| Versão mínima | **Android 9 (API 28)** |
| Versão atual do código | **3.30.0**; consulte o Google Play para saber qual versão está disponível para seu dispositivo |
| Distribuição | [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell) |

:::note[A versão mínima é Android 9, não Android 7]
Uma versão anterior desta documentação dizia Android 7.0. Estava errado: a versão mínima do SDK na compilação é 28, correspondente ao Android 9. Dispositivos anteriores não instalam o aplicativo, e o Play simplesmente oculta a página, sem explicar o motivo.
:::

## Permissões

O aplicativo explica as permissões declaradas em [`/permissions`](https://lifewell.aoneahsan.com/permissions). As cinco primeiras são solicitadas quando você usa o recurso e podem ser recusadas — as duas de contatos aparecem numa única solicitação. As demais são concedidas pelo Android na instalação.

| Permissão | Por quê |
|---|---|
| Câmera | Tirar uma foto diretamente para suas memórias ou registros. Pedida na primeira vez que você toca em *Tirar foto*. Se recusar, ainda pode escolher uma imagem do dispositivo |
| Microfone | Gravar no Speak it. Solicitado ao tocar em gravar; se recusar, você ainda pode digitar. O LifeWell não escuta em segundo plano |
| Localização aproximada | Ordenar profissionais pela distância enquanto a página deles está aberta. Pedida ao tocar em *Usar minha localização* e nunca armazenada |
| Contatos (leitura) | Ler o nome e os números de um contato escolhido ao tocar em **Contatos** ao lado de um telefone, para preencher o campo com o número selecionado. Pedida nesse momento, não ao iniciar |
| Contatos (alteração) | Nenhum uso. O Android concede leitura e alteração numa permissão só; o LifeWell apenas lê e nunca adiciona, altera ou exclui contatos |
| Notificações | Entregar um lembrete que você pediu |
| Internet | Sincronizar seus registros |
| Estado da rede | Saber se há conexão e informar uma falha em vez de falhar silenciosamente |
| Iniciar com o dispositivo | Manter lembretes após uma reinicialização |
| Manter o dispositivo ativo | Permitir a entrega de um lembrete agendado |
| Identificador de publicidade | Declarado; veja abaixo |

Se recusar acesso aos contatos, digite o número. Todos os campos de telefone funcionam das duas maneiras. Sua agenda nunca é enviada, pesquisada ou armazenada.

O aplicativo não pede acesso a SMS, registros de chamadas, localização em segundo plano ou acesso amplo a fotos e arquivos.

### Duas permissões removidas ativamente

A biblioteca de notificações declara `SCHEDULE_EXACT_ALARM` e `USE_EXACT_ALARM` no manifesto dela. O LifeWell **remove as duas** da compilação.

O Android reserva alarmes exatos para despertadores e calendários. Mantê-los exigiria uma permissão que o Google não concede a um aplicativo desse tipo. No Android 12 e posteriores, uma tentativa de agendamento sem essa permissão abriria a tela *Alarmes e lembretes* do sistema em vez de agendar. Por isso, cada lembrete é aproximado e pode chegar alguns minutos antes ou depois do horário.

### O identificador de publicidade

Ele está declarado no manifesto. **Não há rede de publicidade no aplicativo** nem código de anúncios de terceiros. A declaração existe para manter a resposta da loja coerente com o que a compilação poderia fazer, não porque anúncios estejam sendo exibidos a você.

## O que a versão Android acrescenta

- **Lembretes locais**, entregues pelo próprio Android mesmo com o aplicativo fechado. Veja [Lembretes](../features/reminders.md).
- **Acesso nativo à conta**, com a sessão no armazenamento protegido da plataforma, não no armazenamento web.

## Push e cobrança pelo Google Play

### Notificações push

Se você ativar o push e a inscrição do aparelho ficar ativa, o LifeWell poderá receber uma mensagem geral da equipe pelo OneSignal. O aplicativo não envia notificações automaticamente por eventos da conta. O push é separado dos lembretes locais, agendados pelo Android no aparelho. Veja [Lembretes](../features/reminders.md#push-notifications).

### Google Play Billing

O fluxo de compra, a verificação no servidor e os avisos de renovação do Google foram escritos e compilados. O vínculo entre a resposta do Google e o direito de acesso foi testado com respostas registradas. **Nenhuma compra real foi feita**, a conta de serviço não está configurada e o controle da plataforma que ativa o caminho Play começa desligado. A cobrança só pode ser testada numa compilação assinada para Play e instalada por uma faixa de testes; nada abaixo de um teste interno a comprova. Veja [Planos](../plans.md#no-android).

## Atualizações pelo ar

O LifeWell integra pacotes assinados do Native Update para instalações Android compatíveis. O aplicativo confere o pacote antes de aplicá-lo e pode manter a atualização após um início completo. A chave pública de verificação está incluída na compilação nativa; uma instalação antiga sem essa chave não pode ganhar essa capacidade depois. Código nativo e permissões ainda chegam pelo Google Play. O registro de versões no aplicativo também informa quando uma versão mais nova exige atualização.

## iOS

[Removido em 16 de julho de 2026.](./ios.md)
