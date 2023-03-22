const cacheName = 'cartao-pwa';
var filesToCache = [
    './',
    './manifest.webmanifest',
    './index.html',
    './css/main.css',
    './js/main.js'
];


self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaiting();
});

/* Servidor de armazenamento de cache quando estiver offline*/

self.addEventListener('fetch', function(e){
    e.respondwith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});