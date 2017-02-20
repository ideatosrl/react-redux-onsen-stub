import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {AppContainer} from 'react-hot-loader';

import reducers from './src/reducers';
import sagas from './src/sagas';
import App from './src/container/App';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import './stylus/index.styl';

import './fonts/index.css';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(sagas);

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
