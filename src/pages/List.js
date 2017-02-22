import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import DetailPage from './Detail';
import navigationActions from '../navigation/navigation.actions';

import {
    Page,
    Toolbar,
    List,
    ListItem
} from 'react-onsenui';

class ListPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.requestExers());
  }

  toDetail(exer) {
    this.props.dispatch(navigationActions.pushPage({
      component: DetailPage,
      key: 'Detail',
      props: {
        exer,
        goBack: () => this.props.dispatch(navigationActions.popPage())
      }
    }));
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
                dataSource={this.props.exers}
                renderRow={(exer, index) => this.renderRow(exer, index)} />
        </Page>
    );
  }
}

export default connect(state => state.exers)(ListPage);
