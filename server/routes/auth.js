import express from 'express';
import nonceApp from 'nonce';
import passport from 'passport';
import AuthStrategy from '../scripts/AuthStrategy';
import checkCharge from '../scripts/checkCharge';
import fetch from "node-fetch";

const nonce = nonceApp();
const router = express.Router();

const chargeName = process.env.SHOPIFY_APP_CHARGE_NAME;
const chargeOnce = process.env.SHOPIFY_APP_CHARGE_ONCE;
const chargeTrialDays = process.env.SHOPIFY_APP_CHARGE_TRIAL_DAYS;
const chargeReoccuring = process.env.SHOPIFY_APP_CHARGE_REOCCURRINg;
const chargeCap = process.env.SHOPIFY_APP_CHARGE_CAP;
const chargeUsage = process.env.SHOPIFY_APP_CHARGE_USAGE;
const chargeTest = process.env.SHOPIFY_APP_CHARGE_TEST === 'true' || false;
const appURI = process.env.SHOPIFY_APP_URI;

/*================ Route to App installation - /auth?shop= ================*/
router.get('/', (req, res, next) => {
    const {shop, hmac} = req.query;
    if (typeof shop !== 'string') {
        return res.status(400).send(process.env.SHOPIFY_APP_URI + '/auth?shop=liquix-app-development.myshopify.com');
    }
    const state = nonce();
    passport.use(`shopify-${state}`, new AuthStrategy(shop, state));
    passport.authenticate(`shopify-${state}`, {shop: shop})(req, res, next);
});

/*================ Route based on Shopify App oAuth Redirect - /auth/shop?code=&hmac=&shop=&state=&timestamp= ================*/
router.get('/shop', (req, res, next) => {
    passport.authenticate(`shopify-${req.query.state}`)(req, res, next);
}, (req, res) => {
    passport.unuse(`shopify-${req.query.state}`);
    return res.redirect('/auth/charge');
});

router.get('/charge', checkCharge);

import Charge from '../models/charge';
import Shop from "../models/shop";
import User from "../models/user";
import {Schema} from "mongoose";

router.get('/charge', (req, res, next) => {
    const {access_token} = req.user;
    const headers = {
        'X-Shopify-Access-Token': access_token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    if (chargeOnce > 0) {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                application_charge: {
                    name: chargeName,
                    price: chargeOnce,
                    return_url: appURI + '/auth/charge/shop',
                    test: chargeTest
                }
            }),
            headers,
        };
        (async () => {
            const chargeData = await (await fetch(`https://${req.user.shop_URI}/admin/application_charges.json`, options)).json();
            const applicationCharge = await Charge.findOneAndUpdate(
                {
                    'application_charge.id': chargeData.application_charge.id
                },
                {
                    $setOnInsert: {...chargeData}
                },
                {
                    new: true,
                    upsert: true
                });
            res.redirect(applicationCharge.application_charge.confirmation_url);
        })();
    }

    if (chargeReoccuring > 0) {

    }

    if (chargeUsage > 0) {

    }

    /*TODO: add charge Script*/
    /*res.send('testmessgage');*/
});

router.get('/charge/shop', (req, res, next) => {
    const {access_token} = req.user;
    const headers = {
        'X-Shopify-Access-Token': access_token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    /*================ Find Charge in DB ================*/
    (async () => {
        const chargeData = JSON.stringify(await (await fetch(`https://${req.user.shop_URI}/admin/application_charges/${req.query.charge_id}.json`, {method: 'GET', headers})).json());
        const finalCharge = await (await fetch(`https://${req.user.shop_URI}/admin/application_charges/${req.query.charge_id}/activate.json`, {
            method: 'POST',
            headers,
            body: chargeData
        })).json();

        if (finalCharge.application_charge.status === 'active') {
            const shop = await Shop.findOneAndUpdate(
                {
                    shop_URI: req.user.shop_URI
                },
                {
                    charge_approved: true,
                    $addToSet: {
                        charges: finalCharge.application_charge.id
                    }
                });
            console.log(await shop);
            if (process.env.DEVELOPMENT === 'true') {
                return res.redirect('/app');
            } else {
                return res.redirect('https://' + req.user.shop_URI + '/admin/apps/' + process.env.SHOPIFY_API_KEY);
            }
        }
    })();
});

export default router;

