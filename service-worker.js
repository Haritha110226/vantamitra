
const CACHE_NAME = "vantamitra-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./recipes-data.js",

  "./recipe-soft-vegetable-upma.html",
  "./recipe-instant-dosa.html",
  "./recipe-everyday-plain-rice.html",
  "./recipe-homestyle-bagara-rice.html",
  "./recipe-vantamitra-signature-potato-fry.html",
  "./recipe-coconut-chutney.html",
  "./recipe-sweet-lassi.html",
  "./recipe-pesarattu.html",
  "./recipe-tomato-pappu.html",
  "./recipe-crispy-onion-pakodi.html",
  "./recipe-traditional-sweet-pongal.html",
  "./recipe-vantamitra-special-poha.html",
  "./recipe-crispy-chegodilu.html",
  "./recipe-vantamitra-homestyle-semiya-upma.html",
  "./recipe-vantamitra-special-uggani.html"
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith("vantamitra-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});




