const CACHE_NAME = "enciclostudio-v3";
const PRECACHE = [
  "./index.html",
  "./quimica.html",
  "./astronomia.html",
  "./elemento.html",
  "./editor.html",
  "./script.js",
  "./offline.js",
  "./manifest.json",
  "./icon.svg",
  "./estilos.css",
  "./enciclostudio.css",
  "./articulos.css",
  "./ilustraciones.css",
  "./tabla-avanzada.css",
  "./tabla-responsive.css",
  "./acidos-y-bases.html",
  "./asteroides-y-cometas.html",
  "./asteroides.html",
  "./astros-del-sistema-solar.html",
  "./astros.html",
  "./atomo.html",
  "./cambios-fisicos-y-quimicos.html",
  "./caracteristicas-de-las-estrellas.html",
  "./caracteristicas-de-los-asteroides.html",
  "./caracteristicas-de-un-cometa.html",
  "./caracteristicas-y-tipos-de-satelites-naturales.html",
  "./cinturon-de-asteroides.html",
  "./cometa-halley.html",
  "./cometas.html",
  "./de-donde-vienen-los-asteroides.html",
  "./ejemplos-de-cometas.html",
  "./electron.html",
  "./enlaces-quimicos.html",
  "./estados-de-la-materia.html",
  "./estrellas-fugaces.html",
  "./estrellas.html",
  "./lluvia-de-estrellas.html",
  "./materia.html",
  "./moleculas.html",
  "./neutron.html",
  "./partes-de-un-cometa.html",
  "./particulas-subatomicas.html",
  "./planeta-que-es-un-planeta.html",
  "./propiedades-de-la-materia.html",
  "./proton.html",
  "./que-es-un-asteroide.html",
  "./reacciones-quimicas.html",
  "./satelites-artificiales-que-son.html",
  "./satelites-naturales-que-son.html",
  "./sistema-solar.html",
  "./soluciones-quimicas.html",
  "./sustancias-puras-y-mezclas.html",
  "./tabla-periodica.html",
  "./tipos-de-asteroides.html",
  "./tipos-de-cometas.html",
  "./tipos-de-estrellas.html",
  "./assets/hero-forest.jpg"
];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match("./index.html"))));
});
