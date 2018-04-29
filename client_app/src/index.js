import React from 'react';
import {render} from 'react-dom';
import App from './containers/app';
import '@shopify/polaris/styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import {Provider} from 'react-redux';

render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);