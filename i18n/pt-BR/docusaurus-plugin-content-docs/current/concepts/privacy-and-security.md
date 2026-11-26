---
title: Privacidade e segurança
description: O que sai do seu dispositivo e o que permanece — acesso sem senha, regras do banco por linha, dados de análise filtrados, permissão de contatos, fotos de documentos e limites das promessas do LifeWell.
keywords: [privacidade LifeWell, privacidade de dados de saúde, segurança em nível de linha, dados de análise, segurança, contatos, plano Família]
tags: [concepts, privacy]
sidebar_position: 3
---

# Privacidade e segurança

Uma explicação direta, inclusive dos pontos que não caberiam numa página de divulgação.

## Acesso à conta

Somente com Google. Não há campo de senha; **nunca vemos nem guardamos uma senha**, pois não existe uma senha LifeWell para guardar.

Na web, a sessão fica no armazenamento do navegador. No Android, fica no armazenamento protegido da plataforma. Sair de todos os dispositivos encerra todas as sessões, não só a que você está usando.

## O que impede outra conta de ler seus dados

Todas as tabelas têm segurança em nível de linha, e cada leitura é feita **como você**. Não há uma chave administrativa no navegador nem um caminho que o aplicativo possa tomar em seu nome para ignorar as regras.

Três detalhes importam porque costumam ser onde esse tipo de proteção falha:

- **Uma lista é filtrada, não recusada.** A segurança em nível de linha do Postgres retorna menos linhas em vez de erro. Uma consulta sem filtro de titular pode parecer funcionar. Por isso, toda leitura de lista filtra pela coluna usada na regra.
- **As regras são comprovadas com linhas reais.** Uma consulta que retorna zero linhas satisfaz qualquer regra sem provar nada. As contas de teste têm dados: uma com 90 dias de medições, outra com 14, nenhuma delas administradora.
- **Todas as listas têm limite.** Uma leitura retorna 20 linhas por padrão e no máximo 50, com limite aplicado no banco. Não há consulta que percorra a tabela inteira.

## O que coletamos sobre o uso do aplicativo

Quatro serviços; cada um fica desligado quando sua chave não está configurada:

| Serviço | Finalidade |
|---|---|
| Google Analytics 4 | Saber quais páginas são usadas |
| Amplitude | Saber quais ações são feitas |
| Microsoft Clarity | Reproduzir sessões para encontrar falhas na interface |
| Sentry | Registrar erros |

**Nenhum deles recebe o conteúdo dos seus registros.** Isso é aplicado por uma lista de campos permitidos, não apenas por uma orientação à equipe. Uma propriedade de análise só passa se o catálogo a declarar para aquele evento *e* o valor passar pela conferência de tipo. Textos precisam ser identificadores curtos; frases, e-mails e notas não passam. Números precisam ser inteiros pequenos e não negativos; uma medição não passa como contagem.

Os filtros são testados com identificadores reais. Se algum sobreviver, o teste falha. Apenas ler o código do filtro não mostraria uma regressão.

A reprodução de sessão merece atenção especial, pois grava a interface em vez de apenas um evento. O aplicativo marca elementos sensíveis para que sejam ocultados na gravação.

:::note[Firebase Analytics não foi proibido, embora esta página já tenha dito o contrário]
Uma versão anterior desta documentação dizia que Firebase Analytics era proibido e tinha sido substituído. Estava errado. Google Analytics 4 **é** a propriedade de análise do Firebase — uma propriedade, duas maneiras de acessá-la — e funciona junto de Amplitude, Clarity e Sentry. Os quatro formam o conjunto de análise; a afirmação anterior informava incorretamente o que o produto faz.
:::

## Permissões

[`/permissions`](https://lifewell.aoneahsan.com/permissions) lista todas as permissões declaradas pelo aplicativo e sua finalidade. A lista é curta e conferida contra o manifesto Android final, não apenas contra a intenção da equipe: componentes externos podem adicionar permissões, e um manifesto não verificado acaba pedindo algo que ninguém escolheu.

Nada pede acesso a SMS ou registros de chamadas.

### Contatos

A permissão é pedida apenas quando você toca em **Contatos** ao lado de um número de telefone. O Android pede leitura e alteração juntas, então ambas são declaradas. O LifeWell só lê o contato escolhido — nome e números — e guarda apenas o número que você selecionou. Nunca cria, altera ou remove contatos, e sua agenda nunca é enviada, pesquisada ou armazenada. Se recusar a permissão, digite o número.

## Foto do documento de identidade de outra pessoa

Imagens da frente e do verso que você adiciona ao registro de alguém ficam com o LifeWell, criptografadas, e não no seu Google Drive. São as únicas imagens guardadas dessa forma, pois um administrador precisa poder abri-las para uma conferência. Apenas administradores do LifeWell podem fazê-lo, e toda abertura é registrada. Você vê que a imagem está guardada, seu tamanho e data, mas não consegue abrir a foto. A pessoa a quem pertence, suas conexões e qualquer link compartilhado nunca a veem. Apagar a imagem, excluir a pessoa ou excluir sua conta remove o arquivo do armazenamento ativo; cópias antigas nos backups manuais criptografados permanecem até a rotação. Veja [Pessoas](../domains/people.md#fotos-de-documentos-de-identidade).

## Vagas do plano Família não compartilham dados

Uma vaga no plano Família de outra pessoa muda seu plano, e só isso. Quem paga não vê seus registros, entradas, pessoas ou arquivos; você também não vê os dados de quem paga. Essa pessoa vê apenas que você ocupa uma vaga e a data em que entrou. Veja [Vagas da família](../plans.md#vagas-da-família).

## O que o LifeWell não afirma

- **Não há criptografia de ponta a ponta.** Seus dados são criptografados em trânsito e em repouso pelo provedor do banco, mas o banco consegue lê-los. Afirmar o contrário seria falso.
- **Não é um dispositivo médico**, e nada nele é um diagnóstico.
- **Não há rede de publicidade.** Seus dados não são vendidos, e não há código de anúncios de terceiros no produto.
- **Não há recuperação para um instante específico.** Backups são feitos manualmente e verificados por restauração. Sua cópia é a [exportação](../your-data/export.md), disponível em todos os planos.

## Levar seus dados ou excluí-los

[Exportar uma cópia](../your-data/export.md) · [Excluir seus dados](../your-data/delete.md) · [Onde seus dados ficam](../your-data/where-it-lives.md).

As páginas legais são [`/privacy`](https://lifewell.aoneahsan.com/privacy) e [`/terms`](https://lifewell.aoneahsan.com/terms). Foram escritas para serem lidas com clareza.
