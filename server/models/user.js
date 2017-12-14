import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    id: Number,
    shop: Number,
    first_name: String,
    last_name: String,
    email: String,
    associated_scope: String,
    access_token: String,
});

const User = mongoose.model('user', userSchema);

export default User;