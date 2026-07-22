const CACHE_NAME = 'mta-consulting-v2';
const ASSETS = [
  './',
  './deal-generator-command-center.html',
  './manifest.json',
  './sw.js'
];

// Install: Cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: Network-first with fallback to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If successful, clone it and update the cache
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails, try the cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If both fail, and it's a navigation request, return the cached HTML
          if (event.request.mode === 'navigate') {
            return caches.match('./deal-generator-command-center.html');
          }
        });
      })
  );
});
