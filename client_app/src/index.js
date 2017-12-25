import React from 'react';
import {render} from 'react-dom';
import App from './App';
import '@shopify/polaris/styles.css';

import store from "./store";
import {Provider} from 'react-redux';


//
// class Index extends Component {
//     render() {
//         return (
//             <EmbeddedApp
//                 apiKey=/*{this.state.appApiKey}*/"01b7bee3a29d4115f19882c30275c96e"
//                 shopOrigin=/*{`https://${this.state.shop_URI}`}*/"https://liquix-app-development.myshopify.com"
//                 test={React.store}
//             >
//                 <App/>
//             </EmbeddedApp>
//         );
//     }
// }



render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

