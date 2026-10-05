# Laboratorio de Computación Gráfica

Práctica 5 del laboratorio de Computación Gráfica, grupo 9.

## Contenido

- **Práctica 5 — Carga de modelos y Cámara sintética:** `configbase/Carga de Modelos.cpp`, carga y transformación de modelos 3D de perro y gato, con controles de cámara por teclado y ratón.

La solución compila únicamente el archivo de la práctica 5 en su estado actual.

## Requisitos y ejecución

1. Abre `configbase.sln` con Visual Studio 2022 y el conjunto de herramientas C++ v143.
2. Instala GLFW, GLEW, GLM, Assimp y SOIL2 localmente bajo `External Libraries/`, con las rutas que usa `configbase/configbase.vcxproj`:
   - `GLEW/include` y `GLEW/lib/Release/Win32`
   - `GLFW/include` y `GLFW/lib-vc2015`
   - `glm`
   - `assimp/include` y `assimp/lib`
   - `SOIL2/lib`
3. Selecciona `Debug | Win32`, compila y ejecuta desde el directorio `configbase` para que se encuentren los modelos, sus texturas y los shaders `Shader/modelLoading.vs` y `Shader/modelLoading.frag`.

Las dependencias, archivos de usuario de Visual Studio y productos de compilación se excluyen del control de versiones.
