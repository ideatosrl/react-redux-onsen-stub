import React from 'react';

import {
  Page,
  Toolbar
} from 'react-onsenui';

class MainPage extends React.Component {

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Home</div>
      </Toolbar>
    );
  }

  render() {
    console.log(this.props.navigator);
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p>Hello World!!!</p>
      </Page>
    );
  }
}

export default MainPage;
