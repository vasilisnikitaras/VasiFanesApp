self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("endora-cache").then(cache => {
      return cache.addAll([
        "/apps/endora-warehouse.html",
        "/apps/endora-style.css",
        "/apps/endora-script.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
