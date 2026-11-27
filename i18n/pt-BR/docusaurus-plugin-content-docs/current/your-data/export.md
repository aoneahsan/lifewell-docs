---
title: Exportar uma cópia
description: Exporte um intervalo de datas escolhido em JSON ou CSV, ou crie um resumo em PDF. Cada tabela tem limite de 5.000 linhas por exportação.
keywords: [exportar LifeWell, exportar dados de saúde, baixar meus dados, exportação json csv pdf]
topics: [your-data, export]
sidebar_position: 1
---

# Exportar uma cópia

Abra `/health/export` ou escolha **Exportar uma cópia** no menu principal.

Um registro que você não consegue consultar de volta não serve como registro. Esta página permite que você leve uma cópia.

## Três formatos

| Formato | Arquivo | Alcance | Melhor uso |
|---|---|---|---|
| **JSON** | `lifewell-export-<date>.json` | Intervalo escolhido; até 5.000 linhas por tabela | Ler os dados incluídos |
| **CSV** | `lifewell-export-<date>.zip` | Intervalo escolhido; até 5.000 linhas por tabela | Abrir numa planilha |
| **PDF** | `lifewell-export-<date>.pdf` | Resumo curto, sem todos os campos | Levar um resumo a uma consulta |

O PDF omite informações de propósito. JSON e CSV também podem deixar de fora linhas antigas fora do intervalo escolhido, linhas além do limite de cada tabela e o conteúdo dos arquivos enviados. Veja a descrição [campo por campo do arquivo exportado](../reference/export-format.md).

## Uma exportação imediata é criada no seu dispositivo

O navegador cria a exportação imediata após uma leitura autenticada dos seus registros LifeWell e monta o download. Essa exportação manual não deixa um arquivo extra guardado no servidor.

Como o trabalho acontece na aba, sair da página cancela a exportação imediata. A cópia agendada é uma tarefa separada do servidor, descrita abaixo.

## Escolher o intervalo de datas

Algumas linhas pertencem a um dia; outras dão significado a essas linhas.

- **Linhas com data** — uma medição, refeição, dose ou evento do calendário — respeitam o intervalo escolhido.
- **Linhas permanentes** — medicamento, condição, refeição salva ou meta de acompanhamento — entram sempre, mesmo que tenham sido criadas antes do intervalo.

Sem as linhas permanentes, um arquivo poderia mostrar doses sem identificar os medicamentos. Isso pareceria perda de dados.

## O limite de linhas

Cada tabela exporta no máximo **5.000 linhas**. Se atingir esse limite, o cabeçalho do arquivo informa o corte; você não precisa descobrir um ano depois que parte do histórico ficou de fora.

## Exportações agendadas

Em um plano elegível, `/health/export` pode iniciar uma cópia semanal gerada pelo servidor no domingo ou na quarta-feira. O arquivo fica disponível por sete dias e depois é excluído; a linha no histórico pode permanecer. Se precisa de uma cópia hoje, faça uma exportação imediata no navegador.

A página lista exportações anteriores com formato, tamanho e número de linhas.

## Tarefas

Toda exportação também aparece em `/jobs`, acessível pelo rodapé do menu, ao lado de *Exportar uma cópia*. Uma gravação processada pelo Speak aparece ali também. Cada linha mostra **Em andamento**, **Pronta** ou **Não concluída**, com uma ação: *Abrir* ou *Tentar novamente*.

Quando uma exportação fica pronta, você recebe uma notificação. **Abrir** leva diretamente ao arquivo. Uma exportação que falha não gera notificação; em Tarefas, ela aparece como *Não concluída*.

## Se você quiser excluir os dados

Exportar e excluir ficam na mesma tela, nessa ordem, de propósito. Veja [Excluir seus dados](./delete.md).
