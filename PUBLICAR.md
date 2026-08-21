# Publicar Enciclostudio

## Alternativa más fácil: GitHub Pages

1. Crea una cuenta en GitHub y un repositorio llamado `enciclostudio`.
2. Sube todos los archivos de esta carpeta usando el botón **Add file → Upload files**.
3. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. GitHub mostrará una dirección pública parecida a `https://tuusuario.github.io/enciclostudio/`.

## Alternativa sencilla con dominio propio: Netlify

1. Arrastra esta carpeta a [Netlify Drop](https://app.netlify.com/drop).
2. Recibirás una URL pública gratuita.
3. Compra un dominio como `enciclostudio.com` o usa uno que ya tengas y conéctalo desde **Domain management**.

## Alternativa de nivel medio: Visual Studio Code + Supabase

1. Abre esta carpeta con Visual Studio Code e instala la extensión **Live Server** para previsualizarla.
2. Conserva esta versión como interfaz estática.
3. Crea un proyecto en Supabase: usa **Auth** para cuentas reales y una tabla `articles` para que los artículos sean públicos para todos, no solo en el navegador del editor.
4. Despliega en Vercel, Netlify o GitHub Pages.

## Importante

Los perfiles y artículos añadidos desde `editor.html` se guardan actualmente con `localStorage`: son una demostración y solo aparecen en el mismo navegador. Para cuentas con contraseña, perfiles compartidos y edición pública se requiere un backend como Supabase o Firebase; no se deben guardar contraseñas en archivos HTML o JavaScript.

## Uso sin conexión

La versión actual incluye soporte PWA con `manifest.json`, `service-worker.js`, `offline.js` e `icon.svg`. Sirve el proyecto desde `localhost` o mediante HTTPS; al abrirlo con un navegador compatible, el botón **Instalar para usar sin internet** aparece en el pie de página cuando el navegador habilita la instalación. También puede utilizarse la opción de instalación del menú del navegador.

La primera apertura debe hacerse con conexión para precargar las páginas, estilos y scripts. Después de completar el registro del service worker, la aplicación puede abrirse sin internet y consultar los artículos que hayan sido precargados. Si se modifican archivos, aumenta la versión `CACHE_NAME` en `service-worker.js` para forzar una nueva caché en la siguiente visita.

## Tipografía Nexa

El repositorio prioriza `Nexa` en la pila CSS, pero no incluye archivos de fuente sin licencia. Para usar Nexa Heavy o Nexa Bold como fuente web real, incorpora los archivos WOFF2 adquiridos con una licencia Web de Fontfabric y añade las declaraciones `@font-face` en `ilustraciones.css`. Hasta entonces, Montserrat funciona como alternativa geométrica cargada desde Google Fonts.
