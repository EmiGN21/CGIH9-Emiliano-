# Laboratorio de Computación Gráfica

Práctica 6 del laboratorio de Computación Gráfica, grupo 9.

## Contenido

- **Práctica 6 — Texturizado:** `configbase/Texturizado.cpp`, dibuja un cuadrilátero con coordenadas de textura, carga una imagen con `stb_image` y permite mover la cámara.
- Shaders de textura: `configbase/Shader/lamp.vs` y `configbase/Shader/lamp.frag`.

La solución compila únicamente el archivo de la práctica 6 en su estado actual.

## Requisitos y ejecución

1. Abre `configbase.sln` con Visual Studio 2022 y el conjunto de herramientas C++ v143.
2. Instala GLFW, GLEW y GLM localmente bajo `External Libraries/`, con las rutas que usa `configbase/configbase.vcxproj`:
   - `GLEW/include` y `GLEW/lib/Release/Win32`
   - `GLFW/include` y `GLFW/lib-vc2015`
   - `glm`
3. Coloca el recurso `window.png` en `configbase/images/window.png`. El archivo de código lo carga desde esa ruta relativa y no venía incluido en el `8.txt`.
4. Selecciona `Debug | Win32`, compila y ejecuta desde el directorio `configbase`.

Las dependencias, archivos de usuario de Visual Studio y productos de compilación se excluyen del control de versiones.
