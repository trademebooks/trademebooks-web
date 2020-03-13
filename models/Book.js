const mongoose = require('mongoose');
const {Schema} = mongoose;

const BookSchema = new Schema({
    user_id: {type: String, default: ""},//{type: Schema.Types.ObjectId, ref: 'user'},
    title: {type: String, default: ""},
    description: {type: String, default: ""},
    authors: {type: Array, default: []},
    condition: {type: String, default: ""}, // enum: perfect, good, poor
    location: {type: String, default: ""},
    price: {type: Number, default: ""},
    image: {type: String, default: ""}, // image_url
    date_posted: {type: String, default: ""},
    publisher_date: {type: String, default: ""},
    publisher: {type: String, default: ""},
});

module.exports = mongoose.model('book', BookSchema);