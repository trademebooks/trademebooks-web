const bcrypt = require('bcrypt')
const saltRounds = 10

const User = require('../models/user.model')

/**
 *
 * @param {*} user {
 *  - name
 *  - email
 *  - password
 * }
 *
 * @returns user
 */
const createUser = async (userData) => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hashedPassword = await bcrypt.hash(userData.password, salt)

  const newUser = {
    ...userData,
    password: hashedPassword
  }

  const user = await new User(newUser).save()

  return user
}

/**
 *
 * @param {*} user {
 *  - name
 *  - email
 *  - password
 * }
 *
 * @returns user
 */
const findUserByEmailAndPassword = async (userData) => {
  const { email, password } = userData

  const user = await User.findOne({ email })

  if (user) {
    const passwordsMatch = await bcrypt.compare(password, user.password)

    if (passwordsMatch) {
      return user
    }
  }

  return null
}

/**
 *
 * @param {*} user {
 *  - name
 *  - email
 *  - password
 * }
 *
 * @returns user
 */
const updateById = async (userId, data) => {
  const user = await User.updateOne({ _id: userId }, data)
  const updatedUser = await User.findOne({ _id: userId })
  return updatedUser
}
/**
 *
 * @param {*} id
 *
 * @returns user
 */
const getUserById = async (_id) => {
  const foundUser = await User.findOne({ _id })
  return foundUser
}

module.exports = {
  createUser,
  findUserByEmailAndPassword,
  getUserById,
  updateById
}
