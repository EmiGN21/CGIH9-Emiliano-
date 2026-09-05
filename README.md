# Laboratorio de Computación Gráfica

Prácticas del laboratorio de Computación Gráfica, grupo 9. El repositorio conserva las prácticas anteriores y agrega cada avance en el mismo proyecto de Visual Studio.

## Contenido

- **Práctica 0:** `configbase/Main.cpp`, introducción a una ventana OpenGL y un triángulo.
- **Práctica 1:** `configbase/Main_Dibujo2D.cpp`, dibujo de primitivas 2D con colores y shaders externos.
- **Práctica 3:** `configbase/Main_P3.cpp`, transformaciones y proyección en perspectiva de cubos 3D con GLM.

La solución compila solamente el archivo de la práctica 3 en su estado actual. Las prácticas anteriores permanecen como referencia de sus commits.

## Requisitos y ejecución

1. Abre `configbase.sln` con Visual Studio 2022 y el conjunto de herramientas C++ v143.
2. Instala GLFW, GLEW y GLM localmente bajo `External Libraries/`, con las rutas que usa `configbase/configbase.vcxproj`:
   - `GLEW/include` y `GLEW/lib/Release/Win32`
   - `GLFW/include` y `GLFW/lib-vc2015`
   - `glm`
3. Selecciona `Debug | Win32`, compila y ejecuta desde el directorio `configbase` para que se encuentren `Shader/core.vs` y `Shader/core.frag`.

Las dependencias, archivos de usuario de Visual Studio y productos de compilación se excluyen del control de versiones.

## Autoría

**Práctica 3:** Emiliano Gutiérrez Nolasco.

Fernando Aranda Marrón es integrante del mismo equipo de laboratorio; su repositorio se usó únicamente para contrastar la estructura esperada de la práctica 1.
