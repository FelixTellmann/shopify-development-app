import React from "react";
import {Layout, Card, FormLayout, TextField, Scrollable, FooterHelp, Link} from '@shopify/polaris';

const Contact = (props) => {
    return (
        <Layout sectioned>
            <Layout.AnnotatedSection
                title="Contact"
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
    )
};

export default Contact;