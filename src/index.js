import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Shelf from './Components/Shelf.js'
import * as serviceWorker from './serviceWorker';
import json from './products.js'

ReactDOM.render(<Shelf js = {json }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
