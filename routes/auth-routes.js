import express from 'express';
import cookie from 'cookie';
import nonceApp from 'nonce';
import passport from 'passport';
import {Strategy} from 'passport-shopify';
import User from '../models/shop-model';
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

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

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
        User.findOne({shopId: profile.id}).then((currentUser) => {
            if (currentUser) {
                return done(null, currentUser);
            } else {
                new User({
                    shopId: profile.id,
                    shop_URI: profile.profileURL,
                    email: profile.emails[0].value,
                    accessToken: accessToken,
                    params: params
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

