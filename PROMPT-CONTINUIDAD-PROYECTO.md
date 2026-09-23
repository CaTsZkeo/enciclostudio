# Prompt de continuidad para Enciclostudio

Lee primero todo el repositorio y `ARQUITECTURA.md`. **NO reconstruyas Enciclostudio desde cero. Modifica la arquitectura existente de forma incremental y compatible.** Antes de modificar un archivo, analiza sus dependencias, crea un backup o checkpoint, cambia lo mínimo, prueba y documenta.

No elimines artículos, catálogos, rutas, estilos legacy, `localStorage["enciclostudio-articles"]`, `seedArticles`, `articulos`, `allArticles()`, tabla periódica, editor, PWA, Auth ni migraciones sin una autorización específica y un plan de rollback.

Distingue siempre entre funciones terminadas, prototipos y pendientes. No declares implementados APK, EXE, sincronización, TTS o descarga completa de sitios si no existen pruebas reproducibles. Para Supabase usa solo la clave pública en cliente y respeta RLS; nunca uses `service_role` en frontend. Ejecuta sintaxis, build, `git diff --check`, pruebas móviles/escritorio y regresión de rutas antes de publicar.
