const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    receiveEmail: {
        type: Boolean,
        default: true
    },
    receiveSms: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('account', AccountSchema);
