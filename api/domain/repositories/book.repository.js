const Model = require('../models/book.model');

// Retrieve - all
const getAll = async (searchQuery = '') => {
  const books = await Model.find({
    $or: [
      { title: new RegExp(`.*${searchQuery}.*`, 'i') },
      { description: new RegExp(`.*${searchQuery}.*`, 'i') },
    ]
  }).sort({ createdAt: 'desc' });

  return books;
}

// Retrieve - all by userId field
const getAllByUserId = async (userId) => {
  return await Model.find({ userId: userId }).lean().exec();
}

// Retrieve - one
const getById = async (id) => {
  return await Model.findById(id);
}

// Create
const create = async (newBook) => {
  const book = new Model(newBook);
  return await book.save();
}

// Update
const updateById = async (id, book) => {
  return await Model.findByIdAndUpdate(id, book);
}

// Delete
const deleteById = async (id) => {
  return await Model.deleteOne({ _id: id });
}

module.exports = {
  getAll,
  getAllByUserId,
  getById,
  create,
  updateById,
  deleteById
};