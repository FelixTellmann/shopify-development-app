import express from 'express';
import fetch from 'node-fetch';
import checkAuth from '../scripts/check-auth';

const router = express.Router();
const development = process.env.DEVELOPMENT === 'true' || false;
const development_access_token = process.env.DEVELOPMENT_ACCESS_TOKEN || false;
const development_shop_URI = process.env.DEVELOPMENT_SHOP || false;

/*if (!development || !development_access_token || !development_shop_URI) {
    router.use('*', checkAuth);
}*/

router.all('*', (req, res) => {

    if (development && development_access_token && development_shop_URI) {
        req.user = {};
        req.user.access_token = development_access_token;
        req.user.shop_URI = development_shop_URI
    }

    const {access_token} = req.user;
    const {method, body} = req;
    const options = {
        'headers': {
            'X-Shopify-Access-Token': access_token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method,
        body,
    };
    (async () => {
        res.json(await (await fetch(`https://${req.user.shop_URI}/admin${req.url}`, options)).json());
    })();
});

export default router;

