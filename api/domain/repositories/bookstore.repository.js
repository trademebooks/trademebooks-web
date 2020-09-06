const Model = require("../models/bookstore.model");

// Retrieve - one
const getByUsername = async (username) => {
  return await Model.findByUsername;
};

// Update
const updateBookstoreById = async (id) => {
  return await Model.findByIdAndUpdate(id);
};

module.exports = {
  getByUsername,
  updateBookstoreById,
};
