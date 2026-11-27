---
title: Onde seus dados ficam
description: Seus registros ficam num banco Postgres, suas fotos no seu Google Drive e, se você ativar os registros offline, algumas anotações rápidas aguardam no dispositivo.
keywords: [LifeWell offline, armazenamento Google Drive, onde meus dados ficam, sincronização, postgres]
topics: [your-data, privacy, concepts]
sidebar_position: 3
---

# Onde seus dados ficam

Em três lugares, cada um com uma função diferente.

| O quê | Onde | Quem pode ler |
|---|---|---|
| Tudo o que você escreve | Num banco Postgres hospedado pela Supabase | Você e as pessoas com quem [compartilhou](../domains/sharing.md) |
| Fotos e arquivos | **No seu próprio Google Drive** | Você, pela sua conta Google |
| Preferências, sessão e rascunhos | No seu dispositivo | Você, nesse dispositivo |

## Quando a conexão cai

Normalmente, o LifeWell grava seus registros no banco de dados. Quando a conexão cai, o aplicativo bloqueia a página atual até que uma solicitação real funcione. Se **Continuar trabalhando offline** estiver ativo nas configurações do dispositivo, você pode continuar anotando medições compatíveis, mudanças no dia do ciclo e episódios de sintomas. Essas alterações aguardam no dispositivo e são enviadas após a reconexão.

Na prática:

- Uma anotação rápida na fila só aparece em outro dispositivo depois que o servidor a aceita.
- Outras mudanças nos registros e leituras do servidor precisam de conexão.
- O service worker não guarda páginas em cache; depois de fechar a aba, você não consegue reabrir o LifeWell offline.

## As fotos ficam no seu Drive, não no nosso

O LifeWell pede ao Google uma permissão que alcança **somente os arquivos criados pelo próprio LifeWell**. Ele não pode listar, ler nem alterar o restante do seu Drive. Isso é uma restrição da permissão, não apenas uma promessa nossa.

Guardamos uma referência ao arquivo, não o arquivo em si.

| Se você... | Então... |
|---|---|
| Desconectar o Drive | Legendas, datas, álbuns e marcações continuam. As imagens deixam de ser acessíveis |
| Excluir um arquivo no Drive | A imagem desaparece. O LifeWell ainda sabe que ela existiu |
| Exportar seus dados | Você recebe as referências e legendas, nunca os bytes das imagens |
| Excluir sua conta LifeWell | As referências são removidas. Os arquivos permanecem no seu Drive para você excluí-los lá |

Essa escolha faz suas fotos dependerem de uma conta Google sob seu controle, em vez de um armazenamento sob nosso controle. É a direção que queríamos dar a essa escolha.

## O banco de dados e a proteção entre contas

Todas as tabelas têm segurança em nível de linha, e toda leitura é executada **como você**. Não há chave de serviço no navegador nem um caminho administrativo que o aplicativo possa usar em seu nome.

Cada consulta precisa demonstrar a titularidade dos dados com seus próprios filtros. Isso importa porque a segurança em nível de linha do Postgres *filtra* uma lista em vez de rejeitá-la: uma consulta sem o filtro do titular retorna menos linhas, não um erro. Isso pode passar despercebido numa revisão.

Duas contas receberam dados de teste para que as regras sejam verificadas contra linhas reais. Uma consulta que retorna zero linhas não prova que a proteção funciona.

## Backups

Não há recuperação para um instante específico nesse banco. Os backups são feitos manualmente, verificados pela restauração em um banco temporário e pela comparação das contagens, e guardados fora do provedor que hospeda a cópia ativa.

**Sua própria cópia é a [exportação](./export.md)**, disponível em todos os planos, inclusive o Gratuito. Seus dados não devem ficar presos por uma cobrança.

## O que mais sai do seu dispositivo

As fotos vão para a sua conta Google. Dados de análise e relatórios de erro vão para os serviços descritos em [Integrações](../reference/integrations.md). Nenhum deles leva o conteúdo dos seus registros: um relatório de erro identifica a tela e a falha, não o que você escreveu nela.

Nada dos seus registros é vendido, e não há rede de publicidade no produto.
