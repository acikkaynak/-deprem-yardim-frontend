if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const f=e=>s(e,n),d={module:{uri:n},exports:t,require:f};a[n]=Promise.all(i.map((e=>d[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ACL_lxHzCBV6s1vxczxwm/_buildManifest.js",revision:"325c62ba801732354e969fdb4ffa7385"},{url:"/_next/static/ACL_lxHzCBV6s1vxczxwm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b7b90cd.3feb11dea4a37295.js",revision:"3feb11dea4a37295"},{url:"/_next/static/chunks/278.fa3153dce3c8deec.js",revision:"fa3153dce3c8deec"},{url:"/_next/static/chunks/359.6a1cb82b74f67007.js",revision:"6a1cb82b74f67007"},{url:"/_next/static/chunks/37.0c082acc5becea62.js",revision:"0c082acc5becea62"},{url:"/_next/static/chunks/436.804411af8fdde394.js",revision:"804411af8fdde394"},{url:"/_next/static/chunks/469.d836681c00ae67fb.js",revision:"d836681c00ae67fb"},{url:"/_next/static/chunks/649.3b4de949227c7715.js",revision:"3b4de949227c7715"},{url:"/_next/static/chunks/725-2dd7cc94b8ad44ec.js",revision:"2dd7cc94b8ad44ec"},{url:"/_next/static/chunks/934.7b6d1dbad045da21.js",revision:"7b6d1dbad045da21"},{url:"/_next/static/chunks/984.05a6c9ab1e4f3f73.js",revision:"05a6c9ab1e4f3f73"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-129e5da6b2161174.js",revision:"129e5da6b2161174"},{url:"/_next/static/chunks/pages/_app-4943322a55ebdfa7.js",revision:"4943322a55ebdfa7"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-807c63aac5b42f03.js",revision:"807c63aac5b42f03"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6ef5648da8bc23a3.js",revision:"6ef5648da8bc23a3"},{url:"/_next/static/css/8fa3e2b53875a5ad.css",revision:"8fa3e2b53875a5ad"},{url:"/_next/static/css/92dcaaf3baeaed78.css",revision:"92dcaaf3baeaed78"},{url:"/_next/static/css/a50431a2199c1eac.css",revision:"a50431a2199c1eac"},{url:"/_next/static/css/ef3737b12eb9a82d.css",revision:"ef3737b12eb9a82d"},{url:"/_next/static/media/0e4fe491bf84089c.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/1c57ca6f5208a29b.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/44c3f6d12248be7f.woff2",revision:"705e5297b1a92dac3b13b2705b7156a7"},{url:"/_next/static/media/4a8324e71b197806.woff2",revision:"5fba57b10417c946c556545c9f348bbd"},{url:"/_next/static/media/5647e4c23315a2d2.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/627622453ef56b0d.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/71ba03c5176fbd9c.woff2",revision:"2effa1fe2d0dff3e7b8c35ee120e0d05"},{url:"/_next/static/media/7be645d133f3ee22.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/7d8c9b0ca4a64a5a.p.woff2",revision:"0772a436bbaaaf4381e9d87bab168217"},{url:"/_next/static/media/83e4d81063b4b659.woff2",revision:"bd30db6b297b76f3a3a76f8d8ec5aac9"},{url:"/_next/static/media/8fb72f69fba4e3d2.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/934c4b7cb736f2a3.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/a5b77b63ef20339c.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/baf12dd90520ae41.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/bd976642b4f7fd99.woff2",revision:"cc0ffafe16e997fe75c32c5c6837e781"},{url:"/_next/static/media/cff529cd86cc0276.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/de9eb3a9f0fa9e10.woff2",revision:"7155c037c22abdc74e4e6be351c0593c"},{url:"/_next/static/media/dfa8b99978df7bbc.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e25729ca87cc7df9.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/eb52b768f62eeeb4.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/f06116e890b3dadb.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/favicon.ico",revision:"f724354852a438bbe6b0f97d827e1e60"},{url:"/icons/logo-192x192.png",revision:"8d833afb3cab8780db7f3b5d8ec6e563"},{url:"/icons/logo-384x384.png",revision:"6334f8c631e27ed7a2594d3942d26fd8"},{url:"/icons/logo-512x512.png",revision:"1863fba9315978d1188d298def5d3c52"},{url:"/leaflet/images/layers-2x.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"/leaflet/images/layers-2x.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"/leaflet/images/layers-2x.webp",revision:"28fb4019ccefa5b5742be68c4a341342"},{url:"/leaflet/images/layers.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"/leaflet/images/layers.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"/leaflet/images/layers.webp",revision:"ad5414130444ba098662a9f8b7703273"},{url:"/leaflet/images/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/leaflet/images/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/leaflet/images/marker-icon-2x.webp",revision:"df83592ba30659771d3272c9884aa0a3"},{url:"/leaflet/images/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/leaflet/images/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/leaflet/images/marker-icon.webp",revision:"8acea0b339561694a201c3fb753fbaa5"},{url:"/leaflet/images/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/leaflet/images/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/leaflet/images/marker-shadow.webp",revision:"96aaeba7c463b2a57021b8e4457fa90f"},{url:"/logo.svg",revision:"1d02e7a446b02dc14f1f9ae4f7bf9467"},{url:"/manifest.json",revision:"f67c3d79eb0038744b0c0a9114cb3ea7"},{url:"/mockServiceWorker.js",revision:"3ce0895beb78c2e4e0b0d558f451dd8d"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));