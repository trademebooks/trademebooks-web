const mongoose = require('mongoose');
const {Schema} = mongoose;

const Settings = new Schema({
    email: {type: Boolean, default: true}
});

module.exports = Settings;
