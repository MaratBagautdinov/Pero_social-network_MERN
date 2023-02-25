const CACHE_NAME = "0.0.1"
const urlsTOCache = ['index.html', 'offline.html']

const self = this
// install SW
self.addEventListener('install', event=>{
event.waitUntil(
	caches.open(CACHE_NAME)
		.then(c=>c.addAll(urlsTOCache))
)
})

// listen for req
self.addEventListener('fetch', event=>{
	event.respondWith(
		caches.match(event.request)
			.then(()=>fetch(event.request)
				.catch(()=> caches.match('offline.html'))
			)
	)
})
// activate SW
self.addEventListener('activate', event=>{
	const cacheWhiteList = []
	cacheWhiteList.push(CACHE_NAME)
	event.waitUntil(caches.keys().then(names=>{
		Promise.all(names.map(name=>{
			return !cacheWhiteList.includes(name) && caches.delete(name)
		}))
	}))
})