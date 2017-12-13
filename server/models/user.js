import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    shop: Number,
    shop_URI: String,
    shop_name: String,
    email: String,
    access_token: String,
    scope: String,
    charge_approved: { type: Boolean, default: false },
    sign_up_date: { type: Date, default: Date.now },
    users: [
        {
            id: Number,
            first_name: String,
            last_name: String,
            email: String,
            associated_scope: String,
            access_token: String,
        }
    ]
});

const User = mongoose.model('user', userSchema);

export default User;