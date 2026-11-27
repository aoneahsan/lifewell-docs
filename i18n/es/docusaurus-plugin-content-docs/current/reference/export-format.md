---
title: Formato de los archivos de exportación
description: "Contenido de una exportación de LifeWell, campo por campo y tabla por tabla: encabezado JSON, archivo CSV, exclusiones del PDF y datos ausentes de todos los formatos."
keywords: [formato de exportación de lifewell, esquema json exportado, exportación csv, importar datos de lifewell, portabilidad de datos]
topics: [reference, export, your-data]
sidebar_position: 1
---

# Formato de los archivos de exportación \{#the-export-file-format}

Aquí se describe el archivo generado por [Exportar todos tus datos](../your-data/export.md), para que otra aplicación pueda leerlo sin tener que adivinar su estructura.

No es un formato exclusivo de LifeWell: el JSON es estándar y el archivo comprimido contiene CSV comunes.

## Los tres archivos \{#the-three-files}

| Formato | Nombre | Tipo de archivo | ¿Completo? |
|---|---|---|---|
| JSON | `lifewell-export-<YYYY-MM-DD>.json` | `application/json` | **Sí** |
| CSV | `lifewell-export-<YYYY-MM-DD>.zip` | `application/zip` | **Sí** |
| PDF | `lifewell-export-<YYYY-MM-DD>.pdf` | `application/pdf` | **No**; consulta más abajo |

La fecha corresponde a tu día local, no al del servidor. El nombre mantiene caracteres ASCII y la misma estructura en todos los idiomas para que puedas encontrarlo en la carpeta de descargas.

## El documento JSON \{#the-json-document}

Es un objeto con un encabezado breve y una clave por tabla. Cada clave contiene una lista de filas.

```json
{
  "exportedAt": "2026-09-08T11:04:22.417Z",
  "schema": 1,
  "range": { "from": "2026-01-01", "to": "2026-09-08" },
  "rowCap": 5000,
  "truncated": ["metric_entries"],
  "profile": { "id": "…", "display_name": "…" },
  "conditions": [],
  "medications": [ { "…": "…" } ]
}
```

| Campo del encabezado | Tipo | Significado |
|---|---|---|
| `exportedAt` | Cadena ISO 8601 en UTC | Momento de creación del archivo |
| `schema` | Número | Versión del formato; actualmente **1** |
| `range.from` / `range.to` | Fecha ISO o `null` | Período elegido; `null` indica que ese extremo queda abierto |
| `rowCap` | Número | Máximo aplicado por tabla: **5000** |
| `truncated` | Lista de nombres de tablas | Tablas que llegaron al máximo; vacía si no se recortó ninguna |
| `profile` | Objeto o `null` | Tu fila de perfil completa, en vez de una lista de una fila |

Tres detalles útiles para quien programe un lector:

- **Una tabla sin filas se representa como lista vacía, no como clave ausente.** `"meals": []` comunica que la tabla se incluyó; una clave faltante dejaría la duda.
- **`truncated` indica si el archivo es parcial.** Consúltalo antes de concluir que alguien no tiene más historial.
- **El JSON usa sangría de dos espacios.** Puedes abrirlo y buscar dentro de él; una sola línea de ocho megabytes sería difícil de manejar en un editor.

## El archivo CSV \{#the-csv-archive}

Es un ZIP con **un archivo `.csv` por tabla**, llamado `<table>.csv`. Sus columnas son las de la tabla original.

| Detalle | Valor |
|---|---|
| Finales de línea | CRLF según RFC 4180 |
| Codificación | UTF-8 **con marca de orden de bytes** |
| Entrecomillado | RFC 4180: comillas duplicadas; los campos con `"`, `,`, CR o LF van entre comillas |
| Celda vacía | `null` y `undefined` se convierten en celda vacía |
| Valores anidados | Se conservan como JSON dentro de una celda, sin distribuirse entre filas |

Dos decisiones deliberadas que podrían parecer errores:

- **Una tabla sin filas tiene su propio archivo** con solo los encabezados. Si falta el archivo no se puede distinguir una tabla vacía de una exportación fallida.
- **Las celdas cuyo texto empieza por `=`, `+`, `-`, `@`, tabulación o retorno de carro reciben un apóstrofo al principio.** Las hojas de cálculo interpretan esos caracteres como fórmulas. Esta protección es para quien abra el archivo que le entregues, a menudo un profesional de salud. Si lo procesas con código, puedes quitar el apóstrofo inicial.

La marca de orden de bytes permite que Excel en Windows reconozca UTF-8. Sin ella, puede interpretar los nombres con acentos usando otra codificación y mostrarlos mal.

## Todas las tablas del archivo \{#every-table-in-the-file}

Hay sesenta y cinco tablas agrupadas por área.

- **Período:** las filas *con fecha* respetan el intervalo elegido. Las *permanentes* siempre se incluyen para que una dosis no aparezca sin su medicamento.
- **En el PDF:** *Listado completo* imprime las filas; *Solo cantidad* imprime la cifra y el período, pero no las filas; *No aparece* significa que el PDF no incluye esa tabla.

