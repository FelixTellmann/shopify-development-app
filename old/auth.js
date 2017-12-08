const dotenv = require('dotenv').config();
const express = require('express');
const cookie = require('cookie');
const router = express.Router();
const nonce = require('nonce')();
const passport = require('passport');
const ShopifyStrategy = require('passport-shopify').Strategy;
const app = express();

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const appURI = process.env.SHOPIFY_APP_URI;
const appScopes = process.env.SHOPIFY_APP_SCOPES;
const redirectUri = appURI + '/auth/shop';

passport.serializeUser(function(user, done) {
    // placeholder for custom user serialization
    // null is for errors
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    // placeholder for custom user deserialization.
    // maybe you are going to get the user from mongo by id?
    // null is for errors
    done(null, user);
});

router.get('/', (req, res, next) => {
    if (typeof req.query.shop !== 'string') {
        return res.status(400).send('https://3211a296.ngrok.io/auth?shop=liquix-app-development.myshopify.com');
    }
    const state = nonce();
    res.cookie('state', state);

    passport.use(`shopify-${state}`, new ShopifyStrategy({
        clientID: apiKey,
        clientSecret: apiSecret,
        callbackURL: redirectUri,
        shop: req.query.shop
    }, (accessToken, refreshToken, profile, done) => {
       return done(null, profile);
    }));

    passport.authenticate(`shopify-${state}`, {
        scope: appScopes,
        shop: req.query.shop,
    })(req, res, next);
});

router.get('/shop', (req, res, next) => {
    const {shop, hmac, code, state} = req.query;
    const stateCookie = cookie.parse(req.headers.cookie).state;

    if (typeof code !== 'string') {
        return res.sendStatus(500);
    }

    passport.authenticate(`shopify-${stateCookie}`)(req, res, next);
}, (req, res) => {
    const stateCookie = cookie.parse(req.headers.cookie).state;
    // NOTE: notice how we use `passport.unuse` to delete
    // the specific strategy after it is done being used
    passport.unuse(`shopify-${stateCookie}`);
    return res.send({message: 'successfully logged in', user: req.user});
});


module.exports = router;


