import React, { Component } from 'react';
import {ListGroup, Media} from 'react-bootstrap';
class ProductsTab extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            toggled_key: '',
        }

        this.clickanitem = this.clickanitem.bind(this);
    }

    clickanitem(event)
    {
      this.props.handle(event.target.innerHTML);
    }
    render() {
        return (
            <ListGroup>
                <ListGroup.Item action onClick={this.clickanitem}>
                    shoe1
                </ListGroup.Item>
                <ListGroup.Item action onClick={this.clickanitem}>
                    shoe2
                </ListGroup.Item>
            </ListGroup> 
        );
    }
}
export default ProductsTab;
