import React from 'react';

import {
  Page,
  Toolbar,
  Button
} from 'react-onsenui';

import Detail from './Detail';

export default class List extends React.Component {

  toDetail() {
    this.props.navigator.pushPage({
      component: Detail,
      key: 'Detail',
      props: {
        openTime: (new Date()).getTime()
      }
    });
  }

  render() {
    const toolbar = (
      <Toolbar>
        <div className='center'>List</div>
      </Toolbar>
    );

    return (
      <Page renderToolbar={() => toolbar}>
        <Button onClick={() => this.toDetail()}>To Detail</Button>
      </Page>
    );
  }
}
