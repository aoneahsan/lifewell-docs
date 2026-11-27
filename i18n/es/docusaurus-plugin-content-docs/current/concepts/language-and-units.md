---
title: Idioma y unidades
description: LifeWell ofrece diez idiomas en la aplicación, la documentación y la extensión para navegador. Tus unidades se eligen por separado.
keywords: [idioma lifewell, traducción, i18n, unidades métricas imperiales, es-419]
topics: [concepts, i18n, accessibility]
sidebar_position: 6
---

# Idioma y unidades \{#language-and-units}

## Elige un idioma \{#choose-a-language}

LifeWell ofrece inglés, chino simplificado, hindi, español, árabe, francés, portugués de Brasil, ruso,
japonés y urdu. Elige uno en el encabezado. El árabe y el urdu también cambian la dirección de lectura de
la página, de derecha a izquierda.

Tu elección sigue tu cuenta de LifeWell al iniciar sesión en otro dispositivo o conectar la extensión del
navegador. No cambia las unidades que elegiste para tus lecturas. La documentación y las páginas públicas
tienen direcciones propias por idioma, para que puedas compartir directamente la versión que alguien lee.

Dos detalles, por si alguna vez lees los archivos de traducción:

- **Las claves describen el significado, no las palabras inglesas.** Cambiar la redacción no rompe el enlace.
- **Ninguna frase se arma a partir de fragmentos traducidos.** Una clave contiene la frase entera e inserta
  sus valores, porque el orden de las palabras cambia entre idiomas.

## Las unidades son una preferencia, no un idioma \{#units-are-a-preference-not-a-language}

El sistema métrico o imperial es **tu elección** en el perfil y se guarda por separado del idioma. Alguien
en el Reino Unido puede preferir stones; otra persona, kilogramos. Nada de eso se deduce del idioma de la interfaz.

**El registro guarda una unidad canónica y convierte al mostrarla.** Eso tiene dos consecuencias:

- Cambiar tu preferencia vuelve a mostrar el historial en otras unidades sin reescribirlo.
- Cada entrada conserva la unidad con la que se escribió. Cambiar la preferencia no puede reinterpretar en
  silencio doce años de lecturas.

## Fechas, números y primer día de la semana \{#dates-numbers-and-the-first-day-of-the-week}

Las fechas y los números siguen el idioma que elegiste mediante el soporte internacional del dispositivo.
Una fecha puede leerse como *8 September 2026* en inglés y con otro orden en español. El primer día de la
semana es un ajuste aparte del dispositivo; cambiar de idioma no lo mueve sin preguntarte.

El día al que pertenece una entrada lo determina **tu dispositivo**, no un servidor. Consulta
[El modelo de información](./data-model.md#the-date-comes-from-your-device).

## Accesibilidad \{#accessibility}

La interfaz utiliza React Aria Components para el manejo del teclado y la conexión con lectores de pantalla
de cada control interactivo, en vez de dejar esa tarea a cada página.

Los mínimos de cada pantalla son contraste AA, foco visible, uso completo con teclado, controles táctiles de
al menos 44 píxeles, un diseño de 320 a 1920 píxeles de ancho y un
[ajuste de movimiento reducido](./appearance.md#motion) que elimina animaciones sin quitar información.

Los gráficos incluyen una tabla legible con los mismos números. Nunca son la única forma de consultarlos.
