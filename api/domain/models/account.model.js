const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  receiveEmail: {
    type: Boolean,
    default: true,
  },
  receiveSms: {
    type: Boolean,
    default: true,
  },
  school: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('account', AccountSchema);
