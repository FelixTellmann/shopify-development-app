import express from 'express';
import path from 'path';
import checkAuth from '../scripts/checkAuth';

const router = express.Router();

router.use('*', checkAuth);

/** Add routes above this route to create static routes*/
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.SHOPIFY_APP_RESOURCE_URI, '/..', '/client_app/build', 'index.html'));
});

export default router;

