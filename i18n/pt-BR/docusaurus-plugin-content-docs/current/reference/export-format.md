---
title: O formato do arquivo exportado
description: O que entra na exportação LifeWell, campo por campo e tabela por tabela — cabeçalho JSON, arquivo CSV, omissões do PDF e dados que nunca aparecem.
keywords: [formato de exportação LifeWell, esquema json, exportação csv, importar dados LifeWell, portabilidade de dados]
tags: [reference, export, your-data]
sidebar_position: 1
---

# O formato do arquivo exportado

Esta página descreve o arquivo criado por [Exportar uma cópia](../your-data/export.md), para que outro aplicativo possa lê-lo sem adivinhar sua estrutura.

Não é um formato exclusivo do LifeWell. JSON é JSON; o arquivo compactado contém arquivos CSV comuns.

## Os três arquivos

| Formato | Nome | Tipo de mídia | Alcance |
|---|---|---|---|
| JSON | `lifewell-export-<YYYY-MM-DD>.json` | `application/json` | Intervalo escolhido; 5.000 linhas por tabela |
| CSV | `lifewell-export-<YYYY-MM-DD>.zip` | `application/zip` | Intervalo escolhido; 5.000 linhas por tabela |
| PDF | `lifewell-export-<YYYY-MM-DD>.pdf` | `application/pdf` | Resumo; veja abaixo |

A data usa o seu dia local, não o do servidor. O nome mantém caracteres ASCII e a mesma forma em todos os idiomas, para que você consiga encontrá-lo na pasta de downloads.

## O documento JSON

Um objeto com um cabeçalho curto e, em seguida, uma chave para cada tabela. Cada chave contém uma lista de linhas.

```json
{
  "exportedAt": "2026-09-08T11:04:22.417Z",
  "schema": 1,
  "range": { "from": "2026-01-01", "to": "2026-09-08" },
  "rowCap": 5000,
  "truncated": ["metric_entries"],
  "profile": { "id": "…", "display_name": "…" },
  "conditions": [],
  "medications": [ { "…": "…" } ]
}
```

| Campo do cabeçalho | Tipo | Significado |
|---|---|---|
| `exportedAt` | Texto ISO 8601, UTC | Quando o arquivo foi criado |
| `schema` | Número | Versão do formato. Atualmente **1** |
| `range.from` / `range.to` | Data ISO ou `null` | Intervalo escolhido. `null` indica uma ponta sem limite |
| `rowCap` | Número | Limite aplicado por tabela: **5000** |
| `truncated` | Lista de nomes de tabelas | Tabelas que atingiram o limite. Vazia significa que nenhuma foi cortada |
| `profile` | Objeto ou `null` | Seu perfil, incluído como objeto em vez de lista de uma linha |

Antes de escrever um leitor, saiba que:

- **Uma tabela sem linhas é uma lista vazia, não uma chave ausente.** `"meals": []` informa que a tabela foi considerada; sem a chave, ficaria a dúvida.
- **`truncated` avisa que o arquivo está incompleto.** Leia esse campo antes de concluir que alguém não tem histórico.
- **O JSON é formatado com recuo de dois espaços.** Ele foi feito para abrir e pesquisar. Uma linha única de oito megabytes não seria prática num editor de texto.

## O arquivo compactado de CSV

O ZIP contém **um `.csv` por tabela**, chamado `<table>.csv`. As colunas são as da própria tabela.

| Detalhe | Valor |
|---|---|
| Fim de linha | CRLF, conforme RFC 4180 |
| Codificação | UTF-8 **com marca de ordem de bytes** |
| Aspas | RFC 4180: aspas duplicadas; campos com `"`, `,`, CR ou LF ficam entre aspas |
| Célula vazia | `null` e `undefined` viram uma célula vazia |
| Valores aninhados | Permanecem como JSON na célula, sem serem espalhados por linhas |

Duas escolhas intencionais podem parecer erros:

- **Uma tabela vazia ainda recebe um arquivo**, apenas com a linha de cabeçalho. Um arquivo ausente não se distingue de uma exportação que falhou; o cabeçalho confirma que a tabela foi examinada.
- **Texto de célula iniciado por `=`, `+`, `-`, `@`, tabulação ou retorno de carro recebe um apóstrofo na frente.** Planilhas interpretam esses caracteres como fórmula. É uma proteção para quem recebe o arquivo — muitas vezes, um médico. Se você estiver processando o CSV por código, remova esse apóstrofo inicial.

A marca de ordem de bytes existe porque o Excel no Windows pode interpretar UTF-8 sem marcação como uma codificação local e corromper nomes com acento.

## Todas as tabelas do arquivo

São 65 tabelas, agrupadas por área.

- **Intervalo** — linhas *Com data* respeitam o período escolhido. Linhas *Permanentes* entram sempre, porque uma dose sem medicamento associado parece perda de dados.
- **No PDF** — *Lista completa* imprime as linhas. *Só contagem* imprime a quantidade e o período, não as linhas. *Fora do PDF* significa que a tabela não aparece nele.

### Saúde

