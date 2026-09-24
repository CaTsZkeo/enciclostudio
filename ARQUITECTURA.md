# Arquitectura de Enciclostudio

## Capa de presentación

La aplicación actual es HTML, CSS y JavaScript sin framework obligatorio. `index.html` conserva el DOM histórico y `demo-migration.css` añade el lenguaje visual de la demo sin sustituir los estilos legacy. `demo-migration.js` gestiona exclusivamente panel lateral, gestos básicos y tema visual persistente.

## Datos y artículos

`catalogo-articulos.js` es la fuente central de metadatos con fallback compatible. `script.js` mantiene `allArticles()`, el editor local y la compatibilidad con `localStorage["enciclostudio-articles"]`. Las páginas HTML individuales permanecen estáticas y son precargables por el service worker.

## Supabase

`auth.js` usa Supabase Auth desde el cliente con la clave pública existente. Incluye registro, inicio/cierre de sesión, persistencia, recuperación por email y cambio de contraseña mediante el evento `PASSWORD_RECOVERY`. Las migraciones crean perfiles, artículos y `article_versions`. Las credenciales privadas y `service_role` no deben entrar al cliente. La sincronización de datos locales aún no se considera implementada.

## Offline y PWA

`manifest.json`, `offline.js` y `service-worker.js` habilitan instalación y caché de recursos. La caché se versiona en `CACHE_NAME`; cada recurso nuevo debe añadirse de manera intencional. La lectura offline se limita al contenido realmente precargado o guardado.

## Próximas capas

APK/Windows, TTS configurable, lector seguro de HTML externo y sincronización local-cuenta deben implementarse como fases aisladas, con pruebas de regresión y sin borrar datos existentes.