### Salud \{#health}

| Tabla | Qué guarda | Período | En el PDF |
|---|---|---|---|
| `conditions` | Condiciones | Permanente | Listado completo |
| `condition_episodes` | Episodios | Con fecha | Listado completo |
| `medications` | Medicamentos | Permanente | Listado completo |
| `medication_doses` | Dosis de medicamentos | Con fecha | Solo cantidad |
| `metric_entries` | Mediciones de seguimiento | Con fecha | Solo cantidad |
| `user_metric_settings` | Ajustes de seguimiento | Permanente | Listado completo |
| `metric_definitions` | Tipos de seguimiento | Permanente | Listado completo |
| `meals` | Comidas | Con fecha | Solo cantidad |
| `saved_meals` | Comidas guardadas | Permanente | No aparece |
| `saved_meal_items` | Elementos de comidas guardadas | Permanente | No aparece |
| `eating_windows` | Ventana de ayuno | Permanente | Listado completo |
| `shopping_lists` | Listas de compras | Permanente | No aparece |
| `shopping_list_items` | Artículos de las listas de compras | Permanente | No aparece |
| `movement_sessions` | Sesiones de ejercicio | Con fecha | Solo cantidad |
| `wellness_breaks` | Pausas de bienestar | Con fecha | No aparece |
| `wellness_nudges` | Avisos de bienestar | Permanente | No aparece |

### Mente \{#mind}

| Tabla | Qué guarda | Período | En el PDF |
|---|---|---|---|
| `journal_entries` | Entradas del diario | Con fecha | No aparece |
| `mind_sessions` | Sesiones guiadas | Con fecha | Solo cantidad |

### Etapas de la vida \{#life-stages}

| Tabla | Qué guarda | Período | En el PDF |
|---|---|---|---|
| `cycle_days` | Días del ciclo | Con fecha | Solo cantidad |
| `babies` | Niños | Permanente | Listado completo |
| `baby_growth` | Mediciones de crecimiento | Permanente | Listado completo |
| `baby_logs` | Registros del bebé | Con fecha | Solo cantidad |
| `baby_milestones` | Hitos | Permanente | Listado completo |

### Personas \{#people}

| Tabla | Qué guarda | Período | En el PDF |
|---|---|---|---|
| `people` | Personas | Permanente | Listado completo |
| `person_edges` | Relaciones | Permanente | No aparece |
| `connections` | Conexiones | Permanente | Listado completo |
| `connection_prefs` | Ajustes de conexiones | Permanente | No aparece |
| `share_links` | Enlaces compartidos | Permanente | Listado completo |
| `share_submissions` | Datos enviados mediante un enlace | Permanente | No aparece |
| `community_members` | Grupos a los que te uniste | Permanente | No aparece |
| `posts` | Publicaciones de la comunidad | Permanente | Listado completo |
| `post_replies` | Respuestas de la comunidad | Permanente | No aparece |
| `blocks` | Personas bloqueadas | Permanente | No aparece |
| `chats` | Conversaciones | Permanente | No aparece |
| `chat_members` | Participantes de cada conversación | Permanente | No aparece |
| `messages` | Mensajes que enviaste | Permanente | No aparece |
| `message_hides` | Mensajes que ocultaste | Permanente | No aparece |
| `professionals` | Tu ficha profesional | Permanente | Listado completo |
| `professional_claims` | Datos que nos diste sobre ti | Permanente | No aparece |
| `professional_slots` | Horarios que ofreciste | Permanente | No aparece |
| `professional_verifications` | Comprobaciones en registros | Permanente | No aparece |
| `blood_donor_profiles` | Tu ficha de donante de sangre | Permanente | Listado completo |
| `blood_requests` | Solicitudes de sangre que enviaste | Permanente | Listado completo |

### Recuerdos \{#memories}

| Tabla | Qué guarda | Período | En el PDF |
|---|---|---|---|
| `memories` | Recuerdos | Permanente | No aparece |
| `scrapbook_items` | Elementos del álbum | Permanente | No aparece |
| `media_files` | Archivos multimedia | Permanente | Solo cantidad |
| `media_albums` | Álbumes | Permanente | Listado completo |
| `media_people` | Personas que aparecen en una foto | Permanente | No aparece |
| `tags` | Etiquetas | Permanente | Listado completo |
| `taggables` | Elementos etiquetados | Permanente | No aparece |

### Vida diaria \{#everyday}

| Tabla | Qué guarda | Período | En el PDF |
|---|---|---|---|
| `notes` | Notas | Permanente | No aparece |
| `note_folders` | Carpetas de notas | Permanente | No aparece |
| `location_points` | Lugares guardados | Permanente | Solo cantidad |
| `location_settings` | Ajustes de ubicación | Permanente | Listado completo |
| `events` | Calendario | Con fecha | Listado completo |
| `event_checklist_items` | Notas de citas | Permanente | No aparece |
| `reminder_schedules` | Recordatorios | Permanente | Listado completo |

