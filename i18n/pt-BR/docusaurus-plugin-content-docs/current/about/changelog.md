---
title: Histórico de versões
description: O LifeWell 3.0 (versão 3.22.0) foi reconstruído sobre um novo serviço de dados, seguido pelas versões 3.23 a 3.25 em outubro de 2026. Veja o que mudou, saiu, foi corrigido e o que foi zerado na 3.0.
keywords: [lifewell 3.0, lifewell 3.22.0, histórico de versões, notas de atualização, novidades]
topics: [about, changelog]
sidebar_position: 2
---

# Histórico de versões

Uma reconstrução completa da versão 2.x. O mesmo produto, reescrito sobre outro serviço de dados.

:::warning[A versão 3.22.0 zera seus registros]
**IMPORTANTE: o LifeWell 3.0 começa do zero. Os dados registrados nas versões anteriores não são transferidos: esta versão usa outro sistema de contas, e suas entradas antigas não são migradas.**

O serviço de dados foi substituído **sem um caminho de migração**. Os registros da 2.x não são levados adiante. A decisão foi tomada quando o aplicativo ainda não tinha usuários reais. Dizemos isso com clareza porque, para quem abre o aplicativo, uma redefinição intencional pode parecer uma falha catastrófica.

[Exporte os dados da 2.x antes de atualizar](../your-data/export.md) se houver algo que queira guardar.
:::

As principais novidades:

- Reconstrução completa: mais leve, mais rápida e organizada ao redor das pessoas e dos momentos da sua vida — família, memórias e dia a dia, com saúde, mente e fases da vida ao redor.
- Fotos e arquivos vão para seu próprio Google Drive, nunca para nossos servidores.
- Acesso com Google em todos os dispositivos.

O restante desta página explica os detalhes.

## 29 de outubro de 2026

- **A página inicial aparece mais rápido no celular.** Seus estilos agora vêm dentro da própria página. A primeira tela não espera por um arquivo separado, e a pausa mais longa durante a abertura diminuiu.
- **O link para o perfil identifica seu dono.** Leitores de tela agora anunciam *“Seu perfil”* com suas iniciais; links que abrem outra aba também avisam isso.
- **Uma política de segurança do navegador vale para todas as páginas.** Ela lista os serviços dos quais o LifeWell pode carregar programas, conexões e quadros. O navegador recusa os demais.
- **Páginas privadas não são oferecidas aos buscadores como página inicial.** Um endereço dentro do aplicativo agora informa aos buscadores que não deve ser listado.
- **Uma etapa inexistente sai do endereço.** Abrir *Como o LifeWell funciona* num número fora das seis etapas leva à primeira e remove o número inválido.

## 27 e 28 de outubro de 2026

