---
title: Conectar un asistente de IA (MCP)
description: Conecta Claude, ChatGPT, Claude Code o Cursor a tus datos mediante el servidor MCP de LifeWell. Consentimiento, confirmación de eliminaciones y desconexión.
keywords: [servidor mcp de lifewell, conectar claude a lifewell, conector de chatgpt, mcp de claude code, mcp de cursor]
topics: [developers, mcp, ai]
sidebar_position: 4
last_update:
  date: 2026-11-19
  author: El equipo de LifeWell
---

# Conectar un asistente de IA (MCP) \{#connect-an-ai-assistant-mcp}

El servidor MCP de LifeWell permite que un asistente de IA lea y cambie tus datos cuando se lo pides: «¿Quién de mi familia cumple años este mes?» o «Añade la cita con el dentista el jueves a las nueve y media». Le das una dirección al asistente, inicias sesión en LifeWell y eliges en la página de consentimiento qué puede hacer. Funciona con Claude, ChatGPT, Claude Code, Cursor y otros asistentes compatibles con MCP.

## ¿Cuál es la dirección? \{#what-is-the-address}

```text
https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

También aparece, con un botón para copiarla, en **Ajustes → Otras aplicaciones → Conectar un asistente de IA**. Nunca debes pegar un token en el asistente: a partir de esta dirección, encontrará el inicio de sesión de LifeWell y te enviará allí.

## ¿Cómo conecto cada asistente? \{#how-do-i-connect-each-assistant}

Los menús pueden cambiar entre versiones. Si una indicación no coincide con tu pantalla, busca **Conectores** en los ajustes de la aplicación.

### Claude \{#claude}

1. En Claude, abre **Ajustes → Conectores** y añade un conector personalizado.
2. Pega la dirección anterior.
3. Inicia sesión en LifeWell cuando se te pida y aprueba el acceso en la página de consentimiento.

### ChatGPT \{#chatgpt}

1. En ChatGPT, abre **Ajustes → Conectores**. Algunas cuentas requieren activar primero el modo de desarrollador.
2. Añade un conector con la dirección anterior.
3. Inicia sesión en LifeWell y aprueba el acceso en la página de consentimiento.

### Claude Code \{#claude-code}

```bash
claude mcp add --transport http lifewell https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp
```

Después ejecuta `/mcp` en Claude Code, elige **lifewell** e inicia sesión en el navegador que se abre.

### Cursor \{#cursor}

Añade LifeWell a tu archivo `mcp.json`:

```json
{
  "mcpServers": {
    "lifewell": {
      "url": "https://mednqghfhaazsikbmtiz.supabase.co/functions/v1/mcp"
    }
  }
}
```

Cursor te pedirá iniciar sesión la primera vez que lo utilice.

## ¿Qué pide la página de consentimiento? \{#what-does-the-consent-page-ask}

Antes de permitir acceso a tus datos, LifeWell muestra en `https://lifewell.aoneahsan.com/oauth/consent`:

- **qué aplicación solicita acceso** y la dirección a la que te devolverá;
- **a qué cuenta de LifeWell** se conectará, por si tienes más de una;
- **qué podrá hacer**, explicado con frases y agrupado en lectura, escritura y eliminación, cada permiso con su casilla. Las de eliminación empiezan desmarcadas;
- **Aprobar** y **Denegar**, uno junto al otro.

Si activaste el [inicio en dos pasos](./two-step-sign-in.md), aprobar requiere un código. Toda conexión nueva pasa por esta página; no se aprueba nada en tu nombre.

El asistente solo ve las herramientas permitidas por tus elecciones. Si concedes únicamente lectura, no puede modificar datos.

## ¿Cómo se gestionan las eliminaciones? \{#how-are-deletes-handled}

El asistente puede **preparar** una eliminación; solo tú puedes **ejecutarla**. Cuando le pides quitar algo, muestra lo que se borraría y te da un enlace a LifeWell. Debes confirmarlo allí en un plazo de 10 minutos. Si no, no se elimina nada. Una frase oculta en una página o documento no puede lograr que el asistente borre tus datos, porque no puede confirmar su propia solicitud.

Esto solo se aplica si marcaste un permiso de eliminación en la página de consentimiento. Sin él, el asistente ni siquiera puede prepararla.

## ¿Cómo desconecto un asistente? \{#how-do-i-disconnect-an-assistant}

Abre **Ajustes → Otras aplicaciones → Aplicaciones conectadas** y pulsa **Revocar** en su fila. Pierde acceso desde la siguiente solicitud. La lista muestra permisos, fecha de conexión y último uso. La conexión aparece en cuanto la apruebas y LifeWell también te envía un correo.

## ¿Por qué no funciona? \{#why-is-it-not-working}

| Lo que ves | Qué hacer |
|---|---|
| El asistente pide que vuelvas a iniciar sesión | Su sesión venció. Inicia sesión en LifeWell desde el asistente |
| Indica que le falta un permiso | Desconéctalo y vuelve a conectarlo, marcando ese permiso en la página de consentimiento |
| LifeWell desapareció de sus herramientas o fallan todas las llamadas | Se revocó la conexión. Comprueba **Aplicaciones conectadas** y vuelve a conectarlo si quieres |
| Una eliminación no tuvo efecto | No se confirmó en LifeWell en los 10 minutos. Solicítala de nuevo |
| Quieres saber si se ha utilizado | **Aplicaciones conectadas** muestra el último uso de cada aplicación |
