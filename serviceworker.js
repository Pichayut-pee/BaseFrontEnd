importScripts('serviceworker-cache-polyfill.js');

var CACHE_NAME = 'react-boilerplate-cache-v1';
// The files we want to cache
var urlsToCache = [
  '/',
  '/css/main.css',
  '/js/bundle.js'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
    // event.waitUntil(

});

// Set the callback when the files get fetched
self.addEventListener('fetch', function(event) {

});
