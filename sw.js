const C='estudio-v25',F=['./','index.html','manifest.json','pdf.min.js','pdf.worker.min.js','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// Abre al instante con lo guardado y, en segundo plano, baja la versión nueva para la próxima vez.
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 const p=caches.open(C).then(async c=>{const r=await c.match(e.request,{ignoreSearch:true}),red=fetch(e.request.url,{cache:'no-cache'}).then(n=>{if(n.ok)c.put(e.request,n.clone());return n}).catch(()=>null);return r?{r,red}:{r:await red,red:null}});
 e.respondWith(p.then(x=>x.r||caches.match('index.html')));e.waitUntil(p.then(x=>x.red));
});
