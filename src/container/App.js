import React from 'react';

import {
  Navigator
} from 'react-onsenui';

import ListPage from '../pages/List';

const renderPage = (route, navigator) => {
  window.location.hash = route.key;
  return (
    <route.component key={route.key} navigator={navigator} {...route.props} />
  );
};

const App = () => (
  <Navigator
    renderPage={renderPage}
    initialRoute={{component: ListPage, key: 'List'}}
  />
);

export default App;
