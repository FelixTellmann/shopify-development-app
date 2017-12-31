import React, {Component} from 'react';
import {connect} from "react-redux";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

import {fetchApp} from "../actions/appActions";
import {fetchUser} from "../actions/userActions";
import {fetchShop} from "../actions/shopActions";
import {changeTab} from "../actions/navActions";
import About from "../components/about";
import Home from "../components/home";
import Contact from "../components/contact";
import Settings from "../components/settings";

import {Page, Spinner, Tabs} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';


class App extends Component {
    componentDidMount({fetchApp, fetchUser, fetchShop} = this.props) {
        fetchApp();
        fetchUser();
        fetchShop();
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
                    <Page>
                        <Tabs
                            selected={this.props.nav.tab_index || 0}
                            tabs={[
                                {
                                    id: 'home',
                                    title: 'Home'
                                },
                                {
                                    id: 'about',
                                    title: 'About'
                                },
                                {
                                    id: 'contact',
                                    title: 'Contact'
                                },
                                {
                                    id: 'settings',
                                    title: 'Settings'
                                }
                            ]}
                            onSelect={(tabIndex) => {
                                this.props.changeTab(tabIndex);
                            }}
                        />
                        {((tabIndex = this.props.nav.tab_index) => {
                            switch (tabIndex) {
                                case 0:
                                    return <Redirect push to="/"/>;
                                case 1:
                                    return <Redirect push to="/about"/>;
                                case 2:
                                    return <Redirect push to="/contact"/>;
                                case 3:
                                    return <Redirect push to="/settings"/>;
                            }
                        })()}

                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/settings" component={Settings}/>
                        </Switch>
                    </Page>
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
            );
        }
    }
}

App.propTypes = {
    app: PropTypes.object.isRequired,
    shop: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    fetchApp: PropTypes.func.isRequired,
    fetchShop: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        app: state.app,
        shop: state.shop,
        user: state.user,
        nav: state.nav,
        error: state.error
    };
};

/*const mapDispatchToProps = (dispatch) => {
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
};*/

export default withRouter(connect(mapStateToProps, {fetchApp, fetchShop, fetchUser, changeTab} /*mapDispatchToProps*/)(App));