import express from 'express';
import nonceApp from 'nonce';
import passport from 'passport';
import AuthStrategy from '../scripts/auth-strategy';
import checkCharge from '../scripts/check-charge';
import createCharge from '../scripts/create-charge';
import activateCharge from '../scripts/activate-charge';

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

router.get('/charge', activateCharge, checkCharge, createCharge);

export default router;