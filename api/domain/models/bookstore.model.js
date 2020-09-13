const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookstoreSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  // username: {
  //   type: String
  // },
  location: {
    type: String
  },
  school: {
    type: String
  }
});

module.exports = mongoose.model('bookstore', BookstoreSchema);
