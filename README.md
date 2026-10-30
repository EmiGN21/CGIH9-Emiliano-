# Laboratorio de Computación Gráfica

Práctica 9 del laboratorio de Computación Gráfica, grupo 9.

## Contenido

- **Práctica 9 — Animación básica:** `configbase/AnimacionBasica.cpp`, anima un perro articulado y una pelota mediante una máquina de estados.
- Modelos requeridos: las piezas `DogBody`, `HeadDog`, `TailDog` y las cuatro patas, además de `ball.obj` y `piso.obj`, con sus materiales y texturas.
- Shaders requeridos: `configbase/Shader/lighting.vs`, `configbase/Shader/lighting.frag` y los shaders de lámpara.

La solución compila únicamente el archivo de la práctica 9 en su estado actual.

## Requisitos y ejecución

1. Abre `configbase.sln` con Visual Studio 2022 y el conjunto de herramientas C++ v143.
2. Instala GLFW, GLEW y GLM localmente bajo `External Libraries/`, con las rutas que usa `configbase/configbase.vcxproj`:
   - `GLEW/include` y `GLEW/lib/Release/Win32`
   - `GLFW/include` y `GLFW/lib-vc2015`
   - `glm`, `assimp` y `SOIL2`
3. Ejecuta desde el directorio `configbase`; ahí están los modelos, sus texturas y los shaders requeridos. Los snapshots de las prácticas anteriores también conservan sus recursos necesarios.
4. Selecciona `Debug | Win32`, compila y ejecuta desde el directorio `configbase`.

Las dependencias, archivos de usuario de Visual Studio y productos de compilación se excluyen del control de versiones.
