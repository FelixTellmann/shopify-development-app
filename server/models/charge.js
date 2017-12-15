import mongoose, {Schema} from 'mongoose';

const chargeSchema = new Schema({
    application_charge: {},
    recurring_application_charge: {},
    usage_charge: {}
});

const Charge = mongoose.model('charge', chargeSchema);

export default Charge;