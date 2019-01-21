import React, { Component } from 'react';
import { Button , Container, Row, Col} from 'react-bootstrap';

import Drawbar from './Drawbar/Drawbar';
import Appbar from './Appbar/Appbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Appbar/>
        <Row style={{margin:'20px'}}>
          <Col md={4} style={{height:"calc(100vh - 100px)",overflow: 'auto'}}>
            <Drawbar/>
          </Col>

          <Col md={8}>
            <div className='Container' style={{background:'black'}}>
                {this.props.children}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
