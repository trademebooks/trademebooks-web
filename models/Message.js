const mongoose = require('mongoose');
const {Schema} = mongoose;

const MessageSchema = new Schema({
    from_user_id: {type: String, default: ""},
    to_user_id: {type: String, default: ""},
    message_body: {type: String, default: ""},
    timestamp: {type: String, default: ""}
});

module.exports = mongoose.model('message', MessageSchema);