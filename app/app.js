/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import './utils/requests';
import 'sanitize.css/sanitize.css';
import './fonts/fonts.css';
import './assets/plugins/footable/css/footable.core.css';
import './assets/plugins/admincss/blue.css';
import './assets/plugins/admincss/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/plugins/admincss/dashboard.css';
import './assets/plugins/bootstrap/css/style.css';
// import io from 'socket.io-client';
import 'react-toastify/dist/ReactToastify.css';

// slick slider

// Import root app
import jQuery from 'jquery';

// import './assets/plugins/Chart.js/chartjs.init';
import './assets/plugins/adminjs/custom.min';
import './assets/plugins/sticky-kit-master/dist/sticky-kit.min';
import './assets/plugins/adminjs/jquery.slimscroll';
import './assets/plugins/adminjs/sidebarmenu';
import './assets/plugins/adminjs/waves';
import './assets/plugins/footable/js/footable.all.min';
import './assets/plugins/adminjs/footable-init';
// import './js/custom';
// Import root app
import App from 'containers/App';
// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';
// Import i18n messages
import { translationMessages } from './i18n';
// const socket = io('http://localhost:4567');
// Create redux store with history
// socket.on('connect', () => {
//   console.log('connected frontendMiddleware');
// });
window.jQuery = jQuery;
// window.socket = io;
// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(
  () => {
    document.body.classList.add('fontLoaded');
  },
  () => {
    document.body.classList.remove('fontLoaded');
  },
);
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    window.onload = () => {
      render(translationMessages);
    };
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
