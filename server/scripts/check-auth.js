const checkAuth = (req, res, next) => {
    const {hmac, shop} = req.query;
    if (!req.user && hmac && shop) {
        res.redirect(`/auth?shop=${shop}`);
    } else if (!req.user) {
        console.log('this is unusual');
        res.redirect('/');
    } else {
        next();
    }
};

export default checkAuth;