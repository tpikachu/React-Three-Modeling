import ProductsTab from './ProductsTab'
import ProductView from './ProductView'
import React, { Component } from 'react';
import {  Row, Col, Container} from 'react-bootstrap';

class ShopBrowser extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
      model_url:'',
      product_list:''
    }
    this.clickhandldeshoe = this.clickhandldeshoe.bind(this);
  }
  componentDidMount(){
    /*
    fetch('./product.json')
      .then(data => this.setState({ product_list: data }));*/
  }
  clickhandldeshoe(model_url){
    
    this.setState({
      model_url:model_url
    })
  }
  render() {
    console.log(this.state.product_list);
    return (
      <Container fluid={true} style={{background:'black'}}>
        <ProductsTab handle={this.clickhandldeshoe}/>

        <Row>
          
            <Container fluid={true} >
              <ProductView model_url={this.state.model_url}/>
            </Container>
          
        </Row>
      </Container>
    );
  }
}

export default ShopBrowser;
