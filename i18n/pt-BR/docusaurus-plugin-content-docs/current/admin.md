---
title: Painel administrativo
description: Dez telas, três funções, um histórico de auditoria que ninguém altera diretamente e controles para mudar limites de planos e indicações sem lançar uma nova versão.
keywords: [administração LifeWell, painel administrativo, administração da plataforma, auditoria, moderação, contas]
topics: [admin]
sidebar_position: 9
---

# Painel administrativo

`/admin` não faz parte do aplicativo usado por membros. Está documentado aqui porque suas escolhas chegam até eles: limites dos planos, resultados da moderação e o que um administrador pode ou não ver sobre uma conta.

## As três funções

| Função | Acesso |
|---|---|
| **Moderador** | Fila de moderação, somente leitura, e listas disponíveis à equipe |
| **Administrador** | Tudo o que aparece abaixo |
| **Superadministrador** | O mesmo, além da concessão de funções |

Ler a fila de moderação e decidir sobre uma denúncia são **duas permissões diferentes de propósito**. Um moderador pode trabalhar na fila sem decidir seu resultado. Conceder de uma vez uma função e o poder de ocultar publicações deixaria uma pessoa sem revisão decidir o que outras podem dizer.

## As dez telas

| Tela | O que faz |
|---|---|
| `/admin` | Visão geral |
| `/admin/users` | Lista contas, concede ou revoga funções, suspende, reativa ou exclui contas, altera limites de uma conta específica |
| `/admin/plans` | Cria, edita ou retira planos; resolve solicitações de plano; concede um plano com prazo; gerencia meios de pagamento, vínculo com produtos Play e compras feitas em dispositivos |
| `/admin/moderation` | Mostra a fila e a decisão de cada denúncia |
| `/admin/verifications` | Aprova ou recusa conferências de registros profissionais |
| `/admin/inbox` | Reúne mensagens de participação |
| `/admin/announcements` | Redige, publica e encerra avisos, inclusive divulgações de outros produtos |
| `/admin/content` | Gerencia o catálogo de bem-estar e os tipos de acompanhamento do sistema |
| `/admin/settings` | Ajusta configurações da plataforma, modo de manutenção, indicadores de recursos, dois controles de pagamento, números de indicações e endereço de contato |
| `/admin/audit` | Mostra o histórico |

Cada uma das 32 operações administrativas por trás dessas telas recusa um usuário comum. A verificação executa cada operação como não administrador; não depende apenas de ler o código.

## O que um administrador não pode ver

**Seus registros.** A lista e o detalhe das contas retornam apenas uma lista permitida de colunas, sem dados de saúde. Administrar uma conta não dá acesso ao diário da pessoa.

Há mais dois pontos deliberadamente fora de alcance:

- **O token de uma compra Play e o recibo bruto** não estão nas colunas que o painel pode ler. Um deles é uma credencial perante o Google; o outro é o recibo inteiro. Nenhum é necessário para responder *quando o plano termina*.
- **Não é possível listar todas as indicações.** A política de leitura permite a cada pessoa ver apenas suas próprias linhas, inclusive se ela for administradora. Hoje, o painel não permite identificar um círculo de indicações suspeito. Essa é uma limitação real, não um recurso.

## O histórico de auditoria

`/admin/audit` recebe linhas **somente** das funções do servidor que executam uma ação. Ninguém tem permissão direta para inserir, alterar ou excluir linhas. Se o autor da ação pudesse escrever ou apagar o histórico, poderia forjá-lo.

Duas consequências:

- A exclusão de uma conta escreve primeiro a linha de auditoria. Se isso falhar, a exclusão é recusada.
- As linhas de auditoria continuam depois da exclusão da conta descrita. Elas identificam uma ação, não o conteúdo do registro afetado.

## O que o painel faz e chega até os membros

- **Limites dos planos são dados, não código.** É possível mudá-los sem lançar uma versão, e um novo plano é inserido como uma linha. O painel recusa salvar um plano pago pior que o Gratuito; o banco confere isso na mesma transação.
- **Uma concessão de plano tem data de término e motivo.** Uma concessão já vencida é recusada, pois não apareceria nas telas nem produziria um erro visível.
- **Toda decisão de moderação tem uma nota.** O autor da publicação lê uma versão; quem denunciou lê outra.
- **Toda conferência identifica a entidade de registro consultada.** Uma declaração sem entidade só pode ser recusada.
- **Toda alteração de limite de uma conta inclui uma nota.** Sem uma explicação, ninguém saberia se deve removê-la.

## Dois controles com alcance limitado

Vale dizê-lo claramente, porque é fácil atribuir a esses controles mais poder do que têm:

- **Desligar um indicador de recurso não bloqueia gravações.** Ele tira a opção do menu e a tela; muda a apresentação, não a proteção.
- **O modo de manutenção é um aviso, não uma barreira.** Muda o que o produto mostra, mas não fecha o banco de dados.

## A ação sem tela

Anular uma indicação é uma função do servidor sem interface. Por isso, é executada diretamente no banco. A função exige um motivo; ninguém deve anular algo sem poder explicar por quê.
