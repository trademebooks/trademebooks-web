const mongoose = require('mongoose')
const { Schema } = mongoose

const BookSchema = new Schema({
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
  edition: {
    type: Number
  },
  location: {
    type: String
  },
  authors: {
    type: Array
  },
  datePublished: {
    type: String
  },
  imageUrl: {
    type: String
  },
  condition: {
    type: String
  },
  isbn_10: {
    type: String
  },
  isbn_13: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('book', BookSchema)
