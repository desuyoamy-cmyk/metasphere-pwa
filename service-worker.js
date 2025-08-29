const CACHE_NAME = "metasphere-cache-v1";
const urlsToCache = [
  "index.html",
  "meta.png",
  "logo.mp4",
  "metacogniton.mp3",
  "short_story.mp3",
  "key_elements.mp3",
  "plot.mp3",
  "exposition.mp3",
  "rising_action.mp3",
  "climax.mp3",
  "falling_action.mp3",
  "denouement.mp3",
  "characters.mp3",
  "settings.mp3",
  "theme.mp3",
  "conflict.mp3",
  "types_of_conflict.mp3"
];

// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch from Cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
