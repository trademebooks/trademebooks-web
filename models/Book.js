const mongoose = require('mongoose');

const {Schema} = mongoose;

const Book = new Schema({
        _user: {type: Schema.Types.ObjectId, ref: 'User'},
        title: {type: String},
        description: {type: String},
        authors: {type: Array},
        condition: {type: String},
        location: {type: String},
        price: {type: Number},
        image: {type: String},
        date_posted: {type: String},
    }
);

module.exports = mongoose.model('Book', Book);