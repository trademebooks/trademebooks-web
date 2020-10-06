const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookstoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('bookstore', BookstoreSchema);
