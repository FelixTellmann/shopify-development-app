import express from 'express';
import nonceApp from 'nonce';
import passport from 'passport';
import AuthStrategy from '../scripts/AuthStrategy';
import checkCharge from '../scripts/checkCharge';
import createCharge from '../scripts/createCharge';
import activateCharge from '../scripts/activateCharge';

const nonce = nonceApp();
const router = express.Router();


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

router.get('/charge', createCharge);

router.get('/charge/shop', activateCharge);

export default router;