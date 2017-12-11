import express from 'express';
import request from 'request-promise';
import fetch from 'node-fetch';

const router = express.Router();
const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;

const checkAuth = (req, res, next) => {
    const {hmac, shop} = req.query;
    if (!req.user && hmac && shop) {
        res.redirect(`/auth?shop=${shop}`);
    } else if (!req.user) {
        res.redirect('/');
    } else {
        next();
    }
};

router.use('*', checkAuth);

router.all('*', (req, res) => {
    const {headers} = req.user.shop_HEADERS;
    const {method, body} = req;
    const options = {
        headers,
        method,
        body,
    };
    console.log(options);
    (async () => {
        res.send(await (await fetch(`https://${req.user.shop_URI}/admin${req.params[0]}`, options)).json())
    })();
});


export default router;

