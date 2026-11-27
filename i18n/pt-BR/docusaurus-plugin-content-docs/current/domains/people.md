---
title: Pessoas
description: O ponto de partida do LifeWell — você, quem importa e o que sabe sobre essas pessoas. Árvores de família e trabalho, conexões, lugares, mensagens, comunidade, profissionais e doação de sangue.
keywords: [árvore genealógica LifeWell, árvore de trabalho, conexões, contatos, foto de identidade, comunidade, conversas, profissionais, doadores de sangue]
topics: [domains, people]
sidebar_position: 2
---

# Pessoas

É por onde o LifeWell começa. Você começa por si e adiciona as pessoas importantes — família de um lado, trabalho do outro —, o que sabe sobre elas e os momentos que dividem. Também é o maior grupo de telas do aplicativo e o motivo de o LifeWell não ser um rastreador de saúde.

## Pessoas

`/people` guarda as pessoas da sua vida: quem são para você e os detalhes que talvez estivessem espalhados por vários lugares. Em `/people/import`, você traz uma lista sem digitar cada nome.

### Escolher um número dos contatos

No Android, o botão **Contatos** aparece ao lado de cada campo de telefone. Ao tocá-lo, você escolhe um contato no celular. O LifeWell lê apenas o nome e os números desse contato e guarda só o número escolhido. O Android pede as permissões de ler e alterar contatos juntas, mas só quando você toca em Contatos. O LifeWell nunca cria, altera nem exclui contatos; sua agenda não é enviada, pesquisada nem armazenada. Se recusar a permissão, basta digitar o número. Todos os campos funcionam das duas formas.

### Fotos de documentos de identidade

No registro de uma pessoa, você pode adicionar imagens da frente e do verso do documento de identidade dela — JPEG, PNG ou WebP, até 5 MB por lado. Um número pode ser digitado errado; se uma correspondência for questionada, a imagem permite conferi-la.

- **Onde fica guardada.** No LifeWell, criptografada, e não no seu Google Drive. É a única imagem do aplicativo armazenada assim.
- **Quem pode abri-la.** Apenas administradores do LifeWell, para uma conferência. Cada abertura entra no histórico administrativo. Você pode ver que ela está guardada, seu tamanho e a data de envio, mas não abrir a própria imagem.
- **Quem nunca a vê.** A pessoa a quem o documento pertence, alguém conectado a você ou quem tenha um link compartilhado.
- **Como ela é removida.** Apagar a imagem, excluir a pessoa ou a conta remove o arquivo do armazenamento ativo; cópias antigas nos backups manuais criptografados permanecem até a rotação.

### E-mail necessário

O filtro **E-mail necessário** em Pessoas (`/people?filter=email-needed`) lista quem não tem endereço de e-mail cadastrado e quem você ainda não marcou como sem e-mail. Pessoas importadas só pelo nome aparecem nessa lista. Ao marcar que uma pessoa não tem e-mail, ela sai do filtro. Quando ninguém precisa de um endereço, a página informa: *Todas as pessoas do seu registro têm e-mail, ou você indicou que não têm.* O endereço é usado para enviar [pedidos de conexão](#quando-alguém-convida-você).

## Árvores

- **`/people/family-tree`** — mostra quem é parente de quem.
- **`/people/work-tree`** — organiza colegas e relações de trabalho.

As duas usam o mesmo cadastro de pessoas e relações. Alguém presente nas duas é um registro só, não dois.

## Conexões e grupos

- **`/people/connections`** — pessoas que também usam o LifeWell e aceitaram se conectar a você. No menu, fica em [Compartilhamento](./sharing.md), como *Compartilhamento com parceiro*.
- **`/people/family-groups`** — um grupo da casa ou família. As vagas do plano Família só podem ser dadas a quem já está conectado a você; a vaga, por si só, não compartilha dados. Veja [Vagas da família](../plans.md#vagas-da-família).
- **`/people/journeys`** — uma viagem ou período compartilhado, com fotos e notas próprias.

Convidar alguém a se conectar é um pedido. Se a pessoa não tem e-mail, se você informa seu próprio endereço ou se pediu muitas vezes, o aplicativo explica qual é o problema. [E-mail necessário](#e-mail-necessário) mostra as pessoas do seu registro que ainda não têm endereço.

### Quando alguém convida você

Se alguém cadastrar você no registro dela usando seu e-mail antes de você ter conta LifeWell e tocar em **Convidar**, você recebe um link por e-mail. Abra-o, crie a conta e termine a configuração. O convite continua guardado: o pedido de conexão estará esperando por você.

| Quem | Aviso | O que diz | Ação |
|---|---|---|---|
| Você | *[nome da pessoa] adicionou você como familiar no LifeWell* | O pedido de conexão está à sua espera | *Analisar o pedido* |
| Quem convidou você | *[seu nome] entrou no LifeWell* | A pessoa convidada agora tem uma conta | *Ver a página dela* |
| Quem convidou você, se você aceitar | *[seu nome] aceitou seu pedido* | Vocês estão conectados | *O que ela pode ver* |

Nada é compartilhado até você aceitar, e recusar é sempre uma opção.

## Lugares

`/maps` guarda nomes de lugares e mostra como memórias, notas, pessoas e eventos se relacionam a esses nomes; não deduz coordenadas geográficas dos registros. `/people/location-tracking` e `/people/location-history` descrevem uma função separada, opcional e desligada por padrão. Esta versão não tem gravador em segundo plano: o controle salva uma configuração, não pontos de localização.

:::note[Não há compartilhamento de localização entre contas]
Lugares salvos e histórico de localização pertencem a você. Um link pode dar acesso a um acompanhamento, seus medicamentos ou uma árvore, e nada mais. O conjunto definido no banco para tipos compartilháveis tem três membros; localização não é um deles. A proteção está nessa ausência, não apenas numa tela sem a opção.
:::

## Mensagens

`/chats` permite conversas individuais ou em grupos pequenos entre contas conectadas. Uma conversa com um [profissional](../features/professionals.md) usa o mesmo mecanismo, com outro tipo.

A exportação contém **as mensagens que você enviou**. As palavras de outra pessoa pertencem ao registro dela.

## Comunidade

`/community` reúne grupos com publicações e respostas. Os grupos fazem parte de um catálogo compartilhado, não são criados por usuários. Todas as publicações seguem o mesmo caminho de moderação.

Você pode bloquear alguém. A lista de quem você decidiu não ver pertence ao seu registro e pode ser uma das informações que queira guardar numa exportação ao deixar o aplicativo.

## Profissionais

`/professionals` é um diretório de profissionais cadastrados, com conferência junto a uma entidade de registro. Veja [Profissionais](../features/professionals.md).

## Doação de sangue

`/blood-donors` é um diretório público; em `/profile/blood-donor`, você pode se cadastrar. Veja [Doação de sangue](../features/blood-donation.md).

## Compartilhamento

Tudo acima segue o mesmo modelo de compartilhamento, descrito em uma área própria: [Compartilhamento](./sharing.md). Nada disso é visível a outra conta a menos que você permita.