| Tabela | Conteúdo | Intervalo | No PDF |
|---|---|---|---|
| `conditions` | Condições | Permanente | Lista completa |
| `condition_episodes` | Episódios | Com data | Lista completa |
| `medications` | Medicamentos | Permanente | Lista completa |
| `medication_doses` | Doses de medicamentos | Com data | Só contagem |
| `metric_entries` | Medições | Com data | Só contagem |
| `user_metric_settings` | Configurações dos acompanhamentos | Permanente | Lista completa |
| `metric_definitions` | Tipos de acompanhamento | Permanente | Lista completa |
| `meals` | Refeições | Com data | Só contagem |
| `saved_meals` | Refeições salvas | Permanente | Fora do PDF |
| `saved_meal_items` | Itens das refeições salvas | Permanente | Fora do PDF |
| `eating_windows` | Janela de jejum | Permanente | Lista completa |
| `shopping_lists` | Listas de compras | Permanente | Fora do PDF |
| `shopping_list_items` | Itens das listas de compras | Permanente | Fora do PDF |
| `movement_sessions` | Exercícios | Com data | Só contagem |
| `wellness_breaks` | Pausas de bem-estar | Com data | Fora do PDF |
| `wellness_nudges` | Lembretes de bem-estar | Permanente | Fora do PDF |

### Mente

| Tabela | Conteúdo | Intervalo | No PDF |
|---|---|---|---|
| `journal_entries` | Entradas do diário | Com data | Fora do PDF |
| `mind_sessions` | Sessões guiadas | Com data | Só contagem |

### Fases da vida

| Tabela | Conteúdo | Intervalo | No PDF |
|---|---|---|---|
| `cycle_days` | Dias do ciclo | Com data | Só contagem |
| `babies` | Crianças | Permanente | Lista completa |
| `baby_growth` | Medições de crescimento | Permanente | Lista completa |
| `baby_logs` | Registros da criança | Com data | Só contagem |
| `baby_milestones` | Marcos de desenvolvimento | Permanente | Lista completa |

### Pessoas

| Tabela | Conteúdo | Intervalo | No PDF |
|---|---|---|---|
| `people` | Pessoas | Permanente | Lista completa |
| `person_edges` | Relações | Permanente | Fora do PDF |
| `connections` | Conexões | Permanente | Lista completa |
| `connection_prefs` | Configurações das conexões | Permanente | Fora do PDF |
| `share_links` | Compartilhamentos | Permanente | Lista completa |
| `share_submissions` | Dados enviados por link | Permanente | Fora do PDF |
| `community_members` | Grupos de que você participa | Permanente | Fora do PDF |
| `posts` | Publicações na comunidade | Permanente | Lista completa |
| `post_replies` | Respostas na comunidade | Permanente | Fora do PDF |
| `blocks` | Pessoas bloqueadas | Permanente | Fora do PDF |
| `chats` | Conversas | Permanente | Fora do PDF |
| `chat_members` | Participantes das conversas | Permanente | Fora do PDF |
| `messages` | Mensagens enviadas por você | Permanente | Fora do PDF |
| `message_hides` | Mensagens ocultadas por você | Permanente | Fora do PDF |
| `professionals` | Seu perfil profissional | Permanente | Lista completa |
| `professional_claims` | Suas declarações profissionais | Permanente | Fora do PDF |
| `professional_slots` | Horários oferecidos | Permanente | Fora do PDF |
| `professional_verifications` | Conferências de registro | Permanente | Fora do PDF |
| `blood_donor_profiles` | Seu perfil de doador de sangue | Permanente | Lista completa |
| `blood_requests` | Pedidos de sangue enviados | Permanente | Lista completa |

### Memórias

| Tabela | Conteúdo | Intervalo | No PDF |
|---|---|---|---|
| `memories` | Memórias | Permanente | Fora do PDF |
| `scrapbook_items` | Itens do livro de recortes | Permanente | Fora do PDF |
| `media_files` | Arquivos de mídia | Permanente | Só contagem |
| `media_albums` | Álbuns | Permanente | Lista completa |
| `media_people` | Pessoas nas fotos | Permanente | Fora do PDF |
| `tags` | Etiquetas | Permanente | Lista completa |
| `taggables` | Itens com etiqueta | Permanente | Fora do PDF |

### Dia a dia

| Tabela | Conteúdo | Intervalo | No PDF |
|---|---|---|---|
| `notes` | Notas | Permanente | Fora do PDF |
| `note_folders` | Pastas de notas | Permanente | Fora do PDF |
| `location_points` | Lugares salvos | Permanente | Só contagem |
| `location_settings` | Configurações de localização | Permanente | Lista completa |
| `events` | Calendário | Com data | Lista completa |
| `event_checklist_items` | Notas de compromissos | Permanente | Fora do PDF |
| `reminder_schedules` | Lembretes | Permanente | Lista completa |

### Sua conta

