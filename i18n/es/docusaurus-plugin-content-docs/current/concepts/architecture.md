---
title: Arquitectura
description: Una aplicación estática de página única sobre Postgres, con funciones perimetrales solo cuando el navegador no debe guardar algo. Qué se ejecuta dónde y por qué no hay servidor propio.
keywords: [arquitectura de lifewell, supabase, react, vite, capacitor, funciones perimetrales, spa]
tags: [concepts, architecture]
sidebar_position: 1
---

# Arquitectura \{#architecture}

Es una **aplicación estática de página única**. La compilación produce una carpeta de archivos; esa carpeta es todo lo que se publica. No hay un servidor Node en funcionamiento.

## Estructura \{#the-shape}

```text
Navegador / WebView de Android
        │
        ├──────────────► Postgres, mediante PostgREST     (lecturas y escrituras habituales)
        │                 · seguridad por filas
        │                 · permisos por columna
        │                 · límite estricto de 50 filas por lista
        │
        └──────────────► Funciones perimetrales en Deno  (operaciones que requieren protección)
                          · dos formularios públicos protegidos contra bots
                          · resolución de enlaces compartidos de solo lectura
                          · intercambio del token de Google Drive
                          · estimaciones de IA y tu propia clave de IA
                          · exportaciones programadas
                          · verificación de compras de Play
                          · acciones administrativas sobre usuarios
```

## La regla que decide dónde se ejecuta algo \{#the-one-rule-that-decides-which}

> Para los datos habituales, el navegador consulta directamente la base de datos. Se utiliza una función perimetral **solo** cuando la operación necesita algo que el navegador nunca debe guardar: un secreto, privilegios elevados o una comprobación independiente de lo que escribió el usuario.

Las demás consultas se ejecutan con tu identidad y con las reglas descritas en [Privacidad y seguridad](./privacy-and-security.md).

## Por qué la protección está en la base de datos \{#why-the-boundary-sits-in-the-database}

Si la autorización vive en el código de la aplicación, cada llamada debe acordarse de aplicarla. Con seguridad por filas, la *base de datos* aplica el límite: una consulta incorrecta no devuelve las filas de otra persona.

Por eso la aplicación en ejecución tampoco usa un ORM. El esquema se define en TypeScript y se convierte en migraciones fuera de línea. La aplicación consulta mediante la biblioteca cliente como la persona que inició sesión, y se aplican las reglas de la base.

## Componentes técnicos \{#what-it-is-built-from}

| Capa | Elección |
|---|---|
| Interfaz | React 19 |
| Compilación | Vite 8, sin mapas de código fuente en producción |
| Rutas | Rutas basadas en archivos con parámetros de búsqueda tipados |
| Estado del servidor | TanStack Query |
| Estado del cliente | Zustand; no se usa React context para el estado de la aplicación |
| Formularios | React Hook Form y Zod; los mismos esquemas Zod validan las funciones perimetrales |
| Accesibilidad | React Aria Components gestiona el DOM, ARIA y el teclado de cada control |
| Estilos | Tailwind v4, configurado en CSS |
| Gráficos | D3 |
| Texto enriquecido | Tiptap; no se usa un cuadro de texto simple |
| Almacenamiento local | Una sola biblioteca puede acceder al almacenamiento del navegador |
| Android | Capacitor 8 |

## Por qué se dejó Firebase \{#not-firebase}

La aplicación 2.x usaba Firebase. Uno de los problemas que motivó la reconstrucción fue que agotó la cuota gratuita de lecturas y dejó de funcionar durante un día.

Compartir partes de un registro con una persona concreta es otro motivo. Postgres resuelve ese acceso por filas dentro de la base de datos. En el almacén de documentos anterior, las reglas debían mantenerse coordinadas con cada consulta.

## Estado en la URL \{#url-state}

Los cuadros, pestañas, filtros, orden, páginas y términos de búsqueda se guardan en la dirección web, no solo en el estado de un componente. Al actualizar la página conservas tu lugar. Un enlace lleva a la misma vista que estabas viendo.
