# Planos

Três opções. A página [`/plans`](https://lifewell.aoneahsan.com/pt-BR/plans) no aplicativo mostra os valores atuais a partir da mesma tabela usada pelo servidor para aplicar os limites.

Os preços estão em dólares americanos.

| | Gratuito | Pro | Família |
|---|---|---|---|
| Mensal | US$ 0 | **US$ 9,99** | **US$ 8,99 por vaga** |
| Anual | US$ 0 | **US$ 99,90** | **US$ 89,90 por vaga** |
| Vagas | 1 | 1 | A partir de 3, sem limite superior |
| Pessoas que você pode registrar | 50 | Sem limite | Sem limite |
| Entradas | Sem limite | Sem limite | Sem limite |
| Armazenamento | 5 GB | 50 GB | 200 GB |
| Exportar intervalo escolhido, até 5.000 linhas por tabela | Sim | Sim | Sim |
| Links de compartilhamento somente de leitura | Sim | Sim | Sim |
| Exportações agendadas | — | Sim | Sim |
| Consultas ativas | Até 10 | Sem limite | Sem limite |
| Estimativas de IA por mês | 50 | 1.000 | 1.500 |

Família começa com três vagas: US$ 26,97 por mês pelas três. Você escolhe a quantidade na compra e distribui as vagas depois.

## Vagas da família

Uma vaga muda o plano de uma pessoa, e nada mais.

- **Quem pode receber uma vaga.** Alguém já conectado a você no LifeWell como familiar e presente no seu [Grupo da família](https://lifewell-docs.aoneahsan.com/pt-BR/domains/people#conexões-e-grupos). Uma pessoa desconhecida não pode recebê-la.
- **Nada é compartilhado.** Você não vê registros, entradas, pessoas ou arquivos de quem ocupa uma vaga sua, e essa pessoa não vê os seus. Você vê apenas que a vaga está ocupada e desde quando.
- **Qualquer um dos lados pode encerrá-la**, a qualquer momento.
- **Se o plano termina, todas as vagas terminam.** Os registros continuam intactos. O que ultrapassar os limites do Gratuito fica somente para leitura até que a pessoa escolha um plano próprio.

## Como o plano Gratuito foi definido

Os planos não são divididos pela quantidade de recursos do produto, mas pelo **custo de cada uso**:

- Uma linha de tabela quase não tem custo, então o Gratuito oferece 50 pessoas, entradas sem limite e links de leitura.
- Armazenamento tem custo real, embora não por toque. Por isso, é menor no Gratuito, mas existe.
- Cada estimativa de IA gera custo. Esse é o limite mais restrito, e **usar sua própria chave remove o limite em qualquer plano, inclusive o Gratuito**.
- Uma tarefa agendada exige trabalho recorrente do servidor, mesmo sem um pedido seu naquele momento. Por isso, exportações agendadas fazem parte dos planos pagos.

**Exportar está disponível em todos os planos.** Seus registros não devem ficar presos por uma cobrança.

## Duas formas de pagar

### Na web

`/profile/premium` mostra os planos e as instruções de pagamento. O pagamento é combinado manualmente, sem formulário de cartão: você paga, informa a equipe, e um administrador aplica o plano ao seu pedido com uma data de término.

### No Android

No Android, as compras passam pelo **Google Play Billing**, pois o Google exige esse caminho para bens digitais. O aplicativo não leva você a outro lugar para pagar; o painel Android não mostra o preço web nem compara as duas formas.

:::warning[Google Play Billing foi construído, mas está desligado]
O fluxo de compra, a verificação no servidor e os avisos de renovação do Google foram escritos, compilados e testados com respostas registradas. **Nenhuma compra real foi feita ainda**, a conta de serviço Play não está configurada e o controle que ativa o caminho começa desligado. Até uma compra real ser feita num dispositivo com uma versão de teste interno, trate o caminho Android como não comprovado. Não é possível testar a cobrança fora de uma versão assinada para o Play.
:::

## Como os limites são aplicados

É o servidor que recusa uma operação acima do limite. O botão não está apenas escondido: a gravação é negada pelo banco, mesmo se a solicitação não vier do aplicativo.

Os limites ficam na linha do plano e podem mudar sem uma nova versão. Os números acima são os registrados hoje.

## Concessões e prazos

Um plano concedido por administrador tem data de término e motivo. Não é possível conceder um plano já vencido, pois ele não apareceria em nenhuma tela e não produziria erro visível.

Uma [recompensa por indicação](https://lifewell-docs.aoneahsan.com/pt-BR/features/referrals) estende o plano pago, em vez de substituí-lo.

## Alterar ou encerrar

- **Web** — o plano vai até o término. Não há renovação automática a cancelar.
- **Android** — gerencie ou cancele a assinatura no Google Play, onde está a transação. O LifeWell não mostra um botão próprio de cancelamento, pois o Google controla a compra; um botão sem efeito seria pior que a ausência dele.

Se o plano terminar, seus registros não mudam. Os limites do Gratuito se aplicam às novas gravações; o que você já registrou continua disponível, e a [exportação](https://lifewell-docs.aoneahsan.com/pt-BR/your-data/export) existe em todos os planos.
