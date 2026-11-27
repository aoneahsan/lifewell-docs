---
title: Recuerdos
description: Fotos, álbumes, un cuaderno de recuerdos y las descripciones que les dan sentido, con los archivos guardados en tu propio Google Drive.
keywords: [recuerdos lifewell, álbum de fotos, cuaderno de recuerdos, fotos google drive]
topics: [domains, memories]
sidebar_position: 3
---

# Recuerdos \{#memories}

Una foto sin descripción ni fecha es un archivo. Esta área guarda lo que te permitirá entenderla más adelante.

## Fotos y recuerdos \{#photos-and-memories}

`/photos` es la biblioteca. Un recuerdo es una foto o un grupo de fotos con lo que les da sentido: una
fecha, una descripción, el lugar y las personas que aparecen.

`/memories/create` guarda uno. `/scrapbook` es menos estructurado: cosas que conservas porque valen la pena,
sin un formulario que completar.

## Dónde están realmente los archivos \{#where-the-files-actually-live}

**En tu propio Google Drive**, no en nuestros servidores.

LifeWell solicita un permiso de Drive que solo alcanza los archivos creados por LifeWell. No puede ver el
resto de tu Drive. Ese límite lo establece el permiso, no una promesa sobre nuestro comportamiento.

Guardamos una referencia al archivo, no el archivo. En la práctica:

- Si desconectas Drive, tus descripciones, fechas y álbumes permanecen, pero las imágenes dejan de estar disponibles.
- Si borras un archivo en Drive, desaparece la imagen; LifeWell conserva el dato de que había una.
- [La exportación](../your-data/export.md) contiene referencias y descripciones, no los bytes de las imágenes,
  porque nunca estuvieron en nuestros servidores para entregártelos.

Más detalles en [Dónde vive tu registro](../your-data/where-it-lives.md).

## Álbumes, etiquetas y personas \{#albums-tags-and-people}

- **Los álbumes** agrupan recuerdos.
- **Las etiquetas** los relacionan; una misma etiqueta puede estar en una nota, un recuerdo o un elemento del cuaderno.
- **Las personas de una foto** enlazan el recuerdo con alguien en [Personas](./people.md).

Conviene saber qué implica ese último enlace antes de usarlo: si borras el área Personas, también se eliminan
las etiquetas de fotos que apuntan a personas ya inexistentes. La aplicación cuenta esas filas y te lo dice;
no deja que desaparezcan en un área que no elegiste. Consulta
[Borrar un área](../your-data/delete.md#delete-one-area).


`/maps/memories` muestra las conexiones entre un recuerdo, su fecha, el nombre del lugar y los registros relacionados. El lugar es el nombre que escribiste, no unas coordenadas deducidas por LifeWell de la foto. La vista lee los mismos registros; no crea otra copia geográfica.
