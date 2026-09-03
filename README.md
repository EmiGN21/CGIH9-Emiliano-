# Laboratorio de Computación Gráfica

Prácticas del laboratorio de Computación Gráfica, grupo 9. El repositorio conserva la práctica 0 y agrega la práctica 1 en el mismo proyecto de Visual Studio.

## Contenido

- **Práctica 0:** `configbase/Main.cpp`, introducción a una ventana OpenGL y un triángulo.
- **Práctica 1:** `configbase/Main_Dibujo2D.cpp`, dibujo de primitivas 2D con colores y shaders externos.

La solución compila solamente el archivo de la práctica 1 en su estado actual. La práctica 0 permanece como referencia del commit anterior.

## Requisitos y ejecución

1. Abre `configbase.sln` con Visual Studio 2022 y el conjunto de herramientas C++ v143.
2. Instala GLFW y GLEW localmente bajo `External Libraries/`, con las rutas que usa `configbase/configbase.vcxproj`:
   - `GLEW/include` y `GLEW/lib/Release/Win32`
   - `GLFW/include` y `GLFW/lib-vc2015`
3. Selecciona `Debug | Win32`, compila y ejecuta desde el directorio `configbase` para que se encuentren `Shader/core.vs` y `Shader/core.frag`.

Las dependencias, archivos de usuario de Visual Studio y productos de compilación se excluyen del control de versiones.

## Autoría

**Emiliano Gutiérrez Nolasco**. Fernando Aranda Marrón es integrante del mismo equipo de laboratorio; su repositorio se usó únicamente para contrastar la estructura esperada de la práctica.
