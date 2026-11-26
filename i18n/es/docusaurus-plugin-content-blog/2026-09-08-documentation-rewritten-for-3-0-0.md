---
slug: documentation-rewritten-for-3-0-0
title: La documentación estaba equivocada, así que la reescribimos
authors: [ahsan]
tags: [announcement, lifewell, docs, release]
description: LifeWell 3.0.0 se reconstruyó sobre una nueva base de datos y la documentación anterior describía un producto que ya no existía. Reescribimos cada página a partir del código.
---

La versión anterior de este sitio hablaba de una aplicación para iOS que ya se había retirado, de una
extensión de navegador que entonces no se publicaba, de una base de datos que la aplicación ya no usaba y
de un conjunto de herramientas de análisis casi opuesto al real.

Nadie escribió aquello para engañar. La información era cierta al publicarse; el producto cambió y nadie
volvió a revisar las páginas.

{/* truncate */}

## Qué estaba mal

Hay tres afirmaciones que conviene señalar porque alguien las leyó y confió en ellas.

**`/feed` se describía como un muro social.** Es la página pública de las publicaciones recientes del blog.
LifeWell no tiene un muro social y nunca lo tuvo.

**Se decía que Firebase Analytics estaba prohibido y se había reemplazado.** Google Analytics 4 *es* la
propiedad de análisis de Firebase: una misma propiedad descrita de dos formas. Funciona junto a Amplitude,
Clarity y Sentry, no en lugar de ellos. Quien quisiera saber qué registra la aplicación recibía una respuesta
contraria a la realidad.

**Se decía que las actualizaciones inalámbricas «todavía no estaban integradas».** Eso era correcto cuando
reescribimos la documentación de la versión 3.0.0. LifeWell integra ahora paquetes firmados de Native Update
en instalaciones Android compatibles. La página actual de [Android](/platforms/android#over-the-air-updates)
explica qué verifica la aplicación y qué sigue necesitando una compilación nativa.

Además, sesenta y cinco páginas describían un modelo de documentos que la reconstrucción sustituyó por
Postgres. Treinta y cinco mencionaban una versión para iOS retirada el 16 de julio de 2026. Toda una sección
explicaba cómo instalar y usar una extensión que no existía entonces.

## Qué hicimos al respecto

Eliminamos todas las páginas. Escribimos las nuevas a partir del código: el formato de exportación proviene
del registro de tablas que lee el propio exportador; los límites de los planes, del registro de planes; el
mínimo de Android, del archivo de compilación; y las funciones de administración, de su superficie derivada.

Cuando algo solo estaba construido a medias, la página decía cuál era la parte disponible. Había siete
casos, reunidos en [Qué cambió en la versión 3.0.0](/about/changelog).

Comprobamos cada cifra que podía verificarse. La documentación anterior decía que Android 7.0 era el mínimo.
El archivo de compilación fijaba el nivel 28, es decir, Android 9.

## La regla que sigue este sitio

**Una página solo puede describir lo que el producto hace de verdad.**

No lo que está a punto de hacer, lo que promete una hoja de ruta ni lo que sonaría mejor. Si algo no está
construido, la página lo dice; no anuncia que «llegará pronto». Si un control hace menos de lo que parece,
la limitación se explica junto al control, no tres secciones después.

Es una norma más difícil de mantener de lo que parece. El problema no suele ser mentir: es escribir algo
cierto y no volver a revisarlo cuando cambia el producto. Por eso las páginas que describen un comportamiento
indican dónde vive en el código. La página del formato de exportación se genera desde el mismo registro que
lee la función de exportar; así no puede describir un archivo que el producto no produce.

## Adónde fueron las direcciones antiguas

Todas las direcciones bajo `/docs/**` redirigen ahora. La documentación pasó a la raíz del sitio. Por eso
`/reference/export-format`, la dirección que la aplicación enlaza desde la pantalla de exportación, funciona.

Una página sobre algo que ya no existe dirige a una explicación actual, en vez de mostrar un error 404. Las
guías antiguas de la extensión llegan a [Extensión para navegador](/platforms/browser-extension), donde se
explica que los paquetes de Chrome y Firefox están construidos y cuál es su estado de publicación. Las
páginas de iOS llegan a [iOS](/platforms/ios), con la fecha en que se retiró y la condición para que vuelva.
