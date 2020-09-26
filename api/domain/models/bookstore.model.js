const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookstoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String
  },
  school: {
    type: String
  }
});

module.exports = mongoose.model('bookstore', BookstoreSchema);
