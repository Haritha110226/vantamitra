
const CACHE_NAME = "vantamitra-v3";

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

  const requestUrl = new URL(event.request.url);

  // Handle VantaMitra files only
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      // Try the cache first, ignoring query parameters
      const cachedResponse = await cache.match(event.request, {
        ignoreSearch: true
      });

      if (cachedResponse) {
        return cachedResponse;
      }

      // If not cached, try the internet
      try {
        const networkResponse = await fetch(event.request);

        if (networkResponse.ok) {
          await cache.put(event.request, networkResponse.clone());
        }

        return networkResponse;
      } catch (error) {
        // Show homepage as a fallback for navigation requests
        if (event.request.mode === "navigate") {
          const homepage = await cache.match("./index.html");
          if (homepage) return homepage;
        }

        return new Response("You are offline. Please reconnect to the internet.", {
          status: 503,
          headers: { "Content-Type": "text/plain" }
        });
      }
    })
  );
});




