import mongoose, {Schema} from 'mongoose';

const shopSchema = new Schema({
    shopId: Number,
    shop_URI: String,
    email: String,
    accessToken: String,
    refreshToken: String,
});

const Shop = mongoose.model('shop', shopSchema);

export default Shop;