### Tu cuenta \{#your-account}

| Tabla | Qué guarda | Período | En el PDF |
|---|---|---|---|
| `profiles` | Tu perfil | Permanente | Listado completo |
| `notifications` | Mensajes que recibiste | Con fecha | No aparece |
| `export_runs` | Exportaciones anteriores | Permanente | No aparece |
| `export_schedules` | Exportaciones programadas | Permanente | No aparece |
| `plan_grant_requests` | Solicitudes de plan | Permanente | No aparece |
| `referrals` | Personas que invitaste | Permanente | No aparece |
| `referral_rewards` | Recompensas de tus invitaciones | Permanente | No aparece |
| `account_audit` | Cambios de tu cuenta | Con fecha | No aparece |

## Qué omite cada formato \{#what-each-format-leaves-out}

**JSON y CSV son completos.** Ambos contienen las sesenta y cinco tablas anteriores.

**El PDF es parcial deliberadamente.** Es un documento que puedes imprimir, entregar en recepción o dejar sobre una mesa. Incluye lo que probablemente necesite leer un profesional sanitario:

- **Listado completo:** registros permanentes como condiciones, medicamentos, tipos y objetivos de seguimiento, niños, crecimiento, hitos, personas, conexiones, enlaces, calendario, recordatorios y perfil.
- **Solo cantidad:** datos fechados o numerosos como mediciones, dosis, comidas, ejercicios, días del ciclo, registros del bebé, sesiones guiadas, archivos multimedia y lugares. Mostrar cuarenta de cuatro mil filas como si fueran el historial completo sería engañoso. Una tabla listada imprime **como máximo 60 filas**.
- **Ausente del PDF:** diario, recuerdos, notas, álbum personal, mensajes, respuestas de la comunidad y otros textos privados.

:::warning[El diario nunca aparece en el PDF]
Las demás omisiones responden a la utilidad del documento. El diario contiene texto que no debe terminar en una hoja que alguien deja sobre una mesa. Sí aparece en JSON y CSV, archivos que tú abres directamente.
:::

## Qué no contiene ningún formato \{#what-no-format-ever-contains}

Siete elementos están ausentes de **todas** las exportaciones, incluidas las completas:

| Elemento ausente | Motivo |
|---|---|
| **Archivos multimedia originales** | Las imágenes viven en tu Google Drive. La exportación incluye referencia, pie de foto y fecha; LifeWell no guarda sus bytes para entregarlos |
| **Datos compartidos *contigo*** | Son registros de otra persona prestados temporalmente. Si revoca el acceso, una copia en tu archivo no desaparecería |
| **Filas eliminadas** | Eliminar significa eliminar. La exportación no contiene papelera |
| **Registros operativos** | Contadores de límite, avisos cerrados y estados parecidos de la interfaz, no tus registros |
| **Tu contraseña** | No existe una contraseña de LifeWell. Inicias sesión con Google y nunca la vemos ni guardamos |
| **Tu clave de proveedor de IA** | Es una credencial activa guardada cifrada. Incluirla en un archivo de texto podría exponerla |
| **Medición de uso de IA** | Es el contador que aplica un límite, no información que escribiste |

Otras cinco tablas se excluyen por contener credenciales, datos ajenos o estado de la interfaz:

| Tabla excluida | Motivo |
|---|---|
| Denuncias que hiciste sobre publicaciones | Nadie puede volver a leer esa tabla, ni siquiera tú. Exportarla expondría una cola de moderación |
| Datos de contacto liberados por un donante de sangre | Se muestran una vez a una persona y se pueden retirar; una fila descargada no respeta esas condiciones |
| Tu conexión de Google Drive | Contiene un token de actualización activo |
| Registro de compra de Play | Contiene un token válido para Google. Tu derecho de acceso ya aparece en el perfil exportado |
| Anuncios cerrados | Solo indican qué avisos descartaste en la interfaz |

Cuatro tablas más son datos de referencia compartidos y no tuyos: lista de planes, catálogo de la comunidad, base de alimentos y una tabla interna para una comprobación de actividad.

## Volver a leer los datos \{#reading-it-back}

LifeWell no importa estos archivos ni los utiliza para restaurar datos.

El formato está documentado para que **otra herramienta** pueda leerlo: un programa, una hoja de cálculo, otra aplicación o tú con un editor de texto dentro de cinco años. Dos decisiones lo facilitan:

1. Los identificadores del archivo son los nombres originales de columnas de la base. Una columna significa lo mismo en JSON, CSV y esta página.
2. El encabezado declara sus límites. Un archivo parcial lo indica en sus primeras diez líneas.

## Cuando cambie esta página \{#when-this-page-changes}

Cada cambio que añada una tabla incorporará su fila arriba. Una comprobación compara esta lista y el esquema en ambas direcciones; si falta una tabla en cualquiera de los dos, la compilación falla.

Si programas un lector, utiliza `schema`. Hoy vale `1`; aumentará antes de que cambie el significado de la estructura descrita.
