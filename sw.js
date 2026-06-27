const CACHE_NAME = 'finhub-v2';

// Минимальный дефолтный список для прохождения валидации Android
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Просто пропускаем все запросы напрямую в сеть, чтобы ничего не висло при обновлениях
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
