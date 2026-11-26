---
title: Excluir seus dados
description: Exclua a conta inteira ou uma das sete áreas e mantenha o restante. Entenda o que cada opção remove e o que permanece.
keywords: [excluir conta LifeWell, excluir meus dados, exclusão lgpd, excluir conta]
tags: [your-data, privacy]
sidebar_position: 2
---

# Excluir seus dados

`/settings` → **Seus dados**. Nessa tela, a exportação aparece acima da exclusão, nessa ordem, de propósito.

## Excluir sua conta

Essa opção remove os registros e a conta que os guarda.

O caminho é: **Seus dados** → **Exportar uma cópia** → **Excluir conta** → digitar `DELETE` para confirmar → saída imediata da conta e remoção dos registros ativos.

Não há um arquivo oculto dos dados da conta ativa. Backups manuais criptografados podem manter informações anteriores até sua substituição, conforme explica a página de privacidade. O aplicativo envia o pedido ao serviço de exclusão usando sua sessão autenticada; você não precisa informar um ID de conta. Se não conseguir entrar, a página pública [`/delete-account`](https://lifewell.aoneahsan.com/delete-account) explica como pedir ajuda.

## Excluir uma área \{#delete-one-area}

Você pode remover tudo da área Saúde ou Memórias, por exemplo, e manter o restante. A opção fica em `/settings` → **Seus dados** → *Excluir uma área*.

- A exclusão acontece em **uma transação**. Todas as tabelas são confirmadas juntas ou nenhuma é; deixar metade de uma área sem indicação de onde a operação parou seria pior que qualquer um dos resultados completos.
- O aplicativo **informa o que foi removido**, tabela por tabela, com contagens.
- Uma linha é escrita no histórico da sua conta. Assim, a exclusão fica registrada como uma ação, em vez de ser apenas uma ausência que você percebe depois.
- Você precisa **digitar as palavras de confirmação** — `DELETE HEALTH`, `DELETE MEMORIES`. O servidor confere a frase, não só a janela de confirmação. A interface ajuda a evitar enganos; a conferência no servidor protege a operação.

### Um efeito em cadeia que você deve conhecer

Excluir **Pessoas** também remove as marcações de fotos que identificam quem aparece em uma imagem, pois essas marcações apontariam para pessoas que deixaram de existir no registro. As linhas entram na contagem e no relatório da exclusão, em vez de sumirem silenciosamente de uma área que você não escolheu.

### Pessoas e Compartilhamento são excluídos separadamente

Excluir **Pessoas** remove suas pessoas, árvores e lugares, sem alterar o que você compartilha. Excluir **Compartilhamento** revoga todos os links, encerra todas as conexões e remove as respostas aguardando por você, enquanto suas pessoas permanecem. Limpar uma lista de contatos não deve encerrar silenciosamente o acesso que você concedeu ao seu médico. Veja [Compartilhamento](../domains/sharing.md).

### O que permanece quando você exclui uma área

| Permanece | Por quê |
|---|---|
| Notificações | O histórico de entrega abrange todas as áreas. Excluir Saúde não pode apagar sem aviso uma notificação de compartilhamento |
| Sua chave do provedor de IA | É uma credencial da conta, não conteúdo de uma área |
| Sua conexão com o Google Drive | É uma credencial ativa e uma conexão externa. Desconectá-la é uma ação própria nas configurações |
| Registro de uma compra Play | Pertence à conta. Excluí-lo poderia deixar um plano pago sem referência |
| Contagem de uso de IA | Pertence à conta e serve para calcular os limites |

## Ocultar não é excluir

[Desativar uma área](../domains/overview.md#desativar-uma-área) conserva todas as linhas. Excluir uma área remove suas linhas. Por isso, são dois controles em lugares diferentes.

## O que a exclusão não alcança

- **Arquivos no seu próprio Google Drive.** O LifeWell guarda uma referência; excluir seus dados remove essa referência. Os arquivos continuam no seu Drive para você excluí-los lá. Veja [Onde seus dados ficam](./where-it-lives.md).
- **O que você enviou a outra pessoa.** Uma mensagem enviada também faz parte da conversa dela.
- **Linhas de auditoria administrativa sobre sua conta.** Se o responsável pudesse apagar o histórico, ele deixaria de ser confiável. Essas linhas continuam depois da conta e identificam ações, não o conteúdo dos seus registros.
