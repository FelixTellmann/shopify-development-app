import React, {Component} from 'react';
import {Layout, Card, FormLayout, TextField, Scrollable, FooterHelp, Link} from '@shopify/polaris';

class App extends Component {

    state = {
        shop: {},
        products: {},
        themes: {},
        assets: {}
    };

    /*async componentDidMount() {
        this.setState({apiKey: process.env.REACT_APP_API_KEY});
        this.setState(await(await fetch('/api/shop', {credentials: "same-origin"})).json());
        this.setState(await(await fetch('/api/products', {credentials: "same-origin"})).json());
        this.setState(await(await fetch('/api/themes', {credentials: "same-origin"})).json());
        this.setState(await(await fetch(`/api/themes/${this.state.themes[0].id}/assets`, {credentials: "same-origin"})).json());
        console.log(this.state);
    }*/

    render() {
        return (

            <Layout sectioned>
                <Layout.AnnotatedSection
                    title="Store details"
                    description="Shopify and your customers will use this information to contact you."
                >
                    <Card sectioned>
                        <FormLayout>
                            <FormLayout.Group>
                                <TextField
                                    type="number"
                                    label="Minimum order"
                                />
                                <TextField
                                    type="number"
                                    label="Maximum order"
                                />
                            </FormLayout.Group>
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                    title="Store details"
                    description="Shopify and your customers will use this information to contact you."
                >
                    <Card
                        title="Terms of service"
                        sectioned
                        vertical
                        shadow
                        hint
                    >
                        <Scrollable
                            shadow
                            style={{height: '100px'}}
                        >
                            <div>
                                <ul>


                                </ul>
                            </div>
                        </Scrollable>
                    </Card>
                </Layout.AnnotatedSection>
                <FooterHelp>Explore more Apps from <Link url="https://www.liquix.io/">Liquix.io</Link>.</FooterHelp>
            </Layout>

        );
    }
}

export default App;