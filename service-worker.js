const CACHE_NAME="karoo-spit-braai-v3";
const SHELL=["./","./index.html","./styles.css","./app.js","./manifest.json","./icons/icon-192.png","./icons/icon-512.png","./images/website-logo.webp","./images/website-hero.webp","./images/website-lamb.jpg","./images/website-salad.webp","./images/website-garlic-bread.webp"];
self.addEventListener("install",event=>{
  event.waitUntil((async()=>{const cache=await caches.open(CACHE_NAME);const urls=[...new Set(SHELL.map(path=>new URL(path,self.registration.scope).href))];await cache.addAll(urls);await self.skipWaiting();})());
});
self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key.startsWith("karoo-spit-braai-")&&key!==CACHE_NAME).map(key=>caches.delete(key)));await self.clients.claim();})());
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
  if(event.request.mode==="navigate"){
    event.respondWith((async()=>{try{return await fetch(event.request);}catch{return (await caches.match(new URL("./index.html",self.registration.scope)))||Response.error();}})());
    return;
  }
  event.respondWith((async()=>{const cached=await caches.match(event.request);if(cached)return cached;try{const response=await fetch(event.request);if(response.ok){const cache=await caches.open(CACHE_NAME);cache.put(event.request,response.clone());}return response;}catch{return cached||Response.error();}})());
});
