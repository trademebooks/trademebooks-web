const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