- **Fotos de documentos de identidade são guardadas e removidas.** Adicionar frente e verso ao registro de uma pessoa agora guarda as duas imagens; removê-las exclui os arquivos. Veja [Fotos de documentos](../domains/people.md#fotos-de-documentos-de-identidade).
- **Uma vaga Família envia aviso.** Dar uma vaga a uma conexão familiar ou retirá-la agora gera uma mensagem na caixa de entrada da pessoa.
- **Nomes longos recebem uma explicação.** O limite é de 60 caracteres. Um nome maior agora mostra *“Isso tem mais de 60 caracteres. Um primeiro nome ou Ammi é suficiente.”*
- **A página de permissões identifica mais três grupos** concedidos pelo Android na instalação: contagem no ícone, recebimento de notificações e compras pelo Google Play. Veja [`/permissions`](https://lifewell.aoneahsan.com/permissions).
- **Novo ícone.** O ícone, a aba do navegador e a abertura no Android usam a marca presente no cabeçalho do aplicativo. Ela aparece no Android após a próxima atualização pelo Google Play.

## Outubro de 2026: versões 3.23 a 3.25

A versão 3.25.0 está no Google Play e na web. A aplicação web se atualiza sozinha; o Android recebe as mesmas mudanças por uma atualização pelo ar.

- **Pessoas primeiro.** A página inicial agora diz *“As pessoas e os momentos da sua vida, em um só lugar.”* Os menus começam por você, família e trabalho, e memórias. No celular, a barra inferior mostra Hoje, Pessoas, Falar, Memórias e Mais. Veja [Pessoas](../domains/people.md).
- **Passeios pelas páginas importantes.** Um botão no cabeçalho abre o passeio, e cada página mostra uma dica uma única vez. Você pode pular, fechar ou ir direto a qualquer etapa, no celular ou computador. [`/how-lifewell-works`](https://lifewell.aoneahsan.com/how-lifewell-works) apresenta o aplicativo com telas reais. Veja [Passeios e guia](../getting-started/tours-and-walkthrough.md).
- **Tarefas.** Exportações e gravações processadas pelo Speak aparecem em `/jobs`, com aviso quando uma exportação fica pronta. Veja [Tarefas](../your-data/export.md#tarefas).
- **Abertura inicial mais rápida.** Páginas públicas chegam com o conteúdo já desenhado, antes de qualquer programa executar.
- **Compartilhar um compromisso numa conversa.** *Compartilhar algo do meu registro* envia um link para um compromisso futuro, nunca uma cópia dos seus dados. Veja [Compartilhar um compromisso](../features/community-and-chats.md#compartilhar-um-compromisso-numa-conversa).
- **A página de permissões explica o microfone.** Na web, o navegador pede acesso apenas quando você grava algo no Speak. Veja [`/permissions`](https://lifewell.aoneahsan.com/permissions).
- **A IA continua funcionando quando o crédito gratuito pausa.** O crédito gratuito é distribuído em cotas por hora. Quando não está disponível, um modelo pago de baixo custo responde dentro do limite normal do seu plano, sem conceder nem cobrar algo extra. A [política de privacidade](https://lifewell.aoneahsan.com/privacy) nomeia os serviços de IA envolvidos.

## 25 de setembro de 2026

- **Preços em dólares americanos.** Pro custa US$ 9,99 por mês ou US$ 99,90 por ano. Família custa US$ 8,99 por vaga por mês ou US$ 89,90 por vaga por ano, a partir de três vagas, sem limite máximo. Você escolhe a quantidade e depois distribui as vagas apenas a familiares já conectados. A vaga não compartilha dados; qualquer lado pode encerrá-la; se o plano termina, todas as vagas terminam. A compra no Android usa a cobrança pelo Google Play, mas fica desligada até a verificação no aparelho e na loja; não há link para outro pagamento. Veja [Planos](../plans.md#vagas-da-família).
- **Escolha um número dos contatos.** O botão *Contatos* ao lado dos campos de telefone permite escolher um número. O Android pede leitura e alteração juntas; o LifeWell lê apenas o contato escolhido e nunca altera sua agenda. Veja [Pessoas](../domains/people.md#escolher-um-número-dos-contatos).
- **Fotos de documentos de pessoas do seu registro.** Frente e verso, guardadas criptografadas no LifeWell, abertas apenas por administradores para conferência e nunca mostradas a você, à pessoa ou por um link. Veja [Pessoas](../domains/people.md#fotos-de-documentos-de-identidade).
- **Menu mais curto.** Marque qualquer página com a estrela para guardá-la em *Favoritos* no alto do menu, até doze. *Todas as páginas* no rodapé mostra o restante. Cada página termina com *Mais em…*. *Sair* aparece sob seu nome no celular, no rodapé do menu lateral no computador, no perfil e no início de Configurações → Segurança.
- **Um pedido por conexão.** Se não puder ser enviado porque a pessoa não tem e-mail cadastrado, porque o endereço é o seu ou porque houve pedidos demais, o aplicativo informa o motivo.

## Os dois números de versão

A página da loja chama este lançamento de **LifeWell 3.0**. A compilação usa a versão **3.22.0**. São o mesmo lançamento.

O número do meio no nome da versão é o código de versão Android. Aqui, esse código é 22, então o nome precisa ser 3.22.0. A compilação é recusada se não corresponder. Notas de cada versão aparecem na [página do Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell).

## O serviço de dados mudou

Saímos do banco de documentos usado pela versão 2.x para Postgres.

O motivo não foi uma moda tecnológica. A versão 2.x esgotou uma cota diária gratuita de leituras e ficou indisponível por um dia até a cota reiniciar. Compartilhar parte dos registros com uma pessoa específica também é uma questão de linhas do banco; Postgres aplica a regra ali, em vez de depender de um arquivo de permissões que acompanha cada consulta.

Na prática, você não enfrenta aquela cota de leitura, todas as listas têm limite aplicado no banco, e o compartilhamento é protegido onde os dados estão.

## Uma fonte para cada acompanhamento

`/tracking`, `/health/water` e o atalho do painel eram três lugares que gravavam o mesmo número e podiam divergir. Agora são três visualizações dos mesmos dados. Um copo registrado em qualquer lugar aparece nos demais imediatamente.

## Novidades deste lançamento

- **[Calendário e compromissos](../features/calendar-and-appointments.md)**, com uma lista de itens em cada compromisso.
- **[Lembretes](../features/reminders.md)** entregues pelo próprio Android, com três controles gerais e horários de silêncio no dispositivo.
- **[Comunidade e conversas](../features/community-and-chats.md)** — grupos, publicações, respostas, mensagens, bloqueio e moderação sem revelar ao autor quem o denunciou.
- **[Profissionais](../features/professionals.md)**, com uma conferência que afirma exatamente o que foi verificado.
- **[Doação de sangue](../features/blood-donation.md)**, com liberação de contato uma única vez, que pode ser retirada.
- **[Lista de compras](../features/shopping-list.md)**, compartilhável como texto simples.
- **[Seis controles de área](../domains/overview.md#desativar-uma-área)** para ocultar uma área sem excluir dados.
- **[Compartilhamento](../domains/sharing.md)**, a sétima área e a única sem controle para desativar. Um link pode mostrar um acompanhamento, seus medicamentos ou uma árvore no nível escolhido, com uma aba por item.
- **[Telas conforme seu perfil](../getting-started/first-run.md#a-resposta-que-muda-o-que-você-vê)**: uma resposta determina se seis telas de fases da vida aparecem no menu.
- **[Exportação em três formatos](../your-data/export.md)**: arquivos imediatos criados no seu dispositivo e cópias agendadas em planos pagos.
- **[Um painel de aparência](../concepts/appearance.md)** com oito opções aplicadas antes de a página aparecer.
- **[Painel administrativo](../admin.md)** com dez telas e histórico que ninguém altera diretamente.
- **[Programa de indicações](../features/referrals.md)**, na parte do servidor.

## O que saiu

- **iOS.** Removido em 16 de julho de 2026 por falta de uma conta de desenvolvedor Apple. Veja [iOS](../platforms/ios.md).
- **A extensão do lançamento 3.0.0.** Ela ficou fora daquela versão. Depois foi criado um complemento separado para Chrome e Firefox, mas nenhuma loja o publicou. Veja [Extensão do navegador](../platforms/browser-extension.md).
- **Números inventados de popularidade em `/health-tools`.** A página 2.x mostrava volumes de busca sem fonte ao lado das ferramentas e usava esses números para ordená-las. Foram inventados e removidos.
- **Calculadoras repetidas do ZTools.** Dez endereços redirecionam para lá; quatro ferramentas foram mantidas porque não existem no ZTools. Veja [Ferramentas](../features/tools.md).

## Correções desta documentação

Algumas afirmações da documentação 2.x estavam erradas. Elas são corrigidas aqui, em vez de serem alteradas sem explicação:

| Afirmava | O que é verdade |
|---|---|
| `/feed` é um feed social | É o **feed público e legível do blog**. A comunidade tem sua própria área; `/feed` pertence ao blog. [Endereços](../reference/addresses.md) |
| Firebase Analytics é proibido e foi substituído por Sentry e Amplitude | Google Analytics 4 **é** a propriedade de análise do Firebase e funciona junto com Amplitude, Clarity e Sentry. [Serviços de terceiros](../reference/integrations.md) |
| Atualizações pelo ar eram apenas planejadas | Pacotes assinados do Native Update estão integrados para instalações Android compatíveis. [Android](../platforms/android.md#atualizações-pelo-ar) |

O restante da documentação 2.x descrevia o modelo antigo de dados, um aplicativo para iPhone, uma extensão e uma biblioteca de componentes que a reconstrução não usa. Foi removido em vez de remendado.

## Ainda não construído

Esta lista reúne o estado real dos recursos para que ninguém precise tentar adivinhar por outras páginas:

| Recurso | Estado |
|---|---|
| Notificações push | Inscrição para receber mensagens gerais da equipe; sem push automático por eventos da conta |
| Busca global | A consulta existe; a página é uma estrutura provisória declarada |
| Tela de indicações para membros | A parte do servidor está ativa; ainda não há tela mostrando seu código |
| Google Play Billing | Construído e testado com respostas registradas; não configurado e desligado |
