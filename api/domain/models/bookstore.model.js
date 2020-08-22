const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookstoreSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('bookstore', BookstoreSchema);
