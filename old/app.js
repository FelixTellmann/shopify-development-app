const dotenv = require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const cookie = require('cookie');
const querystring = require('querystring');
const request = require('request-promise');
const passport = require('passport');
const app = express();

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = 'read_products';
const forwardingAddress = process.env.SHOPIFY_APP_URI;


app.use(passport.initialize());
app.use(passport.session());




/*================ Initialize Routes ================*/
app.use('/auth', require('./routes/auth'));


/*
router.get('/', (req, res, next) => {
    const shop = req.query.shop;
    if (shop) {
        const state = nonce();
        const redirectUri = appURI + '/auth/shop';
        const installUrl = 'https://' + shop +
            '/admin/oauth/authorize?client_id=' + apiKey +
            '&scope=' + appScopes +
            '&state=' + state +
            '&redirect_uri=' + redirectUri;

        res.cookie('state', state);
        res.redirect(installUrl);
    } else {
        return res.status(400).send('Missing shop parameter. Please add ?shop=liquix-app-development.myshopify.com to your request');
    }
});


/!* TODO: Handle With Passport.js *!/

app.get('/auth/shop', (req, res) => {
    const { shop, hmac, code, state } = req.query;
    const stateCookie = cookie.parse(req.headers.cookie).state;

    if (state !== stateCookie) {
        return res.status(403).send('Request origin cannot be verified');
    }

    if (shop && hmac && code) {
        // DONE: Validate request is from Shopify
        const map = Object.assign({}, req.query);
        delete map['signature'];
        delete map['hmac'];
        const message = querystring.stringify(map);
        const generatedHash = crypto
            .createHmac('sha256', apiSecret)
            .update(message)
            .digest('hex');

        if (generatedHash !== hmac) {
            return res.status(400).send('HMAC validation failed');
        }

        // DONE: Exchange temporary code for a permanent access token
        const accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';
        const accessTokenPayload = {
            client_id: apiKey,
            client_secret: apiSecret,
            code,
        };

        request.post(accessTokenRequestUrl, { json: accessTokenPayload })
            .then((accessTokenResponse) => {
                const accessToken = accessTokenResponse.access_token;
                // DONE: Use access token to make API call to 'shop' endpoint
                const shopRequestUrl = 'https://' + shop + '/admin/products.json';
                const shopRequestHeaders = {
                    'X-Shopify-Access-Token': accessToken,
                };

                request.get(shopRequestUrl, { headers: shopRequestHeaders })
                    .then((shopResponse) => {
                        res.status(200).end(shopResponse);
                    })
                    .catch((error) => {
                        res.status(error.statusCode).send(error.error.error_description);
                    });
            })
            .catch((error) => {
                res.status(error.statusCode).send(error.error.error_description);
            });

    } else {
        res.status(400).send('Required parameters missing');
    }
});*/

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    console.log();
});
