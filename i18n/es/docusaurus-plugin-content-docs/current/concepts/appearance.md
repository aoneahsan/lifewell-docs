---
title: Apariencia
description: Un icono y un panel para tema, color, redondez, densidad, tamaño de texto, tipografía, superficies y movimiento. Todo se aplica antes de mostrar la página.
keywords: [tema lifewell, modo oscuro, ajustes de apariencia, tamaño del texto, movimiento reducido]
tags: [concepts, appearance]
sidebar_position: 5
---

# Apariencia \{#appearance}

Un icono en la barra superior. Un panel. Todos los ajustes de apariencia reunidos allí, en todas las
pantallas, tanto si iniciaste sesión como si no.

## Los ocho ajustes \{#the-eight-settings}

| Ajuste | Qué cambia |
|---|---|
| Tema | Claro, oscuro o según el sistema |
| Color | El color de acento y los tonos neutros que lo rodean |
| Redondez | Cuánto se redondean las esquinas |
| Densidad | El espacio que ocupa cada fila |
| Tamaño de texto | Toda la escala tipográfica, no solo el cuerpo |
| Tipografía | La familia de letra de la aplicación |
| Estilo de superficie | Cómo se separan los paneles del fondo |
| Movimiento | Completo o reducido |

## Antes de mostrar la primera pantalla \{#applied-before-the-first-paint}

Los ajustes se leen y se aplican a la página **antes de que se muestre nada**. Así no aparece por un instante
el tema equivocado mientras arranca la aplicación: el tema ya está decidido.

Por eso se guardan en un solo lugar y se aplican desde una misma tabla, no desde componentes aislados. Un
color o una redondez fijados directamente en un componente quedan fuera del alcance de este panel. El control
único existe para evitarlo.

## Movimiento \{#motion}

**El movimiento nunca es la única forma de comunicar algo.** Reducirlo elimina las animaciones sin quitar información.

El ajuste guarda un valor resuelto, no la palabra *sistema*. Importa porque una regla general de
`prefers-reduced-motion` podría imponerse sobre la elección dentro de la aplicación. Una persona cuyo
sistema pide menos movimiento aún puede elegir movimiento completo aquí.

## Dónde se guarda \{#where-it-is-kept}

Tus elecciones se conservan en este dispositivo. Si activas **Llevar mi apariencia a otros dispositivos**
en el mismo panel, también se guardan en tu cuenta y pueden aparecer en otro dispositivo donde hayas iniciado
sesión. Desactívalo si prefieres una apariencia distinta en el teléfono y la computadora: cada uno conservará
su propia elección.

## Contraste y tamaño de los controles \{#contrast-and-targets}

Cada pantalla se construye con contraste AA, controles táctiles de al menos 44 píxeles, foco visible, uso
completo con teclado y un diseño que se adapta desde 320 hasta 1920 píxeles de ancho.
