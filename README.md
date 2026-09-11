# Laboratorio de Computación Gráfica

Práctica 4 del laboratorio de Computación Gráfica, grupo 9.

## Contenido

- **Práctica 4 — Modelado Geométrico:** `configbase/Main_Modelado.cpp`, modelado de una mesa 3D a partir de cubos, con transformaciones y controles de cámara.

La solución compila únicamente el archivo de la práctica 4 en su estado actual.

## Requisitos y ejecución

1. Abre `configbase.sln` con Visual Studio 2022 y el conjunto de herramientas C++ v143.
2. Instala GLFW, GLEW y GLM localmente bajo `External Libraries/`, con las rutas que usa `configbase/configbase.vcxproj`:
   - `GLEW/include` y `GLEW/lib/Release/Win32`
   - `GLFW/include` y `GLFW/lib-vc2015`
   - `glm`
3. Selecciona `Debug | Win32`, compila y ejecuta desde el directorio `configbase` para que se encuentren `Shader/core.vs` y `Shader/core.frag`.

Las dependencias, archivos de usuario de Visual Studio y productos de compilación se excluyen del control de versiones.
