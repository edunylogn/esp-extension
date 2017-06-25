import 'jquery';
import 'bootstrap';
import "../css/popup.css";

import React from 'react';
import {render} from 'react-dom';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

import App from "./popup/example";

const proxyStore = new Store({
    portName: 'example'
});

render( <Provider store={proxyStore}><App /></Provider> , document.getElementById('app'));
