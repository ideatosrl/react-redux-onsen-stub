import React from 'react';

import {
  Page,
  Toolbar,
  Button
} from 'react-onsenui';

export default class List extends React.Component {

  toDetail() {
    this.props.navigator.pushPage({
      component: List,
      key: 'LIST'
    });
  }

  render() {
    const toolbar = (
      <Toolbar>
        <div className='center'>Home</div>
      </Toolbar>
    );

    return (
      <Page renderToolbar={() => toolbar}>
        <Button onClick={() => this.toDetail()}>To Detail</Button>
      </Page>
    );
  }
}
