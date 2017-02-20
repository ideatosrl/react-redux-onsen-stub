import React from 'react';
import exers from '../model/exers';

import {
    Page,
    Toolbar,
    Button,
    List,
    ListItem
} from 'react-onsenui';

import DetailPage from './Detail';

export default class ListPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    exers.list().then(exers => {
      this.setState({
        list: exers
      });
    });
  }

  toDetail(exer) {
    this.props.navigator.pushPage({
      component: DetailPage,
      key: 'Detail',
      props: {
        exer
      }
    });
  }

  renderRow(exer, index) {
    return (
        <ListItem key={index} onClick={() => this.toDetail(exer)}>
            <div className='left'>
                <img src={exer.user_picture} className='list__item__thumbnail' />
            </div>
            <div className='center'>
                {`${exer.field_nome} ${exer.field_cognome}`}
            </div>
        </ListItem>
    );
  }

  render() {
    const toolbar = (
        <Toolbar>
            <div className='center'>List</div>
        </Toolbar>
    );

    return (
        <Page renderToolbar={() => toolbar}>
            <List
                dataSource={this.state.list}
                renderRow={(exer, index) => this.renderRow(exer, index)} />
            <Button onClick={() => this.toDetail()}>To Detail {this.state.list.length}</Button>
        </Page>
    );
  }
}
