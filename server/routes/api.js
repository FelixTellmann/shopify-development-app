import express from 'express';
import fetch from 'node-fetch';
import checkAuth from '../scripts/check-auth';

const router = express.Router();

router.use('*', checkAuth);

router.all('*', (req, res) => {

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

