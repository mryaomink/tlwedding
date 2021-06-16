'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "74d525f0a9bdb3c7afe69a9618bb594f",
".git/config": "a11f9debe785b8ed84ecb69f5448e7b5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "3979ac345fc68385b42fed644643a003",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "8811f5ff047be4653d8262101b798bc5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e2501dbfc4dec6d66cdba30f1a6fa79",
".git/logs/refs/heads/main": "74336efca7f4a44770af3f28af97de6b",
".git/logs/refs/heads/tlwedyao": "3abcc2b8c2fa7f4fd88efb4e230a330d",
".git/logs/refs/remotes/origin/main": "616dee2244c34986870b439319e0884b",
".git/logs/refs/remotes/origin/tlwedyao": "3930e7999396224a38991575da4185c5",
".git/objects/02/c11551a573dac2a59189826c13d9b0ca75b66b": "624245aa79c426c27c96c3e9566ca3ff",
".git/objects/05/2566cc6b7783d16551afa75aff84e02430e7bd": "bbe1f0a7c80321aca3cb1a75165673c9",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/1c/a534334cc699888744527b5b01f160dd998b0c": "0e14af2b1474df39b6b3eaa93dcc8627",
".git/objects/1c/cf06e0b335ebd60524b0d76b4fd159e2e09ed7": "6bc473d1137c58d0c9c61f09d2c44e58",
".git/objects/1d/1a1aa561bee396c9fc88c7eed21d0c1e51cdb5": "0e490097c1373729e53fabd392b852c0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/f4f026ca47f40e9755a127f18e98a0879b2f5e": "231c214687e549a1159b96ed140f957e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/06673ed7f3ef134dc00d36dbfdf81fb16c671d": "5fba3dcc8696be7e25f36fbea3d2d9fd",
".git/objects/40/83f36a63f2fce260aaca2566f13d065321ebc3": "ed55c0dd1eae962b1ef2ce84a8bbcf65",
".git/objects/5c/2546fa1a8605a7918dc61f91f2d38e8cd6ec0e": "2694e110821645fa479b49589821fa10",
".git/objects/65/92d0a88f3dcd0503c55ee94fe130fe71d4c2db": "9ad8e28194a394d62f6f62ad7eba227a",
".git/objects/67/f7df60277370516610bf128a50e385087d2708": "873adfb3ba1ba952b665c3af356844a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/8e4bce74b021334d515c6245458d1567b26b35": "c56ea140570f8d8af44dd21f16ea46f4",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/9b/8cc6005ccd53730544a2e30014af19d6ff9c61": "71dd2153819e84c18e6668d0abb557cf",
".git/objects/9c/f6be8d4c3af1915d527ef8ca6eeb76dcb04d75": "fc08d7afa9f0e86b888a120b8230a2fe",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/bb/33def399f54a87ddc85e469f9633a86ce051f1": "80efc214ed4c43f8ffbf843c74654bcf",
".git/objects/bd/983d20a58610ab3e70b59b7ccb38553d18f920": "07e21011cb8aced116a4f1c1bbc2f94c",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/e2/b3628c37ddab61ac9753ceb09d95644f66ae4b": "7fe5237ad799c51105724c3b049008ea",
".git/objects/e5/00aff1fc67c7f64b3f36dc31c7265e28f92123": "9794ada4a6440c7396aca690c552b150",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/8b8bfb0900db37d5ca15e9da84ba8adebf1f00": "f215235afdcc23f2646890d9b192920b",
".git/objects/e7/3852efb8d4ae2d39fee7b4f1d24c56a488e6bc": "7ab3a623795165f8635e555b4861d032",
".git/objects/f9/6c3a03b014ed8685f79525a0fd68d276754403": "992703eddfb8b856716ad6bd02776e93",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/refs/heads/main": "8523dbae36e263308067ae7051dcf6aa",
".git/refs/heads/tlwedyao": "8523dbae36e263308067ae7051dcf6aa",
".git/refs/remotes/origin/main": "c29b8e0646a128a3fa38c6afc1553e17",
".git/refs/remotes/origin/tlwedyao": "8523dbae36e263308067ae7051dcf6aa",
"assets/AssetManifest.json": "81cd8371a9997f7cc0bcbd2acd56044f",
"assets/assets/images/headwed.svg": "7357281480090d4f60f853f566863db1",
"assets/assets/images/sejoli.svg": "03b1cba24473fb6ee19767e341047a06",
"assets/assets/images/sejolii.png": "c1ccb97a05f4c475fdde06048f939816",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2c0177724502c25951ef58ac86ae47d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e36e40935df36e8d03477cea5d0d83a2",
"/": "e36e40935df36e8d03477cea5d0d83a2",
"main.dart.js": "febb3c6ba1de9c299ad102b40dbcfc85",
"manifest.json": "d4bd9d5413de8bc9c8603c8bf8b88146",
"version.json": "49eec699bdf477e3753580b37fcc1b39"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
