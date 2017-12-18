import Shop from "../models/shop";
import fetch from "node-fetch";
import Charge from "../models/charge";

const activateCharge = async (req, res, next) => {
    const headers = {
        'X-Shopify-Access-Token': req.user.access_token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    const charge = await Charge.findOne({id: req.query.charge_id});
    const data = await (await fetch(`https://${req.user.shop_URI}/admin/${charge.type}s/${req.query.charge_id}.json`, {method: 'GET', headers})).json();
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
    };
    const activated = await (await (await fetch(`https://${req.user.shop_URI}/admin/${charge.type}s/${req.query.charge_id}/activate.json`, options)).json());

    if (activated[charge.type].status === 'active') {
        await Charge.findOneAndUpdate(
            {
                id: activated[Object.keys(activated)[0]].id
            },
            {
                $set: {
                    id: activated[Object.keys(activated)[0]].id,
                    type: Object.keys(activated)[0],
                    data: {...activated[Object.keys(activated)[0]]}
                }
            });

        await Shop.findOneAndUpdate(
            {
                shop_URI: req.user.shop_URI
            },
            {
                charge_approved: true,
                charge_activated_date: Date.now(),
                $addToSet: {
                    charges: charge._id
                }
            });

        next();
    } else {
        return res.redirect('/login');
    }

};

export default activateCharge;