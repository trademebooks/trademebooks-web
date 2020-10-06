const faker = require('faker');
const db = require('../utils/db');
require('../domain/models/account.model');

let accounts = [];

module.exports = async (users) => {
  const dbConnection = await db();
  const Account = dbConnection.model('account');

  await Account.deleteMany({});

  for (const user of users) {
    const account = {
      userId: user._id,
      receiveEmail: true,
      receiveSms: true,
      school: faker.address.streetName(),
      location: faker.address.county(),
    };
    const accountReturnValue = await new Account(account).save();
    accounts.push(accountReturnValue);
  }

  await dbConnection.disconnect();

  return accounts;
};
