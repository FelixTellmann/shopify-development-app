import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App';
import '@shopify/polaris/styles.css';
import {EmbeddedApp} from '@shopify/polaris/embedded';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';


const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

/*store.subscribe(() => {
    console.log("Store Changed", store.getState());
});*/

store.dispatch(async (dispatch) => {
    dispatch({type: "APP_FETCH_INITIATED"});
    dispatch({type: "USER_FETCH_INITIATED"});
    dispatch({type: "SHOP_FETCH_INITIATED"});
    try {
        dispatch({type: "APP_FETCH_RETURNED", payload: {api_key: process.env.REACT_APP_API_KEY}});
        dispatch({type: "USER_FETCH_RETURNED", payload: await(await fetch('/api/user', {credentials: "same-origin"})).json()});
        dispatch({type: "SHOP_FETCH_RETURNED", payload: (await(await fetch('/api/shop', {credentials: "same-origin"})).json()).shop});
    } catch (err) {
        dispatch({type: "ERROR", payload: err});
    }
});

class Index extends Component {

    /*state = {};*/

    /* async componentDidMount() {
         this.setState({appApiKey: process.env.REACT_APP_API_KEY});
         this.setState({shop_URI: (await(await fetch('/api/user', {credentials: "same-origin"})).json()).shop_URI});
         console.log(this.state);
     }*/

    render() {
        return (
            <EmbeddedApp
                apiKey=/*{this.state.appApiKey}*/"01b7bee3a29d4115f19882c30275c96e"
                shopOrigin=/*{`https://${this.state.shop_URI}`}*/"https://liquix-app-development.myshopify.com"
                test={React.store}
            >
                <App/>
            </EmbeddedApp>
        );
    }
}


render(
    <Provider store={store}>
        <Index/>
    </Provider>
    , document.getElementById('root'));

