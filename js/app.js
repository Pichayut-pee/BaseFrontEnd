/**
 *
 * app.js
 *
 * This is the entry file for the application, mostly just setup and boilerplate
 * code
 *
 */
// Load the ServiceWorker, the Cache polyfill, the manifest.json file and the .htaccess file
import 'file?name=[name].[ext]!../serviceworker.js';
import 'file?name=[name].[ext]!../serviceworker-cache-polyfill.js';
import 'file?name=[name].[ext]!../manifest.json';
import 'file?name=[name].[ext]!../.htaccess';
import 'file?name=[name].[ext]!../favicon.ico';
import 'file?name=[name].[ext]!../favicon.png';
// Import all the third party stuff
import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Route, Router} from 'react-router';
import rootReducer from './reducers/index';
import FontFaceObserver from 'fontfaceobserver';


// Import the components used as pages
import App from './components/App.react';
// Import the CSS file, which webpack transfers to the build folder
import '../css/main.css';
import MainPage from "./components/pages/Main/Main";
import Notification from "./components/pages/WebSocket/Notification";

//Check for ServiceWorker support before trying to install it
if ('serviceWorker' in navigator) {
    // Install ServiceWorker
  navigator.serviceWorker.register('/serviceworker.js').then((worker) => {
      worker.unregister
  }).catch((err) => {
    // Installation failed
    console.log('ServiceWorker registration failed, error:', err);
  });
} else {
  // No ServiceWorker Support
  console.log('ServiceWorker is not supported in this browser');
}

// When Open Sans is loaded, add the js-open-sans-loaded class to the body
// which swaps out the fonts
const openSansObserver = new FontFaceObserver('Open Sans');

openSansObserver.check().then(() => {
  document.body.classList.add('js-open-sans-loaded');
}, (err) => {
  document.body.classList.remove('js-open-sans-loaded');
});


// Creates the Redux reducer with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer
                                        ,enhancers);



// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
ReactDOM.render(

  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
          <Route path="/" component={MainPage} />
          <Route path="/ws" component={Notification} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
