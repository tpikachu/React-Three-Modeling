import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
class Drawbar extends Component {
  render() {
    const active_path = window.location.hash;
    console.log(active_path);
    return (
        <ListGroup defaultActiveKey={active_path}>
            <ListGroup.Item action href="#Three/RotatingCube">
                Rotating Cube
            </ListGroup.Item>

            <ListGroup.Item action href="#Three/OrbitControlExample">
                OrbitControlExample
            </ListGroup.Item>

            <ListGroup.Item action href="#Three/TextureLoaderExample">
                TextureLoaderExample
            </ListGroup.Item>

            <ListGroup.Item action href="#Three/ObjectLoaderExample">
                ObjectLoaderExample
            </ListGroup.Item>
        </ListGroup> 
    );
  }
}
export default Drawbar;