| Tabela | Conteúdo | Intervalo | No PDF |
|---|---|---|---|
| `profiles` | Seu perfil | Permanente | Lista completa |
| `notifications` | Mensagens enviadas a você | Com data | Fora do PDF |
| `export_runs` | Exportações anteriores | Permanente | Fora do PDF |
| `export_schedules` | Exportações agendadas | Permanente | Fora do PDF |
| `plan_grant_requests` | Pedidos de plano | Permanente | Fora do PDF |
| `referrals` | Pessoas convidadas por você | Permanente | Fora do PDF |
| `referral_rewards` | Benefícios das indicações | Permanente | Fora do PDF |
| `account_audit` | Mudanças na sua conta | Com data | Fora do PDF |

## O que cada formato deixa de fora

**JSON e CSV incluem as tabelas compatíveis do intervalo escolhido.** Linhas com data fora desse intervalo não entram. Uma tabela com mais de 5.000 linhas é cortada e identificada no cabeçalho. Esses formatos permitem ler ou mover os dados incluídos; o LifeWell ainda não oferece restauração de conta a partir deles.

**O PDF tem outra finalidade.** Ele pode ser impresso, entregue numa recepção ou deixado sobre uma mesa. Por isso, inclui o que um profissional de saúde precisa consultar e deixa o resto de fora:

- **Lista completa** — registros permanentes: condições, medicamentos, tipos e metas de acompanhamento, crianças, medições de crescimento, marcos de desenvolvimento, pessoas, conexões, compartilhamentos, calendário, lembretes e perfil.
- **Só contagem** — registros volumosos com data: medições, doses, refeições, exercícios, dias do ciclo, registros de bebês, sessões guiadas, mídia e lugares salvos. Quarenta linhas escolhidas de quatro mil seriam uma amostra, e chamá-la de *seus dados* induziria a pessoa a erro. Uma tabela listada imprime no máximo **60 linhas**.
- **Fora do PDF** — diário, memórias, notas, livro de recortes, mensagens, respostas na comunidade e outros conteúdos que alguém escreveu para si.

:::warning[O diário nunca entra no PDF]
O diário é a parte do LifeWell que não deve sair numa folha de papel deixada sobre uma mesa. Ele está no JSON e no CSV, arquivos que você abre por conta própria. Isso não é uma preferência ajustável.
:::

## O que nenhum formato contém

Sete coisas ficam fora de **todas** as exportações. O intervalo e o limite por tabela podem excluir mais linhas.

| Ausente | Motivo |
|---|---|
| **Os próprios arquivos de mídia** | As imagens ficam no seu Google Drive. A exportação traz referência, legenda e data; não temos os bytes para entregar |
| **Dados compartilhados *com* você** | São registros de outra pessoa, aos quais ela lhe deu acesso temporário. Uma cópia sua não desapareceria quando a permissão fosse revogada |
| **Linhas excluídas** | Excluir é excluir. Não há lixeira por trás da exportação |
| **Registros operacionais** | Contadores de limite, avisos dispensados e semelhantes são estado da interface, não seus registros |
| **Sua senha** | Não existe senha LifeWell. O acesso usa Google; nunca vemos nem guardamos uma senha |
| **Sua chave do provedor de IA** | É uma credencial ativa guardada criptografada. Gravá-la num arquivo simples seria um vazamento |
| **Contagem de uso de IA** | É o medidor de um limite, não algo que você escreveu |

Mais cinco tabelas ficam retidas pela mesma classe de motivo: credenciais ou dados de outras pessoas.

| Retido | Motivo |
|---|---|
| Denúncias feitas por você | Ninguém pode ler essa tabela diretamente, nem você. Uma fila de moderação que vaza pelo download continua sendo um vazamento |
| Contato liberado de um doador de sangue | Foi entregue uma vez a uma pessoa e pode ser retirado. Uma linha num arquivo não respeitaria isso |
| Conexão com Google Drive | Contém um token de renovação ativo |
| Registro de compra Play | Contém um token de compra aceito pelo Google. Seu direito de acesso já aparece no perfil exportado |
| Avisos dispensados | Indicam quais avisos você fechou; são estado da interface |

Quatro tabelas são dados de referência compartilhados, não seus: lista de planos, catálogo da comunidade, banco de alimentos e uma tabela interna usada por uma verificação de disponibilidade.

## Ler os dados depois

Não há importação. O LifeWell não lê esses arquivos de volta para restaurar a conta.

O formato está documentado para que **outra ferramenta** possa fazê-lo: um programa, planilha, aplicativo ou você daqui a cinco anos com um editor de texto. Duas escolhas ajudam nisso:

1. Todos os identificadores do arquivo são os nomes das colunas no banco. Uma coluna tem o mesmo significado em JSON, CSV e nesta página.
2. O cabeçalho informa os próprios limites. Um arquivo parcial declara isso nas primeiras linhas.

## Quando esta página muda

Toda mudança que acrescenta uma tabela também acrescenta uma linha acima. Um teste compara as listas desta página e do esquema nos dois sentidos; uma tabela presente em apenas um lugar faz a compilação falhar.

Se você está escrevendo um leitor, use `schema` para identificar a versão. Hoje ele vale `1` e será aumentado antes de qualquer mudança de significado da estrutura acima.
