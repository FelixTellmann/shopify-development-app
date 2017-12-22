import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App';
import '@shopify/polaris/styles.css';
import {EmbeddedApp} from '@shopify/polaris/embedded';

class Index extends Component {

    state = {};

    async componentDidMount() {
        this.setState({appApiKey: process.env.REACT_APP_API_KEY});
        this.setState({shop_URI: (await(await fetch('/api/user', {credentials: "same-origin"})).json()).shop_URI});
        console.log(this.state);
    }

    render() {
        return (
            <EmbeddedApp
                apiKey={this.state.appApiKey}/*"01b7bee3a29d4115f19882c30275c96e"*/
                shopOrigin={`https://${this.state.shop_URI}`}/*"https://liquix-app-development.myshopify.com"*/
            >
                <App/>
            </EmbeddedApp>
        );
    }
}


render(<Index/>, document.getElementById('root'));

