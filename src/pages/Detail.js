import React from 'react';

import {
    Page,
    Toolbar,
    Button
} from 'react-onsenui';

export default class Detail extends React.Component {

  goBack() {
    this.props.navigator.popPage();
  }

  render() {
    const toolbar = (
        <Toolbar>
            <div className='center'>Detail</div>
        </Toolbar>
    );

    return (
        <Page renderToolbar={() => toolbar}>
            {this.props.openTime}
            <Button onClick={() => this.goBack()}>Go Back</Button>
        </Page>
    );
  }
}
