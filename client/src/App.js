import React, {Component} from 'react';
import '@shopify/polaris/styles.css';
import {Layout, Card, FormLayout, TextField, Scrollable} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';


class App extends Component {
    render() {
        return (
            <EmbeddedApp
                apiKey="01b7bee3a29d4115f19882c30275c96e"
                shopOrigin="https://liquix-app-development.myshopify.com"
            >


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
                                <p>By signing up for the Shopify service (“Service”) or any of the services of Shopify Inc. (“Shopify”) you are agreeing to be bound by the following terms
                                    and
                                    conditions (“Terms of Service”). The Services offered by Shopify under the Terms of Service include various products and services to help you create and
                                    manage a retail store, whether an online store (“Online Services”), a physical retail store (“POS Services”), or both. Any new features or tools which are
                                    added to the current Service shall be also subject to the Terms of Service. You can review the current version of the Terms of Service at any time at
                                    https://www.shopify.com/legal/terms. Shopify reserves the right to update and change the Terms of Service by posting updates and changes to the Shopify
                                    website. You are advised to check the Terms of Service from time to time for any updates or changes that may impact you.</p>
                            </Scrollable>
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </EmbeddedApp>
        );
    }
}

export default App;