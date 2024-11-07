# Proyecto_La-Sexta_Ultimate

# Manual de Uso para la Aplicación

Este documento te guiará a través del proceso de descarga y configuración de la aplicación.

## Requisitos Previos

Asegúrate de tener instalado Git en tu máquina. Si no lo tienes, puedes descargarlo desde [aquí](https://git-scm.com/downloads).

## Pasos para Clonar el Repositorio

1. ### Instalar Git
   Si aún no has instalado Git, descárgalo e instálalo siguiendo las instrucciones en la página oficial.

2. ### Abrir Git Bash
   Una vez que Git esté instalado, abre la terminal de Git Bash. Puedes encontrarla en el menú de inicio de tu sistema operativo.

3. ### Clonar el Repositorio
   Usa el siguiente comando para clonar el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Mostaceros/Proyecto_La-Sexta_Ultimate.git
   ```

4. ### Acceder a la Carpeta del Proyecto
   Después de clonar el repositorio, navega a la carpeta creada con el siguiente comando:
   ```bash
   cd Proyecto_La-Sexta_Ultimate
   ```

5. ### Cambiar a la Rama `develop-cesar`
   Para ver los cambios agregados y trabajar en el proyecto, necesitas cambiar a la rama `develop-cesar` con el siguiente comando:
   ```bash
   git checkout develop-cesar
   ```

## Agregar Nuevos Datos

Si deseas agregar nuevos datos o realizar cambios en el proyecto, se recomienda crear una nueva rama para tus modificaciones. Para hacerlo, sigue estos pasos:

1. ### Crear una Nueva Rama
   Antes de realizar cualquier cambio, crea una nueva rama basada en `develop-cesar`:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
   (Reemplaza `nombre-de-tu-rama` con un nombre descriptivo para tu nueva rama).

2. ### Realizar Cambios
   Ahora puedes realizar los cambios que desees.

3. ### Confirmar tus Cambios
   Después de realizar tus cambios, no olvides confirmarlos:
   ```bash
   git add .
   git commit -m "Descripción de los cambios realizados"
   ```

4. ### Subir tu Rama
   Para subir tu nueva rama al repositorio remoto, usa:
   ```bash
   git push origin nombre-de-tu-rama
   ```

## Notas Finales

Si tienes alguna pregunta o necesitas más ayuda, no dudes en contactar con el equipo de desarrollo.

¡Gracias por contribuir!
