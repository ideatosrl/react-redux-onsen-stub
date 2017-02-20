import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import createStore from './src/container/createStore';
import {AppContainer} from 'react-hot-loader';
import App from './src/container/App';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import './stylus/index.styl';

import './fonts/index.css';

const store = createStore();

const rootElement = document.getElementById('root');

ons.ready(() => render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
));

if (module.hot) {
  module.hot.accept('./src/container/App', () => {
    const NextApp = require('./src/container/App').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
