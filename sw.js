// const cacheName = "cacheNumOne";
// const assets = [
//   "/index.html",
//   "/about.html",
//   "/category.html",
//   "/card.html",
//   "/contact.html",
//   "/assets/css/style.css",
//   "/assets/css/card.css",
//   "/assets/css/contact.css",
//   "/assets/css/style.css",

//   "/script/script.js",
// ];
// //? self === this
// self.addEventListener("install", (installEvent) => {
//   installEvent.waitUntil(
//     caches
//       .open(cacheName)
//       .then((cache) => {
//         cache.addAll(assets).then().catch();
//       })
//       .catch((err) => console.log(err))
//   );
// });

// this.addEventListener("activate", (activatedEvent) => {
//   activatedEvent.waitUntil(
//     caches
//       .keys()
//       .then((keys) => {
//         return Promise.all(
//           keys
//             .filter((key) => key != cacheName)
//             .map((key) => caches.delete(key))
//         );
//       })
//       .catch((err) => console.log(err))
//   );
// });

// self.addEventListener("fetch", (fetchedEvent) => {
//   fetchedEvent.respondWith(
//     caches.match(fetchedEvent.request).then((res) => {
//       return (
//         res ||
//         fetch(fetchedEvent.request).then((fetchers) => {
//           caches.open(cacheName).then((cache) => {
//             cache.put(fetchedEvent.request.fetchers.clone());
//             return fetchers;
//           });
//         })
//       );
//     })
//   );
// });
