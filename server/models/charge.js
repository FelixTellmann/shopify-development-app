import mongoose, {Schema} from 'mongoose';

const chargeSchema = new Schema({
    id: Number,
    type: String,
    data: {}
});

const Charge = mongoose.model('charge', chargeSchema);

export default Charge;