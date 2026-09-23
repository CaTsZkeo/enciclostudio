# Changelog

## 2026-09-23 — Migración incremental de la demo

- Añadida la capa visual morada inspirada en la demo, sin reemplazar la arquitectura legacy.
- Añadido panel lateral responsive con apertura por botón, teclado y gesto táctil.
- Añadidos temas morado, claro y oscuro persistentes en el navegador.
- Añadida sección pública de descarga, PWA y contenido offline con límites explícitos.
- Actualizada la caché del service worker a `enciclostudio-v4-demo-migration`.
- Creado backup `backup/pre-demo-migration-20260923` y archivo tar de respaldo.
- Validaciones: `node --check demo-migration.js` y `git diff --check`.

## Historial anterior

Consultar `git log --oneline --decorate --all` para el historial completo. Los commits de Supabase incluyen perfiles, CRUD remoto de artículos y modelo de versiones.
