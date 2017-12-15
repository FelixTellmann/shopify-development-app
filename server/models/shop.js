import mongoose, {Schema} from 'mongoose';

const shopSchema = new Schema({
    shop: Number,
    shop_URI: String,
    shop_name: String,
    email: String,
    access_token: String,
    scope: String,
    sign_up_date: { type: Date, default: Date.now },
    charge_approved: { type: Boolean, default: false },
    charges: [],
    users: [{type:Schema.ObjectId, ref:'users'}]
});

const Shop = mongoose.model('shop', shopSchema);

export default Shop;