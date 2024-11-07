# Manual de Uso para la Aplicación

Este documento te guiará a través del proceso de descarga y configuración de la aplicación.

## Requisitos Previos

Asegúrate de tener instalado Git y Node.js en tu máquina. Si no los tienes, puedes descargarlos desde los siguientes enlaces:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/)

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

## Instalación de Dependencias

Para instalar las dependencias del proyecto, asegúrate de estar en la carpeta del proyecto y ejecuta el siguiente comando:
```bash
npm install
```
Esto instalará las dependencias especificadas en el archivo `package.json`, que son:
```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.21.1",
    "mongoose": "^8.8.0"
  }
}
```

## Ejecutar la Aplicación

Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación utilizando el siguiente comando:
```bash
npm start
```

Para Correr el codigo ,en la terminal Ctrl+shift +ñ ,pones :
node server.js Con esto te dara el puerto .
Algo asi :::
Servidor corriendo en http://localhost:3000

USAS EL LINK EN EL BUSCADOR Y LISTO.
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