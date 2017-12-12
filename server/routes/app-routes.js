import express from 'express';
import path from 'path';
/*import request from 'request';*/
import request from 'request-promise';

const router = express.Router();

const checkAuth = (req, res, next) => {
    const {hmac, shop} = req.query;
    if (!req.user && hmac && shop) {
        res.redirect(`/auth?shop=${shop}&hmac=${hmac}`);
    } else if (!req.user) {
        res.redirect('/login');
    } else {
        next();
    }
};

router.use('*', checkAuth);

/** Add routes above this route to create static routes*/
router.get('*', (req, res) => {
    res.sendFile(path.join(process.env.ROOT, '/client_app/build', 'index.html'));
});

export default router;

