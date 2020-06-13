const mongoose = require('mongoose');
const {Schema} = mongoose;

const SettingsSchema = new Schema({

    /**
     * Email Settings
     * [] receive emails when someone
     *
     * SMS / Texting Settings
     * []
     */
    user_id: {
        type: String,
        default: ""
    },
    receiveEmail_1: {
        type: Boolean,
        default: true
    },
    receiveTexts_1: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('settings', SettingsSchema);
