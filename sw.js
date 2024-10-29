self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('iRANCOiN-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/store.html',
        '/gallary.html',
        '/index.html',
        '/about.html',
        '/activation.html',
        '/crypto-store.html',
        '/binary-store.html',
        '/forex-store.html',
        '/crypto-gallary.html',
        '/binary-gallary.html',
        '/forex-gallary.html',
        '/style.css',
        '/navbar.css',
        '/text-animation.css',
        '/navbar.js',
        '/script.js',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
