---
title: Verificar uma licença
description: Como conferir se uma versão do LifeWell está licenciada pela chave ou pelo site e o que significa cada resposta.
keywords: [verificar licença lifewell, conferir licença marca própria, arquivo de licença]
topics: [white-label]
sidebar_position: 5
last_update:
  date: 2026-11-13
  author: Equipe LifeWell
---

# Verificar uma licença

Cada versão licenciada do LifeWell tem uma chave e publica o arquivo `/.well-known/lifewell-white-label-license.json` no próprio site. Você pode conferir qualquer um dos dois na [página de verificação](https://lifewell.aoneahsan.com/verify-license). A resposta vem do nosso serviço de licenças, nunca da versão que está sendo verificada.

## Pela chave

| Resposta | Significado |
|---|---|
| Ativa | A licença é válida. A página mostra para quem foi emitida, os sites, plataformas e datas. |
| Em preparação | O pagamento foi feito; a versão ainda não está no ar. |
| Revogada | Uma versão que usa esta chave não está licenciada. |
| Nenhuma licença com esta chave | Confira a chave no certificado. |
| Não é uma chave LifeWell | As chaves começam com `LIFEWELL-`. |

## Pelo site

| Resposta | Significado |
|---|---|
| Licenciado | O arquivo de licença do site indica uma licença ativa que cobre esse endereço. |
| Não cobre este site | O arquivo indica uma licença de outro endereço. |
| Arquivo de licença ausente | O site não publica um arquivo de licença LifeWell. |
| Não foi possível acessar | Tente novamente em alguns minutos. |

A verificação mostra apenas campos públicos. Nunca aparece um endereço de e-mail ou preço.

## Dentro de uma versão licenciada

Uma versão licenciada verifica a própria chave ao iniciar e novamente quando é aberta. Se a licença for revogada ou não cobrir o site, a versão informa que ela não está ativa. Os registros das pessoas não são excluídos, e uma indisponibilidade do nosso serviço nunca impede o funcionamento da versão.
