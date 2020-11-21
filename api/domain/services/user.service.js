const userRepository = require('../repositories/user.repository')

const updateById = async (userId, data) => {
  const user = await userRepository.updateById(userId, data)
  return user
}

module.exports = {
  updateById
}
