const CACHE_NAME = 'xhamia-ratkoc-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/kibla.html',
  '/njoftimet.html'
];

// Instalimi dhe ruajtja e faqeve offline
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Funksioni për njoftime (Push Notifications)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: 'https://cdn-icons-png.flaticon.com/512/2950/2950657.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2950/2950657.png',
    vibrate: [100, 50, 100],
    data: { dateOfArrival: Date.now() }
  };

  event.waitUntil(
    self.registration.showNotification('Xhamia e Ratkocit', options)
  );
});