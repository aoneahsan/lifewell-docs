---
title: Salud
description: Seguimientos, medicamentos, alimentos, ejercicio y condiciones. Una de las áreas alrededor de las personas de tu vida, disponible si la quieres usar, sin ser el centro de LifeWell.
keywords: [salud en lifewell, seguimiento de salud, registro de medicamentos, registro de síntomas, signos vitales]
topics: [domains, health]
sidebar_position: 6
---

# Salud \{#health}

Esta área está disponible si quieres utilizarla. LifeWell reúne a las personas y los momentos de tu vida; la salud es una parte de lo que puede ayudarte, no el propósito principal de la aplicación.

## Seguimientos \{#trackers}

`/health/water` y las pantallas relacionadas muestran **un mismo almacén** de datos. Un vaso registrado desde el panel, desde `/health/water` o desde `/tracking` es la misma fila. No existe otra copia que pueda dejar de coincidir.

Cada seguimiento define una unidad, una forma de resumir el día y límites razonables. Hay dos comportamientos:

- **Sumar:** agua, pasos y calorías. Otra entrada del mismo día es una medición adicional.
- **Usar el último valor:** peso, presión arterial, sueño y estado de ánimo. Otra entrada del mismo día corrige la anterior.

La base de datos aplica esa distinción independientemente de la pantalla utilizada.

Las pantallas con fecha abarcan agua, pasos, peso, IMC, presión arterial, glucemia, colesterol, frecuencia cardíaca, sueño, siestas, caminatas y vitaminas diarias.

**Tu día se calcula según tu dispositivo.** La fecha de una entrada no viene del reloj del servidor. Si registras agua a las dos de la mañana en UTC+5, corresponde al día actual; tu día no se reinicia a las siete de la tarde.

## Medicamentos \{#medications}

`/health/medications` guarda los medicamentos que tomas, sus dosis y horarios y lo que tomaste realmente. `/health/child-medication` organiza los de un niño por separado, para que una dosis pediátrica no aparezca en la misma lista que una de adulto.

Los medicamentos pueden generar [recordatorios](../features/reminders.md).

## Alimentos y comidas \{#food-and-meals}

Entra por `/diet-plan`. Allí encontrarás:

- **Comidas:** qué comiste y cuándo.
- **Comidas guardadas:** las que repites con frecuencia para registrarlas con un toque.
- **Recetas** y **planificador de comidas**.
- **Ventana de ayuno**, si utilizas una.
- **Porciones** y **análisis nutricional**.
- **[Lista de compras](../features/shopping-list.md)** que el planificador puede completar.

## Ejercicio \{#exercise}

`/exercise` registra sesiones: actividad, duración e intensidad. `/health/workout-timer`, `/health/stretching`, `/health/yoga` y `/health/kegel` ofrecen sesiones guiadas.

## Condiciones \{#conditions}

Entra por `/health/symptoms`. Una condición es un dato permanente: qué es y desde cuándo. Los episodios tienen fecha y se guardan bajo ella. También se registran alergias, asma, artritis, migrañas, vacunas, resultados de laboratorio y antecedentes médicos.

Esa separación permite entender los registros después: una lista de episodios sin la condición correspondiente dice muy poco.

## Lo que esta área no hace \{#what-this-area-is-not}

No te puntúa, clasifica ni exige mantener una racha. No hay una nota sobre diez ni una insignia por empezar. Un espacio en blanco sigue siendo parte de un registro válido.

## Llevarte tus datos \{#taking-it-out}

Todo aparece en [la exportación](../your-data/export.md). Las tablas de salud son las que dan forma al PDF, un documento que puedes imprimir y entregar a un profesional sanitario.
