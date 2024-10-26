self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('iRANCOiN-cache').then((cache) => {
      return cache.addAll([
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

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
