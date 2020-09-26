const Model = require("../models/bookstore.model");

// Retrieve - one
const getByUsername = async (username) => {
  return await Model.findByUsername;
};

// Update
const updateBookstoreById = async (id, body) => {
  console.log("bookstore repo: ", id);
  // var updatedObj = {username: "", location: "", school: ""};
  return await Model.findByIdAndUpdate(id, body, {new:true});
};

module.exports = {
  getByUsername,
  updateBookstoreById,
};
