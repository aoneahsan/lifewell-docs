---
title: Contribuir a esta documentación
description: "Cómo corregir una página, qué pertenece aquí y la regla principal: esta documentación solo puede describir lo que el producto hace de verdad."
keywords: [contribuir a documentación lifewell, editar documentación, repositorio de documentación]
topics: [about]
sidebar_position: 3
---

# Contribuir a esta documentación \{#contributing-to-these-docs}

Esta documentación está en un [repositorio público](https://github.com/aoneahsan/lifewell-docs). El código
de la aplicación no es público.

## Corregir una página \{#correcting-a-page}

Cada página tiene abajo un enlace **Editar esta página**. Abre el archivo en GitHub, donde puedes proponer
un cambio sin clonar el repositorio.

Las correcciones pequeñas —una dirección equivocada, una versión desactualizada, una frase que dejó de ser
cierta— suelen ser las más útiles. No necesitan una conversación previa.

## La regla principal \{#the-one-rule}

**Una página solo puede describir lo que el producto hace de verdad.**

Parece evidente, pero es la razón por la que reescribimos esta documentación para la versión 3.0.0. La
versión anterior hablaba de una aplicación iOS ya retirada, una extensión que entonces no se publicaba,
una base de datos que la aplicación ya no usaba y un conjunto de análisis opuesto al real. Se escribió de
buena fe, pero ya no era cierto.

Por eso:

- Si algo no está construido, la página dice **no está construido**, no *llegará pronto*.
- Si está construido pero desactivado, la página explica cuál es su estado.
- Si una cifra puede comprobarse, sale del código y no de la memoria.
- Cada límite aparece junto a la afirmación que limita, en el mismo párrafo. Una advertencia tres secciones
  más adelante es una advertencia que casi nadie lee.

## La voz del sitio \{#voice}

La documentación en inglés se dirige a la segunda persona, evita las contracciones, no usa signos de
exclamación y sigue la ortografía británica. Sus títulos usan mayúsculas de oración.

Una frase breve declara el hecho; otra más larga lo matiza o deja espacio para decidir. Ese ritmo importa
más que memorizar una guía de estilo.

Evita promesas grandilocuentes y cualquier frase que trate un hueco en el registro de alguien como un fracaso.

## Ejecutar el sitio localmente \{#running-it-locally}

```bash
yarn install
yarn build
yarn serve
```

La compilación comprueba los enlaces: uno interno que no funciona hace fallar el proceso.

## Qué no pertenece aquí \{#what-does-not-belong-here}

- Datos que puedan identificar a una persona, incluidas cuentas reales, correos reales o capturas con el
  registro de alguien.
- Credenciales de cualquier clase. Este repositorio es público.
- Planes internos, hojas de ruta o listas de tareas.
