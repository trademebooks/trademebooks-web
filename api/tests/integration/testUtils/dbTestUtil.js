const userFactory = require('../testUtils/factories/userFactory')
const bookFactory = require('../testUtils/factories/bookFactory')

const BookModel = require('../../src/domain/models/book.model')
const UserModel = require('../../src/domain/models/user.model')

const setUpDatabase = async () => {
  await BookModel.deleteMany({})
  await UserModel.deleteMany({})

  await userFactory(5)
}

const clearDatabase = async () => {
  await BookModel.deleteMany({})
  await UserModel.deleteMany({})
}

const seeInDatabase = async (Model, item) => {
  let findItem = await Model.findById(item.id)
  return findItem
}

const getAllTableData = async (Model) => {
  return await Model.find({})
}

module.exports = {
  setUpDatabase,
  clearDatabase,
  getAllTableData,
  seeInDatabase
}
