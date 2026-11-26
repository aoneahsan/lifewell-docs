---
title: Inicio de sesión en dos pasos
description: Protege tu cuenta de LifeWell con una aplicación de autenticación, guarda tus códigos de recuperación y decide si recordar un navegador durante 7 días.
keywords: [inicio de sesión en dos pasos de lifewell, autenticación de dos factores, aplicación de autenticación, códigos de recuperación]
tags: [developers, security]
sidebar_position: 7
last_update:
  date: 2026-11-19
  author: El equipo de LifeWell
---

# Inicio de sesión en dos pasos \{#two-step-sign-in}

Después de iniciar sesión con Google, LifeWell te pide un código de seis dígitos de una aplicación de autenticación. Aunque alguien acceda a tu cuenta de Google, necesitará tu teléfono para abrir tus datos en LifeWell. Para ti es opcional; para quienes administran la plataforma es obligatorio.

## ¿Cómo lo activo? \{#how-do-i-turn-it-on}

1. Abre **Ajustes → Seguridad → Inicio de sesión en dos pasos**.
2. Escanea el código QR con Google Authenticator, Microsoft Authenticator, 1Password, Bitwarden u otra aplicación que genere códigos de seis dígitos. Si no puedes escanearlo, escribe la clave que aparece debajo.
3. Introduce el código que muestra la aplicación. Cuando LifeWell lo acepte, la protección estará activada.

## ¿Qué son los códigos de recuperación? \{#what-are-recovery-codes}

Al activar la función, LifeWell muestra **10 códigos de recuperación** una sola vez. Cada uno te permite entrar una vez si pierdes el teléfono o se borra. Descárgalos o guárdalos en un lugar distinto del teléfono.

- Cada código solo sirve una vez.
- Usar uno desactiva el inicio de sesión en dos pasos y te lleva directamente a configurarlo de nuevo en tu teléfono nuevo.
- **Crear códigos nuevos** sustituye todo el conjunto y anula los anteriores. Antes tendrás que introducir un código actual.

## ¿Qué hace «Recordar este navegador durante 7 días»? \{#what-does-remember-this-browser-for-7-days-do}

Tras introducir un código, la pantalla ofrece **Recordar este navegador durante 7 días**. La casilla aparece desmarcada y solo se activa si tú la marcas.

- **Desmarcada:** LifeWell vuelve a pedirte un código en el siguiente inicio de sesión.
- **Marcada:** este navegador, en este dispositivo, omite el código durante 7 días desde ese momento. Otro navegador o dispositivo seguirá pidiéndolo.

Cerrar sesión termina la confianza en ese navegador. **Ajustes → Seguridad → Navegadores de confianza** muestra cada navegador recordado, cuándo se añadió y cuándo vence. **Olvidar** elimina uno; **Olvidar todos** los elimina todos. Desactivar el inicio en dos pasos también los elimina.

Un navegador recordado sigue pidiendo un código para mostrar un token de acceso o el secreto de un webhook, cambiar la configuración de dos pasos y entrar en el panel de administración.

## ¿En qué otros momentos se pide un código? \{#where-else-does-it-ask-for-a-code}

- **Al volver a mostrar un token o secreto:** consulta [Tokens de acceso](./authentication.md#can-i-see-a-token-again).
- **Al aprobar una nueva aplicación o asistente de IA** en la página de consentimiento: consulta [Asistentes de IA](./mcp.md#what-does-the-consent-page-ask).
- **Al desactivar el inicio de sesión en dos pasos:** necesitas un código actual para quitarlo.

## ¿Es obligatorio para administradores? \{#do-admins-have-to-use-it}

Sí. Nadie puede abrir el [panel de administración](../admin.md) sin introducir un código en esa sesión. Un navegador recordado no basta.
