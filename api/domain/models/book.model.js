const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  author: {
    type: String
  },
  datePublished: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('book', BookSchema);