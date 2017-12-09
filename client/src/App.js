import React, {Component} from 'react';
import '@shopify/polaris/styles.css';
import {Page, Card} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';


class App extends Component {
    render() {
        return (
            <EmbeddedApp
                apiKey="01b7bee3a29d4115f19882c30275c96e"
                shopOrigin="https://liquix-app-development.myshopify.com"
            >
                <Page title="Example application">
                    <Card sectioned>
                        Insert the rest of your app here, including those components detailed below, which can now communicate with the Embedded App SDK.
                    </Card>
                </Page>
            </EmbeddedApp>
        );
    }
}
export default App;