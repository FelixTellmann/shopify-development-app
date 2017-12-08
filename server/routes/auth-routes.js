import express from 'express';
import cookie from 'cookie';
import nonceApp from 'nonce';
import passport from 'passport';
import {Strategy as ShopifyStrategy} from 'passport-shopify';
import Shop from '../models/shop-model';
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
    Shop.findById(id).then((user) => {
        done(null, user);
    });
});

router.get('/auth', (req, res, next) => {
    if (typeof req.query.shop !== 'string') {
        return res.status(400).send(appURI + '/auth?shop=liquix-app-development.myshopify.com');
    }
    const state = nonce();
    res.cookie('state', state);

    passport.use(`shopify-${state}`, new ShopifyStrategy({
        clientID: apiKey,
        clientSecret: apiSecret,
        callbackURL: redirectUri,
        shop: req.query.shop
    }, (accessToken, refreshToken, profile, done) => {
        Shop.findOne({shopId: profile.id}).then((currentShop) => {
            if (currentShop) {
                console.log(currentShop);
                return done(null, currentShop);
            } else {
                new Shop({
                    shopId: profile.id,
                    shop_URI: profile.profileURL,
                    email: profile.emails[0].value,
                    accessToken: accessToken,
                }).save().then((newShop) => {
                    console.log(newShop);
                    return done(null, newShop);
                });
            }
        });

    }));

    passport.authenticate(`shopify-${state}`, {
        scope: appScopes,
        shop: req.query.shop,
    })(req, res, next);
});

router.get('/auth/shop', (req, res, next) => {
    const {shop, hmac, code, state} = req.query;
    const stateCookie = cookie.parse(req.headers.cookie).state;

    if (typeof code !== 'string') {
        return res.sendStatus(500);
    }

    passport.authenticate(`shopify-${stateCookie}`)(req, res, next);
}, (req, res) => {
    const stateCookie = cookie.parse(req.headers.cookie).state;
    passport.unuse(`shopify-${stateCookie}`);
    return res.send({message: 'successfully logged in', user: req.user});
});

export default router;

