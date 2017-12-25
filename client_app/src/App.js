import React, {Component} from 'react';
import {Layout, Card, FormLayout, TextField, Scrollable, FooterHelp, Link, Page, Spinner, EmptyState} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';
import {connect} from "react-redux";
import {fetchApp} from "./actions/appActions";
import {fetchUser} from "./actions/userActions";
import {fetchShop} from "./actions/shopActions";

class App extends Component {

    componentDidMount(props = this.props) {
        props.fetchApp();
        props.fetchUser();
        props.fetchShop();
    }

    render() {

        if (this.props.user.shop_URI !== undefined) {
            console.log(this.props.user.shop_URI);
            return (
                <EmbeddedApp
                    apiKey={this.props.app.ApiKey}/*"01b7bee3a29d4115f19882c30275c96e"*/
                    shopOrigin={`https://${this.props.user.shop_URI}`}/*"https://liquix-app-development.myshopify.com"*/
                    test={React.store}
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
                                    <div>
                                        <ul>


                                        </ul>
                                    </div>
                                </Scrollable>
                            </Card>
                        </Layout.AnnotatedSection>
                        <FooterHelp>Explore more Apps from <Link url="https://www.liquix.io/">Liquix.io</Link>.</FooterHelp>
                    </Layout>
                </EmbeddedApp>
            );
        } else {
            return (
                <Page>
                    <Spinner
                        size="large"
                        color="teal"
                    />
                </Page>
            )
        }


    }

}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        shop: state.shop,
        user: state.user,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchApp: () => {
            dispatch(fetchApp())
        },
        fetchShop: () => {
            dispatch(fetchShop())
        },
        fetchUser: () => {
            dispatch(fetchUser())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);