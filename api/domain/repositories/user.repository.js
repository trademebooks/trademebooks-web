const UserModel = require('../models/user.model');

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
  let user = new UserModel(userData);
  let userReturn = await user.save(userData);

  return userReturn;
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
  const foundUser = await UserModel.findOne(userData);
  return foundUser;
}

/**
 * 
 * @param {*} id
 * 
 * @returns user
 */
const getUserById = async (id) => {
  const foundUser = await User.findOne({ id });
  return foundUser;
}

module.exports = {
  createUser,
  findUserByEmailAndPassword,
  getUserById
}
