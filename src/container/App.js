import React from 'react';

import {
  Navigator
} from 'react-onsenui';

import navigationSagas from '../navigation/navigation.sagas';
import ListPage from '../pages/List';

const renderPage = (route, navigator) => {
  window.location.hash = route.key;
  return (
    <route.component key={route.key} {...route.props} />
  );
};

const App = () => (
  <Navigator
    ref={navigator => navigationSagas.setNavigator(navigator)}
    renderPage={renderPage}
    initialRoute={{component: ListPage, key: 'List'}}
  />
);

export default App;
