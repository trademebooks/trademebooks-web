const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountsSchema = new Schema({
    receiveEmail: {
        type: Boolean,
        default: true
    },
    receiveSms: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('accounts', accountsSchema);
