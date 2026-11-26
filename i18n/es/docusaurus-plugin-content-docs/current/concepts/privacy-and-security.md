---
title: Privacidad y seguridad
description: "Qué sale de tu dispositivo y qué no: acceso sin contraseña, reglas de base de datos por fila, análisis sin datos personales, permiso de contactos, imágenes de identificaciones y límites de lo que LifeWell afirma."
keywords: [privacidad de lifewell, privacidad de datos de salud, seguridad por filas, protección de datos de análisis, seguridad de datos, permiso de contactos, plazas familiares]
tags: [concepts, privacy]
sidebar_position: 3
---

# Privacidad y seguridad \{#privacy-and-security}

La explicación completa, incluidas las partes que una página promocional podría omitir.

## Inicio de sesión \{#sign-in}

Solo con Google. No hay campo de contraseña, así que **nunca vemos ni guardamos tu contraseña**.

En la web, la sesión se conserva en el almacenamiento del navegador; en Android, en el almacén de claves del sistema. Cerrar sesión en todas partes termina todas las sesiones, no solo la del dispositivo que tienes delante.

## Cómo se impide que otra cuenta lea tus datos \{#what-stops-another-account-reading-your-record}

Todas las tablas tienen seguridad por filas. Cada lectura se ejecuta **con tu identidad**. No hay una clave administrativa en el navegador ni una vía para que la aplicación eluda tus permisos.

Tres detalles muestran dónde suelen fallar estas protecciones:

- **Una lista se filtra, no se rechaza por completo.** La seguridad por filas de Postgres devuelve menos filas en vez de un error. Si falta el filtro de propietario, la consulta puede parecer correcta. Por eso, cada lista filtra por la columna que utiliza la regla.
- **Las reglas se prueban con datos reales.** Una consulta con cero resultados no demuestra la protección. Las cuentas de prueba tienen filas propias: una con noventa días de mediciones y otra con catorce; ninguna es administradora.
- **Todas las listas tienen límite.** Una lectura devuelve veinte filas inicialmente y hasta cincuenta, con el máximo aplicado por la base de datos. No hay consultas que recorran toda una tabla.

## Qué recogemos sobre el uso \{#what-we-collect-about-how-you-use-it}

Se utilizan cuatro servicios; cada uno permanece desactivado si falta su clave:

| Servicio | Finalidad |
|---|---|
| Google Analytics 4 | Saber qué páginas se utilizan |
| Amplitude | Saber qué acciones se realizan |
| Microsoft Clarity | Reproducir sesiones para detectar problemas de interfaz |
| Sentry | Registrar errores |

**Ninguno recibe el contenido de tus registros.** Una lista de propiedades permitidas protege cada evento: una propiedad solo pasa si el catálogo la declara para ese evento *y* su valor cumple el tipo esperado. Una cadena debe ser una etiqueta corta, por lo que no pasa una frase, dirección de correo o nota. Una cifra debe ser un entero pequeño y no negativo; una medición no puede pasar por un conteo.

Los filtros se comprueban enviándoles identificadores reales y verificando que no sobrevive ninguno. Leer solamente el código de un filtro no detectaría una regresión.

La reproducción de sesiones merece especial atención porque registra la interfaz, no un evento aislado. Los elementos sensibles de la aplicación están marcados para ocultarse en la grabación.

:::note[Firebase Analytics no está prohibido; antes esta página afirmaba lo contrario]
Una versión anterior de esta documentación decía que Firebase Analytics estaba prohibido y había sido reemplazado. Era incorrecto. Google Analytics 4 **es** la propiedad de análisis de Firebase: una misma propiedad con dos formas de referirse a ella. Funciona junto con Amplitude, Clarity y Sentry. Los cuatro conforman las herramientas de análisis, y la afirmación anterior informaba mal sobre el funcionamiento del producto.
:::

## Permisos \{#permissions}

[`/permissions`](https://lifewell.aoneahsan.com/permissions) enumera los permisos declarados por la aplicación y explica su función. La lista se comprueba contra el manifiesto combinado de Android, no solo contra lo que planeamos solicitar: los complementos pueden añadir permisos sin que resulte evidente.

No se solicita acceso a SMS ni al registro de llamadas.

### Contactos \{#contacts}

Solo se solicita cuando tocas **Contactos** junto a un número de teléfono. Android combina la lectura y modificación de contactos en un permiso, por lo que se declaran ambas capacidades. LifeWell únicamente lee el contacto que eliges, su nombre y números, y conserva el número seleccionado. Nunca añade, modifica ni elimina contactos. Tu agenda no se sube, busca ni guarda. Si deniegas el permiso, puedes escribir el número.

## Una foto de la identificación de otra persona \{#a-picture-of-somebody-elses-identity-card}

Las fotos del frente y reverso de una identificación que añades al registro de una persona se guardan cifradas en LifeWell, no en tu Google Drive. Es el único tipo de imagen que funciona así, porque un administrador debe poder abrirla para comprobarla. Solo los administradores pueden verla y cada acceso queda registrado. Tú ves que está guardada, su tamaño y fecha, pero no la imagen. La persona identificada, tus contactos y cualquier enlace compartido tampoco pueden verla. Quitarla, borrar a esa persona o eliminar tu cuenta la retira del almacenamiento activo; las copias anteriores de los respaldos manuales cifrados permanecen hasta su rotación. Consulta [Personas](../domains/people.md#identity-card-pictures).

## Las plazas Family no comparten datos \{#family-seats-share-nothing}

Una plaza de un plan Family cambia el plan que utilizas y nada más. Quien paga no puede ver tus registros, personas ni archivos; tú tampoco puedes ver los suyos. Solo ve que ocupas una plaza y la fecha en que la recibiste. Consulta [Plazas Family](../plans.md#family-seats).

## Lo que LifeWell no afirma \{#what-lifewell-does-not-claim}

- **No tiene cifrado de extremo a extremo.** El proveedor de la base de datos cifra tus registros en tránsito y en reposo, pero su base puede leerlos. Afirmar lo contrario sería falso.
- **No es un dispositivo médico** y su contenido no constituye un diagnóstico.
- **No integra una red publicitaria.** No se venden datos sobre ti ni se incorpora código publicitario de terceros.
- **No permite recuperar la base a un momento concreto.** Las copias se hacen manualmente y se comprueban restaurándolas. Tu copia es la [exportación](../your-data/export.md), disponible con cualquier plan.

## Obtener o eliminar tus datos \{#getting-it-out-or-getting-rid-of-it}

[Exportar todo](../your-data/export.md) · [Eliminar tus datos](../your-data/delete.md) · [Dónde viven tus datos](../your-data/where-it-lives.md).

Las páginas legales son [`/privacy`](https://lifewell.aoneahsan.com/privacy) y [`/terms`](https://lifewell.aoneahsan.com/terms). Están escritas para entenderse.
