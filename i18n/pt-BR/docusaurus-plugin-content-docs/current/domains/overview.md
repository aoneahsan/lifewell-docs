---
title: As sete áreas
description: O LifeWell organiza sua vida em sete áreas ao redor de Você. Seis podem ser desativadas sem excluir dados; Compartilhamento precisa continuar visível.
keywords: [áreas LifeWell, áreas da vida, desativar uma área, navegação LifeWell, compartilhamento LifeWell]
topics: [concepts, domains]
sidebar_position: 1
---

# As sete áreas

Seis aplicativos conheciam, cada um, um pedaço da sua vida. Nenhum conhecia você.

O LifeWell reúne sete áreas, com **Você** no centro. Você é a conta — seu perfil, seu plano, suas configurações — e não é uma das sete áreas, porque não pode ser desativada.

As pessoas vêm primeiro: você adiciona quem importa, guarda o que sabe sobre elas e os momentos que vivem juntos. Memórias, dia a dia e compartilhamento ficam perto delas. Saúde, mente e fases da vida estão ao redor, para ajudar sua vida a correr bem. Saúde é uma dessas áreas, não a finalidade do aplicativo.

| Área | Grupo do menu | O que guarda |
|---|---|---|
| [Pessoas](./people.md) | Família e trabalho | Pessoas, árvores, lugares, mensagens, comunidade, profissionais, doadores de sangue |
| [Memórias](./memories.md) | Memórias | Fotos, lembranças e notas |
| [Dia a dia](./everyday.md) | Dia a dia | Calendário |
| [Compartilhamento](./sharing.md) | Compartilhamento | O que você deixou outras pessoas lerem: links, compartilhamento com parceiro e respostas recebidas |
| [Saúde](./health.md) | Saúde | Acompanhamentos, medicamentos, alimentação, exercícios e condições |
| [Mente](./mind.md) | Mente | Diário, respiração, sono e bem-estar no trabalho |
| [Fases da vida](./stages.md) | Fases da vida | Ciclo, bebê e crescimento |

## Por que os endereços não correspondem às áreas

`/health/mood-journal` pertence à área **Mente**. `/health/menopause` pertence a **Fases da vida**. `/people/share-links` pertence a **Compartilhamento**. Os prefixos indicam outra área, mas permanecem assim de propósito.

Esses endereços foram indexados na versão 2.x. Um endereço já indexado é uma promessa a quem o compartilhou. A reconstrução muda o código, não os endereços. Veja a lista em [Endereços permanentes](../reference/addresses.md).

Uma área expressa a organização atual do produto. Um prefixo conta sua história. Não são a mesma coisa.

## Desativar uma área

`/settings?tab=domains` tem seis controles, um para cada área desativável. Compartilhamento também aparece, mas sem controle: o que você permitiu que outras pessoas leiam precisa continuar visível para você. Veja [Compartilhamento](./sharing.md#por-que-esta-área-não-pode-ser-desativada).

**Desativar deixa a área fora do caminho, sem apagar nada:**

- o menu deixa de mostrá-la;
- todos os registros continuam guardados, agora e depois;
- suas páginas ainda abrem por links diretos, com uma frase no topo explicando por que não aparecem no menu.

Esse painel não tem botão Salvar. Cada mudança é gravada imediatamente, e o próprio controle confirma o resultado. Se a gravação falhar, ele volta à posição anterior e informa o erro.

## Ocultar uma área não é excluí-la

São duas ações diferentes:

| | Onde | O que acontece |
|---|---|---|
| Desativar uma área | `/settings` → Áreas | O menu deixa de mostrá-la. Todas as linhas permanecem |
| [Excluir uma área](../your-data/delete.md#delete-one-area) | `/settings` → Seus dados | As linhas da área são excluídas numa transação, e o aplicativo informa quantas foram removidas |

Quem queria apenas ocultar uma área não conseguiria desfazer a exclusão. Por isso, a segunda opção exige que você digite as palavras de confirmação.

## O que decide quais telas aparecem

Duas respostas, e nenhuma outra:

1. **Quais áreas estão ativas** — os seis controles acima.
2. **Como você se identifica** — um campo do perfil que determina se seis telas de fases da vida aparecem. Veja [O primeiro acesso](../getting-started/first-run.md#a-resposta-que-muda-o-que-você-vê).

Se a pessoa se encaixa nos dois critérios, encontra a mesma explicação nos dois lugares. Isso é intencional.
