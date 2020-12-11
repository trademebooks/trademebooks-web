const Model = require('../models/book.model')
const userRepository = require('./user.repository')

// Retrieve - all
const getAll = async (searchQuery = '', limit = 10) => {
  const books = await Model.find({
    $or: [
      { title: new RegExp(`.*${searchQuery}.*`, 'i') },
      { description: new RegExp(`.*${searchQuery}.*`, 'i') }
    ]
  })
    .sort({ createdAt: 'desc' })
    .limit(parseInt(limit))

  const getData = async () => {
    const bookWithUsernames = books.map(async (book) => {
      const user = await userRepository.getUserById(book.userId)
      const username = user.username
      return {
        ...book.toJSON(),
        username
      }
    })

    return Promise.all(bookWithUsernames)
  }

  const data = await getData()

  return data
}

// Retrieve - all by userId field
const getAllByUserId = async (userId) => {
  return await Model.find({ userId: userId }).sort({ createdAt: 'desc' })
}

// Retrieve - one
const getById = async (id) => {
  return await Model.findById(id)
}

// Create
const create = async (newBook) => {
  const book = new Model(newBook)
  return await book.save()
}

// Update
const updateById = async (id, book) => {
  return await Model.findByIdAndUpdate(id, book, { new: true })
}

// Delete
const deleteById = async (id) => {
  return await Model.deleteOne({ _id: id })
}

module.exports = {
  getAll,
  getAllByUserId,
  getById,
  create,
  updateById,
  deleteById
}
