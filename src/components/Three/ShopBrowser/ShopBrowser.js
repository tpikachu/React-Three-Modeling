import ProductsTab from './ProductsTab'
import ProductView from './ProductView'
import React, { Component } from 'react';
import {  Row, Col, Container} from 'react-bootstrap';

class ShopBrowser extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
      shoe_id:''
    }
    this.clickhandldeshoe = this.clickhandldeshoe.bind(this);
  }
  clickhandldeshoe(shoe_id){
    console.log(shoe_id);
    this.setState({
      shoe_id:shoe_id
    })
  }
  render() {
    return (
      <Container fluid={true}>
        <ProductsTab handle={this.clickhandldeshoe}/>

        <Row>
          <Col md={9}>
            <Container fluid={true} style={{background:'transparent'}}>
              <ProductView shoe_id={this.state.shoe_id}/>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShopBrowser;
