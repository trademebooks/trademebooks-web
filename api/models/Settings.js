const mongoose = require('mongoose');
const { Schema } = mongoose;

const SettingsSchema = new Schema({
    receiveEmail_1: { type: Boolean, default: true },
    receiveTexts_1: { type: Boolean, default: true }
});

module.exports = mongoose.model('settings', SettingsSchema);
