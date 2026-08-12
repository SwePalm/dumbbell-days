const CACHE = 'dumbbell-days-v4';
const ASSETS = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icon.svg',
  './assets/calf-raise-form.png', './assets/keystone-dumbbell-deadlift-form.png', './assets/sissy-squat-form.png', './assets/dumbbell-lunge-form.png', './assets/free-squat-form.png',
  './assets/dumbbell-bench-press-form.png', './assets/chest-fly-form.png', './assets/dumbbell-reverse-grip-bench-form.png', './assets/front-raise-form.png', './assets/lateral-raise-form.png', './assets/dumbbell-overhead-press-form.png',
  './assets/decline-dumbbell-triceps-extension-form.png', './assets/bar-dip-form.png', './assets/tate-press-form.png', './assets/dumbbell-bent-row-form.png', './assets/pull-up-form.png', './assets/seated-dumbbell-shrug-form.png', './assets/reverse-fly-form.png', './assets/dumbbell-pullover-form.png', './assets/dumbbell-curl-form.png', './assets/zottman-curl-form.png', './assets/incline-dumbbell-curl-form.png', './assets/crunch-form.png', './assets/russian-twist-form.png', './assets/side-bend-form.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
