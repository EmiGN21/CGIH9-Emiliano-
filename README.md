# Laboratorio de Computación Gráfica

Práctica 7 del laboratorio de Computación Gráfica, grupo 9.

## Contenido

- **Práctica 7 — Iluminación 1:** `configbase/Iluminacion.cpp`, aplica materiales e iluminación a modelos 3D y permite manipular la escena.
- Shaders de iluminación: `configbase/Shader/lighting.vs` y `configbase/Shader/lighting.frag`.

La solución compila únicamente el archivo de la práctica 7 en su estado actual.

## Requisitos y ejecución

1. Abre `configbase.sln` con Visual Studio 2022 y el conjunto de herramientas C++ v143.
2. Instala GLFW, GLEW y GLM localmente bajo `External Libraries/`, con las rutas que usa `configbase/configbase.vcxproj`:
   - `GLEW/include` y `GLEW/lib/Release/Win32`
   - `GLFW/include` y `GLFW/lib-vc2015`
   - `glm`, `assimp` y `SOIL2`
3. Ejecuta desde el directorio `configbase`; ahí están los modelos, sus texturas y los shaders requeridos.
4. Selecciona `Debug | Win32`, compila y ejecuta desde el directorio `configbase`.

Las dependencias, archivos de usuario de Visual Studio y productos de compilación se excluyen del control de versiones.
