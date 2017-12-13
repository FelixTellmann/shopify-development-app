import express from 'express';
import path from 'path';
const router = express.Router();


router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, process.env.SHOPIFY_APP_RESOURCE_URI, '/..', '/client_index/build','/index.html'));
});

export default router;