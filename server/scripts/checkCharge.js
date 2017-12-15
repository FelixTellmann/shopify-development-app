import Shop from '../models/shop';

const checkCharge = async (req, res, next) => {
    const {charge_approved} = await Shop.findOne({shop_URI: req.user.shop_URI});
    if (charge_approved) {
        res.redirect('/app')
    } else {
        next();
    }
};

export default checkCharge;