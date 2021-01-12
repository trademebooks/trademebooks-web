const accountRepository = require('../repositories/account.repository')

const getById = async (userId) => {
  const account = await accountRepository.getById(userId)
  return account
}

const updateById = async (userId, data) => {
  const account = await accountRepository.updateById(userId, data)
  return account
}

const getAccountByUsername = async (username, data) => {
  const account = await accountRepository.getAccountByUsername(username)
  return account
}

module.exports = {
  getById,
  updateById,
  getAccountByUsername
}
