import React from 'react';

import {
    Page,
    Toolbar,
    Button,
    Row,
    Col
} from 'react-onsenui';

const center_style = {
  width: '80%',
  margin: '0 auto',
  display: 'block'
};

export default class DetailPage extends React.Component {

  goBack() {
    this.props.navigator.popPage();
  }

  render() {
    const toolbar = (
        <Toolbar>
            <div className='center'>{`${this.props.exer.field_nome} ${this.props.exer.field_cognome}`}</div>
        </Toolbar>
    );

    return (
        <Page renderToolbar={() => toolbar}>
            <Row>
                <Col>
                    <img src={this.props.exer.user_picture} style={center_style}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{padding: '20px', ...center_style}}>
                        <h2 style={{textAlign: 'center'}}>coding to {this.props.exer.field_coding_to}</h2>
                        <Button modifier='large' onClick={() => this.goBack()}>Go Back</Button>
                    </div>
                </Col>
            </Row>
        </Page>
    );
  }
}
