const AccountModel = require('../models/account.model');

const getById = async (userId) => {
  const account = await AccountModel.findOne({ userId });
  return account;
};

const updateById = async (userId, data) => {
  const account = await AccountModel.updateOne({ userId }, data);
  const updatedAccount = await AccountModel.find({ userId });
  return updatedAccount;
};

module.exports = {
  getById,
  updateById,
};
