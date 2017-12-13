import express from 'express';
import cookie from 'cookie';
import nonceApp from 'nonce';
import passport from 'passport';
import {Strategy} from 'passport-shopify';
import User from '../models/user';
import mongoose from 'mongoose';

const nonce = nonceApp();
const app = express();
const router = express.Router();

/*================ .env Variables ================*/
const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const appURI = process.env.SHOPIFY_APP_URI;
const appScopes = process.env.SHOPIFY_APP_SCOPES;
const redirectUri = appURI + '/auth/shop';


/*================ Route to App installation - /auth?shop= ================*/
router.get('/', (req, res, next) => {
    const {shop, hmac} = req.query;
    if (typeof shop !== 'string') {
        return res.status(400).send(appURI + '/auth?shop=liquix-app-development.myshopify.com');
    }
    const state = nonce();
    res.cookie('state', state);
    res.cookie('hmac', hmac);

    const ShopifyStrategy = new Strategy({
        clientID: apiKey,
        clientSecret: apiSecret,
        callbackURL: redirectUri,
        shop: shop
    }, (accessToken, refreshToken, params, profile, done) => {
        User.findOne({shop: profile.id}).then((currentUser) => {
            if (currentUser && process.env.SHOPIFY_APP_GRANT_OPTIONS !== '') {
                User.findOneAndUpdate({shop: profile.id, "users.id": params.associated_user.id}, {
                    $set: {
                        "users.$.id": params.associated_user.id,
                        "users.$.first_name": params.associated_user.first_name,
                        "users.$.last_name": params.associated_user.last_name,
                        "users.$.email": params.associated_user.email,
                        "users.$.associated_scope": params.associated_user_scope,
                        "users.$.access_token": params.access_token,
                    }
                }).then((updatedUser) => {
                    if (updatedUser) {
                        return done(null, updatedUser);
                    } else {
                        User.findOneAndUpdate({shop: profile.id}, {
                            $addToSet: {
                                users: {
                                    access_token: params.access_token,
                                    associated_scope: params.associated_user_scope,
                                    email: params.associated_user.email,
                                    last_name: params.associated_user.last_name,
                                    first_name: params.associated_user.first_name,
                                    id: params.associated_user.id,
                                }
                            }
                        }).then((updatedUser) => {
                            return done(null, updatedUser);
                        });
                    }
                });
            } else if (currentUser) {
                return done(null, currentUser);
            } else {
                new User({
                    shop: profile.id,
                    shop_URI: profile.profileURL,
                    shop_name: profile.username,
                    email: profile.emails[0].value,
                    access_token: accessToken,
                    scope: params.scope,
                    charge_approved: false,
                    users: [
                        {
                            id: params.associated_user.id,
                            first_name: params.associated_user.first_name,
                            last_name: params.associated_user.last_name,
                            email: params.associated_user.email,
                            associated_scope: params.associated_user_scope,
                            access_token: params.access_token,
                        }
                    ]
                }).save().then((newUser) => {
                    return done(null, newUser);
                });
            }
        });
    });
    ShopifyStrategy.authorizationParams = function (options) {
        return {
            state: state,
            'grant_options[]': process.env.SHOPIFY_APP_GRANT_OPTIONS
        };
    };

    passport.use(`shopify-${state}`, ShopifyStrategy);
    passport.authenticate(`shopify-${state}`, {
        scope: appScopes,
        shop: shop,
    })(req, res, next);
});

/*================ Route based on Shopify App oAuth Redirect - /auth/shop?code=&hmac=&shop=&state=&timestamp= ================*/
router.get('/shop', (req, res, next) => {
    const {shop, hmac, code, state} = req.query;
    const stateCookie = cookie.parse(req.headers.cookie).state;

    if (stateCookie !== state) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    } else {
        passport.authenticate(`shopify-${state}`)(req, res, next);
    }

}, (req, res) => {
    const {state} = req.query;
    const hmacCookie = cookie.parse(req.headers.cookie).hmac;
    passport.unuse(`shopify-${state}`);

    /* TODO Fix redirect in Iframe vs normal redirect for first signup !*/
    if (hmacCookie) {
        return res.redirect('/app');
    } else {
        return res.redirect('https://' + req.user.shop_URI + '/admin/apps/' + process.env.SHOPIFY_API_KEY);
    }
});

export default router;

