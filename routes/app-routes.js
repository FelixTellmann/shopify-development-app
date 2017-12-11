import express from 'express';
import path from 'path';

const router = express.Router();

const checkAuth = (req, res, next) => {
    const {hmac, shop} = req.query;
    if (!req.user && hmac && shop) {
        res.redirect(`/auth?shop=${shop}&hmac=${hmac}`);
    } else if (!req.user) {
        res.redirect('/');
    } else {
        next();
    }
};

router.use('*', checkAuth);

/** Add routes above this route to create static routes*/
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', process.env.SHOPIFY_APP_RESOURCE_URI || '../build', 'index.html'));
});

export default router;

