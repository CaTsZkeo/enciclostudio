# Enciclostudio

Enciclostudio es una enciclopedia educativa web orientada a la lectura clara de ciencias, la exploración por materias, la creación local de artículos y el uso sin conexión mediante PWA.

## Estado de esta migración

La demo morada se migró de forma **aditiva y compatible** a la portada original. Se conservaron la estructura HTML, los catálogos, la tabla periódica, las rutas de artículos, el editor, Supabase Auth, los perfiles remotos y el service worker existentes. Se añadieron el panel lateral deslizante, el lenguaje visual morado, los temas morado/claro/oscuro con persistencia local y una sección explícita de descarga/PWA.

Esta fase no declara como terminados APK, EXE, sincronización de artículos locales, recuperación de contraseña, TTS completo ni descarga de sitios externos. Esas funciones requieren fases y pruebas independientes.

## Estructura

- `index.html`: portada, buscador, materias, biblioteca, perfil y panel de descarga.
- `script.js`: buscador, catálogo compatible, biblioteca, editor local y tabla periódica.
- `catalogo-articulos.js`: catálogo central y fallback histórico.
- `auth.js`: Supabase Auth, perfiles y CRUD remoto.
- `offline.js` y `service-worker.js`: instalación y caché offline.
- `demo-migration.css` y `demo-migration.js`: capa incremental de la demo; no reemplaza los estilos o scripts legacy.
- `*.html`: artículos, materias, tabla periódica y editor.
- `supabase/migrations/`: esquema aplicado de perfiles, artículos y versiones.

## Compatibilidad

No se elimina `localStorage["enciclostudio-articles"]`, `seedArticles`, `articulos`, `allArticles()`, las rutas históricas ni la tabla periódica. Antes de cada cambio se debe revisar dependencias, crear backup, ejecutar comprobaciones y registrar el resultado.

## Prueba local

Servir la carpeta mediante HTTPS, GitHub Pages, Netlify o un servidor local. No abrirla con `file://` si se desea probar service worker, Auth o PWA.
