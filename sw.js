const CACHE_NAME = "singaraja-cbm-v1";
const ASSETS = [
  "/singaraja-cbm/",
  "/singaraja-cbm/index.html",
  "/singaraja-cbm/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
