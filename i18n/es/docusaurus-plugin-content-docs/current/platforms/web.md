---
title: Web
description: La versión web es la versión de referencia; incluye todo lo que hace LifeWell salvo dos funciones que Android entrega mediante el sistema operativo.
keywords: [aplicación web lifewell, navegadores compatibles, aplicación web progresiva, pwa]
tags: [platforms, web]
sidebar_position: 1
---

# Web \{#web}

[lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) abre LifeWell en un navegador. La aplicación Android comparte la cuenta y los registros; las notificaciones del dispositivo y la forma de compartir dependen de la plataforma.

## Navegadores \{#browsers}

Versiones actuales de Chrome, Edge, Firefox y Safari. Un navegador demasiado antiguo para ejecutar la
aplicación lo indica al iniciarse en vez de mostrar una pantalla rota.

## Lo que no tiene la versión web \{#what-the-web-build-does-not-have}

Algunas acciones dependen del navegador y del sistema operativo:

- **Recordatorios locales que llegan con la aplicación cerrada.** Android programa los avisos compatibles de eventos y bienestar cuando se permiten las notificaciones. Una pestaña cerrada no puede entregar esos avisos del dispositivo; al abrir la lista de medicamentos, las dosis pendientes aparecen en la bandeja de LifeWell.
- **Panel de compartir del sistema.** Al compartir una [lista de compras](../features/shopping-list.md) en la web, se abre la vista de LifeWell con una acción clara para copiar, en lugar del panel del sistema.

La misma cuenta y los registros guardados están disponibles en ambas plataformas. Consulta la guía de cada función para conocer sus permisos y cómo llegan los avisos.

## Añadirla a la pantalla de inicio \{#adding-it-to-a-home-screen}

Muchos navegadores permiten instalar el sitio para tener un icono y una ventana sin barra de direcciones.
No se descarga nada adicional ni cambia la manera en que funciona la aplicación: es una función del navegador.

## Sin conexión \{#offline}

La aplicación web bloquea la página actual cuando se corta la conexión. Si activaste **Seguir trabajando sin
conexión**, puedes elegir guardar temporalmente algunas entradas rápidas en este dispositivo. El resto del
registro sigue necesitando el servidor. La aplicación no guarda páginas para abrirlas sin conexión. Consulta
[Sin conexión y sincronización](../concepts/offline-and-sync.md).

## Las páginas públicas \{#the-public-pages}

Algunas direcciones funcionan sin cuenta: las [herramientas](../features/tools.md), el buscador de nombres
para bebés, el directorio de donantes de sangre, el blog, las páginas de funciones y las cuatro páginas
legales. Son páginas HTML reales; no esperan a que JavaScript las construya después de cargar. Un buscador
o rastreador de IA lee las mismas palabras que tú.
