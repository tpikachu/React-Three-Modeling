import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Switch, Route, HashRouter} from 'react-router-dom';

import './index.css';
//components
import App from './components/App';
import RotatingCube from './components/Three/RotatingCube/RotatingCube'
import OrbitControlExample from './components/Three/OrbitControlExample/OrbitControlExample'
import TextureLoaderExample from './components/Three/TextureLoaderExample/TextureLoaderExample'
import ObjectLoaderExample from './components/Three/ObjectLoaderExample/ObjectLoaderExample'
ReactDOM.render(
    <HashRouter hashType="noslash">
        <App>
            <Switch>
                <Route exact path="/" component= {RotatingCube} />
                <Route path="/Three/RotatingCube" component= {RotatingCube} />
                <Route path="/Three/OrbitControlExample" component= {OrbitControlExample} />
                <Route path="/Three/TextureLoaderExample" component= {TextureLoaderExample} />
                <Route path="/Three/ObjectLoaderExample" component= {ObjectLoaderExample} />
            </Switch>
        </App>
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
