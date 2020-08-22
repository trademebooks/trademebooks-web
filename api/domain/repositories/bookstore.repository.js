const Model = require('../models/bookstore.model');

// Retrieve - one
const getByUsername = async (username) => {
  return await Model.findByUsername;
}

module.exports = {
  getByUsername
};