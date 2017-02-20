import React from 'react';

import {
  Navigator
} from 'react-onsenui';

import List from '../pages/List';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} {...route.props} />
);

const App = () => (
  <Navigator
    renderPage={renderPage}
    initialRoute={{component: List, key: 'List'}}
  />
);

export default App;
