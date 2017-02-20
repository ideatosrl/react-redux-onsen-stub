import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

export default () => {
  const logger = createLogger({
    collapsed: true
  });
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers,
compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

  sagaMiddleware.run(sagas);

  return store;
};
