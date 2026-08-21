# Enciclostudio — guía de mantenimiento

## Propósito

Enciclostudio es una enciclopedia educativa estática con una portada editorial, páginas de materias, artículos de lectura, una tabla periódica interactiva y un editor local. El sistema está organizado para que el contenido pueda actualizarse desde HTML y JavaScript sin depender de una herramienta de inteligencia artificial.

## Estructura de archivos

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `index.html` | Portada, hero, búsqueda, materias, rutas, biblioteca, laboratorio y quiz. |
| `enciclostudio.css` | Tokens globales, header, hero, secciones, controles y responsive. |
| `articulos.css` | Plantilla editorial de lectura y compatibilidad de bloques antiguos. |
| `estilos.css` | Reglas históricas, incluida la tabla periódica. Se mantiene para no romper la experiencia interactiva. |
| `script.js` | Datos de la biblioteca, búsqueda, niveles, quiz, perfil local, editor y tabla periódica. |
| `atomo.html`, `proton.html`, `neutron.html`, `electron.html`, `particulas-subatomicas.html`, `enlaces-quimicos.html`, `moleculas.html`, `sistema-solar.html` | Artículos bajo la plantilla común `article-page`. |
| `elemento.html` | Artículo dinámico generado para cada elemento desde la tabla periódica. |
| `quimica.html` | Índice de la materia Química. |
| `tabla-periodica.html` | Tabla periódica interactiva y ficha de cada elemento. |
| `editor.html` | Formulario para añadir artículos a la biblioteca local. |
| `assets/hero-forest.jpg` | Fondo de bosque tratado para el hero de la portada. |

## Sistema visual

La apariencia se controla desde variables CSS al principio de `enciclostudio.css`. La portada utiliza una barra terracota estrecha, un hero fotográfico con overlay carbón/verde, tipografía serif editorial para los títulos y tipografía sans-serif para navegación y controles. Las superficies de lectura usan crema, blanco cálido y verde bosque; el terracota se reserva para enlaces, metadatos y acciones.

Los anchos se expresan con `--max-width` para secciones amplias y `--reading-width` para artículos. El punto de ruptura principal es `760px`; por debajo de ese ancho la navegación se convierte en menú, las cuadrículas se apilan y las tablas conservan desplazamiento horizontal. Los estados de foco se mantienen visibles y las transiciones respetan `prefers-reduced-motion`.

## Cómo añadir un artículo manualmente

Para crear una nueva página, copia la estructura de cualquiera de los artículos existentes. Conserva `body class="enciclostudio article-page"`, el `header.site-header`, los enlaces a `estilos.css`, `enciclostudio.css` y `articulos.css`, y el contenedor `main.article-shell`. Cambia el texto de `.article-topline`, el `h1`, `.article-intro` y el contenido dentro de `.article-body`. Usa títulos `h2` para secciones, listas semánticas para enumeraciones, `.article-callout` para ideas clave y `.related-links` para enlaces de continuidad.

Después, añade un objeto a `seedArticles` en `script.js` con `title`, `subject`, `level`, `summary` y `resource`. La ruta debe ser relativa a la raíz, por ejemplo `nuevo-articulo.html`. Si el artículo no está listo, omite `resource` para que la biblioteca muestre “Próximamente”.

## Cómo modificar la portada

El orden principal de `index.html` es hero, concepto del día, materias, rutas de estudio, biblioteca, laboratorio y quiz. La búsqueda depende de los IDs `searchInput`, `searchButton` y `searchResults`; las rutas dependen de `lessonList` y `.level-tab`; la biblioteca depende de `articleList`; el quiz depende de `quizOptions` y `quizFeedback`; y el perfil depende de `profileDialog`, `profileName`, `openProfile` y `saveProfile`. Si se cambia el marcado, deben conservarse esos hooks o actualizarse juntos en `script.js`.

## Persistencia actual y siguiente fase

El perfil y los artículos creados desde el editor se guardan en `localStorage` bajo `enciclostudio-name` y `enciclostudio-articles`. Esto permite una demostración sin servidor, pero los datos solo existen en el navegador donde se introdujeron. Para cuentas reales, artículos públicos y archivos compartidos, la siguiente fase debe añadir autenticación, una base de datos y almacenamiento de archivos. No se deben almacenar contraseñas en HTML, CSS, JavaScript o `localStorage`.

## Prompt de continuidad para otra IA

> Trabaja sobre el repositorio estático de Enciclostudio sin cambiar su arquitectura. Conserva el diseño editorial existente: barra superior terracota de 34px, hero de bosque con overlay carbón/verde, títulos serif, texto sans-serif, fondos crema y acentos terracota. Mantén `enciclostudio.css` como fuente de tokens globales y `articulos.css` como plantilla de lectura. Todos los artículos deben conservar `body.enciclostudio.article-page`, `header.site-header`, `main.article-shell`, `.article-topline`, `h1`, `.article-intro`, `.article-body` y footer compartido. No elimines los IDs funcionales usados por `script.js` para búsqueda, biblioteca, rutas, quiz, perfil, editor y tabla periódica. Antes de modificar una ruta, comprueba si el archivo vive en la raíz y utiliza enlaces relativos sin `../`. No introduzcas frameworks ni dependencias nuevas sin documentarlo. Revisa móvil alrededor de 320px, 390px, 760px y escritorio antes de terminar.

## Publicación

La versión es estática y puede publicarse en GitHub Pages, Netlify Drop o cualquier servidor de archivos estáticos. Si se publica bajo una subruta, se deben revisar los enlaces relativos y la ruta del fondo `assets/hero-forest.jpg`. La persistencia local seguirá siendo por navegador hasta que se incorpore un backend.
